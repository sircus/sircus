# sircus-tools-gutter

[![npm version](https://img.shields.io/npm/v/sircus-tools-gutter.svg?style=flat)](https://www.npmjs.com/package/sircus-tools-gutter)


## Install

npm:

```bash
$ npm install sircus-tools-gutter sircus-variables
```

## Usage

CSS:

```css
@import "sircus-tools-gutter";
@import "sircus-variables";
```

html:

```html
<div class="t-gutterQuarter"></div>
<div class="t-gutterQuarterReset"></div>

<div class="t-gutterHalf"></div>
<div class="t-gutterHalfReset"></div>

<div class="t-gutter"></div>
<div class="t-gutterReset"></div>

<div class="t-gutter"></div>
<div class="t-gutterReset"></div>

<div class="t-gutter2x"></div>
<div class="t-gutterReset2x"></div>

<div class="t-gutter3x"></div>
<div class="t-gutterReset3x"></div>

<div class="t-gutter4x"></div>
<div class="t-gutterReset4x"></div>
```

### Responsive classes

```css
@import "sircus-tools-gutter/responsive";
/*  OR  */
@import "sircus-tools-gutter/sm";
@import "sircus-tools-gutter/md";
@import "sircus-tools-gutter/lg";
```
e.g:

```html
<div class="t-sm-gutter">...</div>
<div class="t-md-gutter2x">...</div>
<div class="t-lg-gutterReset2x">...</div>
```

## License
Released under the MIT license.
