import { Component, OnInit } from '@angular/core';
import { AllAPIChartService } from './../service/all-apichart.service';
import { Chart, ChartItem, registerables } from 'chart.js/auto';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  total: number;
}


// export interface PeriodicElement2 {
//   projectName: string,
//   employeesTeam: string,
//   teamLeader: string,
//   priority: string,
//   openTask: string,
//   complatedTask: string,
//   status: number,
//   document: string,
//   action: string

// }


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1234, name: 'Hydrogen', weight: 1.0079, symbol: 'Paid', total: 5500 },
  { position: 1234, name: 'Helium', weight: 4.0026, symbol: 'unPaid', total: 5500 },
  { position: 1234, name: 'Lithium', weight: 6.941, symbol: 'Paid', total: 5500 },
  { position: 1234, name: 'Beryllium', weight: 9.0122, symbol: 'unPaid', total: 5500 },
  { position: 1234, name: 'Boron', weight: 10.811, symbol: 'unPaid', total: 5500 },
  { position: 1234, name: 'Carbon', weight: 12.0107, symbol: 'unPaid', total: 5500 },
  { position: 1234, name: 'Nitrogen', weight: 14.0067, symbol: 'Paid', total: 5500 },
  { position: 1234, name: 'Oxygen', weight: 15.9994, symbol: 'Paid', total: 5500 },
  { position: 1234, name: 'Fluorine', weight: 18.9984, symbol: 'unPaid', total: 5500 },
  { position: 1123, name: 'Neon', weight: 20.1797, symbol: 'Paid', total: 5500 },
];


// const ELEMENT_DATA2: PeriodicElement2[] = [

//   {
//     projectName: 'Angular App',
//     employeesTeam: 'photos',
//     teamLeader: 'Romit',
//     priority: 'High',
//     openTask: '19',
//     complatedTask: '10',
//     status: 40,
//     document: 'xyz',
//     action: 'abc'
//   },
//   {
//     projectName: 'Angular App',
//     employeesTeam: 'photos',
//     teamLeader: 'Romit',
//     priority: 'High',
//     openTask: '19',
//     complatedTask: '10',
//     status: 40,
//     document: 'xyz',
//     action: 'abc'
//   }
// ];


@Component({
  selector: 'app-dashbord1',
  templateUrl: './dashbord1.component.html',
  styleUrls: ['./dashbord1.component.css']
})

export class Dashbord1Component implements OnInit {

  constructor(private AllAPIChartService: AllAPIChartService) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'total'];
  dataSource = ELEMENT_DATA;


  // main table
  // displayedColumns2: string[] = ['projectName', 'employeesTeam', 'teamLeader', 'priority', 'openTask', 'complatedtask', 'status', 'document', 'action'];
  // dataSource2 = ELEMENT_DATA2;


  public chart: any;
  allData: any = [];
  aPrice: any = [];

  ngOnInit(): void {
    this.fetchCart()
    // this.renderData(this.aPrice);
    // this.clientSurvayChart();
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

  // drag and drop

  movies = [
    {
      title: 'Submit Science Homework',
      logo: 'arrow_downward',
      priority: 'Low'
    },
    {
      title: 'Call Friends',
      logo: 'arrow_upward',
      priority: 'High'
    },
    {
      title: 'Dairy bill pay',
      logo: 'arrow_downward',
      priority: 'Low'
    },
    {
      title: 'Startup idea Thinking',
      logo: 'arrow_upward',
      priority: 'High'
    },
    {
      title: 'Product Sales Thinking',
      logo: 'arrow_downward',
      priority: 'Low'
    },
    {
      title: 'Krishna Bhajan',
      logo: 'arrow_upward',
      priority: 'High'
    },
    {
      title: 'Learning English',
      logo: 'arrow_downward',
      priority: 'Low'
    },
    {
      title: 'Order new Book',
      logo: 'arrow_upward',
      priority: 'High'
    },
    {
      title: 'call Police',
      logo: 'arrow_upward',
      priority: 'High'
    },
    {
      title: 'Krishna Bhajan',
      logo: 'arrow_upward',
      priority: 'High'
    }
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }


  // client survay chart
  clientSurvayChart() {

  }



}
