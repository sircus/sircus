# sircus-tools-overflow

[![npm version](https://img.shields.io/npm/v/sircus-tools-overflow.svg?style=flat)](https://www.npmjs.com/package/sircus-tools-overflow)

## Installation

npm:

```bash
$ npm install sircus-tools-overflow
```

## Usage

CSS:

```css
@import "sircus-tools-overflow";
@import "sircus-variables";
```

html:

```html
<div class="t-overflow"></div>
<div class="t-overflowX"></div>
<div class="t-overflowY"></div>
<div class="t-overflowScroll"></div>
<div class="t-overflowHidden"></div>
```

### Responsive classes

```css
@import "sircus-tools-overflow/responsive";
/*  OR  */
@import "sircus-tools-overflow/sm";
@import "sircus-tools-overflow/md";
@import "sircus-tools-overflow/lg";
```
e.g:

```html
<div class="t-sm-overflow">...</div>
<div class="t-md-overflowScroll">...</div>
<div class="t-lg-overflowHidden">...</div>
```

## License
Released under the MIT license.
