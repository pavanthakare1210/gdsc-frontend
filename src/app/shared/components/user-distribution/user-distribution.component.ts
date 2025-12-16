import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-user-distribution',
  templateUrl: './user-distribution.component.html',
  styleUrls: ['./user-distribution.component.css']
})
export class UserDistributionComponent implements AfterViewInit {

  ngAfterViewInit(): void {

  //   new Chart('userDistributionChart', {
  //     type: 'pie',
  //     data: {
  //       labels: ['Admin', 'Teachers', 'Students'],
  //       datasets: [{
  //         data: [10, 30, 60],
  //         borderWidth: 2,
  //         backgroundColor: [
  //           '#7209b7',
  //           '#ff9e00',
  //           '#06d6a0'
  //         ]
  //       }]
  //     }
  //   });

  }

}
