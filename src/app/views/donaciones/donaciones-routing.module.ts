import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonacionesComponent } from './donaciones.component';



const routes: Routes = [
  {
    path: '',
    component: DonacionesComponent,
    data: {
      title: 'Donaciones'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonacionesRoutingModule { }
