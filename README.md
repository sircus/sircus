# [sircus](http://sircus.blivesta.com)

[![npm version](https://img.shields.io/npm/v/sircus.svg?style=flat)](https://www.npmjs.com/package/sircus)
[![Build Status](https://img.shields.io/travis/sircus/sircus/master.svg?style=flat)](https://travis-ci.org/sircus/sircus)


## Installation

> npm:

```bash
$ npm install sircus
```

## Usage

> using dist files

```html
<link rel="stylesheet" type="text/css" href="./normalize.min.css">
<link rel="stylesheet" type="text/css" href="./dist/sircus.min.css">
```

> using cssnext:

input.css
```css
@import "sircus";
```

> using sass:

input.scss
```scss
@import "./node_modules/sircus-global-property/converted";

@import "./node_modules/sircus-elements-body/converted";
@import "./node_modules/sircus-elements-heading/converted";
@import "./node_modules/sircus-elements-image/converted";
@import "./node_modules/sircus-elements-link/converted";
@import "./node_modules/sircus-elements-list/converted";
@import "./node_modules/sircus-elements-paragraph/converted";
@import "./node_modules/sircus-elements-space/converted";

@import "./node_modules/sircus-components-button/converted";
@import "./node_modules/sircus-components-button-paint/converted";
@import "./node_modules/sircus-components-button-size/converted";
@import "./node_modules/sircus-components-button-reset/converted";
@import "./node_modules/sircus-components-container/converted";
@import "./node_modules/sircus-components-fullembed/converted";
@import "./node_modules/sircus-components-form/converted";
@import "./node_modules/sircus-components-form-size/converted";
@import "./node_modules/sircus-components-grid/converted";
@import "./node_modules/sircus-components-list/converted";
@import "./node_modules/sircus-components-table/converted";

@import "./node_modules/sircus-tools-align/converted";
@import "./node_modules/sircus-tools-align-responsive/converted";
@import "./node_modules/sircus-tools-clear/converted";
@import "./node_modules/sircus-tools-display/converted";
@import "./node_modules/sircus-tools-display-responsive/converted";
@import "./node_modules/sircus-tools-gutter/converted";
@import "./node_modules/sircus-tools-gutter-responsive/converted";
@import "./node_modules/sircus-tools-layout/converted";
@import "./node_modules/sircus-tools-layout-responsive/converted";
@import "./node_modules/sircus-tools-overflow/converted";
@import "./node_modules/sircus-tools-overflow-responsive/converted";
@import "./node_modules/sircus-tools-space/converted";
@import "./node_modules/sircus-tools-space-responsive/converted";
@import "./node_modules/sircus-tools-typo/converted";
@import "./node_modules/sircus-tools-width/converted";
@import "./node_modules/sircus-tools-width-responsive/converted";
```


##  1: Global Module

- [sircus-global-property](https://github.com/sircus/global-property)

**variables**

`--g-variablesName-propertyName`


| Prefix   | e.g.               |
|:---------|:-------------------|
| `--g-*`  | `--g-primary-dark` |


## 2: Elements Module

- [sircus-elements-body](https://github.com/sircus/elements-body)
- [sircus-elements-heading](https://github.com/sircus/elements-heading)
- [sircus-elements-image](https://github.com/sircus/elements-image)
- [sircus-elements-link](https://github.com/sircus/elements-link)
- [sircus-elements-list](https://github.com/sircus/elements-list)
- [sircus-elements-paragraph](https://github.com/sircus/elements-paragraph)
- [sircus-elements-space](https://github.com/sircus/elements-space)

**variables**

`--elementsName-propertyName`


## 3: Components Module

- [sircus-components-button](https://github.com/sircus/components-button)
- [sircus-components-button-paint](https://github.com/sircus/components-button-paint)
- [sircus-components-button-size](https://github.com/sircus/components-button-size)
- [sircus-components-button-reset](https://github.com/sircus/components-button-reset)
- [sircus-components-container](https://github.com/sircus/components-container)
- [sircus-components-fullembed](https://github.com/sircus/components-fullembed)
- [sircus-components-form](https://github.com/sircus/components-form)
- [sircus-components-form-size](https://github.com/sircus/components-form-size)
- [sircus-components-grid](https://github.com/sircus/components-grid)
- [sircus-components-list](https://github.com/sircus/components-list)
- [sircus-components-table](https://github.com/sircus/components-table)

**variables**

`--ConmponentName-propertyName`

### Classies

Inspired by [SUIT CSS naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)

> [namespace-]ComponentsName[--modifierName|-descendentName]

```html
<div class="FullEmbed FullEmbed--16by9">
  <div class="FullEmbed-item"></div>
</div>
```

> ComponentName

- **Component name to use UpperCamelCase**

```css
.FullEmbed { }
.Container { }
```
- if using namespace

> namespace-ComponentName

```css
.namespace-FullEmbed { }
```

> ComponentsName--modifierName

```css
.FullEmbed--16by9 { }
```

> ComponentsName-descendentName

```css
.FullEmbed-item { }
```

> ComponentsName.is-stateOfModule

```css
.Button { }
.Button.is-active { }
```

```html
<a class="Button is-active"> </a>
```
### State classies

> .is-[focus||active||disabled]

* active
* focus
* disable

| Prefix   | e.g.               |
|:---------|:-------------------|
| `is-*`   | `is-active`        |



## 4: Tools Module

- [sircus-tools-align](https://github.com/sircus/tools-align)
- [sircus-tools-align-responsive](https://github.com/sircus/tools-align-responsive)
- [sircus-tools-clear](https://github.com/sircus/tools-clear)
- [sircus-tools-display](https://github.com/sircus/tools-display)
- [sircus-tools-display-responsive](https://github.com/sircus/tools-display-responsive)
- [sircus-tools-gutter](https://github.com/sircus/tools-gutter)
- [sircus-tools-gutter-responsive](https://github.com/sircus/tools-gutter-responsive)
- [sircus-tools-layout](https://github.com/sircus/tools-layout)
- [sircus-tools-layout-responsive](https://github.com/sircus/tools-layout-responsive)
- [sircus-tools-overflow](https://github.com/sircus/tools-overflow)
- [sircus-tools-overflow-responsive](https://github.com/sircus/tools-overflow-responsive)
- [sircus-tools-space](https://github.com/sircus/tools-space)
- [sircus-tools-space-responsive](https://github.com/sircus/tools-space-responsive)
- [sircus-tools-typo](https://github.com/sircus/tools-typo)
- [sircus-tools-width](https://github.com/sircus/tools-width)
- [sircus-tools-width-responsive](https://github.com/sircus/tools-width-responsive)

**variables**

> --toolName-propertyName

| Prefix   | e.g.            |
|:---------|:----------------|
| `none`   | `--gutter-size` |


### Classies

`t-[sm-||md-||lg-]toolName`

```css
.t-clear { }
.t-wsm-block { }
.t-wxs-width2of4 { }
```

```html
<div class="t-clear">
  <div class="t-left t-wxs-hidden"></div>
  <p class="t-uppercase"></p>
</div>
```


## Abbreviations

Default viewports

| variables            | min-width         |
|:---------------------|:------------------|
| --g-viewport-sm    | 40em = 640px      |
| --g-viewport-md    | 64em = 1024px     |
| --g-viewport-lg    | 75em = 1200px     |


Size level Suffix

| abbr (Suffix) | Base            | Level |
|:--------------|:----------------|:------|
| *-gt          | Gargantuan      | +4    |
| *-hg          | Huge            | +3    |
| *-xl          | Extra Large     | +2    |
| *-lg          | Large           | +1    |
| *-bs(md)      | Base (Medium)   | 0     |
| *-sm          | Small           | -1    |
| *-xs          | Extra Small     | -2    |
| *-tn          | Tiny            | -3    |
| *-mn          | Minimal         | -4    |
| *-nn or 0     | None            |       |



## Resources

**[cssnext](http://cssnext.io/)**

> Use tomorrow's CSS syntax, today


## Contributing

We Need Your Help!


## License
Released under the [MIT](https://github.com/sircus/license/blob/master/LICENSE) license.
