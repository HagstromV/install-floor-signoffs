/**
 * Contains all floors for a project, as well as the shared project_id and name
 */
export class ProjectInfoContainer{
    project_id:string;
    projectname:string;
    floors:string[] = new Array<string>();

    /**
     * row needs to be a resultset from project-floors view.
     * @param row 
     */
    constructor(row:any){
        this.project_id = row.project_id;
        this.projectname = row.projectname;
        this.floors.push(row.floor);
    }
}

/**
 * Contains functions for sorting ProjectInfo rows
 */
export module ProjectInfoModule{

    /**
     * Returns a map of all projectinfoContainers with the project_id as the key.
     * @param rows 
     */
    export function SortProjectInfoRows(rows:any[]):Map<string, ProjectInfoContainer>{
        let info:Map<string, ProjectInfoContainer> = new Map<string, ProjectInfoContainer>();
        for(let row of rows){
            //Very strangely, this single command lines only work when I put the the block brackets in place
            if(info.has(row.project_id)  ){
                if(!info.get(row.project_id).floors.includes(row.floor)){
                   info.get(row.project_id).floors.push(row.floor); 
                }
            }else
                info.set(row.project_id, new ProjectInfoContainer(row));
        }

        return info;

    }

    export function SortMapToArray(info:Map<string, ProjectInfoContainer>):ProjectInfoContainer[]{
        let infoArray:ProjectInfoContainer[] = new Array<ProjectInfoContainer>();

        info.forEach((container, project_id, m) => {
            infoArray.push(container);
        })

        return infoArray;

    }

}