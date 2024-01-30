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
export class SettingsComponent implements OnInit, OnDestroy {
  user!: UserI 
  isEditing = false;
  emailNotifications: boolean = true;

  editIcon: SafeHtml;
  uploadIcon: SafeHtml;
  removeIcon: SafeHtml;

  private subscriptions = new Subscription();

  constructor(
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private userService: UserService
  ) {
    this.editIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.pencil);
    this.uploadIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.upload);
    this.removeIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.remove);
  }

  ngOnInit(): void {
    // this.userService.getUserDetails().subscribe(
    //   (userDetails) => {
    //     console.log(userDetails);
    //   },
    //   (error: any) => {
    //     console.error('Failed to fetch user details:', error);
    //   }
    // );
   

    
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onUsernameChange(newUsername: string) {
    this.user.username = newUsername  as string ;
    this.toastr.success("Username changed successfully");
  }

  onEmailChange(newEmail: string) {
    this.user.email = newEmail as string;
    this.toastr.success("Email changed successfully");
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

  // removePhoto(): void {
  //   this.userService.setPhotoUrl('');
  //   this.mockprofilePictureService.removePhotoFromLocalStorage();
  //   this.toastr.info("Photo removed");
  // }

  removeAccount() {
    // Implement account removal logic here
    this.toastr.warning("Account removed!");
    // Reset user data or navigate away
  }

  // Implement or remove the following methods as per your application's requirements
  toggleEmailNotifications() {
    // Toggle email notifications logic
  }

  onPasswordChange(newPassword: string) {
    // Password change logic
  }
}
