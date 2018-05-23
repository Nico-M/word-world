import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from './../../../angular-bootstrap-md';


const COMPONENTS: any[] = [];
@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    MDBBootstrapModule
   ]
})
export class SharedModule { }
