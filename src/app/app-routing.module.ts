import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
  path: '',
  component: AppComponent,
  children:[
    {
      path: 'main',
      component: MainComponent
    }
  ]
},
{
  path: 'signIn',
  component: SigninComponent,
},
{
  path: 'signup',
  component: SignupComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
