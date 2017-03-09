
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

      ngOnInit() {


      }

      getPlaylists() {
        return this.http.get(this.baseUrl + 'me/playlists?&access_token=' + this.token).map(res => res.json());
      }

      getRecTracks(genre, tempo) {
        return this.http.get(this.baseUrl + 'recommendations?&seed_genres=' + genre + '&limit=25&target_tempo=' + tempo + '&access_token=' + this.token).map(res => res.json());
      }

      addTrack(trackId, playlistId) {
          console.log(trackId, playlistId);
        this.user = "motiusclyde"
        return this.http.post(this.baseUrl + 'users/' + this.user + '/playlists/' + playlistId + '/tracks?uris=' + trackId + '&access_token=' + this.token).map(res => res.json());

      }

      getPlaylistTracks(playlistId) {
        this.user = "motiusclyde"

        return this.http.get(this.baseUrl + 'users/' + this.user + '/playlists/' + playlistId + '/tracks?offset=0&limit=100&access_token=' + this.token).map(res => res.json());


      }






      // POST /v1/users/motiusclyde/playlists/7amvImAMTWbiJFOYeYdBCC/tracks?uris=spotify%3Atrack%3A4IJ7ZoJ8z8cAIbqYShF3ZZ HTTP/1.1



// COPY
// curl -X POST "https://api.spotify.com/v1/users/motiusclyde/playlists/7tpDLOs3LA8UHmx9cOMBvp/tracks?uris=spotify%3Atrack%3A6fujklziTHa8uoM5OQSfIo" -H "Accept: application/json" -H "Authorization: Bearer BQCNRd7n8_WZEZMebuSLmde1sEv0QuLCKRWvk5EdqL9KyDs21zs0VBJ7xW42HdHmiUgdL9DuphCgtUILA-yV_UprwKWtVs5f38mEQJ1SmaFyhJQtBdK-apSew8wMSbdKAvCRx55YXzIkwgjuRKBAzoRZfuEkJTL9V5s9af1ahOV4KZdNst1yMfqLiKVKj9of55hw782AYo9LPmHJdLFXMS0az6D0jep-17RE5FuFOdPODNoOTOAkSHhFpKJ_4cWV"

      login(token) {
        window.location.href = 'https://accounts.spotify.com/authorize?client_id=bacfafc3c299455ea7a545d07b0762f6&redirect_uri=http://localhost:4200/playlists&scope=user-read-private%20user-read-email%20playlist-modify-public%20playlist-modify-private&response_type=token&state=123&show_dialog=true';
        this.token = token;
        console.log(this.token + "pass token to service");

      }





}
