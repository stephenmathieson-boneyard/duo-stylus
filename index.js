
/**
 * Module dependencies.
 */

var debug = require('debug')('duo-stylus');
var stylus = require('stylus');

/**
 * Export `plugin`.
 */

module.exports = plugin;

/**
 * Compile stylus to CSS, optionally using `opts`.
 *
 * @api public
 * @param {Object} [opts]
 * @return {Function}
 */

function plugin(opts) {
  opts = opts || {};
  return function *stylus(file, entry) {
    if ('styl' != entry.type) return;
    debug('compiling %s to css', file.id);
    file.src = yield render(file.src, opts);
    file.type = 'css';
    done();
  };
}

/**
 * Render the stylus `src` with `opts`.
 *
 * @api private
 * @param {String} src
 * @param {Object} opts
 * @return {String}
 */

function render(src, opts) {
  return function(done){
    stylus(src, opts).render(done);
  };
}
