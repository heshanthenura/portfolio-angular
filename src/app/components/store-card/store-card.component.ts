import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { STORE } from 'src/app/store';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss'],
})
export class StoreCardComponent {
  @Input() store!: STORE;
}
