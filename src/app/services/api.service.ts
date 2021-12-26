import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _base_url: string = 'https://jsonplaceholder.typicode.com';

  constructor(private _httpClient: HttpClient) {}

  getPosts() {
    return this._httpClient.get(`${this._base_url}/posts`).toPromise();
  }

  getPostById(id: string) {
    return this._httpClient.get(`${this._base_url}/posts/${id}`).toPromise();
  }

  getPhotos() {
    return this._httpClient.get(`${this._base_url}/photos`).toPromise();
  }
}
