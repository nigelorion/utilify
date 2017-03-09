import { Component, trigger, transition, style, animate  } from '@angular/core';
import { AppService } from  './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService],
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

  token: string;

  sendToken: string;

  constructor(private service: AppService) {

  }


  sideButton() {
    this.menu = !this.menu;
    this.toggleSideMenu = !this.toggleSideMenu;
    this.closeSideMenu = !this.closeSideMenu;

  }

  loginRoute() {
    this.sendToken = this.token;
    this.service.login(this.sendToken);
  }


}
