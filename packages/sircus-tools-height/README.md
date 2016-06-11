# sircus-tools-height

[![npm version](https://img.shields.io/npm/v/sircus-tools-height.svg?style=flat)](https://www.npmjs.com/package/sircus-tools-height)


## Install

npm:

```bash
$ npm install sircus-tools-height sircus-variables
```

## Usage

CSS:

```css
@import "sircus-tools-height";
@import "sircus-variables";
```

html:

```html
<div class="t-height1of12"></div>
<div class="t-height2of12"></div>
<div class="t-height3of12"></div>
<div class="t-height4of12"></div>
<div class="t-height5of12"></div>
<div class="t-heightHalf"></div>
<div class="t-height7of12"></div>
<div class="t-height8of12"></div>
<div class="t-height9of12"></div>
<div class="t-height10of12"></div>
<div class="t-height11of12"></div>
<div class="t-heightFull"></div>
```

### Responsive classes

```css
@import "sircus-tools-height/responsive";
/*  OR  */
@import "sircus-tools-height/sm";
@import "sircus-tools-height/md";
@import "sircus-tools-height/lg";
```
e.g:

```html
<div class="t-sm-heightHalf">...</div>
<div class="t-md-height10of12">...</div>
<div class="t-lg-heightFull">...</div>
```

## License
Released under the MIT license.
