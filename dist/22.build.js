webpackJsonp([22],{130:function(e,n,t){var r=t(131);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(35)("66bafabc",r,!0,{})},131:function(e,n,t){n=e.exports=t(34)(!1),n.push([e.i,"",""])},132:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("div",{staticClass:"sub-container"},[t("pre",{staticClass:"annotation_ru none",staticStyle:{"text-align":"left",opacity:"0"}},[e._v("Эта серия фотографий ставит своей целью найти в довольно прозаических вещах и пейзажах какую-то новую информацию и, возможно, превратить повседневность в своего рода увлечение.\n\n")]),e._v(" "),t("pre",{staticClass:"annotation_en",staticStyle:{"text-align":"left"}},[e._v("This series of photos aims to find some new information in rather prosaic things and landscapes and, perhaps, to turn everyday life into a kind of hobby.\n\n")]),t("br"),e._v(" "),e._l(e.another_viewArray,function(n,r){return t("div",{key:n.index,attrs:{id:"another_view",index:r}},[t("h3",[e._v(e._s(n.title))]),e._v(" "),t("pre",{domProps:{innerHTML:e._s(n.body)}}),e._v(" "),t("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}]},[t("img",{attrs:{"data-src":n.img}})])])})],2)])},i=[],o={render:r,staticRenderFns:i};n.a=o},32:function(e,n,t){"use strict";function r(e){t(130)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(60),o=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);var s=t(132),c=t(37),u=r,d=c(o.a,s.a,!1,u,null,null);n.default=d.exports},34:function(e,n){function t(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var o=r(i);return[t].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[t].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=t(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},35:function(e,n,t){function r(e){for(var n=0;n<e.length;n++){var t=e[n],r=d[t.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](t.parts[i]);for(;i<t.parts.length;i++)r.parts.push(o(t.parts[i]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{for(var a=[],i=0;i<t.parts.length;i++)a.push(o(t.parts[i]));d[t.id]={id:t.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var n,t,r=document.querySelector("style["+_+'~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(y){var o=p++;r=l||(l=i()),n=a.bind(null,r,o,!1),t=a.bind(null,r,o,!0)}else r=i(),n=s.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}function a(e,n,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function s(e,n){var t=n.css,r=n.media,i=n.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(_,n.id),i&&(t+="\n/*# sourceURL="+i.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=t(36),d={},f=c&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,v=!1,h=function(){},m=null,_="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,n,t,i){v=t,m=i||{};var o=u(e,n);return r(o),function(n){for(var t=[],i=0;i<o.length;i++){var a=o[i],s=d[a.id];s.refs--,t.push(s)}n?(o=u(e,n),r(o)):o=[];for(var i=0;i<t.length;i++){var s=t[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var b=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},36:function(e,n){e.exports=function(e,n){for(var t=[],r={},i=0;i<n.length;i++){var o=n[i],a=o[0],s=o[1],c=o[2],u=o[3],d={id:e+":"+i,css:s,media:c,sourceMap:u};r[a]?r[a].parts.push(d):t.push(r[a]={id:a,parts:[d]})}return t}},37:function(e,n){e.exports=function(e,n,t,r,i,o){var a,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,s=e.default);var u="function"==typeof s?s.options:s;n&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns,u._compiled=!0),t&&(u.functional=!0),i&&(u._scopeId=i);var d;if(o?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=d):r&&(d=r),d){var f=u.functional,l=f?u.render:u.beforeCreate;f?(u._injectStyles=d,u.render=function(e,n){return d.call(n),l(e,n)}):u.beforeCreate=l?[].concat(l,d):[d]}return{esModule:a,exports:s,options:u}}},60:function(e,n){e.exports={data:function(){return{another_viewJSON:"src/assets/jsons/another_view.json",another_viewArray:[]}},methods:{getAllPosts:function(){this.$http.get(this.another_viewJSON).then(function(e){this.another_viewArray=e.data},function(e){})},ruen_check:function(){ruen_status?($(".ru").transition({opacity:0},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),$(".annotation_ru").transition({opacity:0},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),setTimeout(function(){$(".ru").addClass("none"),$(".annotation_ru").addClass("none"),$(".en").removeClass("none"),$(".annotation_en").removeClass("none").transition({opacity:1},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),$(".en").transition({opacity:1},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)")},500)):($(".en").transition({opacity:0},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),$(".annotation_en").transition({opacity:0},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),setTimeout(function(){$(".en").addClass("none"),$(".annotation_en").addClass("none"),$(".ru").removeClass("none"),$(".annotation_ru").removeClass("none").transition({opacity:1},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)"),$(".ru").transition({opacity:1},500,"cubic-bezier(0.6, 0.04, 0.98, 0.335)")},500))}},created:function(){this.getAllPosts(),this.ruen_check()}}}});
//# sourceMappingURL=22.build.js.map