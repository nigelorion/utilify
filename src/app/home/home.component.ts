import { Component, OnInit } from '@angular/core';
// import {
//   HandyOauthStorageKeys,
//   HandyOauthUserDataInterface,
//   HandyOauthStorageService,
//   HandyOauthConfigProvidersService,
//   HandyOauthProvidersController
// } from 'ng2-handy-oauth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login() {
    // this.oauth.login(spotify);
  }

}
