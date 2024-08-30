import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ConfigService } from './services/config.service';
import { provideHttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';

export function initConfig(configService: ConfigService, apiService: ApiService) {
  return async () => {
    await configService.init();
    apiService.init();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [ConfigService, ApiService],
      multi: true
    },
    ConfigService
  ]
};
