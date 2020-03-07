import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
