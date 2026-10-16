/* Monta os cartões de brinquedos, o filtro por turma, as atividades e a legenda do mapa. */
(function () {
  var STAGES = window.PASSEIO.turmas, GROUPS = window.PASSEIO.grupos, ACT = window.PASSEIO.atividades, LEG = window.PASSEIO.legenda;

  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt) e.textContent = txt; return e; }
  function pad(n) { return n < 10 ? '0' + n : String(n); }

  var rides = [];
  var groupsBox = document.getElementById('groups');
  GROUPS.forEach(function (g) {
    var sec = el('div', 'group');
    sec.appendChild(el('h3', '', g.t));
    sec.appendChild(el('p', '', g.d));
    var grid = el('div', 'cards');
    g.r.forEach(function (r) {
      var card = el('article', 'ride');
      var box = el('div');
      box.appendChild(el('h4', '', r.n));
      box.appendChild(el('p', 'age', r.a));
      if (r.closed) box.appendChild(el('span', 'warn', 'Em reforma'));
      card.appendChild(box);
      if (r.m) { var b = el('span', 'num c-' + r.c, pad(r.m)); b.title = 'Número no mapa'; card.appendChild(b); }
      grid.appendChild(card);
      rides.push({ el: card, r: r });
    });
    sec.appendChild(grid);
    groupsBox.appendChild(sec);
  });

  var status = document.getElementById('status'), hint = document.getElementById('hint');
  var chipsBox = document.getElementById('chips'), chipEls = {};
  function apply(id) {
    var ok = 0;
    rides.forEach(function (x) {
      var show = id === 'all' || x.r.s.indexOf(id) > -1;
      x.el.classList.toggle('off', !show);
      if (show) ok++;
    });
    Object.keys(chipEls).forEach(function (k) { chipEls[k].setAttribute('aria-pressed', k === id ? 'true' : 'false'); });
    if (id === 'all') status.textContent = rides.length + ' brinquedos e atrações no parque (1 em reforma).';
    else status.textContent = ok + ' de ' + rides.length + ' indicados para ' + STAGES.filter(function (s) { return s.id === id; })[0].label + '.';
    hint.hidden = id !== 'ei';
  }
  STAGES.forEach(function (s) {
    var b = el('button', 'chip', s.label); b.type = 'button'; b.id = 'chip-' + s.id;
    b.addEventListener('click', function () { apply(s.id); });
    chipEls[s.id] = b; chipsBox.appendChild(b);
  });
  apply('all');

  var pills = document.getElementById('pills');
  ACT.forEach(function (a) { pills.appendChild(el('li', '', a)); });

  var legend = document.getElementById('legend');
  LEG.forEach(function (g) {
    var sec = el('section'); sec.appendChild(el('h3', '', g.t));
    var ol = el('ol');
    g.i.forEach(function (name, i) {
      var li = el('li'); li.appendChild(el('span', 'num c-' + g.c, pad(g.s + i))); li.appendChild(el('span', '', name)); ol.appendChild(li);
    });
    sec.appendChild(ol); legend.appendChild(sec);
  });
})();
