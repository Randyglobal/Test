import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { TaskListComponent } from './task/task-list/task-list.component';

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
{
  path: 'addTask',
  component: AddTaskComponent
},
{
  path: 'list',
  component: TaskListComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
