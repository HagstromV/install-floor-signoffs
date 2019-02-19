
export class FloorFrames{
    exteriorcolor:string;
    floor:string;
    framenumberfrom:number;
    framenumberto:number;
    frameseries:string;
    heelheight:number;
    heelwidth:number;
    interiorcolor:string;
    ordernumber:number;
    project_id:string;
    quantity:number;
    specialinstruction:string;
    boxnumber:number;
    prepStatus:number;
    installationStatus:number;
    suStatus:number;


    /**
     * Parses the special instruction field for the tag. We are assuming that a tag
     * is a string of characters unbroken by a space.
     * This cannot directly be called from an angular html template, 
     * an intermediate function which calls this function will need to be used.
     */
    GetTagFromSpecialInstruction():string{
        return this.specialinstruction.slice(0,
            this.specialinstruction.search(' ')
        ).replace('TAG:','');
    }

    constructor(datarow:any, zero:boolean = false){
        this.exteriorcolor = datarow.exteriorcolor;
        this.floor = datarow.floor;
        this.framenumberfrom = datarow.framenumberfrom;
        this.framenumberto = datarow.framenumberto;
        this.frameseries = datarow.frameseries;
        this.heelheight = datarow.heelheight;
        this.heelwidth = datarow.heelwidth;
        this.interiorcolor = datarow.interiorcolor;
        this.ordernumber = datarow.ordernumber;
        this.project_id = datarow.project_id;
        this.quantity = datarow.quantity;
        this.specialinstruction = datarow.specialinstruction;
        this.boxnumber = datarow.boxnumber;

        if(zero || datarow.prepStatus == null)
            this.prepStatus = 0;
        else
            this.prepStatus = datarow.prepStatus;

        if(zero || datarow.installationStatus == null)
            this.installationStatus = 0;
        else
            this.installationStatus = datarow.installationStatus;

        if(zero || datarow.suStatus == null)
            this.suStatus = 0;
        else
            this.suStatus = datarow.suStatus;

    }

    Setboxnumber(box:number):FloorFrames{
        this.boxnumber = box;
        return this;
    }
    
}