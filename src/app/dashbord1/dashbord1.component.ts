import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AllAPIChartService } from './../service/all-apichart.service';
import { Chart, ChartItem, registerables } from 'chart.js/auto';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { LoadingService } from './../service/loading.service';


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

export class Dashbord1Component implements OnInit, AfterViewInit {

  constructor(private AllAPIChartService: AllAPIChartService, public LoadingService: LoadingService) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'total'];
  dataSource = ELEMENT_DATA;

  AdisplayedColumns: string[] = ['projectName', 'employeesTeam', 'teamLeader', 'priority', 'openTask', 'completedTask', 'status', 'document', 'action'];
  AdataSource = AELEMENT_DATA;



  public chart: any;
  allData: any = [];
  aPrice: any = [];
  aSecondPrice: any = [];

  ngOnInit(): void {
    this.fetchCart()
    this.renderData(this.aPrice, this.aSecondPrice)
    this.chart2(this.aPrice, this.aSecondPrice)
    this.chart3(this.aPrice, this.aSecondPrice)
    this.chart4(this.aPrice, this.aSecondPrice)
  }


  ngAfterViewInit(): void {
    // this.renderData(this.aPrice, this.aSecondPrice)
    // this.chart2(this.aPrice, this.aSecondPrice)
    // this.chart3(this.aPrice, this.aSecondPrice)
    // this.chart4(this.aPrice, this.aSecondPrice)
    // console.log("This is all Data" + this.allData)
  }


  // transaction
  transaction_data = [
    {
      tranferr: 'Bank Transferr',
      why_transferr: 'Send Money',
      balance: 2099
    },
    {
      tranferr: 'Net banking',
      why_transferr: 'Pay Milk Bill',
      balance: 9500
    },
    {
      tranferr: 'Check',
      why_transferr: 'Pay Fees',
      balance: 25000
    },
    {
      tranferr: 'UPI',
      why_transferr: 'Collage Fees',
      balance: 6666
    },
    {
      tranferr: 'Bank Transferr',
      why_transferr: 'Send Money',
      balance: 2099
    },
    {
      tranferr: 'UPI',
      why_transferr: 'Tuition Fees',
      balance: 2099
    },
    {
      tranferr: 'Bank Transferr',
      why_transferr: 'Send Money',
      balance: 2099
    },
    {
      tranferr: 'Bank Transferr',
      why_transferr: 'Send Money',
      balance: 2099
    },
    {
      tranferr: 'Bank Transferr',
      why_transferr: 'Send Money',
      balance: 2099
    },
    {
      tranferr: 'Bank Transferr',
      why_transferr: 'Send Money',
      balance: 2099
    },
    {
      tranferr: 'Bank Transferr',
      why_transferr: 'Send Money',
      balance: 2099
    },
    {
      tranferr: 'Bank Transferr',
      why_transferr: 'Send Money',
      balance: 2099
    },
    {
      tranferr: 'Bank Transferr',
      why_transferr: 'Send Money',
      balance: 2099
    },
    {
      tranferr: 'Bank Transferr',
      why_transferr: 'Send Money',
      balance: 2099
    }

  ]

  // Document
  document_Data = [
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'School Document',
      d_size: '.pdf 5.3 MB'
    },
    {
      d_name: 'Python Code',
      d_size: '.py 3.52 KB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Collage Document',
      d_size: '.pdf 4.3 MB'
    },
    {
      d_name: 'Company Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'SRS',
      d_size: '.pdf 5 MB'
    },
    {
      d_name: 'Laptop Bill',
      d_size: '.pdf 1.1 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
    {
      d_name: 'Aggrement Document',
      d_size: '.doc 4.3 MB'
    },
  ]

  // dashbord card data
  card_data = [
    {
      card_logo: 'shopping_cart',
      card_title: 'Total Sales',
      card_total: 3786,
      persontage: 15,
      card_performace: 'Decrease',
      card_background_color: '#6f42c1',
      card_color: 'red',
      card_trending: 'trending_down'
    },
    {
      card_logo: 'people',
      card_title: 'Customer',
      card_total: 1021,
      persontage: 25,
      card_performace: 'Increase',
      card_background_color: '#fd7e14',
      card_color: '#008000',
      card_trending: 'trending_up'
    },
    {
      card_logo: 'local_activity',
      card_title: 'Employee Activity',
      card_total: 55000,
      persontage: 9,
      card_performace: 'Decrease',
      card_background_color: '#4caf50',
      card_color: 'red',
      card_trending: 'trending_down'
    },
    {
      card_logo: 'attach_money',
      card_title: 'Total Profit',
      card_total: 56999,
      persontage: 1,
      card_performace: 'Increase',
      card_background_color: '#2196f3',
      card_color: '	#008000',
      card_trending: 'trending_up'
    }
  ]






  //product  api call
  private fetchCart() {
    this.AllAPIChartService.carts().subscribe((data) => {
      this.allData = data;

      // this.LoadingService.setLoading(true);

      if (this.allData != null) {
        for (let i = 0; i < this.allData.length; i++) {
          let romit: any = this.allData[i].price + 45;
          this.aPrice.push(romit)
        }

        for (let i = 5; i < this.allData.length; i++) {
          this.aSecondPrice.push(this.allData[i].price * .5)
        }
      }

    })
  }


  // chartJS
  renderData(aPrice: any, aSecondPrice: any) {
    console.log(this.aPrice)

    this.chart = new Chart("myChart", {
      type: 'bar', //this denotes tha type of chart

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
            backgroundColor: '#51ae65'
          },
          {
            label: "Profit",
            data: aSecondPrice,
            backgroundColor: '#AE519A'
          }
        ]
      },
      options: {
        aspectRatio: 3,

        interaction: {
          mode: 'x'
        },
        plugins: {
          subtitle: {
            display: true,
            text: 'Price and Profit Chart'
          }
        },

        
      }


    });
  }

  // chart 2
  chart2(aPrice: any, aSecondPrice: any) {
    console.log(this.aPrice)
    this.chart = new Chart("myChart2", {
      type: 'radar', //this denotes tha type of chart

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
            data: aSecondPrice,
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 1
      }

    });
  }

  // chart 3
  chart3(aPrice: any, aSecondPrice: any) {
    console.log(this.aPrice)
    this.chart = new Chart("myChart3", {
      type: 'bar', //this denotes tha type of chart

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
            backgroundColor: '#5C5CFF'
          },
          {
            label: "Profit",
            data: aSecondPrice,
            backgroundColor: '#FFFF5C'
          }
        ]
      },
      options: {
        aspectRatio: 3
      }

    });
  }

  // chart 4
  chart4(aPrice: any, aSecondPrice: any) {
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
            data: aSecondPrice,
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 3
      }

    });
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


}
