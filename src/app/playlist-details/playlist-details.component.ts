import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from "@angular/router";
import { AppService } from  '../app.service';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss'],
  providers: [AppService]
})
export class PlaylistDetailsComponent implements OnInit {
  playlist: any;
  playlistId: any;
  constructor(private route: ActivatedRoute, private service: AppService) { }

  ngOnInit() {
    // this.route.params.forEach((urlParameters) => {
    // this.playlistId = urlParameters['id'];
    // });
    // console.log(this.playlistId);

  }

}
