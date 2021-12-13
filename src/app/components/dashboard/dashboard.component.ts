import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  name = JSON.parse(localStorage.getItem('user') || '{}');
  capex = 'CAPEX';
  opex = 'OPEX';
  color = '#000000';
  color_assets = '#ffffff';
  assets = 'ASSETS';

  today = Date.now();

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
