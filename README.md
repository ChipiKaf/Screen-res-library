# ScreenRes

Library with responsive full screen image and centered title

## Getting Started

Run `npm i ck-screen-res --save` to install the library.
Add `ScreenResModule` to the imports of `app.module.ts` 
## Properties
|Property |Description                                  |
|---------|---------------------------------------------|
|[Image0] |Path to image with a ratio of 0.4 - 0.5      |
|[Image1] |Path to image with a ratio of 0.5 - 0.6      |
|[Image2] |Path to image with a ratio of 0.7 - 0.8      |
|[Image3] |Path to image with a ratio of 1.3 - 1.4      |
|[Image4] |Path to image with a ratio of 1.7 - 1.8      |
|[Image5] |Path to image with a ratio of over  1.9      |
|[height] |Sets the minimum height of the container div |
|[width] |Sets the minimum width of the container div   |
|[titleText] |Text of the main heading (Centered)   |
|[fontFamily] |The font family of the main heading   |
|[fontSize] |The font size of the main heading   |
|[fontColour] |The font colour of the main heading   |
## Build

Run `ng build screen-res` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build screen-res`, go to the dist folder `cd dist/screen-res` and run `npm publish`.

## Running unit tests

Run `ng test screen-res` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
