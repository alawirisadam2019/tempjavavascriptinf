var tutorial = function(e) {
var t = {};
function n(r) {
if (t[r]) return t[r].exports;
var i = t[r] = {
i: r,
l: !1,
exports: {}
};
return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
}
return n.m = e, n.c = t, n.d = function(e, t, r) {
n.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: r
});
}, n.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}, n.t = function(e, t) {
if (1 & t && (e = n(e)), 8 & t) return e;
if (4 & t && "object" == typeof e && e && e.__esModule) return e;
var r = Object.create(null);
if (n.r(r), Object.defineProperty(r, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function(t) {
return e[t];
}.bind(null, i));
return r;
}, n.n = function(e) {
var t = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
};
return n.d(t, "a", t), t;
}, n.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, n.p = "/pack/", n(n.s = 166);
}({
0: function(e, t) {
e.exports = {
lang: "ar",
currency: {
code: "USD",
sign: "$"
},
env: "production",
ordersMail: "orders@javascript.info",
providers: [ {
name: "Facebook",
id: "facebook"
}, {
name: "Google+",
id: "google"
}, {
name: "Github",
id: "github"
} ],
stripeKey: "pk_live_51HXm0nFjeNqw1p5a3mjFxSeNHh8OL94IyGcp3PHbZVoNuYUYjlM57YtZMIAM1zrEd1F6WIKfFs67KbTemRdNIySo00KfWS1yhr",
lookatCodeUrlBase: "https://lookatcode.com"
};
},
1: function(e, t) {
function n(e, t, n, r, i) {
e.addEventListener(n, function(e) {
let n = function(e, t) {
let n = e.target;
for (;n; ) {
if (n.matches(t)) return n;
if (n == e.currentTarget) break;
n = n.parentElement;
}
return null;
}(e, t);
e.delegateTarget = n, n && r.call(i || this, e);
});
}
n.delegateMixin = function(e) {
e.delegate = function(e, t, r) {
n(this.elem, e, t, r, this);
};
}, e.exports = n;
},
10: function(e, t, n) {
"use strict";
var r = {};
function i(e) {
var t;
return r[e] ? e : (t = e.toLowerCase().replace("_", "-"), r[t] ? t : (t = t.split("-")[0], 
r[t] ? t : null));
}
function a(e, t) {
var n = i(e);
if (!n) return -1;
if (!r[n].cFn) return 0;
var a = String(t), s = a.indexOf(".") < 0 ? "" : a.split(".")[1], o = s.length, l = +t, c = +a.split(".")[0], u = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return r[n].cFn(l, c, o, +s, u);
}
function s(e, t) {
var n = i(e);
if (!n) return -1;
if (!r[n].oFn) return 0;
var a = String(t), s = a.indexOf(".") < 0 ? "" : a.split(".")[1], o = s.length, l = +t, c = +a.split(".")[0], u = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return r[n].oFn(l, c, o, +s, u);
}
e.exports = function(e, t) {
var n = i(e);
return n ? r[n].c[a(n, t)] : null;
}, e.exports.indexOf = a, e.exports.forms = function(e) {
var t = i(e);
return r[t] ? r[t].c : null;
}, e.exports.ordinal = function(e, t) {
var n = i(e);
return r[n] ? r[n].o[s(n, t)] : null;
}, e.exports.ordinal.indexOf = s, e.exports.ordinal.forms = function(e) {
var t = i(e);
return r[t] ? r[t].o : null;
};
var o = [ "zero", "one", "two", "few", "many", "other" ];
function l(e) {
return o[e];
}
function c(e, t) {
var n;
for (t.c = t.c ? t.c.map(l) : [ "other" ], t.o = t.o ? t.o.map(l) : [ "other" ], 
n = 0; n < e.length; n++) r[e[n]] = t;
}
function u(e, t, n) {
return e <= n && n <= t && n % 1 == 0;
}
function d(e, t) {
return e.indexOf(t) >= 0;
}
c([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 1, e) ? 0 : 1;
}
}), c([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
}
}), c([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : u(3, 10, t) ? 3 : u(11, 99, t) ? 4 : 5;
}
}), c([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return d([ 1, 5, 7, 8, 9, 10 ], e) ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), c([ "az" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100, i = t % 1e3;
return d([ 1, 2, 5, 7, 8 ], n) || d([ 20, 50, 70, 80 ], r) ? 0 : d([ 3, 4 ], n) || d([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], i) ? 1 : 0 === t || 6 === n || d([ 40, 60, 90 ], r) ? 2 : 3;
}
}), c([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : u(2, 4, t) && !u(12, 14, n) ? 1 : 0 === t || u(5, 9, t) || u(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
var t = e % 100;
return d([ 2, 3 ], e % 10) && !d([ 12, 13 ], t) ? 0 : 1;
}
}), c([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
c([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100, r = e % 1e6;
return 1 !== t || d([ 11, 71, 91 ], n) ? 2 !== t || d([ 12, 72, 92 ], n) ? !u(3, 4, t) && 9 !== t || u(10, 19, n) || u(70, 79, n) || u(90, 99, n) ? 0 !== e && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), c([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, a = t % 100, s = r % 10, o = r % 100;
return 0 === n && 1 === i && 11 !== a || 1 === s && 11 !== o ? 0 : 0 === n && u(2, 4, i) && !u(12, 14, a) || u(2, 4, s) && !u(12, 14, o) ? 1 : 2;
}
}), c([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return d([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), c([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : u(2, 4, t) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), c([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 === e ? 3 : 6 === e ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(e) {
return d([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : d([ 3, 4 ], e) ? 3 : d([ 5, 6 ], e) ? 4 : 5;
}
}), c([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 1 === e || 0 !== i && d([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 100, a = r % 100;
return 0 === n && 1 === i || 1 === a ? 0 : 0 === n && 2 === i || 2 === a ? 1 : 0 === n && u(3, 4, i) || u(3, 4, a) ? 2 : 3;
}
}), c([ "en" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : 2 === t && 12 !== n ? 1 : 3 === t && 13 !== n ? 2 : 3;
}
}), c([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return d([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, a = r % 10;
return 0 === n && d([ 1, 2, 3 ], t) || 0 === n && !d([ 4, 6, 9 ], i) || 0 !== n && !d([ 4, 6, 9 ], a) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return d([ 0, 1 ], t) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : u(3, 6, e) ? 2 : u(7, 10, e) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e) {
return d([ 1, 11 ], e) ? 0 : d([ 2, 12 ], e) ? 1 : u(3, 10, e) || u(13, 19, e) ? 2 : 3;
}
}), c([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && d([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), c([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, n) {
var r = e % 10;
return 1 === t && 0 === n ? 0 : 2 === t && 0 === n ? 1 : 0 !== n || u(0, 10, e) || 0 !== r ? 3 : 2;
}
}), c([ "hu" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return d([ 1, 5 ], e) ? 0 : 1;
}
}), c([ "is" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 0 === i && 1 === t % 10 && 11 !== t % 100 || 0 !== i ? 0 : 1;
}
}), c([ "it" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return d([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), c([ "iu", "kw", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : 2;
}
}), c([ "ka" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e, t) {
var n = t % 100;
return 1 === t ? 0 : 0 === t || u(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), c([ "kk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
var t = e % 10;
return 6 === t || 9 === t || 0 === t && 0 !== e ? 0 : 1;
}
}), c([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2;
}
}), c([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t) {
return 0 === e ? 0 : d([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), c([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, a = e % 100;
return 1 !== i || u(11, 19, a) ? u(2, 9, i) && !u(11, 19, a) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), c([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, a = e % 100, s = r % 100, o = r % 10;
return 0 === i || u(11, 19, a) || 2 === n && u(11, 19, s) ? 0 : 1 === i && 11 !== a || 2 === n && 1 === o && 11 !== s || 2 !== n && 1 === o ? 1 : 2;
}
}), c([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return 0 === n && 1 === t % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : d([ 7, 8 ], n) && !d([ 17, 18 ], r) ? 2 : 3;
}
}), c([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 0 !== n || 0 === e || 1 !== e && u(1, 19, e % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "mr" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return 1 === e ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 3;
}
}), c([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 1 === e ? 0 : 0 === e || u(2, 10, t) ? 1 : u(11, 19, t) ? 2 : 3;
}
}), c([ "ne" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return u(1, 4, e) ? 0 : 1;
}
}), c([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 1 === t && 0 === n ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 1 !== t && u(0, 1, r) || 0 === n && u(5, 9, r) || 0 === n && u(12, 14, i) ? 2 : 3;
}
}), c([ "pt" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 2, e) && 2 !== e ? 0 : 1;
}
}), c([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === e && 0 === n ? 0 : 1;
}
}), c([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, i) ? 2 : 3;
}
}), c([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : u(2, 10, e) ? 1 : 2;
}
}), c([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return d([ 0, 1 ], e) || 0 === t && 1 === r ? 0 : 1;
}
}), c([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n) {
var r = t % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && u(3, 4, r) || 0 !== n ? 2 : 3;
}
}), c([ "sq" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 4 === e % 10 && 14 !== e % 100 ? 1 : 2;
}
}), c([ "sv" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
var t = e % 100;
return d([ 1, 2 ], e % 10) && !d([ 11, 12 ], t) ? 0 : 1;
}
}), c([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 1, e) || u(11, 99, e) ? 0 : 1;
}
}), c([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, i) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
},
166: function(e, t, n) {
n(167), e.exports = n(169);
},
167: function(module, exports, __webpack_require__) {
const delegate = __webpack_require__(1), prism = __webpack_require__(68), ItemSlider = __webpack_require__(168);
function init() {
initTaskButtons(), initFolderList(), initViewMoreButton(), initCoursesSlider(), 
prism.init();
}
function initTaskButtons() {
delegate(document, ".task__solution", "click", function(e) {
e.target.closest(".task").classList.toggle("task_answer_open");
}), delegate(document, ".task__answer-close", "click", function(e) {
e.target.closest(".task").classList.toggle("task_answer_open");
}), delegate(document, ".task__step-show", "click", function(e) {
e.target.closest(".task__step").classList.toggle("task_step_open");
});
}
function initViewMoreButton() {
delegate(document, "a.list-sub__more", "click", function(e) {
e.preventDefault();
const t = e.target;
for (let e of t.closest(".list-sub").querySelectorAll(".list-sub__item_phone_hidden")) e.classList.remove("list-sub__item_phone_hidden");
t.style.display = "none";
});
}
function initFolderList() {
delegate(document, ".lessons-list__lesson_level_1 > .lessons-list__link", "click", function(e) {
let t = e.delegateTarget, n = t.closest(".lessons-list").querySelector(".lessons-list__lesson_open");
n && n !== t.parentNode && n.classList.remove("lessons-list__lesson_open"), t.parentNode.classList.toggle("lessons-list__lesson_open"), 
e.preventDefault();
});
}
function initCoursesSlider() {
const e = document.querySelector("[data-courses-slider]");
e && new ItemSlider({
el: e,
class: "slider_frontpage"
});
}
window.runDemo = function(button) {
let demoElem, parent = button;
for (;(parent = parent.parentElement) && (demoElem = parent.querySelector("[data-demo]"), 
!demoElem); ) ;
demoElem ? eval(demoElem.textContent) : alert("Error, no demo element");
}, init();
},
168: function(e, t, n) {
let r = n(44);
e.exports = class {
constructor(e) {
this.slider = e.el, this.list = this.slider.querySelector("ul"), e.class && (this.classList = e.class.split(" ")), 
this.disabled = !1, this.init(), this.bindHandlers();
}
init() {
this.classList && this.classList.length && this.slider.classList.add(...this.classList), 
this.slider.classList.add("slider_disable-left");
const e = document.createElement("div");
e.classList.add("slider__container"), e.appendChild(this.list), this.slider.innerHTML = '<button class="slider__arrow slider__arrow_left"></button><button class="slider__arrow slider__arrow_right"></button>', 
this.slider.appendChild(e), this.innerWidth = this.countInnerWidth(), this.arrowLeft = this.slider.querySelector(".slider__arrow_left"), 
this.arrowRight = this.slider.querySelector(".slider__arrow_right");
}
countInnerWidth() {
return [ ...this.list.querySelectorAll("li") ].reduce((e, t) => {
const n = window.getComputedStyle(t);
return e + (t.offsetWidth + parseFloat(n.marginLeft) + parseFloat(n.marginRight));
}, 0);
}
bindHandlers() {
this.transformX = 0, this.arrowLeft.addEventListener("click", () => {
this.transformX -= this.list.clientWidth, this.transformX < 0 && (this.transformX = 0), 
this.render();
}), this.arrowRight.addEventListener("click", () => {
this.transformX = Math.min(this.transformX + this.list.clientWidth, this.list.scrollWidth - this.list.clientWidth), 
this.render();
}), window.addEventListener("resize", r(() => {
this.onResize();
}, 200)), this.onResize();
}
onResize() {
!this.disabled && this.innerWidth <= this.list.offsetWidth ? (this.slider.classList.add("slider_disabled"), 
this.disabled = !0, this.transformX > 0 && (this.transformX = 0, this.slider.classList.contains("slider_disable-right") && this.slider.classList.remove("slider_disable-right"), 
this.render())) : this.disabled && this.innerWidth > this.list.offsetWidth && (this.slider.classList.remove("slider_disabled"), 
this.slider.classList.contains("slider_disable-right") && this.slider.classList.remove("slider_disable-right"), 
this.disabled = !1);
}
render() {
this.list.style.transform = this.transformX > 0 ? "translateX(".concat(-this.transformX, "px)") : "translateX(0)", 
0 === this.transformX ? this.slider.classList.add("slider_disable-left") : this.slider.classList.remove("slider_disable-left"), 
this.transformX == this.list.scrollWidth - this.list.clientWidth ? this.slider.classList.add("slider_disable-right") : this.slider.classList.remove("slider_disable-right");
}
};
},
169: function(e, t, n) {
let r = n(170), i = n(64), a = n(1);
function s() {
/[&?]map\b/.test(location.href) || window.history.replaceState(null, null, ~location.href.indexOf("?") ? location.href + "&map" : location.href + "?map"), 
new r().elem.addEventListener("tutorial-map-remove", () => {
window.history.replaceState(null, null, location.href.replace(/[&?]map\b/, ""));
});
}
!function() {
a(document, '[data-action="tutorial-map"]', "click", e => {
1 === e.which && (e.preventDefault(), s());
});
let e = document.querySelector(".tutorial-map");
e ? new i(e) : /[&?]map\b/.test(location.href) && s();
}();
},
17: function(e, t) {
e.exports = function(e) {
var t = typeof e;
return null != e && ("object" == t || "function" == t);
};
},
170: function(e, t, n) {
let r = n(23), i = n(1), a = n(5), s = n(64), o = n(40);
class l {
constructor() {
this.elem = document.createElement("div"), document.body.appendChild(this.elem);
let e = new Modal({
hasClose: !1
}), t = new a();
e.setContent(t.elem), t.start(), this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
let n = r({
url: "/tutorial/map"
});
n.addEventListener("success", t => {
e.remove(), this.elem.innerHTML = '<div class="tutorial-map-overlay"></div>', this.mapElem = this.elem.firstChild, 
this.mapElem.innerHTML = t.result + '<button class="close-button tutorial-map-overlay__close"></button>', 
this.mapElem.addEventListener("click", e => {
e.target.classList.contains("tutorial-map-overlay__close") && this.remove();
}), document.addEventListener("keydown", this.onDocumentKeyDown), document.body.classList.add("tutorial-map_on"), 
this.mapElem.addEventListener("scroll", o, {
passive: !0
}), new s(this.mapElem.firstElementChild);
}), n.addEventListener("fail", () => e.remove());
}
remove() {
this.elem.dispatchEvent(new CustomEvent("tutorial-map-remove")), this.elem.remove(), 
document.body.classList.remove("tutorial-map_on"), document.removeEventListener("keydown", this.onDocumentKeyDown);
}
onDocumentKeyDown(e) {
27 == e.keyCode && (e.preventDefault(), this.remove());
}
}
i.delegateMixin(l.prototype), e.exports = l;
},
18: function(e, t, n) {
let r = n(19), i = n(22), a = [];
t.iframe = function(e) {
r.async(e, function(t, n) {
n && (e.style.height = n + "px");
});
}, t.codeTabs = function(e) {
function t() {
let t = e.closest(".code-tabs"), n = (e.closest("[data-code-tabs-content]"), t.querySelector("[data-code-tabs-switches]"));
n.firstElementChild.offsetWidth > n.offsetWidth ? t.classList.add("code-tabs_scroll") : t.classList.remove("code-tabs_scroll");
}
t(), a.push(t);
}, window.addEventListener("resize", i(function() {
a.forEach(function(e) {
e();
});
}, 200));
},
19: function(e, t, n) {
let r = n(20);
function i(e, t) {
let n = setTimeout(function() {
t(new Error("timeout"));
}, 500);
function i(e, r) {
clearTimeout(n), t(e, r);
}
try {
(e.contentDocument || e.contentWindow.document).body;
} catch (e) {
!function(e, t) {
throw new Error("Not implemented yet");
}();
}
if (!e.offsetWidth) {
let t = e.cloneNode(!0);
return t.name = "", t.style.height = "50px", t.style.position = "absolute", t.style.display = "block", 
t.style.top = "10000px", t.onload = function() {
let n = r(this.contentDocument);
e.style.display = "block", t.remove(), i(null, n);
}, void document.body.appendChild(t);
}
e.style.display = "block", e.style.height = "1px";
let a = r(e.contentDocument);
e.style.height = "", i(null, a);
}
i.async = function(e, t) {
setTimeout(function() {
i(e, t);
}, 0);
}, e.exports = i;
},
20: function(e, t, n) {
let r, i = n(21);
e.exports = function(e) {
e = e || document;
let t = Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight);
return e.documentElement.scrollWidth > e.documentElement.clientWidth && (r || (r = i()), 
t += r), t;
};
},
21: function(e, t) {
e.exports = function() {
let e = document.createElement("div");
if (e.style.cssText = "visibility:hidden;height:100px", !document.body) throw new Error("getScrollbarHeight called to early: no document.body");
document.body.appendChild(e);
let t = e.offsetWidth;
e.style.overflow = "scroll";
let n = document.createElement("div");
n.style.width = "100%", e.appendChild(n);
let r = n.offsetWidth;
return e.parentNode.removeChild(e), t - r;
};
},
22: function(e, t) {
e.exports = function(e, t) {
let n, r, i = !1;
return function a() {
if (i) return n = arguments, void (r = this);
e.apply(this, arguments), i = !0, setTimeout(function() {
i = !1, n && (a.apply(r, n), n = r = null);
}, t);
};
};
},
23: function(e, t, n) {
let r = n(4), i = n(24);
const a = n(0).lang, s = n(3);
s.i18n.add("", n(25)("./" + a + ".yml")), s.i18n.add("error.network", n(27)("./" + a + ".yml")), 
document.addEventListener("xhrfail", function(e) {
new r.Error(e.reason);
}), e.exports = function(e) {
let t = new XMLHttpRequest(), n = e.method || "GET", r = e.body, a = e.url;
t.open(n, a, !e.sync), t.method = n;
let o = i();
o && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", o), e.responseType && (t.responseType = e.responseType), 
"[object Object]" == {}.toString.call(r) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), e.noDocumentEvents || (t.addEventListener("loadstart", e => {
t.timeStart = Date.now();
let n = c("xhrstart", e);
document.dispatchEvent(n);
}), t.addEventListener("loadend", e => {
let t = c("xhrend", e);
document.dispatchEvent(t);
}), t.addEventListener("success", e => {
let t = c("xhrsuccess", e);
t.result = e.result, document.dispatchEvent(t);
}), t.addEventListener("fail", e => {
let t = c("xhrfail", e);
t.reason = e.reason, document.dispatchEvent(t);
})), e.raw || t.setRequestHeader("Accept", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let l = e.normalStatuses || [ 200 ];
function c(e, t) {
let n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function u(e, n) {
let r = c("fail", n);
r.reason = e, t.dispatchEvent(r);
}
return t.addEventListener("error", e => {
u(s("error.network.server_connection_error"), e);
}), t.addEventListener("timeout", e => {
u(s("error.network.server_request_timeout"), e);
}), t.addEventListener("abort", e => {
u(s("error.network.request_aborted"), e);
}), t.addEventListener("load", n => {
if (!t.status) return void u(s("error.network.no_response"), n);
if (!l.includes(t.status)) return void u(s("error.network.server_error", {
status: t.status
}), n);
let r = e.responseType && "text" !== e.responseType ? t.response : t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
r = JSON.parse(r);
} catch (n) {
return void u(s("error.network.invalid_format"), n);
}
!function(e, n) {
let r = c("success", n);
r.result = e, t.dispatchEvent(r);
}(r, n);
}), setTimeout(function() {
t.send(r);
}, 0), t;
};
},
24: function(e, t) {
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
25: function(e, t, n) {
var r = {
"./ar.yml": 26
};
function i(e) {
var t = a(e);
return n(t);
}
function a(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = a, e.exports = i, i.id = 25;
},
26: function(e, t) {
e.exports = {
site: {
privacy_policy: "?????????? ????????????????",
terms: "???????? ??????????????????",
gdpr_dialog: {
title: "?????? ???????????? ???????????? ??????????????",
text: '?????? ???????????? ?????? ?????????????? ???? ?????????????? ?????? ?????????????? ???????????????? ?????????? ???????????? ????????????????. ?????? ???? ???????? <a href="/privacy">?????????? ????????????????</a> ?? <a href="/terms">???????? ??????????????????</a> ???????????? ???? ??????.',
accept: "????????",
cancel: "??????????"
},
toolbar: {
lang_switcher: {
cta_text: '???????? ???? ???????? ?????? ?????????????? ?????????????? ???????????? ?????? ???? ?????????? ?????? ????????????. ???? ???????? <a href="https://github.com/javascript-tutorial/en.javascript.info" rel="noopener noreferrer" target="_blank">???????????? ?????? ??????????</a> ?????????? ?????? ?????????????? ???????? ???????? ????????????.',
footer_text: "???? ?????????????? ???????? ?????????? ?????? ????????",
old_version: "???? ?????? ?????????????? ?????????????? ???????????? ?????? ????????????."
},
logo: {
normal: {
svg: "sitetoolbar__logo_en.svg",
width: 200
},
"normal-white": {
svg: "sitetoolbar__logo_en-white.svg"
},
small: {
svg: "sitetoolbar__logo_small_en.svg",
width: 70
},
"small-white": {
svg: "sitetoolbar__logo_small_en-white.svg"
}
},
sections: [ {
slug: "",
url: "/",
title: "??????????"
}, {
slug: "????????????",
title: "????????????"
} ],
buy_ebook_extra: "????????",
buy_ebook: "EPUB/PDF",
search_placeholder: "???????? ???? Javascript.info",
search_button: "??????",
public_profile: "???????????? ??????????????",
account: "????????????",
notifications: "??????????????????",
admin: "????????",
logout: "?????????? ????????????"
},
sorry_old_browser: "???????????? ???? ?????????? ?????? ???? IE10 ?????? ??????????",
contact_us: "?????????? ????????",
about_the_project: "?????????????? ???? ??????????????",
ilya_kantor: "Ilya Kantor",
comments: "??????????????????",
loading: "??????????...",
search: "??????",
share: "????????????",
read_before_commenting: "???????? ?????? ?????? ???? ?????? ?????????????????",
last_updated_at: "?????? ?????????? #{date}",
meta: {
description: "?????????? ?????????? ???????? ????????????????????????: ?????????? ???????? ?????????????? ???? ?????????? ???????????? ???????????? ?????? ?????????????? ??????: closures ?? document ?? events ?? ?????????????? ???????????????? OOP ??????????."
},
"tablet-menu": {
choose_section: "???????? ??????????",
search_placeholder: "?????????? ???? ??????????????",
search_button: "??????"
},
comment: {
help: [ '?????? ?????? ???????? ???????????????? ???? ???????? ?????????????? - ???? ???????? <a href="https://github.com/javascript-tutorial/en.javascript.info/issues/new">???? ???????? ???????? ?????????????? ???? ????????????</a> ???? ???????? ?????????? ?????????? ???? ??????????????????.', "?????? ???? ?????????? ???? ???????? ?????????? ???? ???????????? - ???????? ????????.", "?????? ?????? ???????? ?????? ?????? ???????????? ???????? <code>&lt;code&gt;</code> ?? ?????????????? ???? ???????????? ???????????? <code>&lt;pre&gt;</code>?? ???????????? ???? 10 ???????? ????????????  (<a href='https://plnkr.co/edit/?p=preview'>plnkr</a>, <a href='http://jsbin.com'>JSBin</a>, <a href='http://codepen.io'>codepen</a>???)" ]
},
edit_on_github: "?????????? ???? ????????????",
error: "??????",
close: "??????????",
hide_forever: "?????????? ?????? ??????????",
hidden_forever: "?????? ???????????????? ???? ???????? ?????? ????????.",
subscribe: {
title: "???????? ?????????????? javascript.info",
text: "?????? ???? ???????? ?????????????? ???????? ???????????? ???????????? ???????????????? ??????. ?????? ?????????? ???????????? ???????????? ????:",
agreement: '?????????????????? ???? ???????? ?????????????? ???????? ?????????? ?????? <a href="#{link}" target="_blank">???????? ??????????????????</a>.',
button: "????????",
button_unsubscribe: "?????????? ???????????????? ???? ???? ??????????????",
common_updates: "?????????????????? ????????????",
common_updates_text: "???????????? ?????????? ???? ?????????? ???? ???????? ????????",
your_email: "your@email.here",
newsletters: "???????? ??????????,?????????? ??????????,?????????? ??????????",
no_selected: "???? ???? ???? ????????????"
},
form: {
value_must_not_be_empty: "???? ???????? ???? ???????? ???????????? ??????????.",
value_is_too_long: "???????????? ?????????? ????????.",
value_is_too_short: "???????????? ?????????? ????????.",
invalid_email: "???????? ?????? ????????.",
invalid_value: "???????? ?????? ??????????.",
invalid_autocomplete: "???? ???????? ???????? ???? ??????????????",
invalid_date: "?????????? ?????? ????????, ??????????: dd.mm.yyyyy.",
invalid_range: "?????? ?????????????? ?????? ???????????? ??????.",
save: "??????",
upload_file: "?????? ??????",
cancel: "??????????",
server_error: "?????? ???? ???????????? ?????? ????????"
}
}
};
},
27: function(e, t, n) {
var r = {
"./ar.yml": 28
};
function i(e) {
var t = a(e);
return n(t);
}
function a(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = a, e.exports = i, i.id = 27;
},
279: function(e, t) {
var n = function(e) {
var t = /\blang(?:uage)?-([\w-]+)\b/i, n = 0, r = {
manual: e.Prism && e.Prism.manual,
disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
util: {
encode: function(e) {
return e instanceof i ? new i(e.type, r.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(r.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
},
type: function(e) {
return Object.prototype.toString.call(e).slice(8, -1);
},
objId: function(e) {
return e.__id || Object.defineProperty(e, "__id", {
value: ++n
}), e.__id;
},
clone: function e(t, n) {
var i, a, s = r.util.type(t);
switch (n = n || {}, s) {
case "Object":
if (a = r.util.objId(t), n[a]) return n[a];
for (var o in i = {}, n[a] = i, t) t.hasOwnProperty(o) && (i[o] = e(t[o], n));
return i;

case "Array":
return a = r.util.objId(t), n[a] ? n[a] : (i = [], n[a] = i, t.forEach(function(t, r) {
i[r] = e(t, n);
}), i);

default:
return t;
}
}
},
languages: {
extend: function(e, t) {
var n = r.util.clone(r.languages[e]);
for (var i in t) n[i] = t[i];
return n;
},
insertBefore: function(e, t, n, i) {
var a = (i = i || r.languages)[e], s = {};
for (var o in a) if (a.hasOwnProperty(o)) {
if (o == t) for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
n.hasOwnProperty(o) || (s[o] = a[o]);
}
var c = i[e];
return i[e] = s, r.languages.DFS(r.languages, function(t, n) {
n === c && t != e && (this[t] = s);
}), s;
},
DFS: function e(t, n, i, a) {
a = a || {};
var s = r.util.objId;
for (var o in t) if (t.hasOwnProperty(o)) {
n.call(t, o, t[o], i || o);
var l = t[o], c = r.util.type(l);
"Object" !== c || a[s(l)] ? "Array" !== c || a[s(l)] || (a[s(l)] = !0, e(l, n, o, a)) : (a[s(l)] = !0, 
e(l, n, null, a));
}
}
},
plugins: {},
highlightAll: function(e, t) {
r.highlightAllUnder(document, e, t);
},
highlightAllUnder: function(e, t, n) {
var i = {
callback: n,
selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
};
r.hooks.run("before-highlightall", i);
for (var a, s = i.elements || e.querySelectorAll(i.selector), o = 0; a = s[o++]; ) r.highlightElement(a, !0 === t, i.callback);
},
highlightElement: function(n, i, a) {
for (var s, o, l = n; l && !t.test(l.className); ) l = l.parentNode;
l && (s = (l.className.match(t) || [ , "" ])[1].toLowerCase(), o = r.languages[s]), 
n.className = n.className.replace(t, "").replace(/\s+/g, " ") + " language-" + s, 
n.parentNode && (l = n.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(t, "").replace(/\s+/g, " ") + " language-" + s));
var c = {
element: n,
language: s,
grammar: o,
code: n.textContent
}, u = function(e) {
c.highlightedCode = e, r.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, 
r.hooks.run("after-highlight", c), r.hooks.run("complete", c), a && a.call(c.element);
};
if (r.hooks.run("before-sanity-check", c), c.code) if (r.hooks.run("before-highlight", c), 
c.grammar) if (i && e.Worker) {
var d = new Worker(r.filename);
d.onmessage = function(e) {
u(e.data);
}, d.postMessage(JSON.stringify({
language: c.language,
code: c.code,
immediateClose: !0
}));
} else u(r.highlight(c.code, c.grammar, c.language)); else u(r.util.encode(c.code)); else r.hooks.run("complete", c);
},
highlight: function(e, t, n) {
var a = {
code: e,
grammar: t,
language: n
};
return r.hooks.run("before-tokenize", a), a.tokens = r.tokenize(a.code, a.grammar), 
r.hooks.run("after-tokenize", a), i.stringify(r.util.encode(a.tokens), a.language);
},
matchGrammar: function(e, t, n, a, s, o, l) {
for (var c in n) if (n.hasOwnProperty(c) && n[c]) {
if (c == l) return;
var u = n[c];
u = "Array" === r.util.type(u) ? u : [ u ];
for (var d = 0; d < u.length; ++d) {
var p = u[d], h = p.inside, f = !!p.lookbehind, g = !!p.greedy, m = 0, b = p.alias;
if (g && !p.pattern.global) {
var y = p.pattern.toString().match(/[imuy]*$/)[0];
p.pattern = RegExp(p.pattern.source, y + "g");
}
p = p.pattern || p;
for (var v = a, w = s; v < t.length; w += t[v].length, ++v) {
var E = t[v];
if (t.length > e.length) return;
if (!(E instanceof i)) {
if (g && v != t.length - 1) {
if (p.lastIndex = w, !(x = p.exec(e))) break;
for (var _ = x.index + (f ? x[1].length : 0), k = x.index + x[0].length, A = v, F = w, T = t.length; A < T && (F < k || !t[A].type && !t[A - 1].greedy); ++A) _ >= (F += t[A].length) && (++v, 
w = F);
if (t[v] instanceof i) continue;
S = A - v, E = e.slice(w, F), x.index -= w;
} else {
p.lastIndex = 0;
var x = p.exec(E), S = 1;
}
if (x) {
f && (m = x[1] ? x[1].length : 0);
k = (_ = x.index + m) + (x = x[0].slice(m)).length;
var L = E.slice(0, _), O = E.slice(k), C = [ v, S ];
L && (++v, w += L.length, C.push(L));
var N = new i(c, h ? r.tokenize(x, h) : x, b, x, g);
if (C.push(N), O && C.push(O), Array.prototype.splice.apply(t, C), 1 != S && r.matchGrammar(e, t, n, v, w, !0, c), 
o) break;
} else if (o) break;
}
}
}
}
},
tokenize: function(e, t) {
var n = [ e ], i = t.rest;
if (i) {
for (var a in i) t[a] = i[a];
delete t.rest;
}
return r.matchGrammar(e, n, t, 0, 0, !1), n;
},
hooks: {
all: {},
add: function(e, t) {
var n = r.hooks.all;
n[e] = n[e] || [], n[e].push(t);
},
run: function(e, t) {
var n = r.hooks.all[e];
if (n && n.length) for (var i, a = 0; i = n[a++]; ) i(t);
}
},
Token: i
};
function i(e, t, n, r, i) {
this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length, 
this.greedy = !!i;
}
if (e.Prism = r, i.stringify = function(e, t, n) {
if ("string" == typeof e) return e;
if (Array.isArray(e)) return e.map(function(n) {
return i.stringify(n, t, e);
}).join("");
var a = {
type: e.type,
content: i.stringify(e.content, t, n),
tag: "span",
classes: [ "token", e.type ],
attributes: {},
language: t,
parent: n
};
if (e.alias) {
var s = Array.isArray(e.alias) ? e.alias : [ e.alias ];
Array.prototype.push.apply(a.classes, s);
}
r.hooks.run("wrap", a);
var o = Object.keys(a.attributes).map(function(e) {
return e + '="' + (a.attributes[e] || "").replace(/"/g, "&quot;") + '"';
}).join(" ");
return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + a.content + "</" + a.tag + ">";
}, !e.document) return e.addEventListener ? (r.disableWorkerMessageHandler || e.addEventListener("message", function(t) {
var n = JSON.parse(t.data), i = n.language, a = n.code, s = n.immediateClose;
e.postMessage(r.highlight(a, r.languages[i], i)), s && e.close();
}, !1), r) : r;
var a = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
return a && (r.filename = a.src, r.manual || a.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(r.highlightAll) : window.setTimeout(r.highlightAll, 16) : document.addEventListener("DOMContentLoaded", r.highlightAll))), 
r;
}("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
void 0 !== e && e.exports && (e.exports = n), "undefined" != typeof global && (global.Prism = n), 
n.languages.markup = {
comment: /<!--[\s\S]*?-->/,
prolog: /<\?[\s\S]+?\?>/,
doctype: /<!DOCTYPE[\s\S]+?>/i,
cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
tag: {
pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
greedy: !0,
inside: {
tag: {
pattern: /^<\/?[^\s>\/]+/i,
inside: {
punctuation: /^<\/?/,
namespace: /^[^\s>\/:]+:/
}
},
"attr-value": {
pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
inside: {
punctuation: [ /^=/, {
pattern: /^(\s*)["']|["']$/,
lookbehind: !0
} ]
}
},
punctuation: /\/?>/,
"attr-name": {
pattern: /[^\s>\/]+/,
inside: {
namespace: /^[^\s>\/:]+:/
}
}
}
},
entity: /&#?[\da-z]{1,8};/i
}, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, 
n.hooks.add("wrap", function(e) {
"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(n.languages.markup.tag, "addInlined", {
value: function(e, t) {
var r = {};
r["language-" + t] = {
pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
lookbehind: !0,
inside: n.languages[t]
}, r.cdata = /^<!\[CDATA\[|\]\]>$/i;
var i = {
"included-cdata": {
pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
inside: r
}
};
i["language-" + t] = {
pattern: /[\s\S]+/,
inside: n.languages[t]
};
var a = {};
a[e] = {
pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, e), "i"),
lookbehind: !0,
greedy: !0,
inside: i
}, n.languages.insertBefore("markup", "cdata", a);
}
}), n.languages.xml = n.languages.extend("markup", {}), n.languages.html = n.languages.markup, 
n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, function(e) {
var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
e.languages.css = {
comment: /\/\*[\s\S]*?\*\//,
atrule: {
pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,
inside: {
rule: /@[\w-]+/
}
},
url: RegExp("url\\((?:" + t.source + "|.*?)\\)", "i"),
selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
string: {
pattern: t,
greedy: !0
},
property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
important: /!important\b/i,
function: /[-a-z0-9]+(?=\()/i,
punctuation: /[(){};:,]/
}, e.languages.css.atrule.inside.rest = e.languages.css;
var n = e.languages.markup;
n && (n.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
"style-attr": {
pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
inside: {
"attr-name": {
pattern: /^\s*style/i,
inside: n.tag.inside
},
punctuation: /^\s*=\s*['"]|['"]\s*$/,
"attr-value": {
pattern: /.+/i,
inside: e.languages.css
}
},
alias: "language-css"
}
}, n.tag));
}(n), n.languages.clike = {
comment: [ {
pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
lookbehind: !0
}, {
pattern: /(^|[^\\:])\/\/.*/,
lookbehind: !0,
greedy: !0
} ],
string: {
pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
"class-name": {
pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
lookbehind: !0,
inside: {
punctuation: /[.\\]/
}
},
keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
boolean: /\b(?:true|false)\b/,
function: /\w+(?=\()/,
number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
punctuation: /[{}[\];(),.:]/
}, n.languages.javascript = n.languages.extend("clike", {
"class-name": [ n.languages.clike["class-name"], {
pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
lookbehind: !0
} ],
keyword: [ {
pattern: /((?:^|})\s*)(?:catch|finally)\b/,
lookbehind: !0
}, {
pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
lookbehind: !0
} ],
number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, 
n.languages.insertBefore("javascript", "keyword", {
regex: {
pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
lookbehind: !0,
greedy: !0
},
"function-variable": {
pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
alias: "function"
},
parameter: [ {
pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
lookbehind: !0,
inside: n.languages.javascript
}, {
pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
inside: n.languages.javascript
}, {
pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
lookbehind: !0,
inside: n.languages.javascript
}, {
pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
lookbehind: !0,
inside: n.languages.javascript
} ],
constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), n.languages.insertBefore("javascript", "string", {
"template-string": {
pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
greedy: !0,
inside: {
interpolation: {
pattern: /\${[^}]+}/,
inside: {
"interpolation-punctuation": {
pattern: /^\${|}$/,
alias: "punctuation"
},
rest: n.languages.javascript
}
},
string: /[\s\S]+/
}
}
}), n.languages.markup && n.languages.markup.tag.addInlined("script", "javascript"), 
n.languages.js = n.languages.javascript, "undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function(e) {
e = e || document;
var t = {
js: "javascript",
py: "python",
rb: "ruby",
ps1: "powershell",
psm1: "powershell",
sh: "bash",
bat: "batch",
h: "c",
tex: "latex"
};
Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e) {
if (!e.hasAttribute("data-src-loaded")) {
for (var r, i = e.getAttribute("data-src"), a = e, s = /\blang(?:uage)?-([\w-]+)\b/i; a && !s.test(a.className); ) a = a.parentNode;
if (a && (r = (e.className.match(s) || [ , "" ])[1]), !r) {
var o = (i.match(/\.(\w+)$/) || [ , "" ])[1];
r = t[o] || o;
}
var l = document.createElement("code");
l.className = "language-" + r, e.textContent = "", l.textContent = "Loading???", e.appendChild(l);
var c = new XMLHttpRequest();
c.open("GET", i, !0), c.onreadystatechange = function() {
4 == c.readyState && (c.status < 400 && c.responseText ? (l.textContent = c.responseText, 
n.highlightElement(l), e.setAttribute("data-src-loaded", "")) : c.status >= 400 ? l.textContent = "??? Error " + c.status + " while fetching file: " + c.statusText : l.textContent = "??? Error: File does not exist or is empty");
}, c.send(null);
}
}), n.plugins.toolbar && n.plugins.toolbar.registerButton("download-file", function(e) {
var t = e.element.parentNode;
if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-src") && t.hasAttribute("data-download-link")) {
var n = t.getAttribute("data-src"), r = document.createElement("a");
return r.textContent = t.getAttribute("data-download-link-label") || "Download", 
r.setAttribute("download", ""), r.href = n, r;
}
});
}, document.addEventListener("DOMContentLoaded", function() {
self.Prism.fileHighlight();
}));
},
28: function(e, t) {
e.exports = {
server_connection_error: "?????? ???? ?????????????? ??????????????.",
server_request_timeout: "???????? ?????? ????????????.",
request_aborted: "???? ?????????? ??????????.",
no_response: "???? ???????? ?????????????? ???? ????????????.",
server_error: "?????? ?????????????? (code #{status}), ???????? ????????????.",
invalid_format: "???????? ?????????????? ?????? ??????????."
};
},
280: function(e, t) {
function n(e, t = 0) {
if (null == e) return "null";
if ("function" == typeof e) return function(e, t = 0) {
if (t) return "function " + e.name;
(e = (e = e.toString()).split("\n")).length > 10 && (e = e.slice(0, 10).join("\n") + "\n...");
return e;
}(e, t);
if (Array.isArray(e)) return function(e, t = 0) {
if (t > 2) return "[...]";
let r = 1 == t ? 3 : 10;
e.length > r && (e = e.slice(0, r)).push("...");
return "[" + e.map(e => n(e, t + 1)).join(", ") + "]";
}(e, t);
if ("object" == typeof window) {
if (e instanceof Node) return n(e.outerHTML, t);
if (e instanceof Event) {
let r = [ Symbol.toStringTag, "type", "clientX", "clientY", "key", "code" ], i = {};
for (let t of r) t in e && (i[t] = e[t]);
return n(i, t);
}
}
return "object" == typeof e ? function(e, t = 0) {
let r = "", i = e.constructor.name;
"Object" == i && (i = e[Symbol.toStringTag]);
i && (r += i + " ");
if (r += "{", t > 1) r += "..."; else {
let i = [];
for (let r in e) e.hasOwnProperty(r) && i.push("".concat(r, ": ").concat(n(e[r], t + 1)));
r += i.join(", ");
}
return r += "}";
}(e, t) : "string" == typeof e ? function(e, t = 0) {
let n = 1 == t ? 20 : 60;
e.length > n && (e = e.slice(0, e.limit - 1) + "???");
return '"'.concat(e, '"');
}(e, t) : JSON.stringify(e);
}
e.exports = function(e) {
return Array.from(e).map(n).join(", ");
};
},
281: function(e, t, n) {
let r = n(280);
e.exports = function() {
window.consoleLogNative = window.console.log.bind(console), console.log = function(...e) {
consoleLogNative(...e);
let t = r(e);
window.postMessage({
type: "console-log",
log: t
}, "*");
}, window.addEventListener("message", ({source: e, data: t}) => {
e != window && e == window.parent || "console-log" == t.type && window.consoleLogTarget && consoleLogTarget.consoleLog(t.log);
});
};
},
3: function(e, t, n) {
"use strict";
const r = new (n(7))("en");
let i = console.error;
function a(e) {
return r.hasPhrase(s, e) || i("No such phrase", e), r.t(s, ...arguments);
}
e.exports = a;
const s = n(0).lang;
"en" !== s && r.setFallback(s, "en"), r.add = ((...e) => r.addPhrase(s, ...e)), 
a.i18n = r;
},
4: function(e, t, n) {
"use strict";
n.r(t), n.d(t, "init", function() {
return a;
}), n.d(t, "Info", function() {
return o;
}), n.d(t, "Warning", function() {
return l;
}), n.d(t, "Success", function() {
return c;
}), n.d(t, "Error", function() {
return u;
});
let r = n(1);
class i {
constructor(e = {}) {
this.notifications = [], this.verticalSpace = e.verticalSpace || 8;
}
register(e) {
this.notifications.unshift(e), setTimeout(() => this.recalculate(), 20);
}
unregister(e) {
let t = this.notifications.indexOf(e);
this.notifications.splice(t, 1), this.recalculate();
}
recalculate() {
let e = this.verticalSpace;
this.notifications.forEach(t => {
t.top = e, e += t.height + this.verticalSpace;
});
}
}
function a(e) {
window.notificationManager || (window.notificationManager = new i(e));
}
class s {
constructor(e, t, n) {
let r = '<div class="notification notification_popup notification_'.concat(t, '">\n    <div class="notification__content">').concat(e, '</div>\n    <button title="??????????????" class="notification__close"></button></div>');
switch (document.body.insertAdjacentHTML("beforeEnd", r), this.elem = document.body.lastElementChild, 
n) {
case void 0:
this.timeout = this.TIMEOUT_DEFAULT;
break;

case "slow":
this.timeout = this.TIMEOUT_SLOW;
break;

case "fast":
this.timeout = this.TIMEOUT_FAST;
break;

default:
this.timeout = n;
}
window.notificationManager.register(this), this.setupCloseHandler(), this.setupCloseTimeout();
}
get TIMEOUT_DEFAULT() {
return 3e3;
}
get TIMEOUT_SLOW() {
return 5e3;
}
get TIMEOUT_FAST() {
return 1500;
}
close() {
this.elem.parentNode && (this.elem.remove(), window.notificationManager.unregister(this));
}
setupCloseHandler() {
this.delegate(".notification__close", "click", () => this.close());
}
setupCloseTimeout() {
this.timeout && setTimeout(() => this.close(), this.timeout);
}
get height() {
return this.elem.offsetHeight;
}
set top(e) {
this.elem.style.transform = "translateY(" + e + "px)";
}
}
r.delegateMixin(s.prototype);
class o extends s {
constructor(e, t) {
super(e, "info", t);
}
}
class l extends s {
constructor(e, t) {
super(e, "warning", t);
}
}
class c extends s {
constructor(e, t) {
super(e, "success", t);
}
}
class u extends s {
constructor(e, t) {
super(e, "error", t);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
},
40: function(e, t) {
function n(e) {
let t = document.createElement("div"), n = getComputedStyle(e);
return t.style.width = e.offsetWidth + "px", t.style.marginLeft = n.marginLeft, 
t.style.marginRight = n.marginRight, t.style.position = n.position, t.style.height = e.offsetHeight + "px", 
t.style.marginBottom = n.marginBottom, t.style.marginTop = n.marginTop, t;
}
e.exports = function() {
let e = document.querySelectorAll("[data-sticky]");
for (let t = 0; t < e.length; t++) {
let r = e[t], i = r.dataset.sticky ? JSON.parse(r.dataset.sticky) : {}, a = i.bottomLimit ? document.querySelector(i.bottomLimit) : null, s = i.container ? document.querySelector(i.container) : document.body, o = !i.minWidth || document.documentElement.clientWidth > i.minWidth;
if (r.placeholder) (r.placeholder.getBoundingClientRect().top > 0 || !o) && (r.style.cssText = "", 
r.classList.remove("sticky"), r.placeholder.parentNode.insertBefore(r, r.placeholder), 
r.placeholder.remove(), r.placeholder = null); else if (r.placeholder && a) a.getBoundingClientRect().top <= r.offsetHeight ? ("fixed" == r.style.position && (r.style.top = window.pageYOffset + "px"), 
r.style.position = "absolute") : (r.style.position = "fixed", r.style.top = 0); else if (r.getBoundingClientRect().top < 0 && o) {
if (r.style.cssText) return;
let e, t;
i.saveRight ? t = document.documentElement.clientWidth - r.getBoundingClientRect().right : e = r.getBoundingClientRect().left;
let a = i.noPlaceholder ? document.createElement("div") : n(r), o = r.offsetWidth;
r.after(a), s.appendChild(r), r.classList.add("sticky"), r.style.position = "fixed", 
r.style.top = 0, i.saveRight ? r.style.right = t + "px" : r.style.left = e + "px", 
r.style.zIndex = 101, r.style.background = "white", r.style.margin = 0, r.style.width = o + "px", 
r.placeholder = a;
}
}
};
},
41: function(e, t) {
e.exports = function(e) {
let t, n = 1 + e.split("\n").length, r = new Array(n);
return r = r.join("<span></span>"), t = '<span class="line-numbers-rows">'.concat(r, "</span>");
};
},
42: function(e, t, n) {
var r = n(86), i = "object" == typeof self && self && self.Object === Object && self, a = r || i || Function("return this")();
e.exports = a;
},
43: function(e, t, n) {
var r = n(42).Symbol;
e.exports = r;
},
44: function(e, t, n) {
var r = n(84), i = n(17), a = "Expected a function";
e.exports = function(e, t, n) {
var s = !0, o = !0;
if ("function" != typeof e) throw new TypeError(a);
return i(n) && (s = "leading" in n ? !!n.leading : s, o = "trailing" in n ? !!n.trailing : o), 
r(e, t, {
leading: s,
maxWait: t,
trailing: o
});
};
},
5: function(e, t) {
function n(e) {
if (e = e || {}, this.elem = e.elem, this.size = e.size || "medium", this.class = e.class ? " " + e.class : "", 
this.elemClass = e.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
n.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, n.prototype.stop = function() {
let e = this.elem.querySelector(".spinner");
e && (e.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = n, e.exports = n;
},
64: function(e, t, n) {
let r = n(44), i = n(1);
class a {
constructor(e) {
this.elem = e, this.throttleFilter = r(this.filter, 200), this.showTasksCheckbox = e.querySelector("[data-tutorial-map-show-tasks]"), 
this.showTasksCheckbox.checked = +sessionStorage.showTasksCheckbox, this.updateShowTasks(), 
this.showTasksCheckbox.onchange = this.updateShowTasks.bind(this), this.filterInput = this.elem.querySelector("[data-tutorial-map-filter]"), 
this.textInputBlock = this.elem.querySelector(".tutorial-map__filter .text-input"), 
this.filterInput.oninput = this.onFilterInput.bind(this), this.filterInput.onkeydown = this.onFilterKeydown.bind(this), 
this.elem.querySelector(".text-input__clear").onclick = (() => {
this.filterInput.value = "", this.showClearButton(!1), this.filter("");
}), this.chaptersCollapsed = JSON.parse(sessionStorage.tutorialMapChapters || "{}"), 
this.showChaptersCollapsed(), this.delegate(".tutorial-map__item > .tutorial-map__link", "click", e => {
e.preventDefault();
let t = e.delegateTarget.getAttribute("href");
this.chaptersCollapsed[t] ? delete this.chaptersCollapsed[t] : this.chaptersCollapsed[t] = 1, 
sessionStorage.tutorialMapChapters = JSON.stringify(this.chaptersCollapsed), this.showChaptersCollapsed();
});
let t = this.elem.querySelector('.tutorial-map-list-three__link[href="' + location.pathname + '"]');
t && t.classList.add("tutorial-map-list-three__link_active"), this.filterInput.focus();
}
showChaptersCollapsed() {
let e = this.elem.querySelectorAll(".tutorial-map__item > .tutorial-map__link");
for (let t = 0; t < e.length; t++) {
let n = e[t];
this.chaptersCollapsed[n.getAttribute("href")] ? n.parentNode.classList.add("tutorial-map__item_collapsed") : n.parentNode.classList.remove("tutorial-map__item_collapsed");
}
}
updateShowTasks() {
this.showTasksCheckbox.checked ? this.elem.classList.add("tutorial-map_show-tasks") : this.elem.classList.remove("tutorial-map_show-tasks"), 
sessionStorage.showTasksCheckbox = this.showTasksCheckbox.checked ? "1" : "0";
}
onFilterInput(e) {
this.showClearButton(e.target.value), this.throttleFilter(e.target.value);
}
onFilterKeydown(e) {
27 === e.keyCode && (this.filterInput.value = "", this.showClearButton(!1), this.filter(""));
}
showClearButton(e) {
e ? this.textInputBlock.classList.add("text-input_clear-button") : this.textInputBlock.classList.remove("text-input_clear-button");
}
focus() {
this.elem.tabIndex = -1, this.elem.focus();
}
filter(e) {
e = e.toLowerCase();
let t = this.showTasksCheckbox.checked, n = (this.elem.querySelectorAll(".tutorial-map-list a"), 
this.elem.querySelectorAll(".tutorial-map-list-two__item"));
function r(t) {
return function(e, t) {
let n = 0, r = 0;
for (;n < e.length && r < t.length; ) e[n] === t[r] ? (n++, r++) : n++;
return r === t.length;
}(t.querySelector("a").innerHTML.toLowerCase(), e.replace(/\s/g, ""));
}
for (let e = 0; e < n.length; e++) {
let i = n[e], a = i.querySelectorAll(".tutorial-map-list-three__item"), s = Array.prototype.reduce.call(a, function(e, n) {
let i = !1;
if (t) {
let e = n.querySelectorAll(".tutorial-map-list-four__item");
i = Array.prototype.reduce.call(e, function(e, t) {
let n = r(t);
return t.hidden = !n, e || n;
}, !1);
}
let a = i || r(n);
return n.hidden = !a, e || a;
}, !1);
i.hidden = !(s || r(i));
}
}
}
e.exports = a, i.delegateMixin(a.prototype);
},
65: function(e, t, n) {
n(69), n(70), n(71), n(72), n(73), n(74), n(75), n(76), n(77), n(78), n(79), Prism.hooks.add("wrap", function(e) {
"span" === e.tag && (e.tag = "code");
});
},
66: function(e, t) {
var n;
n = function() {
return this;
}();
try {
n = n || new Function("return this")();
} catch (e) {
"object" == typeof window && (n = window);
}
e.exports = n;
},
68: function(e, t, n) {
(document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop()).setAttribute("data-manual", 1), 
n(65);
let r = n(80), i = n(83), a = n(281);
function s(e) {
!function(e) {
let t = e.querySelectorAll(".code-example:not([data-prism-highlighted])");
for (let e of t) new r(e), e.setAttribute("data-prism-highlighted", "1");
}(e), function(e) {
let t = e.querySelectorAll("div.code-tabs:not([data-prism-highlighted])");
for (let e of t) new i(e), e.setAttribute("data-prism-highlighted", "1");
}(e);
}
t.init = function() {
document.removeEventListener("DOMContentLoaded", Prism.highlightAll), document.addEventListener("DOMContentLoaded", function() {
s(document);
}), a();
}, t.highlight = s;
},
69: function(e, t) {
var n = function(e) {
var t = /\blang(?:uage)?-([\w-]+)\b/i, n = 0, r = {
manual: e.Prism && e.Prism.manual,
disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
util: {
encode: function(e) {
return e instanceof i ? new i(e.type, r.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(r.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
},
type: function(e) {
return Object.prototype.toString.call(e).slice(8, -1);
},
objId: function(e) {
return e.__id || Object.defineProperty(e, "__id", {
value: ++n
}), e.__id;
},
clone: function e(t, n) {
var i, a, s = r.util.type(t);
switch (n = n || {}, s) {
case "Object":
if (a = r.util.objId(t), n[a]) return n[a];
for (var o in i = {}, n[a] = i, t) t.hasOwnProperty(o) && (i[o] = e(t[o], n));
return i;

case "Array":
return a = r.util.objId(t), n[a] ? n[a] : (i = [], n[a] = i, t.forEach(function(t, r) {
i[r] = e(t, n);
}), i);

default:
return t;
}
}
},
languages: {
extend: function(e, t) {
var n = r.util.clone(r.languages[e]);
for (var i in t) n[i] = t[i];
return n;
},
insertBefore: function(e, t, n, i) {
var a = (i = i || r.languages)[e], s = {};
for (var o in a) if (a.hasOwnProperty(o)) {
if (o == t) for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
n.hasOwnProperty(o) || (s[o] = a[o]);
}
var c = i[e];
return i[e] = s, r.languages.DFS(r.languages, function(t, n) {
n === c && t != e && (this[t] = s);
}), s;
},
DFS: function e(t, n, i, a) {
a = a || {};
var s = r.util.objId;
for (var o in t) if (t.hasOwnProperty(o)) {
n.call(t, o, t[o], i || o);
var l = t[o], c = r.util.type(l);
"Object" !== c || a[s(l)] ? "Array" !== c || a[s(l)] || (a[s(l)] = !0, e(l, n, o, a)) : (a[s(l)] = !0, 
e(l, n, null, a));
}
}
},
plugins: {},
highlightAll: function(e, t) {
r.highlightAllUnder(document, e, t);
},
highlightAllUnder: function(e, t, n) {
var i = {
callback: n,
selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
};
r.hooks.run("before-highlightall", i);
for (var a, s = i.elements || e.querySelectorAll(i.selector), o = 0; a = s[o++]; ) r.highlightElement(a, !0 === t, i.callback);
},
highlightElement: function(n, i, a) {
for (var s, o, l = n; l && !t.test(l.className); ) l = l.parentNode;
l && (s = (l.className.match(t) || [ , "" ])[1].toLowerCase(), o = r.languages[s]), 
n.className = n.className.replace(t, "").replace(/\s+/g, " ") + " language-" + s, 
n.parentNode && (l = n.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(t, "").replace(/\s+/g, " ") + " language-" + s));
var c = {
element: n,
language: s,
grammar: o,
code: n.textContent
}, u = function(e) {
c.highlightedCode = e, r.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, 
r.hooks.run("after-highlight", c), r.hooks.run("complete", c), a && a.call(c.element);
};
if (r.hooks.run("before-sanity-check", c), c.code) if (r.hooks.run("before-highlight", c), 
c.grammar) if (i && e.Worker) {
var d = new Worker(r.filename);
d.onmessage = function(e) {
u(e.data);
}, d.postMessage(JSON.stringify({
language: c.language,
code: c.code,
immediateClose: !0
}));
} else u(r.highlight(c.code, c.grammar, c.language)); else u(r.util.encode(c.code)); else r.hooks.run("complete", c);
},
highlight: function(e, t, n) {
var a = {
code: e,
grammar: t,
language: n
};
return r.hooks.run("before-tokenize", a), a.tokens = r.tokenize(a.code, a.grammar), 
r.hooks.run("after-tokenize", a), i.stringify(r.util.encode(a.tokens), a.language);
},
matchGrammar: function(e, t, n, a, s, o, l) {
for (var c in n) if (n.hasOwnProperty(c) && n[c]) {
if (c == l) return;
var u = n[c];
u = "Array" === r.util.type(u) ? u : [ u ];
for (var d = 0; d < u.length; ++d) {
var p = u[d], h = p.inside, f = !!p.lookbehind, g = !!p.greedy, m = 0, b = p.alias;
if (g && !p.pattern.global) {
var y = p.pattern.toString().match(/[imuy]*$/)[0];
p.pattern = RegExp(p.pattern.source, y + "g");
}
p = p.pattern || p;
for (var v = a, w = s; v < t.length; w += t[v].length, ++v) {
var E = t[v];
if (t.length > e.length) return;
if (!(E instanceof i)) {
if (g && v != t.length - 1) {
if (p.lastIndex = w, !(x = p.exec(e))) break;
for (var _ = x.index + (f ? x[1].length : 0), k = x.index + x[0].length, A = v, F = w, T = t.length; A < T && (F < k || !t[A].type && !t[A - 1].greedy); ++A) _ >= (F += t[A].length) && (++v, 
w = F);
if (t[v] instanceof i) continue;
S = A - v, E = e.slice(w, F), x.index -= w;
} else {
p.lastIndex = 0;
var x = p.exec(E), S = 1;
}
if (x) {
f && (m = x[1] ? x[1].length : 0);
k = (_ = x.index + m) + (x = x[0].slice(m)).length;
var L = E.slice(0, _), O = E.slice(k), C = [ v, S ];
L && (++v, w += L.length, C.push(L));
var N = new i(c, h ? r.tokenize(x, h) : x, b, x, g);
if (C.push(N), O && C.push(O), Array.prototype.splice.apply(t, C), 1 != S && r.matchGrammar(e, t, n, v, w, !0, c), 
o) break;
} else if (o) break;
}
}
}
}
},
tokenize: function(e, t) {
var n = [ e ], i = t.rest;
if (i) {
for (var a in i) t[a] = i[a];
delete t.rest;
}
return r.matchGrammar(e, n, t, 0, 0, !1), n;
},
hooks: {
all: {},
add: function(e, t) {
var n = r.hooks.all;
n[e] = n[e] || [], n[e].push(t);
},
run: function(e, t) {
var n = r.hooks.all[e];
if (n && n.length) for (var i, a = 0; i = n[a++]; ) i(t);
}
},
Token: i
};
function i(e, t, n, r, i) {
this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length, 
this.greedy = !!i;
}
if (e.Prism = r, i.stringify = function(e, t, n) {
if ("string" == typeof e) return e;
if (Array.isArray(e)) return e.map(function(n) {
return i.stringify(n, t, e);
}).join("");
var a = {
type: e.type,
content: i.stringify(e.content, t, n),
tag: "span",
classes: [ "token", e.type ],
attributes: {},
language: t,
parent: n
};
if (e.alias) {
var s = Array.isArray(e.alias) ? e.alias : [ e.alias ];
Array.prototype.push.apply(a.classes, s);
}
r.hooks.run("wrap", a);
var o = Object.keys(a.attributes).map(function(e) {
return e + '="' + (a.attributes[e] || "").replace(/"/g, "&quot;") + '"';
}).join(" ");
return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + a.content + "</" + a.tag + ">";
}, !e.document) return e.addEventListener ? (r.disableWorkerMessageHandler || e.addEventListener("message", function(t) {
var n = JSON.parse(t.data), i = n.language, a = n.code, s = n.immediateClose;
e.postMessage(r.highlight(a, r.languages[i], i)), s && e.close();
}, !1), r) : r;
var a = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
return a && (r.filename = a.src, r.manual || a.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(r.highlightAll) : window.setTimeout(r.highlightAll, 16) : document.addEventListener("DOMContentLoaded", r.highlightAll))), 
r;
}("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
void 0 !== e && e.exports && (e.exports = n), "undefined" != typeof global && (global.Prism = n);
},
7: function(e, t, n) {
e.exports = n(8);
},
70: function(e, t) {
Prism.languages.markup = {
comment: /<!--[\s\S]*?-->/,
prolog: /<\?[\s\S]+?\?>/,
doctype: /<!DOCTYPE[\s\S]+?>/i,
cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
tag: {
pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
greedy: !0,
inside: {
tag: {
pattern: /^<\/?[^\s>\/]+/i,
inside: {
punctuation: /^<\/?/,
namespace: /^[^\s>\/:]+:/
}
},
"attr-value": {
pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
inside: {
punctuation: [ /^=/, {
pattern: /^(\s*)["']|["']$/,
lookbehind: !0
} ]
}
},
punctuation: /\/?>/,
"attr-name": {
pattern: /[^\s>\/]+/,
inside: {
namespace: /^[^\s>\/:]+:/
}
}
}
},
entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, 
Prism.hooks.add("wrap", function(e) {
"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
value: function(e, t) {
var n = {};
n["language-" + t] = {
pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
lookbehind: !0,
inside: Prism.languages[t]
}, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
var r = {
"included-cdata": {
pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
inside: n
}
};
r["language-" + t] = {
pattern: /[\s\S]+/,
inside: Prism.languages[t]
};
var i = {};
i[e] = {
pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, e), "i"),
lookbehind: !0,
greedy: !0,
inside: r
}, Prism.languages.insertBefore("markup", "cdata", i);
}
}), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, 
Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
},
71: function(e, t) {
!function(e) {
var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
e.languages.css = {
comment: /\/\*[\s\S]*?\*\//,
atrule: {
pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,
inside: {
rule: /@[\w-]+/
}
},
url: RegExp("url\\((?:" + t.source + "|.*?)\\)", "i"),
selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
string: {
pattern: t,
greedy: !0
},
property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
important: /!important\b/i,
function: /[-a-z0-9]+(?=\()/i,
punctuation: /[(){};:,]/
}, e.languages.css.atrule.inside.rest = e.languages.css;
var n = e.languages.markup;
n && (n.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
"style-attr": {
pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
inside: {
"attr-name": {
pattern: /^\s*style/i,
inside: n.tag.inside
},
punctuation: /^\s*=\s*['"]|['"]\s*$/,
"attr-value": {
pattern: /.+/i,
inside: e.languages.css
}
},
alias: "language-css"
}
}, n.tag));
}(Prism);
},
72: function(e, t) {
Prism.languages.css.selector = {
pattern: Prism.languages.css.selector,
inside: {
"pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
"pseudo-class": /:[-\w]+/,
class: /\.[-:.\w]+/,
id: /#[-:.\w]+/,
attribute: {
pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
greedy: !0,
inside: {
punctuation: /^\[|\]$/,
"case-sensitivity": {
pattern: /(\s)[si]$/i,
lookbehind: !0,
alias: "keyword"
},
namespace: {
pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
lookbehind: !0,
inside: {
punctuation: /\|$/
}
},
attribute: {
pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
lookbehind: !0
},
value: [ /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, {
pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
lookbehind: !0
} ],
operator: /[|~*^$]?=/
}
},
"n-th": {
pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
lookbehind: !0,
inside: {
number: /[\dn]+/,
operator: /[+-]/
}
},
punctuation: /[()]/
}
}, Prism.languages.insertBefore("css", "property", {
variable: {
pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
lookbehind: !0
}
}), Prism.languages.insertBefore("css", "function", {
operator: {
pattern: /(\s)[+\-*\/](?=\s)/,
lookbehind: !0
},
hexcode: /#[\da-f]{3,8}/i,
entity: /\\[\da-f]{1,8}/i,
unit: {
pattern: /(\d)(?:%|[a-z]+)/,
lookbehind: !0
},
number: /-?[\d.]+/
});
},
73: function(e, t) {
Prism.languages.clike = {
comment: [ {
pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
lookbehind: !0
}, {
pattern: /(^|[^\\:])\/\/.*/,
lookbehind: !0,
greedy: !0
} ],
string: {
pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
"class-name": {
pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
lookbehind: !0,
inside: {
punctuation: /[.\\]/
}
},
keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
boolean: /\b(?:true|false)\b/,
function: /\w+(?=\()/,
number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
punctuation: /[{}[\];(),.:]/
};
},
74: function(e, t) {
Prism.languages.javascript = Prism.languages.extend("clike", {
"class-name": [ Prism.languages.clike["class-name"], {
pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
lookbehind: !0
} ],
keyword: [ {
pattern: /((?:^|})\s*)(?:catch|finally)\b/,
lookbehind: !0
}, {
pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
lookbehind: !0
} ],
number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, 
Prism.languages.insertBefore("javascript", "keyword", {
regex: {
pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
lookbehind: !0,
greedy: !0
},
"function-variable": {
pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
alias: "function"
},
parameter: [ {
pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
lookbehind: !0,
inside: Prism.languages.javascript
}, {
pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
inside: Prism.languages.javascript
}, {
pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
lookbehind: !0,
inside: Prism.languages.javascript
}, {
pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
lookbehind: !0,
inside: Prism.languages.javascript
} ],
constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
"template-string": {
pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
greedy: !0,
inside: {
interpolation: {
pattern: /\${[^}]+}/,
inside: {
"interpolation-punctuation": {
pattern: /^\${|}$/,
alias: "punctuation"
},
rest: Prism.languages.javascript
}
},
string: /[\s\S]+/
}
}
}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), 
Prism.languages.js = Prism.languages.javascript;
},
75: function(e, t) {
!function(e) {
e.languages.http = {
"request-line": {
pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
inside: {
property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
"attr-name": /:\w+/
}
},
"response-status": {
pattern: /^HTTP\/1.[01] \d+.*/m,
inside: {
property: {
pattern: /(^HTTP\/1.[01] )\d+.*/i,
lookbehind: !0
}
}
},
"header-name": {
pattern: /^[\w-]+:(?=.)/m,
alias: "keyword"
}
};
var t, n = e.languages, r = {
"application/javascript": n.javascript,
"application/json": n.json || n.javascript,
"application/xml": n.xml,
"text/xml": n.xml,
"text/html": n.html,
"text/css": n.css
}, i = {
"application/json": !0,
"application/xml": !0
};
function a(e) {
return "(?:" + e + "|" + ("\\w+/(?:[\\w.-]+\\+)+" + e.replace(/^[a-z]+\//, "") + "(?![+\\w.-])") + ")";
}
for (var s in r) if (r[s]) {
t = t || {};
var o = i[s] ? a(s) : s;
t[s] = {
pattern: RegExp("(content-type:\\s*" + o + "[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*", "i"),
lookbehind: !0,
inside: {
rest: r[s]
}
};
}
t && e.languages.insertBefore("http", "header-name", t);
}(Prism);
},
76: function(e, t) {
Prism.languages.scss = Prism.languages.extend("css", {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
lookbehind: !0
},
atrule: {
pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
inside: {
rule: /@[\w-]+/
}
},
url: /(?:[-a-z]+-)*url(?=\()/i,
selector: {
pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
inside: {
parent: {
pattern: /&/,
alias: "important"
},
placeholder: /%[-\w]+/,
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
},
property: {
pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
inside: {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
}
}), Prism.languages.insertBefore("scss", "atrule", {
keyword: [ /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
pattern: /( +)(?:from|through)(?= )/,
lookbehind: !0
} ]
}), Prism.languages.insertBefore("scss", "important", {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
placeholder: {
pattern: /%[-\w]+/,
alias: "selector"
},
statement: {
pattern: /\B!(?:default|optional)\b/i,
alias: "keyword"
},
boolean: /\b(?:true|false)\b/,
null: {
pattern: /\bnull\b/,
alias: "keyword"
},
operator: {
pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
lookbehind: !0
}
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
},
77: function(e, t) {
Prism.languages.sql = {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
lookbehind: !0
},
variable: [ {
pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
greedy: !0
}, /@[\w.$]+/ ],
string: {
pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
greedy: !0,
lookbehind: !0
},
function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
punctuation: /[;[\]()`,.]/
};
},
78: function(e, t) {
!function(e) {
var t = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/, n = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
e.languages.java = e.languages.extend("clike", {
"class-name": [ n, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/ ],
keyword: t,
function: [ e.languages.clike.function, {
pattern: /(\:\:)[a-z_]\w*/,
lookbehind: !0
} ],
number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
operator: {
pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
lookbehind: !0
}
}), e.languages.insertBefore("java", "class-name", {
annotation: {
alias: "punctuation",
pattern: /(^|[^.])@\w+/,
lookbehind: !0
},
namespace: {
pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
lookbehind: !0,
inside: {
punctuation: /\./
}
},
generics: {
pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
inside: {
"class-name": n,
keyword: t,
punctuation: /[<>(),.:]/,
operator: /[?&|]/
}
}
});
}(Prism);
},
79: function(e, t) {
!function(e) {
var t = {
variable: [ {
pattern: /\$?\(\([\s\S]+?\)\)/,
inside: {
variable: [ {
pattern: /(^\$\(\([\s\S]+)\)\)/,
lookbehind: !0
}, /^\$\(\(/ ],
number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
punctuation: /\(\(?|\)\)?|,|;/
}
}, {
pattern: /\$\([^)]+\)|`[^`]+`/,
greedy: !0,
inside: {
variable: /^\$\(|^`|\)$|`$/
}
}, /\$(?:[\w#?*!@]+|\{[^}]+\})/i ]
};
e.languages.bash = {
shebang: {
pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
alias: "important"
},
comment: {
pattern: /(^|[^"{\\])#.*/,
lookbehind: !0
},
string: [ {
pattern: /((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,
lookbehind: !0,
greedy: !0,
inside: t
}, {
pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
greedy: !0,
inside: t
} ],
variable: t.variable,
function: {
pattern: /(^|[\s;|&])(?:add|alias|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|hash|head|help|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logout|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tail|tar|tee|test|time|timeout|times|top|touch|tr|traceroute|trap|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zip|zypper)(?=$|[\s;|&])/,
lookbehind: !0
},
keyword: {
pattern: /(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,
lookbehind: !0
},
boolean: {
pattern: /(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/,
lookbehind: !0
},
operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
};
var n = t.variable[1].inside;
n.string = e.languages.bash.string, n.function = e.languages.bash.function, n.keyword = e.languages.bash.keyword, 
n.boolean = e.languages.bash.boolean, n.operator = e.languages.bash.operator, n.punctuation = e.languages.bash.punctuation, 
e.languages.shell = e.languages.bash;
}(Prism);
},
8: function(e, t, n) {
"use strict";
var r = n(9), i = n(10);
function a(e) {
return Object.prototype.toString.call(e);
}
function s(e) {
return "[object String]" === a(e);
}
function o(e) {
return !isNaN(e) && isFinite(e);
}
function l(e) {
return !0 === e || !1 === e;
}
function c(e) {
return "[object Object]" === a(e);
}
var u = Array.isArray || function(e) {
return "[object Array]" === a(e);
}, d = Array.prototype.forEach;
function p(e, t, n) {
if (null !== e) if (d && e.forEach === d) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, i = e.length; r < i; r += 1) t.call(n, e[r], r, e); else for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(n, e[a], a, e);
}
var h = /%[sdj%]/g;
function f(e) {
var t = 1, n = arguments, r = n.length;
return String(e).replace(h, function(e) {
if ("%%" === e) return "%";
if (t >= r) return e;
switch (e) {
case "%s":
return String(n[t++]);

case "%d":
return Number(n[t++]);

case "%j":
return JSON.stringify(n[t++]);

default:
return e;
}
});
}
var g = "en";
function m(e) {
var t = {};
return p(e || {}, function(e, n) {
e && "object" == typeof e ? p(m(e), function(e, r) {
t[n + "." + r] = e;
}) : t[n] = e;
}), t;
}
var b = "#@$";
function y(e, t) {
return e + b + t;
}
function v(e, t, n) {
var r = y(t, n), i = e._storage;
if (i.hasOwnProperty(r)) return r;
if (t === e._defaultLocale) return null;
var a = e._fallbacks_cache;
if (a.hasOwnProperty(r)) return a[r];
for (var s, o = e._fallbacks[t] || [ e._defaultLocale ], l = 0, c = o.length; l < c; l++) if (s = y(o[l], n), 
i.hasOwnProperty(s)) return a[r] = s, a[r];
return a[r] = null, null;
}
function w(e, t, n) {
var r = i.indexOf(e, t);
return -1 === r ? f('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? f('[plural form %d ("%s") not found in translation]', r, i.forms(e)[r]) : n[r];
}
function E(e) {
if (!(this instanceof E)) return new E(e);
this._defaultLocale = e ? String(e) : g, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
E.prototype.addPhrase = function(e, t, n, r) {
var i, a = this;
if (l(r)) i = r ? 1 / 0 : 0; else if (o(r)) {
if ((i = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else i = 1 / 0;
if (c(n) && i > 0) return p(n, function(n, r) {
a.addPhrase(e, (t ? t + "." : "") + r, n, i - 1);
}), this;
if (s(n)) this._storage[y(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(u(n) || o(n) || l(n) || 0 === i && c(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[y(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return a._fallbacks_cache = {}, this;
}, E.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = u(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var _ = /#\{|\(\(|\\\\/;
E.prototype.translate = function(e, t, n) {
var i, l = v(this, e, t);
return l ? (i = this._storage[l]).raw ? i.translation : (i.hasOwnProperty("compiled") || (i.compiled = function(e, t, n) {
var i, a, s, o, l, c;
return _.test(t) ? 1 === (i = r.parse(t)).length && "literal" === i[0].type ? i[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new E(n)), 
c = e._plurals_cache[n], (a = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
a.push("params = flatten(params);"), p(i, function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return s = e.anchor, void a.push(f('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', s, s, s));
if ("plural" !== e.type) throw new Error("Unknown node type");
s = e.anchor, o = {}, p(e.strict, function(t, i) {
var a = r.parse(t);
if (1 === a.length && "literal" === a[0].type) return o[i] = !1, void (e.strict[i] = a[0].text);
o[i] = !0, c.hasPhrase(n, t, !0) || c.addPhrase(n, t, t);
}), l = {}, p(e.forms, function(t, i) {
var a, s = r.parse(t);
if (1 === s.length && "literal" === s[0].type) return a = s[0].text, e.forms[i] = a, 
void (l[a] = !1);
l[t] = !0, c.hasPhrase(n, t, !0) || c.addPhrase(n, t, t);
}), a.push(f("loc = %j;", n)), a.push(f("loc_plzr = %j;", n.split(/[-_]/)[0])), 
a.push(f("anchor = params[%j];", s)), a.push(f("cache = this._plurals_cache[loc];")), 
a.push(f("strict = %j;", e.strict)), a.push(f("strict_exec = %j;", o)), a.push(f("forms = %j;", e.forms)), 
a.push(f("forms_exec = %j;", l)), a.push("if (+(anchor) != anchor) {"), a.push(f('  str += "[invalid plurals amount: %s(" + anchor + ")]";', s)), 
a.push("} else {"), a.push("  if (strict[anchor] !== undefined) {"), a.push("    plrl = strict[anchor];"), 
a.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), a.push("  } else {"), 
a.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), a.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
a.push("  }"), a.push("}");
} else a.push(f("str += %j;", e.text));
}), a.push("return str;"), new Function("params", "flatten", "pluralizer", a.join("\n"))) : t;
}(this, i.translation, i.locale)), "[object Function]" !== a(i.compiled) ? i.compiled : ((o(n) || s(n)) && (n = {
count: n,
value: n
}), i.compiled.call(this, n, m, w))) : e + ": No translation for [" + t + "]";
}, E.prototype.hasPhrase = function(e, t, n) {
return n ? this._storage.hasOwnProperty(y(e, t)) : !!v(this, e, t);
}, E.prototype.getLocale = function(e, t, n) {
if (n) return this._storage.hasOwnProperty(y(e, t)) ? e : null;
var r = v(this, e, t);
return r ? r.split(b, 2)[0] : null;
}, E.prototype.t = E.prototype.translate, E.prototype.stringify = function(e) {
var t = this, n = {};
p(this._storage, function(e, t) {
n[t.split(b)[1]] = !0;
});
var r = {};
p(n, function(n, i) {
var a = v(t, e, i);
if (a) {
var s = t._storage[a].locale;
r[s] || (r[s] = {}), r[s][i] = t._storage[a].translation;
}
});
var i = {
fallback: {},
locales: r
}, a = (t._fallbacks[e] || []).slice(0, -1);
return a.length && (i.fallback[e] = a), JSON.stringify(i);
}, E.prototype.load = function(e) {
var t = this;
return s(e) && (e = JSON.parse(e)), p(e.locales, function(e, n) {
p(e, function(e, r) {
t.addPhrase(n, r, e, 0);
});
}), p(e.fallback, function(e, n) {
t.setFallback(n, e);
}), this;
}, e.exports = E;
},
80: function(e, t, n) {
let r = n(18), i = n(81), a = n(41);
n(82);
const {highlight: s} = n(279), o = n(0);
e.exports = function(e) {
let t, n = this, s = e.querySelector("pre"), l = Array.from(s.childNodes).find(e => "CODE" === e.tagName), c = l.textContent, u = c;
e.hasAttribute("data-async") && (u = "(async () => {\n".concat(c, "\n})()")), Prism.highlightElement(l);
let d = a(s.innerHTML);
s.insertAdjacentHTML("afterBegin", d);
let p = JSON.parse(e.getAttribute("data-highlight"));
p && function(e, t) {
let n = e.innerHTML.split(/\n/);
for (let e of t) if (void 0 !== e.end) n[e.start] = '<em class="block-highlight">' + n[e.start], 
n[e.end] += "</em>"; else {
let t = n[e.start], r = e.cols, i = !1, a = -1, s = "";
for (let e = 0; e < t.length; e++) {
if ("<" == t[e] && (i = !0), i) s += t[e]; else {
if (a++, r.find(e => e.start == a) && (s += '<em class="inline-highlight">'), s += t[e], 
"&" == t[e]) {
let n = [ "lt;", "gt;", "amp;", "quot;" ];
for (let r of n) t.slice(e + 1, e + 1 + r.length) == r && (e += r.length, s += r);
}
r.find(e => e.end == a + 1) && (s += "</em>");
}
">" == t[e] && (i = !1);
}
n[e.start] = s;
}
e.innerHTML = n.join("\n");
}(l, p);
let h, f, g, m = s.classList.contains("language-javascript"), b = s.classList.contains("language-markup"), y = +e.getAttribute("data-trusted");
!+e.getAttribute("data-no-strict") && m && (u = "'use strict';\n\n" + u);
let v = !0;
if (!m && !b) return;
let w = e.querySelector('[data-action="run"]');
w && (w.onclick = function() {
return this.blur(), F(), !1;
});
let E = e.querySelector('[data-action="edit"]');
function _() {
let e = h.contentWindow;
"function" == typeof e.postMessage ? e.postMessage(u, o.lookatCodeUrlBase + "/showjs") : alert("Sorry, your browser is too old");
}
function k() {
if (e.hasAttribute("data-global")) {
f || ((f = document.createElement("iframe")).className = "js-frame", f.style.width = 0, 
f.style.height = 0, f.style.border = "none", f.name = "js-global-frame", document.body.appendChild(f));
let e = document.createElement("form");
e.style.display = "none", e.method = "POST", e.enctype = "multipart/form-data", 
e.action = o.lookatCodeUrlBase + "/showhtml", e.target = "js-global-frame";
let t = document.createElement("textarea");
t.name = "code", t.value = A("<script>\n".concat(u, "\n<\/script>")), e.appendChild(t), 
f.parentNode.insertBefore(e, f.nextSibling), e.submit(), e.remove();
} else if (y) {
if (e.hasAttribute("data-autorun")) return void function(e) {
let t = document.createElement("script");
t.type = "module", t.text = e, document.head.append(t), t.remove();
}(u);
try {
window.eval.call(window, u);
} catch (e) {
alert(e.constructor.name + ": " + e.message);
}
} else e.hasAttribute("data-refresh") && h && (h.remove(), h = null), h ? _() : ((h = document.createElement("iframe")).className = "js-frame", 
h.src = o.lookatCodeUrlBase + "/showjs", h.style.width = 0, h.style.height = 0, 
h.style.border = "none", h.onload = function() {
_();
}, document.body.appendChild(h));
}
function A(e) {
if (e.match(/^\s*<!doctype/i)) return e;
let t = e;
return e.match(/<body/i) || (t = "<body>\n".concat(t, "\n</body>")), t = "<!doctype html>\n" + t;
}
function F() {
window.consoleLogTarget = n, t && (t.innerHTML = ""), m ? k() : function() {
let t;
if (g && e.hasAttribute("data-refresh") && (g.remove(), g = null), g || (g = e.querySelector(".code-result")), 
g) t = g.querySelector("iframe"); else {
if ((g = document.createElement("div")).className = "code-result code-example__result", 
(t = document.createElement("iframe")).name = "frame-" + Math.random(), t.className = "code-result__iframe", 
"0" === e.getAttribute("data-demo-height")) g.style.display = "none"; else if (e.hasAttribute("data-demo-height")) {
let n = +e.getAttribute("data-demo-height");
t.style.height = n + "px";
}
g.appendChild(t), e.appendChild(g);
}
if (y) {
let n = t.contentDocument || t.contentWindow.document;
n.open(), n.write(A(c)), n.close(), e.hasAttribute("data-demo-height") || r.iframe(t), 
v && e.hasAttribute("data-autorun") || i(g) || g.scrollIntoView(!1);
} else {
let n = document.createElement("form");
n.style.display = "none", n.method = "POST", n.enctype = "multipart/form-data", 
n.action = o.lookatCodeUrlBase + "/showhtml", n.target = t.name;
let a = document.createElement("textarea");
a.name = "code", a.value = A(c), n.appendChild(a), t.parentNode.insertBefore(n, t.nextSibling), 
n.submit(), n.remove(), v && e.hasAttribute("data-autorun") || (t.onload = function() {
e.hasAttribute("data-demo-height") || r.iframe(t), i(g) || g.scrollIntoView(!1);
});
}
}(), v = !1;
}
E && (E.onclick = function() {
return this.blur(), function() {
let e;
e = b ? A(c) : "<!DOCTYPE html>\n<script>\n".concat(u, "\n<\/script>");
let t = document.createElement("form");
t.action = "https://plnkr.co/edit/?p=preview", t.method = "POST", t.target = "_blank", 
document.body.appendChild(t);
let n = document.createElement("textarea");
n.name = "files[index.html]", n.value = e, t.appendChild(n);
let r = document.createElement("input");
r.name = "description", r.value = "Fork from " + window.location, t.appendChild(r), 
t.submit(), t.remove();
}(), !1;
}), e.hasAttribute("data-autorun") && ("epub" == window.ebookType && "no-epub" == e.getAttribute("data-autorun") ? e.querySelector("iframe").remove() : setTimeout(F, 100)), 
this.consoleLog = function(n) {
t || ((t = document.createElement("div")).className = "codebox__output", e.append(t));
let r = document.createElement("div");
r.innerHTML = n, t.append(r);
};
};
},
81: function(e, t) {
e.exports = function(e) {
let t = e.getBoundingClientRect(), n = 0;
if (t.top < 0) n = t.bottom; else {
if (!(t.bottom > window.innerHeight)) return !0;
n = window.innerHeight - top;
}
return n > 10;
};
},
82: function(e, t) {
e.exports = function(e) {
if (!e || !e.length) return "";
let t = [];
for (let n of e) {
let e = '<code class="block-highlight'.concat(n.cols ? " block-highlight_inline" : "", '" data-start="').concat(n.start, '">');
if (e += "\n".repeat(n.start), n.end) e += '<code class="mask">'.concat("\n".repeat(n.end - n.start + 1), "</code>"); else if (n.cols) for (let t = 0; t < n.cols.length; t++) {
let r = n.cols[t], i = 0 === t ? null : n.cols[t - 1];
e += " ".repeat(i ? r.start - i.end : r.start), e += '<code class="mask-inline">'.concat(" ".repeat(r.end - r.start), "</code>");
}
e += "</code>", t.push(e);
}
return t.join("");
};
},
83: function(e, t, n) {
let r = n(1), i = n(41);
class a {
constructor(e) {
if (window.ebookType) return;
this.elem = e, this.translateX = 0, this.switchesElem = e.querySelector("[data-code-tabs-switches]"), 
this.switchesElemItems = this.switchesElem.firstElementChild, this.arrowLeft = e.querySelector("[data-code-tabs-left]"), 
this.arrowRight = e.querySelector("[data-code-tabs-right]"), this.arrowLeft.onclick = (e => {
e.preventDefault(), this.translateX = Math.max(0, this.translateX - this.switchesElem.offsetWidth), 
this.renderTranslate();
}), this.arrowRight.onclick = (e => {
e.preventDefault(), this.translateX = Math.min(this.translateX + this.switchesElem.offsetWidth, this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth), 
this.renderTranslate();
});
let t = this.elem.querySelector(".code-tabs__section_current");
t !== t.parentElement.firstElementChild && this.highlightTab(t), this.delegate(".code-tabs__switch", "click", this.onSwitchClick);
}
onSwitchClick(e) {
e.preventDefault();
let t, n = e.delegateTarget.parentNode.children, r = this.elem.querySelector("[data-code-tabs-content]").children;
for (let i = 0; i < n.length; i++) {
let a = n[i], s = r[i];
a === e.delegateTarget ? (t = i, s.classList.add("code-tabs__section_current"), 
a.classList.add("code-tabs__switch_current")) : (s.classList.remove("code-tabs__section_current"), 
a.classList.remove("code-tabs__switch_current"));
}
0 === t ? this.elem.classList.add("code-tabs_result_on") : (this.elem.classList.remove("code-tabs_result_on"), 
this.highlightTab(r[t]));
}
highlightTab(e) {
if (e.highlighted) return;
let t = e.querySelector("pre"), n = t.querySelector("code");
Prism.highlightElement(n), t.insertAdjacentHTML("beforeEnd", i(t.innerHTML)), e.highlighted = !0;
}
renderTranslate() {
this.switchesElemItems.style.transform = "translateX(-" + this.translateX + "px)", 
0 === this.translateX ? this.arrowLeft.setAttribute("disabled", "") : this.arrowLeft.removeAttribute("disabled"), 
this.translateX === this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth ? this.arrowRight.setAttribute("disabled", "") : this.arrowRight.removeAttribute("disabled");
}
}
r.delegateMixin(a.prototype), e.exports = a;
},
84: function(e, t, n) {
var r = n(17), i = n(85), a = n(87), s = "Expected a function", o = Math.max, l = Math.min;
e.exports = function(e, t, n) {
var c, u, d, p, h, f, g = 0, m = !1, b = !1, y = !0;
if ("function" != typeof e) throw new TypeError(s);
function v(t) {
var n = c, r = u;
return c = u = void 0, g = t, p = e.apply(r, n);
}
function w(e) {
var n = e - f;
return void 0 === f || n >= t || n < 0 || b && e - g >= d;
}
function E() {
var e = i();
if (w(e)) return _(e);
h = setTimeout(E, function(e) {
var n = t - (e - f);
return b ? l(n, d - (e - g)) : n;
}(e));
}
function _(e) {
return h = void 0, y && c ? v(e) : (c = u = void 0, p);
}
function k() {
var e = i(), n = w(e);
if (c = arguments, u = this, f = e, n) {
if (void 0 === h) return function(e) {
return g = e, h = setTimeout(E, t), m ? v(e) : p;
}(f);
if (b) return h = setTimeout(E, t), v(f);
}
return void 0 === h && (h = setTimeout(E, t)), p;
}
return t = a(t) || 0, r(n) && (m = !!n.leading, d = (b = "maxWait" in n) ? o(a(n.maxWait) || 0, t) : d, 
y = "trailing" in n ? !!n.trailing : y), k.cancel = function() {
void 0 !== h && clearTimeout(h), g = 0, c = f = u = h = void 0;
}, k.flush = function() {
return void 0 === h ? p : _(i());
}, k;
};
},
85: function(e, t, n) {
var r = n(42);
e.exports = function() {
return r.Date.now();
};
},
86: function(e, t, n) {
(function(t) {
var n = "object" == typeof t && t && t.Object === Object && t;
e.exports = n;
}).call(this, n(66));
},
87: function(e, t, n) {
var r = n(17), i = n(88), a = NaN, s = /^\s+|\s+$/g, o = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, c = /^0o[0-7]+$/i, u = parseInt;
e.exports = function(e) {
if ("number" == typeof e) return e;
if (i(e)) return a;
if (r(e)) {
var t = "function" == typeof e.valueOf ? e.valueOf() : e;
e = r(t) ? t + "" : t;
}
if ("string" != typeof e) return 0 === e ? e : +e;
e = e.replace(s, "");
var n = l.test(e);
return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : o.test(e) ? a : +e;
};
},
88: function(e, t, n) {
var r = n(89), i = n(92), a = "[object Symbol]";
e.exports = function(e) {
return "symbol" == typeof e || i(e) && r(e) == a;
};
},
89: function(e, t, n) {
var r = n(43), i = n(90), a = n(91), s = "[object Null]", o = "[object Undefined]", l = r ? r.toStringTag : void 0;
e.exports = function(e) {
return null == e ? void 0 === e ? o : s : l && l in Object(e) ? i(e) : a(e);
};
},
9: function(e, t) {
e.exports = function() {
function e(e, t, n, r, i, a) {
this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = i, 
this.column = a, this.name = "SyntaxError";
}
return function(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n();
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var n, r = arguments.length > 1 ? arguments[1] : {}, i = {}, a = {
start: ue
}, s = ue, o = i, l = "((", c = {
type: "literal",
value: "((",
description: '"(("'
}, u = "))", d = {
type: "literal",
value: "))",
description: '"))"'
}, p = null, h = function(e, t) {
return {
type: "plural",
forms: function(e) {
for (var t = [], n = 0; n < e.length; n++) void 0 === e[n].strict && t.push(e[n].text);
return t;
}(e),
strict: function(e) {
for (var t = {}, n = 0; n < e.length; n++) void 0 !== e[n].strict && (t[e[n].strict] = e[n].text);
return t;
}(e),
anchor: t || "count"
};
}, f = "|", g = {
type: "literal",
value: "|",
description: '"|"'
}, m = function(e, t) {
return [ e ].concat(t);
}, b = function(e) {
return [ e ];
}, y = "=", v = {
type: "literal",
value: "=",
description: '"="'
}, w = /^[0-9]/, E = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, _ = " ", k = {
type: "literal",
value: " ",
description: '" "'
}, A = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, F = function() {
return {
text: se()
};
}, T = "\\", x = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, S = /^[\\|)(]/, L = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, O = function(e) {
return e;
}, C = void 0, N = {
type: "any",
description: "any character"
}, I = function() {
return se();
}, R = ":", P = {
type: "literal",
value: ":",
description: '":"'
}, j = function(e) {
return e;
}, D = "#{", M = {
type: "literal",
value: "#{",
description: '"#{"'
}, U = "}", B = {
type: "literal",
value: "}",
description: '"}"'
}, $ = function(e) {
return {
type: "variable",
anchor: e
};
}, H = ".", q = {
type: "literal",
value: ".",
description: '"."'
}, W = function() {
return se();
}, z = /^[a-zA-Z_$]/, G = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, X = /^[a-zA-Z0-9_$]/, Y = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, K = function(e) {
return e;
}, Z = function(e) {
return {
type: "literal",
text: e.join("")
};
}, V = /^[\\#()|]/, J = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, ee = 0, te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}, re = 0, ie = [], ae = 0;
if ("startRule" in r) {
if (!(r.startRule in a)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
s = a[r.startRule];
}
function se() {
return t.substring(ee, Q);
}
function oe(e) {
return te !== e && (te > e && (te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}), function(e, n, r) {
var i, a;
for (i = n; i < r; i++) "\n" === (a = t.charAt(i)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === a || "\u2028" === a || "\u2029" === a ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(ne, te, e), te = e), ne;
}
function le(e) {
Q < re || (Q > re && (re = Q, ie = []), ie.push(e));
}
function ce(n, r, i) {
var a = oe(i), s = i < t.length ? t.charAt(i) : null;
return null !== r && function(e) {
var t = 1;
for (e.sort(function(e, t) {
return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
}); t < e.length; ) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
}(r), new e(null !== n ? n : function(e, t) {
var n, r = new Array(e.length);
for (n = 0; n < e.length; n++) r[n] = e[n].description;
return "Expected " + (e.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[e.length - 1] : r[0]) + " but " + (t ? '"' + function(e) {
function t(e) {
return e.charCodeAt(0).toString(16).toUpperCase();
}
return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(e) {
return "\\x0" + t(e);
}).replace(/[\x10-\x1F\x80-\xFF]/g, function(e) {
return "\\x" + t(e);
}).replace(/[\u0180-\u0FFF]/g, function(e) {
return "\\u0" + t(e);
}).replace(/[\u1080-\uFFFF]/g, function(e) {
return "\\u" + t(e);
});
}(t) + '"' : "end of input") + " found.";
}(r, s), r, s, i, a.line, a.column);
}
function ue() {
var e, t;
for (e = [], (t = be()) === i && (t = de()) === i && (t = fe()); t !== i; ) e.push(t), 
(t = be()) === i && (t = de()) === i && (t = fe());
return e;
}
function de() {
var e, n, r, a, s;
return e = Q, t.substr(Q, 2) === l ? (n = l, Q += 2) : (n = i, 0 === ae && le(c)), 
n !== i && (r = function e() {
var n, r, a, s;
return n = Q, (r = pe()) !== i ? (124 === t.charCodeAt(Q) ? (a = f, Q++) : (a = i, 
0 === ae && le(g)), a !== i && (s = e()) !== i ? (ee = n, r = m(r, s), n = r) : (Q = n, 
n = o)) : (Q = n, n = o), n === i && (n = Q, (r = pe()) !== i && (ee = n, r = b(r)), 
n = r), n;
}()) !== i ? (t.substr(Q, 2) === u ? (a = u, Q += 2) : (a = i, 0 === ae && le(d)), 
a !== i ? ((s = function() {
var e, n, r;
return e = Q, 58 === t.charCodeAt(Q) ? (n = R, Q++) : (n = i, 0 === ae && le(P)), 
n !== i && (r = ge()) !== i ? (ee = e, n = j(r), e = n) : (Q = e, e = o), e;
}()) === i && (s = p), s !== i ? (ee = e, e = n = h(r, s)) : (Q = e, e = o)) : (Q = e, 
e = o)) : (Q = e, e = o), e;
}
function pe() {
var e, n, r, a, s, l;
if (e = Q, 61 === t.charCodeAt(Q) ? (n = y, Q++) : (n = i, 0 === ae && le(v)), n !== i) {
if (r = [], w.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = i, 0 === ae && le(E)), 
a !== i) for (;a !== i; ) r.push(a), w.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = i, 
0 === ae && le(E)); else r = o;
if (r !== i) if (32 === t.charCodeAt(Q) ? (a = _, Q++) : (a = i, 0 === ae && le(k)), 
a === i && (a = p), a !== i) {
if (s = [], (l = he()) !== i) for (;l !== i; ) s.push(l), l = he(); else s = o;
s !== i ? (ee = e, e = n = A(r, s)) : (Q = e, e = o);
} else Q = e, e = o; else Q = e, e = o;
} else Q = e, e = o;
if (e === i) {
if (e = Q, n = [], (r = he()) !== i) for (;r !== i; ) n.push(r), r = he(); else n = o;
n !== i && (ee = e, n = F()), e = n;
}
return e;
}
function he() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = T, Q++) : (n = i, 0 === ae && le(x)), 
n !== i ? (S.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = i, 0 === ae && le(L)), 
r !== i ? (ee = e, e = n = O(r)) : (Q = e, e = o)) : (Q = e, e = o), e === i && (e = Q, 
n = Q, ae++, 124 === t.charCodeAt(Q) ? (r = f, Q++) : (r = i, 0 === ae && le(g)), 
r === i && (t.substr(Q, 2) === u ? (r = u, Q += 2) : (r = i, 0 === ae && le(d))), 
ae--, r === i ? n = C : (Q = n, n = o), n !== i ? (t.length > Q ? (r = t.charAt(Q), 
Q++) : (r = i, 0 === ae && le(N)), r !== i ? (ee = e, e = n = I()) : (Q = e, e = o)) : (Q = e, 
e = o)), e;
}
function fe() {
var e, n, r, a;
return e = Q, t.substr(Q, 2) === D ? (n = D, Q += 2) : (n = i, 0 === ae && le(M)), 
n !== i && (r = ge()) !== i ? (125 === t.charCodeAt(Q) ? (a = U, Q++) : (a = i, 
0 === ae && le(B)), a !== i ? (ee = e, e = n = $(r)) : (Q = e, e = o)) : (Q = e, 
e = o), e;
}
function ge() {
var e, n, r, a;
if (e = Q, me() !== i) if (46 === t.charCodeAt(Q) ? (n = H, Q++) : (n = i, 0 === ae && le(q)), 
n !== i) {
if (r = [], (a = ge()) !== i) for (;a !== i; ) r.push(a), a = ge(); else r = o;
r !== i ? (ee = e, e = W()) : (Q = e, e = o);
} else Q = e, e = o; else Q = e, e = o;
return e === i && (e = me()), e;
}
function me() {
var e, n, r, a;
if (e = Q, z.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = i, 0 === ae && le(G)), 
n !== i) {
for (r = [], X.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = i, 0 === ae && le(Y)); a !== i; ) r.push(a), 
X.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = i, 0 === ae && le(Y));
r !== i ? (ee = e, e = n = I()) : (Q = e, e = o);
} else Q = e, e = o;
return e;
}
function be() {
var e, t, n, r, a;
if (e = Q, t = [], n = Q, r = Q, ae++, (a = de()) === i && (a = fe()), ae--, a === i ? r = C : (Q = r, 
r = o), r !== i && (a = ye()) !== i ? (ee = n, n = r = K(a)) : (Q = n, n = o), n !== i) for (;n !== i; ) t.push(n), 
n = Q, r = Q, ae++, (a = de()) === i && (a = fe()), ae--, a === i ? r = C : (Q = r, 
r = o), r !== i && (a = ye()) !== i ? (ee = n, n = r = K(a)) : (Q = n, n = o); else t = o;
return t !== i && (ee = e, t = Z(t)), e = t;
}
function ye() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = T, Q++) : (n = i, 0 === ae && le(x)), 
n !== i ? (V.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = i, 0 === ae && le(J)), 
r !== i ? (ee = e, e = n = O(r)) : (Q = e, e = o)) : (Q = e, e = o), e === i && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = i, 0 === ae && le(N))), e;
}
if ((n = s()) !== i && Q === t.length) return n;
throw n !== i && Q < t.length && le({
type: "end",
description: "end of input"
}), ce(null, ie, re);
}
};
}();
},
90: function(e, t, n) {
var r = n(43), i = Object.prototype, a = i.hasOwnProperty, s = i.toString, o = r ? r.toStringTag : void 0;
e.exports = function(e) {
var t = a.call(e, o), n = e[o];
try {
e[o] = void 0;
var r = !0;
} catch (e) {}
var i = s.call(e);
return r && (t ? e[o] = n : delete e[o]), i;
};
},
91: function(e, t) {
var n = Object.prototype.toString;
e.exports = function(e) {
return n.call(e);
};
},
92: function(e, t) {
e.exports = function(e) {
return null != e && "object" == typeof e;
};
}
});
