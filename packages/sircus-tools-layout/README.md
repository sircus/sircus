# sircus-tools-layout

[![npm version](https://img.shields.io/npm/v/sircus-tools-layout.svg?style=flat)](https://www.npmjs.com/package/sircus-tools-layout)

## Installation

npm:

```bash
$ npm install sircus-tools-layout
```

## Usage

CSS:

```css
@import "sircus-tools-layout";
```

html:

```html
/* float */
<div class="t-pullRight"></div>
<div class="t-pullLeft"></div>
<div class="t-pullNone"></div>

/* position */
<div class="t-static"></div>
<div class="t-absolute"></div>
<div class="t-fixed"></div>
<div class="t-relative"></div>

/* */
<div class="t-top0"></div>
<div class="t-bottom0"></div>
<div class="t-left0"></div>
<div class="t-right0"></div>

<div class="t-center"></div>
```

### Responsive classes

```css
@import "sircus-tools-layout/responsive";
/*  OR  */
@import "sircus-tools-layout/sm";
@import "sircus-tools-layout/md";
@import "sircus-tools-layout/lg";
```
e.g:

```html
<div class="t-sm-pullRight">...</div>
<div class="t-md-static">...</div>
<div class="t-lg-fixed">...</div>
```

## License
Released under the MIT license.
