# element-pixels-visible

A method for getting the number of pixles of an element that is
visible inside the browser.

[![build status](https://travis-ci.org/voldern/element-pixels-visible.svg)](https://travis-ci.org/voldern/element-pixels-visible)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/espvol.svg)](https://saucelabs.com/u/espvol)
[![modules status](https://david-dm.org/voldern/element-pixels-visible.svg)](https://david-dm.org/voldern/element-pixels-visible)

[![npm badge](https://nodei.co/npm/element-pixels-visible.png?downloads=true)](https://nodei.co/npm/element-pixels-visible)

# Usage

Pass an
[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) to
the method to get the number of pixels visible.

```javascript
elementPixelsVisible(document.getElementById('#foo'));
```

# Attribution

This project is based on
[bv-ui-pixels-displayed](https://github.com/bazaarvoice/bv-ui-pixels-displayed)
with added support for IE8.

# License

MIT
