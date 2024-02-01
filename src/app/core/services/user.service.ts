import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest, EMPTY, Observable, of, Subject, throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoginResponseI, UserI } from '../models/user.models';
import { conf } from 'src/environement';



@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private API = `${conf.Backend_API}/users`
  private userDataSubject: BehaviorSubject<UserI | null> = new BehaviorSubject<UserI | null>(null);
  userData$: Observable<UserI | null> = this.userDataSubject.asObservable();

  getUserData(): void {
    if (this.userDataSubject.value === null) {
      this.getUserDetails().subscribe(
        (user: UserI) => {
          this.userDataSubject.next(user); 
        },
        error => {
        }
      );
    }
  }

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
        return throwError(e);
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
  

  updatePassword(newPassword: string): Observable<any> {
    const body = { password: newPassword };
    return this.httpClient.patch<any>(`${this.API}/update-pwd`, body).pipe(
      tap(() => {
        this.toastr.success('Password updated successfully');
      }),
      catchError(
        
        error => {
        this.toastr.error(`Failed to update password: ${error.error?.message }`);
        return EMPTY;
      })
    );
  }
  
 

  uploadUserProfileImage(image: File): Observable<any> { 
    const formData = new FormData();
    formData.append('file', image);
    const id = this.userDataSubject.value?.id;
    return this.httpClient.post<any>(`${this.API}/${id}/upload-profile-image`, formData).pipe(
      tap(() => {
        this.getUserDetails().subscribe(
          (updatedUser: UserI) => {
            this.userDataSubject.next(updatedUser);
            this.toastr.success('Profile image updated successfully');
          },
          error => {
            this.toastr.error('Error updating profile image');
          }
        );
      }),
      catchError(e => {
        this.toastr.error(`Image upload failed: ${e.error.message}`);
        return EMPTY;
      })
    );
  }

  removeUserProfileImage() { 
    return this.httpClient.delete<any>(`${this.API}/remove-profile-image`).pipe(
      tap(() => {
        console.log('Image removal request sent to server');
        this.getUserDetails().subscribe(
          (updatedUser: UserI) => {
            console.log('Received updated user data:', updatedUser);
            this.userDataSubject.next(updatedUser);
            this.toastr.success('Profile image deleted successfully');
          },
          error => {
            console.error('Error fetching updated user data:', error);
            this.toastr.error('Error deleting profile image');
          }
        );
      }),
      catchError(e => {
        console.error('Image delete failed:', e);
        this.toastr.error(`Image delete failed: ${e.error.message}`);
        return EMPTY;
      })
    );
  }
  
  getUserProfileImage(): Observable<any> {
    return this.httpClient.get<any>(`${this.API}/image`);
  }

  updateUser(id: number, user: UserI): Observable<UserI> {
    return this.httpClient.patch<UserI>(`${this.API}/update/${id}`, user).pipe(
      tap((newUser: UserI) => {
        this.userDataSubject.next(newUser); 
        this.toastr.success('User updated successfully');
      }),
      catchError(e => {
        this.toastr.error(`User could not be updated because: ${e.error.message}`);
        return EMPTY;
      })
    );
  }
  getUserDetails(){
   return this.httpClient.get<UserI>(this.API);
  }

  imageBufferToBase64(buffer: number[]): string {
    const base64String = btoa(String.fromCharCode.apply(null, buffer));
    return `data:image/jpeg;base64,${base64String}`; 
  }
  
 


}
