(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(31);t.a=function(e){return i.a.createElement("li",null,i.a.createElement(r.a,{to:e.item.toLowerCase()},e.item))}},167:function(e,t,a){"use strict";var n=a(168),i=a(0),r=a.n(i),o=a(1),s=a.n(o),c=a(171),l=a.n(c),d=a(31),u=(a(172),function(e){var t,a=e.children,i=e.location;return t=i&&"/"===i.pathname?r.a.createElement("div",null,a):r.a.createElement("div",{id:"wrapper",className:"page"},r.a.createElement("div",null,a)),r.a.createElement(d.b,{query:"2994927498",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Kevin Ready is a developer, musician and adventurist."},{name:"keywords",content:"freelance,react,node,javascript,contractor,developer"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{name:"theme-color",content:"#000000"}),r.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),r.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black"}),r.a.createElement("meta",{name:"description",content:"Kevin Ready | Creativist"})),t)},data:n})});u.propTypes={children:s.a.node.isRequired},t.a=u},168:function(e){e.exports={data:{site:{siteMetadata:{title:"PlanetKevin : 2019"}}}}},169:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),o=function(e){return i.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};o.propTypes={timeout:a.n(r).a.bool},t.a=o},170:function(e,t,a){"use strict";a(23);var n=a(0),i=a.n(n),r=a(166),o=a(31),s=function(e){return i.a.createElement("nav",null,i.a.createElement(o.a,{to:"/"},i.a.createElement("div",{className:"smlogo"},i.a.createElement("span",{className:"icon fa-bicycle"}))),i.a.createElement("ul",null,i.a.createElement(r.a,{item:"Work"}),i.a.createElement(r.a,{item:"Creative"}),i.a.createElement(r.a,{item:"Contact"})))},c=function(e){var t;switch(e){case"":t=e;break;case"jobs":t="";break;case"recommendations":t=function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement(r.a,{item:e})))}("work");break;default:t=e}return t};t.a=function(e){return i.a.createElement("header",{id:"header"},i.a.createElement(s,Object.assign({},e,{chosen:e.chosen})),c(e.chosen))}},175:function(e,t,a){"use strict";var n=a(41),i=a.n(n),r=a(10),o=a.n(r),s=a(0),c=a.n(s),l=function(e){function t(t){var a;return(a=e.call(this,t)||this).touchHandler=function(e){a.iamEvent(e,"touch")},a.iamEvent=function(e,t){},a.mouseHandler=function(e){a.iamEvent(e,"mouse")},a.clickHandler=function(e){a.iamEvent(e,"click")},a.keyHandler=function(e){switch(a.iamEvent(e,"key"),e.preventDefault(),e.key){case"ArrowRight":a.moveOnVector("z"===a.state.vector.charAt(0)?"xPos":"zPos",a.state.distanceBetween/4,a.state.distanceBetween/10);break;case"ArrowLeft":a.moveOnVector("z"===a.state.vector.charAt(0)?"xNeg":"zNeg",a.state.distanceBetween/4,a.state.distanceBetween/10);break;case"ArrowUp":a.moveOnVector("z"===a.state.vector.charAt(0)?"zPos":"xPos",a.state.distanceBetween/4,a.state.distanceBetween/10);break;case"ArrowDown":a.moveOnVector("z"===a.state.vector.charAt(0)?"zNeg":"xNeg",a.state.distanceBetween/4,a.state.distanceBetween/10)}},a.onUpDownAxis=function(e){var t=0===a.state.orientation?"beta":"gamma",n=Math.round((450+e[t])%360);return n>90?n-180:n},a.upDownTest=function(e){return Math.abs(e)>20?e/10:0},a.selectView=function(){var e;switch(Math.floor((document.querySelector("#rig").getAttribute("rotation").y+45)/90)%4){case 1:e="xPos";break;case 2:e="zPos";break;case 3:e="xNeg";break;case 0:e="zNeg";break;default:e=a.state.vector}return e},a.getOld=function(){var e={pos:document.querySelector("#rig")&&document.querySelector("#rig").getAttribute("position")?document.querySelector("#rig").getAttribute("position"):"0 0 0",rot:document.querySelector("#rig")&&document.querySelector("#rig").getAttribute("rotation")?document.querySelector("#rig").getAttribute("rotation"):"0 0 0"};return Math.abs(e.pos.x)<a.state.distanceBetween/2&&Math.abs(e.pos.z)<a.state.distanceBetween/2&&a.state.vector!==a.selectView()&&a.setState({vector:a.selectView()}),e},a.testRotation=function(e,t,a){try{document.querySelector("#rig").setEntityAttribute("rotation",e.rot,{x:e.rot.x,y:e.rot.y+a,z:e.rot.z})}catch(n){console.log("testRotation failed")}},a.moveOnVector=function(e,t,n){var i=a.getOld();if(e.charAt(0)!==a.state.vector.charAt(0))a.testRotation(i,e.charAt(0),-1===e.indexOf("Pos")?n:-n);else switch(e){case"xPos":document.querySelector("#rig").setEntityAttribute("position",i.pos,{x:i.pos.x+t,y:i.pos.y,z:i.pos.z});break;case"xNeg":document.querySelector("#rig").setEntityAttribute("position",i.pos,{x:i.pos.x-t,y:i.pos.y,z:i.pos.z});break;case"zNeg":document.querySelector("#rig").setEntityAttribute("position",i.pos,{x:i.pos.x,y:i.pos.y,z:i.pos.z+t});break;case"zPos":document.querySelector("#rig").setEntityAttribute("position",i.pos,{x:i.pos.x,y:i.pos.y,z:i.pos.z-t})}},a.testPosition=function(e){try{document.querySelector("#rig")&&a.moveOnVector(a.state.vector,a.upDownTest(a.onUpDownAxis(e)))}catch(t){console.log(t)}},a.deviceOrientationHandler=a.deviceOrientationHandler.bind(i()(a)),a.orientationChangeHandler=a.orientationChangeHandler.bind(i()(a)),a.state={orientation:0,timer:Date.now(),distanceBetween:60,timeoutLength:2e3,startingPoint:null,vectors:["xPos","xNeg","zPos","zNeg"],vector:"xPos"},a}o()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){window.removeEventListener("deviceorientation",this.deviceOrientationHandler,!1),window.removeEventListener("orientationchange",this.orientationChangeHandler,!1)},a.componentDidMount=function(){window.addEventListener("deviceorientation",this.deviceOrientationHandler,!1),window.addEventListener("orientationchange",this.orientationChangeHandler,!1)},a.deviceOrientationHandler=function(e){var t=e.alpha,a=e.beta,n=e.gamma;if(this.state.startingPoint)this.testPosition(e);else{var i={alpha:t,beta:a,gamma:n};this.setState({startingPoint:i,orientation:window.orientation})}},a.orientationChangeHandler=function(e){this.setState({orientation:window.orientation})},a.render=function(){return c.a.createElement(c.a.Fragment,null,this.props.children)},t}(c.a.Component);t.a=l},176:function(e,t,a){"use strict";var n=a(10),i=a.n(n),r=a(0),o=a.n(r),s=function(e){function t(t){var a;return(a=e.call(this)||this).state={cameras:null},a}i()(t,e);var n=t.prototype;return n.createdAnimations=function(e,t){var a,n=this;return t||(a=e.map(function(e,t){var a=" animation__"+t+"=";for(var i in n)a+=i+": "+n[i]+";";return a.substr(0,a.length-1)})),a},n.componentDidMount=function(){var e=this;a.e(2).then(a.t.bind(null,194,7)).then(function(){a.e(3).then(a.t.bind(null,198,7)).then(function(){e.setState({cameras:o.a.createElement("a-entity",{id:"rig",position:"0 10 -3",rotation:"0 0 0"},o.a.createElement("a-camera",{"keyboard-controls":!0,far:"20000",position:"0 2 0",id:"main-camera"},o.a.createElement("a-cursor",null)))})})}).catch(function(e){return console.error(e)})},n.render=function(){return this.state.cameras},t}(o.a.PureComponent);t.a=s},177:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),o=a.n(r),s=function(e){var t={primitive:"sphere",radius:e.radius};return e.spherical?i.a.createElement("a-entity",{geometry:t,position:e.position,rotation:e.rotation},i.a.createElement("a-image",{geometry:t,src:e.fluid.src,position:"0 0 0"})):i.a.createElement("a-entity",{position:e.position,rotation:e.rotation},i.a.createElement("a-image",{material:"opacity:0.8",src:e.fluid.src,width:e.width,height:e.height,position:"0 0 0"}))};s.propTypes={position:o.a.string,rotation:o.a.string,radius:o.a.string,src:o.a.string,width:o.a.number,height:o.a.number},t.a=s},178:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),o=a.n(r),s=function(e){var t="primitive: sphere; radius:"+e.radius;return e.spherical?i.a.createElement("a-entity",{geometry:t,position:e.position,rotation:e.rotation},i.a.createElement("a-video",{material:"side:double",geometry:t,src:e.src,controls:!0,"video-texture":!0,position:"0 0 0"})):i.a.createElement("a-entity",{position:e.position,rotation:e.rotation},i.a.createElement("a-video",{src:e.src,controls:!0,"video-texture":!0,width:e.width,height:e.height,position:"0 0 0"}))};s.propTypes={position:o.a.string,rotation:o.a.string,radius:o.a.string,src:o.a.string,width:o.a.number,height:o.a.number},t.a=s},179:function(e,t,a){"use strict";var n=a(10),i=a.n(n),r=a(0),o=a.n(r),s=a(31),c=(a(191),a(23),a(84)),l=a.n(c),d=a(193),u=a.n(d),f=function(e){var t=e.node,a=l()(e,["node"]);return a&&a.fluid?o.a.createElement(u.a,Object.assign({crossOrigin:"anonymous",fluid:a.fluid},a)):a&&a.fixed?o.a.createElement(u.a,Object.assign({crossOrigin:"anonymous",fixed:a.fixed},a)):(t&&t.publicURL,o.a.createElement("img",Object.assign({alt:"Gallery item",src:Object(s.d)(a.src),crossOrigin:"anonymous"},a)))},m=function(e){function t(t){var a;return(a=e.call(this)||this).buildImageAssets=function(){return a.props.data.allFile.edges.map(function(e,t){return e&&e.node&&e.node.childImageSharp&&e.node.childImageSharp.fluid?o.a.createElement(f,{alt:e.node.childImageSharp.fluid.originalName,id:e.node.id,key:t,fluid:e.node.childImageSharp.fluid}):null})},a.state={assets:null},a}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;a.e(2).then(a.t.bind(null,194,7)).then(function(t){e.setState({assets:o.a.createElement("a-assets",null,o.a.createElement("img",{crossorigin:"anonymous",alt:"universe background",src:Object(s.d)("/images/universe_4096.jpg"),id:"universe_4096Image"}),e.buildImageAssets(),o.a.createElement("img",{crossorigin:"anonymous",alt:"earth with Degrees",src:Object(s.d)("/images/equirectangularWithDegrees.jpg"),id:"earthDegrees"}),o.a.createElement("img",{crossorigin:"anonymous",alt:"eye chart",src:Object(s.d)("/images/eyeChart_3000_6526.jpg"),id:"eyeChart"}),o.a.createElement("video",{id:"webcam",playsInline:!0}),o.a.createElement("video",{id:"haightVideo","webkit-playsinline":"",playsInline:"",controls:"",src:Object(s.d)("/videos/satTemptingHaight.mp4"),crossorigin:"anonymous"}),o.a.createElement("video",{id:"mixVideo","webkit-playsinline":"",playsInline:"",controls:"",src:Object(s.d)("/videos/mix_injected.mp4"),crossorigin:"anonymous"}))})}).catch(function(e){return console.error(e)})},n.render=function(){return this.state.assets},t}(o.a.PureComponent);t.a=m},191:function(e,t,a){"use strict";a(192)("fixed",function(e){return function(){return e(this,"tt","","")}})},192:function(e,t,a){var n=a(15),i=a(24),r=a(26),o=/"/g,s=function(e,t,a,n){var i=String(r(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},193:function(e,t,a){"use strict";var n=a(12);t.__esModule=!0,t.default=void 0;var i,r=n(a(10)),o=n(a(41)),s=n(a(84)),c=n(a(92)),l=n(a(0)),d=n(a(1)),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,n=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t},f=Object.create({}),m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,h=g&&window.IntersectionObserver,v=new WeakMap;var y=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+n+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+c+a+i+t+o+r+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=l.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,i=e.src,r=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return l.default.createElement("img",(0,c.default)({sizes:a,srcSet:n,src:i},f,{onLoad:o,onError:d,ref:t,loading:u,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});w.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&m(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&h&&!t.critical&&!a.seenBefore;var n=t.critical||g&&(p||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,E=e.itemProp,S=e.loading,O=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,c.default)({opacity:O?1:0,transition:z?"opacity "+v+"ms":"none"},s),x="boolean"==typeof h?"lightgray":h,k={transitionDelay:v+"ms"},I=(0,c.default)({opacity:this.state.imgLoaded?0:1},z&&k,s,f),R={title:t,alt:this.state.isVisible?"":a,style:I,className:m};if(p){var P=p;return l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),x&&l.default.createElement(y,{title:t,style:(0,c.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&k)}),P.base64&&l.default.createElement(w,(0,c.default)({src:P.base64},R)),P.tracedSVG&&l.default.createElement(w,(0,c.default)({src:P.tracedSVG},R)),this.state.isVisible&&l.default.createElement("picture",null,P.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:P.srcSetWebp,sizes:P.sizes}),l.default.createElement(w,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:a,title:t,loading:S},P))}}))}if(g){var j=g,C=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},r);return"inherit"===r.display&&delete C.display,l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},x&&l.default.createElement(y,{title:t,style:(0,c.default)({backgroundColor:x,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},z&&k)}),j.base64&&l.default.createElement(w,(0,c.default)({src:j.base64},R)),j.tracedSVG&&l.default.createElement(w,(0,c.default)({src:j.tracedSVG},R)),this.state.isVisible&&l.default.createElement("picture",null,j.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),l.default.createElement(w,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:a,title:t,loading:S},j))}}))}return null},t}(l.default.Component);E.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),O=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:S,sizes:O,fixed:S,fluid:O,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var z=E;t.default=z}}]);
//# sourceMappingURL=4-65a2c8f721d381e152b6.js.map