import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';

export const routes: Routes = [
    { 
        path:'', 
        component: Shell, 
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.dashboardRoutes)
            },
            {
                path: 'tasks',
                loadChildren: () => import('./features/tasks/tasks.routes').then(m => m.tasksRoutes)
            },
            {
                path: 'projects',
                loadChildren: () => import('./features/projects/projects.routes').then(m => m.projectsRoutes)
            }
        ] 
    }
];
