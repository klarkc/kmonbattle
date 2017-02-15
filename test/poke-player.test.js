const assert = require('chai').assert;
const path = require('path');
const util = require('./util.js');

suite('poke-player element tests', function() {
  var  window;

  setup(function(done){
    util.loadCustomElement('poke-player', (err, win, PokePlayer) => {

      if(err) done(err);
      window = win;
      try {
        window.customElements.define('poke-player', PokePlayer);
      } catch (err) {
        console.log(err);
      }

      util.stubElement(window, 'poke-search');
      done();
    });
  });

  test('when connected should add one PokeSearch child', function(){
    assert.lengthOf(window.document.querySelectorAll('poke-search'), 1);
  });
});
