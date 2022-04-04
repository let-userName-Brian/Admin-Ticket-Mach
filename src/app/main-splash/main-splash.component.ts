import { Component, OnInit } from '@angular/core';
import { APICalls } from '../core/services/API.service';

@Component({
  selector: 'app-main-splash',
  templateUrl: './main-splash.component.html',
  styleUrls: ['./main-splash.component.scss']
})
export class MainSplashComponent implements OnInit {

  constructor(private api: APICalls) {
  }

  ngOnInit(): void {
    this.api.getAllTickets();
  }
}
