import { Component, Input, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { AvatarGeneratorService } from "../../../core/services/avatar-generator.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../../../core/services/user.service";
import { UserI } from "src/app/core/models/user.models";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-picture-profile-item',
  templateUrl: './picture-profile-item.component.html',
  styleUrls: ['./picture-profile-item.component.css']
})
export class PictureProfileItemComponent implements OnInit {
 
  @Input() size: number = 50;
  avatarUrl:string = '';
  photo: string = '';
  user!: UserI;

  constructor(
    private avatarService: AvatarGeneratorService,
    private sanitizer: DomSanitizer,
    private toaster: ToastrService,
    private userService: UserService,
  ) {}

  
    ngOnInit() {
    this.fetchUsernameAndGenerateAvatar();

    }


  private fetchUsernameAndGenerateAvatar() {
    this.userService.getUsername().subscribe(
      (username: string) => {
        console.log(username);
        this.avatarUrl = this.avatarService.generateAvatar(username);
      },
      (error: any) => {
        console.error('Failed to fetch username:', error);
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['username'] && !this.photo) {
      this.fetchUsernameAndGenerateAvatar();
    }
  }

  removePhoto() {
    this.user.imageUrl = '';
    this.fetchUsernameAndGenerateAvatar();
    this.toaster.warning("Photo removed!");
  }
}
