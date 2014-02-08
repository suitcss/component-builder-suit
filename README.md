# component-builder-suit

[![Build Status](https://secure.travis-ci.org/suitcss/component-builder-suit.png?branch=master)](http://travis-ci.org/suitcss/component-builder-suit)

A [Component(1)](https://github.com/component/component) builder plugin for use
with [SUIT CSS](https://github.com/suitcss/suit).

## Installation

```
npm install component-builder-suit
```

## Use

```
component build --use component-builder-suit
```

## Features

* [rework-suit](https://github.com/suitcss/rework-suit) to add support for variables and more.
* [autoprefixer](https://github.com/ai/autoprefixer) to add vendor-prefixes to:

    * Internet Explorer >= 8
    * The last 2 Chrome versions
    * The last 2 Firefox versions
    * The last 2 Safari versions
    * The last 2 Safari iOS versions
    * Android 4 browser

## Development

Run the tests

```
npm test
```

Watch the tests

```
npm run watch
```
