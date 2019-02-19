import { Component, OnInit } from '@angular/core';

import { ProjectsService } from './project-overview.service';
import { ProjectInfoContainer } from './project-info';
import { SingleProjectComponent } from '../single-project/single-project.component';


@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css'],
  providers:[ProjectsService]
})
export class ProjectOverview implements OnInit {

  constructor(private service:ProjectsService) { }

  ProjectFloors:ProjectInfoContainer[] = new Array<ProjectInfoContainer>();
  accordionData:any[] = new Array<any>();

  ngOnInit() {

    this.service.GetAllProjectsFloors()
    .then((projectInfo => {
      this.ProjectFloors = projectInfo;
    }))

  }

}
