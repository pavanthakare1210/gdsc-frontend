import { Component, AfterViewInit } from '@angular/core';
// import { Chart } from 'chart.js';


@Component({
  selector: 'app-month-progress',
  templateUrl: './month-progress.component.html',
  styleUrls: ['./month-progress.component.css']
})
export class MonthProgressComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    // new Chart('monthlyProgressChart', {
    //   type: 'line',
    //   data: {
    //     labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
    //     datasets: [{
    //       label: 'Progress',
    //       data: [20, 35, 45, 60, 75, 80, 90, 95],
    //       borderWidth: 3,
    //       borderColor: '#3a0ca3',
    //       fill: false
    //     }]
    //   }
    // });

  }

}
