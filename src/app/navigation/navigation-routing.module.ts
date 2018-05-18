import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'data', loadChildren: 'app/modules/data/data.module#DataModule'
  },
  {
    path: '', redirectTo: 'data', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'data'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
