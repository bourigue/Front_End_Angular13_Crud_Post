import { Component, OnInit } from '@angular/core';
import { Post } from '../controller/model/post.model';
import { PostService } from '../controller/service/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

 post: Post = new Post();



  constructor(private postsserv:PostService) { }

  ngOnInit(): void {}

  // execute the method
  onSubmit(){
    this.savePost();
  }
// add the post
  savePost(){
    this.postsserv.createPost(this.post).subscribe( data =>{
      console.log(data);
      },
    error => console.log(error));
  }




}
