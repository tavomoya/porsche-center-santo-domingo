import { NgModule } from '@angular/core';

import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { AppointmentsComponent } from './appointments';
import { AppointmentsRoutingModule } from './appointments-routing.module';

@NgModule({
  imports: [
    AppointmentsRoutingModule
  ],
  declarations: [CalendarComponent, AppointmentsComponent]
})
export class AppointmentsModule { }
