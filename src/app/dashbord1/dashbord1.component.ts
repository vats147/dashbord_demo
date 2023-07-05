import { Component, OnInit } from '@angular/core';
import { AllAPIChartService } from './../service/all-apichart.service';
import { Chart, registerables } from 'chart.js/auto';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  total:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', total: 5500 },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', total: 5500 },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', total: 5500 },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', total: 5500 },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', total: 5500 },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', total: 5500 },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', total: 5500 },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', total: 5500 },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', total: 5500 },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', total: 5500 },
];


@Component({
  selector: 'app-dashbord1',
  templateUrl: './dashbord1.component.html',
  styleUrls: ['./dashbord1.component.css']
})
export class Dashbord1Component implements OnInit {

  constructor(private AllAPIChartService: AllAPIChartService) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


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
