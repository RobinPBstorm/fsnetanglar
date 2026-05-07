import { Routes } from '@angular/router';
import { Demo } from './pages/demo/demo';
import { Exo } from './pages/exo/exo';
import { Binding as bdemo } from './pages/demo/components/binding/binding';
import { Binding as bexo } from './pages/exo/components/binding/binding';
import { Pipes as dpipes } from './pages/demo/components/pipes/pipes';
import { Pipes as epipes } from './pages/exo/components/pipes/pipes';
import { Directives as ddirectives } from './pages/demo/components/directives/directives';
import { Directives as edirectives } from './pages/exo/components/directives/directives';
import { Inputs } from './pages/demo/components/inputs/inputs';
import { Parent } from './pages/exo/components/inputs/parent/parent';
import { ServiceComponent } from './pages/demo/components/service-component/service-component';
import { ListCourseAvecService } from './pages/exo/components/services/list-course-avec-service';
import { Forms as formdemo } from './pages/demo/components/forms/forms';
import { Forms as formexo } from './pages/exo/components/forms/forms';

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
        component: ddirectives,
      },
      {
        path: 'inputs',
        component: Inputs,
      },
      {
        path: 'services',
        component: ServiceComponent,
      },
      {
        path: 'forms',
        component: formdemo,
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
      {
        path: 'directives',
        component: edirectives,
      },
      {
        path: 'inputs',
        component: Parent,
      },
      {
        path: 'services',
        component: ListCourseAvecService,
      },
      {
        path: 'forms',
        component: formexo,
      },
    ],
  },
  // Doit rester en dernier, sinon bypass les autres routes.
  {
    path: '**',
    redirectTo: 'demo',
  },
];
