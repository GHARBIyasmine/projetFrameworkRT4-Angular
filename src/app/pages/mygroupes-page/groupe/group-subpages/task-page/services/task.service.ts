import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskStatus } from '../models/taskStatus.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private newTaskSubject = new Subject<Task>();
  

  private toDoTasks: Task[]=[
    new Task(1,'go to sleep', 'User 1', new Date(), TaskStatus.ToDo), 
    new Task(2,'do chores', '', new Date(), TaskStatus.ToDo), 
  ]
  private inprogTasks = [
    new Task(3,'do homework', '', new Date(), TaskStatus.InProgress),
  ]

  private doneTasks = [
    new Task(4,'projet web', '', new Date(),TaskStatus.Done),
  ]

  constructor() { }

  addTask(newTask: Task): void {
    // this.toDoTasks.push(newTask);
    this.newTaskSubject.next(newTask);
    
  }

  getNewTaskObservable() {
    return this.newTaskSubject.asObservable();
  }

  getToDoTasks(){
    return this.toDoTasks
  }

  getInProgTasks(){
    return this.inprogTasks
  }

  getDoneTasks(){
    return this.doneTasks
  }

  updateTask(updatedTask: Task, taskStatus: TaskStatus): void {
    switch (taskStatus) {
      case TaskStatus.ToDo:
        
        break;

        case TaskStatus.InProgress:
          
        break;
    
      default: 
      
        break;
    }
    
    
  }

}
