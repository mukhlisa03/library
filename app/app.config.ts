import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
