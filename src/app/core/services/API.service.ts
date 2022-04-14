import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Ticket } from "../models/ticket.model";

@Injectable({ providedIn: 'root' })
export class APICalls {
  tickets: Ticket[] = [];
  updataedTickets: BehaviorSubject<any> = new BehaviorSubject<Ticket[]>([]);

  mondayArray: any[] = [];
  tuesdayArray: any[] = [];
  wednesdayArray: any[] = [];
  thursdayArray: any[] = [];
  fridayArray: any[] = [];
  saturdayArray: any[] = [];
  sundayArray: any[] = [];

  constructor(private http: HttpClient) {
    this.updataedTickets.subscribe(data => {
      this.tickets = data;
    })
  }

  getAllTickets() {
    return this.http.get('https://ticket-master-428d7-default-rtdb.firebaseio.com/tickets.json').subscribe((data: any) => {
      for (let key in data) {
        this.tickets.push(data[key]);
        this.addTicketsToTheirArrays(data[key].day)
      }
      this.updataedTickets.next(this.tickets);
    });
  };

  deleteTicket(id: string) {
    return this.http.delete(`https://ticket-master-428d7-default-rtdb.firebaseio.com/tickets/${id}.json`).subscribe(() => {
      this.tickets = this.tickets.filter(ticket => ticket.id !== id);
      this.updataedTickets.next(this.tickets);
    });
  };

  addTicketsToTheirArrays(day: number) {
    switch (day) {
      case 1:
        this.mondayArray.push(day);
        break;
      case 2:
        this.tuesdayArray.push(day)
        break;
      case 3:
        this.wednesdayArray.push(day)
        break;
      case 4:
        this.thursdayArray.push(day)
        break;
      case 5:
        this.fridayArray.push(day)
        break;
      case 6:
        this.saturdayArray.push(day)
        break;
      case 0:
        this.sundayArray.push(day)
        break;
    }
  };
};
