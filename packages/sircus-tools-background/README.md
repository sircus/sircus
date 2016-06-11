# sircus-tools-background

[![npm version](https://img.shields.io/npm/v/sircus-tools-background.svg?style=flat)](https://www.npmjs.com/package/sircus-tools-background)

## Installation

npm:

```bash
$ npm install sircus-tools-background sircus-variables
```

## Usage

CSS

```css
@import "sircus-tools-background";
@import "sircus-variables";
```

html

```html
/* background-color */
<div class="t-bgWhite">...</div>
<div class="t-bgBlack">...</div>

<div class="t-bgGray90">...</div>
<div class="t-bgGray80">...</div>
<div class="t-bgGray70">...</div>
<div class="t-bgGray60">...</div>
<div class="t-bgGray50">...</div>
<div class="t-bgGray40">...</div>
<div class="t-bgGray30">...</div>
<div class="t-bgGray20">...</div>
<div class="t-bgGray10">...</div>
<div class="t-bgGray5">...</div>

<div class="t-bgPrimary">...</div>
<div class="t-bgPrimaryDark">...</div>
<div class="t-bgPrimaryLight">...</div>

<div class="t-bgSecondary">...</div>
<div class="t-bgSecondaryDark">...</div>
<div class="t-bgSecondaryLight">...</div>

<div class="t-bgSuccess">...</div>
<div class="t-bgSuccessDark">...</div>
<div class="t-bgSuccessLight">...</div>

<div class="t-bgNotice">...</div>
<div class="t-bgNoticeDark">...</div>
<div class="t-bgNoticeLight">...</div>

<div class="t-bgWarning">...</div>
<div class="t-bgWarningDark">...</div>
<div class="t-bgWarningLight">...</div>

<div class="t-bgError">...</div>
<div class="t-bgErrorDark">...</div>
<div class="t-bgErrorLight">...</div>

/* background-size */
<div class="t-bgCover">...</div>
<div class="t-bgContain">...</div>

/* background-position */
<div class="t-bgCenter">...</div>
<div class="t-bgCenterTop">...</div>
<div class="t-bgCenterBottom">...</div>

<div class="t-bgLeft">...</div>
<div class="t-bgLeftTop">...</div>
<div class="t-bgLeftBottom">...</div>

<div class="t-bgRight">...</div>
<div class="t-bgRightTop">...</div>
<div class="t-bgRightBottom">...</div>

/* background-attachment */
<div class="t-bgFixed">...</div>

/* background-repeat */
<div class="t-bgNoRepeat">...</div>
```

### Responsive classes

```css
@import "sircus-tools-background/responsive";
/*  OR  */
@import "sircus-tools-background/sm";
@import "sircus-tools-background/md";
@import "sircus-tools-background/lg";
```
e.g:

```html
<p class="t-sm-bgCover">...</p>
<p class="t-md-bgContain">...</p>
<p class="t-lg-bgPrimary">...</p>
```

## License
Released under the MIT license.
