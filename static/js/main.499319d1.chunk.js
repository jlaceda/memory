(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){var r={"./1.jpg":17,"./2.jpg":18,"./3.jpg":19,"./4.jpg":20,"./5.jpg":21,"./6.jpg":22,"./7.jpg":23,"./8.jpg":24,"./9.jpg":25};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=16},function(e,t,n){e.exports=n.p+"static/media/1.90af1a46.jpg"},function(e,t,n){e.exports=n.p+"static/media/2.a33fb126.jpg"},function(e,t,n){e.exports=n.p+"static/media/3.05704fbd.jpg"},function(e,t,n){e.exports=n.p+"static/media/4.abca8d63.jpg"},function(e,t,n){e.exports=n.p+"static/media/5.3ee2dde4.jpg"},function(e,t,n){e.exports=n.p+"static/media/6.0b9da4ff.jpg"},function(e,t,n){e.exports=n.p+"static/media/7.42c231fd.jpg"},function(e,t,n){e.exports=n.p+"static/media/8.22e785de.jpg"},function(e,t,n){e.exports=n.p+"static/media/9.5087e001.jpg"},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=(n(14),n(15),n(3)),s=n(4),l=n(6),p=n(5),u=n(7);var d=function(e){return o.a.createElement("div",null,o.a.createElement("img",{style:{width:"180px"},onClick:e.onClick,alt:e.name,src:e.image}))};var f=function(e){return o.a.createElement("div",null,o.a.createElement("h2",null,"Score: ",e.score," Top Score: ",e.topScore))},m=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={order:["1","2","3","4","5","6","7","8","9"],selected:[],score:0,topScore:0},n.componentDidMount=function(){var e=n.shuffle(n.state.order);n.setState({order:e})},n.imageClickHandler=function(e){var t=n.state,r=e.target.alt;t.topScore<t.score&&(t.topScore=t.score),t.selected.includes(r)?(t.score=0,t.selected=[]):(t.selected.push(r),t.score++),t.order=n.shuffle(t.order),n.setState(t)},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"shuffle",value:function(e){function t(e,t,n){var r=n[e];n[e]=n[t],n[t]=r}for(var n=e,r=n.length,o=0;o<r;o++){t(o,Math.floor(Math.random()*Math.floor(r)),n)}return n}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(f,{score:this.state.score,topScore:this.state.topScore}),o.a.createElement("div",{className:"container",style:{display:"flex",flex:1,flexDirection:"row",flexWrap:"wrap",width:"600px"}},this.state.order.map(function(t){return o.a.createElement(d,{key:t,onClick:e.imageClickHandler,name:t,image:n(16)("./".concat(t,".jpg"))})})))}}]),t}(o.a.Component);var g=function(){return o.a.createElement(m,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.499319d1.chunk.js.map