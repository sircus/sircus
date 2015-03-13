# [sircus](http://sircus.blivesta.com)

![Bower version](https://img.shields.io/bower/v/sircus.svg?style=flat)
[![npm version](https://img.shields.io/npm/v/sircus.svg?style=flat)](https://www.npmjs.com/package/sircus)
[![Build Status](https://img.shields.io/travis/sircus/sircus/master.svg?style=flat)](https://travis-ci.org/sircus/sircus)
[![devDependency Status](https://david-dm.org/sircus/sircus/dev-status.svg)](https://david-dm.org/sircus/sircus#info=devDependencies)


## Demo
WIP: http://sircus.blivesta.com


## Naming things

### Modules

> [namespace-]ModuleName[--modifierName|-descendentName]


```html
<div class="FullEmbed FullEmbed--16by9">
  <div class="FullEmbed-item"></div>
</div>

```

> namespace (optional)

```css
.sc-FullEmbed { }
```

> ModuleName

```css
.FullEmbed { }
```

> ModuleName--modifierName

```css
.FullEmbed--16by9 { }
```

> ModuleName-descendentName

```css
.FullEmbed-item { }
```

> ModuleName.is-stateOfModule

```css
.Btn { }
.Btn.is-active { }
```

```html
<a class="Btn is-active"> </a>
```


### Tools
> t-[sm|md|lg-]toolName

#### t-toolName

```css
.t-clear { }
.t-sm-block { }
```

```html
<div class="t-clear">
  <div class="t-left t-xs-hidden"></div>
  <p class="t-uppercase"></p>
</div>
```


## Contributing

To contribute to sircus, clone this repo locally and commit your code.
Please check that everything works before opening a pull-request.

Install : `nodejs` `npm` `gulp` `bower` `hugo`
```bash
$ git clone https://github.com/sircus/sircus.git
$ cd sircus
$ git checkout -b patch-1
$ npm install && gulp build
```

Build -> browserSync,watch
```bash
$ gulp build
```

browserSync, watch
```bash
$ gulp
```
And finally, open in your browser.


## Acknowledgements

Inspiration and code was taken from many sources, including:
[suitcss](http://suitcss.github.io/)


## License
Released under the [MIT license](https://github.com/sircus/sircus/blob/master/LICENCE).
