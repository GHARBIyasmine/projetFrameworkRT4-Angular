import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import { SVG } from 'src/assets/svg/icons.svg';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  registerRedirectPath: string = '/' +APP_ROUTES.register

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {

  }

  FacebookIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.facebook);
  XIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.x);
  GmailIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.gmail);

  user = {
    email: '',
    password: '',
    remember_me: false
  };


  onSubmit(form: any): void {
    if (form.valid) {
      this.toastr.success("logged in successfully :) ")
    }
  }

  
}
