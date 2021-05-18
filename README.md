# Cellows Core library

The Cellows Core library is an Angular library with general features which can be used to build apps for the Cellows platform.

# Features

## Azure Application Insights logging

The app-insights-logging module provides a logging service for Azure Application Insights and an error handler which logs all app exceptions in Application Insights.

### Usage

1. Import the module in the AppModule of the app:

```
imports: {
  AppInsightsLoggingModule
}
```

2. Add a provider in the AppModule of the app to set the Application Insights config:

```
const appInsightsConfig: AppInsightsConfig = { ... };

providers: {
  { provide: APP_INSIGHTS_CONFIG, useValue: appInsightsConfig }
}
```

# Development

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build`, go to the dist folder `cd dist/core` and run `npm publish --access public`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
