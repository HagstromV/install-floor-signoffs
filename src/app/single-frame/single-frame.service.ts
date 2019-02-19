import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { FloorFrames } from '../floor-frames/floor-frames';
import { environment } from '../../environments/environment';

@Component({
    providers:[Http]
})
export class FrameService{

    constructor(private http:Http){}

    UpsertFrame(frame:FloorFrames):Promise<any>{

        return this.http.post(environment.apiUrl + "frame-signoffs/upsertFrame",{
            order:frame.ordernumber, box:frame.boxnumber, 
            prepStat:frame.prepStatus, installStat:frame.installationStatus,
            suStat:frame.suStatus
        })
        .toPromise()
        .then( response => {
            let newFrame:any = response.json();
            console.log(response.json());
        }).catch(err => {
            console.log(err);
        })

    }

}