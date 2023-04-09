import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [],
  imports: [CommonModule, TableModule, ButtonModule, TagModule],
  exports: [CommonModule, TableModule, ButtonModule, TagModule],
})
export class PrimengModule {}
