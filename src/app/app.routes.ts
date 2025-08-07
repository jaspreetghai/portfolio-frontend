import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./hero/hero.component').then((c) => c.HeroComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/projects.component').then((c) => c.ProjectsComponent),
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./project-details/project-details.component').then(
        (c) => c.ProjectDetailsComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
