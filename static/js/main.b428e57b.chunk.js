(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(7),r=c.n(a),i=(c(16),c(11)),o=(c(17),c(18),c(8)),j=c(2),l=function(e){switch(e.name){case"Circle":return Object(j.jsx)(o.b,{className:"icons"});case"Cross":return Object(j.jsx)(o.c,{className:"icons"});default:return Object(j.jsx)(o.a,{className:"icons"})}},m=c(9),b=(c(20),c(25)),d=c(26),u=c(27),p=c(30),x=c(28),O=c(29),h=new Array(9).fill("empty"),y=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(i.a)(a,2),o=r[0],y=r[1],w=function(e){return o?Object(m.b)(o,{type:"success"}):"empty"!==h[e]?Object(m.b)("Already Filled",{type:"error"}):(h[e]=c?"Cross":"Circle",n(!c),void("empty"!==h[0]&&h[0]===h[1]&&h[0]===h[2]?y("".concat(h[0]," wins ")):"empty"!==h[3]&&h[3]===h[4]&&h[3]===h[5]?y("".concat(h[3]," wins ")):"empty"!==h[6]&&h[6]===h[7]&&h[6]===h[8]?y("".concat(h[6]," wins ")):"empty"!==h[0]&&h[0]===h[3]&&h[0]===h[6]?y("".concat(h[0]," wins ")):"empty"!==h[1]&&h[1]===h[4]&&h[1]===h[7]?y("".concat(h[1]," wins ")):"empty"!==h[2]&&h[2]===h[5]&&h[2]===h[8]?y("".concat(h[2]," wins ")):"empty"!==h[0]&&h[0]===h[4]&&h[0]===h[8]?y("".concat(h[0]," wins ")):"empty"!==h[2]&&h[2]===h[4]&&h[2]===h[6]&&y("".concat(h[2]," wins "))))};return Object(j.jsxs)(b.a,{className:"p-5",children:[Object(j.jsx)(m.a,{position:"bottom-center",theme:"colored"}),Object(j.jsx)(d.a,{children:Object(j.jsxs)(u.a,{md:6,className:"offset-md-3",children:[o?Object(j.jsxs)("div",{className:"mb-2 mt-2",children:[Object(j.jsx)("h1",{className:"text-uppercase text-center text-warning ",children:o}),Object(j.jsx)(p.a,{color:"success",onClick:function(){n(!1),y(""),h.fill("empty")},children:"Reload The Game"})]}):Object(j.jsxs)("h1",{className:"text-center text-warning",children:[c?"Cross":"Circle"," has to Play"]}),Object(j.jsx)("div",{className:"grid",children:h.map((function(e,t){return Object(j.jsx)(x.a,{onClick:function(){return w(t)},color:"warning",children:Object(j.jsx)(O.a,{className:"box",children:Object(j.jsx)(l,{name:e})})})}))})]})})]})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b428e57b.chunk.js.map