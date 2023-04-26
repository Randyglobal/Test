import { Component } from '@angular/core';
import { LogoutComponent } from '../authentication/logout/logout.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss','../nav-bar/tablet.component.scss','../nav-bar/mobile.component.scss']
})
export class NavComponent {

  // constructor(private logout: UserService){}
  logo = '7';

  name = 'cademy'


  

  toggle(){
    localStorage.clear()
  }
}
