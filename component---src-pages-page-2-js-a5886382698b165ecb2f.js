(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{163:function(t,n,e){"use strict";e.r(n);var i=e(0),a=e.n(i),o=e(40),r=e.n(o),s=e(10),l=e.n(s),d=function(t){function n(n){var e;return(e=t.call(this,n)||this).onCompassAxis=function(t){return Math.round(t.alpha+e.state.orientation)%360},e.onUpDownAxis=function(t){var n=0===e.state.orientation?"beta":"gamma",i=Math.round((450+t[n])%360);return i>90?i-180:i},e.onSideToSideAxis=function(t){var n=0===e.state.orientation?"gamma":"beta",i=Math.round((450+t[n])%360-90);return i>90?i-180:i},e.deorient=function(t){window.removeEventListener("deviceorientation",e.deviceOrientationHandler,!1)},e.reorient=function(t){e.setState({startingPoint:null,started:{alpha:null,beta:null,gamma:new Date}}),window.addEventListener("deviceorientation",e.deviceOrientationHandler,!1)},e.deviceOrientationHandler=function(t){var n=t.alpha,i=t.beta,a=t.gamma,o=t.absolute;if(e.state.startingPoint)e.testPosition(t);else{var r={alpha:n,beta:i,gamma:a,absolute:o};e.setState({startingPoint:r})}},e.orientationChangeHandler=function(t){console.log(window.orientation),e.setState({orientation:window.orientation})},e.upDownTest=function(t){return Math.floor(t/10)},e.testPosition=function(t){console.log("testPosition("+e.upDownTest(e.onUpDownAxis(t))+")"),document.querySelector("#zeroVal").innerHTML="Compass:\n    "+e.onCompassAxis(t)+", UD:\n    "+e.onUpDownAxis(t)+", Spin:\n    "+e.onSideToSideAxis(t)+"}\n    "},e.deviceOrientationHandler=e.deviceOrientationHandler.bind(r()(e)),e.state={orientation:0,startingPoint:null},e}l()(n,t);var e=n.prototype;return e.componentWillUnmount=function(){window.removeEventListener("deviceorientation",this.deviceOrientationHandler,!0),window.removeEventListener("orientationchange",this.orientationChangeHandler,!0)},e.componentDidMount=function(){window.addEventListener("orientationchange",this.orientationChangeHandler,!0)},e.render=function(){return a.a.createElement("main",null,a.a.createElement("div",{className:"allCoords"},a.a.createElement("div",{onClick:this.reorient,className:"coord alpha"},"1A (",this.state.startingPoint?Math.round(this.state.startingPoint.alpha):0,")"),a.a.createElement("div",{className:"coord beta"},"1B (",this.state.startingPoint?Math.round(this.state.startingPoint.beta):0,")"),a.a.createElement("div",{onClick:this.deorient,className:"coord gamma"},"1G (",this.state.startingPoint?Math.round(this.state.startingPoint.gamma):0,")")),a.a.createElement("div",{id:"zeroVal"},"click, here"),this.props.children)},n}(a.a.Component);n.default=function(){return a.a.createElement(d,null,a.a.createElement("h1",null,"II"),a.a.createElement("p",null,"This is gyroscope test"))}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-a5886382698b165ecb2f.js.map