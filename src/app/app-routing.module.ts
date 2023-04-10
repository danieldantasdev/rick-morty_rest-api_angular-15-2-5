import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (d) => d.DashboardModule
      ),
    title: 'dashboard'
  },
  {
    path: 'character',
    loadChildren: () =>
      import('./features/character/character.module').then(
        (c) => c.CharacterModule
      ),
    title: 'character'
  },
  {
    path: 'episode',
    loadChildren: () =>
      import('./features/episode/episode.module').then((e) => e.EpisodeModule),
    title: 'episode'
  },
  {
    path: 'location',
    loadChildren: () =>
      import('./features/location/location.module').then(
        (l) => l.LocationModule
      ),
    title: 'location'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
