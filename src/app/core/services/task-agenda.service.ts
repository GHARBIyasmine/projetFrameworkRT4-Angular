import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { conf } from 'src/environement';

@Injectable({
  providedIn: 'root'
})
export class TaskAgendaService {
  private API = `${conf.Backend_API}/tasks`;
  constructor(
    private http : HttpClient) { }
  getTasks(userId : number): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/details/${userId}`); 
  }
}
