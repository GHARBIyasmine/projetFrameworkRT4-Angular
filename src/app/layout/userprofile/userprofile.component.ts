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

  user: UserI | null = null;



  ngOnInit(){
    this.userService.getUserData();
    this.userService.userData$.subscribe((u: UserI | null) => {
      this.user = u;
    });
  }
}
