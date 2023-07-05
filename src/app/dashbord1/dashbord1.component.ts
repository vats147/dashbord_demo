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
  allData: any = [];
  aPrice: any = [];

  ngOnInit(): void {
    this.fetchCart()
    // this.renderData(this.aPrice);
  }

  //product api call
  private fetchCart() {
    this.AllAPIChartService.carts().subscribe((data) => {
      this.allData = data;
      if (this.allData != null) {
        // this.allData.map((a: any) => {
        //   this.aPrice.Push(a.price);
        // })

        for (let i = 0; i < this.allData.length; i++) {
          this.aPrice.push(this.allData[i].price)
        }
      }
    })

    this.renderData(this.aPrice)
  }


  // chartJS
  renderData(aPrice: any) {
    console.log(this.aPrice)
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
            label: "Price",
            data: aPrice,
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: aPrice,
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 4
      }

    });
  }


  //chartjs
  renderSecondChart() {

  }

}
