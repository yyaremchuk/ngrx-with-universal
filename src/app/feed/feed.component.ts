import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from './models/post.model';
import { FeedService } from './services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public posts$: Observable<Array<Post>>;
  // public posts: Array<Post> = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     title:
  //       'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  //     body:
  //       'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     title: 'qui est esse',
  //     body:
  //       'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
  //     body:
  //       'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
  //   }
  // ];

  constructor(private feedService: FeedService) {}

  ngOnInit() {
    this.posts$ = this.feedService.getAll();
  }
}
