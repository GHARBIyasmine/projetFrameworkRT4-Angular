import {Component} from '@angular/core';
import {CalendarEvent, CalendarView} from "angular-calendar";
import {isSameDay, isSameMonth} from "date-fns";
import { Subscription } from 'rxjs';
import { UserI } from 'src/app/core/models/user.models';
import { TaskAgendaService } from 'src/app/core/services/task-agenda.service';
import { UserService } from 'src/app/core/services/user.service';
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView= CalendarView;
  activeDayIsOpen: boolean = false;
  events: CalendarEvent[]=[];

  user!: UserI;
  private subscription!: Subscription;

  constructor(
    private taskService : TaskAgendaService ,
    private userService: UserService,
    
    ) {  }
  
  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.subscription = this.userService.userData$.subscribe(
      (userData: UserI | null) => {
        if (userData) {
          this.user = userData;
        }
      }
    );
      if (this.user.id) {
        const userId = this.user.id;
        console.log('userId:', userId);
        this.taskService.getTasks(userId).subscribe(tasks => {
          tasks.forEach(task => {
            const event: CalendarEvent = {
              title: task.description,
              start: new Date(task.dueDate),
            };
            this.events.push(event);
          });
        }, error => {
          console.error('Error fetching tasks:', error);
        });
      }
  }

  setView(view: CalendarView) {
    this.view=view;
  }
  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }
}
