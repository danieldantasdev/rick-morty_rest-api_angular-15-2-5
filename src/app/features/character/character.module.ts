import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { ListComponent } from './pages/list/list.component';
import { PrimengModule } from 'src/app/core/library/primeng/primeng.module';
import { CharacterComponent } from './character.component';

@NgModule({
  declarations: [ListComponent, CharacterComponent],
  imports: [CommonModule, CharacterRoutingModule, PrimengModule],
})
export class CharacterModule {}
