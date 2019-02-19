export class FrameStatus{

    prepStatuses = [
        {for:"Angle", bit:0}, 
        {for:"Membrane", bit:1}, 
        {for:"Deflection header", bit:2}
    ]

    installationStatuses = [
        {for:"Beauty cap", bit:0},
        {for:"Air seal", bit:1}
    ]

    /**
     * This is essentially for radio buttons, so we dont really need any metadata
     */
    suOptions = [
        {label:"Good", status:0}, 
        {label:"Broken", status:1}, 
        {label:"Scratched", status:2}
    ]
}