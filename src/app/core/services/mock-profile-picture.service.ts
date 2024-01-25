import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MockProfilePictureService {
  private profilePictureSubject = new BehaviorSubject<string>(this.getProfilePictureFromLocalStorage());

  getProfilePictureFromLocalStorage(): string {
    return localStorage.getItem('profilePicture') || '';
  }

  saveProfilePicture(imageData: any): void {
    localStorage.setItem('profilePicture', imageData);
    this.profilePictureSubject.next(imageData);
  }

  getProfilePicture() {
    return this.profilePictureSubject.asObservable();
  }
  removePhotoFromLocalStorage() {
    localStorage.removeItem('profilePicture');
  }

}
