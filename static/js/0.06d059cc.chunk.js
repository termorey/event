(this.webpackJsonpevent=this.webpackJsonpevent||[]).push([[0,2,7],{16:function(t,e,n){"use strict";n.r(e);var a=n(23),s=n(19),i=n(45),o=n.n(i),u=n(47),c=n(12),l=n(0),r=n.n(l),d=n(52),m=n(7),f=n(41),g=n.n(f),h=n(26),b=n(1),j={audio:new Audio||!1,settings:{defaultMuted:!1,defaultVolume:.2,defaultLoop:!0},set:function(t){t=""+t,""===this.audio.src||null===this.audio.src?(this.audio.src=t,this.audio.volume=this.settings.defaultVolume,this.settings=Object(c.a)(Object(c.a)({},this.settings),{},{volume:this.settings.defaultVolume}),this.audio.loop=this.settings.defaultLoop,this.audio.muted=this.settings.defaultMuted,this.audio.play().catch((function(t){return console.log(t)}))):this.audio.src!==t&&this.update(t).catch()},update:function(){var t=Object(u.a)(o.a.mark((function t(e){var n,a,s,i,u,c,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=function(t){return new Promise((function(e){return setTimeout(e,t)}))},a=600,s=this.audio.volume/(.5*a),i=.5*a-1;case 4:if(!(i>=0)){t.next=12;break}return t.next=7,n(1);case 7:u=this.audio.volume-s,this.audio.volume=u<0?0:u;case 9:i--,t.next=4;break;case 12:this.audio.pause(),this.audio.src=e,this.audio.play().catch(),c=0;case 16:if(!(c<=.5*a-1)){t.next=24;break}return t.next=19,n(1);case 19:l=this.audio.volume+s,this.audio.volume=l<=this.settings.volume?l:this.settings.volume;case 21:c++,t.next=16;break;case 24:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),change:{muted:function(t){j.settings.muted=t,j.audio.muted=t},volume:function(t){j.settings.volume=.01*t,j.audio.volume=.01*t,0===t?this.muted(!0):j.settings.muted&&this.muted(!1),console.log(j.settings)}}},p={video:null,settings:{autoPlay:!0,muted:!0,controls:!1,loop:!0},set:function(t){return Object(b.jsx)("video",{muted:t.muted||this.settings.muted,autoPlay:t.autoPlay||this.settings.autoPlay,controls:t.controls||this.settings.controls,loop:t.loop||this.settings.loop,children:Object(b.jsx)("source",{src:t.src,type:"video/".concat(t.format||"mp4")})})}};e.default=function(t){var e=Object(l.useState)([0]),i=Object(s.a)(e,2),o=i[0],u=i[1],f=Object(l.useState)({}),x=Object(s.a)(f,2),v=x[0],O=x[1],w=Object(l.useState)(null),y=Object(s.a)(w,2),_=y[0],k=y[1],L=Object(l.useState)(null),C=Object(s.a)(L,2),N=C[0],P=C[1],F=function(t){if(h.default[t].answers.buttons){var e=h.default[t].answers.buttons.map((function(t,e){return Object(b.jsx)("button",{onClick:function(){return u([].concat(Object(a.a)(o),[t.target]))},children:t.text},e)}));P(e)}if(h.default[t].answers.input){var n=h.default[t].answers.input,s=function t(e){var s=[Object(b.jsx)("input",{type:"text",onChange:function(e){return t(e.target.value)},autoFocus:!0,defaultValue:e})];n.forEach((function(t){t.answers.includes(e.toLowerCase())&&(s=[].concat(Object(a.a)(s),[Object(b.jsx)("button",{onClick:function(){return u([].concat(Object(a.a)(o),[t.target]))},children:t.text})]))})),void 0!==i&&P(Object(b.jsx)(b.Fragment,{children:s.map((function(t){return t}))}))},i=Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",{type:"text",onChange:function(t){return s(t.target.value)},autoFocus:!0})});P(i)}};Object(l.useEffect)((function(){k(null);var t=o[o.length-1];if(h.default[t].style&&h.default[t].style.backgroundImage&&O(Object(c.a)(Object(c.a)({},v),{},{style:Object(c.a)(Object(c.a)({},v.style),{},{backgroundImage:'url("'.concat(h.default[t].style.backgroundImage,'")')})})),h.default[t].content)if(h.default[t].content.module){console.log(h.default);var e="../../../".concat(h.default[t].content.module.name.toLowerCase()),a=r.a.lazy((function(){return n(48)(e)})),s=Object(c.a)(Object(c.a)({isFinished:!1},h.default[t].content.module.settings),{},{callback:function(){!function(t,e){t[e].content.module=Object(c.a)(Object(c.a)({},t[e].content.module),{},{settings:Object(c.a)(Object(c.a)({},t[e].content.module.settings),{},{isFinished:!0})})}(h.default,t),F(t)}});k(Object(b.jsx)(a,{settings:s}))}else h.default[t].content.media&&(h.default[t].content.media&&h.default[t].content.media.image&&h.default[t].content.media.image.src&&null!==h.default[t].content.media.image.src&&k(Object(b.jsx)("div",{className:g.a.wrapper,children:Object(b.jsx)("img",{src:h.default[t].content.media.image.src,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u043f\u0440\u043e\u0433\u0440\u0443\u0436\u0435\u043d\u043e",title:h.default[t].content.media.image.name?h.default[t].content.media.image.name:null})})),h.default[t].content.media&&h.default[t].content.media.audio&&h.default[t].content.media.audio.src&&null!==h.default[t].content.media.audio.src&&j.set(h.default[t].content.media.audio.src),h.default[t].content.media&&h.default[t].content.media.video&&h.default[t].content.media.video.src&&null!==h.default[t].content.media.video.src&&k(p.set(h.default[t].content.media.video)));h.default[t].answers&&(h.default[t].content&&h.default[t].content.module?P(null):F(t))}),[o]);var I={transition:"opacity ".concat(1500,"ms ease-in-out"),opacity:0},V={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};return Object(b.jsxs)("main",{style:{backgroundImage:v.style&&v.style.backgroundImage&&v.style.backgroundImage},children:[Object(b.jsx)(d.a,{in:_,timeout:1500,children:function(t){return Object(b.jsx)("div",{className:g.a.content,style:Object(c.a)(Object(c.a)({},I),V[t]),children:_&&_})}}),Object(b.jsxs)("div",{className:g.a.cardsList,style:{position:"relative"},children:[h.default[o[o.length-1]].title&&Object(b.jsx)("h3",{children:h.default[o[o.length-1]].title}),h.default[o[o.length-1]].text&&Object(b.jsx)("p",{children:h.default[o[o.length-1]].text}),Object(b.jsxs)("div",{className:g.a.answersList,children:[N,o.length>1&&Object(b.jsx)("button",{onClick:function(){u(o.slice(0,o.length-1))},children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"})]}),Object(b.jsxs)("div",{className:g.a.controls,children:[Object(b.jsx)("a",{href:"".concat(m.a.repo,"/"),children:"\u0414\u043e\u043c\u043e\u0439"}),Object(b.jsxs)("div",{className:g.a.sound,children:[Object(b.jsx)("button",{onClick:function(t){var e=!j.settings.muted;j.change.muted(e)},children:"[no.sound/sound]"}),Object(b.jsx)("input",{type:"range",min:0,max:100,defaultValue:100*j.settings.defaultVolume,title:j.settings.muted?"\u0411\u0435\u0437 \u0437\u0432\u0443\u043a\u0430":"".concat(100*j.settings.volume,"/100"),onChange:function(t){j.change.volume(t.target.value),t.target.title=j.settings.muted?"\u0411\u0435\u0437 \u0437\u0432\u0443\u043a\u0430":"".concat(100*j.settings.volume,"/100")}})]})]})]})]})}},26:function(t,e,n){"use strict";n.r(e);e.default={0:{title:null,text:"\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e, \u0411\u0443\u0440\u0435\u0432\u0435\u0441\u0442\u043d\u0438\u043a! \u0412\u0437\u0433\u043b\u044f\u043d\u0438 \u043d\u0430 \u044d\u0442\u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b. \u041e\u043d\u0438 \u0432\u0441\u0435 \u0432\u0435\u0434\u0443\u0442 \u043d\u0430 \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b-\u043f\u0440\u0438\u043c\u0435\u0440\u044b",style:{},content:{media:{image:{},audio:{}}},answers:{buttons:[{text:"(\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0444\u043e\u043d\u0430)",target:1},{text:"(\u041a\u043e\u043d\u0442\u0435\u043d\u0442-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)",target:2},{text:"(\u041a\u043e\u043d\u0442\u0435\u043d\u0442-\u0430\u0443\u0434\u0438\u043e)",target:3},{text:"(\u041a\u043e\u043d\u0442\u0435\u043d\u0442-\u0432\u0438\u0434\u0435\u043e)",target:4},{text:"(\u041e\u0442\u0432\u0435\u0442 \u0441 \u0432\u0432\u043e\u0434\u043e\u043c)",target:5},{text:"(\u041c\u0438\u043d\u0438\u0433\u0440\u044b: \u043f\u0430\u0437\u043b)",target:6}]}},1:{title:null,text:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0444\u043e\u043d\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0435",style:{backgroundImage:"https://alloder.pro/uploads/monthly_2020_10/_MLwj6qpyM8.jpg.36d77f7f2b8d4f89e14243174814bed8.jpg"},answers:{buttons:[{text:"\u0414\u0430\u043b\u0435\u0435 (\u041a\u043e\u043d\u0442\u0435\u043d\u0442-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)",target:2},{text:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u043d\u0430\u0447\u0430\u043b\u0443",target:0}]}},2:{title:null,text:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0432 \u0432\u0438\u0434\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",content:{media:{image:{name:null,src:"https://allods.mail.ru/media/originals/5fca176200fb0.jpg"}}},answers:{buttons:[{text:"\u0414\u0430\u043b\u0435\u0435 (\u041a\u043e\u043d\u0442\u0435\u043d\u0442-\u0430\u0443\u0434\u0438\u043e)",target:3},{text:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u043d\u0430\u0447\u0430\u043b\u0443",target:0}]}},3:{title:null,text:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0432 \u0432\u0438\u0434\u0435 \u0430\u0443\u0434\u0438\u043e. \u0420\u0435\u0433\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u043a\u0430 \u0433\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0435 :)",content:{media:{audio:{name:null,src:"https://allods.mail.ru/media/mp3/5fc0f0274583f.mp3"}}},answers:{buttons:[{text:"\u0414\u0430\u043b\u0435\u0435 (\u041a\u043e\u043d\u0442\u0435\u043d\u0442-\u0432\u0438\u0434\u0435\u043e)",target:4},{text:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u043d\u0430\u0447\u0430\u043b\u0443",target:0}]}},4:{title:null,text:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0432 \u0432\u0438\u0434\u0435 \u0432\u0438\u0434\u0435\u043e",content:{media:{video:{src:"https://vk.com/doc280095054_615730573?hash=1db79ecef970c96fd0&dl=68d2b9378d067e713d",format:"mp4"}}},answers:{buttons:[{text:"\u0414\u0430\u043b\u0435\u0435 (\u0421\u043e \u0441\u0442\u0440\u043e\u043a\u043e\u0439 \u0432\u0432\u043e\u0434\u0430)",target:5},{text:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u043d\u0430\u0447\u0430\u043b\u0443",target:0}]}},5:{title:null,text:'\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432\u0432\u043e\u0434\u0430 \u0441 \u0437\u0430\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u043c\u0438 \u0438 \u0432\u0435\u0442\u0432\u043b\u0435\u043d\u0438\u0435\u043c. \u041a\u043d\u043e\u043f\u043a\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u043d\u0435 \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u0434\u043e \u0432\u0432\u043e\u0434\u0430 \u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430, \u0440\u0435\u0433\u0438\u0441\u0442\u0440 \u043f\u0440\u0438 \u0432\u0432\u043e\u0434\u0435 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. P.S. \u0412\u0435\u0440\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 "\u0414\u0440\u0430\u043a\u043e\u043d\u044b" \u0438\u043b\u0438 "\u042d\u0434\u0435\u043c" \u0438\u043b\u0438 "\u0421\u0442\u0430\u0440\u0435\u0446" (\u0440\u0435\u0433\u0438\u0441\u0442\u0440 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f)',answers:{buttons:[{text:"\u0414\u0430\u043b\u0435\u0435 (\u041f\u0430\u0437\u043b)",target:6}],input:[{answers:["\u0434\u0440\u0430\u043a\u043e\u043d\u044b","\u0441\u0442\u0430\u0440\u0435\u0446"],text:"\u0414\u0430\u043b\u044c\u0448\u0435 #1",target:0},{answers:["\u044d\u0434\u0435\u043c"],text:"\u0414\u0430\u043b\u044c\u0448\u0435 #2",target:0},{answers:["\u0441\u0442\u0430\u0440\u0435\u0446"],text:"\u0414\u0430\u043b\u044c\u0448\u0435 #3",target:0}]}},6:{title:null,text:"\u0412\u043e\u0437\u043c\u043e\u0436\u0435\u043d \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0432 \u0432\u0438\u0434\u0435 \u043c\u0438\u043d\u0438-\u0438\u0433\u0440",content:{module:{name:"Puzzle",settings:{src:"https://allods.mail.ru/media/originals/5fca168ceae6e.jpg",partsX:3,partsY:3}}},answers:{buttons:[{text:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u043d\u0430\u0447\u0430\u043b\u0443",target:0}],input:[{answers:["\u0444\u0438\u043d\u0430\u043b"],text:"\u041a \u043d\u0430\u0447\u0430\u043b\u0443",target:0}]}}}},41:function(t,e,n){t.exports={content:"event1_content__Nmm5f",wrapper:"event1_wrapper__QnViW",cardsList:"event1_cardsList__3mLMf",answersList:"event1_answersList__21KE6",controls:"event1_controls__2Bm9d",sound:"event1_sound__29R7m"}},48:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=48}}]);
//# sourceMappingURL=0.06d059cc.chunk.js.map