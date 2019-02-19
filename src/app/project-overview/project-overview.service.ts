import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';

import { ProjectInfoContainer, ProjectInfoModule} from './project-info';

/**
 * Used for querying information related to projects or floors.
 */
@Component({
    providers:[Http]
})
export class ProjectsService{

    constructor(private http:Http){}

    GetAllProjectsFloors():Promise<ProjectInfoContainer[]>{

        return this.http.get(environment.apiUrl + "project-floors")
        .toPromise()
        .then((response) => {
            return ProjectInfoModule.SortMapToArray(
                ProjectInfoModule.SortProjectInfoRows(response.json())
            );
        }).catch((err)=> {
            console.log(err);
            return null;
        })

    }

}