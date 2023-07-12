import { Component } from '@angular/core';
import { LoadingService } from './../service/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  constructor(public LoadingService: LoadingService) { }

}
