
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class AllAPIChartService {

  constructor(private http: HttpClient) { }

  carts() {
    return this.http.get('https://fakestoreapi.com/products');
  }



}
