import { ErrorHandler, Injectable } from "@angular/core";
import { AppInsightsLoggingService } from "./app-insights-logging.service";

/**
 * Error handler service which logs exceptions to Azure Application Insights
 */
@Injectable()
export class ErrorHandlerService extends ErrorHandler {

  /**
   * Error handlers service constructor
   * @param loggingService Application Insights logging service
   */
  constructor(private loggingService: AppInsightsLoggingService) {
    super();
  }

  /**
   * Manually log an exception to Application Insights
   * @param error Exception which is thrown
   */
  handleError(error: Error) {
    this.loggingService.logException(error);
  }
}
