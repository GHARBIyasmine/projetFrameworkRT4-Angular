import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Task, TaskI } from '../models/task.model';
import { AvatarGeneratorService } from 'src/app/core/services/avatar-generator.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateTaskComponent } from '../update-task/update-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  @Input()taskItem!: TaskI
  assigneeInitials: string =''
  @Input()groupid!: number

  constructor(
    private avatarGeneratorService: AvatarGeneratorService,
    public taskDialog: MatDialog,
  ){
    
  }
 ngOnInit(): void {
  console.log(this.taskItem.assignedTo)
 this.assigneeInitials = this.avatarGeneratorService.generateInitials(this.taskItem.assignedTo.username); 
}
  

  editTask(){

    const taskDialogConfig = new MatDialogConfig();

    taskDialogConfig.disableClose = true;
    taskDialogConfig.autoFocus = true;
    taskDialogConfig.hasBackdrop = true;
    taskDialogConfig.height = '550px';
    taskDialogConfig.width = '700px';
    taskDialogConfig.data = { 
          task : this.taskItem,
          groupid: this.groupid
    }

    this.taskDialog.open(UpdateTaskComponent, taskDialogConfig);
    
  }

  deleteTask(){
    console.log('delete task clicked')
  }

}
