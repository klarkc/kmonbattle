class KmonGame extends HTMLElement {
  constructor() {
    super(); // by spec

    window.addEventListener('components-ready', this._createGame.bind(this));
  }

  _createGame() {
    // set pokemons to battle
    this.querySelector('#player1').setPoke();
    this.querySelector('#player2').setPoke();
  }
}

define(() => KmonGame);
