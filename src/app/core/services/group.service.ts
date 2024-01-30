import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Group } from 'src/app/core/models/group.models';
import { GroupType } from 'src/app/core/models/groupType.model';
import { Person } from 'src/app/core/models/person';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  

  private groups: Group[] = [
    new Group(1,'Group1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat dolores dolorum officia quidem quia in facilis. Magni, omnis? Eligendi necessitatibus error optio ab impedit inventore, sit quidem maxime aliquam!', GroupType.PUBLIC, ['tag1', 'tag2'], '1234',new Person('josh')),
    new Group(2,'Group2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat dolores dolorum officia quidem quia in facilis. Magni, omnis? Eligendi necessitatibus error optio ab impedit inventore, sit quidem maxime aliquam!', GroupType.PRIVATE, ['tag3', 'tag4'], '1234',new Person('wendy')),
    new Group(3,'Group3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat dolores dolorum officia quidem quia in facilis. Magni, omnis? Eligendi necessitatibus error optio ab impedit inventore, sit quidem maxime aliquam!', GroupType.PUBLIC, ['tag5', 'tag6'], '1234',new Person('mike'))
  ];
  

  constructor() { }

  getFakeGroupes(): Group []{
    return this.groups

  }

  createGroup(groupData: { groupName: string; groupDescription: string; groupTagList: any; groupType: string; }): Observable<Group> {
    const newGroup: Group = {
      groupid: this.groups[this.groups.length -1 ].groupid +1,
      groupName: groupData.groupName,
      groupDescription: groupData.groupDescription,
      groupType: groupData.groupType,
      groupTagList: [...groupData.groupTagList], 
      groupCode: '1234abc',
      groupOwner: new Person('lola')
    };

    // Assuming you might want to add the new group to the existing list
    this.groups.push(newGroup);
     return of(newGroup)
    
  }

  getPublicGroups(): Group[] {
    return this.groups.filter(group => group.groupType === GroupType.PUBLIC);
  }
  
}
