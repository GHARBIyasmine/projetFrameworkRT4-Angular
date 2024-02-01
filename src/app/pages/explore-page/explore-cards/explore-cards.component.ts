import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Group, group } from 'src/app/core/models/group.models';
import { AvatarGeneratorService } from 'src/app/core/services/avatar-generator.service';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { GroupService } from 'src/app/core/services/group.service';

@Component({
  selector: 'app-explore-cards',
  templateUrl: './explore-cards.component.html',
  styleUrls: ['./explore-cards.component.css']
})
export class ExploreCardsComponent implements OnInit{

  @Input()group!: group;

 groupInitials='';
   constructor(
    private avatarGeneratorService: AvatarGeneratorService,
    private detailsDialog: MatDialog,
    private groupService : GroupService
   ){}

   ngOnInit(): void {
    console.log(this.group.name)
    console.log(this.group.tags)
    this.groupInitials= this.avatarGeneratorService.generateInitials(this.group.name);
   }

   onJoin() {
    this.groupService.joinPublicGroup(this.group.id).subscribe()
    }
    onViewDetails() {

      const detailsDialogConfig = new MatDialogConfig();

      detailsDialogConfig.disableClose = false;
      detailsDialogConfig.autoFocus = true;
      detailsDialogConfig.hasBackdrop = true;
      detailsDialogConfig.height = '550px';
      detailsDialogConfig.width = '550px';
      detailsDialogConfig.data={
        group: this.group,
        groupInitials: this.groupInitials
      }

    this.detailsDialog.open(ViewDetailsComponent, detailsDialogConfig);
      
    }
 
}
