import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Group } from 'src/app/core/models/group.models';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groups: Group[] = [
    new Group('Group1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat dolores dolorum officia quidem quia in facilis. Magni, omnis? Eligendi necessitatibus error optio ab impedit inventore, sit quidem maxime aliquam!', 'Public', ['tag1', 'tag2'] ),
    new Group('Group2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat dolores dolorum officia quidem quia in facilis. Magni, omnis? Eligendi necessitatibus error optio ab impedit inventore, sit quidem maxime aliquam!', 'Private', ['tag3', 'tag4']),
    new Group('Group3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat dolores dolorum officia quidem quia in facilis. Magni, omnis? Eligendi necessitatibus error optio ab impedit inventore, sit quidem maxime aliquam!', 'Public', ['tag5', 'tag6'])
  ];
  

  constructor() { }

  getFakeGroupes(): Group []{
    return this.groups

  }

  createGroup(groupData: { groupName: string; groupDescription: string; groupTagList: any; groupType: string; }): Observable<Group> {
    const newGroup: Group = {
      groupName: groupData.groupName,
      groupDescription: groupData.groupDescription,
      groupType: groupData.groupType,
      groupTagList: [...groupData.groupTagList], 
      groupCode: '1234abc' // update to provide a random string 
    };

    // Assuming you might want to add the new group to the existing list
    this.groups.push(newGroup);
     return of(newGroup)
    
  }
}
