# @cellows/core library

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

## Cellows styles

Import the Cellows styles in your Angular web app (angular.json):
```
"architect": {
  "build": {
    ...
    "options": {
      ...
      "styles": [
        ...
        "./node_modules/@cellows/core/styles.css",
        ...
      ]
    }
  }
}
```

## Cellows UI Library

Start Storybook for more details: `yarn storybook`

Available Components/Directives:
- List
- MenuItemList
- PageHeader
- Sidenav
- Tooltip

Each of these components or directives is available in their own module which you can import in your Angular web app.

# Development

## Build local

Run `yarn run build:dev` to build the project. The build artifacts will be stored in the `dist/core` directory.
This command will run the following tasks:
- build package: ng build
- gulp tasks: build-css, move-icon-fonts, move-assets
- set the version nr in dist/core/package.json

## Build for production

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/core` directory.
This command will run the following tasks:
- build package: ng build
- gulp tasks: build-css, move-icon-fonts, move-assets

## Publishing

After building your library, go to the dist folder `cd dist/core` and run `npm publish --access public`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
