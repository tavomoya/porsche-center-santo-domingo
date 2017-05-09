import { NgModule } from '@angular/core';

import { EventsComponent } from './events';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  imports: [
    EventsRoutingModule
  ],
  declarations: [ EventsComponent ]
})
export class EventosModule { }
