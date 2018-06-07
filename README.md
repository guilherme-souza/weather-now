# WeatherNow

*WeatherNow* was built with the intention to practice and demonstrate Front-End skills. It is a Single Page Application that shows the actual temperature, humidity and atmospheric pressure of three different cities in the world ("Nuuk, GL", "Urubici, BR" and "Nairobi, KE").
This application uses Angular and it was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

Temperature information is retrieved from [Open Weather Map](https://openweathermap.org)

## Environment setup
You need to set up your development environment before you can do anything.

1. Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine;
2. Install [Angular CLI](https://github.com/angular/angular-cli) globally by running: `npm -g @angular/cli`.

## Building the application

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. You can run `ng serve -o` in order to have Angular CLI opening an instance of a browser.

## Next Steps

- Add a CSS pre-processor such as LESS or SASS
- Extract the card *loader* logic from `card.component` creating a utility for loader
- Better error handling
- Refine tests adding tests to `WeatherService`
