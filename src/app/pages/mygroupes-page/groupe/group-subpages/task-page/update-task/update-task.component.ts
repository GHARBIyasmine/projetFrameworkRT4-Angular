import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';
import { NgForm } from '@angular/forms';
import { Task, TaskI } from '../models/task.model';
import { ToastrService } from 'ngx-toastr';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GroupService } from 'src/app/core/services/group.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit{
  formData = {
    description: '',
    assignee: '',
    dueDate: new Date() as Date
  };

  assigneeOptions: string[] = ['', 'User 1', 'User 2', 'User 3', /* Add more options as needed */];
  

  constructor(
    public dialogRef: MatDialogRef<UpdateTaskComponent>,
    private taskService: TaskService,
    private toastr: ToastrService,
    private groupService: GroupService,
    @Inject(MAT_DIALOG_DATA) public data: {task: TaskI, groupid: number}

            ) {

              this.formData.description = data.task.description;
              this.formData.dueDate = data.task.dueDate,
              this.formData.assignee = data.task.assignedTo.username
            }

            submitForm(form: NgForm): void {
              if (form.valid) {
                console.log(this.formData)
                this.taskService.updateTask(this.formData, this.data.task.id).subscribe()
            
                this.dialogRef.close();
                this.toastr.success("Task updated successfully");
              }
            }
            ngOnInit(): void {
              this.groupService.getAllGroupCommunityUsernames(this.data.groupid)
              .subscribe(
                {
                  next: usernames => { this.assigneeOptions = usernames}
                }
              )
            }

  close(): void {
    this.dialogRef.close();
  }
}
