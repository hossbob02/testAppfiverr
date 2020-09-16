import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './services/guard/auth.guard';
import { NoauthService } from './services/guard/noauth.service';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'articles', component:ArticlesComponent ,canActivate:[AuthGuard]},
  { path: 'signin', component:SigninComponent,canActivate:[NoauthService] },
  { path: 'signup', component:SignupComponent,canActivate:[NoauthService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
