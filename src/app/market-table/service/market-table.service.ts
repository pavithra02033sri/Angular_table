import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  UserResponse } from '../model/market-table.model';

@Injectable({
  providedIn: 'root'
})
export class MarketTableService {

  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  getMarketData(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.usersUrl);
  }
}
