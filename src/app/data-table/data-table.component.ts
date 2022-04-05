import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Ticket } from '../core/models/ticket.model';
import { APICalls } from '../core/services/API.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Ticket[] | any>
  displayedColumns: string[] = ['date', 'name', 'location', 'vehicle', 'message'];
  expandedElement: any | null;
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  constructor(private api: APICalls) {
    this.dataSource = new MatTableDataSource(this.api.tickets);
    this.api.getAllTickets()
  }

  ngOnInit(): void {
    this.api.updataedTickets.subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 
    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
