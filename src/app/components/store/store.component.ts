import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { STORE } from 'src/app/store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  constructor(private http: HttpClient) {}
  storeData: STORE[] = [];

  ngOnInit(): void {
    this.http.get<{ store: STORE[] }>('../../../assets/store.json').subscribe(
      (data) => {
        this.storeData = data.store;
      },
      (error) => {
        console.error('Error fetching store data:', error);
      }
    );
  }
}
