(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7oih":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),u=n("3ti5"),o=n.n(u),c=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:o.a.menu},r.a.createElement("li",null,r.a.createElement(l.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/tours/"},"Tours")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/contact/"},"Contact"))))};n("Vpue"),t.a=function(e){var t=e.children;return console.log(t),r.a.createElement("div",{className:"wrapper"},r.a.createElement(c,null),r.a.createElement("main",null,t))}},JQ6S:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("7oih"),u=n("NdZL"),o=n("Wbzz"),c=(n("f3/d"),n("Z5Y2")),i=n.n(c),d=function(e){var t=e.skus,n=e.product,l=(e.image,Object(a.useState)(null)),u=l[0],o=l[1];Object(a.useEffect)((function(){void 0!==typeof window&&void 0!==typeof window.Stripe&&o(window.Stripe("pk_test_0YrxQwmNNGDUZRyPodLhhxZS00ORZk6ilr"))}),[]);var c=Object(a.useState)(t[0].node.id),d=c[0],s=c[1];return r.a.createElement("article",{class:i.a.booking},r.a.createElement("h3",{class:i.a.productName},n.name),r.a.createElement("select",{value:d,onChange:function(e){return s(e.target.value)}},t.map((function(e){return r.a.createElement("option",{key:e.node.id,value:e.node.id},e.node.attributes.name)}))),r.a.createElement("button",{class:i.a.btn,onClick:function(){u.redirectToCheckout({items:[{sku:d,quantity:1}],successUrl:"http://localhost:8000/success",cancelUrl:"http://localhost:8000/cancel"})}},"Book My Spot"))},s=function(){return r.a.createElement(o.b,{query:"1241653712",render:function(e){var t=e.allStripeSku;return e.allStripeProduct.edges.map((function(e){var n=t.edges.filter((function(t){return t.node.product.id===e.node.id}));console.log(n);var a=n.filter((function(e){return e.node.image})),l=a.length>0?a[0].node.image:"";return console.log(l),r.a.createElement(d,{key:e.node.id,skus:n,product:e.node,image:l})}))},data:u})},m=function(){return r.a.createElement("div",null,r.a.createElement(s,null))};t.default=function(){return r.a.createElement(l.a,null,r.a.createElement("h1",null,"Booking Page"),r.a.createElement(m,null))}},NdZL:function(e){e.exports=JSON.parse('{"data":{"allStripeSku":{"edges":[{"node":{"product":{"name":"Texel Tour","id":"prod_GjFaxRIfVHd2Qe"},"id":"sku_GjFaPQIt23teWd","attributes":{"name":"Texel Tour"},"price":2000,"image":"https://files.stripe.com/links/fl_test_xSVedsbq7AThzluwIjdwuxzZ"}}]},"allStripeProduct":{"edges":[{"node":{"name":"Texel Tour","id":"prod_GjFaxRIfVHd2Qe"}}]}}}')},Wbzz:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n("q1tI"),r=n.n(a),l=n("+ZDr"),u=n.n(l);n.d(t,"a",(function(){return u.a}));n("lw3w"),n("emEt").default.enqueue;var o=r.a.createContext({});function c(e){var t=e.staticQueryData,n=e.data,a=e.query,l=e.render,u=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,u&&l(u),!u&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var i=function(e){var t=e.data,n=e.query,a=e.render,l=e.children;return r.a.createElement(o.Consumer,null,(function(e){return r.a.createElement(c,{data:t,query:n,render:a||l,staticQueryData:e})}))}},lw3w:function(e,t,n){var a;e.exports=(a=n("rzlk"))&&a.default||a},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var a=n("q1tI"),r=n.n(a),l=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null}}}]);
//# sourceMappingURL=component---src-pages-book-js-f9ab5b5cf548b6505970.js.map