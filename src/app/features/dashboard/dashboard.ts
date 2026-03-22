import { Component, signal, computed, inject, effect } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../core/models';
import { APP_ENVIRONMENT } from '../../core/config/app-environment.token';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private readonly env = inject(APP_ENVIRONMENT);
  protected readonly tasks = signal<Task[]>([
    {
      id: '1',
      title: 'API Endpoints',
      description: 'API Endpoints definieren',
      status: 'todo',
      priority: 'high',
      projectId: 'p1',
      assigneeId: 'a1',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      dueDate: new Date().toISOString(),
      tags: ['backend', 'api'],
    },
    {
      id: '2',
      title: 'Login Page',
      description: 'Login Page erstellen',
      status: 'in-progress',
      priority: 'medium',
      projectId: 'p2',
      assigneeId: 'a2',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      dueDate: new Date().toISOString(),
      tags: ['frontend', 'ui'],
    },
    {
      id: '3',
      title: 'Unit Tests',
      description: 'Unit Tests schreiben',
      status: 'done',
      priority: 'low',
      projectId: 'p3',
      assigneeId: 'a3',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      dueDate: new Date().toISOString(),
      tags: ['backend', 'tests'],
    },
    {
      id: '4',
      title: 'Datenbank Schema',
      description: 'Datenbank Schema designen',
      status: 'review',
      priority: 'critical',
      projectId: 'p4',
      assigneeId: 'a4',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      dueDate: new Date().toISOString(),
      tags: ['datenbank'],
    },
  ]);

  protected readonly totalTasks = computed(() => this.tasks().length);
  protected readonly doneTasks = computed(
    () => this.tasks().filter((t) => t.status === 'done').length,
  );
  protected readonly inProgressTasks = computed(
    () => this.tasks().filter((t) => t.status === 'in-progress').length,
  );

  constructor() {
    effect(() => {
      console.log(`[${this.env.appName}] Tasks geandert: ${this.tasks().length} total`);
    });
  }

  protected addTask(title: string): void {
    this.tasks.update((current) => [
      ...current,
      {
        id: Date.now().toString(),
        title: title,
        description: '',
        status: 'todo' as TaskStatus,
        priority: 'medium' as TaskPriority,
        projectId: 'p' + title,
        assigneeId: 'u' + title,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: [],
      },
    ]);
  }
}
