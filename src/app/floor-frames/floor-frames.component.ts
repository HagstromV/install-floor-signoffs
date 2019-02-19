import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FloorFrames } from './floor-frames'; 
import { ProjectInfoContainer } from '../project-overview/project-info';
import { FloorFramesService } from './floor-frames.service';


@Component({
  selector: 'app-floor-frames',
  templateUrl: './floor-frames.component.html',
  styleUrls: ['./floor-frames.component.css'],
  providers:[FloorFramesService]
})
export class FloorFramesComponent implements OnInit {

  frames:FloorFrames[];
  floor:string;
  projectInfo:ProjectInfoContainer;
  errorMessage:string = null;

  /**
   * [{ordernumber:number, frames:FloorFrames[]},...]
   */
  ordernumberFrames:any;

  constructor(public dialogref:MatDialogRef<FloorFramesComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any, private service:FloorFramesService) {
    this.floor = data.floor;
    this.projectInfo = data.projectInfo;
   }

  ngOnInit() {
    this.GetFloorFrames();
  }

  /**
   * Gets frames based on this.projectInfo and this.floor. 
   * If either of these are null in the component, will return without further execution.
   */
  GetFloorFrames():void{
    if(this.projectInfo == null || this.floor == null){
      this.errorMessage = "No projectInfo or floor.";
      return;
    }

   this.service.GetFloorFrames(this.projectInfo.project_id, this.floor)
    .then(frames => {
      let tempFrame:any[] = this.SeparateOrderNumbers(frames);
      tempFrame.forEach((value, index, array) => {
        this.FillMissingBoxNumbers(value.frames);
        value.frames = value.frames.filter((value,index,array)=>{
          return value.boxnumber != null;
        });
        value.frames.sort((a,b) => {
          return a.boxnumber - b.boxnumber;
        });
      })
      this.ordernumberFrames = tempFrame;
      this.frames = frames;
    }).catch(err => {
      this.errorMessage = err;
    })

  }

  /**
   * Returns an array like [{ordernumber,frames, display},...]
   * Sorts frames out based on ordernumber.
   * @param frames 
   * An array of FloorFrames with or without multiple ordernumbers.
   */
  SeparateOrderNumbers(frames:FloorFrames[]):any[] {
    let ordernumberMap:Map<number, FloorFrames[]> = new Map<number, FloorFrames[]>();
    let ordernumberFrames:any[] = [];
    frames.forEach((frame,index,array) => {
      if(ordernumberMap.has(frame.ordernumber))
        ordernumberMap.get(frame.ordernumber).push(frame);
      else{
        let floorFramesArray:FloorFrames[] = new Array<FloorFrames>();
        floorFramesArray.push(frame);
        ordernumberMap.set(
          frame.ordernumber,
          floorFramesArray
        );
      }
    });

    ordernumberMap.forEach((frame,ordernumber,map) => {
      ordernumberFrames.push({
        ordernumber:ordernumber,
        frames:frame
      })
    })

    return ordernumberFrames;

  }

  /**
   * This function will fill in any missing boxnumbers from a FloorFrames[] array.
   * @param frames 
   * Will fill boxnumbers based on the first elements framenumberto and framenumberfrom
   */
  FillMissingBoxNumbers(frames:FloorFrames[]):void{
    let numTo:number = frames[0].framenumberto;
    let numFrom:number = frames[0].framenumberfrom;
    let weHave:number[] = new Array<number>();

    frames.forEach((v, i, a) => {
      if(v.boxnumber != null)
        weHave.push(v.boxnumber);
    })

    for(let i = numFrom ; i <= numTo ; ++i){
      if(!weHave.includes(i)){
        let newFrame = new FloorFrames(frames[0],true);
        newFrame.Setboxnumber(i);
        frames.push(newFrame);
      }
    }

  }



}
