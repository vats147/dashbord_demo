import { Component, OnInit } from '@angular/core';
import { AllAPIChartService } from './../service/all-apichart.service';
import { Chart, registerables } from 'chart.js/auto';



@Component({
  selector: 'app-dashbord1',
  templateUrl: './dashbord1.component.html',
  styleUrls: ['./dashbord1.component.css']
})
export class Dashbord1Component implements OnInit {

  constructor(private AllAPIChartService: AllAPIChartService) { }

  public chart: any;
  allData: any;

  ngOnInit(): void {
    this.fetchCart()
    this.renderData()
  }


  private fetchCart() {
    this.AllAPIChartService.carts().subscribe((data) => {
      this.allData = data;
      if (this.allData != null) {
        this.allData.map((a: any) => {
          console.log(a);
        })
      }
    })
  }

  renderData() {

    this.chart = new Chart("myChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'],
        datasets: [
          {
            label: "Sales",
            data: ['10', '20', '30', '40', '50',
              '80', '70', '60', '50', '80', '10', '55'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['100', '50', '80', '10', '90',
              '14', '24', '65', '21', '25', '45', '100'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 4
      }

    });
  }


}
