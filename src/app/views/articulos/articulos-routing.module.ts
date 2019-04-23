import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticulosComponent } from './articulos.component';

const routes: Routes = [
  {
    path: '',
    component: ArticulosComponent,
    data: {
      title: 'Artículos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosRoutingModule { }
