import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  name = JSON.parse(localStorage.getItem('user') || '{}');
  capex = 'CAPEX';
  opex = 'OPEX';
  color = '#000000';
  color_assets = '#ffffff';
  assets = 'ASSETS';
  constructor() {}

  ngOnInit(): void {}
}
