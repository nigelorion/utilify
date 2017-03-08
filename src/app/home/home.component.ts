import { Component, OnInit } from '@angular/core';
import { AppService } from  '../app.service';
import {Http} from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';
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


  constructor(private service: AppService, public http: Http, public route: ActivatedRoute, public router: Router) {


   }




  login() {
    this.service.login();
  }

  ngOnInit() {
    // this.token = this.route.params['#access_token'];


    this.route.queryParams.subscribe(params => {
    this.token = params['access_token'];
    console.log(this.token);
      })



    // this.route.params.subscribe((url) => {
    // this.token = url['access_token'];
    // console.log(this.token);
    // })
  }

  // https://accounts.spotify.com/authorize?client_id=bacfafc3c299455ea7a545d07b0762f6&redirect_uri=http://localhost:4200/callback&scope=user-read-private%20user-read-email&response_type=token&state=123




}
