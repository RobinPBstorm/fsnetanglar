import { Routes } from '@angular/router';
import { FanList } from './fan-list/fan-list';
import { FanDetails } from './fan-details/fan-details';
import { FanEdit } from './fan-edit/fan-edit';
import { Routing } from './routing';

export const exoRoutingRoutes: Routes = [
  {
    path: '',
    component: Routing,
  },
  {
    path: 'fan',
    component: FanList,
  },
  {
    path: 'fan/:index',
    component: FanDetails,
  },
  {
    path: 'fan-edit',
    component: FanEdit,
  },
  {
    path: 'fan-edit/:index',
    component: FanEdit,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
