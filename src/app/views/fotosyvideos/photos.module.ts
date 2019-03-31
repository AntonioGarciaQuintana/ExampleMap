import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';

@NgModule({
  imports: [
    PhotosRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [ PhotosComponent ]
})
export class PhotosModule { }
