import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Group, group } from 'src/app/core/models/group.models';
import { GroupService } from 'src/app/core/services/group.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  
  publicGroups: group[] =[];

  constructor(
    private groupService: GroupService,
    private toaster : ToastrService

  ){}

      ngOnInit(): void {
        this.groupService.getPublicGroupsWhereUserNotPartOf().subscribe({
          next: (groups)=>{
            this.publicGroups= groups
          },
          error: (error)=>{
    
            this.toaster.error('Problem : Access failed to API:( ')
          }
        }
        )
      }
 
}
