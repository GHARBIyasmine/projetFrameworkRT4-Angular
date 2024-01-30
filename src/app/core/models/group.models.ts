import { GroupType } from "./groupType.model";
import { Person } from "./person";

export class Group {

    constructor(
        public groupid: number,
        public groupName : string,
        public groupDescription : string,
        public groupType: string,
        public groupTagList : string[],
        public groupCode: string,
        public groupOwner: Person,

    ){
        
    }


}