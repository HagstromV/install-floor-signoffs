import { Component, OnInit, Input, Output } from '@angular/core';

import { ProjectInfoContainer } from '../project-overview/project-info';
import { SingleProjectService } from './single-project.service';
import { FloorFramesComponent } from '../floor-frames/floor-frames.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

/**
 * A component used strictly for holding the floors of a project. 
 * Can open a floor-frames dialog.
 */
@Component({
  selector: 'single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css'],
  providers:[SingleProjectService]
})
export class SingleProjectComponent implements OnInit {

  showFloors:boolean = false;
  @Input() projectInfo:ProjectInfoContainer = null;

  constructor(private service:SingleProjectService, public dialog:MatDialog) { }

  ngOnInit() {
  }

  ShowFloors():void{
    this.showFloors = !this.showFloors;
  }

  ShowFrames(floor:string):void{
    const dialogRef = this.dialog.open(FloorFramesComponent, {
      width:'600px',
      data:{floor:floor, projectInfo:this.projectInfo}
    })
  }
}
