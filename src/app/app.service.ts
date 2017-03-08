
import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/Rx';

@Injectable()

export class AppService implements OnInit{
      http: any;
      baseUrl: string;
      token: string;
      id: string;
      redirect: string;


      constructor(http: Http, private route: ActivatedRoute) {
        this.http = http;
        this.baseUrl = 'https://api.spotify.com/v1/';

      }

      ngOnInit() {
        this.route.params.subscribe((url) => {
        this.token = url['access_token'];
        console.log(this.token);
        })
      }

      getPlaylists() {
        return this.http.get(this.baseUrl + 'me/playlists?&access_token=' + this.token).map(res => res.json());
      }

      login() {
        window.location.href = 'https://accounts.spotify.com/authorize?client_id=bacfafc3c299455ea7a545d07b0762f6&redirect_uri=http://localhost:4200&scope=user-read-private%20user-read-email&response_type=token&state=123';



      }



}
