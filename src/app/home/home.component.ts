import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from  '../app.service';
import {Http} from '@angular/http';

import {Router, ActivatedRoute, Params} from '@angular/router';

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
  styleUrls: ['./home.component.scss'],
  providers: [AppService]
})
export class HomeComponent implements OnInit {

    token: string;
    sendToken: string;



    constructor(private service: AppService, public http: Http, private route: ActivatedRoute, private router: Router) {
      // route.queryParams.subscribe(
      //   data => console.log('queryParams', data['access_token']));
      //   console.log(this.params);
    }




    login() {

      this.sendToken = this.token



      this.service.login(this.sendToken);

      // this.route.queryParams.subscribe(
      //   data => console.log('queryParams', data['access_token']));

    }

  ngOnInit() {





  }
}

  // https://accounts.spotify.com/authorize?client_id=bacfafc3c299455ea7a545d07b0762f6&redirect_uri=http://localhost:4200/callback&scope=user-read-private%20user-read-email&response_type=token&state=123
