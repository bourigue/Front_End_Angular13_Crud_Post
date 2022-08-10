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
  //id of post
    id:number;
  //the post who i will updared
    post: Post=new Post();
  constructor(private postservices:PostService ,private activaterouter:ActivatedRoute) { }

  //for show the all information of the current post
  ngOnInit(): void {
    this.id=this.activaterouter.snapshot.params['id']
     this.postservices.findOnepost(this.id).subscribe( data =>{
   this.post=data;
     },
     error => console.log(error));
                 }

// updated the post
  updatePost(){
   this.postservices.updatePost(this.id,this.post).subscribe( data =>{
       },
      error => console.log(error))
  }

//execute the metheode in form update
  onSubmit(){this.updatePost();}



}


