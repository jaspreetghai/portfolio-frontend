// src/app/project.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// The Project interface
interface Project {
  _id: string;
  title: string;
  details: string;
  techStack: string[];
}

const DUMMY_PROJECTS: Project[] = [
  {
    _id: '1',
    title: 'Personal Portfolio',
    details:
      'A dynamic portfolio built with Angular and a Node.js backend. Features include a project showcase, a contact form, and a responsive design.',
    techStack: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
  },
  {
    _id: '2',
    title: 'E-commerce Platform',
    details:
      'A full-featured e-commerce site with user authentication, product listings, a shopping cart, and a secure checkout process.',
    techStack: ['React', 'Next.js', 'Stripe', 'GraphQL', 'PostgreSQL'],
  },
  {
    _id: '3',
    title: 'Social Media Dashboard',
    details:
      'An interactive dashboard for managing social media campaigns. It provides analytics, post scheduling, and real-time notifications.',
    techStack: ['Vue.js', 'Firebase', 'TypeScript', 'Sass'],
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'http://localhost:5000/api/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    // Return the dummy data as an Observable
    return of(DUMMY_PROJECTS);

    // This is the real API call we will use later:
    // return this.http.get<Project[]>(this.apiUrl);
  }
}
