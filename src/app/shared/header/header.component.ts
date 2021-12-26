import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public mobilenumber: any = NaN;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mobilenumber = localStorage.getItem('mobile');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
