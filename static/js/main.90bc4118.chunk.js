(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(3),r=n.n(c),o=n(1),u=n(4),i=(n(10),function(e){var t=e.label,n=Object(u.a)(e,["label"]);return l.a.createElement("button",n,t)}),s=(n(11),function(e){var t=e.value;return l.a.createElement("div",{className:"display"},t)});n(12);var b=function(){var e=Object(a.useState)("0"),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),u=Object(o.a)(r,2),b=u[0],m=u[1],f=Object(a.useState)(!1),E=Object(o.a)(f,2),k=E[0],N=E[1],p=Object(a.useState)(""),C=Object(o.a)(p,2),d=C[0],v=C[1];function S(e){var t=parseFloat(n);if(d&&k)v(e);else{if(""!==b||isNaN(t)){if(d){var a=function(e,t,n){return"+"===n?e+t:"-"===n?e-t:"x"===n?e*t:"/"===n?e/t:t}(parseFloat(b),t,d);a=parseFloat(a.toFixed(7)),String(a).length>8?c("ERR"):(c(String(a)),m(String(a)))}}else m(String(t));N(!0),v(e)}}function g(e){!0===k?(c(e),N(!1)):"0"===n?c(e):n.length<8&&c(n+e)}return l.a.createElement("div",{className:"calculator"},l.a.createElement(s,{value:n}),l.a.createElement(i,{className:"button dark",label:"C",onClick:function(){d&&k?(v(""),N(!1),c(b)):c("0")}}),l.a.createElement(i,{className:"button dark",label:"AC",onClick:function(){c("0"),m(""),N(!1),v("")}}),l.a.createElement(i,{className:"button dark",label:"+/-",onClick:function(){var e=-1*parseFloat(n);c(String(e))}}),l.a.createElement(i,{className:"button operation",label:"/",onClick:function(){return S("/")}}),l.a.createElement(i,{className:"button",label:"7",onClick:function(){return g("7")}}),l.a.createElement(i,{className:"button",label:"8",onClick:function(){return g("8")}}),l.a.createElement(i,{className:"button",label:"9",onClick:function(){return g("9")}}),l.a.createElement(i,{className:"button operation",label:"x",onClick:function(){return S("x")}}),l.a.createElement(i,{className:"button",label:"4",onClick:function(){return g("4")}}),l.a.createElement(i,{className:"button",label:"5",onClick:function(){return g("5")}}),l.a.createElement(i,{className:"button",label:"6",onClick:function(){return g("6")}}),l.a.createElement(i,{className:"button operation",label:"-",onClick:function(){return S("-")}}),l.a.createElement(i,{className:"button",label:"1",onClick:function(){return g("1")}}),l.a.createElement(i,{className:"button",label:"2",onClick:function(){return g("2")}}),l.a.createElement(i,{className:"button",label:"3",onClick:function(){return g("3")}}),l.a.createElement(i,{className:"button operation",label:"+",onClick:function(){return S("+")}}),l.a.createElement(i,{className:"button double",label:"0",onClick:function(){return g("0")}}),l.a.createElement(i,{className:"button",label:".",onClick:function(){n.includes(".")||c(n+".")}}),l.a.createElement(i,{className:"button operation",label:"=",onClick:function(){return S("=")}}))};n(13);var m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Calculator App"),l.a.createElement(b,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.90bc4118.chunk.js.map