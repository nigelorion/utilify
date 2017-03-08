import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { HomeComponent } from './home/home.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
// import { Ng2HandyOauthModule } from 'ng2-handy-oauth';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PlaylistsComponent,
    HomeComponent,
    PlaylistDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    // Ng2HandyOauthModule.forRoot({
    //   providers: {
    //     spotify: {
    //       clientId: 'bacfafc3c299455ea7a545d07b0762f6',
    //       redirectUrl: 'http://localhost:4200/playlists/callback'
    //     }
    //   }
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
