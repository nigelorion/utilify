import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {PlaylistsComponent} from './playlists/playlists.component';
import {HomeComponent} from './home/home.component';
import {PlaylistDetailsComponent} from './playlist-details/playlist-details.component';




const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home/:access_token',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'playlists',
    component: PlaylistsComponent
  },
  {
    path: 'playlists/:id',
    component: PlaylistDetailsComponent
  }

];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
