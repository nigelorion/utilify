import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
  providers: [AppService]
})
export class PlaylistsComponent implements OnInit {
  playlists: any;
  playlistTracks: any;
  testGenre = "hip-hop";
  testTempo = 99

  constructor(private service: AppService, private router: Router) {
   }

  ngOnInit() {

    this.getPlaylists();

  }

  test(playlist) {

  }

  getPlaylists() {
    this.service.getPlaylists().subscribe(response =>{
      this.playlists = response.items;
      console.log(this.playlists);

    });
  }

  playlistDetails(playlist) {
    this.router.navigate(['playlists', playlist.$key])
    console.log(playlist);
  }


}
