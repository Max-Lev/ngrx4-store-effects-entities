import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOptionsContainerComponent } from './input-options-container/input-options-container.component';
import { MatChipsModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectedDirective } from './directives/selected.directive';
@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  declarations: [
    InputOptionsContainerComponent,
    SelectedDirective
  ],
  exports: [
    InputOptionsContainerComponent
  ]
})
export class InputOptionsModule { }
