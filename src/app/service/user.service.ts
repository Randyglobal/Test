import { Injectable } from '@angular/core';
import { Iuser } from '../interface/user.interface';
import { LocalstoreService } from './localstore.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get: any;
  set: any;

  constructor( private LocalStore: LocalstoreService) { }

  Login(user: Iuser){
    const register = this.LocalStore.get('User');
    let loginUser;
    for(const userObject of register.data){
      // if(userObject['username'] == '' && userObject['password'] == '' ){
      //   alert('You are not a user')
      // }
      if (user['username'] == userObject['username'] && user['password'] == userObject['password'] ) {
        alert('Successfully Login,' + userObject.username);

        window.location.replace('');
        return;
      }else{
        continue
      }
    }
    alert('Sorry, wrong details')
  }
  signUp(user: Iuser){
    const setToStorage = this.LocalStore.get('User');
    let storeLocally: Object[] = [];
    if (setToStorage.status == true) {
      storeLocally = setToStorage.data;
      // console.log(setToStorage);
      
    for(const objectUsers of setToStorage.data){
      if (user['username'] == objectUsers['username'] || user['email'] == objectUsers['email']) {
        alert('Sorry, account already exist');
        return;
      }else{
        continue
      }
    }
  }
    storeLocally.push(user);
    this.LocalStore.set('User', storeLocally);
    alert('Wow, You Successfully loggedin')
  }
}
