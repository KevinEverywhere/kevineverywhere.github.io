(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{159:function(e,t,a){"use strict";a.r(t);var n=a(40),i=a.n(n),r=a(10),o=a.n(r),s=a(0),c=a.n(s),l=a(167),m=a(170),p=a(173),u=a(169),d=a(9),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={position:0,active:!1,jobs:null,recommendations:null,isSelected:"jobs",loading:"is-loading"},a.setWrapperRef=a.setWrapperRef.bind(i()(a)),a}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:"",jobs:Object(d.a)().getState().getJobs,recommendations:Object(d.a)().getState().getRecommendations})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.setWrapperRef=function(e){this.wrapperRef=e},a.selectPosition=function(e){this.setState({currentPosition:e})},a.render=function(){return c.a.createElement(l.a,{location:this.props.location,position:this.state.position},c.a.createElement("div",{id:"subwrapper",className:"page"},c.a.createElement(m.a,{active:"work",chosen:this.state.isSelected}),c.a.createElement(p.a,{jobs:this.state.jobs,recommendations:this.state.recommendations,position:this.state.position,isSelected:this.state.isSelected}),c.a.createElement(u.a,null)),c.a.createElement("div",{id:"bg"}))},t}(c.a.Component);t.default=h},166:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(30);t.a=function(e){return i.a.createElement("li",null,i.a.createElement(r.a,{to:e.item.toLowerCase()},e.item))}},167:function(e,t,a){"use strict";var n=a(168),i=a(0),r=a.n(i),o=a(1),s=a.n(o),c=a(171),l=a.n(c),m=a(30),p=(a(172),function(e){var t,a=e.children,i=e.location;return t=i&&"/"===i.pathname?r.a.createElement("div",null,a):r.a.createElement("div",{id:"wrapper",className:"page"},r.a.createElement("div",null,a)),r.a.createElement(m.b,{query:"2994927498",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Kevin Ready is a developer, musician and adventurist."},{name:"keywords",content:"freelance,react,node,javascript,contractor,developer"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{name:"theme-color",content:"#000000"}),r.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),r.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black"}),r.a.createElement("meta",{name:"description",content:"Kevin Ready | Creativist"})),t)},data:n})});p.propTypes={children:s.a.node.isRequired},t.a=p},168:function(e){e.exports={data:{site:{siteMetadata:{title:"PlanetKevin -|- 2019"}}}}},169:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),o=function(e){return i.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};o.propTypes={timeout:a.n(r).a.bool},t.a=o},170:function(e,t,a){"use strict";a(22);var n=a(0),i=a.n(n),r=a(166),o=a(30),s=function(e){return i.a.createElement("nav",null,i.a.createElement(o.a,{to:"/"},i.a.createElement("div",{className:"smlogo"},i.a.createElement("span",{className:"icon fa-bicycle"}))),i.a.createElement("ul",null,i.a.createElement(r.a,{item:"Work"}),i.a.createElement(r.a,{item:"Creative"}),i.a.createElement(r.a,{item:"Contact"})))},c=function(e){var t;switch(e){case"":t=e;break;case"jobs":t="";break;case"recommendations":t=function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement(r.a,{item:e})))}("work");break;default:t=e}return t};t.a=function(e){return i.a.createElement("header",{id:"header"},i.a.createElement(s,Object.assign({},e,{chosen:e.chosen})),c(e.chosen))}},173:function(e,t,a){"use strict";var n=a(10),i=a.n(n),r=a(0),o=a.n(r),s=a(1),c=a.n(s),l=a(30),m=function(e){var t=e.item;return o.a.createElement("div",{className:"box"},o.a.createElement("details",null,o.a.createElement("summary",null,t.Company),o.a.createElement("h3",null,t.Title),t.Description))};m.propTypes={item:c.a.shape({Company:c.a.string,Title:c.a.string,Description:c.a.string})};var p=m,u=function(e){function t(t){return e.call(this)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("details",{key:this.props.item.key},o.a.createElement("summary",null,this.props.item.First," ",this.props.item.Last," "),o.a.createElement("h3",null,this.props.item.Title),this.props.item.Text)},t}(o.a.Component);u.propTypes={item:c.a.shape({First:c.a.string,Last:c.a.string,Company:c.a.string,Title:c.a.string,Text:c.a.string,Created:c.a.string})};var d=u,h=function(e){function t(t){return e.call(this)||this}i()(t,e);var a=t.prototype;return a.drawrecommendations=function(){return this.props.recommendations.map(function(e,t){return o.a.createElement(d,{key:t,item:e})})},a.drawjobs=function(){return this.props.jobs.map(function(e,t){return o.a.createElement(p,{key:t,item:e})})},a.oldrender=function(){return this.props[this.props.isSelected]?this["draw"+this.props.isSelected]():""},a.render=function(){return o.a.createElement("main",null,o.a.createElement("div",{style:{textShadow:"1px 1px black",padding:"1rem",color:"white",fontWeight:"500",width:"60%",minWidth:"240px"}},o.a.createElement("h2",null,"About Kevin"),o.a.createElement("p",null,"Kevin Ready has kept up with the most current technologies creating code, players, templates and content for startups, agencies, and digital media clients, since Bill Clinton was in office. This site was created in 2019 using react and gatsby, with graphql, aframe, sass, vanilla JavaScript, and others, optimized for mobile. He is looking for contract or permanent work using software and technologies for which he is passionate."),o.a.createElement("p",{style:{display:"none"}},"More information can be found at the following links.")),o.a.createElement("ul",{className:"horizontalBar"},o.a.createElement("li",null,o.a.createElement(l.a,{to:"/contact"},"Contact")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://linkedin.com/in/planetkevin/"},"LinkedIn")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/kevineverywhere/"},"GitHub"))))},t}(o.a.Component);h.propTypes={jobs:c.a.arrayOf(c.a.shape({company:c.a.string,title:c.a.string,description:c.a.string,location:c.a.string}))};t.a=h}}]);
//# sourceMappingURL=component---src-pages-work-js-f3658bca93b881f853c9.js.map