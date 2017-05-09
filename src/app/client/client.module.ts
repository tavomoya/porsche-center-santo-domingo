import { NgModule } from '@angular/core';

import { ModalModule } from 'ng2-bootstrap/modal';
import { ClientComponent } from './client';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  imports: [
    ClientRoutingModule,
    ModalModule.forRoot(),

  ],
  declarations: [ClientComponent]
})
export class ClientModule { }
