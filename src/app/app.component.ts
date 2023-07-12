import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { LoadingService } from './service/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Dadshbord_Demo';
  constructor(public LoadingServiceA: LoadingService) { }


  ngOnInit(): void {
    this.LoadingServiceA.setLoading(true);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.LoadingServiceA.setLoading(false)
    }, 500);
  }


}
