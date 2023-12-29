class Palavra {
  constructor() {
    this._palavraSecreta = [];
    this._posicao = [];
  }
  getPosicao() {
    return this._posicao;
  }
  novaPalavra(tema) {
    const palavraDoTema = tema.palavraAleatoria();
    this.setPalavra(palavraDoTema);
  }
  setPalavra(palavra) {
    this._palavraSecreta = Array.from(palavra);
    this._posicao = [];
    this._palavraSecreta.forEach(letra => {
      this._posicao.push(letra !== ' ' ? '_' : ' ');
    });
  }
  verificarLetra(letraUser) {
    const txt = this._palavraSecreta.join('').normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    const listaLetras = txt.split('');
    const letra = letraUser.toUpperCase();

    if (!listaLetras.includes(letra)) return false;

    listaLetras.forEach((letraDaLista, index) => {
      if (letraDaLista !== letra) return;
      this._posicao[index] = this._palavraSecreta[index];
    });
    return true;
  }
}

module.exports = Palavra;