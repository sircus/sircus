# sircus-tools-align

[![npm version](https://img.shields.io/npm/v/sircus-tools-align.svg?style=flat)](https://www.npmjs.com/package/sircus-tools-align)

## Installation

npm:

```bash
$ npm install sircus-tools-align
```

## Usage

CSS

```css
@import "sircus-tools-align";
```

html

```html
<p class="t-alignLeft">...</p>
<p class="t-alignRight">...</p>
<p class="t-alignCenter">...</p>
<p class="t-alignJustify">...</p>

<span class="t-alignBaseline">...</span>
<span class="t-alignTop">...</span>
<span class="t-alignMiddle">...</span>
<span class="t-alignBottom">...</span>

<span class="t-alignTextTop">...</span>
<span class="t-alignTextBottom">...</span>
```

### Responsive classes

```css
@import "sircus-tools-align/responsive";
/*  OR  */
@import "sircus-tools-align/sm";
@import "sircus-tools-align/md";
@import "sircus-tools-align/lg";
```
e.g:

```html
<p class="t-sm-alignLeft">...</p>
<p class="t-md-alignLeft">...</p>
<p class="t-lg-alignLeft">...</p>
```

## License
Released under the MIT license.
