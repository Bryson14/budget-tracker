(this.webpackJsonpbudget_tracker=this.webpackJsonpbudget_tracker||[]).push([[0],{103:function(e,t){},104:function(e,t){},117:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(35),s=a.n(r),o=(a(41),a(5)),i=a.n(o),l=a(14),u=a(36),d=a(2),b=(a(43),a(0)),j=function(e){var t=e.id,a=[e.date,e.amount,e.category,e.note];return Object(b.jsx)("tr",{id:t,children:a.map((function(e,t){return Object(b.jsx)("td",{children:e},t)}))})},m=function(e){var t=e.expenses;e.setSpentPerCategory;return Object(b.jsx)("div",{className:"",children:Object(b.jsxs)("table",{className:"table table-striped table-hover align-middle",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Date"}),Object(b.jsx)("th",{scope:"col",children:"Amount ($)"}),Object(b.jsx)("th",{scope:"col",children:"Category"}),Object(b.jsx)("th",{scope:"col",children:"Note"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e,t){return Object(b.jsx)(j,{id:t,date:e.date,amount:e.amount,category:e.category,note:e.note},t)}))})]})})},h=function(e){var t=e.category,a=e.budget_amount,n=e.current_amount,c=(a=null!=a&&null!=a.amount?a.amount:0)>(n=n.toFixed(2))?(a-n).toFixed(2):0,r="card card-block mb-3 px-3 pb-2",s="  |  ".concat(Math.round(100*n/a),"% Usage");return 0===a&&0===n?(r+="",s="Error Card"):0===a&&n>0?(r+=" text-white bg-danger",s="| No budget for this."):0===a&&n<0?(r+=" text-white bg-info",s=" | Reason: Refund?"):r+=n/a>1?" text-white bg-danger":n/a>.8?" text-white bg-warning":n/a>.5?" text-white bg-secondary":" text-white bg-success",Object(b.jsx)("div",{className:"col-md-10 col-lg-4",children:Object(b.jsxs)("div",{className:r,children:[Object(b.jsx)("div",{className:"card-body",children:" "}),Object(b.jsx)("h5",{className:"card-title",children:t}),Object(b.jsxs)("p",{className:"card-subtitle mb-2",children:["Remaining: $",c]}),Object(b.jsxs)("h6",{className:"card-text",children:["Budget: $",a]}),Object(b.jsxs)("p",{className:"card-text",children:["Spent: ",n," ",s?"".concat(s):""]})]})})},p=function(e){var t=e.addExpense,a=e.categories,c=(new Date).toISOString();c=c.slice(0,c.indexOf("T"));var r=Object(n.useState)(c),s=Object(d.a)(r,2),o=s[0],i=s[1],l=Object(n.useState)(""),u=Object(d.a)(l,2),j=u[0],m=u[1],h=Object(n.useState)(""),p=Object(d.a)(h,2),O=p[0],f=p[1],x=Object(n.useState)(""),g=Object(d.a)(x,2),v=g[0],y=g[1],w="mr-3",N="mr-3 text-danger",S="my-1",k="my-1 form-control is-invalid",E=Object(n.useState)(w),C=Object(d.a)(E,2),_=C[0],F=C[1],P=Object(n.useState)(S),T=Object(d.a)(P,2),B=T[0],A=T[1],D=Object(n.useState)(w),I=Object(d.a)(D,2),R=I[0],$=I[1],H=Object(n.useState)(S),M=Object(d.a)(H,2),G=M[0],J=M[1],L=Object(n.useState)(w),V=Object(d.a)(L,2),K=V[0],U=V[1],Y=Object(n.useState)(S),q=Object(d.a)(Y,2),z=q[0],Q=q[1],W=Object(n.useState)(w),X=Object(d.a)(W,2),Z=X[0],ee=X[1],te=Object(n.useState)(S),ae=Object(d.a)(te,2),ne=ae[0],ce=ae[1],re=a.length>0&&a.map((function(e,t){return Object(b.jsx)("option",{value:e.name,children:e.name},t)}),undefined),se=function(e){return function(t){switch(e){case"amount":y(t.target.value);break;case"category":f(t.target.value);break;case"note":m(t.target.value);break;case"date":var a=(new Date).toISOString();if(a=a.slice(0,a.indexOf("T")),t.target.value>a)return alert("Cannot have an expense in the future."),void i("");i(t.target.value);break;default:alert("An unknown data: ".concat(e," was passed into the switch statement."))}}};return Object(b.jsx)("div",{className:"container-fluid m-2",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=!0;if(""===v||0===v?($(N),J(k),a=!1):($(w),J(S)),""===j?(U(N),Q(k),a=!1):(U(w),Q(S)),""===O?(ee(N),ce(k),a=!1):(ee(w),ce(S)),""===o?(F(N),A(k),a=!1):(F(w),A(S)),a)try{var n=(new Date).toISOString();n=n.slice(0,n.indexOf("T"));var c=Number(v);t({date:o,amount:c,category:O,note:j}),i(n),m(""),f(""),y("")}catch(e){alert("Bad number conversion of amount to Number type")}},children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:_,htmlFor:"dateinput",children:"Date"}),Object(b.jsx)("input",{type:"date",className:B,value:o,onChange:se("date")})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:R,htmlFor:"amountinput",children:"Amount"}),Object(b.jsx)("input",{type:"number",className:G,value:v,onChange:se("amount"),pattern:"\\d*",id:"amountinput","aria-describedby":"amountHelp",placeholder:"Enter Expense Amount"}),Object(b.jsx)("small",{id:"amountHelp",className:"form-text text-muted",children:"Remember the change!"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:Z,htmlFor:"categorySelect",children:"Category"}),Object(b.jsxs)("select",{className:ne,value:O,onChange:se("category"),children:[Object(b.jsx)("option",{selected:!0,value:"",children:"Choose..."}),re]})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:K,htmlFor:"noteInput",children:"Note"}),Object(b.jsx)("input",{type:"text",value:j,onChange:se("note"),className:z,id:"noteInput","aria-describedby":"noteHelp",placeholder:"And it came to pass..."}),Object(b.jsx)("small",{id:"noteHelp",className:"form-text text-muted",children:"Add the store name or other details to remember this."})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})},O=new(a(45))({apiKey:"keywSY73734Bt376s"}).base("app5VP16VBp5NgMg5");var f=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(d.a)(r,2),o=s[0],j=s[1];function f(){return(f=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],O("Transactions").select({view:"Grid view"}).eachPage((function(e,a){e.forEach((function(e){t.push(e.fields)})),a()}),(function(e){e?console.error(e):c(t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],O("Category_Budgets").select({view:"Grid view",fields:["name","amount"]}).eachPage((function(e,a){e.forEach((function(e){console.log("Retrieved category:",e.get("Name")),t.push(e.fields)})),a()}),(function(e){e?console.error(e):j(t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O("Transactions").create([{fields:t}],(function(e,a){e?alert("Error posting Expense to Airtable ".concat(t,".")):a.forEach((function(e){}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){f.apply(this,arguments)}(),function(){x.apply(this,arguments)}()}),[]);var v={total_spent:0,total_budget:0};a.forEach((function(e){v.total_spent+=e.amount,v.hasOwnProperty(e.category)?v[e.category]+=e.amount:v[e.category]=e.amount}));var y={};return o.forEach((function(e,t){y[e.name]=t,v.total_budget+=e.amount})),Object(b.jsxs)("div",{className:"container m-4 p-4 text-center",children:[Object(b.jsx)("h1",{children:"Budget Tracker"}),Object(b.jsxs)("small",{children:["Spent $",v.total_spent.toFixed(2)," of $",v.total_budget]}),Object(b.jsx)(p,{addExpense:function(e){e.hasOwnProperty("date")&&e.hasOwnProperty("amount")&&e.hasOwnProperty("category")&&e.hasOwnProperty("note")?(c([e].concat(Object(u.a)(a))),function(e){g.apply(this,arguments)}(e)):alert("The expense object made did not have the following props: date, amount, category, note. \n Failed to set state")},categories:o}),Object(b.jsx)("div",{className:"container-fluid",children:Object.entries(v).map((function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(b.jsx)("div",{className:"row d-flex flex-row flex-nowrap overflow-auto",children:Object(b.jsx)(h,{category:a,budget_amount:o[y[a]],current_amount:n})})}))}),Object(b.jsxs)("div",{className:"container m-1 p-1",children:[Object(b.jsx)("h2",{children:"Expenses"}),Object(b.jsx)(m,{expenses:a})]})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,118)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),x()},41:function(e,t,a){},43:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.6ab7cd57.chunk.js.map