import { Component, Input, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { AvatarGeneratorService } from "../../../service/avatar-generator.service";
import { SVG } from "../../../../assets/svg/icons.svg";
import { DomSanitizer } from "@angular/platform-browser";
import { ToastrService } from "ngx-toastr";
import { MockProfilePictureService } from "../../../service/mock-profile-picture.service";
import { UserService } from "../../../service/user.service";
import {Person} from "../../../model/person";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-picture-profile-item',
  templateUrl: './picture-profile-item.component.html',
  styleUrls: ['./picture-profile-item.component.css']
})
export class PictureProfileItemComponent implements OnInit {
  @Input() username: string = '';
  @Input() photo: string = '';
  avatarUrl: string = '';

  private subscriptions = new Subscription();


  user=new Person()


  constructor(
    private avatarService: AvatarGeneratorService,
    private sanitizer: DomSanitizer,
    private toaster: ToastrService,
    private mockProfilePictureService: MockProfilePictureService,
    private userService: UserService,
  ) {}

  uploadIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.upload);
  removeIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.remove);

  ngOnInit() {
    this.subscriptions.add(this.userService.getUsername().subscribe(name => {
      this.username = name;
      this.updateAvatar();
    }));

    this.subscriptions.add(this.userService.getPhotoUrl().subscribe(pic => {
      this.photo = pic;
      this.updateAvatar();
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private updateAvatar() {
    this.avatarUrl = this.photo || this.avatarService.generateAvatar(this.username);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['username']) {
      this.updateAvatar();
    }
    if (changes['photo']) {
      this.updateAvatar();
    }
  }

  removePhoto() {
    this.user.imageUrl = '';
    this.updateAvatar();
    this.mockProfilePictureService.saveProfilePicture(this.user.imageUrl);
    this.toaster.warning("Photo removed !");
  }
}

