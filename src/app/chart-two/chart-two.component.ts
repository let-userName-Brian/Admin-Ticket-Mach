import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart-two',
  templateUrl: './chart-two.component.html',
  styleUrls: ['./chart-two.component.scss']
})
export class ChartTwoComponent implements OnInit, AfterViewInit {
  canvas: any;
  ctx: any;
  @ViewChild('myChart') myChart: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.canvas = this.myChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    Chart.defaults.interaction.mode = 'nearest';
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Defenders',
          data: [10, 8, 13, 5, 12, 5, 4],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
        {
          label: 'Customers',
          data: [44, 41, 32, 45, 33, 10, 9],
          fill: false,
          borderColor: 'red',
          tension: 0.1
        },
        {
          label: 'Minimume Needed',
          data: [8, 8, 8, 8, 8, 2, 2],
          fill: false,
          borderColor: 'green',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend:{
            labels:{
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
    })
  }

  ngOnInit(): void {
  }

}
