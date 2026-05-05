import { Routes } from '@angular/router';
import { Demo } from './pages/demo/demo';
import { Exo } from './pages/exo/exo';
import { Binding } from './pages/demo/components/binding/binding';

export const routes: Routes = [
  {
    path: 'demo',
    component: Demo,
    children: [
      {
        path: 'binding',
        component: Binding,
      }
    ]
  },
  {
    path: 'exo',
    component: Exo,
  },
  // Doit rester en dernier, sinon bypass les autres routes.
  {
    path: '**',
    redirectTo: 'demo',
  },
];
