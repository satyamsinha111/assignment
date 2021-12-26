import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public posts = [];
  //Here we can create a store for posts and do the same as I have done in login but currently to save time doing this way
  constructor(private _apiService: ApiService, private _router: Router) {}

  ngOnInit(): void {
    this.getPosts();
  }

  goToPostDetail(id: string) {
    this._router.navigate(['photo-detail-page'], {
      queryParams: {
        id: id,
      },
    });
  }

  getPosts() {
    return this._apiService
      .getPosts()
      .then((posts: any) => {
        console.log(posts);
        this.posts = posts.slice(0, 10);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
