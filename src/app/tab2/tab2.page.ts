import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';
import { fromEvent } from 'rxjs';
import { takeWhile } from 'rxjs/operators';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy{

  currentSegmentValue = 'Active';
  alive = true;

  constructor(
    ) {}

  ngOnInit() {
    const hammerConfig = new HammerGestureConfig();
    const hammer=hammerConfig.buildHammer(document.documentElement);
    fromEvent(hammer, 'swipe').pipe(
      takeWhile(()=>this.alive))
      .subscribe((res: any) => {
        this.ambarishCaptureGesture(res.deltaX<0?'left':'rigth');
    });
  }

  ambarishCaptureGesture(gestures: string){
    if(gestures === 'left'){
      this.currentSegmentValue = 'Active';
    }else{
      this.currentSegmentValue = 'Schedules';
    }
  }
//write function for capturing swipe gesture and changinng currentSegmentValue
  ngOnDestroy()
  {
    this.alive=false;
  }



  segmentChanged(ev: any) {
    this.currentSegmentValue = ev.detail.value;
    console.log('Segment changed', this.currentSegmentValue);
  }




}
