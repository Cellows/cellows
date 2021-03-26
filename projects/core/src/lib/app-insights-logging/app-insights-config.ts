import { InjectionToken } from '@angular/core';

/**
 * Injection token which can be used in a provider to set the Application Insights configuration value.
 *
 * @example { provide: APP_INSIGHTS_CONFIG, useValue: { ... } }
 */
export const APP_INSIGHTS_CONFIG = new InjectionToken<AppInsightsConfig>('app.insights.config');

/**
 * Abstract class which specify the properties of the Application Insights configuration
 */
export abstract class AppInsightsConfig {
  /**
   * Instrumentation key of Application Insights
   */
  instrumentationKey: string | undefined;

  /**
   * Option to log all route changes
   */
  enableAutoRouteTracking: boolean | undefined;
}
