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

export interface mainTable {
  projectName: string;
  employeesTeam: string;
  teamLeader: string;
  priority: string;
  openTask: number;
  completedTask: number;
  status: number;
  document: string;
  action: string;
}

const AELEMENT_DATA: mainTable[] = [
  {
    projectName: "Angular App",
    employeesTeam: "Romit",
    teamLeader: "Sarah Williams",
    priority: "High",
    openTask: 21,
    completedTask: 3,
    status: 50,
    document: "projectx_document.docx",
    action: "Review and finalize"
  },
  {
    projectName: "Reactjs App",
    employeesTeam: "Romit",
    teamLeader: "lio Williams",
    priority: "High",
    openTask: 45,
    completedTask: 3,
    status: 80,
    document: "projectx_document.docx",
    action: "Review and finalize"
  },
  {
    projectName: "Android App",
    employeesTeam: "ABC",
    teamLeader: "lio same",
    priority: "Low",
    openTask: 15,
    completedTask: 3,
    status: 80,
    document: "projectx_document.docx",
    action: "Review and finalize"
  },
  {
    projectName: "IOT",
    employeesTeam: "XYZ",
    teamLeader: "om joi",
    priority: "Low",
    openTask: 15,
    completedTask: 3,
    status: 80,
    document: "projectx_document.docx",
    action: "Review and finalize"
  },
];



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





@Component({
  selector: 'app-dashbord1',
  templateUrl: './dashbord1.component.html',
  styleUrls: ['./dashbord1.component.css']
})

export class Dashbord1Component implements OnInit {

  constructor(private AllAPIChartService: AllAPIChartService) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'total'];
  dataSource = ELEMENT_DATA;

  AdisplayedColumns: string[] = ['projectName', 'employeesTeam', 'teamLeader', 'priority', 'openTask', 'completedTask', 'status', 'document', 'action'];
  AdataSource = AELEMENT_DATA;



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
        for (let i = 0; i < this.allData.length; i++) {
          this.aPrice.push(this.allData[i].price)
        }
      }
    })

    this.renderData(this.aPrice)
    this.chart2(this.aPrice)
    this.chart3(this.aPrice)
    this.chart4(this.aPrice)
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

  // chart 2
  chart2(aPrice: any) {
    console.log(this.aPrice)
    this.chart = new Chart("myChart2", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['January',
          'February',
          'March',
          'April'],
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

  // chart 3
  chart3(aPrice: any) {
    console.log(this.aPrice)
    this.chart = new Chart("myChart3", {
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

  // chart 4
  chart4(aPrice: any) {
    console.log(this.aPrice)
    this.chart = new Chart("myChart4", {
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


  // project status
  status = [{ "project_name": "Angular App", "progress": 78 }, { "project_name": "E-commerce App", "progress": 50 }, { "project_name": "Mobile Game", "progress": 66 }, { "project_name": "Social Media Platform", "progress": 99 }, { "project_name": "Data Analysis Tool", "progress": 85 }, { "project_name": "Messaging App", "progress": 54 }, { "project_name": "Fitness Tracker", "progress": 48 }, { "project_name": "Travel Planner", "progress": 100 }, { "project_name": "Inventory Management System", "progress": 58 }, { "project_name": "Education Platform", "progress": 20 }]




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
