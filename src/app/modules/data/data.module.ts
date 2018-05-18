import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataContainerComponent } from './data-container/data-container.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatTableDataSource, MatChipsModule, MatButtonModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './data-container/container/container.component';

const routes: Routes = [
  {
    path: 'data', component: ContainerComponent,
    children: [{
      path: 'table', component: DataContainerComponent
    }]
  },
];


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DataContainerComponent, ContainerComponent],
  exports: [
    DataContainerComponent
  ]
})
export class DataModule { }
