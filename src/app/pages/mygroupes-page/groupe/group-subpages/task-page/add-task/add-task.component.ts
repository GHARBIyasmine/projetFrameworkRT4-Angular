import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../models/task.model';
import { TaskStatus } from '../models/taskStatus.model';
import { TaskService } from '../services/task.service';
import { ToastrService } from 'ngx-toastr';
import { GroupService } from 'src/app/core/services/group.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  formData = {
    description: '',
    assignee: '',
    dueDate: new Date() as Date
  };

  assigneeOptions: string[] = [];
  taskList: Task[] = []

  constructor(
    public dialogRef: MatDialogRef<AddTaskComponent>,
    private taskService: TaskService,
    private toastr: ToastrService,
    private groupService: GroupService,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}
    
            ) {
              console.log(this.formData.dueDate)
              console.log(typeof this.formData.dueDate)
            }

    ngOnInit(): void {
      this.groupService.getAllGroupCommunityUsernames(this.data.id)
      .subscribe(
        {
          next: usernames => { this.assigneeOptions = usernames}
        }
      )
    }

  submitForm(form: NgForm): void {
    if (form.valid) {
      console.log(this.formData)
      this.formData.dueDate = new Date(this.formData.dueDate)
     this.taskService.addTask(this.formData, this.data.id).subscribe()
      this.dialogRef.close();

    }
  }


  close(): void {
    this.dialogRef.close();
  }
}
