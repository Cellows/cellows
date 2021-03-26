import { Inject, Injectable } from "@angular/core";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { AppInsightsConfig, APP_INSIGHTS_CONFIG } from "./app-insights-config";

/**
 * Logging service for Azure Application Insights.
 */
@Injectable()
export class AppInsightsLoggingService {
  /**
   * Application Insights object
   */
  appInsights!: ApplicationInsights;

  /**
   * AppInsightsLoggingService constructor.
   *
   * It loads the Application Insights for the application.
   *
   * @param appInsightsConfig The Application Insights config object with the instrumentation key and other properties
   * The value needs to be provided with the token APP_INSIGHTS_CONFIG
   */
  constructor(@Inject(APP_INSIGHTS_CONFIG) appInsightsConfig: AppInsightsConfig) {
    if (!appInsightsConfig.instrumentationKey) throw "LoggingService: the instrumentation key for app insights is not provided."

    this.appInsights = new ApplicationInsights({
      config: {
        instrumentationKey: appInsightsConfig.instrumentationKey,
        enableAutoRouteTracking: appInsightsConfig.enableAutoRouteTracking
      }
    });
    this.appInsights.loadAppInsights();
  }

  /**
   * Log a page view manually.
   *
   * @param name Name of the page
   * @param url Url of the page
   */
  logPageView(name?: string, url?: string) {
    this.appInsights.trackPageView({
      name: name,
      uri: url
    });
  }

  /**
   * Log an event.
   * @param name Name of the event
   * @param properties Extra properties
   */
  logEvent(name: string, properties?: { [key: string]: any }) {
    this.appInsights.trackEvent({ name: name }, properties);
  }

  /**
   * Log a metric.
   * @param name Name of the metric
   * @param average Average number
   * @param properties Extra properties
   */
  logMetric(name: string, average: number, properties?: { [key: string]: any }) {
    this.appInsights.trackMetric({ name: name, average: average }, properties);
  }

  /**
   * Log an exception.
   * @param exception Exception which is thrown
   * @param severityLevel Level of severity
   */
  logException(exception: Error, severityLevel?: number) {
    this.appInsights.trackException({ exception: exception, severityLevel: severityLevel });
  }

  /**
   * Log a trace.
   * @param message Message to log
   * @param properties Extra properties
   */
  logTrace(message: string, properties?: { [key: string]: any }) {
    this.appInsights.trackTrace({ message: message }, properties);
  }
}
