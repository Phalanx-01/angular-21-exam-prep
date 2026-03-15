import { InjectionToken } from '@angular/core';
export interface AppEnvironment {
  apiUrl: string;
  production: boolean;
  appName: string;
}

export const APP_ENVIRONMENT = new InjectionToken<AppEnvironment>('APP_ENVIRONMENT');
export const environment: AppEnvironment = {
  apiUrl: 'http://localhost:3000/api',
  production: false,
  appName: 'TaskForge',
};
