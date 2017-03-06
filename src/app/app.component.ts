import { Component, trigger, transition, style, animate  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  trigger(
    'menuSlide',
    [
      transition(
      ':enter', [
        style({left: '-140px', opacity: 1}),
        animate('150ms', style({left: '0px', opactiy: 0}))
      ]
    ),
    transition(
      ':leave', [
        style({transform: 'translateX(0)', 'opacity': 1}),
        animate('150ms', style({transform: 'translateX(100%)', opacity: 0}),

      )]
    )]
  )
]

})
export class AppComponent {

  menu = false;

  toggleSideMenu = true;

  closeSideMenu = false;

  title = 'Utilify';

  sideButton() {
    this.menu = !this.menu;
    this.toggleSideMenu = !this.toggleSideMenu;
    this.closeSideMenu = !this.closeSideMenu;
  }


}
