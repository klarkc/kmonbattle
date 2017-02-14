const components = [
  "./kmon-game",
  "./poke-search",
  "./poke-player"
];

requirejs(components, function(KmonGame, PokeSearch, PokePlayer) {
  window.customElements.define('kmon-game', KmonGame);
  window.customElements.define('poke-search', PokeSearch);
  window.customElements.define('poke-player', PokePlayer);

  // Ready to go
  document.dispatchEvent(new CustomEvent('components-ready'));
});
