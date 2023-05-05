import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { RouterGuard } from './Guard/router.guard';

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
},
{
  path: 'edit-task/:id',
  component: EditTaskComponent,
  // canActivate: [RouterGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
