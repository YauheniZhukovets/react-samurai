(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[1],{13:function(e,t,n){e.exports={nav:"Navbar_nav__cUqkZ",activeLink:"Navbar_activeLink__3dZSJ",item:"Navbar_item__3QqFY"}},132:function(e,t,n){},219:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(42),s=n.n(c),i=n(11),u=n(30),o=n(31),l=n(41),d=n(40),f=(n(132),n(13)),p=n.n(f),j=n(2),b=function(){var e=function(e){return e.isActive?p.a.activeLink:p.a.item};return Object(j.jsxs)("nav",{className:p.a.nav,children:[Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(i.b,{className:e,to:"/profile",children:"Profile"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(i.b,{className:e,to:"/dialogs",children:"Messages"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(i.b,{className:e,to:"/users",children:"Users"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(i.b,{className:e,to:"/news",children:"News"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(i.b,{className:e,to:"/music",children:"Music"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(i.b,{className:e,to:"/setting",children:"Setting"})})]})},h=n(3),O=function(e){return Object(j.jsx)("div",{children:e.name})},g=function(e){return Object(j.jsx)("div",{children:e.name})},m=function(e){return Object(j.jsx)("div",{children:e.name})},v=n(20),x=n(18),S=n(6),w=n.n(S),E=n(7),y=n(4),C=n(23),T={initialized:!1},U=n(52),k=n(49),A=n.n(k),P=n(53),N=function(e){var t=e.login,n=e.isAuth,r=e.logoutTC;return Object(j.jsxs)("header",{className:A.a.header,children:[Object(j.jsx)("img",{src:"https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png",alt:"logo"}),Object(j.jsx)("div",{className:A.a.loginBlock,children:n?Object(j.jsxs)("div",{children:[t," - ",Object(j.jsx)("button",{onClick:function(){r()},children:"Log out"})]}):Object(j.jsxs)(i.b,{to:"/login",children:[Object(j.jsx)("img",{src:P.a,alt:"123"}),"Login"]})})]})},L=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)(N,Object(y.a)({},this.props))}}]),n}(a.a.Component),I=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logoutTC:C.d})(L),D=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,294))})),R=a.a.lazy((function(){return n.e(6).then(n.bind(null,296))})),F=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,297))})),G=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,295))})),_=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"catchAllUnhandledErrors",value:function(e){console.log("Some error occurred",e)}},{key:"componentDidMount",value:function(){this.props.initializeAppTC(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(I,{}),Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"app-wrapper-content",children:Object(j.jsx)(a.a.Suspense,{fallback:Object(j.jsx)("div",{children:"Loading..."}),children:Object(j.jsxs)(h.d,{children:[Object(j.jsx)(h.b,{path:"/",element:Object(j.jsx)(G,{})}),Object(j.jsx)(h.b,{path:"/profile",element:Object(j.jsx)(G,{}),children:Object(j.jsx)(h.b,{path:":userId",element:Object(j.jsx)(G,{})})}),Object(j.jsx)(h.b,{path:"/dialogs",element:Object(j.jsx)(F,{})}),Object(j.jsx)(h.b,{path:"/users",element:Object(j.jsx)(R,{})}),Object(j.jsx)(h.b,{path:"/news",element:Object(j.jsx)(g,{name:"News"})}),Object(j.jsx)(h.b,{path:"/music",element:Object(j.jsx)(O,{name:"Music"})}),Object(j.jsx)(h.b,{path:"/setting",element:Object(j.jsx)(m,{name:"Setting"})}),Object(j.jsx)(h.b,{path:"/login",element:Object(j.jsx)(D,{})}),Object(j.jsx)(h.b,{path:"*",element:Object(j.jsx)("div",{children:"404 NOT FOUND"})})]})})})]}):Object(j.jsx)(U.a,{})}}]),n}(a.a.Component),M=Object(x.compose)(Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeAppTC:function(){return function(){var e=Object(E.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(C.b)());case 2:t({type:"app/INITIALIZED-SUCCESS"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(_)),z=n(67),H=n(54),B=n(74),W=n(79),Y=n(73),Z=n(77),J=Object(x.combineReducers)({profilePage:H.d,dialogsPage:z.b,usersPage:B.d,auth:C.a,form:Y.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED-SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{initialized:!0});default:return e}}}),V=Object(x.createStore)(J,Object(Z.composeWithDevTools)(Object(x.applyMiddleware)(W.a)));window.store=V,s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(v.a,{store:V,children:Object(j.jsx)(M,{})})})}),document.getElementById("root"))},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return j}));var r=n(6),a=n.n(r),c=n(7),s=n(4),i=n(8),u=n(26),o={id:null,login:null,email:null,isAuth:!1,captchaUrl:null},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USER-DATA":return Object(s.a)(Object(s.a)({},e),t.payload);case"auth/SET-IS-AUTH":return Object(s.a)(Object(s.a)({},e),{},{isAuth:t.isAuth});case"auth/SET-CAPTCHA-URL-SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{captchaUrl:t.captcha});default:return e}},d=function(e,t,n,r,a){return{type:"auth/SET-USER-DATA",payload:{id:e,login:t,email:n,isAuth:r,captchaUrl:a}}},f=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.authMe();case 2:0===(n=e.sent).resultCode&&(r=n.data,c=r.id,s=r.login,u=r.email,t(d(c,s,u,!0,null)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.login(e);case 2:if(0!==(r=t.sent).data.resultCode){t.next=8;break}return t.next=6,n(f());case 6:t.next=12;break;case 8:10===r.data.resultCode&&n(b()),c=r.data.messages.length>0?r.data.messages[0]:"Email or login is wrong",s=Object(u.a)("login",{_error:c}),n(s);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:if(0!==e.sent.data.resultCode){e.next=7;break}return e.next=6,t(f());case 6:t(d(null,null,null,!1,null));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getCaptchaUrl();case 2:n=e.sent,t({type:"auth/SET-CAPTCHA-URL-SUCCESS",captcha:n.data.url});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},49:function(e,t,n){e.exports={header:"Header_header__QlxvU",loginBlock:"Header_loginBlock__3MxXM"}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(0);var r=n.p+"static/media/Spinner.ac5d5761.svg",a=n(2),c=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("img",{src:r,alt:"pic"})})}},53:function(e,t,n){"use strict";t.a=n.p+"static/media/userIcon.01df14ab.png"},54:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return b})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return g}));var r=n(6),a=n.n(r),c=n(7),s=n(19),i=n(4),u=n(8),o=n(26),l={postsData:[{id:1,message:"Hi, how are you?",likesCount:15},{id:2,message:"My first post!",likesCount:20}],profile:null,status:""},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/ADD-POST":var n=t.newPostBody;return Object(i.a)(Object(i.a)({},e),{},{postsData:[].concat(Object(s.a)(e.postsData),[{id:5,message:n,likesCount:0}])});case"profile/SET-USER-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"profile/SET-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"profile/DELETE-POST":return Object(i.a)(Object(i.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.id}))});case"profile/SAVE-PHOTO-SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}},f=function(e){return{type:"profile/ADD-POST",newPostBody:e}},p=function(e){return{type:"profile/SET-STATUS",status:e}},j=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n({type:"profile/SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"profile/SAVE-PHOTO-SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r(),t.next=3,u.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(j(c.profilePage.profile.userId)),t.next=11;break;case 8:return i=s.data.messages.length>0?s.data.messages[0]:"Field is wrong",n(Object(o.a)("edit-profile",{_error:i})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(19),a=n(4),c={dialogsData:[{id:1,name:"Egor"},{id:2,name:"Marina"},{id:3,name:"Veronika"},{id:4,name:"Andrey"},{id:5,name:"Igor"},{id:6,name:"Artem"}],massagesData:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{massagesData:[].concat(Object(r.a)(e.massagesData),[{id:6,message:n}])});default:return e}},i=function(e){return{type:"dialogs/ADD-MESSAGE",newMessageBody:e}}},74:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return m}));var r=n(6),a=n.n(r),c=n(7),s=n(19),i=n(4),u=n(8),o=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},l={users:[],pageSize:10,totalUsersCount:0,currentPages:1,isFetching:!0,followingInProgress:[]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/FOLLOW-SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.id,"id",{followed:!0})});case"users/UNFOLLOW-SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.id,"id",{followed:!1})});case"users/SET-USER":return Object(i.a)(Object(i.a)({},e),{},{users:Object(s.a)(t.users)});case"users/SET-CURRENT-PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPages:t.currentPages});case"users/SET-TOTAL-USERS-COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalCount});case"users/TOGGLE-IS-FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE-IS-FOLLOWING-PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},f=function(e){return{type:"users/FOLLOW-SUCCESS",id:e}},p=function(e){return{type:"users/UNFOLLOW-SUCCESS",id:e}},j=function(e){return{type:"users/TOGGLE-IS-FETCHING",isFetching:e}},b=function(e,t){return{type:"users/TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},h=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(j(!0)),r({type:"users/SET-CURRENT-PAGE",currentPages:e}),n.next=4,u.d.getUsers(e,t);case 4:c=n.sent,r(j(!1)),r({type:"users/SET-USER",users:c.items}),r({type:"users/SET-TOTAL-USERS-COUNT",totalCount:c.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},O=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,n)),e.next=3,r(n);case 3:0===e.sent&&t(c(n)),t(b(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(n,e,u.d.followUser.bind(u.d),f);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(n,e,u.d.unfollowUser.bind(u.d),p);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},8:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n(76),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"066ae431-6115-49fc-b06c-595e5096a36d"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollowUser:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data.resultCode}))},followUser:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data.resultCode}))}},s={authMe:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e){return a.post("/auth/login",e)},logout:function(){return a.delete("/auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}},u={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile/",e)}}}},[[219,2,3]]]);
//# sourceMappingURL=main.8cdc06b7.chunk.js.map