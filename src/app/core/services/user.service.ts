import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoginResponseI, UserI } from 'src/app/core/models/user.models';

interface User {
  username: string;
  photo: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API = 'http://localhost:3000/users';

  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService,
  ) { }

  login(user: UserI): Observable<LoginResponseI> {
    return this.httpClient.post<LoginResponseI>(`${this.API}/login`, user).pipe(
      tap((res: LoginResponseI) => localStorage.setItem('RT4_Project_KEY', res.access_token)),
      tap(() => this.toastr.success('logged in successfully :)')),
      catchError(e => {
        this.toastr.error(`${e.error.message}`);
        return throwError(e);
      })
    )
  }

  register(user: UserI): Observable<UserI> {
    return this.httpClient.post<UserI>(`${this.API}`, user).pipe(
     tap((createdUser: UserI) => this.toastr.success(`User ${createdUser.username} was created`)),
     catchError(e => {
       this.toastr.error(`User could not be created because: ${e.error.message}`);
       return throwError(e);
     })
    )
  }

  // getLoggedInUser() {
  //   const decodedToken = this.jwtService.decodeToken();
  //   return decodedToken.user;
  // }




































  private usernameSubject = new BehaviorSubject<string>('example example');
  private photoUrlSubject = new BehaviorSubject<string>('');
  private emailSubject = new BehaviorSubject<string>('example@example.com');

  setUsername(username: string) {
    this.usernameSubject.next(username);
  }

  getUsername(): Observable<string> {
    return this.usernameSubject.asObservable();
  }

  setPhotoUrl(photoUrl: string) {
    this.photoUrlSubject.next(photoUrl);
  }

  getPhotoUrl(): Observable<string> {
    return this.photoUrlSubject.asObservable();
  }

  setEmail(email: string) {
    this.emailSubject.next(email);
  }

  getEmail(): Observable<string> {
    return this.emailSubject.asObservable();
  }

  getUser(): Observable<User> {
    return combineLatest([
      this.getUsername(),
      this.getPhotoUrl(),
      this.getEmail()
    ]).pipe(
      map(([username, photo, email]) => ({ username, photo, email }))
    );
  }
}
