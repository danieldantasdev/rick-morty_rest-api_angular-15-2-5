import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { ListComponent } from './pages/list/list.component';
import { PrimengModule } from 'src/app/core/library/primeng/primeng.module';
import { CharacterComponent } from './character.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [ListComponent, CharacterComponent, DetailComponent],
    imports: [CommonModule, CharacterRoutingModule, PrimengModule, NgOptimizedImage],
})
export class CharacterModule {}
