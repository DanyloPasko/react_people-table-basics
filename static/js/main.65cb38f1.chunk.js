(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),r=(c(19),c(20),c(2)),s=c(1),i=c(6),j=c.n(i),o=c(0),l=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(a.c,{to:"/",className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(o.jsx)(a.c,{to:"people",className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})})},b=function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})},h=c(8),d=c(4);function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(22);var u=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},x=function(e){var t=e.person;return Object(o.jsx)(a.b,{to:"/people/".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},p=function(e){var t=e.person,c=Object(r.h)().slug;return Object(o.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c===t.slug}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(x,{person:t})}),Object(o.jsx)("td",{children:t.sex}),Object(o.jsx)("td",{children:t.born}),Object(o.jsx)("td",{children:t.died}),Object(o.jsx)("td",{children:t.mother?Object(o.jsx)(x,{person:t.mother}):t.motherName||"-"}),Object(o.jsx)("td",{children:t.father?Object(o.jsx)(x,{person:t.father}):t.fatherName||"-"})]})},m=function(e){var t=e.people,c=e.isError,n=e.isLoading;return Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[n&&Object(o.jsx)(u,{}),c&&!n&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!c&&!n&&!t.length&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!c&&!n&&t.length>0&&Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsx)(p,{person:e},e.slug)}))})]})]})})},f=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),r=Object(d.a)(a,2),i=r[0],j=r[1],l=Object(s.useState)(!1),b=Object(d.a)(l,2),u=b[0],x=b[1],p=function(e){var t=e.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{father:e.find((function(e){return e.name===t.fatherName})),mother:e.find((function(e){return e.name===t.motherName}))})}));n(t)};return Object(s.useEffect)((function(){x(!0),O().then(p).catch((function(){return j(!0)})).finally((function(){x(!1)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)(m,{people:c,isError:i,isLoading:u})]})},g=function(){return Object(o.jsx)("h1",{className:"title",children:"Page not found"})},v=(c(23),function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"/",element:Object(o.jsx)(b,{})}),Object(o.jsx)(r.b,{path:"home",element:Object(o.jsx)(r.a,{to:"/",replace:!0})}),Object(o.jsxs)(r.b,{path:"people",children:[Object(o.jsx)(r.b,{index:!0,element:Object(o.jsx)(f,{})}),Object(o.jsx)(r.b,{path:":slug",element:Object(o.jsx)(f,{})})]}),Object(o.jsx)(r.b,{path:"*",element:Object(o.jsx)(g,{})})]})})})]})});Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(a.a,{children:Object(o.jsx)(v,{})}))}},[[24,1,2]]]);
//# sourceMappingURL=main.65cb38f1.chunk.js.map