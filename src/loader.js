const components = ["./src/kmon-game.js"];

requirejs(components, function(kmonGame) {
  customElements.define('kmon-game', kmonGame);
});
