var reg = (elm, n) => elm != null ? elm[n] : '';
var cn = (ob, nm) => ob.getElementsByClassName(nm);
var tn = (ob, nm) => ob.getElementsByTagName(nm);
var gi = (ob, nm) => ob.getElementById(nm);
var delay = (ms) => new Promise(res => setTimeout(res, ms));
var rando = (n) => Math.round(Math.random()+n);

async function getDoc(s) {
  var r = await fetch(s);
  var t = await r.text();
  var d = new DOMparser();
  
}  

