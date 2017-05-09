import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsComponent } from './appointments';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent,
    data: {
      title: 'Citas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule {}
