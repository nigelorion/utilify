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
  genre: string;
  tempo: number;
  recTracks: any;

  constructor(private service: AppService, private router: Router) {
   }

  ngOnInit() {

    this.getPlaylists();
    this.getRecTracks();

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

  getRecTracks() {
    this.genre = "hip-hop";
    this.tempo = 90;
    this.service.getRecTracks(this.genre, this.tempo).subscribe(response =>{
      this.recTracks = response.tracks;
      console.log(this.recTracks);
    });
  }



}
