import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { ListComponent } from './pages/list/list.component';
import { PrimengModule } from 'src/app/core/library/primeng/primeng.module';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, CharacterRoutingModule, PrimengModule],
})
export class CharacterModule {}
