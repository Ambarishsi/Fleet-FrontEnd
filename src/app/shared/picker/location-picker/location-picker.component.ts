import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { MapModalComponent } from '../../map-modal/map-modal.component';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Coordinates, PlaceLocation } from '../../../edit-address/location.model';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PassdataprofileService } from '../../../../services/profile/passdataprofile.service';


@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})

export class LocationPickerComponent implements OnInit {

  selectedLocationAddress: string;
  selectedLat: number;
  selectedLong: number;
  showLatLong = false;
  userAddress;

  constructor(
    private modalctrl: ModalController,
    private http: HttpClient,
    private geolocation: Geolocation,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private passdataprofileServiceEditAddress: PassdataprofileService) { }

  ngOnInit() {
    this.passdataprofileServiceEditAddress.on<any>().subscribe(
      data => {
        this.userAddress = data.data;
      }
    );
  }

  onPickLocation(){
    this.actionSheetController.create({
      header: 'Please Choose',
      cssClass: 'my-custom-action-sheet',
      buttons: [
      {
        text: 'Auto-Locate Me',
        icon: 'locate',
        cssClass: 'locate',
        handler: () => {
          this.getAutoLatLong();
        }
      },
      {
        text: 'Pick on map',
        icon: 'map',
        cssClass: 'map',
        handler: () => {
          this.openGoogleMap();
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        cssClass: 'cancel',
        role: 'cancel'
      }
    ],
    backdropDismiss: false
  })
  .then(actionSheetEl =>{
    actionSheetEl.present();
  });

  }

  private getAutoLatLong() {
    this.geolocation.getCurrentPosition({
      timeout: 4000,
      enableHighAccuracy: true
    })
    .then((res) => {
      const coordinates: Coordinates = {
        lat: res.coords.latitude,
        lng:  res.coords.longitude
      };
      this.showAlertMessage(
      'Your Lat-long is: ',
      `Lat: ${coordinates.lat},`+`<br>`+`
       Long: ${coordinates.lng}`,
       coordinates
      );
    })
    .catch((e) => {
      this.showAlertMessage(
      'Error Occured While Auto Locating',
      'Please Use the map to pick a location',
      null
      );
      console.log('err occured while autolocating', e);
    });
  }

  private async showAlertMessage(headerContent: string, messageContent: string, passedCoord: Coordinates){
    const alert = await this.alertController.create({
      header: headerContent,
      message: messageContent,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
              if(passedCoord!= null){
                this.selectedLat = passedCoord.lat;
                this.selectedLong = passedCoord.lng;
                this.showLatLong = true;
              }
            }
        }
      ],
      backdropDismiss: false
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

  }

  private openGoogleMap() {
    this.modalctrl.create({
      component: MapModalComponent
    }).then(modalEl => {
      modalEl.onDidDismiss().then(modalres => {
        if(!modalres.data){
          return;
        }

        const pickedLocation: PlaceLocation = {
          lat: modalres.data.lat,
          lng: modalres.data.lng,
          address: null,
        };

        this.getAddress(modalres.data.lat, modalres.data.lng).subscribe(address =>{
          pickedLocation.address = address;
          this.selectedLocationAddress = address;
          this.selectedLat = modalres.data.lat;
          this.selectedLong = modalres.data.lng;
          this.showLatLong = true;
        });
      });
      modalEl.present();
    });
  }

  private getAddress(lat: number, lng: number) {
   return this.http
    .get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.YOUR_API_KEY}`
    ).pipe(map(geoData => {
      if(!geoData || !geoData.results || geoData.results.length === 0){
        return null;
      }
      return geoData.results[0].formatted_address;
    }));
  }



}
