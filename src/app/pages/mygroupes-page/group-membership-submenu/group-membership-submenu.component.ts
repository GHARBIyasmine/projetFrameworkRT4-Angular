import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { JoinGroupComponent } from '../add-group/join-group/join-group.component';
import { CreateGroupComponent } from '../add-group/create-group/create-group.component';

@Component({
  selector: 'app-group-membership-submenu',
  templateUrl: './group-membership-submenu.component.html',
  styleUrls: ['./group-membership-submenu.component.css']
})
export class GroupMembershipSubmenuComponent {
  
  isJoinGroupPopUpOpen : boolean = false;
  isCreateGroupPopUpOpen : boolean = false;

  constructor(public joinDialog: MatDialog, 
              public createDialog: MatDialog) {}

  onJoinClick(): void{
    const joinDialogConfig = new MatDialogConfig();

    joinDialogConfig.disableClose = true;
    joinDialogConfig.autoFocus = true;
    joinDialogConfig.hasBackdrop = true;
    joinDialogConfig.height = '450px';
    joinDialogConfig.width = '500px';

    this.joinDialog.open(JoinGroupComponent, joinDialogConfig);
  }

  onCreateClick(): void{
    const createDialogConfig = new MatDialogConfig();

    createDialogConfig.disableClose = false;
    createDialogConfig.autoFocus = true;
    createDialogConfig.hasBackdrop = true;
    createDialogConfig.height = '600px';
    createDialogConfig.width = '800px';

    this.joinDialog.open(CreateGroupComponent, createDialogConfig);


  }
}
