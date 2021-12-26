import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss'],
})
export class PhotoAlbumComponent implements OnInit {
  public photos: any[] = [];
  public backupPhotos: any[] = [];
  public searchKey: string = '';
  public searchDropdown: any[] = [];
  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  refresh() {
    this.getPhotos();
  }

  searchPhoto(search: any) {
    this.searchDropdown = [];
    this.photos = [search];
  }

  searchPhotos(ev: any) {
    console.log(ev.target.value);
    this.searchKey = ev.target.value;
    if (!this.searchKey) {
      this.getPhotos();
    }
    let list: any[] = [];
    this.backupPhotos.map((v, i) => {
      if (v.title.toLowerCase().match(this.searchKey.toLowerCase())) {
        list.push(v);
      }
    });
    this.searchDropdown = list;
  }

  getPhotos() {
    this._apiService
      .getPhotos()
      .then((res: any) => {
        console.log(res);
        this.photos = res.splice(0, 10);
        this.backupPhotos = this.photos;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
