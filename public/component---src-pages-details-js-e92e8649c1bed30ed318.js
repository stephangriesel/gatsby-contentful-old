(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7oih":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),o=n("3ti5"),u=n.n(o),c=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:u.a.menu},r.a.createElement("li",null,r.a.createElement(l.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/blog/"},"Blog")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/tours/"},"Tours")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/contact/"},"Contact"))))};n("Vpue"),t.a=function(e){var t=e.children;return console.log(t),r.a.createElement("div",{className:"wrapper"},r.a.createElement(c,null),r.a.createElement("main",null,t))}},RqId:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));n("f3/d"),n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var a=n("q1tI"),r=n.n(a),l=n("+ZDr"),o=n("7oih");function u(){var e,t=r.a.useState({}),n=t[0],a=t[1],u=function(e){var t;a(Object.assign({},n,((t={})[e.target.name]=e.target.value,t)))};return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Booking - Details"),r.a.createElement("form",{name:"booking",method:"post",action:"/book/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:function(e){e.preventDefault();var t,a=e.target;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":a.getAttribute("name")},n),Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){return Object(l.navigate)(a.getAttribute("action"))})).catch((function(e){return alert(e)}))}},r.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),r.a.createElement("p",{hidden:!0},r.a.createElement("label",null,"Don’t fill this out: ",r.a.createElement("input",{name:"bot-field",onChange:u}))),r.a.createElement("p",null,r.a.createElement("input",{type:"text",placeholder:"Your Full Name",name:"name",onChange:u})),r.a.createElement("p",null,r.a.createElement("input",{type:"email",placeholder:"Your Email Address",name:"email",onChange:u})),r.a.createElement("p",null,r.a.createElement("input",((e={name:"text",placeholder:"Your Contact Number"}).name="contact-number",e.onChange=u,e))),r.a.createElement("p",null,r.a.createElement("button",{type:"submit"},"Confirm & Pay"))))}},Wbzz:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n("q1tI"),r=n.n(a),l=n("+ZDr"),o=n.n(l);n.d(t,"a",(function(){return o.a}));n("lw3w"),n("emEt").default.enqueue;var u=r.a.createContext({});function c(e){var t=e.staticQueryData,n=e.data,a=e.query,l=e.render,o=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,o&&l(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var i=function(e){var t=e.data,n=e.query,a=e.render,l=e.children;return r.a.createElement(u.Consumer,null,(function(e){return r.a.createElement(c,{data:t,query:n,render:a||l,staticQueryData:e})}))}},lw3w:function(e,t,n){var a;e.exports=(a=n("rzlk"))&&a.default||a},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var a=n("q1tI"),r=n.n(a),l=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null}}}]);
//# sourceMappingURL=component---src-pages-details-js-e92e8649c1bed30ed318.js.map