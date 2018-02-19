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

- Insanly small ![File Size Gzip](http://img.badgesize.io/DaniPani/Tinyjs/master/dist/tiny.js?compression=gzip)
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

### Variable
To assign to something you have to use `save()` method
```javascript
const element = $.one('element').save()
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

Height/Width:
- `height(value)/width(value)`:
```javascript
$.one('element').height('12px')
$.one('element').width() //expect to return the width
```

You can also get or set css properties:
- `css(property, value)/css(property)`:
```javascript
$.one('element').css('color', 'red')
$.one('element').css('color') //expected rgb(255, 0, 0)
```

And finally show or hide method:
- `show(type)/hide(type)`:
```javascript
$.one('element').hide(true) // affect the visibility
$.one('element').show(false) // affect the display property
```

## Helpers
To minimize the code I used two helpers:
- `undefined(var,callback, callback2)` check if var is undefined and it call the right callback
- `style(property)` return the value of the css property

## Plugin
We love plugin therefore it's a piece of cake create one 😄
```javascript
$.name = (arg1, arg2, ..) => {...} // you can access to $.selector and $.listener (list of all listener), if you want concatenate fucntion simply add return $
```
