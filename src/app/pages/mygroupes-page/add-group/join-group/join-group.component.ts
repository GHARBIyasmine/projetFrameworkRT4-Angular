import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent {

  constructor(private popUpRef: MatDialogRef<JoinGroupComponent>) {}

  formData = {
    inputField: '',
  };

  submitForm(form : NgForm) {
    console.log('with parameter : ', form.value)
    console.log('Form submitted with data:', this.formData);
  }



  close() {
    this.popUpRef.close();
}

}
