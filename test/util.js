const sinon = require('sinon');
const path = require('path');
const fakedom = require('fakedom-amd');
const extend = require('util')._extend;

var util = module.exports = {};

util.requireJSPath = function() {
  return path.resolve(
    __dirname,
    '../bower_components/requirejs/require.js'
  );
};

util.customElementsPath = function() {
  return path.resolve(
    __dirname,
    '../bower_components/custom-elements/custom-elements.min.js'
  );
};

util.loadCustomElement = function(modulePath, callback) {
  return new fakedom({
    requireOptions: {
      baseUrl: path.resolve(__dirname, '../src'),

    },
    module: modulePath
  }, function(err, window, module) {
    if(err) callback(err.originalError.error || err);

    // Add CustomElements polyfill
    var script = window.document.createElement('script');
    script.src = util.customElementsPath();
    script.onload = () => callback.apply(this, arguments);
    window.document.body.appendChild(script);
  });
};

util.stubElement = function(window, name) {
  window.customElements.define(name, window.HTMLElement);
}
