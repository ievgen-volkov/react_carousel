(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(8),s=n.n(a),i=n(2),r=n(3),c=n(5),l=n(4),o=n(1),m=n.n(o),p=n(7),u=n.n(p),g=(n(13),n(0)),h=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={scroll:0},t.prevHandler=function(){var e=t.props,n=e.itemWidth*e.step;t.setState((function(t){return{scroll:t.scroll+n<0?t.scroll+n:0}}))},t.nextHandler=function(){var e=t.props,n=e.images,a=e.itemWidth,s=e.step,i=a*s,r=-a*(n.length-s);t.setState((function(t){return{scroll:t.scroll-i>r?t.scroll-i:r}}))},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.images,n=t.step,a=t.itemWidth,s=t.frameSize,i=t.animationDuration,r=this.state.scroll,c=a*s,l=-a*(e.length-n);return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"container",style:{width:c},children:[Object(g.jsx)("button",{className:u()("btn btn-prev",{disabled:!r}),type:"button",onClick:this.prevHandler,children:"-"}),Object(g.jsx)("div",{className:"carousel",style:{width:c},children:Object(g.jsx)("ul",{className:"carousel__list",style:{marginLeft:"".concat(r,"px"),transition:"margin-left ".concat(i,"ms ease")},children:e.map((function(t){return Object(g.jsx)("li",{children:Object(g.jsx)("img",{className:"carousel__list-item",src:t,alt:"smiley",style:{width:a}})},e.indexOf(t))}))})}),Object(g.jsx)("button",{className:u()("btn btn-next",{disabled:r===l}),type:"button",onClick:this.nextHandler,children:"+"})]})})}}]),n}(m.a.Component),d=(n(15),function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state.images;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("h1",{className:"App__title",children:["Carousel with ",t.length," images"]}),Object(g.jsx)(h,{images:t,step:3,frameSize:3,itemWidth:130,animationDuration:1e3})]})}}]),n}(m.a.Component)),b=d;s.a.render(Object(g.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d3e27a75.chunk.js.map