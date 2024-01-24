export class Group {


    groupName! : string;
    groupDescription! : string;
    groupType!: string;
    groupTagList! : string[];
    groupCode!: string
    // allMembersCount! :  number;
    // groupOwner!: string;
    // groupMembers!: string[]; 
    // groupImage!: string;
    

    constructor(name: string , description: string , type : string, tagList: string[]){
        this.groupName = name;
        this.groupDescription = description;
        this.groupType = type;
        this.groupTagList = tagList;
    }


}