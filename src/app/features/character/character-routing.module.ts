import {DetailComponent} from './pages/detail/detail.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterComponent} from './character.component';

const routes: Routes = [
  {path: 'character/list', component: CharacterComponent},
  {path: 'character/detail/:id', component: DetailComponent},
  {path: '**', redirectTo: 'character/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterRoutingModule {
}
