import { AvatarGeneratorService } from './../../../core/services/avatar-generator.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastrService } from "ngx-toastr";
import { UserI } from "src/app/core/models/user.models";
import { UserService } from "../../../core/services/user.service";
import { MockProfilePictureService } from "../../../core/services/mock-profile-picture.service";
import { SVG } from 'src/assets/svg/icons.svg';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user: UserI | null= {
    username: '',
    email: '',
    password: '',
    imageUrl: {
      type: '',
      data: []
    }
  } 
  isEditing = false;
  emailNotifications: boolean = true;

  editIcon: SafeHtml;
  uploadIcon: SafeHtml;
  removeIcon: SafeHtml;

  private subscription!: Subscription;

  constructor(
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private userService: UserService
  ) {
    this.editIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.pencil);
    this.uploadIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.upload);
    this.removeIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.remove);
  }
  ngOnInit() {
    this.subscription = this.userService.userData$.subscribe(
      (userData: UserI | null) => {
        if (userData) {
          this.user = userData;
        }
      },
      error => {
        console.error('Error retrieving user data:', error);
      }
    );
  }
  

  onUsernameChange(newUsername: string) {
    console.log("this is the new username:", newUsername);
    if (this.user !== null) {
      this.user.username = newUsername as string;
      this.userService.updateUser(this.user.id as number, this.user).subscribe();   
    }
  }

  onPasswordChange(event: { newPassword: string, confirmPassword: string }) {
    if (event.newPassword !== event.confirmPassword) {
      return;
    }
    this.userService.updatePassword(event.newPassword).subscribe();
  }

  onEmailChange(newEmail: string) {
    if (this.user !== null) {
      if (this.user.id !== undefined) {
        this.user.email = newEmail as string;
        this.userService.updateUser(this.user.id as number, this.user).subscribe();
      } else {
        this.toastr.error("User id is undefined");}
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
        this.userService.uploadUserProfileImage(file).subscribe(
        response => {
          console.log('Image uploaded successfully');
          
        },
        error => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }

  removePhoto(): void {
    this.userService.removeUserProfileImage().subscribe(
      response => {
        console.log('Profile image removed successfully');
      },
      error => {
        console.error('Error removing profile image:', error);
      }
    );
  }
  

  removeAccount() {
    // Implement account removal logic here
    this.toastr.warning("Account removed!");
    // Reset user data or navigate away
  }

  // Implement or remove the following methods as per your application's requirements
  toggleEmailNotifications() {
    // Toggle email notifications logic
  }


 


}
