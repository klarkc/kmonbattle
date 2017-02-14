class PokeSearch extends HTMLElement {
  constructor(apiConfig) {
    super(); // by spec
    this.apiConfig = apiConfig;
    this.innerHTML = `
      <label>Digite o nome do pokemon</label>
      <input type="text" id="name">
      <button type="button" id="submit">
    `;
  }
}

define(() => PokeSearch);
