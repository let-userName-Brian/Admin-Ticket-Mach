import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { APICalls } from '../core/services/API.service';

@Component({
  selector: 'app-chart-two',
  templateUrl: './chart-two.component.html',
  styleUrls: ['./chart-two.component.scss']
})
export class ChartTwoComponent implements OnInit, AfterViewInit {
  canvas: any;
  ctx: any;
  @ViewChild('myChart') myChart: any;

  constructor(private api: APICalls) { }

  ngAfterViewInit(): void {
    this.canvas = this.myChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    Chart.defaults.interaction.mode = 'nearest';
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    setTimeout(() => {
      new Chart(this.ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Defenders',
            data: [4, 4, 4, 4, 4, 4, 4],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'Customers',
            data: [
              this.api.mondayArray?.length,
              this.api.tuesdayArray?.length,
              this.api.wednesdayArray?.length,
              this.api.thursdayArray?.length,
              this.api.fridayArray?.length,
              this.api.saturdayArray?.length,
              this.api.sundayArray?.length
            ],
            fill: false,
            borderColor: 'red',
            tension: 0.1
          },
          {
            label: 'Minimum Needed',
            data: [3, 3, 3, 3, 3, 3, 3],
            fill: false,
            borderColor: 'green',
            tension: 0.1
          }]
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
              }
            },
            y: {
              ticks: {
                color: '#ffff'
              }
            }
          }
        }
      });
    }, 500);
  }

  ngOnInit(): void {
  }

}
