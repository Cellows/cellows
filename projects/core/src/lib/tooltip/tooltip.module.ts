import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [
    TooltipDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TooltipDirective
  ]
})
export class TooltipModule { }
