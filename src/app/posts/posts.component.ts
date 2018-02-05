import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (res)=>{
        this.posts = res;
      },
      (err)=>{
        console.log("Error while fetching posts ", err);
      }
    );
  }

}
