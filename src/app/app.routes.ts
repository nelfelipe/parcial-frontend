import { Routes } from '@angular/router';
import { Materias } from './View/materias/materias';

export const routes: Routes = [
  { path: '', component: Materias },
  { path: 'Materias', component: Materias },
];