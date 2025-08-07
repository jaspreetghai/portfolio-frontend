// src/app/projects/projects.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../project.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

interface Project {
  _id: string;
  title: string;
  details: string;
  techStack: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private projectService = inject(ProjectService);

  projects = toSignal(this.projectService.getProjects());
}
