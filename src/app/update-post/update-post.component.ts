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
    id:number;
    post: Post=new Post();
  constructor(private postservices:PostService ,private activaterouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activaterouter.snapshot.params['id']
     console.log(this.activaterouter.snapshot.params['id']);


 this.postservices.findOnepost(this.id).subscribe( data =>{
   this.post=data;
   console.log(data);

      },
     error => console.log(error));
                 }

  updatePost(){
    
   this.postservices.updatePost(this.id,this.post).subscribe( data =>{
       },
      error => console.log(error))
  }


  onSubmit(){
    this.updatePost();
  }



}


