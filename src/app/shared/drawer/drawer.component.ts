import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  redirect(payload: any) {
    switch (payload) {
      case 'posts':
        this._router.navigate(['posts']);
        break;
      case 'albums':
        this._router.navigate(['photo-album']);
        break;
      default:
        break;
    }
  }
}
