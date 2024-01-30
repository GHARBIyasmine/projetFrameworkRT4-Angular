import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit{

  toDoTaskList: Task[]=[];
  inProgTaskList: Task[]=[];
  doneTaskList: Task[]=[];
  private newTaskSubscription: Subscription;
  
  constructor(
    public taskDialog: MatDialog,
    private taskService: TaskService,
    
    ) {

      this.newTaskSubscription = this.taskService.getNewTaskObservable()
                                                  .pipe( takeUntilDestroyed())
                                                  .subscribe(newTask => {
                                                        console.log('New task added:', newTask);
                                                        this.toDoTaskList.push(newTask); 
                                                              });
    }

  addTask(): void{
    const taskDialogConfig = new MatDialogConfig();

    taskDialogConfig.disableClose = true;
    taskDialogConfig.autoFocus = true;
    taskDialogConfig.hasBackdrop = true;
    taskDialogConfig.height = '550px';
    taskDialogConfig.width = '700px';

    this.taskDialog.open(AddTaskComponent, taskDialogConfig);
  }

  ngOnInit(): void {
    this.toDoTaskList = this.taskService.getToDoTasks();
    this.inProgTaskList = this.taskService.getInProgTasks();
    this.doneTaskList = this.taskService.getDoneTasks()
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


}
