import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest, EMPTY, Observable, of, throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoginResponseI, UserI } from '../models/user.models';
import { conf } from 'src/environement';


interface User {
  username: string;
  photo: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private API = `${conf.Backend_API}/users`

  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService,
  ) { }

  
 

  uploadUserProfileImage(image: File): Observable<any> { 
    const formData = new FormData();
    formData.append('file', image);
    // console.log(formData.get('file'));
    return this.httpClient.post<any>(`${this.API}/upload-profile-image`, formData);
  }

  getUserProfileImage(): Observable<any> {
    return this.httpClient.get<any>(`${this.API}/image`);
  }


  getUsername() {
    return this.httpClient.get<string>(`${this.API}/username`, { responseType: 'text' as 'json' });
  }

  getUserDetails(){
  //   return this.httpClient.get<UserI>(`${this.API}/user`).pipe(
  //     map(user => {
  //       if (user.imageUrl && user.) {
  //         user.photoUrl = this.convertToBase64(user.photo.data);
  //       }
  //       return user;
  //     })
  //   );
  
  }

  convertToBase64(buffer: Array<number>): string {
    const binary = buffer.map(b => String.fromCharCode(b)).join('');
    return window.btoa(binary);
  }
  
 
  // getLoggedInUser() {
  //   const decodedToken = this.jwtService.decodeToken();
  //   return decodedToken.user;
  // }



}
