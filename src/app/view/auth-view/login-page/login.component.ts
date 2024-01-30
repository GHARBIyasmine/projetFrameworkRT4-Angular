import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import { SVG } from 'src/assets/svg/icons.svg';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { tap } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private userService: UserService
  ) {

  }

  FacebookIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.facebook);
  XIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.x);
  GmailIcon = this.sanitizer.bypassSecurityTrustHtml(SVG.gmail);

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });





  login() {
    if (this.form.valid) {
      this.userService.login({
        email: this.email.value,
        password: this.password.value
      }).pipe(
        tap(() => this.router.navigate(['/dashboard/my-groupes']))
      ).subscribe();
    }
  }


  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  redirectToRegister() {
    this.router.navigate(['../register']).then(success => {
      if (success) {
        console.log('Navigation to register successful!');
      } else {
        console.log('Navigation to register failed!');
      }
    });
  }
}
