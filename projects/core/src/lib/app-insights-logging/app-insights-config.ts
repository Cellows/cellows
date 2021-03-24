import { InjectionToken } from '@angular/core';

export const APP_INSIGHTS_CONFIG = new InjectionToken<AppInsightsConfig>('app.insights.config');

export abstract class AppInsightsConfig {
  instrumentationKey: string | undefined;
  enableAutoRouteTracking: boolean | undefined;
}
