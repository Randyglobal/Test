import { Component } from '@angular/core';
import { Iuser } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor( private Store: UserService){}

  user: Iuser = {
    username:'',
    password: ''
  }

toggle(){
  this.Store.Login(this.user)
}
 
}

