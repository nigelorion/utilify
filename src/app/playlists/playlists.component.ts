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
  playlistView = true;
  playlistDetailView = false;
  showRecTracks = false;
  searchButton = true;
  selectedPlaylistId: string;
  currentPlaylistUri: string;

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

  searchTracks(tempo, genre) {
    this.showRecTracks = true;
    this.searchButton = false;
    this.genre = genre;
    this.tempo = tempo;

    this.service.getRecTracks(this.genre, this.tempo).subscribe(response =>{
      this.recTracks = response.tracks;
      console.log(this.recTracks);
    });
  }

  playlistDetails(playlist) {


    this.playlistView = false;
    this.playlistDetailView = true;
    console.log(playlist.uri);
    this.currentPlaylistUri = playlist.uri;
    this.selectedPlaylistId = playlist.id;
    console.log(this.selectedPlaylistId);
  }

  getRecTracks() {

  }

  addTrack(trackId) {

    this.service.addTrack(trackId, this.selectedPlaylistId).subscribe(response =>{
      console.log(response);
    });
    console.log("testing add track button");
  }



}
