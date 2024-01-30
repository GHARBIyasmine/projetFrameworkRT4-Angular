import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../models/task.model';
import { TaskStatus } from '../models/taskStatus.model';
import { TaskService } from '../services/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  formData = {
    taskDescription: '',
    assignee: '',
    taskDate: new Date()
  };

  assigneeOptions: string[] = ['', 'User 1', 'User 2', 'User 3', /* Add more options as needed */];
  taskList: Task[] = []

  constructor(
    public dialogRef: MatDialogRef<AddTaskComponent>,
    private taskService: TaskService,
    private toastr: ToastrService,
            ) {}

  submitForm(form: NgForm): void {
    if (form.valid) {
      // const formattedDate = this.datePipe.transform(this.formData.taskDate,'dd/MM/yyyy');
      // const dateObject = parse(formattedDate, 'dd/MM/yyyy', new Date());

      // const newTask = new Task(
      //   this.formData.taskDescription,
      //   this.formData.assignee,
      //   this.formData.taskDate,
      //   TaskStatus.ToDo);

      // this.taskService.addTask(newTask);
      this.dialogRef.close();
      this.toastr.success("Task added successfully");

    }
  }


  close(): void {
    this.dialogRef.close();
  }
}
