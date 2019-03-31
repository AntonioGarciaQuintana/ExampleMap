import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CategoriasRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [ CategoriasComponent ]
})
export class CategoriasModule { }
