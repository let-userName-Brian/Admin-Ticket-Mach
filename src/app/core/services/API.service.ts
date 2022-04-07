import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Ticket } from "../models/ticket.model";

@Injectable({ providedIn: 'root' })
export class APICalls {
  tickets: Ticket[] = [];
  updataedTickets: BehaviorSubject<any> = new BehaviorSubject<Ticket[]>([]);
  
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
      this.updataedTickets.next(this.tickets);
    });
  };

  deleteTicket(id: string){
    return this.http.delete(`https://ticket-master-428d7-default-rtdb.firebaseio.com/tickets/${id}.json`).subscribe(() => {
      this.tickets = this.tickets.filter(ticket => ticket.id !== id);
      this.updataedTickets.next(this.tickets);
    });
  };
};
