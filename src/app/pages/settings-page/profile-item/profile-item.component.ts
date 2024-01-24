import {Component, EventEmitter, Input, Output} from '@angular/core';
import { SVG } from 'src/assets/svg/icons.svg';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent {
  newPassword: string ='';
  confirmPassword: string='';
  @Input()button:string=''
  constructor(private sanitizer: DomSanitizer) {
  }
  editIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.pencil);

  @Input() label: string = '';
  @Input() value: string = '';
  @Input() type: string = '';
  @Output() valueChange = new EventEmitter<string>();

  editedValue: string = '';
  editMode: boolean = false;

  get isUsernameValid() {
    return this.editedValue.length >= 3;
  }

  get isEmailValid() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.editedValue);
  }

  get isPasswordConfirmed() {
    return this.newPassword === this.confirmPassword;
  }

  enterEditMode() {
    this.editedValue = this.value;
    this.editMode = true;
  }

  save() {
    this.valueChange.emit(this.editedValue);
    this.editMode = false;
  }

  cancel() {
    this.editMode = false;
  }
}
