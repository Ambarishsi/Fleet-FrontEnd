import { Component, OnDestroy, OnInit } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { fromEvent } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy{

  currentSegmentValue = 'Active';
  alive = true;

  constructor(
    ) {}

  ngOnInit() {
    const hammerConfig = new HammerGestureConfig();
    this.currentSegmentValue = 'Revision';
    const hammer=hammerConfig.buildHammer(document.documentElement);
    fromEvent(hammer, 'swipe').pipe(
      takeWhile(()=>this.alive))
      .subscribe((res: any) => {
        this.gestureCapture(res.deltaX<0?'left':'rigth');
    });
  }

  gestureCapture(gestures: string){
    if(gestures === 'left'){
      this.currentSegmentValue = 'Revision';
    }else{
      this.currentSegmentValue = 'Future';
    }
  }
//write function for capturing swipe gesture and changinng currentSegmentValue
  ngOnDestroy()
  {
    this.alive=false;
  }



  segmentChanged(ev: any) {
    this.currentSegmentValue = ev.detail.value;
  }




}
