webpackJsonp([13],{21:function(e,t,n){"use strict";function r(e){n(97)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(49),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var s=n(99),u=n(37),c=r,l=u(a.a,s.a,!1,c,null,null);t.default=l.exports},34:function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},35:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(a(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function a(e){var t,n,r=document.querySelector("style["+m+'~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(b){var a=p++;r=f||(f=o()),t=i.bind(null,r,a,!1),n=i.bind(null,r,a,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),_.ssrId&&e.setAttribute(m,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(36),l={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},_=null,m="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){h=n,_=o||{};var a=c(e,t);return r(a),function(t){for(var n=[],o=0;o<a.length;o++){var i=a[o],s=l[i.id];s.refs--,n.push(s)}t?(a=c(e,t),r(a)):a=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},36:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s=a[1],u=a[2],c=a[3],l={id:e+":"+o,css:s,media:u,sourceMap:c};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}},37:function(e,t){e.exports=function(e,t,n,r,o,a){var i,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var l;if(a?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=r),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:i,exports:s,options:c}}},49:function(e,t){e.exports={data:function(){return{migrant_workers_under_protectionJSON:"src/assets/jsons/migrant_workers_under_protection.json",migrant_workers_under_protectionArray:[]}},methods:{getAllPosts:function(){this.$http.get(this.migrant_workers_under_protectionJSON).then(function(e){this.migrant_workers_under_protectionArray=e.data},function(e){})},ruen_check:function(){ruen_status?($(".ru").transition({opacity:0},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),$(".annotation_ru").transition({opacity:0},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),setTimeout(function(){$(".ru").addClass("none"),$(".annotation_ru").addClass("none"),$(".en").removeClass("none"),$(".annotation_en").removeClass("none").transition({opacity:1},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),$(".en").transition({opacity:1},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)")},500)):($(".en").transition({opacity:0},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),$(".annotation_en").transition({opacity:0},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),setTimeout(function(){$(".en").addClass("none"),$(".annotation_en").addClass("none"),$(".ru").removeClass("none"),$(".annotation_ru").removeClass("none").transition({opacity:1},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),$(".ru").transition({opacity:1},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)")},500))}},created:function(){this.getAllPosts(),this.ruen_check()}}},97:function(e,t,n){var r=n(98);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(35)("db0a7454",r,!0,{})},98:function(e,t,n){t=e.exports=n(34)(!1),t.push([e.i,"",""])},99:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"sub-container"},[e._m(0),e._v(" "),e._m(1),n("br"),e._v(" "),e._l(e.migrant_workers_under_protectionArray,function(t,r){return n("div",{key:t.index,attrs:{id:"migrant_workers_under_protection",index:r}},[n("h3",[e._v(e._s(t.title))]),e._v(" "),n("pre",{domProps:{innerHTML:e._s(t.body)}}),e._v(" "),n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}]},[n("img",{attrs:{"data-src":t.img}})])])})],2)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"annotation_ru none",staticStyle:{"text-align":"left",opacity:"0"}},[e._v("Серия мемориальных табличек «Гастарбайтеры под защитой»\n      "),n("br"),e._v("Совместно с арт-группой Афронт.\nСмешанная техника, 2015г\n      "),n("br"),e._v('"В начале XXI века Краснодар сбрасывает оковы одноэтажной застройки и превращается в современный город. Но, к сожалению, вся благодарность за построение дивного нового юга достается руководителям компаний-застройщиков, а имена настоящих героев помнят лишь безмолвные сваи. Проектом "Гастарбайтеры под защитой" мы хотим не только увековечить труд действительных строителей кубанского благополучия, но и подчеркнуть, что в этом мире все мы гости (от нем. Gastarbeiter – гость-работник)"\n      '),n("br"),n("a",{attrs:{id:"none",target:"_blank",href:"http://vku-org.nichost.ru/press/2880-na-krasnodarskih-novostroykah-ustanovili-tablichki-s-blagodarnostyami-gastarbayteram.html"}},[e._v("Всемирный конгресс узбеков и узбекистанцев")]),e._v(" выразил благодарность проекту «Гастарбайтеры под защитой».\n    ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"annotation_en",staticStyle:{"text-align":"left"}},[e._v("A series of memorial plaques «Gastarbeiters Under Protection»\n      "),n("br"),e._v("Collaboration with art-group Afront.\nMixed media, 2015\n      "),n("br"),e._v('"At the beginning of the XXI century Krasnodar unleashes the shackles of one-storey buildings and turns into a modern city. But, unfortunately, all gratitude for the construction of a wonderful new south goes to the heads of development companies, and the names of the real heroes remember only silent piles. With the project "Gastarbeiters under protection" we want not only to perpetuate the work of real builders of the Kuban welfare, but also to emphasize that in this world we are all guests (Gastarbeiter - guest worker)"\n      '),n("br"),n("a",{attrs:{id:"none",target:"_blank",href:"http://vku-org.nichost.ru/press/2880-na-krasnodarskih-novostroykah-ustanovili-tablichki-s-blagodarnostyami-gastarbayteram.html"}},[e._v("The World Congress of Uzbeks")]),e._v(" expressed gratitude to the Gastarbeiters Under Protection Project.\n    ")])}],a={render:r,staticRenderFns:o};t.a=a}});
//# sourceMappingURL=13.build.js.map