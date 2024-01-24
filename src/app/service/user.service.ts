import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
  username: string;
  photo: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
