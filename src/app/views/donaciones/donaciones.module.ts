import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DonacionesRoutingModule } from './donaciones-routing.module';
import { DonacionesComponent } from './donaciones.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  imports: [
    DonacionesRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [ DonacionesComponent ]
})
export class DonacionesModule { }
