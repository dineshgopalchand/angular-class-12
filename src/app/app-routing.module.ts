import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { GitFollowerComponent } from './git-follower/git-follower.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReusableDemoComponent } from './reusable-demo/reusable-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GitUserProfileComponent } from './git-user-profile/git-user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', component: PostsComponent },
  { path: 'git-followers/users/:username/:userid', component: GitUserProfileComponent },
  { path: 'git-followers', component: GitFollowerComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'resuable-demo', component: ReusableDemoComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
