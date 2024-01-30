import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';
import { NgForm } from '@angular/forms';
import { Task } from '../models/task.model';
import { ToastrService } from 'ngx-toastr';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  formData = {
    taskDescription: '',
    assignee: '',
    taskDate: new Date()
  };

  assigneeOptions: string[] = ['', 'User 1', 'User 2', 'User 3', /* Add more options as needed */];
  

  constructor(
    public dialogRef: MatDialogRef<UpdateTaskComponent>,
    private taskService: TaskService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: {task: Task}

            ) {

              this.formData.taskDescription = data.task.taskDescription;
              this.formData.taskDate = data.task.taskDate,
              this.formData.assignee = data.task.assignee
            }

            submitForm(form: NgForm): void {
              if (form.valid) {
                // Update the task
                // this.taskService.updateTask({
                //   taskDescription: this.formData.taskDescription,
                //   assignee: this.formData.assignee,
                //   taskDate: this.formData.taskDate
                // });
            
                this.dialogRef.close();
                this.toastr.success("Task updated successfully");
              }
            }


  close(): void {
    this.dialogRef.close();
  }
}
