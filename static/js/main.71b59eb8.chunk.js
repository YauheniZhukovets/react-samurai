(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{118:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(29),a=n(4),s={dialogsData:[{id:1,name:"Egor"},{id:2,name:"Marina"},{id:3,name:"Veronika"},{id:4,name:"Andrey"},{id:5,name:"Igor"},{id:6,name:"Artem"}],massagesData:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{massagesData:[].concat(Object(r.a)(e.massagesData),[{id:6,message:n}])});default:return e}},i=function(e){return{type:"dialogs/ADD-MESSAGE",newMessageBody:e}}},125:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__Ejmn6",numberPage:"Paginator_numberPage__3jr8K"}},126:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__2PuO7",selectedPage:"Users_selectedPage__2sDSH",numberPage:"Users_numberPage__1I8Y3"}},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n(123),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"066ae431-6115-49fc-b06c-595e5096a36d"}}),s={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollowUser:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data.resultCode}))},followUser:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data.resultCode}))}},c={authMe:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e){return a.post("/auth/login",e)},logout:function(){return a.delete("/auth/login")}},i={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})}}},159:function(e,t,n){},21:function(e,t,n){e.exports={nav:"Navbar_nav__cUqkZ",activeLink:"Navbar_activeLink__3dZSJ",item:"Navbar_item__3QqFY"}},287:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(61),c=n.n(s),i=n(14),o=n(31),u=n(32),l=n(34),j=n(33),d=(n(159),n(21)),b=n.n(d),f=n(1),p=function(){var e=function(e){return e.isActive?b.a.activeLink:b.a.item};return Object(f.jsxs)("nav",{className:b.a.nav,children:[Object(f.jsx)("div",{className:b.a.item,children:Object(f.jsx)(i.b,{className:e,to:"/profile",children:"Profile"})}),Object(f.jsx)("div",{className:b.a.item,children:Object(f.jsx)(i.b,{className:e,to:"/dialogs",children:"Messages"})}),Object(f.jsx)("div",{className:b.a.item,children:Object(f.jsx)(i.b,{className:e,to:"/users",children:"Users"})}),Object(f.jsx)("div",{className:b.a.item,children:Object(f.jsx)(i.b,{className:e,to:"/news",children:"News"})}),Object(f.jsx)("div",{className:b.a.item,children:Object(f.jsx)(i.b,{className:e,to:"/music",children:"Music"})}),Object(f.jsx)("div",{className:b.a.item,children:Object(f.jsx)(i.b,{className:e,to:"/setting",children:"Setting"})})]})},O=n(5),h=function(e){return Object(f.jsx)("div",{children:e.name})},g=function(e){return Object(f.jsx)("div",{children:e.name})},m=function(e){return Object(f.jsx)("div",{children:e.name})},x=n(4),v=n(13),S=n(86),w=n.n(S),C=n(62),P=function(e){var t=e.login,n=e.isAuth,r=e.logoutTC;return Object(f.jsxs)("header",{className:w.a.header,children:[Object(f.jsx)("img",{src:"https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png",alt:"logo"}),Object(f.jsx)("div",{className:w.a.loginBlock,children:n?Object(f.jsxs)("div",{children:[t," - ",Object(f.jsx)("button",{onClick:function(){r()},children:"Log out"})]}):Object(f.jsxs)(i.b,{to:"/login",children:[Object(f.jsx)("img",{src:C.a,alt:"123"}),"Login"]})})]})},y=n(9),E=n.n(y),T=n(12),U=n(15),k=n(50),_={id:null,login:null,email:null,isAuth:!1},I=function(e,t,n,r){return{type:"auth/SET-USER-DATA",payload:{id:e,login:t,email:n,isAuth:r}}},N=function(){return function(){var e=Object(T.a)(E.a.mark((function e(t){var n,r,a,s,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.authMe();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,s=r.login,c=r.email,t(I(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(P,Object(x.a)({},this.props))}}]),n}(a.a.Component),L=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logoutTC:function(){return function(){var e=Object(T.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.logout();case 2:if(0!==e.sent.data.resultCode){e.next=7;break}return e.next=6,t(N());case 6:t(I(null,null,null,!1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(A),F=n(119),D=n(120),M=n(63),R=n(69),z=n(47),G=n.n(z),B=Object(D.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(f.jsxs)("form",{onSubmit:t,children:[Object(f.jsx)("div",{children:Object(f.jsx)(F.a,{validate:[R.b],name:"email",component:M.a,placeholder:"Email"})}),Object(f.jsx)("div",{children:Object(f.jsx)(F.a,{validate:[R.b],name:"password",component:M.a,placeholder:"Password",type:"password"})}),Object(f.jsxs)("div",{children:[Object(f.jsx)(F.a,{name:"rememberMe",component:M.a,type:"checkbox"}),"remember me"]}),n&&Object(f.jsx)("div",{className:G.a.formSummaryError,children:n}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"Login"})})]})})),H=Object(v.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginTC:function(e){return function(){var t=Object(T.a)(E.a.mark((function t(n){var r,a,s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.login(e);case 2:if(0!==(r=t.sent).data.resultCode){t.next=8;break}return t.next=6,n(N());case 6:t.next=11;break;case 8:a=r.data.messages.length>0?r.data.messages[0]:"Email or login is wrong",s=Object(k.a)("login",{_error:a}),n(s);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.loginTC;return e.isAuth?Object(f.jsx)(O.a,{to:"/profile"}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsx)(B,{onSubmit:function(e){t(e)}})]})})),q=n(29),W=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(x.a)(Object(x.a)({},e),r):e}))},Y={users:[],pageSize:10,totalUsersCount:0,currentPages:1,isFetching:!0,followingInProgress:[]},Z=function(e){return{type:"users/FOLLOW-SUCCESS",id:e}},J=function(e){return{type:"users/UNFOLLOW-SUCCESS",id:e}},K=function(e){return{type:"users/TOGGLE-IS-FETCHING",isFetching:e}},Q=function(e,t){return{type:"users/TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},X=function(){var e=Object(T.a)(E.a.mark((function e(t,n,r,a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Q(!0,n)),e.next=3,r(n);case 3:0===e.sent&&t(a(n)),t(Q(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),V=n(25),$=n(125),ee=n.n($),te=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPages,s=e.onPageChanged,c=e.portionSize,i=Math.ceil(t/n),o=[],u=1;u<=i;u++)o.push(u);var l=Math.ceil(i/c),j=Object(r.useState)(1),d=Object(V.a)(j,2),b=d[0],p=d[1],O=(b-1)*c+1,h=b*c;return Object(f.jsxs)("div",{children:[b>1&&Object(f.jsx)("button",{onClick:function(){return p(b-1)},children:"<"}),o.filter((function(e){return e>=O&&e<=h})).map((function(e,t){return Object(f.jsxs)("span",{style:{cursor:"pointer"},onClick:function(){s(e)},className:a===e?ee.a.selectedPage:"",children:[" ",e]},t)})),l>b&&Object(f.jsx)("button",{onClick:function(){return p(b+1)},children:">"})]})},ne=n(126),re=n.n(ne),ae=function(e){var t=e.user,n=e.followingInProgress,r=e.followTC,a=e.unfollowTC;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:Object(f.jsx)(i.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:null!==t.photos.small?t.photos.small:C.a,className:re.a.userPhoto,alt:"123"})})}),Object(f.jsx)("div",{children:t.followed?Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollowed"}):Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Followed"})})]}),Object(f.jsxs)("span",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:t.name}),Object(f.jsx)("div",{children:t.status})]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:"user.location.country"}),Object(f.jsx)("div",{children:"user.location.city"})]})]})]})},se=function(e){var t=e.getUsers,n=e.totalUsersCount,r=e.pageSize,a=e.currentPages,s=e.onPageChanged,c=e.followingInProgress,i=e.followTC,o=e.unfollowTC;return Object(f.jsxs)("div",{children:[Object(f.jsx)(te,{totalItemsCount:n,pageSize:r,currentPages:a,onPageChanged:s,portionSize:10}),t.map((function(e){return Object(f.jsx)(ae,{user:e,followingInProgress:c,followTC:i,unfollowTC:o},e.id)}))]})},ce=n(65),ie=n(10),oe=n(129),ue=Object(oe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return e}))})),le=function(e){return e.usersPage.pageSize},je=function(e){return e.usersPage.totalUsersCount},de=function(e){return e.usersPage.currentPages},be=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.followingInProgress},pe=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsersTC(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsersTC(this.props.currentPages,this.props.pageSize)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(ce.a,{}):null,Object(f.jsx)(se,Object(x.a)({onPageChanged:this.onPageChanged},this.props))]})}}]),n}(a.a.Component),Oe=Object(ie.compose)(Object(v.b)((function(e){return{getUsers:ue(e),pageSize:le(e),totalUsersCount:je(e),currentPages:de(e),isFetching:be(e),followingInProgress:fe(e)}}),{requestUsersTC:function(e,t){return function(){var n=Object(T.a)(E.a.mark((function n(r){var a;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(K(!0)),r({type:"users/SET-CURRENT-PAGE",currentPages:e}),n.next=4,U.c.getUsers(e,t);case 4:a=n.sent,r(K(!1)),r({type:"users/SET-USER",users:a.items}),r({type:"users/SET-TOTAL-USERS-COUNT",totalCount:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},followTC:function(e){return function(){var t=Object(T.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X(n,e,U.c.followUser.bind(U.c),Z);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollowTC:function(e){return function(){var t=Object(T.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X(n,e,U.c.unfollowUser.bind(U.c),J);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(pe),he={initialized:!1},ge=a.a.lazy((function(){return n.e(4).then(n.bind(null,294))})),me=a.a.lazy((function(){return n.e(3).then(n.bind(null,293))})),xe=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppTC()}},{key:"render",value:function(){return this.props.initialized?Object(f.jsxs)("div",{className:"app-wrapper",children:[Object(f.jsx)(L,{}),Object(f.jsx)(p,{}),Object(f.jsx)("div",{className:"app-wrapper-content",children:Object(f.jsx)(a.a.Suspense,{fallback:Object(f.jsx)("div",{children:"Loading..."}),children:Object(f.jsxs)(O.d,{children:[Object(f.jsx)(O.b,{path:"/profile",element:Object(f.jsx)(me,{}),children:Object(f.jsx)(O.b,{path:":userId",element:Object(f.jsx)(me,{})})}),Object(f.jsx)(O.b,{path:"/dialogs",element:Object(f.jsx)(ge,{})}),Object(f.jsx)(O.b,{path:"/users",element:Object(f.jsx)(Oe,{})}),Object(f.jsx)(O.b,{path:"/news",element:Object(f.jsx)(g,{name:"News"})}),Object(f.jsx)(O.b,{path:"/music",element:Object(f.jsx)(h,{name:"Music"})}),Object(f.jsx)(O.b,{path:"/setting",element:Object(f.jsx)(m,{name:"Setting"})}),Object(f.jsx)(O.b,{path:"/login",element:Object(f.jsx)(H,{})})]})})})]}):Object(f.jsx)(ce.a,{})}}]),n}(a.a.Component),ve=Object(ie.compose)(Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeAppTC:function(){return function(){var e=Object(T.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(N());case 2:t({type:"app/INITIALIZED-SUCCESS"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(xe)),Se=n(118),we=n(89),Ce=n(128),Pe=n(121),ye=n(127),Ee=Object(ie.combineReducers)({profilePage:we.d,dialogsPage:Se.b,usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/FOLLOW-SUCCESS":return Object(x.a)(Object(x.a)({},e),{},{users:W(e.users,t.id,"id",{followed:!0})});case"users/UNFOLLOW-SUCCESS":return Object(x.a)(Object(x.a)({},e),{},{users:W(e.users,t.id,"id",{followed:!1})});case"users/SET-USER":return Object(x.a)(Object(x.a)({},e),{},{users:Object(q.a)(t.users)});case"users/SET-CURRENT-PAGE":return Object(x.a)(Object(x.a)({},e),{},{currentPages:t.currentPages});case"users/SET-TOTAL-USERS-COUNT":return Object(x.a)(Object(x.a)({},e),{},{totalUsersCount:t.totalCount});case"users/TOGGLE-IS-FETCHING":return Object(x.a)(Object(x.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE-IS-FOLLOWING-PROGRESS":return Object(x.a)(Object(x.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(q.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USER-DATA":return Object(x.a)(Object(x.a)({},e),t.payload);case"auth/SET-IS-AUTH":return Object(x.a)(Object(x.a)({},e),{},{isAuth:t.isAuth});default:return e}},form:Pe.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED-SUCCESS":return Object(x.a)(Object(x.a)({},e),{},{initialized:!0});default:return e}}}),Te=Object(ie.createStore)(Ee,Object(ye.composeWithDevTools)(Object(ie.applyMiddleware)(Ce.a)));window.store=Te,c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(v.a,{store:Te,children:Object(f.jsx)(ve,{})})})}),document.getElementById("root"))},47:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1q-Xj",error:"FormsControls_error__1xdco",formSummaryError:"FormsControls_formSummaryError__1SBOo"}},62:function(e,t,n){"use strict";t.a=n.p+"static/media/userIcon.01df14ab.png"},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(4),a=n(84),s=(n(0),n(47)),c=n.n(s),i=n(1),o=function(e){var t=e.meta,n=e.children,r=t.touched&&t.error;return Object(i.jsxs)("div",{className:"".concat(c.a.formControl," ").concat(r?c.a.error:""),children:[Object(i.jsx)("div",{children:n}),r&&Object(i.jsx)("span",{children:t.error})]})},u=function(e){e.input,e.meta,e.child;var t=Object(a.a)(e,["input","meta","child"]);return Object(i.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},e.input),t))}))},l=function(e){e.input,e.meta,e.children;var t=Object(a.a)(e,["input","meta","children"]);return Object(i.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},e.input),t))}))}},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(0);var r=n.p+"static/media/Spinner.ac5d5761.svg",a=n(1),s=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("img",{src:r,alt:"pic"})})}},69:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbol")}}},86:function(e,t,n){e.exports={header:"Header_header__QlxvU",loginBlock:"Header_loginBlock__3MxXM"}},89:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return p}));var r=n(9),a=n.n(r),s=n(12),c=n(29),i=n(4),o=n(15),u={postsData:[{id:1,message:"Hi, how are you?",likesCount:15},{id:2,message:"My first post!",likesCount:20}],profile:null,status:""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/ADD-POST":var n=t.newPostBody;return Object(i.a)(Object(i.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[{id:5,message:n,likesCount:0}])});case"profile/SET-USER-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"profile/SET-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"profile/DELETE-POST":return Object(i.a)(Object(i.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.id}))});default:return e}},j=function(e){return{type:"profile/ADD-POST",newPostBody:e}},d=function(e){return{type:"profile/SET-STATUS",status:e}},b=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n({type:"profile/SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(d(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}},[[287,1,2]]]);
//# sourceMappingURL=main.71b59eb8.chunk.js.map