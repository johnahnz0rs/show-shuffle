(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,s,o){e.exports=o(24)},18:function(e,s,o){},20:function(e,s,o){},24:function(e,s,o){"use strict";o.r(s);var a=o(0),n=o.n(a),t=o(12),i=o.n(t),d=(o(18),o(3)),l=o(4),r=o(8),p=o(5),c=o(7),m=(o(20),o(26)),h=o(9),u=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container-fluid fixed-top py-1",style:{backgroundColor:"pink",paddingRight:"20px"}},n.a.createElement("a",{href:"#",className:"text-right",style:{color:"white"}},n.a.createElement("h3",{className:"font-weight-bold mb-0"},"Show Shuffle"),n.a.createElement("p",{className:"my-0"},"back to Top"))))},f=function(e){function s(e){var o;return Object(d.a)(this,s),(o=Object(r.a)(this,Object(p.a)(s).call(this,e))).chooseShow=function(e){var s=e.target.name,a=o.state.shows.find(function(e){return e.shortName===s}),n=a.name;o.setState({show:a}),o.setState({showName:n}),o.chooseEpisode(a)},o.chooseEpisode=function(e){var s=Math.floor(Math.random()*e.episodes.length)+1;o.setState({season:s});var a=e.episodes[s-1].episodes,n=Math.floor(Math.random()*a)+1;o.setState({episode:n});var t=0,i=!0,d=!1,l=void 0;try{for(var r,p=e.episodes[Symbol.iterator]();!(i=(r=p.next()).done);i=!0){t+=r.value.episodes}}catch(c){d=!0,l=c}finally{try{i||null==p.return||p.return()}finally{if(d)throw l}}o.setState({showTotal:t})},o.state={show:null,showName:null,season:null,episodes:null,showTotal:null,shows:[{shortName:"futurama",name:"Futurama",episodes:[{season:1,episodes:13},{season:2,episodes:19},{season:3,episodes:22},{season:4,episodes:18},{season:5,episodes:16},{season:6,episodes:26},{season:7,episodes:26}]},{shortName:"theOffice",name:"The Office",episodes:[{season:1,episodes:6},{season:2,episodes:22},{season:3,episodes:25},{season:4,episodes:19},{season:5,episodes:28},{season:6,episodes:26},{season:7,episodes:26},{season:8,episodes:24},{season:9,episodes:25}]},{shortName:"parksAndRec",name:"Parks and Rec",episodes:[{season:1,episodes:6},{season:2,episodes:24},{season:3,episodes:16},{season:4,episodes:22},{season:5,episodes:22},{season:6,episodes:22},{season:7,episodes:13}]},{shortName:"kingOfTheHill",name:"King of the Hill",episodes:[{season:1,episodes:12},{season:2,episodes:23},{season:3,episodes:25},{season:4,episodes:24},{season:5,episodes:20},{season:6,episodes:22},{season:7,episodes:23},{season:8,episodes:22},{season:9,episodes:15},{season:10,episodes:15},{season:11,episodes:12},{season:12,episodes:22},{season:13,episodes:24}]},{shortName:"ventureBros",name:"The Venture Bros.",episodes:[{season:1,episodes:13},{season:2,episodes:13},{season:3,episodes:13},{season:4,episodes:16},{season:5,episodes:8},{season:6,episodes:8},{season:7,episodes:10}]},{shortName:"theWire",name:"The Wire",episodes:[{season:1,episodes:13},{season:2,episodes:12},{season:3,episodes:12},{season:4,episodes:13},{season:5,episodes:10}]},{shortName:"southPark",name:"South Park",episodes:[{season:1,episodes:13},{season:2,episodes:18},{season:3,episodes:17},{season:4,episodes:17},{season:5,episodes:14},{season:6,episodes:17},{season:7,episodes:15},{season:8,episodes:14},{season:9,episodes:14},{season:10,episodes:14},{season:11,episodes:14},{season:12,episodes:14},{season:13,episodes:14},{season:14,episodes:14},{season:15,episodes:14},{season:16,episodes:14},{season:17,episodes:10},{season:18,episodes:10},{season:19,episodes:10},{season:20,episodes:10},{season:21,episodes:10},{season:22,episodes:10}]},{shortName:"breakingBad",name:"Breaking Bad",episodes:[{season:1,episodes:7},{season:2,episodes:13},{season:3,episodes:13},{season:4,episodes:13},{season:5,episodes:16}]},{shortName:"sopranos",name:"Sopranos",episodes:[{season:1,episodes:13},{season:2,episodes:13},{season:3,episodes:13},{season:4,episodes:13},{season:5,episodes:13},{season:6,episodes:21}]},{shortName:"seinfeld",name:"Seinfeld",episodes:[{season:1,episodes:5},{season:2,episodes:12},{season:3,episodes:23},{season:4,episodes:24},{season:5,episodes:22},{season:6,episodes:24},{season:7,episodes:24},{season:8,episodes:22},{season:9,episodes:24}]},{shortName:"brooklynNineNine",name:"Brooklyn Nine-Nine",episodes:[{season:1,episodes:22},{season:2,episodes:23},{season:3,episodes:23},{season:4,episodes:22},{season:5,episodes:22}]}]},o.chooseShow=o.chooseShow.bind(Object(h.a)(Object(h.a)(o))),o}return Object(c.a)(s,e),Object(l.a)(s,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:""},n.a.createElement("a",{name:"recommendation"}),n.a.createElement(u,null),n.a.createElement("div",{className:"container-fluid my-background text-center"},n.a.createElement("div",{className:"text-right mt-1",style:{marginBottom:"150px"}},n.a.createElement("a",{tabIndex:"0",className:"btn btn-sm btn-light",role:"button","data-toggle":"popover","data-trigger":"focus",title:"wutup, homey?","data-content":"let's pick something to watch. click a show to begin"},"?")),this.state.showName&&this.state.season&&this.state.episode&&n.a.createElement("div",{className:"container-fluid row justify-content-center my-5 mx-auto align-middle"},n.a.createElement("div",{className:"col-8 col-md-5 d-block text-center btn-light",style:{border:"5px solid black",borderRadius:"8px",margin:"0 auto",padding:"20px"}},n.a.createElement("h3",{className:"align-middle"},"You chose",n.a.createElement("br",null),n.a.createElement("span",{className:"font-weight-bold"},n.a.createElement("u",null,this.state.showName))),n.a.createElement("p",{style:{fontSize:"small"},className:"align-middle"},"(",this.state.showTotal," total eps)"),n.a.createElement("h3",{className:"font-weight-bold"},n.a.createElement("u",null,"Season ",this.state.season," Episode ",this.state.episode)))),this.state.shows&&n.a.createElement("div",{className:"container-fluid row my-5 mx-auto"},this.state.shows.map(function(s){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"d-inline-block d-md-none col-6 mx-auto"},n.a.createElement("a",{href:"#",name:s.shortName,className:"btn btn-lg btn-light mx-auto show",onClick:e.chooseShow},s.name)),n.a.createElement("div",{className:"d-none d-md-inline-block col-4"},n.a.createElement("a",{href:"#",name:s.shortName,className:"btn btn-lg btn-light mx-auto show d-block",onClick:e.chooseShow},s.name)))})))))}}]),s}(n.a.Component),b=function(e){function s(e){var o;return Object(d.a)(this,s),(o=Object(r.a)(this,Object(p.a)(s).call(this,e))).state={},o}return Object(c.a)(s,e),Object(l.a)(s,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"root-div"},n.a.createElement(f,null)))}}]),s}(n.a.Component),w=function(e){function s(){return Object(d.a)(this,s),Object(r.a)(this,Object(p.a)(s).apply(this,arguments))}return Object(c.a)(s,e),Object(l.a)(s,[{key:"render",value:function(){return n.a.createElement(m.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(b,null)))}}]),s}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.b8429bd2.chunk.js.map