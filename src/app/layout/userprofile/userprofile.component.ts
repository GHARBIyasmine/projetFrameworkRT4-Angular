
import {Component, OnInit} from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {UserI} from "src/app/core/models/user.models";

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit{
  constructor(
    private userService : UserService

  ) {
  }
  user !:UserI;
  ngOnInit(): void {
  //   this.userService.getUsername().subscribe((username) => {
  //     this.user.username = username as string;
  //   });
  //   this.userService.getEmail().subscribe((email) => {
  //     this.user.email = email as string;
  //   });


  //   this.userService.getPhotoUrl().subscribe((photoUrl) => {
  //     this.user.imageUrl = photoUrl as string;
  //   });
  // }
  }
}
