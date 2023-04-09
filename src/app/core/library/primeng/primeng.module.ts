import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, TableModule, ButtonModule],
  exports: [CommonModule, TableModule, ButtonModule],
})
export class PrimengModule {}
