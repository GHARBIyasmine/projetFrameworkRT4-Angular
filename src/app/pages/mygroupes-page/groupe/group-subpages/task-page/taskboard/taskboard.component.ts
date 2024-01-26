import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {
  
  constructor(public taskDialog: MatDialog) {}

  addTask(): void{
    const taskDialogConfig = new MatDialogConfig();

    taskDialogConfig.disableClose = true;
    taskDialogConfig.autoFocus = true;
    taskDialogConfig.hasBackdrop = true;
    taskDialogConfig.height = '400px';
    taskDialogConfig.width = '700px';

    this.taskDialog.open(AddTaskComponent, taskDialogConfig);
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  
  inProgress=['Get up', 'Brush teeth',];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
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
