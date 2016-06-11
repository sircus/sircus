# sircus-tools-width

[![npm version](https://img.shields.io/npm/v/sircus-tools-width.svg?style=flat)](https://www.npmjs.com/package/sircus-tools-width)

## Installation

> npm:

```bash
$ npm install sircus-tools-width
```

## Usage

> cssnext:

input.css
```css
@import "sircus-tools-width";
```

> html

```html
<div class="t-widthHalf"></div>
<div class="t-widthFull"></div>

<div class="t-width1of12"></div>
<div class="t-width2of12"></div>
<div class="t-width3of12"></div>
<div class="t-width4of12"></div>
<div class="t-width5of12"></div>
<div class="t-width6of12"></div>
<div class="t-width7of12"></div>
<div class="t-width8of12"></div>
<div class="t-width9of12"></div>
<div class="t-width10of12"></div>
<div class="t-width11of12"></div>
```

### Responsive classes

```css
@import "sircus-tools-width/responsive";
/*  OR  */
@import "sircus-tools-width/sm";
@import "sircus-tools-width/md";
@import "sircus-tools-width/lg";
```
e.g:

```html
<div class="t-sm-width2of12">...</div>
<div class="t-md-width8of12">...</div>
<div class="t-lg-widthHalf">...</div>
```

## License
Released under the MIT license.
