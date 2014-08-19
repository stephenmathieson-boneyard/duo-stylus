
var co = require('co');
var Duo = require('duo');
var stylus = require('./');

co(function *(){
  var duo = Duo(__dirname + '/test/fixtures/simple');
  duo.entry('index.styl');
  duo.use(stylus());
  var css = yield duo.run();
  console.log(css)
})();
