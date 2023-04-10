import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, TableModule, ButtonModule, TagModule, CardModule],
  exports: [CommonModule, TableModule, ButtonModule, TagModule, CardModule],
})
export class PrimengModule {}
