import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataContainerComponent } from './data-container/data-container.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [DataContainerComponent],
  exports: [
    DataContainerComponent
  ]
})
export class DataModule { }
