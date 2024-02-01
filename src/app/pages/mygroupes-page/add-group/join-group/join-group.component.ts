import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GroupService } from 'src/app/core/services/group.service';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent {

  constructor(
    private popUpRef: MatDialogRef<JoinGroupComponent>,
    private groupService: GroupService) {}

  formData = {
    code: '',
  };

  submitForm(form : NgForm) {
    this.groupService.joinGroupByCode(this.formData).subscribe();
    console.log('Form submitted with data:', this.formData);
    this.close()
  }



  close() {
    this.popUpRef.close();
}

}
