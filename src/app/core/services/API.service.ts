import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ticket } from "../models/ticket.model";

@Injectable({ providedIn: 'root' })
export class APICalls {
  tickets: Ticket[] = [];
  updataedTickets: Subject<any> = new Subject<Ticket[]>();
  constructor(private http: HttpClient) {
    this.updataedTickets.subscribe(data => {
      this.tickets = data;
    })
  }

  getAllTickets() {
    return this.http.get('https://ticket-master-428d7-default-rtdb.firebaseio.com/tickets.json').subscribe((data: any) => {
      for (let key in data) {
        this.tickets.push(data[key]);
      }
      this.updataedTickets.next(this.tickets)
    })
  }
};
