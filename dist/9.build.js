webpackJsonp([9],{20:function(e,t,n){"use strict";function r(e){n(94)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(48),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(96),c=n(37),u=r,d=c(o.a,s.a,!1,u,null,null);t.default=d.exports},34:function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},35:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var t,n,r=document.querySelector("style["+g+'~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(b){var o=p++;r=l||(l=i()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(g,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(36),d={},f=c&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,h=!1,v=function(){},m=null,g="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,i){h=n,m=i||{};var o=u(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=d[a.id];s.refs--,n.push(s)}t?(o=u(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},36:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s=o[1],c=o[2],u=o[3],d={id:e+":"+i,css:s,media:c,sourceMap:u};r[a]?r[a].parts.push(d):n.push(r[a]={id:a,parts:[d]})}return n}},37:function(e,t){e.exports=function(e,t,n,r,i,o){var a,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId=i);var d;if(o?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=d):r&&(d=r),d){var f=u.functional,l=f?u.render:u.beforeCreate;f?(u._injectStyles=d,u.render=function(e,t){return d.call(t),l(e,t)}):u.beforeCreate=l?[].concat(l,d):[d]}return{esModule:a,exports:s,options:u}}},48:function(e,t){e.exports={data:function(){return{scaffoldingJSON:"src/assets/jsons/scaffolding.json",scaffoldingArray:[]}},methods:{getAllPosts:function(){this.$http.get(this.scaffoldingJSON).then(function(e){this.scaffoldingArray=e.data},function(e){})},ruen_check:function(){ruen_status?($(".ru").transition({opacity:0},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),$(".annotation_ru").transition({opacity:0},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),setTimeout(function(){$(".ru").addClass("none"),$(".annotation_ru").addClass("none"),$(".en").removeClass("none"),$(".annotation_en").removeClass("none").transition({opacity:1},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),$(".en").transition({opacity:1},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)")},500)):($(".en").transition({opacity:0},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),$(".annotation_en").transition({opacity:0},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),setTimeout(function(){$(".en").addClass("none"),$(".annotation_en").addClass("none"),$(".ru").removeClass("none"),$(".annotation_ru").removeClass("none").transition({opacity:1},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),$(".ru").transition({opacity:1},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)")},500))}},created:function(){this.getAllPosts(),this.ruen_check()}}},94:function(e,t,n){var r=n(95);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(35)("1aced91c",r,!0,{})},95:function(e,t,n){t=e.exports=n(34)(!1),t.push([e.i,"",""])},96:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"sub-container"},[e._m(0),e._v(" "),e._m(1),n("br"),e._v(" "),e._l(e.scaffoldingArray,function(t,r){return n("div",{key:t.index,attrs:{id:"scaffolding",index:r}},[n("h3",[e._v(e._s(t.title))]),e._v(" "),n("pre",{domProps:{innerHTML:e._s(t.body)}}),e._v(" "),n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}]},[n("img",{attrs:{"data-src":t.img}})])])})],2)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"annotation_ru none",staticStyle:{"text-align":"left",opacity:"0"}},[e._v("Инсталляция «Заповедные леса»\n      "),n("br"),e._v("Совместно с арт-группой Афронт.\nСмешанная техника, 2015г\n      "),n("br"),e._v("Строительные леса – сакральный символ современного Краснодара, города вечной стройки и выборочных реставрационных работ. Забота об архитектурном наследии воспринимается властью только как разменная монета политического популизма, а будущее города исчезает в тесноте возводимых жилищных комплексов и торгово-развлекательных центров. Леса находятся за оградительной лентой как особый музейный экспонат, как запретная зона. Так и горожане ограждены от принятия решений, связанных с существованием и развитием города. Если Краснодар – музей, то его жители либо пассивные зрители, либо спящие гардеробщики. Наша работа напоминает: за лицемерным фасадом казачьего рая скрывается отсутствие прошлого, беспомощность настоящего и невозможность будущего.\n")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"annotation_en",staticStyle:{"text-align":"left"}},[e._v("Installation «Reserved Scaffolding»\n      "),n("br"),e._v("Collaboration with art-group Afront.\nMixed media, 2015\n      "),n("br"),e._v('"Scaffolding is the sacral symbol of modern Krasnodar, the city of eternal construction and selective restoration works. Concern for the architectural heritage is perceived by the authorities only as a bargaining chip of political populism, and the future of the city disappears in the tightness of housing complexes and shopping and entertainment centers. The scaffolding are located behind the fencing tape as a special museum exhibit, as a forbidden zone. The citizens are also protected from making decisions related to the existence and development of the city. If Krasnodar is a museum, its residents are either passive spectators or sleeping wardrobe attendants. Our work reminds us: behind the hypocritical facade of the Cossack paradise is the absence of the past, the helplessness of the present and the impossibility of the future."\n    ')])}],o={render:r,staticRenderFns:i};t.a=o}});
//# sourceMappingURL=9.build.js.map