## Bundlers and Minifiers

| | esbuild | swc | terser | uglifyjs |
|--|--|--|--|--|
|webpack|✅|✅|✅|✅|
|vite|✅||✅||
|rollup|✅||||
|parcel||✅|✅||
|esbuild|✅||||


```
npm install
```

Write your code in `src/app.js`

Then, run the bundlers

```
npm run build:all
```

You can find more scripts in `package.json`

## Bulk Build Scripts

Build all version with all bundlers!

### 1. write code in `src/app.js`

import from target library and reference it, more than once

#### e.g.
```js
import is_number from 'is-number';

document.addEventListener('DOMContentLoaded', () => {
  $('div#root').html(
    `<h1>jquery works well</h1><h2>is 4 number? ${is_number(4)}</h2>`
  );
});
```

```js
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
  $('div#root').html('<h1>jquery works well</h1>');
});
```

### 2. rewrite `TARGET_PACKAGE` in `bulk-bundle.js`

write official name from `npm`

### 3. run `bulk-bundle.js` script
```
node bulk-bundle.js
```

You can see result files in `build/${package}`