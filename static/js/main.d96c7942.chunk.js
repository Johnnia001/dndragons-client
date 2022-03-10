(this["webpackJsonpdndragons-client"]=this["webpackJsonpdndragons-client"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(27),c=a.n(n),s=(a(74),a(52)),i=a(3),l=a(8),o=a(105),u=(a(75),a(55)),j=a(0);var d=function(e){var t=e.variant,a=e.heading,n=e.message,c=Object(r.useState)(!0),s=Object(i.a)(c,2),l=s[0],o=s[1],d=Object(r.useState)(null),b=Object(i.a)(d,2),h=b[0],O=b[1];return console.log(h),Object(r.useEffect)((function(){var e=setTimeout((function(){return o(!1)}),5e3);return O(e),function(){clearTimeout(h)}}),[]),Object(j.jsx)(u.a,{variant:t,onClose:function(){return o(!1)},dismissible:!0,show:l,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(u.a.Heading,{children:a}),Object(j.jsx)("p",{className:"alert-body",children:n})]})})},b=a(67),h=a(41),O=a(11),x=function(e){if(e.user)return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(O.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(j.jsx)(O.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(j.jsx)(O.c,{to:"/characters",className:"nav-link",children:"My characters"}),Object(j.jsx)(O.c,{to:"/characters/create",className:"nav-link",children:"Create Character"})]})},p=Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(O.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(j.jsx)(O.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),m=Object(j.jsx)(r.Fragment,{children:Object(j.jsx)(O.c,{to:"/",className:"nav-link",children:"Home"})}),v=function(e){var t=e.user;return Object(j.jsxs)(h.a,{bg:"primary",variant:"dark",expand:"md",children:[Object(j.jsx)(h.a.Brand,{children:Object(j.jsx)(O.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"Critical Characters"})}),Object(j.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(b.a,{className:"ml-auto",children:[t&&Object(j.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),m,t?x({user:t}):p]})})]})},g=a(10),f=a.n(g),C=a(13),w="https://critical-character.herokuapp.com",y="http://localhost:8000",S="localhost"===window.location.hostname?y:w,k=a(24),N=a.n(k),A=function(e,t,a){return N.a.post(S+"/sign-up/",{credentials:{email:e,password:t,password_confirmation:a}})},E=function(e,t){return N.a.post(S+"/sign-in/",{credentials:{email:e,password:t}})},G=function(e){return N.a.delete(S+"/sign-out/",{headers:{Authorization:"Token ".concat(e.token)}})},L=function(e,t,a){return N.a.patch(S+"/change-pw/",{passwords:{old:e,new:t}},{headers:{Authorization:"Token ".concat(a.token)}})},P=a(4),M=a(26),D=function(e){var t=e.msgAlert,a=e.setUser,n=Object(r.useState)(""),c=Object(i.a)(n,2),s=c[0],o=c[1],u=Object(r.useState)(""),d=Object(i.a)(u,2),b=d[0],h=d[1],O=Object(r.useState)(""),x=Object(i.a)(O,2),p=x[0],m=x[1],v=Object(r.useState)(!1),g=Object(i.a)(v,2),w=g[0],y=g[1],S=function(){var e=Object(C.a)(f.a.mark((function e(r){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,A(s,b,p);case 4:return e.next=6,E(s,b);case 6:n=e.sent,a(n.data.user),t({heading:"Sign Up Success",message:"Succesfully registered! Youve been signed in as well.",variant:"success"}),y(!0),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),o(""),h(""),m(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords dont match.",variant:"danger"});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return w?Object(j.jsx)(l.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign Up"}),Object(j.jsxs)(P.a,{onSubmit:S,children:[Object(j.jsxs)(P.a.Group,{controlId:"email",children:[Object(j.jsx)(P.a.Label,{children:"Email address"}),Object(j.jsx)(P.a.Control,{required:!0,type:"email",name:"email",value:s,placeholder:"Enter email",onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{controlId:"password",children:[Object(j.jsx)(P.a.Label,{children:"Password"}),Object(j.jsx)(P.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{controlId:"passwordConfirmation",children:[Object(j.jsx)(P.a.Label,{children:"Password Confirmation"}),Object(j.jsx)(P.a.Control,{required:!0,name:"passwordConfirmation",value:p,type:"password",placeholder:"Confirm Password",onChange:function(e){return m(e.target.value)}})]}),Object(j.jsx)(M.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},F=function(e){var t=e.msgAlert,a=e.setUser,n=Object(r.useState)(""),c=Object(i.a)(n,2),s=c[0],o=c[1],u=Object(r.useState)(""),d=Object(i.a)(u,2),b=d[0],h=d[1],O=Object(r.useState)(!1),x=Object(i.a)(O,2),p=x[0],m=x[1],v=function(){var e=Object(C.a)(f.a.mark((function e(r){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,E(s,b);case 4:n=e.sent,a(n.data.user),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),m(!0),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),o(""),h(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return p?Object(j.jsx)(l.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign In"}),Object(j.jsxs)(P.a,{onSubmit:v,children:[Object(j.jsxs)(P.a.Group,{controlId:"email",children:[Object(j.jsx)(P.a.Label,{children:"Email address"}),Object(j.jsx)(P.a.Control,{required:!0,type:"email",name:"email",value:s,placeholder:"Enter email",onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{controlId:"password",children:[Object(j.jsx)(P.a.Label,{children:"Password"}),Object(j.jsx)(P.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)(M.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},H=function(e){var t=e.msgAlert,a=e.clearUser,n=e.user,c=Object(r.useState)(!1),s=Object(i.a)(c,2),o=s[0],u=s[1];return Object(r.useEffect)((function(){(function(){var e=Object(C.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(n);case 2:t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),a(),u(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!n||o?Object(j.jsx)(l.a,{to:"/"}):""},I=function(e){var t=e.msgAlert,a=e.user,n=Object(r.useState)(""),c=Object(i.a)(n,2),s=c[0],o=c[1],u=Object(r.useState)(""),d=Object(i.a)(u,2),b=d[0],h=d[1],O=Object(r.useState)(!1),x=Object(i.a)(O,2),p=x[0],m=x[1],v=function(){var e=Object(C.a)(f.a.mark((function e(r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,L(s,b,a);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),m(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),o(""),h(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!a||p?Object(j.jsx)(l.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Change Password"}),Object(j.jsxs)(P.a,{onSubmit:v,children:[Object(j.jsxs)(P.a.Group,{controlId:"oldPassword",children:[Object(j.jsx)(P.a.Label,{children:"Old password"}),Object(j.jsx)(P.a.Control,{required:!0,name:"oldPassword",value:s,type:"password",placeholder:"Old Password",onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{controlId:"newPassword",children:[Object(j.jsx)(P.a.Label,{children:"New Password"}),Object(j.jsx)(P.a.Control,{required:!0,name:"newPassword",value:b,type:"password",placeholder:"New Password",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)(M.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},B=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h1",{children:"Character"})})})},U=a(2),T=a(50),q=function(e){var t=e.character,a=e.setCharacter;return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Ability Scores"}),Object(j.jsx)("h2",{children:"Your character\u2019s ability scores represent how well your character performs in six distinct areas"}),Object(j.jsx)(P.a,{children:Object(j.jsx)(T.a,{controlId:"floatingSelectGrid",label:"Works with selects",children:Object(j.jsxs)(P.a.Control,{as:"select",type:"strength","aria-label":"Alignment",required:!0,value:t.strength,onChange:function(e){return a((function(t){return Object(U.a)(Object(U.a)({},t),{},{strength:e.target.value})}))},children:[Object(j.jsx)("option",{children:"Strength"}),Object(j.jsx)("option",{value:"Ability Score: 2-3 Modifier: -4",children:"Ability Score: 2-3 Modifier: -4"}),Object(j.jsx)("option",{value:"Ability Score: 4-5 Modifier: -3",children:"Ability Score: 4-5 Modifier: -3"}),Object(j.jsx)("option",{value:"Ability Score: 6-7 Modifier: -2",children:"Ability Score: 6-7 Modifier: -2"}),Object(j.jsx)("option",{value:"Ability Score: 8-9 Modifier: -1",children:"Ability Score: 8-9 Modifier: -1"}),Object(j.jsx)("option",{value:"Ability Score: 10-11 Modifier: +0",children:"Ability Score: 10-11 Modifier: +0"}),Object(j.jsx)("option",{value:"Ability Score: 12-13 Modifier: +1",children:"Ability Score:Ability Score: 12-13 Modifier: +1"}),Object(j.jsx)("option",{value:"Ability Score: 14-15 Modifier: +2",children:"Ability Score: 14-15 Modifier: +2"}),Object(j.jsx)("option",{value:"Ability Score: 16-17 Modifier: +3",children:"Ability Score: 16-17 Modifier: +3"}),Object(j.jsx)("option",{value:"Ability Score: 18-19 Modifier: +4",children:"Ability Score: 18-19 Modifier: +4"}),Object(j.jsx)("option",{value:"Ability Score: 20+ Modifier: +5",children:"Ability Score: 20+ Modifier: +5"})]})})})]})})},R=a(104),W=function(e){return N.a.get(S+"/characters/",{headers:{Authorization:"Token ".concat(e.token)}})},z=function(e,t){return N.a.get("".concat(S,"/characters/").concat(e,"/"),{headers:{Authorization:"Token ".concat(t.token)}})},Y=function(e,t){return N.a.post("".concat(S,"/characters/create/"),{character:t},{headers:{Authorization:"Token ".concat(e.token)}})},J=function(e,t,a,r,n,c,s,i,l,o){var u={user:e};return""!==a&&(u.name=a),""!==r&&(u.level=r),""!==n&&(u.exp=n),""!==c&&(u.charClass=c),""!==s&&(u.race=s),""!==i&&(u.alignment=i),""!==l&&(u.background=l),""!==o&&(u.strength=o),N.a.patch("".concat(S,"/characters/").concat(t,"/"),{character:u},{headers:{Authorization:"Token ".concat(e.token)}})},V=function(e,t){return N.a.delete("".concat(S,"/characters/").concat(t),{headers:{Authorization:"Token ".concat(e.token)}})},X=function(e){var t=e.user,a=e.msgAlert,n=Object(r.useState)(null),c=Object(i.a)(n,2),s=c[0],o=c[1],u=Object(r.useState)(!1),d=Object(i.a)(u,1)[0],b=Object(l.h)().id,h=Object(r.useState)(!1),x=Object(i.a)(h,2),p=x[0],m=x[1];if(!t)return Object(j.jsx)(l.a,{to:"/"});Object(r.useEffect)((function(){(function(){var e=Object(C.a)(f.a.mark((function e(){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(b,t);case 3:r=e.sent,o(r.data.character),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({heading:"Character failed to load",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=function(){var e=Object(C.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(t,b).then(delete t.character,m(!0),a({heading:"Character Deleted Successfully",message:"Profile successfully deleted. Sad to see you go!",variant:"success"}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),a({heading:"Delete Character failed with error: ",message:e.t0.message,variant:"danger"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return p?Object(j.jsx)(l.a,{to:"/"}):s?d?Object(j.jsx)(l.a,{to:"/characters"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:s.name}),Object(j.jsxs)("p",{children:["Level: ",s.level]}),Object(j.jsxs)("p",{children:["EXP:",s.exp]}),Object(j.jsx)("p",{children:s.charClass}),Object(j.jsx)("p",{children:s.race}),Object(j.jsx)("p",{children:s.alignment}),Object(j.jsx)("p",{children:s.background}),Object(j.jsx)("p",{children:s.strength}),Object(j.jsx)(M.a,{variant:"danger",onClick:v,children:"Delete Character"}),Object(j.jsx)(O.b,{to:"/characters/".concat(b,"/edit"),children:Object(j.jsx)(M.a,{variant:"primary",type:"submit",children:"Update Character"})})]})}):Object(j.jsx)(R.a,{animation:"border",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},_=function(e){var t=e.user,a=e.msgAlert,n=Object(r.useState)(null),c=Object(i.a)(n,2),s=c[0],o=c[1],u=Object(r.useState)(!1),d=Object(i.a)(u,2),b=d[0],h=d[1];if(!t)return Object(j.jsx)(l.a,{to:"/"});if(Object(r.useEffect)((function(){(function(){var e=Object(C.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(t).then((function(e){return o(e.data.characters)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),a({heading:"Finding Character failed with error: ",message:"Uh oh. We couldnt find the character you were looking for",variant:"danger"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[]),b)return Object(j.jsx)(l.a,{to:"/"});if(null===s)return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{children:"Fetching Character"}),Object(j.jsx)(R.a,{animation:"border",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(j.jsx)(M.a,{onClick:function(){return h(!0)},variant:"primary",type:"button",children:"Return Home"})]});var x=s.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{to:"/characters/".concat(e.id),children:e.name})},e.id)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{children:"Characters"}),Object(j.jsx)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:Object(j.jsx)("ul",{children:x})})]})},K=function(e){var t=e.user,a=e.msgAlert,n=Object(r.useState)(""),c=Object(i.a)(n,2),s=c[0],o=c[1],u=Object(r.useState)(""),d=Object(i.a)(u,2),b=d[0],h=d[1],O=Object(r.useState)(""),x=Object(i.a)(O,2),p=x[0],m=x[1],v=Object(r.useState)(""),g=Object(i.a)(v,2),w=g[0],y=g[1],S=Object(r.useState)(""),k=Object(i.a)(S,2),N=k[0],A=k[1],E=Object(r.useState)(""),G=Object(i.a)(E,2),L=G[0],D=G[1],F=Object(r.useState)(""),H=Object(i.a)(F,2),I=H[0],B=H[1],U=Object(r.useState)(!1),T=Object(i.a)(U,2),q=T[0],R=T[1],W=Object(l.h)().id,Y=Object(r.useState)({}),V=Object(i.a)(Y,2),X=V[0],_=V[1];if(!t)return Object(j.jsx)(l.a,{to:"/"});Object(r.useEffect)((function(){(function(){var e=Object(C.a)(f.a.mark((function e(){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(W,t);case 3:r=e.sent,_(r.data.character),o(X.name),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a({heading:"Character failed to load",message:e.t0.message,variant:"danger"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var K=function(){var e=Object(C.a)(f.a.mark((function e(r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,J(t,W,s,b,p,w,N,L,I);case 4:a({heading:"Character Edit Success",message:"Profile successfully updated! Get busy chatting!",variant:"success"}),R(!0),e.next=18;break;case 8:e.prev=8,e.t0=e.catch(1),a({heading:"Character Edit failed with error: "+e.t0.message,message:"Failed to update your character. Please check inputs and try again.",variant:"danger"}),o(""),h(""),m(""),y(""),A(""),D(""),B("");case 18:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return q?Object(j.jsx)(l.a,{to:"/characters/".concat(W)}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Edit Your Character"}),Object(j.jsxs)(P.a,{onSubmit:K,children:[Object(j.jsxs)(P.a.Group,{className:"mb-3",controlId:"name",children:[Object(j.jsx)(P.a.Label,{children:"Name"}),Object(j.jsx)(P.a.Control,{type:"name",name:"name",placeholder:X.name,value:s,onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{className:"mb-4",controlId:"level",children:[Object(j.jsx)(P.a.Label,{children:"Level"}),Object(j.jsx)(P.a.Control,{value:b,name:"level",type:"level",placeholder:X.level,onChange:function(e){return h(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{className:"mb-4",controlId:"exp",children:[Object(j.jsx)(P.a.Label,{children:"Experience Points"}),Object(j.jsx)(P.a.Control,{value:p,name:"exp",type:"exp",placeholder:X.exp,onChange:function(e){return m(e.target.value)}})]}),Object(j.jsxs)(P.a.Control,{"aria-label":"charClass",as:"select",name:"charClass",value:w,type:"charClass",onChange:function(e){return y(e.target.value)},children:[Object(j.jsx)("option",{children:X.charClass}),Object(j.jsx)("option",{value:"Artificer",children:"Artificer"}),Object(j.jsx)("option",{value:"Barbarian",children:"Barbarian"}),Object(j.jsx)("option",{value:"Bard",children:"Bard"}),Object(j.jsx)("option",{value:"Blood Hunter",children:"Blood Hunter"}),Object(j.jsx)("option",{value:"Cleric",children:"Cleric"}),Object(j.jsx)("option",{value:"Druid",children:"Druid"}),Object(j.jsx)("option",{value:"Fighter",children:"Fighter"}),Object(j.jsx)("option",{value:"Monk",children:"Monk"}),Object(j.jsx)("option",{value:"Paladin",children:"Paladin"}),Object(j.jsx)("option",{value:"Ranger",children:"Ranger"}),Object(j.jsx)("option",{value:"Rogue",children:"Rogue"}),Object(j.jsx)("option",{value:"Sorcerer",children:"Sorcerer"}),Object(j.jsx)("option",{value:"Warlock",children:"Warlock"}),Object(j.jsx)("option",{value:"Wizard",children:"Wizard"})]}),Object(j.jsxs)(P.a.Control,{"aria-label":"Race",as:"select",name:"race",value:N,type:"race",onChange:function(e){return A(e.target.value)},children:[Object(j.jsx)("option",{children:X.race}),Object(j.jsx)("option",{value:"Dragon Born",children:"Dragon Born"}),Object(j.jsx)("option",{value:"Dwarf",children:"Dwarf"}),Object(j.jsx)("option",{value:"Elf",children:"Elf"}),Object(j.jsx)("option",{value:"Gnome",children:"Gnome"}),Object(j.jsx)("option",{value:"Half Elf",children:"Half Elf"}),Object(j.jsx)("option",{value:"Halfling",children:"Halfling"}),Object(j.jsx)("option",{value:"Half-Orc",children:"Half-Orc"}),Object(j.jsx)("option",{value:"Human",children:"Human"}),Object(j.jsx)("option",{value:"Tiefling",children:"Tiefling"})]}),Object(j.jsxs)(P.a.Control,{as:"select",name:"alignment",value:L,type:"alignment",onChange:function(e){return D(e.target.value)},"aria-label":"Alignment",children:[Object(j.jsx)("option",{children:X.alignment}),Object(j.jsx)("option",{value:"Lawful Good",children:"Lawful Good"}),Object(j.jsx)("option",{value:"Neutral Good",children:"Neutral Good"}),Object(j.jsx)("option",{value:"Chaotic Good",children:"Chaotic Good"}),Object(j.jsx)("option",{value:"Lawful Neutral",children:"Lawful Neutral"}),Object(j.jsx)("option",{value:"True Neutral",children:"True Neutral"}),Object(j.jsx)("option",{value:"Chaotic Neutral",children:"Chaotic Neutral"}),Object(j.jsx)("option",{value:"Lawful Evil",children:"Lawful Evil"}),Object(j.jsx)("option",{value:"Neutral Evil",children:"Neutral EVil"}),Object(j.jsx)("option",{value:"Chaotic Evil",children:"Chaotic Evil"}),Object(j.jsx)("option",{value:"Unaligned",children:"Unaligned"})]}),Object(j.jsxs)(P.a.Group,{className:"mb-4",controlId:"background",children:[Object(j.jsx)(P.a.Label,{children:"Background"}),Object(j.jsx)(P.a.Control,{value:I,name:"background",type:"background",placeholder:X.background,onChange:function(e){return B(e.target.value)}})]}),Object(j.jsx)(M.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},Q=function(e){var t=e.character,a=e.setCharacter;return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Character Information"}),Object(j.jsxs)(P.a,{children:[Object(j.jsxs)(P.a.Group,{className:"mb-3",controlId:"name",children:[Object(j.jsx)(P.a.Label,{children:"Name"}),Object(j.jsx)(P.a.Control,{type:"name",name:"name",placeholder:"Character Name",required:!0,value:t.name,onChange:function(e){return a((function(t){return Object(U.a)(Object(U.a)({},t),{},{name:e.target.value})}))}})]}),Object(j.jsxs)(P.a.Group,{className:"mb-4",controlId:"level",children:[Object(j.jsx)(P.a.Label,{children:"Level"}),Object(j.jsx)(P.a.Control,{required:!0,name:"level",type:"level",placeholder:"Check with your DM what level you are starting at.",value:t.level,onChange:function(e){return a((function(t){return Object(U.a)(Object(U.a)({},t),{},{level:e.target.value})}))}})]}),Object(j.jsxs)(P.a.Group,{className:"mb-4",controlId:"exp",children:[Object(j.jsx)(P.a.Label,{children:"Experience Points"}),Object(j.jsx)(P.a.Control,{required:!0,name:"exp",type:"exp",placeholder:"Check with your DM how much EXP you are starting at.",value:t.exp,onChange:function(e){return a((function(t){return Object(U.a)(Object(U.a)({},t),{},{exp:e.target.value})}))}})]}),Object(j.jsxs)(P.a.Control,{"aria-label":"charClass",as:"select",required:!0,name:"charClass",type:"charClass",value:t.charClass,onChange:function(e){return a((function(t){return Object(U.a)(Object(U.a)({},t),{},{charClass:e.target.value})}))},children:[Object(j.jsx)("option",{children:"Class \u25bf"}),Object(j.jsx)("option",{value:"Artificer",children:"Artificer"}),Object(j.jsx)("option",{value:"Barbarian",children:"Barbarian"}),Object(j.jsx)("option",{value:"Bard",children:"Bard"}),Object(j.jsx)("option",{value:"Blood Hunter",children:"Blood Hunter"}),Object(j.jsx)("option",{value:"Cleric",children:"Cleric"}),Object(j.jsx)("option",{value:"Druid",children:"Druid"}),Object(j.jsx)("option",{value:"Fighter",children:"Fighter"}),Object(j.jsx)("option",{value:"Monk",children:"Monk"}),Object(j.jsx)("option",{value:"Paladin",children:"Paladin"}),Object(j.jsx)("option",{value:"Ranger",children:"Ranger"}),Object(j.jsx)("option",{value:"Rogue",children:"Rogue"}),Object(j.jsx)("option",{value:"Sorcerer",children:"Sorcerer"}),Object(j.jsx)("option",{value:"Warlock",children:"Warlock"}),Object(j.jsx)("option",{value:"Wizard",children:"Wizard"})]}),Object(j.jsxs)(P.a.Control,{"aria-label":"Race",required:!0,as:"select",name:"race",type:"race",value:t.race,onChange:function(e){return a((function(t){return Object(U.a)(Object(U.a)({},t),{},{race:e.target.value})}))},children:[Object(j.jsx)("option",{children:"Race \u25bf"}),Object(j.jsx)("option",{value:"Dragon Born",children:"Dragon Born"}),Object(j.jsx)("option",{value:"Dwarf",children:"Dwarf"}),Object(j.jsx)("option",{value:"Elf",children:"Elf"}),Object(j.jsx)("option",{value:"Gnome",children:"Gnome"}),Object(j.jsx)("option",{value:"Half Elf",children:"Half Elf"}),Object(j.jsx)("option",{value:"Halfling",children:"Halfling"}),Object(j.jsx)("option",{value:"Half-Orc",children:"Half-Orc"}),Object(j.jsx)("option",{value:"Human",children:"Human"}),Object(j.jsx)("option",{value:"Tiefling",children:"Tiefling"})]}),Object(j.jsxs)(P.a.Control,{required:!0,as:"select",name:"alignment",type:"alignment","aria-label":"Alignment",value:t.alignment,onChange:function(e){return a((function(t){return Object(U.a)(Object(U.a)({},t),{},{alignment:e.target.value})}))},children:[Object(j.jsx)("option",{children:"Alignment \u25bf"}),Object(j.jsx)("option",{value:"Lawful Good",children:"Lawful Good"}),Object(j.jsx)("option",{value:"Neutral Good",children:"Neutral Good"}),Object(j.jsx)("option",{value:"Chaotic Good",children:"Chaotic Good"}),Object(j.jsx)("option",{value:"Lawful Neutral",children:"Lawful Neutral"}),Object(j.jsx)("option",{value:"True Neutral",children:"True Neutral"}),Object(j.jsx)("option",{value:"Chaotic Neutral",children:"Chaotic Neutral"}),Object(j.jsx)("option",{value:"Lawful Evil",children:"Lawful Evil"}),Object(j.jsx)("option",{value:"Neutral Evil",children:"Neutral EVil"}),Object(j.jsx)("option",{value:"Chaotic Evil",children:"Chaotic Evil"}),Object(j.jsx)("option",{value:"Unaligned",children:"Unaligned"})]}),Object(j.jsxs)(P.a.Group,{className:"mb-4",controlId:"background",children:[Object(j.jsx)(P.a.Label,{children:"Background"}),Object(j.jsx)(P.a.Control,{required:!0,name:"background",type:"background",placeholder:"Gives you special bonuses based on your choice",value:t.background,onChange:function(e){return a((function(t){return Object(U.a)(Object(U.a)({},t),{},{background:e.target.value})}))}})]})]})]})})},Z=function(e){var t=e.user,a=(e.setUser,e.msgAlert),n=Object(r.useState)(0),c=Object(i.a)(n,2),s=c[0],o=c[1],u=Object(r.useState)(!1),d=Object(i.a)(u,1)[0],b=Object(r.useState)({name:"",level:"",exp:"",charClass:"",race:"",alignment:"",background:"",strength:""}),h=Object(i.a)(b,2),O=h[0],x=h[1];if(!t)return Object(j.jsx)(l.a,{to:"/"});var p=function(){var e=Object(C.a)(f.a.mark((function e(r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,Y(t,O).then((function(e){t.character=e.data.character}));case 4:a({heading:"Character Creation Success",message:"Profile created successfully! Get busy chatting!",variant:"success"}),d(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),a({heading:"Character Creation failed with error: "+e.t0.message,message:"Failed to create a character. Please check your inputs and try again.",variant:"danger"}),x("");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),m=["Character Information","Ability Scores"];return Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("div",{className:"progressbar",children:Object(j.jsx)("div",{style:{width:0===s?"33.3%":1===s?"66.6%":"100%"}})}),Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:m[s]})}),Object(j.jsx)("div",{className:"body",children:0===s?Object(j.jsx)(Q,{character:O,setCharacter:x}):1===s?Object(j.jsx)(q,{character:O,setCharacter:x}):Object(j.jsx)("h1",{children:"hi"})}),Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("button",{disabled:0===s,onClick:function(){o((function(e){return e-1}))},children:"Prev"}),Object(j.jsx)("button",{onClick:function(){s===m.length-1?(p(),console.log(O)):o((function(e){return e+1}))},children:s===m.length-1?"Submit":"Next"})]})]})]})},$=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),u=Object(i.a)(c,2),b=u[0],h=u[1],O=function(e){var t=e.heading,a=e.message,r=e.variant,n=Object(o.a)();h((function(e){return[].concat(Object(s.a)(e),[{heading:t,message:a,variant:r,id:n}])}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{user:a}),b.map((function(e){return Object(j.jsx)(d,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(j.jsx)("main",{className:"container",children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{path:"/sign-up",element:Object(j.jsx)(D,{msgAlert:O,setUser:n})}),Object(j.jsx)(l.b,{path:"/sign-in",element:Object(j.jsx)(F,{msgAlert:O,setUser:n})}),Object(j.jsx)(l.b,{path:"/sign-out",element:Object(j.jsx)(H,{msgAlert:O,clearUser:function(){return n(null)},user:a})}),Object(j.jsx)(l.b,{path:"/change-password",element:Object(j.jsx)(I,{msgAlert:O,user:a})}),Object(j.jsx)(l.b,{path:"/characters",element:Object(j.jsx)(_,{user:a,msgAlert:O})}),Object(j.jsx)(l.b,{path:"/characters/:id",element:Object(j.jsx)(X,{user:a,msgAlert:O})}),Object(j.jsx)(l.b,{path:"/characters/:id/edit",element:Object(j.jsx)(K,{user:a,msgAlert:O})}),Object(j.jsx)(l.b,{path:"/characters/create",element:Object(j.jsx)(Z,{user:a,setUser:n,msgAlert:O})}),Object(j.jsx)(l.b,{path:"/characters/ability/:id",element:Object(j.jsx)(q,{user:a,setUser:n,msgAlert:O})}),Object(j.jsx)(l.b,{path:"/",element:Object(j.jsx)(B,{})})]})})]})},ee=Object(j.jsx)(O.a,{basename:"/dndragons-client",children:Object(j.jsx)($,{})});c.a.render(ee,document.getElementById("root"))},74:function(e,t,a){},75:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.d96c7942.chunk.js.map