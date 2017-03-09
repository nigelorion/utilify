import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';
import { AppService } from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
  providers: [AppService],
  animations: [
  trigger(
    'menuSlide',
    [
      transition(
      ':enter', [
        style({top: '-140px', opacity: 1}),
        animate('500ms', style({top: '0px', opactiy: 0}))
      ]
    ),
    transition(
      ':leave', [
        style({transform: 'translateY(0)', 'opacity': 1}),
        animate('150ms', style({transform: 'translateY(100%)', opacity: 0}),

      )]
    )]
  )
]
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
  selectedPlaylist: string;
  currentPlaylistUri: string;
  loading = false;
  currentUser: any;
  currentUserId: string;
  header = true;

  constructor(private service: AppService, private router: Router) {
   }

  ngOnInit() {
    this.getPlaylists();
    this.getUser();
  }

  closeHeader() {
    this.header = false;
  }

  getPlaylists() {
    this.service.getPlaylists().subscribe(response =>{
      this.playlists = response.items;
      console.log(this.playlists);

    });
  }


  getUser() {
    this.service.getUser().subscribe(response =>{
      this.currentUser = response;
      this.currentUserId = response.id;
      console.log(this.currentUser);

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

  backButton() {
    this.playlistView = true;
    this.playlistDetailView = false;
  }

  playlistDetails(playlist) {
    this.playlistView = false;
    this.playlistDetailView = true;
    console.log(playlist);
    this.currentPlaylistUri = playlist.uri;
    this.selectedPlaylistId = playlist.id;
    this.selectedPlaylist = playlist;
    console.log(this.selectedPlaylistId);
    this.service.getPlaylistTracks(this.selectedPlaylistId, this.currentUserId).subscribe(response => {
      this.playlistTracks = response.items;
      console.log(response);
    })
  }

  addTrack(trackId) {
    this.playlistDetails(this.selectedPlaylist);
    this.service.addTrack(trackId, this.selectedPlaylistId, this.currentUserId).subscribe(response =>{
      console.log(response);
    });
    console.log("testing add track button");
  }

}
