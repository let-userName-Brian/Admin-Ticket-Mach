import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Ticket } from "../models/ticket.model";

@Injectable({ providedIn: 'root' })
export class APICalls {
  tickets: Ticket[] = [];
  constructor(private http: HttpClient) { }

  getAllTickets() {
   return this.http.get('https://ticket-master-428d7-default-rtdb.firebaseio.com/tickets.json').subscribe((data: any) => {
      for (let key in data) {
        this.tickets.push(data[key]);
      }
      console.log(this.tickets);
    });
  };
}
