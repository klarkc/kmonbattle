const assert = require('chai').assert;
const jsdom = require('jsdom');
const path = require('path');
const util = require('./util.js');

suite('loader tests', function() {
  test('loader should fire components-ready event', function() {
    var componentsEvent = new Promise((resolve, reject) => {
      // setup DOM enviroment
      jsdom.env({
        file: path.resolve(__dirname, '../index.html'),
        scripts: [
          util.customElementsPath(),
          path.resolve(__dirname, '../src/loader.js'),
        ],
        created: (err, window) => {
          if (err) reject(err);

          // replace requirejs function for a stub
          window.requirejs = (components, callback) => {
            assert.include(components, './kmon-game');
            assert.include(components, './poke-player');
            assert.include(components, './poke-search');
            callback(window.HTMLElement, window.HTMLElement, window.HTMLElement);
          };

          window.addEventListener('components-ready', resolve);
        },
        done: err => {
          reject(err || Error('components-ready not called'));
        }
      });
    });

    return componentsEvent.then(evt => {
      assert.equal(evt.type, 'components-ready');
    });
  });
});
