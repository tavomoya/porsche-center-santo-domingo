import { Component } from '@angular/core';

@Component({
  templateUrl: 'appointments.html'
})
export class AppointmentsComponent {

  constructor() { }

  public calendarOptions: Object = {
    // height: 'parent',
    fixedWeekCount: false,
    defaultDate: '2017-05-09',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'Mantenimiento',
        start: '2017-05-09'
      },
      {
        title: 'Cambio de espejos',
        start: '2017-05-07',
        end: '2017-05-10'
      },
      {
        title: 'Reparacion bumper',
        start: '2017-05-09',
        end: '2017-05-27'
      },
      {
        title: 'Porque si',
        start: '2017-05-09',
        end: '2017-05-09'
      }
    ]
  };

}
