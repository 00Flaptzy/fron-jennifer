import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';

import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { userInterceptor } from './interceptor/user-interceptor';
import { loaderInterceptor } from './interceptor/loader-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    // 👇 TODOS los interceptores aquí
    provideHttpClient(
      withInterceptors([
        loaderInterceptor,
        userInterceptor
      ])
    )

    // opcional (si lo usas)
    // provideZonelessChangeDetection()
  ]
};
