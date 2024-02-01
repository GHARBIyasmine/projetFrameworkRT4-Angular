import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { EMPTY, Observable, catchError, tap } from 'rxjs';
import { conf } from 'src/environement';
import { LoginResponseI, UserI } from '../models/user.models';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = `${conf.Backend_API}/users`

  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService,
  ) { }

  login(user: UserI): Observable<LoginResponseI> {
    return this.httpClient.post<LoginResponseI>(`${this.API}/login`, user).pipe(
      tap((res: LoginResponseI) => localStorage.setItem(conf.ACCESS_TOKEN_KEY, res.access_token)),
      tap(() => this.toastr.success('logged in successfully :)')),
      catchError(e => {
        this.toastr.error(`${e.error.message}`);
        return EMPTY;
      })
    )
  }

  register(user: UserI): Observable<UserI> {
    return this.httpClient.post<UserI>(`${this.API}`, user).pipe(
     tap((createdUser: UserI) => this.toastr.success(`${createdUser.username}'s account was created`)),
     catchError(e => {
       this.toastr.error(`User could not be created because: ${e.error.message}`);
       return EMPTY;
     })
    )
  }


  logout(): void {
    localStorage.removeItem(conf.ACCESS_TOKEN_KEY);
    this.toastr.success('Logged out successfully');
  }
  
  isAuthenticated(): boolean {
    
    return !!localStorage.getItem(conf.ACCESS_TOKEN_KEY);
  }


}
