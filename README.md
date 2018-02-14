> The new generation of like-Jquery library

# Tinyjs

I wanted something smaller and smarter than Jquery and this how Tinyjs was born.

## Contents

- [Usage](#usage)
- [Components](#components)
- [Helpers](#helpers)
- [Plugin](#plugin)
- [Custom build](#custombuild)
- [Debugging](#debugging)
- [Countributing](#countributing)

## Why Tinyjs?

- Insanly small (**~985 bytes**)
- Fast
- Doesn't slow down the loading page
- [It's super modular](#components)
- [Plugin Friendly](#plugin)

## Usage
### Add Tinyjs to your project

Using npm
```console
$ npm install danipani-tinyjs --save
```
If you prefer using Yarn:

```console
Soon
```

Or via CDN:
```console
Soon
```
### Find elements
Search for the first element (work with class/id/properties/...)
```javascript
$.one('element')
```

(You can find out more on https://developer.mozilla.org/it/docs/Web/API/Document/querySelector)  
Search for all elements, which match with the selector
```javascript
$.all('element')
```
### Plain html
You can get plain html with `$.selector`
```javascript
$.one('element').selector
```

## Components
You can simply add class to your element:
- `addClass(class)`:
```javascript
$.one('element').addClass(['class']) //(work also with list of class)
```
Or remove a class:
- `removeClass(class)`:
```javascript
$.one('element').removeClass(['class','class2'])
```
And return all classes:
- `allClass()`:
```javascript
$.one('element').allClass() //expected [""]
```
Read or set text of a element:
- `text(text)`:
```javascript
$.one('element').text('Hello World')
$.one('element').text() //expected 'Hello World'
```

Also for value:
- `val(value)`:
```javascript
$.one('element').val('Hello World')
$.one('element').val() //expected 'Hello World'
```

Event Listener:
- `on(type, listener)`:
```javascript
$.one('element').on('click', e = > {...})
```
- `once(type, listener)`:
```javascript
$.one('element').once('click', e = > {...})
```
- `off(type)`:
```javascript
$.one('element').off('click')
```
