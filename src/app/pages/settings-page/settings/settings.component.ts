import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastrService } from "ngx-toastr";
import { Person } from "../../../core/models/person";
import { UserService } from "../../../core/services/user.service";
import { MockProfilePictureService } from "../../../core/services/mock-profile-picture.service";
import { SVG } from 'src/assets/svg/icons.svg';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {
  user = new Person();
  isEditing = false;
  emailNotifications: boolean = true;

  editIcon: SafeHtml;
  uploadIcon: SafeHtml;
  removeIcon: SafeHtml;

  private subscriptions = new Subscription();

  constructor(
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private mockprofilePictureService: MockProfilePictureService,
    private userService: UserService
  ) {
    this.editIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.pencil);
    this.uploadIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.upload);
    this.removeIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.remove);
  }

  ngOnInit(): void {
    this.subscriptions.add(this.userService.getUser().subscribe(userData => {
      this.user.username = userData.username;
      this.user.email = userData.email;
      this.user.imageUrl = userData.photo;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onUsernameChange(newUsername: string) {
    this.userService.setUsername(newUsername);
    this.toastr.success("Username changed successfully");
  }

  onEmailChange(newEmail: string) {
    this.userService.setEmail(newEmail);
    this.toastr.success("Email changed successfully");
  }

  onPhotoChange(newPhotoUrl: string) {
    this.userService.setPhotoUrl(newPhotoUrl);
    this.toastr.success("Photo updated successfully");
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        const imageData = reader.result as string;
        this.mockprofilePictureService.saveProfilePicture(imageData);
        this.userService.setPhotoUrl(imageData);
        this.toastr.success("Photo uploaded successfully");
      };
      reader.readAsDataURL(file);
    }
  }

  removePhoto(): void {
    this.userService.setPhotoUrl('');
    this.mockprofilePictureService.removePhotoFromLocalStorage();
    this.toastr.info("Photo removed");
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

  onPasswordChange(newPassword: string) {
    // Password change logic
  }
}
