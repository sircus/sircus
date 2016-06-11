# sircus-tools-display

[![npm version](https://img.shields.io/npm/v/sircus-tools-display.svg?style=flat)](https://www.npmjs.com/package/sircus-tools-display)

## Installation

npm:

```bash
$ npm install sircus-tools-display
```

## Usage

CSS:

```css
@import "sircus-tools-display";
```

html

```html
<div class="t-none"></div>
<div class="t-block"></div>
<div class="t-flex"></div>
<div class="t-inlineBlock"></div>
<div class="t-inline"></div>
<div class="t-table"></div>
<div class="t-tableCell"></div>
```

### Responsive classes

```css
@import "sircus-tools-display/responsive";
/*  OR  */
@import "sircus-tools-display/sm";
@import "sircus-tools-display/md";
@import "sircus-tools-display/lg";
```
e.g:

```html
<div class="t-sm-none">...</div>
<div class="t-md-block">...</div>
<div class="t-lg-inlineBlock">...</div>
```

## License
Released under the MIT license.
