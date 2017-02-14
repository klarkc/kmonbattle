class KmonGame extends HTMLElement {
  constructor() {
    super(); // by spec

    document.addEventListener('components-ready', this._createGame);
  }

  _createGame() {
    // set pokemons to battle
    this.querySelector('#player1').setPoke();
    this.querySelector('#player2').setPoke();
  }
}

define(() => KmonGame);
