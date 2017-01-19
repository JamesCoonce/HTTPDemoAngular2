import { Component, OnInit } from '@angular/core';
import { PostsServiceService } from './posts-service.service';
import { Post } from './post';
// Add the RxJS Observable operators.

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  errorMessage: string;
  posts: Post[];
  mode = 'Observable';
  constructor(private postService: PostsServiceService) { }

  ngOnInit() {
    console.log(this.getPosts());
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(
        posts => this.posts = posts,
        error => this.errorMessage = <any>error
      );
  }

}
