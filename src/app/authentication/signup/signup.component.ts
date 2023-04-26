import { Component } from '@angular/core';
import { Iuser } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss','../signin/signin.component.scss']
})
export class SignupComponent {

  constructor( private Store: UserService){}

  user: Iuser = {
    username: '',
    email: '',
    password: ''
  }

toggle(){
  this.Store.signUp(this.user)
}
}
