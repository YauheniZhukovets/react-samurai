/*! For license information please see 6.58a2b596.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[6],{302:function(e,t,n){e.exports={pagination:"Paginator_pagination__1lPk3",buttonContainer:"Paginator_buttonContainer__1iy1I",button:"Paginator_button__2C7kt",text:"Paginator_text__1SUYj",currentNumber:"Paginator_currentNumber__SBt8d",selectPage:"Paginator_selectPage__QyEne",page:"Paginator_page__1djNE"}},303:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var o=s.apply(null,r);o&&e.push(o)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r)}()},304:function(e,t,n){e.exports={usersContainer:"Users_usersContainer__JMaTz",users:"Users_users__1_0Qm"}},305:function(e,t,n){e.exports={container:"User_container__2QYVk",userContainer:"User_userContainer__2Pr8y",userPhoto:"User_userPhoto__1vv8h",button:"User_button__2Oes4",userName:"User_userName__271k3",userStatus:"User_userStatus__1IpfX"}},318:function(e,t,n){"use strict";n.r(t);var r=n(4),s=n(37),a=n(38),o=n(48),i=n(47),c=n(23),u=n(0),l=n.n(u),j=n(69),d=n(25),b=n(302),g=n.n(b),f=n(52),p=n(303),h=n.n(p),_=n(1),O=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,a=e.portionSize,o=Math.ceil(t/n),i=[],c=1;c<=o;c++)i.push(c);var l=Math.ceil(o/a),b=Object(u.useState)(1),p=Object(d.a)(b,2),O=p[0],C=p[1],P=(O-1)*a+1,x=O*a;return Object(_.jsxs)("div",{className:g.a.pagination,children:[Object(_.jsxs)("div",{className:g.a.buttonContainer,children:[Object(_.jsx)(f.a,{className:g.a.button,onClick:function(){return C(O-1)},disabled:O<=1,children:"Prev list"}),Object(_.jsx)(f.a,{disabled:r<=1,className:g.a.button,onClick:function(){return s(r-1)},children:"Prev"}),Object(_.jsx)(f.a,{disabled:r>=o,className:g.a.button,onClick:function(){return s(r+1)},children:"Next"}),Object(_.jsx)(f.a,{className:g.a.button,onClick:function(){return C(O+1)},disabled:l<=O,children:"Next list"})]}),Object(_.jsxs)("div",{className:g.a.text,children:["Current page: ",Object(_.jsxs)("p",{className:g.a.currentNumber,children:[" ",r]})]}),Object(_.jsx)("div",{children:i.filter((function(e){return e>=P&&e<=x})).map((function(e,t){return Object(_.jsx)("span",{onClick:function(){return s(e)},className:h()(g.a.page,Object(j.a)({},g.a.selectPage,r===e)),children:e},t)}))})]})},C=n(304),P=n.n(C),x=n(305),m=n.n(x),v=n(15),N=n(26),w=function(e){var t=e.user,n=e.followingInProgress,r=e.followTC,s=e.unfollowTC;return Object(_.jsx)("div",{className:m.a.container,children:Object(_.jsxs)("div",{className:m.a.userContainer,children:[Object(_.jsx)("div",{children:Object(_.jsx)(v.b,{to:"/profile/"+t.id,children:Object(_.jsx)("img",{src:null!==t.photos.small?t.photos.small:N.a,className:m.a.userPhoto,alt:"123"})})}),Object(_.jsx)("div",{children:t.followed?Object(_.jsx)(f.a,{className:m.a.button,disabled:n.some((function(e){return e===t.id})),onClick:function(){return s(t.id)},children:"Unfollow"}):Object(_.jsx)(f.a,{className:m.a.button,disabled:n.some((function(e){return e===t.id})),onClick:function(){return r(t.id)},children:"Follow"})}),Object(_.jsx)("div",{children:Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:m.a.userName,children:t.name}),Object(_.jsx)("div",{className:m.a.userStatus,children:t.status})]})})]})})},S=function(e){var t=e.users,n=e.totalUsersCount,r=e.pageSize,s=e.currentPage,a=e.onPageChanged,o=e.followingInProgress,i=e.followTC,c=e.unfollowTC;return Object(_.jsxs)("div",{className:P.a.usersContainer,children:[Object(_.jsx)(O,{totalItemsCount:n,pageSize:r,currentPage:s,onPageChanged:a,portionSize:10}),Object(_.jsx)("div",{className:P.a.users,children:t.map((function(e){return Object(_.jsx)(w,{user:e,followingInProgress:o,followTC:i,unfollowTC:c},e.id)}))})]})},U=n(63),k=n(10),y=n(85),T=n(49),z=Object(T.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return e}))})),I=function(e){return e.usersPage.pageSize},F=function(e){return e.usersPage.totalUsersCount},M=function(e){return e.usersPage.currentPages},q=function(e){return e.usersPage.isFetching},A=function(e){return e.usersPage.followingInProgress},J=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsersTC(t,e.props.pageSize)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsersTC(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(_.jsxs)(_.Fragment,{children:[this.props.isFetching?Object(_.jsx)(U.a,{}):null,Object(_.jsx)(S,Object(r.a)({onPageChanged:this.onPageChanged},this.props))]})}}]),n}(l.a.Component);t.default=Object(k.d)(Object(c.b)((function(e){return{users:z(e),pageSize:I(e),totalUsersCount:F(e),currentPage:M(e),isFetching:q(e),followingInProgress:A(e)}}),{requestUsersTC:y.b,followTC:y.a,unfollowTC:y.c}))(J)}}]);
//# sourceMappingURL=6.58a2b596.chunk.js.map