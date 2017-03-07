import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';



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

  constructor(private service: AppService) {
   }

  ngOnInit() {

    this.getPlaylists();

  }

  getPlaylists() {
    this.service.getPlaylists().subscribe(response =>{
      this.playlists = response.items;
      console.log(this.playlists);
      this.playlistTracks = response.items.tracks;
      console.log(this.playlistTracks.items);
    });
  }

}
