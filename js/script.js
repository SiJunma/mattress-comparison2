function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var n,e;if(n=this,e=function(){"use strict";var n={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,DESTROYED:5};function e(t){t.length=0}function i(t){return!u(t)&&"object"==typeof t}function o(t){return Array.isArray(t)}function r(t){return"string"==typeof t}function s(t){return void 0===t}function u(t){return null===t}function a(t){return t instanceof HTMLElement}function c(t){return o(t)?t:[t]}function l(t,n){c(t).forEach(n)}function d(t,n){return t.indexOf(n)>-1}function f(t,n){return t.push.apply(t,c(n)),t}var p=Array.prototype;function v(t,n,e){return p.slice.call(t,n,e)}function h(t,n,e){t&&l(n,(function(n){n&&t.classList[e?"add":"remove"](n)}))}function g(t,n){h(t,r(n)?n.split(" "):n,!0)}function m(t,n){l(n,t.appendChild.bind(t))}function y(t,n){l(t,(function(t){var e=n.parentNode;e&&e.insertBefore(t,n)}))}function b(t,n){return a(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function _(t,n){return t?v(t.children).filter((function(t){return b(t,n)})):[]}function x(t,n){return n?_(t,n)[0]:t.firstElementChild}function w(t,n,e){if(t){var i=Object.keys(t);i=e?i.reverse():i;for(var o=0;o<i.length;o++){var r=i[o];if("__proto__"!==r&&!1===n(t[r],r))break}}return t}function E(t){return v(arguments,1).forEach((function(n){w(n,(function(e,i){t[i]=n[i]}))})),t}function S(t,n){return w(n,(function(n,e){o(n)?t[e]=n.slice():i(n)?t[e]=S(i(t[e])?t[e]:{},n):t[e]=n})),t}function k(t,n){t&&l(n,(function(n){t.removeAttribute(n)}))}function P(t,n,e){i(n)?w(n,(function(n,e){P(t,e,n)})):u(e)?k(t,n):t.setAttribute(n,String(e))}function L(t,n,e){var i=document.createElement(t);return n&&(r(n)?g(i,n):P(i,n)),e&&m(e,i),i}function A(t,n,e){if(s(e))return getComputedStyle(t)[n];if(!u(e)){var i=t.style;e=""+e,i[n]!==e&&(i[n]=e)}}function z(t,n){A(t,"display",n)}function C(t,n){return t.getAttribute(n)}function D(t,n){return t&&t.classList.contains(n)}function M(t){return t.getBoundingClientRect()}function T(t){l(t,(function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}))}function I(t){return x((new DOMParser).parseFromString(t,"text/html").body)}function O(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function N(t,n){return t&&t.querySelector(n)}function W(t,n){return v(t.querySelectorAll(n))}function F(t,n){h(t,n,!1)}function R(t){return r(t)?t:t?t+"px":""}function j(t,n){if(void 0===n&&(n=""),!t)throw new Error("[splide] "+n)}function q(t){setTimeout(t)}var B=function(){};function X(t){return requestAnimationFrame(t)}var H=Math.min,Y=Math.max,G=Math.floor,Q=Math.ceil,U=Math.abs;function J(t,n,e,i){var o=H(n,e),r=Y(n,e);return i?o<t&&t<r:o<=t&&t<=r}function K(t,n,e){var i=H(n,e),o=Y(n,e);return H(Y(i,t),o)}function V(t){return+(t>0)-+(t<0)}function Z(t,n){return l(n,(function(n){t=t.replace("%s",""+n)})),t}function $(t){return t<10?"0"+t:""+t}var tt={};function nt(t){var n=t.event,e={},i=[];function o(t,n,e){r(t,n,(function(t,n){i=i.filter((function(i){return!!(i[0]!==t||i[1]!==n||e&&i[2]!==e)||(t.removeEventListener(n,i[2],i[3]),!1)}))}))}function r(t,n,e){l(t,(function(t){t&&n.split(" ").forEach(e.bind(null,t))}))}function s(){i=i.filter((function(t){return o(t[0],t[1])})),n.offBy(e)}return n.on("destroy",s,e),{on:function(t,i,o){n.on(t,i,e,o)},off:function(t){n.off(t,e)},emit:n.emit,bind:function(t,n,e,o){r(t,n,(function(t,n){i.push([t,n,e,o]),t.addEventListener(n,e,o)}))},unbind:o,destroy:s}}function et(t,n,e,i){var o,r,s=Date.now,u=0,a=!0,c=0;function l(){if(!a){var r=s()-o;if(r>=t?(u=1,o=s()):u=r/t,e&&e(u),1===u&&(n(),i&&++c>=i))return d();X(l)}}function d(){a=!0}function f(){cancelAnimationFrame(r),u=0,r=0,a=!0}return{start:function(n){!n&&f(),o=s()-(n?u*t:0),a=!1,X(l)},rewind:function(){o=s(),u=0,e&&e(u)},pause:d,cancel:f,set:function(n){t=n},isPaused:function(){return a}}}function it(t,n){var e;return function(){var i=arguments,o=this;e||(e=et(n||0,(function(){t.apply(o,i),e=null}),null,1)).start()}}var ot={marginRight:["marginBottom","marginLeft"],autoWidth:["autoHeight"],fixedWidth:["fixedHeight"],paddingLeft:["paddingTop","paddingRight"],paddingRight:["paddingBottom","paddingLeft"],width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]},rt=["is-active","is-visible","is-prev","is-next","is-loading"],st={slide:"splide__slide",clone:"splide__slide--clone",arrows:"splide__arrows",arrow:"splide__arrow",prev:"splide__arrow--prev",next:"splide__arrow--next",pagination:"splide__pagination",page:"splide__pagination__page",spinner:"splide__spinner"},ut=["role","aria-controls","aria-current","aria-label","aria-hidden","aria-orientation","tabindex","disabled"];function at(t,n,e,i){var o,r=nt(t),s=r.on,u=r.emit,a=r.bind,c=r.destroy,l=t.Components,d=t.root,f=t.options,p=f.isNavigation,v=f.updateOnMove,g=l.Direction.resolve,m=C(i,"style"),y=e>-1,b=x(i,".splide__slide__container"),_=f.focusableNodes&&W(i,f.focusableNodes);function w(){var o=y?e:n,r=Z(f.i18n.slideX,o+1),s=t.splides.map((function(t){return t.splide.root.id})).join(" ");P(i,"aria-label",r),P(i,"aria-controls",s),P(i,"role","menuitem"),L(z())}function E(){o||S()}function S(){if(!o){var e=t.index;L(z()),r=function(){if(t.is("fade"))return z();var n=M(l.Elements.track),e=M(i),o=g("left"),r=g("right");return G(n[o])<=Q(e[o])&&G(e[r])<=Q(n[r])}(),s=!r&&(!z()||y),P(i,"aria-hidden",s||null),P(i,"tabindex",!s&&f.slideFocus?0:null),_&&_.forEach((function(t){P(t,"tabindex",s?-1:null)})),r!==D(i,"is-visible")&&(h(i,"is-visible",r),u(r?"visible":"hidden",T)),h(i,"is-prev",n===e-1),h(i,"is-next",n===e+1)}var r,s}function L(t){t!==D(i,"is-active")&&(h(i,"is-active",t),p&&P(i,"aria-current",t||null),u(t?"active":"inactive",T))}function z(){var i=t.index;return i===n||f.cloneStatus&&i===e}var T={index:n,slideIndex:e,slide:i,container:b,isClone:y,mount:function(){y||(i.id=d.id+"-slide"+$(n+1)),a(i,"click keydown",(function(t){u("click"===t.type?"click":"slide:keydown",T,t)})),s(["refresh","repositioned","shifted","moved","scrolled"],S),s("navigation:mounted",w),v&&s("move",E)},destroy:function(){o=!0,c(),F(i,rt),k(i,ut),P(i,"style",m)},update:S,style:function(t,n,e){A(e&&b||i,t,n)},isWithin:function(e,i){var o=U(e-n);return y||!f.rewind&&!t.is("loop")||(o=H(o,t.length-o)),o<=i}};return T}var ct={passive:!1,capture:!0},lt=["Left","Right","Up","Down"],dt=[" ","Enter","Spacebar"],ft=Object.freeze({__proto__:null,Options:function(t,n,e){var i,o,r,s=it(a);function u(t){t&&removeEventListener("resize",s)}function a(){var n,s,a,c=(n=function(t){return t[1].matches},v(o).filter(n)[0]||[]);c[0]!==r&&(s=r=c[0],(a=e.breakpoints[s]||i).destroy?(t.options=i,t.destroy("completely"===a.destroy)):(t.state.is(5)&&(u(!0),t.mount()),t.options=a))}return{setup:function(){try{S(e,JSON.parse(C(t.root,"data-splide")))}catch(t){j(!1,t.message)}i=S({},e);var n=e.breakpoints;if(n){var r="min"===e.mediaQuery;o=Object.keys(n).sort((function(t,n){return r?+n-+t:+t-+n})).map((function(t){return[t,matchMedia("("+(r?"min":"max")+"-width:"+t+"px)")]})),a()}},mount:function(){o&&addEventListener("resize",s)},destroy:u}},Direction:function(t,n,e){return{resolve:function(t,n){var i=e.direction;return ot[t]["rtl"!==i||n?"ttb"===i?0:-1:1]||t},orient:function(t){return t*("rtl"===e.direction?1:-1)}}},Elements:function(t,n,i){var o,r,s,u,a=nt(t).on,c=t.root,l={},d=[];function p(){var t,n;!function(){r=x(c,".splide__slider"),s=N(c,".splide__track"),u=x(s,".splide__list"),j(s&&u,"A track/list element is missing."),f(d,_(u,".splide__slide:not(.splide__slide--clone)"));var t=y(".splide__autoplay"),n=y(".splide__arrows");E(l,{root:c,slider:r,track:s,list:u,slides:d,arrows:n,autoplay:t,prev:N(n,".splide__arrow--prev"),next:N(n,".splide__arrow--next"),bar:N(y(".splide__progress"),".splide__progress__bar"),play:N(t,".splide__play"),pause:N(t,".splide__pause")})}(),t=c.id||(n="splide")+$(tt[n]=(tt[n]||0)+1),c.id=t,s.id=s.id||t+"-track",u.id=u.id||t+"-list",g(c,o=b())}function v(){[c,s,u].forEach((function(t){k(t,"style")})),e(d),F(c,o)}function h(){v(),p()}function m(){F(c,o),g(c,o=b())}function y(t){return x(c,t)||x(r,t)}function b(){return["splide--"+i.type,"splide--"+i.direction,i.drag&&"splide--draggable",i.isNavigation&&"splide--nav","is-active"]}return E(l,{setup:p,mount:function(){a("refresh",h,8),a("updated",m)},destroy:v})},Slides:function(t,n,i){var o=nt(t),s=o.on,u=o.emit,f=o.bind,p=n.Elements,v=p.slides,h=p.list,_=[];function x(){v.forEach((function(t,n){S(t,n,-1)}))}function w(){P((function(t){t.destroy()})),e(_)}function E(){w(),x()}function S(n,e,i){var o=at(t,e,i,n);o.mount(),_.push(o)}function k(t){return t?L((function(t){return!t.isClone})):_}function P(t,n){k(n).forEach(t)}function L(t){return _.filter("function"==typeof t?t:function(n){return r(t)?b(n.slide,t):d(c(t),n.index)})}return{mount:function(){x(),s("refresh",E),s(["mounted","refresh"],(function(){_.sort((function(t,n){return t.index-n.index}))}))},destroy:w,update:function(){P((function(t){t.update()}))},register:S,get:k,getIn:function(t){var e=n.Controller,o=e.toIndex(t),r=e.hasFocus()?1:i.perPage;return L((function(t){return J(t.index,o,o+r-1)}))},getAt:function(t){return L(t)[0]},add:function(t,n){l(t,(function(t){if(r(t)&&(t=I(t)),a(t)){var e=v[n];e?y(t,e):m(h,t),g(t,i.classes.slide),o=t,s=u.bind(null,"resize"),c=W(o,"img"),(l=c.length)?c.forEach((function(t){f(t,"load error",(function(){--l||s()}))})):s()}var o,s,c,l})),u("refresh")},remove:function(t){T(L(t).map((function(t){return t.slide}))),u("refresh")},forEach:P,filter:L,style:function(t,n,e){P((function(i){i.style(t,n,e)}))},getLength:function(t){return t?v.length:_.length},isEnough:function(){return _.length>i.perPage}}},Layout:function(t,n,e){var o,r,s=nt(t),u=s.on,a=s.bind,c=s.emit,l=n.Slides,d=n.Direction.resolve,f=n.Elements,p=f.root,v=f.track,h=f.list,g=l.getAt;function m(){r=null,o="ttb"===e.direction,A(p,"maxWidth",R(e.width)),A(v,d("paddingLeft"),b(!1)),A(v,d("paddingRight"),b(!0)),y()}function y(){var t,n=M(p);r&&r.width===n.width&&r.height===n.height||(A(v,"height",(t="",o&&(j(t=_(),"height or heightRatio is missing."),t="calc("+t+" - "+b(!1)+" - "+b(!0)+")"),t)),l.style(d("marginRight"),R(e.gap)),l.style("width",(e.autoWidth?"":R(e.fixedWidth)||(o?"":x()))||null),l.style("height",R(e.fixedHeight)||(o?e.autoHeight?"":x():_())||null,!0),r=n,c("resized"))}function b(t){var n=e.padding,o=d(t?"right":"left");return n&&R(n[o]||(i(n)?0:n))||"0px"}function _(){return R(e.height||M(h).width*e.heightRatio)}function x(){var t=R(e.gap);return"calc((100%"+(t&&" + "+t)+")/"+(e.perPage||1)+(t&&" - "+t)+")"}function w(t,n){var e=g(t);if(e){var i=M(e.slide)[d("right")],o=M(h)[d("left")];return U(i-o)+(n?0:E())}return 0}function E(){var t=g(0);return t&&parseFloat(A(t.slide,d("marginRight")))||0}return{mount:function(){m(),a(window,"resize load",it(c.bind(this,"resize"))),u(["updated","refresh"],m),u("resize",y)},listSize:function(){return M(h)[d("width")]},slideSize:function(t,n){var e=g(t||0);return e?M(e.slide)[d("width")]+(n?0:E()):0},sliderSize:function(){return w(t.length-1,!0)-w(-1,!0)},totalSize:w,getPadding:function(t){return parseFloat(A(v,d("padding"+(t?"Right":"Left"))))||0}}},Clones:function(t,n,i){var o,s=nt(t),u=s.on,a=s.emit,c=n.Elements,l=n.Slides,d=n.Direction.resolve,p=[];function v(){(o=x())&&(function(n){var e=l.get().slice(),o=e.length;if(o){for(;e.length<n;)f(e,e);f(e.slice(-n),e.slice(0,n)).forEach((function(r,s){var u=s<n,a=function(n,e){var o=n.cloneNode(!0);return g(o,i.classes.clone),o.id=t.root.id+"-clone"+$(e+1),o}(r.slide,s);u?y(a,e[0].slide):m(c.list,a),f(p,a),l.register(a,s-n+(u?0:o),r.index)}))}}(o),a("resize"))}function h(){T(p),e(p)}function b(){h(),v()}function _(){o<x()&&a("refresh")}function x(){var n=i.clones;if(t.is("loop")){if(!n){var e=function(t,n){if(r(n)){var e=L("div",{style:"width: "+n+"; position: absolute;"},t);n=M(e).width,T(e)}return n}(c.list,i[d("fixedWidth")]);n=(e&&Q(M(c.track)[d("width")]/e)||i[d("autoWidth")]&&t.length||i.perPage)*(i.drag?(i.flickMaxPages||1)+1:2)}}else n=0;return n}return{mount:function(){v(),u("refresh",b),u(["updated","resize"],_)},destroy:h}},Move:function(t,n,e){var i,o=nt(t),r=o.on,u=o.emit,a=n.Layout,c=a.slideSize,l=a.getPadding,d=a.totalSize,f=a.listSize,p=a.sliderSize,v=n.Direction,h=v.resolve,g=v.orient,m=n.Elements,y=m.list,b=m.track;function _(){A()||(n.Scroll.cancel(),x(t.index),u("repositioned"))}function x(t){w(S(t,!0))}function w(n,e){if(!t.is("fade")){var i=e?n:function(n){if(t.is("loop")){var e=g(n-P()),i=z(!1,n)&&e<0,o=z(!0,n)&&e>0;(i||o)&&(n=E(n,o))}return n}(n);y.style.transform="translate"+h("X")+"("+i+"px)",n!==i&&u("shifted")}}function E(t,n){var e=t-L(n),i=p();return t-=g(i*(Q(U(e)/i)||1))*(n?1:-1)}function S(n,i){var o=g(d(n-1)-function(t){var n=e.focus;return"center"===n?(f()-c(t,!0))/2:+n*c(t)||0}(n));return i?function(n){return e.trimSpace&&t.is("slide")&&(n=K(n,0,g(p()-f()))),n}(o):o}function P(){var t=h("left");return M(y)[t]-M(b)[t]+g(l(!1))}function L(t){return S(t?n.Controller.getEnd():0,!!e.trimSpace)}function A(){return t.state.is(4)&&e.waitForTransition}function z(t,n){n=s(n)?P():n;var e=!0!==t&&g(n)<g(L(!1)),i=!1!==t&&g(n)>g(L(!0));return e||i}return{mount:function(){i=n.Transition,r(["mounted","resized","updated","refresh"],_)},destroy:function(){k(y,"style")},move:function(o,r,s,a){if(!A()){var c=t.state.set,l=P();o!==r&&(i.cancel(),w(E(l,o>r),!0)),c(4),u("move",r,s,o),i.start(r,(function(){c(3),u("moved",r,s,o),"move"===e.trimSpace&&o!==s&&l===P()?n.Controller.go(o>s?">":"<",!1,a):a&&a()}))}},jump:x,translate:w,shift:E,cancel:function(){w(P()),i.cancel()},toIndex:function(t){for(var e=n.Slides.get(),i=0,o=1/0,r=0;r<e.length;r++){var s=e[r].index,u=U(S(s,!0)-t);if(!(u<=o))break;o=u,i=s}return i},toPosition:S,getPosition:P,getLimit:L,isBusy:A,exceededLimit:z}},Controller:function(t,n,e){var i,o,u,a=nt(t).on,c=n.Move,l=c.getPosition,d=c.getLimit,f=n.Slides,p=f.isEnough,v=f.getLength,h=t.is("loop"),g=t.is("slide"),m=e.start||0,y=m;function b(){i=v(!0),o=e.perMove,u=e.perPage,m=K(m,0,i-1)}function _(t,e,i,o,r){var s=e?t:z(t);n.Scroll.scroll(e||i?c.toPosition(s,!0):t,o,(function(){C(c.toIndex(c.getPosition())),r&&r()}))}function x(t){return E(!1,t)}function w(t){return E(!0,t)}function E(t,n){var e,i,r,s=o||(D()?1:u),a=S(m+s*(t?-1:1),m);return-1!==a||!g||(e=l(),i=d(!t),r=1,U(e-i)<r)?n?a:P(a):t?0:k()}function S(t,n,r){if(p()){var s=k();t<0||t>s?t=J(0,t,n,!0)||J(s,n,t,!0)?L(A(t)):h?o||D()?t:t<0?-(i%u||u):i:e.rewind?t<0?s:0:-1:r||t===n||(t=o?t:L(A(n)+(t<n?-1:1)))}else t=-1;return t}function k(){var t=i-u;return(D()||h&&o)&&(t=i-1),Y(t,0)}function P(t){return h?p()?t%i+(t<0?i:0):-1:t}function L(t){return K(D()?t:u*t,0,k())}function A(t){return D()||(t=J(t,i-u,i-1)?i-1:t,t=G(t/u)),t}function z(t){var n=c.toIndex(t);return g?K(n,0,k()):n}function C(t){t!==m&&(y=m,m=t)}function D(){return!s(e.focus)||e.isNavigation}return{mount:function(){b(),a(["updated","refresh"],b,9)},go:function(t,n,i){var o=function(t){var n=m;if(r(t)){var e=t.match(/([+\-<>])(\d+)?/)||[],i=e[1],o=e[2];"+"===i||"-"===i?n=S(m+ +(""+i+(+o||1)),m,!0):">"===i?n=o?L(+o):x(!0):"<"===i&&(n=w(!0))}else n=h?t:K(t,0,k());return n}(t);if(e.useScroll)_(o,!0,!0,e.speed,i);else{var s=P(o);s>-1&&!c.isBusy()&&(n||s!==m)&&(C(s),c.move(o,s,y,i))}},scroll:_,getNext:x,getPrev:w,getAdjacent:E,getEnd:k,setIndex:C,getIndex:function(t){return t?y:m},toIndex:L,toPage:A,toDest:z,hasFocus:D}},Arrows:function(t,n,e){var i,o=nt(t),r=o.on,s=o.bind,u=o.emit,a=e.classes,c=e.i18n,l=n.Elements,d=n.Controller,f=l.arrows,p=l.prev,v=l.next,h={};function g(){if(e.arrows&&(p&&v||(f=L("div",a.arrows),p=b(!0),v=b(!1),i=!0,m(f,[p,v]),y(f,x("slider"===e.arrows&&l.slider||t.root)))),p&&v)if(h.prev)z(f,!1===e.arrows?"none":"");else{var n=l.track.id;P(p,"aria-controls",n),P(v,"aria-controls",n),h.prev=p,h.next=v,o=d.go,r(["mounted","moved","updated","refresh","scrolled"],_),s(v,"click",(function(){o(">",!0)})),s(p,"click",(function(){o("<",!0)})),u("arrows:mounted",p,v)}var o}function b(t){return I('<button class="'+a.arrow+" "+(t?a.prev:a.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function _(){var n=t.index,e=d.getPrev(),i=d.getNext(),o=e>-1&&n<e?c.last:c.prev,r=i>-1&&n>i?c.first:c.next;p.disabled=e<0,v.disabled=i<0,P(p,"aria-label",o),P(v,"aria-label",r),u("arrows:updated",p,v,e,i)}return{arrows:h,mount:function(){g(),r("updated",g)},destroy:function(){i?T(f):(k(p,ut),k(v,ut))}}},Autoplay:function(t,n,e){var i,o,r,s=nt(t),u=s.on,a=s.bind,c=s.emit,l=et(e.interval,t.go.bind(t,">"),(function(t){var n=f.bar;n&&A(n,"width",100*t+"%"),c("autoplay:playing",t)})),d=l.isPaused,f=n.Elements;function p(t){var n=t?"pause":"play",i=f[n];i&&(P(i,"aria-controls",f.track.id),P(i,"aria-label",e.i18n[n]),a(i,"click",t?h:v))}function v(){d()&&n.Slides.isEnough()&&(l.start(!e.resetProgress),o=i=r=!1,c("autoplay:play"))}function h(t){void 0===t&&(t=!0),d()||(l.pause(),c("autoplay:pause")),r=t}function g(){r||(i||o?h(!1):v())}function m(){var i=n.Slides.getAt(t.index);l.set(i&&+C(i.slide,"data-splide-interval")||e.interval)}return{mount:function(){var t,n=e.autoplay;n&&(p(!0),p(!1),t=f.root,e.pauseOnHover&&a(t,"mouseenter mouseleave",(function(t){i="mouseenter"===t.type,g()})),e.pauseOnFocus&&a(t,"focusin focusout",(function(t){o="focusin"===t.type,g()})),u(["move","scroll","refresh"],l.rewind),u("move",m),"pause"!==n&&v())},destroy:l.cancel,play:v,pause:h,isPaused:d}},Cover:function(t,n,e){var i=nt(t).on;function o(t){n.Slides.forEach((function(n){var e=x(n.container||n.slide,"img");e&&e.src&&r(t,e,n)}))}function r(t,n,e){e.style("background",t?'center/cover no-repeat url("'+n.src+'")':"",!0),z(n,t?"none":"")}return{mount:function(){e.cover&&(i("lazyload:loaded",(function(t,n){r(!0,t,n)})),i(["mounted","updated","refresh"],o.bind(null,!0)))},destroy:function(){o(!1)}}},Scroll:function(t,n,e){var i,o,r=nt(t),s=r.on,u=r.emit,a=n.Move,c=a.getPosition,l=a.getLimit,d=a.exceededLimit;function f(n,r,s,h){var g,m=c(),y=1;r=r||(g=U(n-m),Y(g/1.5,800)),o=s,v(),i=et(r,p,(function(i){var o,r,s,u=c(),p=(m+(n-m)*(o=i,(r=e.easingFunc)?r(o):1-Math.pow(1-o,4))-c())*y;a.translate(u+p),t.is("slide")&&!h&&d()&&(y*=.6,U(p)<10&&(s=d(!1),f(l(!s),600,null,!0)))}),1),u("scroll"),i.start()}function p(){var n=c(),e=a.toIndex(n);J(e,0,t.length-1)||a.translate(a.shift(n,e>0),!0),o&&o(),u("scrolled")}function v(){i&&i.cancel()}function h(){i&&!i.isPaused()&&(v(),p())}return{mount:function(){s("move",v),s(["updated","refresh"],h)},destroy:v,scroll:f,cancel:h}},Drag:function(t,n,e){var o,r,s,u,a,c,l,d,f,p=nt(t),v=p.on,h=p.emit,g=p.bind,m=p.unbind,y=n.Move,_=n.Scroll,x=n.Controller,w=n.Elements.track,E=n.Direction,S=E.resolve,k=E.orient,P=y.getPosition,L=y.exceededLimit,A=!1;function z(){var t=e.drag;j(!t),a="free"===t}function C(t){if(!d){var n=e.noDrag,i=R(t),o=!n||!b(t.target,n);l=!1,!o||!i&&t.button||(y.isBusy()?O(t,!0):(f=i?w:window,s=null,u=null,g(f,"touchmove mousemove",D,ct),g(f,"touchend touchcancel mouseup",M,ct),y.cancel(),_.cancel(),T(t)))}}function D(n){if(u||h("drag"),u=n,n.cancelable){var s=W(n)-W(r);if(c){y.translate(o+function(n){return n/(A&&t.is("slide")?5:1)}(s));var a=F(n)-F(r)>200,d=A!==(A=L());(a||d)&&T(n),h("dragging"),l=!0,O(n)}else{var f=e.dragMinThreshold;f=i(f)?f:{mouse:0,touch:+f||10},c=U(s)>(R(n)?f.touch:f.mouse),N()&&O(n)}}}function M(i){m(f,"touchmove mousemove",D),m(f,"touchend touchcancel mouseup",M);var o=t.index;if(u){if(c||i.cancelable&&N()){var l=function(n){if(t.is("loop")||!A){var e=r===u&&s||r,i=W(u)-W(e),o=F(n)-F(e),a=F(n)-F(u)<200;if(o&&a)return i/o}return 0}(i),d=function(t){return P()+V(t)*H(U(t)*(e.flickPower||600),a?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}(l);a?x.scroll(d):t.is("fade")?x.go(o+k(V(l))):x.go(x.toDest(d),!0),O(i)}h("dragged")}else a||P()===y.toPosition(o)||x.go(o,!0);c=!1}function T(t){s=r,r=t,o=P()}function I(t){!d&&l&&O(t,!0)}function N(){return U(W(u)-W(r))>U(W(u,!0)-W(r,!0))}function W(t,n){return(R(t)?t.touches[0]:t)["page"+S(n?"Y":"X")]}function F(t){return t.timeStamp}function R(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function j(t){d=t}return{mount:function(){g(w,"touchmove mousemove",B,ct),g(w,"touchend touchcancel mouseup",B,ct),g(w,"touchstart mousedown",C,ct),g(w,"click",I,{capture:!0}),g(w,"dragstart",O),v(["mounted","updated"],z)},disable:j,isDragging:function(){return c}}},Keyboard:function(t,n,e){var i,o,r=nt(t),s=r.on,u=r.bind,c=r.unbind,l=t.root,f=n.Direction.resolve;function p(){var t=e.keyboard;t&&("focused"===t?(i=l,P(l,"tabindex",0)):i=window,u(i,"keydown",m))}function v(){c(i,"keydown"),a(i)&&k(i,"tabindex")}function h(){var t=o;o=!0,q((function(){o=t}))}function g(){v(),p()}function m(n){if(!o){var e=n.key,i=d(lt,e)?"Arrow"+e:e;i===f("ArrowLeft")?t.go("<"):i===f("ArrowRight")&&t.go(">")}}return{mount:function(){p(),s("updated",g),s("move",h)},destroy:v,disable:function(t){o=t}}},LazyLoad:function(t,n,e){var i=nt(t),o=i.on,r=i.off,s=i.bind,u=i.emit,a="sequential"===e.lazyLoad,c=[],l=0;function d(){p(),f()}function f(){n.Slides.forEach((function(t){W(t.slide,"[data-splide-lazy], [data-splide-lazy-srcset]").forEach((function(n){var i=C(n,"data-splide-lazy"),o=C(n,"data-splide-lazy-srcset");if(i!==n.src||o!==n.srcset){var r=e.classes.spinner,s=n.parentElement,u=x(s,"."+r)||L("span",r,s);P(u,"role","presentation"),c.push({_img:n,_Slide:t,src:i,srcset:o,_spinner:u}),!n.src&&z(n,"none")}}))})),a&&m()}function p(){l=0,c=[]}function v(){(c=c.filter((function(n){var i=e.perPage*((e.preloadPages||1)+1)-1;return!n._Slide.isWithin(t.index,i)||h(n)}))).length||r("moved")}function h(t){var n=t._img;g(t._Slide.slide,"is-loading"),s(n,"load error",(function(n){!function(t,n){var e=t._Slide;F(e.slide,"is-loading"),n||(T(t._spinner),z(t._img,""),u("lazyload:loaded",t._img,e),u("resize")),a&&m()}(t,"error"===n.type)})),["srcset","src"].forEach((function(e){t[e]&&(P(n,e,t[e]),k(n,"src"===e?"data-splide-lazy":"data-splide-lazy-srcset"))}))}function m(){l<c.length&&h(c[l++])}return{mount:function(){e.lazyLoad&&(f(),o("refresh",d),a||o(["mounted","refresh","moved","scrolled"],v))},destroy:p}},Pagination:function(t,n,i){var o,r=nt(t),s=r.on,u=r.emit,a=r.bind,c=r.unbind,l=n.Slides,d=n.Elements,f=n.Controller,p=f.hasFocus,v=f.getIndex,h=[];function m(){y(),i.pagination&&l.isEnough()&&(function(){var n=t.length,e=i.classes,r=i.i18n,s=i.perPage,u="slider"===i.pagination&&d.slider||d.root,c=p()?n:Q(n/s);o=L("ul",e.pagination,u);for(var f=0;f<c;f++){var v=L("li",null,o),g=L("button",{class:e.page,type:"button"},v),m=l.getIn(f).map((function(t){return t.slide.id})),y=!p()&&s>1?r.pageX:r.slideX;a(g,"click",b.bind(null,f)),P(g,"aria-controls",m.join(" ")),P(g,"aria-label",Z(y,f+1)),h.push({li:v,button:g,page:f})}}(),u("pagination:mounted",{list:o,items:h},_(t.index)),x())}function y(){o&&(T(o),h.forEach((function(t){c(t.button,"click")})),e(h),o=null)}function b(t){f.go(">"+t,!0,(function(){var n,e=l.getAt(f.toIndex(t));e&&((n=e.slide).setActive&&n.setActive()||n.focus({preventScroll:!0}))}))}function _(t){return h[f.toPage(t)]}function x(){var t=_(v(!0)),n=_(v());t&&(F(t.button,"is-active"),k(t.button,"aria-current")),n&&(g(n.button,"is-active"),P(n.button,"aria-current",!0)),u("pagination:updated",{list:o,items:h},t,n)}return{items:h,mount:function(){m(),s(["updated","refresh"],m),s(["move","scrolled"],x)},destroy:y,getAt:_,update:x}},Sync:function(t,n,i){var o=n.Elements.list,r=[];function s(){var n,e;t.splides.forEach((function(n){var e;!n.isParent&&(e=n.splide,[t,e].forEach((function(n){var i=nt(n),o=n===t?e:t;i.on("move",(function(t,n,e){o.go(o.is("loop")?e:t)})),r.push(i)})))})),i.isNavigation&&(n=nt(t),(e=n.on)("click",c),e("slide:keydown",l),e(["mounted","updated"],a),P(o,"role","menu"),r.push(n),n.emit("navigation:mounted",t.splides))}function u(){k(o,ut),r.forEach((function(t){t.destroy()})),e(r)}function a(){P(o,"aria-orientation","ttb"!==i.direction?"horizontal":null)}function c(n){t.go(n.index)}function l(t,n){d(dt,n.key)&&(c(t),O(n))}return{mount:s,destroy:u,remount:function(){u(),s()}}},Wheel:function(t,n,e){var i=nt(t).bind;function o(i){if(i.cancelable){var o=i.deltaY;if(o){var r=o<0;t.go(r?"<":">"),function(i){return!e.releaseWheel||t.state.is(4)||-1!==n.Controller.getAdjacent(i)}(r)&&O(i)}}}return{mount:function(){e.wheel&&i(n.Elements.track,"wheel",o,ct)}}}}),pt={type:"slide",speed:400,waitForTransition:!0,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,keyboard:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",slideFocus:!0,trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",classes:st,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay"}};function vt(t,n,e){var i=nt(t).on;return{mount:function(){i(["mounted","refresh"],(function(){q((function(){n.Slides.style("transition","opacity "+e.speed+"ms "+e.easing)}))}))},start:function(t,e){var i=n.Elements.track;A(i,"height",R(M(i).height)),q((function(){e(),A(i,"height","")}))},cancel:B}}function ht(t,n,e){var i,o=nt(t).bind,r=n.Move,s=n.Controller,u=n.Elements.list;function a(){c("")}function c(t){A(u,"transition",t)}return{mount:function(){o(u,"transitionend",(function(t){t.target===u&&i&&(a(),i())}))},start:function(n,o){var u=r.toPosition(n,!0),a=r.getPosition(),l=function(n){var i=e.rewindSpeed;if(t.is("slide")&&i){var o=s.getIndex(!0),r=s.getEnd();if(0===o&&n>=r||o>=r&&0===n)return i}return e.speed}(n);U(u-a)>=1&&l>=1?(c("transform "+l+"ms "+e.easing),r.translate(u,!0),i=o):(r.jump(n),o())},cancel:a}}var gt=function(){function n(t,e){var i;this.event=function(){var t={};function n(n,i){e(n,(function(n,e){var o=t[n];t[n]=o&&o.filter((function(t){return t._key?t._key!==i:i||t._namespace!==e}))}))}function e(t,n){c(t).join(" ").split(" ").forEach((function(t){var e=t.split(".");n(e[0],e[1])}))}return{on:function(n,i,o,r){void 0===r&&(r=10),e(n,(function(n,e){t[n]=t[n]||[],f(t[n],{_event:n,_callback:i,_namespace:e,_priority:r,_key:o}).sort((function(t,n){return t._priority-n._priority}))}))},off:n,offBy:function(e){w(t,(function(t,i){n(i,e)}))},emit:function(n){var e=arguments;(t[n]||[]).forEach((function(t){t._callback.apply(t,v(e,1))}))},destroy:function(){t={}}}}(),this.Components={},this.state=(i=1,{set:function(t){i=t},is:function(t){return d(c(t),i)}}),this.splides=[],this._options={},this._Extensions={};var o=r(t)?N(document,t):t;j(o,o+" is invalid."),this.root=o,S(pt,n.defaults),S(S(this._options,pt),e||{})}var i,o,s,u=n.prototype;return u.mount=function(t,n){var e=this,i=this.state,o=this.Components;return j(i.is([1,5]),"Already mounted!"),i.set(1),this._Components=o,this._Transition=n||this._Transition||(this.is("fade")?vt:ht),this._Extensions=t||this._Extensions,w(E({},ft,this._Extensions,{Transition:this._Transition}),(function(t,n){var i=t(e,o,e._options);o[n]=i,i.setup&&i.setup()})),w(o,(function(t){t.mount&&t.mount()})),this.emit("mounted"),g(this.root,"is-initialized"),i.set(3),this.emit("ready"),this},u.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._Components.Sync.remount(),t.Components.Sync.remount()),this},u.go=function(t){return this._Components.Controller.go(t),this},u.on=function(t,n){return this.event.on(t,n,null,20),this},u.off=function(t){return this.event.off(t),this},u.emit=function(t){var n;return(n=this.event).emit.apply(n,[t].concat(v(arguments,1))),this},u.add=function(t,n){return this._Components.Slides.add(t,n),this},u.remove=function(t){return this._Components.Slides.remove(t),this},u.is=function(t){return this._options.type===t},u.refresh=function(){return this.emit("refresh"),this},u.destroy=function(t){void 0===t&&(t=!0);var n=this.event,i=this.state;return i.is(1)?n.on("ready",this.destroy.bind(this,t),this):(w(this._Components,(function(n){n.destroy&&n.destroy(t)}),!0),n.emit("destroy"),n.destroy(),t&&e(this.splides),i.set(5)),this},i=n,(o=[{key:"options",get:function(){return this._options},set:function(t){var n=this._options;S(n,t),this.state.is(1)||this.emit("updated",n)}},{key:"length",get:function(){return this._Components.Slides.getLength(!0)}},{key:"index",get:function(){return this._Components.Controller.getIndex()}}])&&t(i.prototype,o),s&&t(i,s),Object.defineProperty(i,"prototype",{writable:!1}),n}();return gt.defaults={},gt.STATES=n,gt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self).Splide=e(),document.querySelector("#categorySlider .category-slider__list")){new Splide("#categorySlider .category-slider__list",{type:"slide",drag:"free",autoWidth:!0,perPage:1,gap:"10px",trimSpace:!0,updateOnMove:!1,mediaQuery:"min",destroy:!1,pagination:!1,breakpoints:{768:{destroy:!0}}}).mount()}if(document.querySelector("#cardsSlider .cards-slider__list")){new Splide("#cardsSlider .cards-slider__list",{type:"slide",drag:!0,gap:"10px",perPage:1,fixedWidth:!1,pagination:!1,mediaQuery:"min",breakpoints:{768:{fixedWidth:"275px",perPage:2,gap:"20px"},992:{fixedWidth:"347px",gap:"0px"},1200:{fixedWidth:!1,perPage:3,gap:"30px"},1400:{fixedWidth:"360px",perPage:3,gap:"30px"}}}).mount()}document.querySelectorAll(".to-top__link").forEach(t=>{t.onclick=function(t){t.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"})}});let i=document.getElementById("navFixed");if(i){window.onscroll=function(){i&&window.pageYOffset>=10?i.classList.add("sticky"):i.classList.remove("sticky")}}var o,r;o=".js-modal-open",document.querySelectorAll(o).forEach(t=>{t.addEventListener("click",(function(t){t.preventDefault();let n=t.target.getAttribute("data-target");document.querySelector(n)&&document.querySelector(n).classList.add("show"),document.body.classList.add("fixed")}))}),function(t){document.querySelectorAll(t).forEach(t=>{t.addEventListener("click",(function(t){t.preventDefault();let n=t.target.closest(".modal.show");n&&n.classList.remove("show"),document.body.classList.remove("fixed")}))})}(".btn-close"),r=".modal-backdrop",document.querySelectorAll(r).forEach(t=>{t.addEventListener("click",(function(t){t.preventDefault();let n=t.target.closest(".modal.show");n&&n.classList.remove("show"),document.body.classList.remove("fixed")}))});