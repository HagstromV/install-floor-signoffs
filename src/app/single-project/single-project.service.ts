import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';

@Component({
    providers:[Http]
})
export class SingleProjectService{

    constructor(private http:Http){}

    GetFramesForProjectFloor(project_id:string, floor:string): Promise<any[]>{
        let filter = {
            filter:{
                where:{
                    and:[
                        {
                            project_id:project_id
                        },
                        {
                            floor:floor
                        }
                    ]
                }
            }
        };

        return this.http.get(environment.apiUrl + 'floor-frames', {params:filter}
         
            )
            .toPromise()
            .then( response => {
                return response.json();
            }).catch( err => {
                console.log(err);
                return null;
            }
        );
    }


}