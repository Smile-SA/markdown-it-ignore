# markdown-it-ignore

[![NPM version](https://img.shields.io/npm/v/markdown-it-ignore?color=3AB9D4&label=)](https://www.npmjs.com/package/markdown-it-ignore)

Ignore plugin for markdown-it markdown parser.

## Installation

```bash
npm i markdown-it-ignore
```

## Configuration

```js
var md = require('markdown-it')();
var mii = require('markdown-it-ignore');
md.use(mii [, options]);
```

Options:

* `secure` (type: `boolean`, default: `true`): Secure HTML output

_Differences in browser._ If you load the script directly into the page without
using a package system, the module will add itself globally with the name `markdownitIgnore`.
Init code will look a bit different in this case:

```js
var md = window.markdownit().use(window.markdownitIgnore);
```

## Usage

### Default

In your markdown you can use `:::` as block separator to not parse what is inside.

It is similar to the fence block, but no `<pre>` nor `<code>` tags are added.

Example:
```md
*This will be parsed*

:::
*This won't be parsed*
:::
```

Output:
```html
<p><strong>This will be parsed</strong></p>
*This won't be parsed*
```

### Unsecure

If you want to insert HTML inside the ignore block, set the `secure` option to `false` (else HTML characters are escaped).

Example:
```md
:::
<div>This will preserved as is</div>
:::
```

Output:
```html
<div>This will preserved as is</div>
```
