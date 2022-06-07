import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../controller/model/post.model';
import { PostService } from '../controller/service/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
    post: Post=new Post();
  constructor(private postservices:PostService ,private activaterouter:ActivatedRoute) { }

  ngOnInit(): void {
    
  console.log(atob(this.activaterouter.snapshot.params['id']));

 this.postservices.createPost(this.post).subscribe( data =>{
 this.post=findOnepost(this.activaterouter.snapshot.params['id']) ;
},
error => console.log(error));
  }

  updatePost(){
 
   // this.postservices.updatePost(this.router.pa)
   //this.postservices.updatePost();

  }
  onSubmit(){

  }



}


