import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { AvatarGeneratorService } from 'src/app/core/services/avatar-generator.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateTaskComponent } from '../update-task/update-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  @Input()taskItem!: Task
  assigneeInitials: string =''

  constructor(
    private avatarGeneratorService: AvatarGeneratorService,
    public taskDialog: MatDialog,
  ){
    
  }
 ngOnInit(): void {
  console.log(this.taskItem.assignee);
  console.log(!!this.taskItem.assignee);
 this.assigneeInitials = this.avatarGeneratorService.generateInitials(this.taskItem.assignee); 
 console.log(this.assigneeInitials);
}
  

  editTask(){

    const taskDialogConfig = new MatDialogConfig();

    taskDialogConfig.disableClose = true;
    taskDialogConfig.autoFocus = true;
    taskDialogConfig.hasBackdrop = true;
    taskDialogConfig.height = '550px';
    taskDialogConfig.width = '700px';
    taskDialogConfig.data = { 
          task : this.taskItem
    }

    this.taskDialog.open(UpdateTaskComponent, taskDialogConfig);
    console.log('edit task clicked')
  }

  deleteTask(){
    console.log('delete task clicked')
  }

}
