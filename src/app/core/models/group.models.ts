import { TagComponent } from "src/app/shared/components/tag/tag.component";
import { GroupType } from "./groupType.model";
import { Tag } from "src/app/pages/mygroupes-page/add-group/models/tags.model";

export class Group {

    constructor(
        public groupid: number,
        public groupName : string,
        public groupDescription : string,
        public groupType: string,
        public groupTagList : string[],
        public groupCode: string,
        // public groupOwner: Person,

    ){
        
    }


}

export interface NewGroupDto {
    name : string 
    description : string 
    type: string 
    tags : Tag[]
}