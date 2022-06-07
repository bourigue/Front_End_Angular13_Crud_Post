import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../controller/model/post.model';
import { PostService } from '../controller/service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postss:Post[];
  
  constructor(private postsserv:PostService,private router:Router) {
   //console.log( this.postsserv.findAll())


   }
  
  ngOnInit(): void {
    this.getAllPost();
    }


 public getAllPost(){
    this.postsserv.findAllpost().subscribe(data=>{
       this.postss=data;
     },
     err=>{
       console.log(err);
     }
     ); 
    }


    updatePost(p:Post){
      this.router.navigate(['/updatePost',p.id]);
      

    }
   


  
  
    deletePost(id: number){
      let confi=confirm("vous etes sur");
      if(confi){ this.postsserv.deletePost(id).subscribe( data => {
        console.log(data);
        this.getAllPost();
      })}
      else{
        console.log("errore")
      }
     }
















   } 


    

    
    
    
   


