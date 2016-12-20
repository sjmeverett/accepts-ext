# accepts-ext

This module is [express middleware](http://expressjs.com/en/guide/using-middleware.html) to parse URLs containing
file extensions, set the `Accept` header accordingly, and remove the extension.

I.e., the following request:

    GET /widgets.json

becomes:

    GET /widgets
    Accept: application/json

This is useful in sitations where the it's easier to use a file extension than set headers, such as in a download link.

## Installation

    $ npm install --save accepts-ext

## Usage

```js
import * as acceptsExt from 'accepts-ext'

const app = express();
// ...
app.use(acceptsExt);
```
