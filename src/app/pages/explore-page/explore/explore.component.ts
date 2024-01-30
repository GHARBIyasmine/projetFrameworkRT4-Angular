import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/core/models/group.models';
import { GroupService } from 'src/app/core/services/group.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  
  publicGroups: Group[] =[];

  constructor(
    private groupService: GroupService
  ){}

      ngOnInit(): void {
        this.publicGroups= this.groupService.getPublicGroups()
      }
 
}
