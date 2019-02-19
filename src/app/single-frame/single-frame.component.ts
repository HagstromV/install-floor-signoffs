import { Component, Input, OnInit } from '@angular/core';

import { FrameService } from './single-frame.service';
import { FloorFrames } from '../floor-frames/floor-frames';
import { FrameStatus } from './frame-status';

@Component({
  selector: 'single-frame',
  templateUrl: './single-frame.component.html',
  styleUrls: ['./single-frame.component.css'],
  providers:[FrameService]
})
export class SingleFrameComponent implements OnInit {

  @Input('frame') frame:FloorFrames; 
  prepStatuses:boolean[] = [];
  installStatuses:boolean[] = [];
  suOption:number = -1;
  frameStatus:FrameStatus = new FrameStatus();
  
  constructor(private service:FrameService) { }

  ngOnInit() {

    this.SetStatusesIn(this.frame);
  }

  GetTag():string{
    return this.frame.GetTagFromSpecialInstruction();
  }

  /**
   * Sets the prep, install, and su statuses of the component.
   * @param frame Frame to read from
   */
  SetStatusesIn(frame:FloorFrames):void{
    if(frame == null) return;

    this.frameStatus.prepStatuses.forEach((value,index,array) => {
      this.prepStatuses.push((Math.pow(2,value.bit) & frame.prepStatus) > 0);
    })

    this.frameStatus.installationStatuses.forEach((value, index, array) => {
      this.installStatuses.push((Math.pow(2, value.bit) & frame.installationStatus) > 0);
    })

    this.suOption = frame.suStatus;

  }

  test(){
    console.log(this.suOption);
  }

  /**
   * Sets the parametrized frames statuses to the prep, install, and su statuses in the component
   * @param frame This frame will be modified with the component statuses
   */
  SetStatusesOut(frame:FloorFrames):void{
    let prepStatus:number = 0;
    let installStatus:number = 0;

    this.prepStatuses.forEach((isTrue, index, array) => {
      if(isTrue)
        prepStatus += (Math.pow(2,index));
    })

    this.installStatuses.forEach((isTrue, index, array) => {
      if(isTrue)
        installStatus += (Math.pow(2, index));
    })

    frame.prepStatus = prepStatus;
    frame.installationStatus = installStatus;
    frame.suStatus = this.suOption;

  }

  UpsertStatus():void{
    var upFrame:FloorFrames = new FloorFrames(this.frame);

    this.SetStatusesOut(upFrame);

    this.service.UpsertFrame(upFrame)
    .then(response => {
      prompt("Success!");
      this.SetStatusesIn(upFrame);
    }).catch(err => {
      console.log(err);
    })

  }

}
