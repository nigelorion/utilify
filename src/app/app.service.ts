
import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/Rx';

@Injectable()

export class AppService {

      http: any;
      baseUrl: string;
      token: string;
      id: string;
      redirect: string;
      url: string;
      user: string;

      constructor(http: Http, private route: ActivatedRoute) {

        this.http = http;
        this.baseUrl = 'https://api.spotify.com/v1/';

        var hashParams = {access_token: null};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }

        this.token = hashParams.access_token;
        console.log(this.token);

      }

      getUser() {
        return this.http.get(this.baseUrl + 'me?&access_token=' + this.token).map(res => res.json());
      }

      getPlaylists() {
        return this.http.get(this.baseUrl + 'me/playlists?&access_token=' + this.token).map(res => res.json());
      }

      getRecTracks(genre, tempo) {
        return this.http.get(this.baseUrl + 'recommendations?&seed_genres=' + genre + '&limit=25&target_tempo=' + tempo + '&access_token=' + this.token).map(res => res.json());
      }

      addTrack(trackId, playlistId, userId) {
          console.log(trackId, playlistId);
        // this.user = "motiusclyde"
        return this.http.post(this.baseUrl + 'users/' + userId + '/playlists/' + playlistId + '/tracks?uris=' + trackId + '&access_token=' + this.token).map(res => res.json());
      }

      getPlaylistTracks(playlistId, userId) {
        // this.user = "motiusclyde"
        return this.http.get(this.baseUrl + 'users/' + userId + '/playlists/' + playlistId + '/tracks?offset=0&limit=100&access_token=' + this.token).map(res => res.json());
      }

      login(token) {
        window.location.href = 'https://accounts.spotify.com/authorize?client_id=bacfafc3c299455ea7a545d07b0762f6&redirect_uri=http://localhost:4200/playlists&scope=user-read-private%20user-read-email%20playlist-modify-public%20playlist-modify-private&response_type=token&state=123&show_dialog=true';
        this.token = token;
        console.log(this.token + "pass token to service");

      }

}
