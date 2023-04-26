import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss','./tablet.component.scss','./mobile.component.scss']
})
export class NavBarComponent {

  logo = '7';

  name = 'cademy'

  hideList: boolean = true;

  toggle(){
    this.hideList = !this.hideList
    // alert('Yess')
  }


}
