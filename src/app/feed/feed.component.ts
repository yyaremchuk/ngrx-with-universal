import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Post } from './models/post.model';
import { State } from '../app-store/+state/app.reducer';
import { loadApps } from '../app-store/+state/app.actions';
import { getPosts } from '../app-store/+state/app.selectors';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public posts$: Observable<Array<Post>>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(loadApps());
    this.posts$ = this.store.pipe(select(getPosts));
  }
}
