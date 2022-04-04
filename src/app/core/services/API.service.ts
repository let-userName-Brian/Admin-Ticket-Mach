import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class APICalls {
  constructor(private http: HttpClient) {}

  getAllTickets() {
    return this.http.get('https://ticket-master-428d7-default-rtdb.firebaseio.com/tickets.json')
  }
}