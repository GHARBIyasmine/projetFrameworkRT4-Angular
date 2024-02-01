import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AvatarGeneratorService } from "../../../core/services/avatar-generator.service";
import { DomSanitizer } from "@angular/platform-browser";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../../../core/services/user.service";
import { UserI } from "src/app/core/models/user.models";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-picture-profile-item',
  templateUrl: './picture-profile-item.component.html',
  styleUrls: ['./picture-profile-item.component.css']
})
export class PictureProfileItemComponent implements OnInit, OnDestroy {

@Input()  size: number = 50;
  avatarUrl: string = '';
  photo: string = '';
  user!: UserI;
  private subscription!: Subscription;

  constructor(
    private avatarService: AvatarGeneratorService,
    private sanitizer: DomSanitizer,
    private toaster: ToastrService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.subscription = this.userService.userData$.subscribe(
      (userData: UserI | null) => {
        if (userData) {
          this.user = userData;
          if (this.user.imageUrl == null ) {
            this.GenerateAvatar();
          } else {
            this.photo = this.userService.imageBufferToBase64(this.user.imageUrl.data);

          }
        }
      },
      error => {
        console.error('Error retrieving user data:', error);
        this.GenerateAvatar();
      }
    );
  }

  private GenerateAvatar() {
    if (this.user && this.user.username) {
      this.avatarUrl = this.avatarService.generateAvatar(this.user.username);
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  removePhoto() {
    this.userService.removeUserProfileImage();
}


}
