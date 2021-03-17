import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { ConfigService } from './services/config.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { LoggingService } from './services/logging.service';

export function configFactory(configService: ConfigService) {
  const func = () => configService.loadConfig();
  return func;
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    LoggingService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService,
      deps: [APP_INITIALIZER]
    }
  ]
})
export class CoreModule { }
