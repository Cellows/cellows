import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { APP_INSIGHTS_CONFIG } from './app-insights-config';
import { AppInsightsLoggingService } from './app-insights-logging.service';
import { ErrorHandlerService } from './error-handler.service';

@NgModule({
  providers: [
    {
      provide: AppInsightsLoggingService,
      useClass: AppInsightsLoggingService,
      deps: [APP_INSIGHTS_CONFIG],
    },
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService,
      deps: [APP_INITIALIZER]
    }
  ]
})
export class AppInsightsLoggingModule { }
