import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  formData = {
    taskDescription: '',
    assignee: '',
  };

  assigneeOptions: string[] = ['', 'User 1', 'User 2', 'User 3', /* Add more options as needed */];


  constructor(public dialogRef: MatDialogRef<AddTaskComponent>) {}

  submitForm(form: NgForm): void {
    if (form.valid) {
      const newTask = new Task(this.formData.taskDescription, this.formData.assignee);
      console.log('new task:', newTask);
      this.dialogRef.close();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
