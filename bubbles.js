var rando = (n) => Math.round(Math.random() * n);
var delay = (ms) => new Promise(res => setTimeout(res, ms));
var ele = (t) => document.createElement(t);
var attr = (o, k, v) => o.setAttribute(k, v);
var tn = (o, s) => o ? o.getElementsByTagName(s) : console.log(o);
var cn = (o, s) => o ? o.getElementsByClassName(s) : console.log(o);
var gi = (o, s) => o ? o.getElementById(s) : console.log(o);

function genColor(n) {
  var s = '';
  var chars = '1e043579bd';
  for (var i = 0; i <= n; i++) {
    s += chars[rando(9)];
  }
  return s;
}

function randomBalls() {
var colors = ['#ff1a0a','#ff430a','#ff6a00','#ffa463','#ffceab','#ffe0ab','#ffc157','#ffa50a','#ffc60a','#ffd64f','#ffe17d','#fff1c4','#fff1c4','#ffd036','#ffc300','#ffc300','#fff694','#ffee36','#fff836','#fffdd1','#d1ffff','#42ffff','#42ffff','#e0ffff','#e0f9ff','#12d1ff','#12d1ff','#d4f6ff','#d4ecff','#57b3ff','#0f93ff','#0f93ff','#0f67ff','#f2ebff','#733dd9','#5800ff','#5800ff','#b187ff','#c978ff','#c978ff','#fdedff','#ffedff','#ff00ff','#ff00c8','#ffe6fa','#ff009d','#ff0044','#ffc7d6','#ff002f','#ffdbe2','#ff2638'];
  var circles = ``;
  for (var i = 0; i < 350; i++) {
    var startPos = 100;
    var startRad = rando(6) / 10;
    var endRad = rando(10) / 10;
    var x = rando(180);
    var y = rando(160);
    var altColor = colors[rando((colors.length-1))];
    var color = `#${genColor(5)}`;
    var time = (rando(20) / 10);
    circles += `<circle class="bubbles" cx="${x}" cy="${y}" r="${startRad}" fill="${altColor}">
    <animate attributeName="fill" values="${color}; ${altColor}; ${altColor};" begin="0s" dur="${time}s" repeatCount="0" />
    <animate attributeName="cy" values="${startPos}; ${y-(y/10)}; ${y}; ${y};" begin="0s" dur="${time}s" repeatCount="0" />
    <animate attributeName="r" values="${startRad}; ${endRad}; ${endRad-(endRad/10)}; ${startRad};" begin="0s" dur="${time}s" repeatCount="indefinite" />
    <animate attributeName="cx" values="${startPos}; ${x-(x/10)}; ${x}; ${x};" begin="0s" dur="${time}s" repeatCount="0" />
  </circle>`;
  }
  return circles;
}

function killthis(){
  this.outerHTML = '';
}

function resetPos(){
  var circles = Array.from(cn(document,'bubbles'));
  for(var c=0; c<circles.length; c++){
    var elm = circles[c];
    var p = ['','-','','-','','-'];
    var x = p[rando(6)];
    var y = p[rando(6)];
    elm.style.transform = `translate(${x+rando(60)}px, ${y+rando(60)}px)`;
    elm.style.transition = `all ${rando(600)}ms ease-in-out`;
  }
}
function celebrate() {
  if(gi(document,'celebrationParent')) gi(document,'celebrationParent').outerHTML = '';
    var balls = randomBalls();
    var sv = ele('div');
    attr(sv,'id','celebrationParent');
    attr(sv,'style','position: fixed; z-index: 11111; top: 20%; left: 20%; width: 500px; height: 500px; background: #000; clip-path: circle(30%);');
    document.body.appendChild(sv);
    sv.innerHTML = `<svg viewBox="0 0 220 220">${balls}</svg>`;
    sv.onclick = resetPos;
    
//     sv.outerHTML = ''
}


celebrate()


// altversion
var rando = (n) => Math.round(Math.random() * n);
var delay = (ms) => new Promise(res => setTimeout(res, ms));
var ele = (t) => document.createElement(t);
var attr = (o, k, v) => o.setAttribute(k, v);
var tn = (o, s) => o ? o.getElementsByTagName(s) : console.log(o);
var cn = (o, s) => o ? o.getElementsByClassName(s) : console.log(o);
var gi = (o, s) => o ? o.getElementById(s) : console.log(o);

function randomBalls() {
  var colors = ["#e3f8ff","#e3f0ff","#d4f4ff","#d6e9ff","#d6f5ff","#cfe4ff","#ccf0fc","#c4f0ff","#c2ddff","#baedff","#b5d6ff","#b0ebff","#a6e8ff","#91e3ff","#195db0","#4599ff","#4564ff","#6982ff","#879bff","#bac6ff","#c5cefc","#e6eaff","#c8c4ff","#e5e3ff",'#ff1a0a','#ff430a','#ff6a00','#ffa463','#ffceab','#ffe0ab','#ffc157','#ffa50a','#ffc60a','#ffd64f','#ffe17d','#fff1c4','#fff1c4','#ffd036','#ffc300','#ffc300','#fff694','#ffee36','#fff836','#fffdd1','#d1ffff','#42ffff','#42ffff','#e0ffff','#e0f9ff','#12d1ff','#12d1ff','#d4f6ff','#d4ecff','#57b3ff','#0f93ff','#0f93ff','#0f67ff','#f2ebff','#733dd9','#5800ff','#5800ff','#b187ff','#c978ff','#c978ff','#fdedff','#ffedff','#ff00ff','#ff00c8','#ffe6fa','#ff009d','#ff0044','#ffc7d6','#ff002f','#ffdbe2','#ff2638'];
  var circles = ``;
  for (var i = 0; i < 350; i++) {
    var startPos = 110;
    var startRad = rando(6) / 10;
    var endRad = rando(10) / 10;
    var x = rando(180);
    var y = rando(180);
    var altColor = colors[rando((colors.length-1))];
    var color = colors[rando((colors.length-1))];
    var time = (rando(50) / 10);
    circles += `<circle class="bubbles" cx="${x}" cy="${y}" r="${startRad}" fill="${altColor}">
    <animate attributeName="fill" values="${color}; ${altColor}; ${altColor};" begin="0s" dur="${time}s" repeatCount="indefinite" />
    <animate attributeName="cy" values="${startPos}; ${y-(y/10)}; ${y}; ${startPos-(y/10)}; ${startPos}" begin="0s" dur="${time}s" repeatCount="indefinite" />
    <animate attributeName="r" values="${startRad}; ${endRad}; ${endRad-(endRad/10)}; ${startRad};" begin="0s" dur="${time}s" repeatCount="indefinite" />
    <animate attributeName="cx" values="${startPos}; ${x-(x/10)}; ${x}; ${startPos-(x/10)}; ${startPos}" begin="0s" dur="${time}s" repeatCount="indefinite" />
  </circle>`;
  }
  return circles;
}

async function killthis(){
  gi(document,'celebrationParent').style.transform = 'scale(0.1, 0.1)';
  gi(document,'celebrationParent').style.transition = 'all 700ms';
  await delay(699);
  gi(document,'celebrationParent').outerHTML = '';
}

async function celebrate() {
  if(gi(document,'celebrationParent')) gi(document,'celebrationParent').outerHTML = '';
  var balls = randomBalls();
  var sv = ele('div');
  attr(sv,'id','celebrationParent');
  attr(sv,'style','position: fixed; z-index: 21111; top: 20%; left: 20%; width: 800px; height: 800px; background: transparent; clip-path: circle(30%);');
  document.body.appendChild(sv);
  sv.innerHTML = `<svg viewBox="0 0 220 220">${balls}</svg>`;
  sv.onclick = killthis;
  await delay(5009);
  killthis();
}
celebrate();


//2nd alternate

var rando = (n) => Math.round(Math.random() * n);
var delay = (ms) => new Promise(res => setTimeout(res, ms));
var ele = (t) => document.createElement(t);
var attr = (o, k, v) => o.setAttribute(k, v);
var tn = (o, s) => o ? o.getElementsByTagName(s) : console.log(o);
var cn = (o, s) => o ? o.getElementsByClassName(s) : console.log(o);
var gi = (o, s) => o ? o.getElementById(s) : console.log(o);

function randomBalls() {
  var colors = ["#e3f8ff","#e3f0ff","#d4f4ff","#d6e9ff","#d6f5ff","#cfe4ff","#ccf0fc","#c4f0ff","#c2ddff","#baedff","#b5d6ff","#b0ebff","#a6e8ff","#91e3ff","#195db0","#4599ff","#4564ff","#6982ff","#879bff","#bac6ff","#c5cefc","#e6eaff","#c8c4ff","#e5e3ff",'#ff1a0a','#ff430a','#ff6a00','#ffa463','#ffceab','#ffe0ab','#ffc157','#ffa50a','#ffc60a','#ffd64f','#ffe17d','#fff1c4','#fff1c4','#ffd036','#ffc300','#ffc300','#fff694','#ffee36','#fff836','#fffdd1','#d1ffff','#42ffff','#42ffff','#e0ffff','#e0f9ff','#12d1ff','#12d1ff','#d4f6ff','#d4ecff','#57b3ff','#0f93ff','#0f93ff','#0f67ff','#f2ebff','#733dd9','#5800ff','#5800ff','#b187ff','#c978ff','#c978ff','#fdedff','#ffedff','#ff00ff','#ff00c8','#ffe6fa','#ff009d','#ff0044','#ffc7d6','#ff002f','#ffdbe2','#ff2638'];
  var circles = ``;
  for (var i = 0; i < 850; i++) {
    var startPos = 110;
    var startRad = rando(6) / 10;
    var endRad = rando(10) / 10;
    var x = rando(180);
    var y = rando(180);
    var altColor = colors[rando((colors.length-1))];
    var color = colors[rando((colors.length-1))];
    var time = ((rando(50)+2) / 10);
    circles += `<circle class="bubbles" cx="${x}" cy="${y}" r="${startRad}" fill="${altColor}">
    <animate attributeName="fill" values="${color}; ${altColor}; ${altColor};" begin="0s" dur="${time}s" repeatCount="indefinite" />
    <animate attributeName="cy" values="${startPos}; ${y-(y/10)}; ${y}; ${startPos-(y/15)}; ${startPos}" begin="0s" dur="${time}s" repeatCount="0" />
    <animate attributeName="r" values="${startRad}; ${endRad}; ${endRad-(endRad/10)}; ${startRad};" begin="0s" dur="${time}s" repeatCount="indefinite" />
    <animate attributeName="cx" values="${startPos}; ${x-(x/10)}; ${x}; ${startPos-(x/10)}; ${startPos}" begin="0s" dur="${time}s" repeatCount="0" />
  </circle>`;
  }
  return circles;
}

async function killthis(){
  gi(document,'celebrationParent').style.transform = 'scale(0.1, 0.1)';
  gi(document,'celebrationParent').style.transition = 'all 700ms';
  await delay(699);
  gi(document,'celebrationParent').outerHTML = '';
}

async function celebrate() {
  if(gi(document,'celebrationParent')) gi(document,'celebrationParent').outerHTML = '';
  var balls = randomBalls();
  var sv = ele('div');
  attr(sv,'id','celebrationParent');
  attr(sv,'style','position: fixed; z-index: 21111; top: 20%; left: 20%; width: 800px; height: 800px; background: #000; clip-path: circle(30%);');
  document.body.appendChild(sv);
  sv.innerHTML = `<svg viewBox="0 0 220 220">${balls}</svg>`;
  sv.onclick = killthis;
  await delay(5009);
//   killthis();
}
celebrate();


//3rd alternate. Big Bang
var rando = (n) => Math.round(Math.random() * n);
var delay = (ms) => new Promise(res => setTimeout(res, ms));
var ele = (t) => document.createElement(t);
var attr = (o, k, v) => o.setAttribute(k, v);
var tn = (o, s) => o ? o.getElementsByTagName(s) : console.log(o);
var cn = (o, s) => o ? o.getElementsByClassName(s) : console.log(o);
var gi = (o, s) => o ? o.getElementById(s) : console.log(o);

function randomBalls() {
  var colors = ["#e3f8ff","#e3f0ff","#d4f4ff","#d6e9ff","#d6f5ff","#cfe4ff","#ccf0fc","#c4f0ff","#c2ddff","#baedff","#b5d6ff","#b0ebff","#a6e8ff","#91e3ff","#195db0","#4599ff","#4564ff","#6982ff","#879bff","#bac6ff","#c5cefc","#e6eaff","#c8c4ff","#e5e3ff",'#ff1a0a','#ff430a','#ff6a00','#ffa463','#ffceab','#ffe0ab','#ffc157','#ffa50a','#ffc60a','#ffd64f','#ffe17d','#fff1c4','#fff1c4','#ffd036','#ffc300','#ffc300','#fff694','#ffee36','#fff836','#fffdd1','#d1ffff','#42ffff','#42ffff','#e0ffff','#e0f9ff','#12d1ff','#12d1ff','#d4f6ff','#d4ecff','#57b3ff','#0f93ff','#0f93ff','#0f67ff','#f2ebff','#733dd9','#5800ff','#5800ff','#b187ff','#c978ff','#c978ff','#fdedff','#ffedff','#ff00ff','#ff00c8','#ffe6fa','#ff009d','#ff0044','#ffc7d6','#ff002f','#ffdbe2','#ff2638'];
  var circles = ``;
  for (var i = 0; i < 400; i++) {
    var startPos = 110;
    var startRad = rando(6) / 10;
    var endRad = rando(10) / 10;
    var x = rando(180);
    var y = rando(180);
    var altColor = colors[rando((colors.length-1))];
    var color = colors[rando((colors.length-1))];
    var time = ((rando(50)+2) / 10);
    circles += `<circle class="bubbles" cx="${x > 120 && y >120 ? x-30 : x}" cy="${x > 120 && y >120 ? y-20 : y}" r="${startRad}" fill="${altColor}">
    <animate attributeName="fill" values="${color}; ${altColor}; ${altColor};" begin="0s" dur="${time}s" repeatCount="indefinite" />
    <animate attributeName="cy" values="${startPos}; ${y};" begin="0s" dur="${time}s" repeatCount="0" />
    <animate attributeName="r" values="${startRad}; ${endRad}; ${endRad-(endRad/10)}; ${startRad};" begin="0s" dur="${time}s" repeatCount="indefinite" />
    <animate attributeName="cx" values="${startPos}; ${x};" begin="0s" dur="${time}s" repeatCount="0" />
  </circle>`;
  }
  return circles;
}

async function killthis(){
  gi(document,'celebrationParent').style.transform = 'scale(0.01, 0.01)';
  gi(document,'celebrationParent').style.transition = 'all 500ms';
  await delay(499);
  gi(document,'celebrationParent').outerHTML = '';
celebrate()
}

async function celebrate() {
  if(gi(document,'celebrationParent')) gi(document,'celebrationParent').outerHTML = '';
  var balls = randomBalls();
  var sv = ele('div');
  attr(sv,'id','celebrationParent');
  attr(sv,'style','position: fixed; z-index: 21111; top: 20%; left: 20%; width: 800px; height: 800px; background: #000; clip-path: circle(30%);');
  document.body.appendChild(sv);
  sv.innerHTML = `<svg viewBox="0 0 220 220">${balls}</svg>`;
  sv.onclick = killthis;
  await delay(5009);
//   killthis();
}
celebrate();
