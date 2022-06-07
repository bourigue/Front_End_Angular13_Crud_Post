import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PostService {


  private baseURL ='http://localhost:8080/listposts';
  

  constructor(private http: HttpClient) {}


  // @ts-ignore
 
  // @ts-ignore
 posts: Array<Post>;


findAllpost():Observable<Post[]>{
return this.http.get<Post[]>(this.baseURL);
}

findOnepost(id:any):Observable<Post>{
  return this.http.get<Post>(this.baseURL+"/"+id);
  }

deletePost(id: number): Observable<Object>{
  return this.http.delete(this.baseURL+"/"+id);
}

createPost(post: Post): Observable<Object>{
  return this.http.post(this.baseURL, post);
}


updatePost(id: number, post: Post): Observable<Object>{
return this.http.put(`${this.baseURL}/${id}`, post);}




}
