# sircus-tools-typography

[![npm version](https://img.shields.io/npm/v/sircus-tools-typography.svg?style=flat)](https://www.npmjs.com/package/sircus-tools-typography)

## Installation

npm:

```bash
$ npm install sircus-tools-typography sircus-variables
```

## Usage

CSS:

```css
@import "sircus-tools-typography";
@import "sircus-variables";
```

html:

```html
/* color */
<p class="t-colorWhite"></p>
<p class="t-colorBlack"></p>

<p class="t-colorGray90"></p>
<p class="t-colorGray80"></p>
<p class="t-colorGray70"></p>
<p class="t-colorGray60"></p>
<p class="t-colorGray50"></p>
<p class="t-colorGray40"></p>
<p class="t-colorGray30"></p>
<p class="t-colorGray20"></p>
<p class="t-colorGray10"></p>
<p class="t-colorGray5"></p>

<p class="t-colorPrimary"></p>
<p class="t-colorPrimaryDark"></p>
<p class="t-colorPrimaryLight"></p>

<p class="t-colorSecondary"></p>
<p class="t-colorSecondaryDark"></p>
<p class="t-colorSecondaryLight"></p>

<p class="t-colorSuccess"></p>
<p class="t-colorSuccessDark"></p>
<p class="t-colorSuccessLight"></p>

<p class="t-colorNotice"></p>
<p class="t-colorNoticeDark"></p>
<p class="t-colorNoticeLight"></p>

<p class="t-colorWarning"></p>
<p class="t-colorWarningDark"></p>
<p class="t-colorWarningLight"></p>

<p class="t-colorError"></p>
<p class="t-colorErrorDark"></p>
<p class="t-colorErrorLight"></p>

/* font-weight */
<p class="t-normal"></p>
<p class="t-bold"></p>
<p class="t-bolder"></p>
<p class="t-lighter"></p>

/* font-style */
<p class="t-italic"></p>

/* text-decoration */
<p class="t-decoNone"></p>
<p class="t-underline"></p>
<p class="t-overline"></p>
<p class="t-through"></p>

/* text-transform */
<p class="t-lowercase"></p>
<p class="t-uppercase"></p>
<p class="t-capitalize"></p>

/* white-space */
<p class="t-nowrap"></p>
<p class="t-pre"></p>

/* font-family */
<p class="t-enSans"></p>
<p class="t-enSerif"></p>
<p class="t-enMonospace"></p>

<p class="t-jaSans"></p>
<p class="t-jaSerif"></p>
<p class="t-jaMonospace"></p>

/* font-size */
<p class="t-fontGt"></p>
<p class="t-fontHg"></p>
<p class="t-fontXl"></p>
<p class="t-fontLg"></p>
<p class="t-fontMd"></p>
<p class="t-fontSm"></p>
<p class="t-fontXs"></p>

/* line-height */
<p class="t-lineHeightXs"></p>
<p class="t-lineHeightSm"></p>
<p class="t-lineHeightMd"></p>
<p class="t-lineHeightLg"></p>
<p class="t-lineHeightXl"></p>

/* line-height */
<p class="t-lineHeightXs"></p>
<p class="t-lineHeightSm"></p>
<p class="t-lineHeightMd"></p>
<p class="t-lineHeightLg"></p>
<p class="t-lineHeightXl"></p>

/* letter-spacing */
<p class="t-letterSpacingXs"></p>
<p class="t-letterSpacingSm"></p>
<p class="t-letterSpacingMd"></p>
<p class="t-letterSpacingLg"></p>
<p class="t-letterSpacingXl"></p>
```

### Responsive classes

```css
@import "sircus-tools-typography/responsive";
/*  OR  */
@import "sircus-tools-typography/sm";
@import "sircus-tools-typography/md";
@import "sircus-tools-typography/lg";
```
e.g:

```html
<div class="t-sm-lineHeightXs">...</div>
<div class="t-md-lowercase">...</div>
<div class="t-lg-letterSpacingXl">...</div>
```

## License
Released under the MIT license.
