import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private toastr: ToastrService
  ) {
  }

  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  };
  passwordMismatch: boolean = false;

  onSubmit(form: any): void {
    if (form.valid) {
      this.toastr.success("valid")
    }
  }

  checkPasswordMatch(): void {
    this.passwordMismatch = this.user.password !== this.user.confirmPassword;
  }
}
