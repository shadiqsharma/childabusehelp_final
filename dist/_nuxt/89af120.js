(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{213:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(214),r=n.n(o);function l(){window.innerWidth>=991&&(setTimeout((function(){new r.a(".rellax",{center:!0})}),5e3),new r.a(".rellax-header"),new r.a(".rellax-text"))}},214:function(t,e,n){(function(n){var o,r,l;"undefined"!=typeof window&&window,r=[],void 0===(l="function"==typeof(o=function(){var t=function(e,n){"use strict";var o=Object.create(t.prototype),r=0,l=0,c=0,d=0,v=[],m=!0,f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},h=null,w=!1;try{var _=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("testPassive",null,_),window.removeEventListener("testPassive",null,_)}catch(t){}var y=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,x=window.transformProp||function(){var t=document.createElement("div");if(null===t.style.transform){var e=["Webkit","Moz","ms"];for(var n in e)if(void 0!==t.style[e[n]+"Transform"])return e[n]+"Transform"}return"transform"}();function C(){if(3===o.options.breakpoints.length&&Array.isArray(o.options.breakpoints)){var t,e=!0,n=!0;if(o.options.breakpoints.forEach((function(i){"number"!=typeof i&&(n=!1),null!==t&&i<t&&(e=!1),t=i})),e&&n)return}o.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}o.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},n&&Object.keys(n).forEach((function(t){o.options[t]=n[t]})),n&&n.breakpoints&&C(),e||(e=".rellax");var A="string"==typeof e?document.querySelectorAll(e):[e];if(A.length>0){if(o.elems=A,o.options.wrapper&&!o.options.wrapper.nodeType){var k=document.querySelector(o.options.wrapper);if(!k)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");o.options.wrapper=k}var S,E=function(t){var e=o.options.breakpoints;return t<e[0]?"xs":t>=e[0]&&t<e[1]?"sm":t>=e[1]&&t<e[2]?"md":"lg"},z=function(){for(var i=0;i<o.elems.length;i++){var t=O(o.elems[i]);v.push(t)}},T=function(){for(var i=0;i<v.length;i++)o.elems[i].style.cssText=v[i].style;v=[],l=window.innerHeight,d=window.innerWidth,S=E(d),L(),z(),animate(),m&&(window.addEventListener("resize",T),m=!1,W())},O=function(t){var e,n=t.getAttribute("data-rellax-percentage"),r=t.getAttribute("data-rellax-speed"),c=t.getAttribute("data-rellax-xs-speed"),v=t.getAttribute("data-rellax-mobile-speed"),m=t.getAttribute("data-rellax-tablet-speed"),f=t.getAttribute("data-rellax-desktop-speed"),h=t.getAttribute("data-rellax-vertical-speed"),w=t.getAttribute("data-rellax-horizontal-speed"),_=t.getAttribute("data-rellax-vertical-scroll-axis"),y=t.getAttribute("data-rellax-horizontal-scroll-axis"),x=t.getAttribute("data-rellax-zindex")||0,C=t.getAttribute("data-rellax-min"),A=t.getAttribute("data-rellax-max"),k=t.getAttribute("data-rellax-min-x"),E=t.getAttribute("data-rellax-max-x"),z=t.getAttribute("data-rellax-min-y"),T=t.getAttribute("data-rellax-max-y"),O=!0;c||v||m||f?e={xs:c,sm:v,md:m,lg:f}:O=!1;var L=o.options.wrapper?o.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;o.options.relativeToWrapper&&(L=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-o.options.wrapper.offsetTop);var Y=o.options.vertical&&(n||o.options.center)?L:0,W=o.options.horizontal&&(n||o.options.center)?o.options.wrapper?o.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,B=Y+t.getBoundingClientRect().top,M=t.clientHeight||t.offsetHeight||t.scrollHeight,X=W+t.getBoundingClientRect().left,N=t.clientWidth||t.offsetWidth||t.scrollWidth,H=n||(Y-B+l)/(M+l),P=n||(W-X+d)/(N+d);o.options.center&&(P=.5,H=.5);var $=O&&null!==e[S]?Number(e[S]):r||o.options.speed,F=h||o.options.verticalSpeed,R=w||o.options.horizontalSpeed,G=_||o.options.verticalScrollAxis,U=y||o.options.horizontalScrollAxis,D=j(P,H,$,F,R),style=t.style.cssText,I="",J=/transform\s*:/i.exec(style);if(J){var K=J.index,Q=style.slice(K),V=Q.indexOf(";");I=V?" "+Q.slice(11,V).replace(/\s/g,""):" "+Q.slice(11).replace(/\s/g,"")}return{baseX:D.x,baseY:D.y,top:B,left:X,height:M,width:N,speed:$,verticalSpeed:F,horizontalSpeed:R,verticalScrollAxis:G,horizontalScrollAxis:U,style:style,transform:I,zindex:x,min:C,max:A,minX:k,maxX:E,minY:z,maxY:T}},L=function(){var t=r,e=c;if(r=o.options.wrapper?o.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,c=o.options.wrapper?o.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,o.options.relativeToWrapper){var n=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;r=n-o.options.wrapper.offsetTop}return!(t==r||!o.options.vertical)||!(e==c||!o.options.horizontal)},j=function(t,e,n,r,l){var c={},d=(l||n)*(100*(1-t)),v=(r||n)*(100*(1-e));return c.x=o.options.round?Math.round(d):Math.round(100*d)/100,c.y=o.options.round?Math.round(v):Math.round(100*v)/100,c},Y=function(){window.removeEventListener("resize",Y),window.removeEventListener("orientationchange",Y),(o.options.wrapper?o.options.wrapper:window).removeEventListener("scroll",Y),(o.options.wrapper?o.options.wrapper:document).removeEventListener("touchmove",Y),h=f(W)},W=function(){L()&&!1===m?(animate(),h=f(W)):(h=null,window.addEventListener("resize",Y),window.addEventListener("orientationchange",Y),(o.options.wrapper?o.options.wrapper:window).addEventListener("scroll",Y,!!w&&{passive:!0}),(o.options.wrapper?o.options.wrapper:document).addEventListener("touchmove",Y,!!w&&{passive:!0}))},animate=function(){for(var t,i=0;i<o.elems.length;i++){var e=v[i].verticalScrollAxis.toLowerCase(),n=v[i].horizontalScrollAxis.toLowerCase(),m=-1!=e.indexOf("x")?r:0,f=-1!=e.indexOf("y")?r:0,h=-1!=n.indexOf("x")?c:0,w=(f+(-1!=n.indexOf("y")?c:0)-v[i].top+l)/(v[i].height+l),_=(m+h-v[i].left+d)/(v[i].width+d),y=(t=j(_,w,v[i].speed,v[i].verticalSpeed,v[i].horizontalSpeed)).y-v[i].baseY,C=t.x-v[i].baseX;null!==v[i].min&&(o.options.vertical&&!o.options.horizontal&&(y=y<=v[i].min?v[i].min:y),o.options.horizontal&&!o.options.vertical&&(C=C<=v[i].min?v[i].min:C)),null!=v[i].minY&&(y=y<=v[i].minY?v[i].minY:y),null!=v[i].minX&&(C=C<=v[i].minX?v[i].minX:C),null!==v[i].max&&(o.options.vertical&&!o.options.horizontal&&(y=y>=v[i].max?v[i].max:y),o.options.horizontal&&!o.options.vertical&&(C=C>=v[i].max?v[i].max:C)),null!=v[i].maxY&&(y=y>=v[i].maxY?v[i].maxY:y),null!=v[i].maxX&&(C=C>=v[i].maxX?v[i].maxX:C);var A=v[i].zindex,k="translate3d("+(o.options.horizontal?C:"0")+"px,"+(o.options.vertical?y:"0")+"px,"+A+"px) "+v[i].transform;o.elems[i].style[x]=k}o.options.callback(t)};return o.destroy=function(){for(var i=0;i<o.elems.length;i++)o.elems[i].style.cssText=v[i].style;m||(window.removeEventListener("resize",T),m=!0),y(h),h=null},T(),o.refresh=T,o}console.warn("Rellax: The elements you're trying to select don't exist.")};return t})?o.apply(e,r):o)||(t.exports=l)}).call(this,n(48))},309:function(t,e,n){"use strict";n.r(e);var o,r=n(6),l=(n(16),n(47)),c=n(213),d={name:"landing-page",layout:"gray-footer",components:(o={Card:l.c,Tabs:l.u,TabPane:l.t},Object(r.a)(o,l.b.name,l.b),Object(r.a)(o,l.i.name,l.i),o),data:function(){return{form:{firstName:"",email:"",message:""}}},mounted:function(){Object(c.a)()}},v=n(1),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper landing-page"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"testimonials-1 section-image",staticStyle:{"background-image":"url('img/bg19.jpg')"}},[n("div",{staticClass:"container"},[t._m(2),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[n("card",{attrs:{type:"testimonial"}},[n("img",{staticClass:"img img-raised",attrs:{slot:"avatar",src:"img/michael.jpg"},slot:"avatar"}),t._v(" "),n("p",{staticClass:"card-description"},[t._v("\n                            The networking at Web Summit is like no other European tech conference.\n                        ")]),t._v(" "),n("template",{slot:"raw-content"},[n("div",{staticClass:"icon icon-success"},[n("i",{staticClass:"fas fa-quote-right"})]),t._v(" "),n("div",{staticClass:"card-footer"},[n("h4",{staticClass:"card-title"},[t._v("Michael Elijah")]),t._v(" "),n("p",{staticClass:"category"},[t._v("@michaelelijah")])])])],2)],1),t._v(" "),n("div",{staticClass:"col-md-4"},[n("card",{attrs:{type:"testimonial"}},[n("img",{staticClass:"img img-raised",attrs:{slot:"avatar",src:"img/olivia.jpg"},slot:"avatar"}),t._v(" "),n("p",{staticClass:"card-description"},[t._v("\n                            The connections you make at Web Summit are unparalleled, we met users all over the\n                            world.\n                        ")]),t._v(" "),n("template",{slot:"raw-content"},[n("div",{staticClass:"icon icon-success"},[n("i",{staticClass:"fas fa-quote-right"})]),t._v(" "),n("div",{staticClass:"card-footer"},[n("h4",{staticClass:"card-title"},[t._v("Olivia Harper")]),t._v(" "),n("p",{staticClass:"category"},[t._v("@oliviaharper")])])])],2)],1),t._v(" "),n("div",{staticClass:"col-md-4"},[n("card",{attrs:{type:"testimonial"}},[n("img",{staticClass:"img img-raised",attrs:{slot:"avatar",src:"img/james.jpg"},slot:"avatar"}),t._v(" "),n("p",{staticClass:"card-description"},[t._v("\n                            Web Summit will increase your appetite, your inspiration, and your network.\n                        ")]),t._v(" "),n("template",{slot:"raw-content"},[n("div",{staticClass:"icon icon-success"},[n("i",{staticClass:"fas fa-quote-right"})]),t._v(" "),n("div",{staticClass:"card-footer"},[n("h4",{staticClass:"card-title"},[t._v("James Logan")]),t._v(" "),n("p",{staticClass:"category"},[t._v("@jameslogan")])])])],2)],1)])])]),t._v(" "),n("div",{staticClass:"pricing-2"},[n("div",{staticClass:"pricing-2",attrs:{id:"pricing-2"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 ml-auto mr-auto text-center"},[n("h2",{staticClass:"title"},[t._v("Pick the best plan for you")]),t._v(" "),n("tabs",{attrs:{pills:"",type:"success",centered:""}},[n("tab-pane",{attrs:{label:"Legal Entity"}}),t._v(" "),n("tab-pane",{attrs:{label:"Individual"}})],1)],1)]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[n("card",{attrs:{type:"pricing",plain:""}},[n("h6",{staticClass:"category"},[t._v("Enterprise")]),t._v(" "),n("h1",{staticClass:"card-title"},[n("small",[t._v("$")]),t._v("\n                                59\n                            ")]),t._v(" "),n("ul",[n("li",[n("b",[t._v("10GB")]),t._v(" Disk Space\n                                ")]),t._v(" "),n("li",[n("b",[t._v("100GB")]),t._v(" Monthly Bandwidth\n                                ")]),t._v(" "),n("li",[n("b",[t._v("20")]),t._v(" Email Accounts\n                                ")]),t._v(" "),n("li",[n("b",[t._v("Unlimited")]),t._v(" subdomains\n                                ")])]),t._v(" "),n("n-button",{attrs:{type:"success",round:""}},[t._v("\n                                Sign Up\n                            ")])],1)],1),t._v(" "),n("div",{staticClass:"col-md-4"},[n("card",{staticClass:"card-background",staticStyle:{"background-image":"url('img/pricing2.jpg')"},attrs:{type:"pricing",raised:""}},[n("h6",{staticClass:"category text-info"},[t._v("Professional")]),t._v(" "),n("h1",{staticClass:"card-title"},[n("small",[t._v("$")]),t._v("\n                                29\n                            ")]),t._v(" "),n("ul",[n("li",[n("b",[t._v("5GB")]),t._v(" Disk Space\n                                ")]),t._v(" "),n("li",[n("b",[t._v("50GB")]),t._v(" Monthly Bandwidth\n                                ")]),t._v(" "),n("li",[n("b",[t._v("10")]),t._v(" Email Accounts\n                                ")]),t._v(" "),n("li",[n("b",[t._v("Unlimited")]),t._v(" subdomains\n                                ")])]),t._v(" "),n("n-button",{staticClass:"btn-neutral",attrs:{round:""}},[t._v("\n                                Sign Up\n                            ")])],1)],1),t._v(" "),n("div",{staticClass:"col-md-4"},[n("card",{attrs:{type:"pricing",plain:""}},[n("h6",{staticClass:"category"},[t._v("Standard")]),t._v(" "),n("h1",{staticClass:"card-title"},[n("small",[t._v("$")]),t._v("\n                                17\n                            ")]),t._v(" "),n("ul",[n("li",[n("b",[t._v("2GB")]),t._v(" Disk Space\n                                ")]),t._v(" "),n("li",[n("b",[t._v("25GB")]),t._v(" Monthly Bandwidth\n                                ")]),t._v(" "),n("li",[n("b",[t._v("5")]),t._v(" Email Accounts\n                                ")]),t._v(" "),n("li",[n("b",[t._v("Unlimited")]),t._v(" subdomains\n                                ")])]),t._v(" "),n("a",{staticClass:"btn btn-success btn-round",attrs:{href:"#pablo"}},[t._v("\n                                Get Started\n                            ")])])],1)])])])]),t._v(" "),n("div",{staticClass:"section section-contact-us text-center"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"title"},[t._v("Want to work with us?")]),t._v(" "),n("p",{staticClass:"description"},[t._v("Your project is very important to us.")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 text-center ml-auto mr-auto col-md-8"},[n("fg-input",{staticClass:"input-lg",attrs:{placeholder:"First Name...","addon-left-icon":"now-ui-icons users_circle-08"},model:{value:t.form.firstName,callback:function(e){t.$set(t.form,"firstName",e)},expression:"form.firstName"}}),t._v(" "),n("fg-input",{staticClass:"input-lg",attrs:{placeholder:"Email Here...","addon-left-icon":"now-ui-icons ui-1_email-85"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),n("div",{staticClass:"textarea-container"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"name",rows:"4",cols:"80",placeholder:"Type a message..."},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"send-button"},[n("n-button",{attrs:{type:"success",round:"",block:"",size:"lg"}},[t._v("Send Message")])],1)],1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header page-header-small rellax-header"},[n("div",{staticClass:"page-header-image",staticStyle:{"background-image":"url('img/bg26.jpg')"}}),t._v(" "),n("div",{staticClass:"content-center"},[n("h1",{staticClass:"title"},[t._v("This is our great company.")]),t._v(" "),n("div",{staticClass:"text-center"},[n("a",{staticClass:"btn btn-success btn-icon  btn-round",attrs:{href:"#pablo"}},[n("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),n("a",{staticClass:"btn btn-success btn-icon btn-round",attrs:{href:"#pablo"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("a",{staticClass:"btn btn-success btn-icon btn-round",attrs:{href:"#pablo"}},[n("i",{staticClass:"fab fa-google-plus"})])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section section-about-us"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 ml-auto mr-auto text-center"},[n("h2",{staticClass:"title"},[t._v("Who we are?")])])]),t._v(" "),n("div",{staticClass:"separator separator-success"}),t._v(" "),n("div",{staticClass:"section-story-overview"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"image-container image-left",staticStyle:{"background-image":"url('img/bg38.jpg')"}},[n("p",{staticClass:"blockquote blockquote-primary"},[t._v('"Over the span of the satellite record, Arctic\n                                sea ice has been declining significantly, while sea ice in the Antarctichas\n                                increased very slightly"\n                                '),n("br"),t._v(" "),n("br"),t._v(" "),n("small",[t._v("-NOAA")])])]),t._v(" "),n("div",{staticClass:"image-container image-left-bottom",staticStyle:{"background-image":"url('img/bg24.jpg')"}})]),t._v(" "),n("div",{staticClass:"col-md-5"},[n("div",{staticClass:"image-container image-right",staticStyle:{"background-image":"url('img/bg39.jpg')"}}),t._v(" "),n("h3",[t._v("So what does the new record for the lowest level of winter ice actually mean")]),t._v(" "),n("p",[t._v("The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer,\n                            and that process will continue whatever happens with climate change. Even if the Arctic\n                            continues to be one of the fastest-warming regions of the world, it will always be\n                            plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of\n                            natural reasons, there’s huge variety of the state of the ice.\n                        ")]),t._v(" "),n("p",[t._v("\n                            For a start, it does not automatically follow that a record amount of ice will melt this\n                            summer. More important for determining the size of the annual thaw is the state of the\n                            weather as the midnight sun approaches and temperatures rise. But over the more than 30\n                            years of satellite records, scientists have observed a clear pattern of decline,\n                            decade-by-decade.\n                        ")]),t._v(" "),n("p",[t._v("The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer,\n                            and that process will continue whatever happens with climate change. Even if the Arctic\n                            continues to be one of the fastest-warming regions of the world, it will always be\n                            plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of\n                            natural reasons, there’s huge variety of the state of the ice.\n                        ")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 ml-auto mr-auto text-center"},[n("h2",{staticClass:"title"},[t._v("What is ALPHA?")]),t._v(" "),n("h4",{staticClass:"description text-white"},[t._v("If you’re selected for ALPHA you’ll also get 3 tickets,\n                        opportunity to access Investor Office Hours and Mentor Hours and much more all for\n                        €850.")])])])}],!1,null,null,null);e.default=component.exports}}]);