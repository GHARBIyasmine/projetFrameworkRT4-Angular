<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import {Component, OnInit} from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {Person} from "../../core/models/person";
>>>>>>> 1dd9da1dd8542af32276507d620a821764ab2de1

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
<<<<<<< HEAD
export class UserprofileComponent {
=======
export class UserprofileComponent implements OnInit{
  constructor(
    private userService : UserService

  ) {
  }
  user = new Person()
  ngOnInit(): void {
    this.userService.getUsername().subscribe((username) => {
      this.user.username = username as string;
    });
    this.userService.getEmail().subscribe((email) => {
      this.user.email = email as string;
    });


    this.userService.getPhotoUrl().subscribe((photoUrl) => {
      this.user.imageUrl = photoUrl as string;
    });
  }
>>>>>>> 1dd9da1dd8542af32276507d620a821764ab2de1

}
