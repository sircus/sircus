# sircus-tools-shadow

[![npm version](https://img.shields.io/npm/v/sircus-tools-shadow.svg?style=flat)](https://www.npmjs.com/package/sircus-tools-shadow)


## Install

npm:

```bash
$ npm install sircus-tools-shadow sircus-variables
```

## Usage

CSS:

```css
@import "sircus-tools-shadow";
@import "sircus-variables";
```

html:

```html
<div class="t-boxShadow"></div>
<div class="t-boxShadowXs"></div>
<div class="t-boxShadowSm"></div>
<div class="t-boxShadowMd"></div>
<div class="t-boxShadowLg"></div>
<div class="t-boxShadowXl"></div>
<div class="t-boxShadow0"></div>
```

### Responsive classes

```css
@import "sircus-tools-shadow/responsive";
/*  OR  */
@import "sircus-tools-shadow/sm";
@import "sircus-tools-shadow/md";
@import "sircus-tools-shadow/lg";
```
e.g:

```html
<div class="t-sm-boxShadow">...</div>
<div class="t-md-boxShadowSm">...</div>
<div class="t-lg-boxShadow0">...</div>
```

## License
Released under the MIT license.
