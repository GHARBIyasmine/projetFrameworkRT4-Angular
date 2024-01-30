import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Group } from 'src/app/core/models/group.models';
import { AvatarGeneratorService } from 'src/app/core/services/avatar-generator.service';
import { ViewDetailsComponent } from '../view-details/view-details.component';

@Component({
  selector: 'app-explore-cards',
  templateUrl: './explore-cards.component.html',
  styleUrls: ['./explore-cards.component.css']
})
export class ExploreCardsComponent implements OnInit{

  @Input()group!: Group;

 groupInitials='';
   constructor(
    private avatarGeneratorService: AvatarGeneratorService,
    public detailsDialog: MatDialog,
   ){}

   ngOnInit(): void {
    console.log(this.group.groupName)
    this.groupInitials= this.avatarGeneratorService.generateInitials(this.group.groupName);
   }

   onJoin() {
    console.log('join clicked')
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
