import { Routes } from '@angular/router';
import { Demo } from './pages/demo/demo';
import { Exo } from './pages/exo/exo';
import { Binding as bdemo } from './pages/demo/components/binding/binding';
import { Binding as bexo } from './pages/exo/components/binding/binding';
import { Pipes as dpipes } from './pages/demo/components/pipes/pipes';
import { Pipes as epipes } from './pages/exo/components/pipes/pipes';
import { Directives } from './pages/demo/components/directives/directives';

export const routes: Routes = [
  {
    path: 'demo',
    component: Demo,
    children: [
      {
        path: 'binding',
        component: bdemo,
      },
      {
        path: 'pipes',
        component: dpipes,
      },
      {
        path: 'directives',
        component: Directives,
      },
    ],
  },
  {
    path: 'exo',
    component: Exo,
    children: [
      {
        path: 'binding',
        component: bexo,
      },
      {
        path: 'pipes',
        component: epipes,
      },
    ],
  },
  // Doit rester en dernier, sinon bypass les autres routes.
  {
    path: '**',
    redirectTo: 'demo',
  },
];
