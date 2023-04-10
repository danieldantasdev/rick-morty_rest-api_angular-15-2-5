import { DetailComponent } from './pages/detail/detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character.component';

const routes: Routes = [
  { path: 'characters/list', component: CharacterComponent },
  { path: 'characters/detail/:id', component: DetailComponent },
  { path: '', redirectTo: 'characters/list', pathMatch: 'full' },
  { path: '**', component: CharacterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterRoutingModule {}
