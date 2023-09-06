import { Component } from '@angular/core';
import { SideNav } from './sideNav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  list :SideNav[]=[
    {
      number: '1',
      icon:'fa-solid fa-house fa-lg'
    },
    {
      number: '2',
      icon:'fa-solid fa-table-columns fa-lg'
    },
    {
      number: '3',
      icon:'fa-solid fa-box fa-lg'
    },
    {
      number: '4',
      icon:'fa-solid fa-cart-shopping fa-lg'
    },
    {
      number: '5',
      icon:'fa-solid fa-gear fa-lg'
    },
   ]

}
