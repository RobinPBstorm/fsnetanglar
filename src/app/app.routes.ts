import { Routes } from '@angular/router';
import { Demo } from './pages/demo/demo';
import { Exo } from './pages/exo/exo';
import { Binding as bdemo } from './pages/demo/components/binding/binding';
import { Binding as bexo } from './pages/exo/components/binding/binding';

export const routes: Routes = [
  {
    path: 'demo',
    component: Demo,
    children: [
      {
        path: 'binding',
        component: bdemo,
      }
    ]
  },
  {
    path: 'exo',
    component: Exo,
    children: [
      {
        path: 'binding',
        component: bexo,
      }
    ]
  },
  // Doit rester en dernier, sinon bypass les autres routes.
  {
    path: '**',
    redirectTo: 'demo',
  },
];
