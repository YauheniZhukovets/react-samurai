(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[1],{13:function(e,t,n){e.exports={nav:"Navbar_nav__cUqkZ",activeLink:"Navbar_activeLink__3dZSJ",item:"Navbar_item__3QqFY"}},132:function(e,t,n){},219:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(41),s=n.n(c),i=n(11),u=n(29),o=n(30),l=n(40),d=n(39),f=(n(132),n(13)),j=n.n(f),b=n(2),p=function(){var e=function(e){return e.isActive?j.a.activeLink:j.a.item};return Object(b.jsxs)("nav",{className:j.a.nav,children:[Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(i.b,{className:e,to:"/profile",children:"Profile"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(i.b,{className:e,to:"/dialogs",children:"Messages"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(i.b,{className:e,to:"/users",children:"Users"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(i.b,{className:e,to:"/news",children:"News"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(i.b,{className:e,to:"/music",children:"Music"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(i.b,{className:e,to:"/setting",children:"Setting"})})]})},O=n(3),h=function(e){return Object(b.jsx)("div",{children:e.name})},g=function(e){return Object(b.jsx)("div",{children:e.name})},m=function(e){return Object(b.jsx)("div",{children:e.name})},v=n(20),x=n(18),S=n(6),w=n.n(S),E=n(7),y=n(4),T=n(22),C={initialized:!1},U=n(58),k=n(49),N=n.n(k),A=n(52),I=function(e){var t=e.login,n=e.isAuth,r=e.logoutTC;return Object(b.jsxs)("header",{className:N.a.header,children:[Object(b.jsx)("img",{src:"https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png",alt:"logo"}),Object(b.jsx)("div",{className:N.a.loginBlock,children:n?Object(b.jsxs)("div",{children:[t," - ",Object(b.jsx)("button",{onClick:function(){r()},children:"Log out"})]}):Object(b.jsxs)(i.b,{to:"/login",children:[Object(b.jsx)("img",{src:A.a,alt:"123"}),"Login"]})})]})},L=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(I,Object(y.a)({},this.props))}}]),n}(a.a.Component),P=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logoutTC:T.d})(L),D=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,294))})),R=a.a.lazy((function(){return n.e(6).then(n.bind(null,296))})),F=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,297))})),G=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,295))})),M=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppTC()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(P,{}),Object(b.jsx)(p,{}),Object(b.jsx)("div",{className:"app-wrapper-content",children:Object(b.jsx)(a.a.Suspense,{fallback:Object(b.jsx)("div",{children:"Loading..."}),children:Object(b.jsxs)(O.d,{children:[Object(b.jsx)(O.b,{path:"/profile",element:Object(b.jsx)(G,{}),children:Object(b.jsx)(O.b,{path:":userId",element:Object(b.jsx)(G,{})})}),Object(b.jsx)(O.b,{path:"/dialogs",element:Object(b.jsx)(F,{})}),Object(b.jsx)(O.b,{path:"/users",element:Object(b.jsx)(R,{})}),Object(b.jsx)(O.b,{path:"/news",element:Object(b.jsx)(g,{name:"News"})}),Object(b.jsx)(O.b,{path:"/music",element:Object(b.jsx)(h,{name:"Music"})}),Object(b.jsx)(O.b,{path:"/setting",element:Object(b.jsx)(m,{name:"Setting"})}),Object(b.jsx)(O.b,{path:"/login",element:Object(b.jsx)(D,{})})]})})})]}):Object(b.jsx)(U.a,{})}}]),n}(a.a.Component),_=Object(x.compose)(Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeAppTC:function(){return function(){var e=Object(E.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(T.b)());case 2:t({type:"app/INITIALIZED-SUCCESS"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(M)),z=n(67),B=n(53),H=n(74),W=n(79),Y=n(73),Z=n(77),J=Object(x.combineReducers)({profilePage:B.d,dialogsPage:z.b,usersPage:H.d,auth:T.a,form:Y.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED-SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{initialized:!0});default:return e}}}),q=Object(x.createStore)(J,Object(Z.composeWithDevTools)(Object(x.applyMiddleware)(W.a)));window.store=q,s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(v.a,{store:q,children:Object(b.jsx)(_,{})})})}),document.getElementById("root"))},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return b}));var r=n(6),a=n.n(r),c=n(7),s=n(4),i=n(8),u=n(42),o={id:null,login:null,email:null,isAuth:!1},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USER-DATA":return Object(s.a)(Object(s.a)({},e),t.payload);case"auth/SET-IS-AUTH":return Object(s.a)(Object(s.a)({},e),{},{isAuth:t.isAuth});default:return e}},d=function(e,t,n,r){return{type:"auth/SET-USER-DATA",payload:{id:e,login:t,email:n,isAuth:r}}},f=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.authMe();case 2:0===(n=e.sent).resultCode&&(r=n.data,c=r.id,s=r.login,u=r.email,t(d(c,s,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.login(e);case 2:if(0!==(r=t.sent).data.resultCode){t.next=8;break}return t.next=6,n(f());case 6:t.next=11;break;case 8:c=r.data.messages.length>0?r.data.messages[0]:"Email or login is wrong",s=Object(u.a)("login",{_error:c}),n(s);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:if(0!==e.sent.data.resultCode){e.next=7;break}return e.next=6,t(f());case 6:t(d(null,null,null,!1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},49:function(e,t,n){e.exports={header:"Header_header__QlxvU",loginBlock:"Header_loginBlock__3MxXM"}},52:function(e,t,n){"use strict";t.a=n.p+"static/media/userIcon.01df14ab.png"},53:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return b})),n.d(t,"e",(function(){return p}));var r=n(6),a=n.n(r),c=n(7),s=n(19),i=n(4),u=n(8),o={postsData:[{id:1,message:"Hi, how are you?",likesCount:15},{id:2,message:"My first post!",likesCount:20}],profile:null,status:""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/ADD-POST":var n=t.newPostBody;return Object(i.a)(Object(i.a)({},e),{},{postsData:[].concat(Object(s.a)(e.postsData),[{id:5,message:n,likesCount:0}])});case"profile/SET-USER-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"profile/SET-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"profile/DELETE-POST":return Object(i.a)(Object(i.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.id}))});default:return e}},d=function(e){return{type:"profile/ADD-POST",newPostBody:e}},f=function(e){return{type:"profile/SET-STATUS",status:e}},j=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n({type:"profile/SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(0);var r=n.p+"static/media/Spinner.ac5d5761.svg",a=n(2),c=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("img",{src:r,alt:"pic"})})}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(19),a=n(4),c={dialogsData:[{id:1,name:"Egor"},{id:2,name:"Marina"},{id:3,name:"Veronika"},{id:4,name:"Andrey"},{id:5,name:"Igor"},{id:6,name:"Artem"}],massagesData:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{massagesData:[].concat(Object(r.a)(e.massagesData),[{id:6,message:n}])});default:return e}},i=function(e){return{type:"dialogs/ADD-MESSAGE",newMessageBody:e}}},74:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return m}));var r=n(6),a=n.n(r),c=n(7),s=n(19),i=n(4),u=n(8),o=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},l={users:[],pageSize:10,totalUsersCount:0,currentPages:1,isFetching:!0,followingInProgress:[]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/FOLLOW-SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.id,"id",{followed:!0})});case"users/UNFOLLOW-SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.id,"id",{followed:!1})});case"users/SET-USER":return Object(i.a)(Object(i.a)({},e),{},{users:Object(s.a)(t.users)});case"users/SET-CURRENT-PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPages:t.currentPages});case"users/SET-TOTAL-USERS-COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalCount});case"users/TOGGLE-IS-FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE-IS-FOLLOWING-PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},f=function(e){return{type:"users/FOLLOW-SUCCESS",id:e}},j=function(e){return{type:"users/UNFOLLOW-SUCCESS",id:e}},b=function(e){return{type:"users/TOGGLE-IS-FETCHING",isFetching:e}},p=function(e,t){return{type:"users/TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},O=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(b(!0)),r({type:"users/SET-CURRENT-PAGE",currentPages:e}),n.next=4,u.c.getUsers(e,t);case 4:c=n.sent,r(b(!1)),r({type:"users/SET-USER",users:c.items}),r({type:"users/SET-TOTAL-USERS-COUNT",totalCount:c.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(p(!0,n)),e.next=3,r(n);case 3:0===e.sent&&t(c(n)),t(p(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(n,e,u.c.followUser.bind(u.c),f);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(n,e,u.c.unfollowUser.bind(u.c),j);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},8:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n(76),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"066ae431-6115-49fc-b06c-595e5096a36d"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollowUser:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data.resultCode}))},followUser:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data.resultCode}))}},s={authMe:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e){return a.post("/auth/login",e)},logout:function(){return a.delete("/auth/login")}},i={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})}}}},[[219,2,3]]]);
//# sourceMappingURL=main.e842a4f1.chunk.js.map