(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{228:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(219),o=n(253),s=n(221),c=n(254),l=n(244),d=n(245),u=n(246),f=n(19);var p=function(e){var t,i;function a(t){var n;return(n=e.call(this)||this).positionedImageAsset=function(e,t,i,a,o){var s,c,l,u,f=e.node.childImageSharp.fluid,p=n.state.distanceBetween;switch(a){case"xPos":return s=t%2==0?"0 180 0":"0 0 0",l=Math.floor(i.length/4)-Math.floor(t/2),u=t%2==0?p*l+" "+(800*o+2)+" "+p:p*l+" "+(800*o+2)+" "+-p,r.a.createElement(d.a,{key:e.node.id,fluid:f,rotation:s,width:p,height:p,position:u});case"xNeg":break;case"zPos":return s=t%2==0?"0 270 0":"0 90 0",c=Math.floor(i.length/4)-Math.floor(t/2),p=n.state.distanceBetween,u=t%2==0?p+" "+(800*o+2)+" "+p*c:-p+" "+(800*o+2)+" "+p*c,r.a.createElement(d.a,{key:e.node.id,fluid:f,rotation:s,width:p,height:p,position:u})}},n.builtImageAssets=function(e,t){return n.props.data.allFile.edges.map((function(i,r,a){return i&&i.node&&i.node.childImageSharp&&i.node.childImageSharp.fluid?n.positionedImageAsset(i,r,a,e,t):null}))},n.builtVideoAssets=function(e,t){var i,a,o,s=Object(f.a)().getState().getImages.length/3;switch(e){case"xPos":o=function(e){return e%2==0?"0 270 0":"0 90 0"},i=2*-s*n.state.distanceBetween+" "+(800*t+120)+" 0",a=2*s*n.state.distanceBetween+" "+(800*t+120)+" 0";break;case"xNeg":break;case"zPos":o=function(e){return e%2==0?"0 180 0":"0 0 0"},i="0 "+(800*t+120)+" "+-s*n.state.distanceBetween,a="0 "+(800*t+120)+" "+s*n.state.distanceBetween}return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{src:"#mixVideo",id:"mix",spherical:!0,width:400,height:400,radius:"750",position:i}),r.a.createElement(u.a,{src:"#haightVideo",id:"haight",rotation:o(1),width:600,height:340,position:a}))},n.builtAframeAssets=function(){return r.a.createElement("a-sky",{geometry:"radius:8000",color:"#fff",src:"#universe_4096Image"})},n.state={distanceBetween:60,imagesPerSide:40,numberOfSides:4,entities:null},n}i=e,(t=a).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var o=a.prototype;return o.componentDidMount=function(){var e=this;n.e(1).then(n.t.bind(null,255,7)).then((function(t){e.setState({entities:r.a.createElement("a-entity",null,e.builtAframeAssets(),e.builtImageAssets("xPos",-.1),e.builtImageAssets("zPos",-.1),e.builtVideoAssets("xPos",0),e.builtVideoAssets("zPos",0))})})).catch((function(e){return console.error(e)}))},o.render=function(){return this.state.entities},a}(r.a.PureComponent);var m=function(e){var t,i;function a(t){var n;return(n=e.call(this)||this).state={loadedContent:null,aframeLoaded:null},n}i=e,(t=a).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var o=a.prototype;return o.componentDidMount=function(){var e=this;n.e(1).then(n.t.bind(null,255,7)).then((function(t){t.components["video-texture"]||t.registerComponent("video-texture",{init:function(){var e=this;this.el.addEventListener("click",(function(t){try{document.querySelector(e.el.getAttribute("src")).paused?document.querySelector(e.el.getAttribute("src")).play():document.querySelector(e.el.getAttribute("src")).pause()}catch(n){}}))}}),e.setState({aframeLoaded:!0,loadedContent:r.a.createElement("main",null,r.a.createElement("a-scene",{cursor:"rayOrigin: mouse",embedded:!0,style:{width:"100%",height:"100%"}},r.a.createElement(c.a,{data:e.props.data}),r.a.createElement(p,{data:e.props.data}),r.a.createElement(l.a,{data:e.props.data})))})})).catch((function(e){return console.error(e)}))},o.render=function(){return this.state.loadedContent},a}(r.a.PureComponent),h=n(220);n.d(t,"fluidImage",(function(){return y})),n.d(t,"pageQuery",(function(){return b}));var g=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).state={timeout:!1,loading:"is-loading"},n.setWrapperRef=n.setWrapperRef.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=i.prototype;return c.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){document.querySelector("#instructions").style.display="none",e.setState({loading:""})}),500)},c.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},c.setWrapperRef=function(e){this.wrapperRef=e},c.render=function(){return r.a.createElement(a.a,{location:this.props.location},r.a.createElement("div",{className:"body "+this.state.loading},r.a.createElement("div",{id:"wrapper",className:"page"},r.a.createElement(s.a,{timeout:this.state.timeout}),r.a.createElement(o.a,{timeout:this.state.timeout,setWrapperRef:this.setWrapperRef},r.a.createElement(m,{data:this.props.data,timeout:this.state.timeout,setWrapperRef:this.setWrapperRef}),v()),r.a.createElement(h.a,{timeout:this.state.timeout})),r.a.createElement("div",{id:"bg"})))},i}(r.a.Component),v=(t.default=g,function(){return r.a.createElement("div",{className:"content",id:"instructions"},r.a.createElement("div",{className:"inner"},r.a.createElement("h3",null,"a device-only experience"),r.a.createElement("p",{className:"singleSpace"},"from the center, tilt up or down",r.a.createElement("br",null),"in one of the four directions",r.a.createElement("br",null),"selecting elements at the end")))}),y="2237598098",b="2913584172"},234:function(e,t,n){var i=n(1),r=n(11),a=n(46),o=/"/g,s=function(e,t,n,i){var r=String(a(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},236:function(e,t,n){"use strict";n(234)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},243:function(e,t,n){"use strict";n(10),n(9),n(4),n(85),n(158),n(236);var i=n(27);t.__esModule=!0,t.default=void 0;var r,a=i(n(94)),o=i(n(90)),s=i(n(162)),c=i(n(163)),l=i(n(0)),d=i(n(18)),u=function(e){var t=(0,c.default)({},e),n=t.resolutions,i=t.sizes,r=t.critical;return n&&(t.fixed=n,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,n=e.fixed;return(t&&t[0]||n&&n[0]).src},p=Object.create({}),m=function(e){var t=u(e),n=f(t);return p[n]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,v=g&&window.IntersectionObserver,y=new WeakMap;function b(e){return e.map((function(e){var t=e.src,n=e.srcSet,i=e.srcSetWebp,r=e.media,a=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:a}),l.default.createElement("source",{media:r,srcSet:n,sizes:a}))}))}function w(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function E(e){return e.map((function(e){var t=e.src,n=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:n,srcSet:i})}))}function S(e){return e.map((function(e){var t=e.src,n=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:n,srcSet:i})}))}function O(e,t){var n=e.srcSet,i=e.srcSetWebp,r=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:n)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var x=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return n&&(n.observe(e),y.set(e,t)),function(){n.unobserve(e),y.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+l+o+s+n+i+t+a+r+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=function(e){var t=e.src,n=e.imageVariants,i=e.generateSources,r=e.spreadProps,a=l.default.createElement(I,(0,c.default)({src:t},r));return n.length>1?l.default.createElement("picture",null,i(n),a):a},I=l.default.forwardRef((function(e,t){var n=e.sizes,i=e.srcSet,r=e.src,a=e.style,o=e.onLoad,d=e.onError,u=e.onClick,f=e.loading,p=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return l.default.createElement("img",(0,c.default)({sizes:n,srcSet:i,src:r},m,{onLoad:o,onError:d,onClick:u,ref:t,loading:f,draggable:p,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));I.propTypes={style:d.default.object,onError:d.default.func,onClick:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=g&&m(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!h&&v&&!n.isCritical&&!n.seenBefore;var i=n.isCritical||g&&(h||!n.useIOSupport);return n.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,a.default)(n)),n.handleRef=n.handleRef.bind((0,a.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=f(t),p[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,i=e.className,r=e.style,a=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,g=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,w=e.itemProp,O=e.loading,x=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,c.default)({opacity:z?1:0,transition:L?"opacity "+v+"ms":"none"},s),A="boolean"==typeof g?"lightgray":g,R={transitionDelay:v+"ms"},_=(0,c.default)({opacity:this.state.imgLoaded?0:1},L&&R,{},s,{},f),V={title:t,alt:this.state.isVisible?"":n,style:_,className:p,itemProp:w};if(m){var j=m,N=j[0];return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),A&&l.default.createElement(y,{title:t,style:(0,c.default)({backgroundColor:A,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&R)}),N.base64&&l.default.createElement(P,{src:N.base64,spreadProps:V,imageVariants:j,generateSources:S}),N.tracedSVG&&l.default.createElement(P,{src:N.tracedSVG,spreadProps:V,imageVariants:j,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,b(j),l.default.createElement(I,{alt:n,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:w,loading:O,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:n,title:t,loading:O},N,{imageVariants:j}))}}))}if(h){var q=h,H=q[0],M=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},a);return"inherit"===a.display&&delete M.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},A&&l.default.createElement(y,{title:t,style:(0,c.default)({backgroundColor:A,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},L&&R)}),H.base64&&l.default.createElement(P,{src:H.base64,spreadProps:V,imageVariants:q,generateSources:S}),H.tracedSVG&&l.default.createElement(P,{src:H.tracedSVG,spreadProps:V,imageVariants:q,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,b(q),l.default.createElement(I,{alt:n,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:w,loading:O,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:n,title:t,loading:O},H,{imageVariants:q}))}}))}return null},t}(l.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),C=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});z.propTypes={resolutions:L,sizes:C,fixed:d.default.oneOfType([L,d.default.arrayOf(L)]),fluid:d.default.oneOfType([C,d.default.arrayOf(C)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onClick:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var A=z;t.default=A},244:function(e,t,n){"use strict";var i=n(0),r=n.n(i);var a=function(e){var t,i;function a(t){var n;return(n=e.call(this)||this).state={cameras:null},n}i=e,(t=a).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var o=a.prototype;return o.createdAnimations=function(e,t){var n,i=this;return t||(n=e.map((function(e,t){var n=" animation__"+t+"=";for(var r in i)n+=r+": "+i[r]+";";return n.substr(0,n.length-1)}))),n},o.componentDidMount=function(){var e=this;n.e(1).then(n.t.bind(null,255,7)).then((function(){n.e(2).then(n.t.bind(null,256,7)).then((function(){e.setState({cameras:r.a.createElement("a-entity",{id:"rig",position:"0 10 -3",rotation:"0 0 0"},r.a.createElement("a-camera",{"keyboard-controls":!0,far:"20000",position:"0 2 0",id:"main-camera"},r.a.createElement("a-cursor",null)))})}))})).catch((function(e){return console.error(e)}))},o.render=function(){return this.state.cameras},a}(r.a.PureComponent);t.a=a},245:function(e,t,n){"use strict";var i=n(0),r=n.n(i);t.a=function(e){var t={primitive:"sphere",radius:e.radius};return e.spherical?r.a.createElement("a-entity",{geometry:t,position:e.position,rotation:e.rotation},r.a.createElement("a-image",{geometry:t,src:e.fluid.src,position:"0 0 0"})):r.a.createElement("a-entity",{position:e.position,rotation:e.rotation},r.a.createElement("a-image",{material:"opacity:0.8",src:e.fluid.src,width:e.width,height:e.height,position:"0 0 0"}))}},246:function(e,t,n){"use strict";var i=n(0),r=n.n(i);t.a=function(e){var t="primitive: sphere; radius:"+e.radius;return e.spherical?r.a.createElement("a-entity",{geometry:t,position:e.position,rotation:e.rotation},r.a.createElement("a-video",{material:"side:double",geometry:t,src:e.src,controls:!0,"video-texture":!0,position:"0 0 0"})):r.a.createElement("a-entity",{position:e.position,rotation:e.rotation},r.a.createElement("a-video",{src:e.src,controls:!0,"video-texture":!0,width:e.width,height:e.height,position:"0 0 0"}))}},253:function(e,t,n){"use strict";var i=n(0),r=n.n(i);function a(e,t){window.startingPoint=null,window.addEventListener("deviceorientation",e.deviceOrientation,!1),window.addEventListener("orientationchange",e.orientationChange,!1),t.setState({capabilities:!0})}n(19);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).touchHandler=function(e){n.state.capabilities||function(e,t){try{DeviceOrientationEvent&&"function"==typeof DeviceOrientationEvent.requestPermission?DeviceOrientationEvent.requestPermission().then((function(n){"granted"===n?a(e,t):alert("You will need to restart the browser and give permission for device orientation access to use this.")})).catch(console.error):a(e,t)}catch(n){alert("Your device and application combination do not support device orientation events.")}}({deviceOrientation:n.deviceOrientationHandler,orientationChange:n.orientationChangeHandler},o(n)),n.iamEvent(e,"touch")},n.iamEvent=function(e,t){},n.mouseHandler=function(e){n.iamEvent(e,"mouse")},n.clickHandler=function(e){n.iamEvent(e,"click")},n.keyHandler=function(e){switch(n.iamEvent(e,"key"),e.preventDefault(),e.key){case"ArrowRight":n.moveOnVector("z"===n.state.vector.charAt(0)?"xPos":"zPos",n.state.distanceBetween/4,n.state.distanceBetween/10);break;case"ArrowLeft":n.moveOnVector("z"===n.state.vector.charAt(0)?"xNeg":"zNeg",n.state.distanceBetween/4,n.state.distanceBetween/10);break;case"ArrowUp":n.moveOnVector("z"===n.state.vector.charAt(0)?"zPos":"xPos",n.state.distanceBetween/4,n.state.distanceBetween/10);break;case"ArrowDown":n.moveOnVector("z"===n.state.vector.charAt(0)?"zNeg":"xNeg",n.state.distanceBetween/4,n.state.distanceBetween/10)}},n.onUpDownAxis=function(e){var t=0===n.state.orientation?"beta":"gamma",i=Math.round((450+e[t])%360);return i>90?i-180:i},n.upDownTest=function(e){return Math.abs(e)>20?e/10:0},n.selectView=function(){var e;switch(Math.floor((document.querySelector("#rig").getAttribute("rotation").y+45)/90)%4){case 1:e="xPos";break;case 2:e="zPos";break;case 3:e="xNeg";break;case 0:e="zNeg";break;default:e=n.state.vector}return e},n.getOld=function(){var e={pos:document.querySelector("#rig")&&document.querySelector("#rig").getAttribute("position")?document.querySelector("#rig").getAttribute("position"):"0 0 0",rot:document.querySelector("#rig")&&document.querySelector("#rig").getAttribute("rotation")?document.querySelector("#rig").getAttribute("rotation"):"0 0 0"};return Math.abs(e.pos.x)<n.state.distanceBetween/2&&Math.abs(e.pos.z)<n.state.distanceBetween/2&&n.state.vector!==n.selectView()&&n.setState({vector:n.selectView()}),e},n.testRotation=function(e,t,n){try{document.querySelector("#rig").setEntityAttribute("rotation",e.rot,{x:e.rot.x,y:e.rot.y+n,z:e.rot.z})}catch(i){console.log("testRotation failed")}},n.moveOnVector=function(e,t,i){var r=n.getOld();if(e.charAt(0)!==n.state.vector.charAt(0))n.testRotation(r,e.charAt(0),-1===e.indexOf("Pos")?i:-i);else switch(e){case"xPos":document.querySelector("#rig").setEntityAttribute("position",r.pos,{x:r.pos.x+t,y:r.pos.y,z:r.pos.z});break;case"xNeg":document.querySelector("#rig").setEntityAttribute("position",r.pos,{x:r.pos.x-t,y:r.pos.y,z:r.pos.z});break;case"zNeg":document.querySelector("#rig").setEntityAttribute("position",r.pos,{x:r.pos.x,y:r.pos.y,z:r.pos.z+t});break;case"zPos":document.querySelector("#rig").setEntityAttribute("position",r.pos,{x:r.pos.x,y:r.pos.y,z:r.pos.z-t})}},n.testPosition=function(e){try{document.querySelector("#rig")&&n.moveOnVector(n.state.vector,n.upDownTest(n.onUpDownAxis(e)),0)}catch(t){console.log(t)}},n.deviceOrientationHandler=n.deviceOrientationHandler.bind(o(n)),n.orientationChangeHandler=n.orientationChangeHandler.bind(o(n)),n.state={capabilities:!1,orientation:0,timer:Date.now(),distanceBetween:60,timeoutLength:2e3,startingPoint:null,vectors:["xPos","xNeg","zPos","zNeg"],vector:"xPos"},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=i.prototype;return s.setWrapperRef=function(e){this.wrapperRef=e},s.componentWillUnmount=function(){},s.componentDidMount=function(){document.addEventListener("keydown",this.keyHandler,!1),document.addEventListener("keyup",this.keyHandler,!1),window.addEventListener("touchstart",this.touchHandler,!1),window.addEventListener("touchmove",this.touchHandler,!1),window.addEventListener("touchend",this.touchHandler,!1),window.addEventListener("click",this.clickHandler,!1)},s.deviceOrientationHandler=function(e){var t=e.alpha,n=e.beta,i=e.gamma;if(this.state.startingPoint)this.testPosition(e);else{var r={alpha:t,beta:n,gamma:i};this.setState({startingPoint:r,orientation:window.orientation})}},s.orientationChangeHandler=function(e){this.setState({orientation:window.orientation})},s.render=function(){return r.a.createElement(r.a.Fragment,null,this.props.children)},i}(r.a.Component);t.a=s},254:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(23),o=(n(10),n(9),n(4),n(15),n(236),n(14),n(243)),s=n.n(o);var c=function(e){var t=e.node,n=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["node"]);return n&&n.fluid?r.a.createElement(s.a,Object.assign({crossOrigin:"anonymous",fluid:n.fluid},n)):n&&n.fixed?r.a.createElement(s.a,Object.assign({crossOrigin:"anonymous",fixed:n.fixed},n)):(t&&t.publicURL,r.a.createElement("img",Object.assign({alt:"Gallery item",src:Object(a.withPrefix)(n.src),crossOrigin:"anonymous"},n)))};var l=function(e){var t,i;function o(t){var n;return(n=e.call(this)||this).buildImageAssets=function(){return n.props.data.allFile.edges.map((function(e,t){return e&&e.node&&e.node.childImageSharp&&e.node.childImageSharp.fluid?r.a.createElement(c,{alt:e.node.childImageSharp.fluid.originalName,id:e.node.id,key:t,fluid:e.node.childImageSharp.fluid}):null}))},n.state={assets:null},n}i=e,(t=o).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var s=o.prototype;return s.componentDidMount=function(){var e=this;n.e(1).then(n.t.bind(null,255,7)).then((function(t){e.setState({assets:r.a.createElement("a-assets",null,r.a.createElement("img",{crossOrigin:"anonymous",alt:"universe background",src:Object(a.withPrefix)("/images/universe_4096.jpg"),id:"universe_4096Image"}),e.buildImageAssets(),r.a.createElement("img",{crossOrigin:"anonymous",alt:"earth with Degrees",src:Object(a.withPrefix)("/images/equirectangularWithDegrees.jpg"),id:"earthDegrees"}),r.a.createElement("img",{crossOrigin:"anonymous",alt:"eye chart",src:Object(a.withPrefix)("/images/eyeChart_3000_6526.jpg"),id:"eyeChart"}),r.a.createElement("video",{id:"webcam",playsInline:!0}),r.a.createElement("video",{id:"haightVideo","webkit-playsinline":"",playsInline:"",controls:"",poster:Object(a.withPrefix)("/images/satTemptingHaight.png"),src:Object(a.withPrefix)("/videos/satTemptingHaight.mp4"),crossOrigin:"anonymous"}),r.a.createElement("video",{id:"mixVideo","webkit-playsinline":"",playsInline:"",controls:"",poster:Object(a.withPrefix)("/images/mix_injected.jpg"),src:Object(a.withPrefix)("/videos/mix_injected.mp4"),crossOrigin:"anonymous"}))})})).catch((function(e){return console.error(e)}))},s.render=function(){return this.state.assets},o}(r.a.PureComponent);t.a=l}}]);
//# sourceMappingURL=component---src-pages-creative-js-e47f1f0c646a4215c048.js.map