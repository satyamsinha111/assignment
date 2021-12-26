import { ApiService } from './../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-detail-page',
  templateUrl: './photo-detail-page.component.html',
  styleUrls: ['./photo-detail-page.component.scss'],
})
export class PhotoDetailPageComponent implements OnInit {
  public post: any = {};
  constructor(
    private router: Router,
    private _apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this._apiService
        .getPostById(data.id)
        .then((res) => {
          console.log(res);
          this.post = res;
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  goBack() {
    this.router.navigate(['posts']);
  }
}
