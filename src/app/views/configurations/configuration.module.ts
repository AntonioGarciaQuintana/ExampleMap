import { NgModule } from '@angular/core';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ConfigurationRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
  ],
  declarations: [
    ConfigurationComponent
  ]
})
export class ConfigurationModule { }
