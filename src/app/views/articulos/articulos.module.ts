import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ArticulosComponent } from './articulos.component';
import { ArticulosRoutingModule } from './articulos-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    ArticulosRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [ ArticulosComponent ]
})
export class ArticulosModule { }
