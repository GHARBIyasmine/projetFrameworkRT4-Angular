import { Component } from '@angular/core';
import { GroupService } from 'src/app/core/services/group.service';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent {
  isSettingsSubmenuActive: boolean = false

  constructor( 
    
    private groupService : GroupService,
    
    ){

    
  }
  clickedOutside(){
    this.isSettingsSubmenuActive = false
  }
  onLeaveGroup(){
    // this.groupService.leaveGroup(this.group.id).subscribe()
  }

  toggleSettingsSubmenu(){
    this.isSettingsSubmenuActive = !this.isSettingsSubmenuActive
  }
}
