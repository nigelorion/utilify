import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {PlaylistsComponent} from './playlists/playlists.component';
import {HomeComponent} from './home/home.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'playlists',
    component: PlaylistsComponent
  }
];






export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
