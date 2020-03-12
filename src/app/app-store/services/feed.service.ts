import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../../feed/models/post.model';
import { Resources } from './resources.model';

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

  public getResources(): Observable<Resources> {
    return this.http.get<Resources>('http://localhost:3333/api/resources');
  }
}
