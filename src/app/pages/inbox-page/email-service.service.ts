import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TAG_COLORS } from 'src/app/config/colors.config';



export interface GroupNotification {
  id: number;
  groupName: string;
  date: Date;
  receiver: string; // GroupNotification Owner
  sender: string; // New Member
  type: 'publicGroupJoined' | 'privateGroupJoinRequest' ;
  position: number;
}
export interface TaskNotification {
  id: number;
  groupName: string;
  sender: string;
  subject: string;
  receiver: string;
  date: Date;
  type: 'newTaskAdded';
  position: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  private groupNotifications : GroupNotification[] = [
    {
      id: 1,
      groupName : 'Group 1',
      date: new Date('2024-05-13'),
      receiver : 'Hritik Roshan',
      sender: 'Hritik Roshan',
      type: 'publicGroupJoined',
      position: 1,
    },
    {
      id: 2,
      groupName: 'Group 2',
      date: new Date('2024-05-13'),
      receiver: 'Genelia Roshan',
      sender: 'Genelia Roshan',
      type: 'privateGroupJoinRequest',
      position: 2,
    }
    
  ];
    
  private taskNotifications : TaskNotification[] = [{
      id: 4,
      sender: 'Arij',
      groupName: 'Group 1',
      receiver: 'arij',
      subject: 'Arij',
      date: new Date('2024-05-13'),
      type: 'newTaskAdded',
      position: 3,
      }
    ];



  constructor() { }

  getGroupNotifications(): Observable<GroupNotification[]> {
    return of(this.groupNotifications);
  }

  getTaskNotifications(): Observable<TaskNotification[]> {
    return of(this.taskNotifications);
  }

  getGroupNotificationById(id: number): Observable<GroupNotification | undefined> {
    const notification = this.groupNotifications.find(n => n.id === id);
    return of(notification);
  }

  getTaskNotificationById(id: number): Observable<TaskNotification | undefined> {
    const notification = this.taskNotifications.find(n => n.id === id);
    return of(notification);
  }

  generateSubject(notification: GroupNotification | TaskNotification): string {
    switch (notification.type) {
      case 'publicGroupJoined':
        return `You joined ${notification.groupName}`;
      case 'privateGroupJoinRequest':
        return `${notification.sender} wants to join ${notification.groupName}`;
      case 'newTaskAdded':
        return `New task added in ${notification.groupName}`;
      default:
        return 'Unknown Subject';
    }
  }

  getTagStyle(type: string): any {
    switch (type) {
      case 'publicGroupJoined':
        return TAG_COLORS.public;
      case 'privateGroupJoinRequest':
        return TAG_COLORS.private;
      // Add more cases as needed
      default:
        return TAG_COLORS.detail; // default style
    }
  }

  
}
