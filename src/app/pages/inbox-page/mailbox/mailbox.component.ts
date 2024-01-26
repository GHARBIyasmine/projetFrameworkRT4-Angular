import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { forkJoin } from 'rxjs';

import {
  EmailServiceService, 
  GroupNotification, 
  TaskNotification 
} from 'src/app/pages/inbox-page/email-service.service';
import { MatTableDataSource } from '@angular/material/table';

type GeneralNotification = GroupNotification | TaskNotification;

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css'],
})
export class MailboxComponent implements OnInit {
  displayedColumns: string[] = ['select', 'tag', 'sender', 'subject', 'date', 'delete'];
  dataSource: MatTableDataSource<GeneralNotification>;
  selection = new SelectionModel<GeneralNotification>(true, []);
  selectedMailsCount = 0;

  constructor(
    private router: Router,
    private emailService: EmailServiceService
  ) {
    this.dataSource = new MatTableDataSource<GeneralNotification>([]);
  }

  ngOnInit() {
    forkJoin([
      this.emailService.getGroupNotifications(),
      this.emailService.getTaskNotifications()
    ]).subscribe(([groupNotifications, taskNotifications]) => {
      this.dataSource.data = [...groupNotifications, ...taskNotifications];
    });
  }

  /*loadGroupNotifications(): void {
    this.emailService.getGroupNotifications().subscribe(notifications => {
      this.dataSource.data = notifications;
    });
  }

  loadTaskNotifications(): void {
    this.emailService.getTaskNotifications().subscribe(notifications => {
      this.dataSource.data = notifications;
    });
  }*/

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.dataSource.data.forEach(row => this.selection.select(row));
    }
  }

  checkboxLabel(row?: GeneralNotification): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  displayEmail(email: GeneralNotification): void {
    this.router.navigate(['/email', email.id]);
  }

  onCheckboxChanged(row: GeneralNotification, checked: boolean): void {
    this.selection.toggle(row);
    this.selectedMailsCount = this.selection.selected.length;
  }

  onDelete(emailToDelete: GeneralNotification): void {
    // Filter out the notification to be deleted
    this.dataSource.data = this.dataSource.data.filter(email => email.id !== emailToDelete.id);
  }

  generateSubject(notification: GeneralNotification): string {
    return this.emailService.generateSubject(notification);
  }

  getTagStyle(notificationType: string): any {
    return this.emailService.getTagStyle(notificationType);
  }
}
