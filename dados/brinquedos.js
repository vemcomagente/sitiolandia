/* Brinquedos, faixas etárias e turmas. Para mudar uma idade, edite o campo "a" (texto) e "s" (turmas: ei, f1, f2, f3). "m" é o número no mapa. */
(function () {
  window.PASSEIO = window.PASSEIO || {};
  var ALL = ['ei', 'f1', 'f2', 'f3'], FUND = ['f1', 'f2', 'f3'];
  window.PASSEIO.turmas = [
    { id: 'all', label: 'Todas as turmas' },
    { id: 'ei', label: 'Educação Infantil' },
    { id: 'f1', label: '1º ano' },
    { id: 'f2', label: '2º ano' },
    { id: 'f3', label: '3º ao 5º ano' }
  ];
  window.PASSEIO.grupos = [
    { t: 'Aventura e esportes', d: 'Para quem gosta de subir, escalar e se movimentar.', r: [
      { n: 'Tirolesa', a: 'A partir do Fundamental I', s: FUND, m: 24, c: 'e' },
      { n: 'Arvorismo', a: 'A partir do 3º ano do Fundamental I', s: ['f3'], m: 26, c: 'e' },
      { n: 'Escalada na Montanha', a: 'A partir de 4 anos', s: ALL, c: 'e', age: true },
      { n: 'Aventura no Mamute', a: 'A partir de 5 anos', s: ALL, c: 'e', age: true },
      { n: 'Túnel da Mata', a: 'A partir de 4 anos', s: ALL, m: 27, c: 'e', age: true },
      { n: 'Labirinto', a: 'A partir de 4 anos', s: ALL, m: 30, c: 'e', age: true }
    ]},
    { t: 'Brinquedos de parque', d: 'Carrosséis e brinquedos de diversão.', r: [
      { n: 'Carrossel Dragão', a: 'De 2 a 5 anos', s: ['ei'] },
      { n: 'Cisne', a: 'Livre', s: ALL, m: 37, c: 'r' },
      { n: 'Barco Viking', a: 'A partir do Fundamental I', s: FUND, m: 34, c: 'r' },
      { n: 'La Bamba', a: 'A partir do Fundamental I', s: FUND, m: 33, c: 'r' }
    ]},
    { t: 'Mundo espacial', d: 'Foguetes, dinossauros espaciais e estrelas.', r: [
      { n: 'Space Rex', a: 'Educação Infantil até o 2º ano', s: ['ei', 'f1', 'f2'], m: 31, c: 'r' },
      { n: 'Foguete Espacial', a: 'A partir do 3º ano', s: ['f3'], m: 32, c: 'r' },
      { n: 'Planetário', a: 'A partir do 3º ano do Fundamental I', s: ['f3'], m: 14, c: 'c' },
      { n: 'Casa das Estrelas', a: 'Educação Infantil', s: [], m: 13, c: 'c', closed: true }
    ]},
    { t: 'Para os pequenos', d: 'Brinquedos pensados para a Educação Infantil.', r: [
      { n: 'Safari', a: 'Educação Infantil e 1º ano', s: ['ei', 'f1'] },
      { n: 'Espaço Kids', a: 'De 2 a 6 anos', s: ['ei', 'f1'], age: true },
      { n: 'Piscina de Bolinha', a: 'Educação Infantil', s: ['ei'] },
      { n: 'Torre dos Pássaros', a: 'Educação Infantil e 1º ano', s: ['ei', 'f1'], m: 36, c: 'r' }
    ]}
  ];
})();
