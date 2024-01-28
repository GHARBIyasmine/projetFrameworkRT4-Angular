import { UserService } from './../../../core/services/user.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";
import { tap } from 'rxjs';
import { CustomValidators } from 'src/app/core/validators/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    private router : Router,

  ) {
  }

form : FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
    confirmPassword: new FormControl(null, Validators.required),

},
  {validators: CustomValidators.passwordsMatching});


 register(){
  if(this.form.valid){
    this.userService.register({
      email : this.email.value,
      password : this.password.value,
      username : this.username.value,
    }).pipe(
      tap(() => this.router.navigate(['../login']))
      )
      .subscribe();

    }
  }

get email() : FormControl {
  return this.form.get('email') as FormControl;
}

get password() : FormControl {
  return this.form.get('password') as FormControl;
}

get username() : FormControl {
  return this.form.get('username') as FormControl;
}
get passwordConfirm() : FormControl {
  return this.form.get('confirmPassword') as FormControl;
}


}
