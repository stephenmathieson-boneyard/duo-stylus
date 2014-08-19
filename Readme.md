
# duo-stylus

  compile stylus to css

## CLI Usage

```sh
$ duo --use duo-stylus index.styl > build.css
```

## API Usage

```js

var co = require('co');
var Duo = require('duo');
var stylus = require('duo-stylus');

co(function *(){
  var duo = Duo(__dirname);
  duo.entry('index.styl');
  duo.use(stylus());
  var css = yield duo.run();
  // ...
})();

```

## License 

  MIT