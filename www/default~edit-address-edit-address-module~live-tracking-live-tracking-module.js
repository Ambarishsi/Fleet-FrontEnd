(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-address-edit-address-module~live-tracking-live-tracking-module"],{

/***/ "0Jnz":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/map-modal/map-modal.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Pick Location</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">Cancel</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"map\" #map></div>\n</ion-content>\n");

/***/ }),

/***/ "0elN":
/*!******************************************************************************!*\
  !*** ./src/app/shared/picker/location-picker/location-picker.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alert-wrapper {\n  background: #e5e5e5;\n}\n\n.edit-address {\n  float: right;\n  cursor: pointer;\n}\n\n.alertstyle {\n  width: 100%;\n  margin-top: 1rem;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9jYXRpb24tcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImxvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG59XHJcblxyXG4uZWRpdC1hZGRyZXNze1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hbGVydHN0eWxle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "9Uo9":
/*!*********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.ts ***!
  \*********************************************************/
/*! exports provided: MapModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModalComponent", function() { return MapModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map-modal.component.html */ "0Jnz");
/* harmony import */ var _map_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-modal.component.scss */ "lxOC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");






let MapModalComponent = class MapModalComponent {
    constructor(modalcntrl, renderer) {
        this.modalcntrl = modalcntrl;
        this.renderer = renderer;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.getGoogleMaps()
            .then(googleMaps => {
            const mapEl = this.mapElementRef.nativeElement;
            const map = new googleMaps.Map(mapEl, {
                center: {
                    lat: 13.0676,
                    lng: 77.5044
                },
                zoom: 16
            });
            googleMaps.event.addListenerOnce(map, 'idle', () => {
                this.renderer.addClass(mapEl, 'visible');
            });
            map.addListener('click', event => {
                const selectedCoords = {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng()
                };
                this.modalcntrl.dismiss(selectedCoords);
            });
        })
            .catch(err => {
            console.log('err', err);
        });
    }
    onCancel() {
        this.modalcntrl.dismiss();
    }
    getGoogleMaps() {
        const win = window;
        const googleModule = win.google;
        if (googleModule && googleModule.maps) {
            return Promise.resolve(googleModule.maps);
        }
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].YOUR_API_KEY;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = () => {
                const loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    resolve(loadedGoogleModule.maps);
                }
                else {
                    reject('Map not loaded');
                }
            };
        });
    }
};
MapModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
MapModalComponent.propDecorators = {
    mapElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map',] }]
};
MapModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-map-modal',
        template: _raw_loader_map_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MapModalComponent);



/***/ }),

/***/ "AEr0":
/*!****************************************************************************!*\
  !*** ./src/app/shared/picker/location-picker/location-picker.component.ts ***!
  \****************************************************************************/
/*! exports provided: LocationPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPickerComponent", function() { return LocationPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_location_picker_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./location-picker.component.html */ "HsIV");
/* harmony import */ var _location_picker_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-picker.component.scss */ "0elN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../map-modal/map-modal.component */ "9Uo9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _services_profile_passdataprofile_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/profile/passdataprofile.service */ "S4JI");











let LocationPickerComponent = class LocationPickerComponent {
    constructor(modalctrl, http, geolocation, actionSheetController, alertController, passdataprofileServiceEditAddress) {
        this.modalctrl = modalctrl;
        this.http = http;
        this.geolocation = geolocation;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.passdataprofileServiceEditAddress = passdataprofileServiceEditAddress;
        this.showLatLong = false;
    }
    ngOnInit() {
        this.passdataprofileServiceEditAddress.on().subscribe(data => {
            this.userAddress = data.data;
        });
    }
    onPickLocation() {
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
            ]
        })
            .then(actionSheetEl => {
            actionSheetEl.present();
        });
    }
    getAutoLatLong() {
        this.geolocation.getCurrentPosition({
            timeout: 10000,
            enableHighAccuracy: true
        })
            .then((res) => {
            const coordinates = {
                lat: res.coords.latitude,
                lng: res.coords.longitude
            };
            this.showAlertMessage('Your Lat-long is: ', `Lat: ${coordinates.lat},` + `<br>` + `
       Long: ${coordinates.lng}`, coordinates);
        })
            .catch((e) => {
            this.showAlertMessage('Error Occured While Auto Locating', 'Please Use the map to pick a location', null);
            console.log('err occured while autolocating', e);
        });
    }
    showAlertMessage(headerContent, messageContent, passedCoord) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: headerContent,
                message: messageContent,
                buttons: [
                    {
                        text: 'Okay',
                        handler: () => {
                            if (passedCoord != null) {
                                this.selectedLat = passedCoord.lat;
                                this.selectedLong = passedCoord.lng;
                                this.showLatLong = true;
                            }
                        }
                    }
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
    openGoogleMap() {
        this.modalctrl.create({
            component: _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_6__["MapModalComponent"]
        }).then(modalEl => {
            modalEl.onDidDismiss().then(modalres => {
                if (!modalres.data) {
                    return;
                }
                const pickedLocation = {
                    lat: modalres.data.lat,
                    lng: modalres.data.lng,
                    address: null,
                };
                this.getAddress(modalres.data.lat, modalres.data.lng).subscribe(address => {
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
    getAddress(lat, lng) {
        return this.http
            .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].YOUR_API_KEY}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(geoData => {
            if (!geoData || !geoData.results || geoData.results.length === 0) {
                return null;
            }
            return geoData.results[0].formatted_address;
        }));
    }
};
LocationPickerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_profile_passdataprofile_service__WEBPACK_IMPORTED_MODULE_10__["PassdataprofileService"] }
];
LocationPickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-location-picker',
        template: _raw_loader_location_picker_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_location_picker_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LocationPickerComponent);



/***/ }),

/***/ "HsIV":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/picker/location-picker/location-picker.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n  <ion-item lines=\"none\">\n    <div class=\"alert alert-primary alertstyle\" role=\"alert\">\n      <strong><small class=\"small\">Current Pickup Address: </small></strong><br>\n        {{userAddress.pickUpAddress}}\n        <ion-icon (click)=\"onPickLocation()\" class=\"edit-address\" name=\"pencil\"></ion-icon>\n    </div>\n  </ion-item>\n</ion-list>\n\n<ion-card color=\"tertiary\" *ngIf=\"selectedLocationAddress\">\n  <ion-card-header>\n    <ion-card-subtitle>You picked Address: </ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n    {{ selectedLocationAddress }}\n  </ion-card-content>\n</ion-card>\n\n<ion-card color=\"warning\" *ngIf=\"showLatLong\">\n  <ion-card-header>\n    <ion-card-subtitle>Lat Long: </ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n    Latitude: {{ selectedLat }}\n    <br>\n    Longitude: {{ selectedLong }}\n  </ion-card-content>\n</ion-card>\n\n<ion-button *ngIf=\"selectedLocationAddress\" expand=\"block\">\n  <ion-icon name=\"save\" slot=\"start\"></ion-icon>\n  <ion-label>\n    Change Address\n  </ion-label>\n</ion-button>\n\n\n\n\n");

/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _picker_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picker/location-picker/location-picker.component */ "AEr0");
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-modal/map-modal.component */ "9Uo9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _picker_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_2__["LocationPickerComponent"],
            _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__["MapModalComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]
        ],
        exports: [_picker_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_2__["LocationPickerComponent"],
            _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__["MapModalComponent"]
        ],
        entryComponents: [_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__["MapModalComponent"]]
    })
], SharedModule);



/***/ }),

/***/ "lxOC":
/*!***********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n\n.map.visible {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYXAtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJtYXAtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbi5tYXAudmlzaWJsZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=default~edit-address-edit-address-module~live-tracking-live-tracking-module.js.map