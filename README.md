# FIGlet plugin

Add version badge to markdown files via [markdown-magic](https://github.com/DavidWells/markdown-magic)

## Install

```
npm i markdown-magic markdown-magic-version-badge --save-dev
```

## Adding the plugin

See `example.js` for usage.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./example.js) -->
<!-- The below code snippet is automatically added from ./example.js -->
```js
"use strict";

const path = require('path');
const markdownMagic = require('markdown-magic');
const { FIGLET } = require('./index.js');

const config = {
  transforms: {
    FIGLET: FIGLET({ variables: { foo: 'bar' } }),
  },
};

const markdownPath = path.join(__dirname, 'README.md');
markdownMagic(markdownPath, config);
```
<!-- AUTO-GENERATED-CONTENT:END *-->

## Usage in markdown

<!-- AUTO-GENERATED-CONTENT:START (FIGLET:text=figlet <%= foo %>&font=Ogre&horizontalLayout=fitted) -->
<pre>
  __  _         _        _     _                  
 / _|(_)  __ _ | |  ___ | |_  | |__    __ _  _ __ 
| |_ | | / _` || | / _ \| __| | '_ \  / _` || '__|
|  _|| || (_| || ||  __/| |_  | |_) || (_| || |   
|_|  |_| \__, ||_| \___| \__| |_.__/  \__,_||_|   
         |___/                                    
</pre>
<!-- AUTO-GENERATED-CONTENT:END -->

## Options

### Transform factory options

 - **variables**: any object made of properties you can reuse in the rendered lodash template.
 
### Content generator options

The options propagated to [figlet.text options](https://www.npmjs.com/package/figlet#text)
and use the same defaults.

The text option can be a [lodash template](https://lodash.com/docs/4.17.10#template).
