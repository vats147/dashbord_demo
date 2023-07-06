import { Component } from '@angular/core';
import { PeriodicElement } from '../periodic-element';





const ELEMENT_DATA: PeriodicElement[] = [

];



@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})


export class ProjectTableComponent {

  displayedColumns: string[] = ['projectName', 'employeesTeam', 'teamLeader', 'priority', 'openTask', 'complatedtask', 'status', 'document', 'action'];
  dataSource = ELEMENT_DATA;

}
