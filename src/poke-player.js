class PokePlayer extends HTMLElement {
  constructor() {
    super(); // by spec
  }
  setPoke() {
    const PokeSearch = customElements.get('poke-search');
    this.appendChild(new PokeSearch('Type an pokemon name'));
  }
}

define(() => PokePlayer);
