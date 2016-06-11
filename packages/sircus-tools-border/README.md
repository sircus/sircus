# sircus-tools-border

[![npm version](https://img.shields.io/npm/v/sircus-tools-border.svg?style=flat)](https://www.npmjs.com/package/sircus-tools-border)

## Install

> npm:

```bash
$ npm install sircus-variables sircus-tools-border
```

## Usage

> cssnext:

input.css
```css
@import "sircus-tools-border";
@import "sircus-variables";
```

> html

```html
/* border */
<div class="t-border">...</div>
<div class="t-borderTop">...</div>
<div class="t-borderLeft">...</div>
<div class="t-borderBottom">...</div>
<div class="t-borderRight">...</div>

<div class="t-border2x">...</div>
<div class="t-borderTop2x">...</div>
<div class="t-borderLeft2x">...</div>
<div class="t-borderBottom2x">...</div>
<div class="t-borderRight2x">...</div>

<div class="t-border3x">...</div>
<div class="t-borderTop3x">...</div>
<div class="t-borderLeft3x">...</div>
<div class="t-borderBottom3x">...</div>
<div class="t-borderRight3x">...</div>

<div class="t-border4x">...</div>
<div class="t-borderTop4x">...</div>
<div class="t-borderLeft4x">...</div>
<div class="t-borderBottom4x">...</div>
<div class="t-borderRight4x">...</div>

<div class="t-border0">...</div>
<div class="t-borderTop0">...</div>
<div class="t-borderLeft0">...</div>
<div class="t-borderBottom0">...</div>
<div class="t-borderRight0">...</div>

/* border-color */
<div class="t-borderWhite">...</div>
<div class="t-borderBlack">...</div>

<div class="t-borderGray90">...</div>
<div class="t-borderGray80">...</div>
<div class="t-borderGray70">...</div>
<div class="t-borderGray60">...</div>
<div class="t-borderGray50">...</div>
<div class="t-borderGray40">...</div>
<div class="t-borderGray30">...</div>
<div class="t-borderGray20">...</div>
<div class="t-borderGray10">...</div>
<div class="t-borderGray5">...</div>

<div class="t-borderPrimaryDark">...</div>
<div class="t-borderPrimary">...</div>
<div class="t-borderPrimaryLight">...</div>

<div class="t-borderSuccessDark">...</div>
<div class="t-borderSuccess">...</div>
<div class="t-borderSuccessLight">...</div>

<div class="t-borderNoticeDark">...</div>
<div class="t-borderNotice">...</div>
<div class="t-borderNoticeLight">...</div>

<div class="t-borderWarningDark">...</div>
<div class="t-borderWarning">...</div>
<div class="t-borderWarningLight">...</div>

<div class="t-borderErrorDark">...</div>
<div class="t-borderError">...</div>
<div class="t-borderErrorLight">...</div>

/* border-radius */
<div class="t-borderRadius">...</div>
<div class="t-borderRadiusXs">...</div>
<div class="t-borderRadiusSm">...</div>
<div class="t-borderRadiusMd">...</div>
<div class="t-borderRadiusLg">...</div>
<div class="t-borderRadiusXl">...</div>
<div class="t-borderRadiusCircle">...</div>
<div class="t-borderRadius0">...</div>
```

### Responsive classes

```css
@import "sircus-tools-border/responsive";
/*  OR  */
@import "sircus-tools-border/sm";
@import "sircus-tools-border/md";
@import "sircus-tools-border/lg";
```
e.g:

```html
<p class="t-sm-borderRadius">...</p>
<p class="t-md-border2x">...</p>
<p class="t-lg-border">...</p>
```

## License
Released under the MIT license.
