(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[5],{233:function(t,a,e){"use strict";e.d(a,"b",(function(){return u})),e.d(a,"a",(function(){return l}));var n=e(4),r=e(61),s=(e(0),e(234)),i=e.n(s),c=e(1),o=function(t){var a=t.meta,e=t.children,n=a.touched&&a.error;return Object(c.jsxs)("div",{className:"".concat(i.a.formControl," ").concat(n?i.a.error:""),children:[Object(c.jsx)("div",{children:e}),n&&Object(c.jsx)("span",{children:a.error})]})},u=function(t){t.input,t.meta;var a=Object(r.a)(t,["input","meta"]);return Object(c.jsx)(o,Object(n.a)(Object(n.a)({},t),{},{children:Object(c.jsx)("textarea",Object(n.a)(Object(n.a)({},t.input),a))}))},l=function(t){t.input,t.meta;var a=Object(r.a)(t,["input","meta"]);return Object(c.jsx)(o,Object(n.a)(Object(n.a)({},t),{},{children:Object(c.jsx)("input",Object(n.a)(Object(n.a)({},t.input),a))}))}},234:function(t,a,e){t.exports={formControl:"FormsControls_formControl__3RLDu",error:"FormsControls_error__2bFT9",formSummaryError:"FormsControls_formSummaryError__3yqtq"}},235:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"a",(function(){return r}));var n=function(t){if(!t)return"Field is required"},r=function(t){return function(a){if(a&&a.length>t)return"Max length is ".concat(t," symbol")}}},243:function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));var n=e(4),r=e(3),s=(e(0),e(1)),i=function(t){return function(a){var e=Object(r.f)(),i=Object(r.g)(),c=Object(r.h)();return Object(s.jsx)(t,Object(n.a)(Object(n.a)({},a),{},{router:{location:e,navigate:i,params:c}}))}}},244:function(t,a,e){"use strict";e.d(a,"a",(function(){return u}));var n=e(4),r=e(61),s=(e(0),e(3)),i=e(23),c=e(1),o=function(t){return{isAuth:t.auth.isAuth}};function u(t){return Object(i.b)(o)((function(a){var e=a.isAuth,i=Object(r.a)(a,["isAuth"]);return e?Object(c.jsx)(t,Object(n.a)({},i)):Object(c.jsx)(s.a,{to:"/login"})}))}},306:function(t,a,e){t.exports={dialogsContainer:"Dialogs_dialogsContainer__3Mva1",dialogs:"Dialogs_dialogs__1dv0Z",avatarContainer:"Dialogs_avatarContainer__j5mTq",dialogsItems:"Dialogs_dialogsItems__1zScH",messages:"Dialogs_messages__2YxR_",formContainer:"Dialogs_formContainer__y_gR8",formTextarea:"Dialogs_formTextarea__2bgNm",buttonDialogs:"Dialogs_buttonDialogs__qER61"}},307:function(t,a,e){t.exports={textMessage:"Message_textMessage__NuJC1"}},308:function(t,a,e){t.exports={dialog:"DialogsItem_dialog__1wNjl",activeLink:"DialogsItem_activeLink__3S3gL",link:"DialogsItem_link__2YGY5"}},309:function(t,a,e){t.exports={avatar:"Avatar_avatar__3vzgz"}},319:function(t,a,e){"use strict";e.r(a);var n=e(23),r=e(10),s=(e(0),e(306)),i=e.n(s),c=e(307),o=e.n(c),u=e(1),l=function(t){var a=t.message;return Object(u.jsx)("div",{children:Object(u.jsx)("span",{className:o.a.textMessage,children:a})})},j=e(308),d=e.n(j),b=e(15),m=function(t){var a=t.id,e=t.name,n="/dialogs/".concat(a);return Object(u.jsx)("div",{className:d.a.dialog,children:Object(u.jsx)(b.b,{className:function(t){return t.isActive?d.a.activeLink:d.a.link},to:n,children:e})})},g=e(113),f=e(114),O=e(233),_=e(309),v=e.n(_),x=function(t){var a=t.avatar;return Object(u.jsx)("img",{className:v.a.avatar,src:a,alt:"avatar"})},h=e(52),p=e(235),D=Object(p.a)(50),C=Object(f.a)({form:"dialogAddMessageForm"})((function(t){var a=t.handleSubmit;return Object(u.jsxs)("form",{onSubmit:a,children:[Object(u.jsx)("div",{children:Object(u.jsx)(g.a,{className:i.a.formTextarea,component:O.b,validate:[p.b,D],name:"newMessageBody",placeholder:"Enter your message"})}),Object(u.jsx)("div",{className:i.a.buttonDialogs,children:Object(u.jsx)(h.a,{type:"submit",children:"Send"})})]})})),N=e(243),M=e(244),A=e(79);a.default=Object(r.d)(Object(n.b)((function(t){return{dialogsPage:t.dialogsPage,isAuth:t.auth.isAuth}}),(function(t){return{AddMessage:function(a){t(A.a.addMessage(a))}}})),N.a,M.a)((function(t){var a=t.dialogsPage,e=t.AddMessage,n=a.dialogsData.map((function(t){return Object(u.jsx)(m,{name:t.name,id:t.id},t.id)})),r=a.massagesData.map((function(t){return Object(u.jsx)(l,{message:t.message},t.id)})),s=a.avatarData.map((function(t){return Object(u.jsx)(x,{avatar:t.link},t.id)}));return Object(u.jsxs)("div",{className:i.a.dialogsContainer,children:[Object(u.jsxs)("div",{className:i.a.dialogs,children:[Object(u.jsx)("div",{className:i.a.avatarContainer,children:s}),Object(u.jsx)("div",{className:i.a.dialogsItems,children:n})]}),Object(u.jsxs)("div",{className:i.a.messages,children:[Object(u.jsx)("div",{children:r}),Object(u.jsx)("div",{className:i.a.formContainer,children:Object(u.jsx)(C,{onSubmit:function(t){e(t.newMessageBody)}})})]})]})}))}}]);
//# sourceMappingURL=5.7c2e16fc.chunk.js.map