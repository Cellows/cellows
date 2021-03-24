import { ErrorHandler, Injectable } from "@angular/core";
import { AppInsightsLoggingService } from "./app-insights-logging.service";

@Injectable()
export class ErrorHandlerService extends ErrorHandler {

  constructor(private loggingService: AppInsightsLoggingService) {
    super();
  }

  handleError(error: Error) {
    this.loggingService.logException(error); // Manually log exception
  }
}
