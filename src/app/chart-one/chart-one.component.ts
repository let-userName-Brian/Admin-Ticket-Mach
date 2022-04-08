import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { APICalls } from '../core/services/API.service';

@Component({
  selector: 'app-chart-one',
  templateUrl: './chart-one.component.html',
  styleUrls: ['./chart-one.component.scss']
})
export class ChartOneComponent implements OnInit, AfterViewInit {
  canvas: any;
  ctx: any;
  @ViewChild('myChart') myChart: any;

  constructor(private api: APICalls) { }

  ngAfterViewInit(): void {
    this.canvas = this.myChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
setTimeout(() => {
    new Chart(this.ctx, {
      type: 'bar',
      data: {
        datasets: [{
          label: '# of Vehicles Searched (All Time)',
          data: [
            this.api.mondayArray?.length,
            this.api.tuesdayArray?.length,
            this.api.wednesdayArray?.length,
            this.api.thursdayArray?.length,
            this.api.fridayArray?.length,
            this.api.saturdayArray?.length,
            this.api.sundayArray?.length
          ],
          backgroundColor: 'rgb(95,99,175)',
          borderColor: 'rgb(25,167,233)',
          borderWidth: 1
        }],
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            labels: {
              color: '#ffff'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#ffff'
            },
          },
          y: {
            ticks: {
              color: '#ffff'
            }
          },
        }
      }
    });
  }, 500);
  };

  ngOnInit() {
  };
};
