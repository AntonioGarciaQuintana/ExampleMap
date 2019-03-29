import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ArticulosComponent } from './articulos.component';
import { ArticulosRoutingModule } from './articulos-routing.module';

@NgModule({
  imports: [
    ArticulosRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [ ArticulosComponent ]
})
export class ArticulosModule { }
