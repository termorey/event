(this.webpackJsonpevent=this.webpackJsonpevent||[]).push([[0,2,6],{12:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=t[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!e||r.length!==e);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(e);var u=r(0),f=r(35),b=r.n(f),d=r(20),y=r(1);e.default=function(t){var e=s(Object(u.useState)([0]),2),r=e[0],n=e[1],a=s(Object(u.useState)({}),2),l=a[0],i=a[1];return Object(u.useEffect)((function(){d.default[r[r.length-1]].style&&d.default[r[r.length-1]].style.backgroundImage&&i(c(c({},l),{},{style:c(c({},l.style),{},{backgroundImage:'url("'.concat(d.default[r[r.length-1]].style.backgroundImage,'")')})}))}),[r]),Object(y.jsx)("main",{style:{backgroundImage:l.style&&l.style.backgroundImage&&l.style.backgroundImage},children:Object(y.jsxs)("div",{className:b.a.cardsList,style:{position:"relative"},children:[d.default[r[r.length-1]].title&&Object(y.jsx)("h3",{children:d.default[r[r.length-1]].title}),d.default[r[r.length-1]].text&&Object(y.jsx)("p",{children:d.default[r[r.length-1]].text}),Object(y.jsxs)("div",{className:b.a.answersList,children:[d.default[r[r.length-1]].answers.map((function(t,e){return Object(y.jsx)("button",{onClick:function(){n([].concat(o(r),[t.target]))},children:t.text},e)})),r.length>1&&Object(y.jsx)("button",{onClick:function(){n(r.slice(0,r.length-1))},children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"})]}),Object(y.jsx)("a",{href:"/",style:{position:"absolute",bottom:0,left:0},children:"home"})]})})}},20:function(t,e,r){"use strict";r.r(e);e.default={0:{title:null,text:"\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e, \u0411\u0443\u0440\u0435\u0432\u0435\u0441\u0442\u043d\u0438\u043a!",style:{backgroundImage:"https://allods.mail.ru/images/articles/12_0_announce3_1.jpg"},answers:[{text:"\u041f\u0440\u0438\u0432\u0435\u0442!",target:1},{text:"\u0414\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0438!",target:2}]},1:{title:null,text:"\u041f\u0435\u0441\u043a\u0438...",style:{backgroundImage:"https://alloder.pro/uploads/monthly_2020_10/_MLwj6qpyM8.jpg.36d77f7f2b8d4f89e14243174814bed8.jpg"},answers:[{text:"\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044c\u0441\u044f \u0434\u0430\u043b\u044c\u0448\u0435",target:3},{text:"\u041f\u043e\u043f\u0440\u043e\u0449\u0430\u0442\u044c\u0441\u044f",target:2}]},2:{title:null,text:"\u0414\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0438...",answers:[]},3:{title:null,text:"\u041b\u0443\u0447\u0448\u0435 \u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f...",answers:[{text:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u043d\u0430\u0447\u0430\u043b\u0443",target:0}]}}},35:function(t,e,r){t.exports={cardsList:"event1_cardsList__3mLMf",answersList:"event1_answersList__21KE6"}}}]);
//# sourceMappingURL=0.e373356e.chunk.js.map