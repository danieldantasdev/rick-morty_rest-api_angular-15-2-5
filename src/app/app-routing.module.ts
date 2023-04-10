import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/character/character.module').then(
        (c) => c.CharacterModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/episode/episode.module').then((e) => e.EpisodeModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/location/location.module').then(
        (l) => l.LocationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
