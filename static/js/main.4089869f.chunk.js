(this.webpackJsonpbudget_tracker=this.webpackJsonpbudget_tracker||[]).push([[0],{146:function(e,t,a){},148:function(e,t,a){},155:function(e,t){},157:function(e,t){},168:function(e,t){},170:function(e,t){},197:function(e,t){},199:function(e,t){},200:function(e,t){},205:function(e,t){},207:function(e,t){},213:function(e,t){},215:function(e,t){},234:function(e,t){},246:function(e,t){},249:function(e,t){},309:function(e,t){},310:function(e,t){},323:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),r=a(140),s=a.n(r),o=(a(146),a(19)),i=a.n(o),l=a(44),u=a(141),d=a(4),b=(a(148),a(0)),j=function(e){var t=e.id,a=e.date,n=e.amount,c=e.category,r=e.note,s=new Date(a),o=[String(s.getMonth()+1)+"/"+String(s.getUTCDate()),n.toFixed(2),c,r];return Object(b.jsx)("tr",{id:t,children:o.map((function(e,t){return Object(b.jsx)("td",{children:e},t)}))})},h=function(e){var t=e.expenses,a=e.tableVisible,n={visibility:null==a||a?"visible":"hidden",overflow:"scroll"};return Object(b.jsxs)("table",{style:n,className:"table table-striped table-dark table-hover align-left",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Date"}),Object(b.jsx)("th",{scope:"col",children:"Amount"}),Object(b.jsx)("th",{scope:"col",children:"Category"}),Object(b.jsx)("th",{scope:"col",children:"Note"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e,t){return Object(b.jsx)(j,{id:t,date:e.date,amount:e.amount,category:e.category,note:e.note},t)}))})]})},m=function(e){var t=e.category,a=e.budget_amount,n=e.amount_remaining,c=e.category_transactions;a=null!=a?a:0;var r=(n=null!=n?n:a)>0?n:0,s=a-n,o=e.percentage_month_completed*a,i="card card-block h-100",l="  |  ".concat(Math.round(100*s/a),"% Usage");0===a?(i+="text-white bg-secondary",l="Error Card"):s<0?(i+=" text-white bg-info",l=" | Reason: Refund?"):i+=s/a>1?" text-white budget-past-100-percent":s>=o?" text-white budget-between-50-100":" text-white budget-below-50";return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"col-8 col-md-4 col-no-padding",children:Object(b.jsxs)("div",{className:i,onClick:function(){var e="Transaction".concat(c.length>1?"s":""," for ").concat(t);e+="\n";for(var a=0;a<32;a++)e+="_";e+="\n\n",c.forEach((function(t){var a=new Date(t.date),n=String(a.getMonth()+1)+"/"+String(a.getUTCDate());e+="".concat(n," - $").concat(t.amount," - ").concat(t.note,"\n")})),0===c.length&&(e="No transaction for ".concat(t," this month.")),alert(e)},children:[Object(b.jsx)("h5",{className:"card-title pt-3",children:t}),Object(b.jsxs)("div",{className:"card-body text-left",children:[Object(b.jsxs)("p",{className:"card-subtitle mb-2",children:["Remaining: $",r.toFixed(2)]}),Object(b.jsxs)("h6",{className:"card-text",children:["Budget: $",a]}),Object(b.jsxs)("h6",{className:"card-text",children:["Today's Budget: $",(o-s).toFixed(2)]}),Object(b.jsxs)("h6",{className:"card-text",children:["Spent: ",s.toFixed(2)," ",l?"".concat(l):""]})]})]})})})},f=function(e){var t=e.addExpense,a=e.categories,c=e.category_amount_remaining,r=(new Date).toISOString();r=r.slice(0,r.indexOf("T"));var s=Object(n.useState)(r),o=Object(d.a)(s,2),i=o[0],l=o[1],u=Object(n.useState)(""),j=Object(d.a)(u,2),h=j[0],m=j[1],f=Object(n.useState)(""),p=Object(d.a)(f,2),O=p[0],x=p[1],g=Object(n.useState)(""),v=Object(d.a)(g,2),y=v[0],w=v[1],N="col-sm-4 col-form-label text-white",S="text-danger col-sm-4 col-form-label text-white",_="form-control",D="form-control is-invalid",C=Object(n.useState)(N),k=Object(d.a)(C,2),E=k[0],F=k[1],P=Object(n.useState)(_),T=Object(d.a)(P,2),I=T[0],M=T[1],A=Object(n.useState)(N),B=Object(d.a)(A,2),$=B[0],K=B[1],H=Object(n.useState)(_),V=Object(d.a)(H,2),R=V[0],U=V[1],G=Object(n.useState)(N),J=Object(d.a)(G,2),L=J[0],Q=J[1],W=Object(n.useState)(_),X=Object(d.a)(W,2),Y=X[0],Z=X[1],q=Object(n.useState)(N),z=Object(d.a)(q,2),ee=z[0],te=z[1],ae=Object(n.useState)(_),ne=Object(d.a)(ae,2),ce=ne[0],re=ne[1],se=a.length>0&&a.map((function(e,t){var a="";return a=null!=c[e.name]&&c[e.name]>0?(a="$"+String(Math.round(c[e.name]))).padEnd(5)+"- ":"$0".padEnd(5)+"- ",Object(b.jsxs)("option",{value:e.name,children:[a,e.name]},t)}),undefined),oe=function(e){return function(t){switch(e){case"amount":w(t.target.value);break;case"category":x(t.target.value);break;case"note":m(t.target.value);break;case"date":var a=(new Date).toISOString();if(a=a.slice(0,a.indexOf("T")),t.target.value>a)return alert("Cannot have an expense in the future."),void l(a);l(t.target.value);break;default:alert("An unknown data: ".concat(e," was passed into the switch statement."))}}};return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=!0;if(""===y||0===y?(K(S),U(D),a=!1):(K(N),U(_)),""===h?(Q(S),Z(D),a=!1):(Q(N),Z(_)),""===O?(te(S),re(D),a=!1):(te(N),re(_)),""===i?(F(S),M(D),a=!1):(F(N),M(_)),a)try{var n=(new Date).toISOString();n=n.slice(0,n.indexOf("T"));var c=Number(y);t({date:i,amount:c,category:O,note:h}),l(n),m(""),x(""),w("")}catch(e){alert("Bad number conversion of amount to Number type")}},className:"px-4",children:[Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("label",{className:E,htmlFor:"dateinput",children:"Date"}),Object(b.jsx)("div",{className:"col-sm-8",children:Object(b.jsx)("input",{type:"date",className:I,value:i,onChange:oe("date")})})]}),Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("label",{className:$,htmlFor:"amountinput",children:"Amount"}),Object(b.jsx)("div",{className:"col-sm-8",children:Object(b.jsx)("input",{type:"number",step:"0.01",className:R,value:y,onChange:oe("amount"),id:"amountinput","aria-describedby":"amountHelp",placeholder:"Amount"})})]}),Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("label",{className:ee,htmlFor:"categorySelect",children:"Category"}),Object(b.jsx)("div",{className:"col-sm-8",children:Object(b.jsxs)("select",{className:ce,value:O,onChange:oe("category"),children:[Object(b.jsx)("option",{value:"",children:"Choose..."}),se]})})]}),Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("label",{className:L,htmlFor:"noteInput",children:"Note"}),Object(b.jsx)("div",{className:"col-sm-8",children:Object(b.jsx)("input",{type:"text",value:h,onChange:oe("note"),className:Y,id:"noteInput","aria-describedby":"noteHelp",placeholder:"Description"})})]}),Object(b.jsx)("div",{className:"form-group row justify-content-center",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})},p=function(e){var t=e.setApiKey,c=Object(n.useState)(""),r=Object(d.a)(c,2),s=r[0],o=r[1],i=new Set("~`!@#$%^&*()-_=+{[}}\\|:;<,>.?/".split("")),l=new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),u=new Set("0123456789".split("")),j=a(150);return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Decryption Password"}),Object(b.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",value:s,onChange:function(e){o(e.target.value)}}),Object(b.jsx)("small",{id:"passwordHelp",className:"form-text text-muted",children:"Password must be 18 characters with atleast 3 special characters, 3 capital letters, and 3 numbers."})]}),Object(b.jsx)("button",{type:"button",onClick:function(){if(s.length<18)alert("Password too short");else{for(var e=0,a=0,n=0,c=0;c<s.length;c++)i.has(s.charAt(c))?e+=1:l.has(s.charAt(c))?a+=1:u.has(s.charAt(c))&&(n+=1);if(e<3)alert("Must have at least 4 special characters");else if(a<3)alert("Must have at least 4 capital characters");else if(n<3)alert("Must have at least 4 numbers");else{if("18e43a72df19870ba4573f6818b856dd35c57ab5fec5c8d9a693cf6eae29f69f8811b6d389acf3d5fc6e6ce33aacf16a0db62bea7f3fbf434bdeb4961317d7a7"===j.createHmac("sha512","saltySnail%").update(s).digest("hex")){var r=j.createDecipher("aes-128-cbc",s),d=String("b320e99d0d4f644ad42add3bfa1fbc11ba4310226a4d71f4e178ee58f8eeb662"),b=r.update(d,"hex","utf8");b+=r.final("utf8"),localStorage.setItem("apiKey",b),t(b)}else alert("Incorrect"),o("")}}},className:"btn btn-primary",children:"Enter"})]})})},O=a(252),x=null;var g=function(){var e=Object(n.useState)(null==localStorage.getItem("apiKey")?"":localStorage.getItem("apiKey")),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(d.a)(r,2),o=s[0],j=s[1],g=Object(n.useState)([]),v=Object(d.a)(g,2),y=v[0],w=v[1],N=Object(n.useState)(!1),S=Object(d.a)(N,2),_=S[0],D=S[1];function C(){return(C=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],x("Transactions").select({view:"Grid view"}).eachPage((function(e,a){e.forEach((function(e){t.push(e.fields)})),a()}),(function(e){e?console.error(e):j(t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],x("Category_Budgets").select({view:"Grid view",fields:["name","amount"]}).eachPage((function(e,a){e.forEach((function(e){t.push(e.fields)})),a()}),(function(e){e?console.error(e):w(t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x("Transactions").create([{fields:t}],(function(e,a){e?alert("Error posting Expense to Airtable ".concat(t,".")):a.forEach((function(e){}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){a&&(x=new O({apiKey:a}).base("app5VP16VBp5NgMg5"),function(){C.apply(this,arguments)}(),function(){k.apply(this,arguments)}())}),[a]);var F={total_spent:0,total_budget:0};o.forEach((function(e){F.total_spent+=e.amount,F.hasOwnProperty(e.category)?F[e.category]+=e.amount:F[e.category]=e.amount}));var P={};y.forEach((function(e,t){P[e.name]=t,F.total_budget+=e.amount}));var T={};y.forEach((function(e,t){if(F.hasOwnProperty(e.name)){var a=e.amount-F[e.name];T[e.name]=null!=a?a:0}else T[e.name]=e.amount}));var I=new Date,M=new Date(I.getTime());M.setMonth(I.getMonth()+1),M.setDate(0);var A=M.getDate()>I.getDate()?M.getDate()-I.getDate():0,B=I.getDate()+A,$=I.getDate()/B,K=F.total_budget*$-F.total_spent;return Object(b.jsx)(b.Fragment,{children:a?Object(b.jsxs)("div",{className:"container-fluid p-2 text-center",children:[Object(b.jsxs)("div",{className:"form-div enter-expense-gradient",children:[Object(b.jsx)("h1",{className:"text-white pt-3",children:"Budget Tracker \ud83d\udcb8"}),Object(b.jsx)("small",{className:"text-light",children:Object(b.jsxs)("mark",{children:["Today's Budget: ",Object(b.jsxs)("b",{children:["$",K.toFixed(2)]})]})}),Object(b.jsx)("div",{className:"row d-flex justify-content-center mt-2",children:Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsx)(f,{addExpense:function(e){e.hasOwnProperty("date")&&e.hasOwnProperty("amount")&&e.hasOwnProperty("category")&&e.hasOwnProperty("note")?(j([e].concat(Object(u.a)(o))),function(e){E.apply(this,arguments)}(e)):alert("The expense object made did not have the following props: date, amount, category, note. \n Failed to set state")},categories:y,category_amount_remaining:T})})})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"container-fluid ",children:[Object(b.jsx)("h2",{children:"Categories"}),Object(b.jsx)("div",{className:"row flex-row flex-nowrap overflow-auto",children:y.map((function(e,t){return Object(b.jsx)(m,{category:e.name,budget_amount:e.amount,amount_remaining:T[e.name],category_transactions:o.filter((function(t){return t.category===e.name})),percentage_month_completed:$},t)}))})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"",children:[Object(b.jsxs)("div",{onClick:function(){D(!_)},style:{cursor:"pointer"},children:[Object(b.jsxs)("h2",{children:[" Expenses ",_?"\u02c4":"\u02c5"," "]}),Object(b.jsx)("small",{className:"mb-2",children:Object(b.jsxs)("mark",{children:["Spent $",F.total_spent.toFixed(2)," of $",F.total_budget]})})]}),Object(b.jsx)(h,{expenses:o,tableVisible:_})]})]}):Object(b.jsx)(p,{setApiKey:c})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,324)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),v()}},[[323,1,2]]]);
//# sourceMappingURL=main.4089869f.chunk.js.map