import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Group } from 'src/app/core/models/group.models';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {
onJoin() {
throw new Error('Method not implemented.');
}
 group!: Group;
 groupInitials: string =''

  constructor(public dialogRef: MatDialogRef<ViewDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {group: Group ; groupInitials: string}
   ) {
      this.group= data.group;
      this.groupInitials=data.groupInitials
   }
  close(): void {
    this.dialogRef.close();
  }
}
