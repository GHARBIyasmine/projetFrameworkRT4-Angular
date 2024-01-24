import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent {
  formData = {
    groupName: '',
    description: '',
    tags: '',
    groupType: 'public', 
  };

  constructor(public dialogRef: MatDialogRef<CreateGroupComponent>,
    private groupService: GroupService) {}

  submitForm(form: NgForm): void {
    if (form.valid) {
      console.log(this.formData.groupType);
      const newGroup = {
        groupName: this.formData.groupName,
        groupDescription: this.formData.description,
        groupType: this.formData.groupType,
        groupTagList: this.formData.tags.split(',').map(tag => tag.trim()), 
         
      };

      this.groupService.createGroup(newGroup).subscribe(
        (createdGroup) => {
          console.log('Group created successfully:', createdGroup);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error creating group:', error);
        }
      );
    }
    }
  


  handleUploadClick(): void {
    // Your file upload logic goes here
  }

  close(): void {
    // Close the dialog when the close button is clicked
    this.dialogRef.close();
  }
}
