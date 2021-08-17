(this.webpackJsonpbudget_tracker=this.webpackJsonpbudget_tracker||[]).push([[0],{103:function(e,t){},104:function(e,t){},117:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(35),s=a.n(r),o=(a(41),a(5)),i=a.n(o),l=a(14),u=a(36),d=a(2),j=(a(43),a(0)),b=function(e){var t=e.id,a=[e.date,e.amount,e.category,e.note];return Object(j.jsx)("tr",{id:t,children:a.map((function(e,t){return Object(j.jsx)("td",{children:e},t)}))})},m=function(e){var t=e.expenses,a=e.setSpentPerCategory;return Object(n.useEffect)((function(){!function(){var e={};t.forEach((function(t){e.hasOwnProperty(t.category)?e[t.category]+=t.amount:e[t.category]=t.amount})),a(e)}()})),Object(j.jsx)("div",{className:"table-responsive",children:Object(j.jsxs)("table",{className:"table table-striped table-hover align-middle",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Date"}),Object(j.jsx)("th",{scope:"col",children:"Amount ($)"}),Object(j.jsx)("th",{scope:"col",children:"Category"}),Object(j.jsx)("th",{scope:"col",children:"Note"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e,t){return Object(j.jsx)(b,{id:t,date:e.date,amount:e.amount,category:e.category,note:e.note},t)}))})]})})},h=function(e){var t=e.category,a=e.budget_amount,n=e.current_amount;return Object(j.jsxs)("div",{className:"card card-block p-2",children:[Object(j.jsx)("div",{className:"card-body",children:" "}),Object(j.jsx)("h5",{className:"card-title",children:t}),Object(j.jsxs)("h6",{className:"card-subtitle mb-2 text-muted",children:["Budget: $",a]}),Object(j.jsxs)("p",{className:"card-text ",children:["Spent: $",null==n?0:n]})]})},p=function(e){var t=e.addExpense,a=e.categories,c=(new Date).toISOString();c=c.slice(0,c.indexOf("T"));var r=Object(n.useState)(c),s=Object(d.a)(r,2),o=s[0],i=s[1],l=Object(n.useState)(""),u=Object(d.a)(l,2),b=u[0],m=u[1],h=Object(n.useState)(""),p=Object(d.a)(h,2),O=p[0],f=p[1],x=Object(n.useState)(""),g=Object(d.a)(x,2),v=g[0],y=g[1],N="mr-3",w="mr-3 text-danger",S="my-1",C="my-1 form-control is-invalid",k=Object(n.useState)(N),E=Object(d.a)(k,2),P=E[0],F=E[1],T=Object(n.useState)(S),B=Object(d.a)(T,2),I=B[0],A=B[1],D=Object(n.useState)(N),_=Object(d.a)(D,2),H=_[0],$=_[1],G=Object(n.useState)(S),J=Object(d.a)(G,2),L=J[0],M=J[1],R=Object(n.useState)(N),V=Object(d.a)(R,2),K=V[0],Y=V[1],q=Object(n.useState)(S),z=Object(d.a)(q,2),Q=z[0],U=z[1],W=Object(n.useState)(N),X=Object(d.a)(W,2),Z=X[0],ee=X[1],te=Object(n.useState)(S),ae=Object(d.a)(te,2),ne=ae[0],ce=ae[1],re=a.length>0&&a.map((function(e,t){return Object(j.jsx)("option",{value:e.name,children:e.name},t)}),undefined),se=function(e){return function(t){switch(e){case"amount":y(t.target.value);break;case"category":f(t.target.value);break;case"note":m(t.target.value);break;case"date":var a=(new Date).toISOString();if(a=a.slice(0,a.indexOf("T")),t.target.value>a)return alert("Cannot have an expense in the future."),void i("");i(t.target.value);break;default:alert("An unknown data: ".concat(e," was passed into the switch statement."))}}};return Object(j.jsx)("div",{className:"container-fluid m-4",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=!0;if(""===v||0===v?($(w),M(C),a=!1):($(N),M(S)),""===b?(Y(w),U(C),a=!1):(Y(N),U(S)),""===O?(ee(w),ce(C),a=!1):(ee(N),ce(S)),""===o?(F(w),A(C),a=!1):(F(N),A(S)),a)try{var n=(new Date).toISOString();n=n.slice(0,n.indexOf("T"));var c=Number(v);t({date:o,amount:c,category:O,note:b}),i(n),m(""),f(""),y("")}catch(e){alert("Bad number conversion of amount to Number type")}},children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:P,htmlFor:"dateinput",children:"Date"}),Object(j.jsx)("input",{type:"date",className:I,value:o,onChange:se("date")})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:H,htmlFor:"amountinput",children:"Amount"}),Object(j.jsx)("input",{type:"number",className:L,value:v,onChange:se("amount"),pattern:"\\d*",id:"amountinput","aria-describedby":"amountHelp",placeholder:"Enter Expense Amount"}),Object(j.jsx)("small",{id:"amountHelp",className:"form-text text-muted",children:"Remember the change!"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:Z,htmlFor:"categorySelect",children:"Category"}),Object(j.jsxs)("select",{className:ne,value:O,onChange:se("category"),children:[Object(j.jsx)("option",{selected:!0,value:"",children:"Choose..."}),re]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:K,htmlFor:"noteInput",children:"Note"}),Object(j.jsx)("input",{type:"text",value:b,onChange:se("note"),className:Q,id:"noteInput","aria-describedby":"noteHelp",placeholder:"And it came to pass..."}),Object(j.jsx)("small",{id:"noteHelp",className:"form-text text-muted",children:"Add the store name or other details to remember this."})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})},O=new(a(45))({apiKey:"keywSY73734Bt376s"}).base("app5VP16VBp5NgMg5");var f=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(d.a)(r,2),o=s[0],b=s[1],f=Object(n.useState)({}),x=Object(d.a)(f,2),g=x[0],v=x[1];function y(){return(y=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],O("Transactions").select({view:"Grid view"}).eachPage((function(e,a){e.forEach((function(e){t.push(e.fields)})),a()}),(function(e){e?console.error(e):c(t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],O("Category_Budgets").select({view:"Grid view",fields:["name","amount"]}).eachPage((function(e,a){e.forEach((function(e){console.log("Retrieved category:",e.get("Name")),t.push(e.fields)})),a()}),(function(e){e?console.error(e):b(t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O("Transactions").create([{fields:t}],(function(e,a){e?alert("Error posting Expense to Airtable ".concat(t,".")):a.forEach((function(e){console.log(e.getId())}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){y.apply(this,arguments)}(),function(){N.apply(this,arguments)}()}),[]),Object(j.jsxs)("div",{className:"container m-4 p-4",children:[Object(j.jsx)("h1",{children:"Budget Tracker"}),Object(j.jsx)(p,{addExpense:function(e){e.hasOwnProperty("date")&&e.hasOwnProperty("amount")&&e.hasOwnProperty("category")&&e.hasOwnProperty("note")?(c([].concat(Object(u.a)(a),[e])),function(e){w.apply(this,arguments)}(e)):alert("The expense object made did not have the following props: date, amount, category, note. \n Failed to set state")},categories:o}),Object(j.jsxs)("div",{class:"container-fluid",children:[Object(j.jsx)("h2",{children:"Current Categories"}),Object(j.jsx)("div",{class:"row d-flex flex-row flex-nowrap overflow-auto p-3 m-3",children:o.map((function(e,t){return Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)(h,{category:e.name,budget_amount:e.amount,amounts_spent:g[e.name]})})}))})]}),Object(j.jsxs)("div",{className:"container m-3 p-3",children:[Object(j.jsx)("h2",{children:"Expenses"}),Object(j.jsx)(m,{expenses:a,setSpentPerCategory:v})]})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,118)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),x()},41:function(e,t,a){},43:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.2d1aa84e.chunk.js.map