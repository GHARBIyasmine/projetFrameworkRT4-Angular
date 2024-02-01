import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TaskService } from '../services/task.service';
import { Task, TaskI } from '../models/task.model';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit{

  groupid! : number
  toDoTaskList: TaskI[]=[];
  inProgTaskList: TaskI[]=[];
  doneTaskList: TaskI[]=[];
  private newTaskSubscription: Subscription;
  private updatedTaskSubscription: Subscription;
  
  constructor(
    public taskDialog: MatDialog,
    private taskService: TaskService,
    private route: ActivatedRoute
    
    ) {

      this.newTaskSubscription = this.taskService.newTask$
                                                  .pipe( takeUntilDestroyed())
                                                  .subscribe(newTask => {
                                                  this.toDoTaskList.push(newTask); 
                                                              });
    this.groupid= this.route.snapshot.parent?.params['groupid'];

    this.updatedTaskSubscription = this.taskService.updatedTask$
                                                    .pipe(takeUntilDestroyed())
                                                    .subscribe(updatedTask =>{
                                                      console.log(updatedTask)

                                                      switch (updatedTask.status) {
                                                        case 'to do':
                                                          this.updateTaskInArray(this.toDoTaskList, updatedTask);
                                                          break;
                                                        case 'in progress':
                                                          this.updateTaskInArray(this.inProgTaskList, updatedTask);
                                                          break;
                                                        case 'done':
                                                          this.updateTaskInArray(this.doneTaskList, updatedTask);
                                                          break;
                                                        default:
                                                          // Handle unknown status if needed
                                                          break;
                                                      }
                                                      
                                                    })






    }

    private updateTaskInArray(taskArray: TaskI[], updatedTask: TaskI): void {
      const index = taskArray.findIndex(task => task.id === updatedTask.id);
      console.log(index)
      if (index !== -1) {
        // Replace the task with the updated task
        taskArray[index] = updatedTask;
      }
    }

  addTask(): void{
    const taskDialogConfig = new MatDialogConfig();

    taskDialogConfig.disableClose = true;
    taskDialogConfig.autoFocus = true;
    taskDialogConfig.hasBackdrop = true;
    taskDialogConfig.height = '550px';
    taskDialogConfig.width = '700px';
    taskDialogConfig.data = {
      id : this.groupid
    }

    this.taskDialog.open(AddTaskComponent, taskDialogConfig);
  }

  ngOnInit(): void {
    this.taskService.getAllTasksByGroup(this.groupid).subscribe({
      next: (tasks)=>{

        tasks.forEach(task => {
          switch (task.status) {
            case 'to do':
              this.toDoTaskList.push(task);
              break;
            case 'in progress':
              this.inProgTaskList.push(task);
              break;
            case 'done':
              this.doneTaskList.push(task);
              break;
            default:
              // Handle unknown status if needed
              break;
          }
        });

      }
    })
  }

  drop(event: CdkDragDrop<TaskI[]>) {
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
