import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// for inject the hhtpClient in the services PostServices
@Injectable({
  providedIn: 'root'
})

export class PostService {


  private baseURL ='http://localhost:8080/listposts';


  constructor(private http: HttpClient) {}


  // @ts-ignore

  // @ts-ignore
 posts: Array<Post>;

//get all post from api
findAllpost():Observable<Post[]>{
return this.http.get<Post[]>(this.baseURL);
}

//get the  post who have th id
findOnepost(id:number):Observable<Post>{
  return this.http.get<Post>(this.baseURL+"/"+id);
  }
//delete the post
deletePost(id: number): Observable<Object>{
  return this.http.delete(this.baseURL+"/"+id);
}
//add the post
createPost(post: Post): Observable<Object>{
  return this.http.post(this.baseURL, post);
}

//update the post
updatePost(id: number, post: Post): Observable<Object>{
return this.http.put(`${this.baseURL}/${id}`, post);}




}
