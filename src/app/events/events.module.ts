import { NgModule } from '@angular/core';

import { ModalModule } from 'ng2-bootstrap/modal';
import { EventsComponent } from './events';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  imports: [
    EventsRoutingModule,
    ModalModule.forRoot(),

  ],
  declarations: [EventsComponent]
})
export class EventosModule { }
