import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';
import { FloorFrames } from './floor-frames';

@Component({
    providers:[Http]
})
export class FloorFramesService{
    constructor(private http:Http){}

    GetFloorFrames(project_id:string, floor:string):Promise<FloorFrames[]>{

        let filter = {
            filter:{
                where:{
                    and:[
                        {project_id:project_id},
                        {floor:floor}
                    ]
                }
            }
        };

        return this.http.get(environment.apiUrl + 'frame-signoff-views',
        {params:filter})
        .toPromise()
        .then( response => {

            let frames:FloorFrames[] = new Array<FloorFrames>();

            response.json().forEach(element => {
                frames.push(new FloorFrames(element));
            });

            return frames;
        })
    }
}