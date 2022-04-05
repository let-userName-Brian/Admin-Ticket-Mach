import { Component, OnInit } from '@angular/core';
import { Ticket } from '../core/models/ticket.model';
import { APICalls } from '../core/services/API.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DataTableComponent implements OnInit {
  dataSource: Ticket[] | any
  columnsToDisplay: string[] = ['date', 'name', 'location', 'plate', 'vehicle'];
  expandedElement: any | null;
  constructor(private api: APICalls) {
    this.api.getAllTickets()
  }

  ngOnInit(): void {
    this.api.updataedTickets.subscribe(data => {
      this.dataSource = data;
    })
  }
}
