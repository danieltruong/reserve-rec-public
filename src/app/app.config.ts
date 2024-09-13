import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ConfigService } from './services/config.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AmplifyService } from './services/amplify.service';

export function initConfig(configService: ConfigService, apiService: ApiService, amplifyService: AmplifyService) {
  return async () => {
    await configService.init();
    await amplifyService.init();
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
      deps: [ConfigService, ApiService, AmplifyService, HttpClient],
      multi: true
    },
    ConfigService
  ]
};
