
import {Component} from '@angular/core';
import {CalendarEvent, CalendarView} from "angular-calendar";
import {isSameDay, isSameMonth} from "date-fns";

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

  constructor() {
    const event1 = {
      title:"Projet Web",
      start : new Date("2024-01-20")

    }
    this.events.push(event1);
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
