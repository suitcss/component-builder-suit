# component-builder-suit

A [Component(1)](https://github.com/component/component) builder plugin for use
with [SUIT CSS](https://github.com/suitcss/suit).

## Installation

```
npm install component-builder-suit
```

## Use

CLI:

```
component build --use component-builder-suit
```

Node:

```js
var Builder = require('component-builder');
var conformance = require('component-builder-suit')

var builder = new Builder();
builder.use(conformance);
builder.build(callback)
```

## Features

* [rework-suit-conformance](https://github.com/suitcss/rework-suit-conformance): check individual CSS files for SUIT conformance.
