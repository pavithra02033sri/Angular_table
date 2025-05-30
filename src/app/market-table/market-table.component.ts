import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { MarketData, UserResponse } from './model/market-table.model';
import { MarketTableService } from './service/market-table.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-market-table',
  templateUrl: './market-table.component.html',
  styleUrls: ['./market-table.component.scss'],

})
export class MarketTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('staticPaginator') staticPaginator!: MatPaginator;
  @ViewChild('staticSort') staticSort!: MatSort;
  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'phone',
    'website',
    'companyName',
    'catchPhrase',
    'city',
  ];

  staticDisplayedColumns: string[] = [
    'code',
    'name',
    'currency',
    'marketCap',
    'price',
    'type',
    'netvariation',
    'change',
    'relatednews',
  ];

  ELEMENT_DATA: MarketData[] = [
    {
      code: 'ZL04',
      name: 'NAVOI MININ',
      currency: 'USD',
      marketCap: '-',
      price: '3',
      type: 'Bonds',
      netvariation: '-0.8',
      change: '-0.45',
      relatednews: '-',
    },
    {
      code: 'AL04',
      name: 'NAVOI MININ',
      currency: 'USD',
      marketCap: '-',
      price: '4',
      type: 'Equity',
      netvariation: '-',
      change: '-',
      relatednews: '-',
    },
    {
      code: 'SL04',
      name: 'NAVOI MININ',
      currency: 'USD',
      marketCap: '-',
      price: '19',
      type: 'Etfs',
      netvariation: '-',
      change: '-',
      relatednews: '-',
    },
    {
      code: 'CL04',
      name: 'NAVOI MININ',
      currency: 'USD',
      marketCap: '-',
      price: '-',
      type: 'Bonds',
      netvariation: '-',
      change: '-',
      relatednews: '-',
    },
  ];

  dataSource = new MatTableDataSource<UserResponse>([]);
  staticDataSource = new MatTableDataSource<MarketData>(this.ELEMENT_DATA);

  constructor(
    private marketTableService: MarketTableService,
  
  ) { }

  ngOnInit(): void {
    this.loadUsersData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.staticDataSource.paginator = this.staticPaginator;
    this.staticDataSource.sort = this.staticSort;
  }

  loadUsersData(): void {
    this.marketTableService
      .getMarketData()
      .subscribe((response) => {
        this.dataSource.data = response;
        // console.log(response);
        response.forEach((user: any) => {
          console.log(`ID: ${user.id}, Name: ${user.name}`);
        });

      });
  }
}
