import { Injectable } from '@angular/core';
import { Task, TaskDto, TaskI } from '../models/task.model';
import { TaskStatus } from '../models/taskStatus.model';
import { EMPTY, Observable, Subject, catchError, tap } from 'rxjs';
import { conf } from 'src/environement';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private API = `${conf.Backend_API}/tasks`

  private newTaskSubject = new Subject<TaskI>();
  newTask$ = this.newTaskSubject.asObservable();

  private updatedTaskSubject = new Subject<TaskI>();
  updatedTask$ = this.updatedTaskSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService,
  ) { }

  addTask(newTask: TaskDto, groupid: number): Observable<TaskI> {
    return this.httpClient.post<TaskI>(`${this.API}/create/${groupid}`, newTask)
    .pipe(
      tap((task: TaskI) => {
        this.newTaskSubject.next(task);
      }),
      tap(
        () => this.toastr.success('task created successfully :)')
      ),
      catchError(e => {
        this.toastr.error(`${e.error.message}`);
        return EMPTY
      })
    );

    
  }

  updateTask(updatedTask: TaskDto, taskid: number): Observable<TaskI> {
    return this.httpClient.patch<TaskI>(`${this.API}/update/${taskid}`, updatedTask)
    .pipe(
      tap((task: TaskI) => {
        console.log('event emited')
        this.updatedTaskSubject.next(task);
      }),
      tap(
        () => this.toastr.success('task updated successfully :)')
      ),
      catchError(e => {
        this.toastr.error(`${e.error.message}`);
        return EMPTY
      })
    );
    
  }

  getAllTasksByGroup(id : number): Observable<TaskI[]>{
    return this.httpClient.get<TaskI[]>(`${this.API}/all/${id}`)
    .pipe(
      catchError(e => {
        this.toastr.error(`${e.error.message}`);
        return EMPTY
      })
    );
    

  }
 

  

}
