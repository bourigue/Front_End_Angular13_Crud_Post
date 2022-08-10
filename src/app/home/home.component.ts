import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private baseURL ='http://localhost:8080/listposts';

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    
  }
  file:any;
  selectfile(event:any){
   this.file=event.target.files[0];
    console.log(this.file);
    
  }

  uploadFile(){
   let formData=new FormData();
   formData.append("file",this.file);
   this.http.post(this.baseURL,formData).subscribe( data =>{
    console.log(data);
    },
  error => console.log(error));;
  }
}

