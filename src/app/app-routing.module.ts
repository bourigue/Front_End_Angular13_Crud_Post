import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'PostCreate',component:PostCreateComponent},
  {path:'ListPost',component:PostListComponent},
  {path:'updatePost/:id',component:UpdatePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
