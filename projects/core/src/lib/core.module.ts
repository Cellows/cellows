import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [CoreComponent],
  imports: [
  ],
  exports: [CoreComponent],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ]
})
export class CoreModule {
  public static forRoot(environment: any): ModuleWithProviders<CoreModule> {
    return {
        ngModule: CoreModule,
        providers: [
            LoggingService,
            {
                provide: 'env', // you can also use InjectionToken
                useValue: environment
            }
        ]
    };
}
}
