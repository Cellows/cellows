import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { APP_INSIGHTS_CONFIG } from './app-insights-config';
import { AppInsightsLoggingService } from './app-insights-logging.service';
import { ErrorHandlerService } from './error-handler.service';

/**
 * Application Insights module which can be imported into an application to enable logging to Azure Application Insights.
 *
 * It also configures an error handler which logs exceptions automatically to Application Insights.
 */
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
