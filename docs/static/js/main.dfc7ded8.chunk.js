(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),a=n.n(r),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategorias,n=Object(c.useState)("Anadir nuevo"),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)}})})},j=n(10),l=n(6),b=n.n(l),p=n(8),d=function(){var t=Object(p.a)(b.a.mark((function t(e){var n,c,r,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=VZiazOpBoPqLFwqjcXfDS60hSXbR9maX"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.id,n=t.title,c=t.url;return console.log(e,n,c),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:c,alt:n}),Object(u.jsx)("p",{children:n})]})},h=function(t){var e=t.category,n=Object(c.useState)([]),r=Object(i.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){d(e).then(s)}),[e]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),Object(u.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(u.jsx)(f,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(c.useState)(["Dragon Ball"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategorias:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(h,{category:t},t)}))})]})},g=(n(17),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))});a.a.render(Object(u.jsx)(O,{}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.dfc7ded8.chunk.js.map