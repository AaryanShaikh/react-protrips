(this.webpackJsonpprotrips=this.webpackJsonpprotrips||[]).push([[0],{30:function(t,e,c){},31:function(t,e,c){},40:function(t,e,c){"use strict";c.r(e);var s=c(1),n=c.n(s),r=c(23),i=c.n(r),a=(c(30),c(8)),l=c(9),j=c(10),p=c(12),b=c(11),o=(c(31),c(14)),d=c(15),h=c(13),O=c(0),u=function(t){Object(p.a)(c,t);var e=Object(b.a)(c);function c(){return Object(l.a)(this,c),e.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)(h.b,{to:"/",children:Object(O.jsx)(o.a,{icon:d.d})}),Object(O.jsx)(h.b,{to:"/addTrip",children:Object(O.jsx)(o.a,{icon:d.c})}),Object(O.jsx)(h.b,{to:"/display",children:Object(O.jsx)(o.a,{icon:d.b})})]})}}]),c}(s.Component),x=c(3),y=function(t){Object(p.a)(c,t);var e=Object(b.a)(c);function c(t){var s;return Object(l.a)(this,c),(s=e.call(this,t)).state={trips:Object(a.a)(s.props.trips)},s}return Object(j.a)(c,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{className:"home",children:[Object(O.jsx)("span",{className:"total",children:this.state.trips.length}),"trips"]}),Object(O.jsxs)("div",{className:"trips",children:[Object(O.jsxs)("span",{children:[this.state.trips.filter((function(t){return"tropic"===t.type})).length,Object(O.jsx)(o.a,{icon:d.f})]}),Object(O.jsxs)("span",{children:[this.state.trips.filter((function(t){return"trek"===t.type})).length,Object(O.jsx)(o.a,{icon:d.e})]}),Object(O.jsxs)("span",{children:[this.state.trips.filter((function(t){return"club"===t.type})).length,Object(O.jsx)(o.a,{icon:d.a})]})]})]})}}]),c}(s.Component),m=function(t){Object(p.a)(c,t);var e=Object(b.a)(c);function c(t){var s;return Object(l.a)(this,c),(s=e.call(this,t)).addNewTrip=function(){var t=document.getElementById("date").value,e=document.getElementById("place").value,c=document.getElementById("type").value;console.log("Date:".concat(t,"\nPlace:").concat(e,"\nType:").concat(c)),s.state.trips.push({date:t,place:e,type:c}),s.props.addTrip(s.state.trips)},s.state={trips:Object(a.a)(s.props.trips)},s}return Object(j.a)(c,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"trip",children:[Object(O.jsx)("p",{className:"headAT",children:"Add a Trip"}),Object(O.jsx)("label",{htmlFor:"",children:"Date:"}),Object(O.jsx)("input",{type:"date",name:"",id:"date"}),Object(O.jsx)("label",{htmlFor:"",children:"Place:"}),Object(O.jsx)("input",{type:"text",name:"",id:"place"}),Object(O.jsx)("label",{htmlFor:"",children:"Type:"}),Object(O.jsxs)("select",{name:"",id:"type",children:[Object(O.jsx)("option",{value:"trek",children:"Trek"}),Object(O.jsx)("option",{value:"club",children:"Club"}),Object(O.jsx)("option",{value:"tropic",children:"Tropic"})]}),Object(O.jsx)(h.b,{to:"/display",className:"submitAT",onClick:this.addNewTrip,children:"Submit"})]})}}]),c}(s.Component),f=function(t){Object(p.a)(c,t);var e=Object(b.a)(c);function c(t){var s;return Object(l.a)(this,c),(s=e.call(this,t)).typeAll=function(){s.setState({trips:Object(a.a)(s.props.trips),type:"All"})},s.typeTrek=function(){s.setState({trips:Object(a.a)(s.props.trips.filter((function(t){return"trek"===t.type}))),type:"Trek"})},s.typeClub=function(){s.setState({trips:Object(a.a)(s.props.trips.filter((function(t){return"club"===t.type}))),type:"Club"})},s.typeTropic=function(){s.setState({trips:Object(a.a)(s.props.trips.filter((function(t){return"tropic"===t.type}))),type:"Tropic"})},s.state={trips:Object(a.a)(s.props.trips),type:"All"},s}return Object(j.a)(c,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{className:"headD",children:[this.state.type," Trips"]}),Object(O.jsx)("table",{children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Date"}),Object(O.jsx)("th",{children:"Place"}),Object(O.jsx)("th",{children:"Type"})]}),this.state.trips.map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t.date}),Object(O.jsx)("td",{children:t.place}),Object(O.jsx)("td",{children:t.type})]})}))]})}),Object(O.jsxs)("div",{className:"filter",children:["Filter by:",Object(O.jsx)("span",{onClick:this.typeAll,children:"All"}),Object(O.jsx)("span",{className:"symbol",children:"\u26aa"}),Object(O.jsx)("span",{onClick:this.typeTrek,children:"Treks"}),Object(O.jsx)("span",{className:"symbol",children:"\u26aa"}),Object(O.jsx)("span",{onClick:this.typeClub,children:"Clubs"}),Object(O.jsx)("span",{className:"symbol",children:"\u26aa"}),Object(O.jsx)("span",{onClick:this.typeTropic,children:"Tropics"})]})]})}}]),c}(s.Component),v=function(t){Object(p.a)(c,t);var e=Object(b.a)(c);function c(){var t;return Object(l.a)(this,c),(t=e.call(this)).addTrip=function(e){t.setState({trips:Object(a.a)(e)})},t.state={trips:[{date:"2017-01-10",place:"Manali",type:"trek"},{date:"2017-04-05",place:"Mumbai",type:"club"},{date:"2017-02-09",place:"Marina",type:"tropic"},{date:"2020-10-21",place:"Coimbatore",type:"trek"}]},t}return Object(j.a)(c,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(h.a,{children:[Object(O.jsx)(u,{}),Object(O.jsx)("div",{className:"workplace",children:Object(O.jsxs)(x.c,{children:[Object(O.jsx)(x.a,{exact:!0,path:"/",children:Object(O.jsx)(y,{trips:this.state.trips})}),Object(O.jsx)(x.a,{path:"/addTrip",children:Object(O.jsx)(m,{addTrip:this.addTrip,trips:this.state.trips})}),Object(O.jsx)(x.a,{path:"/display",children:Object(O.jsx)(f,{trips:this.state.trips})})]})})]})})}}]),c}(s.Component),T=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(e){var c=e.getCLS,s=e.getFID,n=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),s(t),n(t),r(t),i(t)}))};i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),T()}},[[40,1,2]]]);
//# sourceMappingURL=main.ab56e396.chunk.js.map