import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import { SVG } from 'src/assets/svg/icons.svg';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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

  redirectToRegister() {
    this.router.navigate(['/register']).then(success => {
      if (success) {
        console.log('Navigation to register successful!');
      } else {
        console.log('Navigation to register failed!');
      }
    });
  }
}
