(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[3],{108:function(t,e,s){"use strict";s.r(e);var c=s(14),n=s(0),r=s(10),i=s(29),a=(s(91),s(92),s(28)),u=s(24),o=(s(93),s(1)),l=function(t){var e=t.userStatus,s=t.setUserStatus,r=t.updateUserStatus,i=t.currentID,a=t.isAuth,u=Object(n.useState)(!1),l=Object(c.a)(u,2),j=l[0],b=l[1];return a||23462!=i?23462!=i?Object(o.jsx)("span",{children:null!=e?e:"No status"}):Object(o.jsx)("div",{children:j?Object(o.jsx)("div",{children:Object(o.jsx)("input",{onChange:function(t){s(t.currentTarget.value)},autoFocus:!0,onBlur:function(t){b(!1),r(t.currentTarget.value)},value:null!=e?e:"No status",className:"input",type:"text"})}):Object(o.jsx)("div",{children:Object(o.jsx)("span",{onDoubleClick:function(){return b(!0)},children:null!=e?e:"No status"})})}):Object(o.jsx)("span",{children:"No status"})},j=function(t){var e=t.profile,s=t.userStatus,c=t.updateUserStatus,n=t.setUserStatus,r=t.currentID,i=t.isAuth,j=t.savePhoto;if(!e||!e.photos)return Object(o.jsx)(u.a,{});return Object(o.jsxs)("div",{className:"userInfo",children:[Object(o.jsxs)("div",{className:"userInfo__name",children:[Object(o.jsxs)("div",{className:"userInfo__photoBlock",children:[Object(o.jsx)("img",{src:null!=e.photos.large&&!0===i?e.photos.large:a.a,alt:""}),!0===i&&"23462"==r?Object(o.jsx)("input",{className:"userInfo__photoUpload",type:"file",onChange:function(t){j(t.target.files[0])}}):null]}),Object(o.jsx)("h2",{children:i||"23462"!=r?e.fullName:"Test user"}),Object(o.jsx)(l,{userStatus:s,updateUserStatus:c,setUserStatus:n,currentID:r,isAuth:i})]}),Object(o.jsxs)("div",{className:"userInfo__block",children:[Object(o.jsx)("div",{className:"userInfo__city",children:Object(o.jsxs)("h2",{children:["Looking for a job: ",!0===e.lookingForAJob?"Yes":"No"]})}),Object(o.jsx)("div",{className:"userInfo__birthdate",children:Object(o.jsxs)("h2",{children:["Description: ",!0===e.lookingForAJobDescription?e.lookingForAJobDescription:"No"]})})]})]})},b=(s(94),s(95),s(96),s(31)),d=function(t){return Object(o.jsx)(b.a,{initialValues:{postText:""},onSubmit:function(e,s){var c,n=s.setSubmitting;c=e.postText,t.addPost(c),e.postText="",n(!1)},children:function(t){var e=t.values,s=t.handleChange,c=t.handleSubmit,n=t.isSubmitting;return Object(o.jsxs)("form",{onSubmit:c,children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",{className:"newPost__input",type:"text",name:"postText",onChange:s,value:e.postText})}),Object(o.jsx)("button",{className:"newPost__button button",type:"submit",disabled:n,children:"Add post"})]})}})},h=function(t){var e=t.addPost;return Object(o.jsx)(d,{addPost:e})},f=Object(r.b)(null,{addPost:i.a})(h),p=(s(97),s(98),function(t){var e=t.contact;return Object(o.jsx)("li",{className:"contact",children:"".concat(e[0],": ").concat(null===e[1]?"no":Object(o.jsx)("a",{href:e[1],children:"link"}))})}),O=Object(r.b)((function(t){return{profile:t.profilePage.profile}}),null)((function(t){var e=t.profile,s=t.isAuth;t.currentID;if(!e.contacts&&!s)return Object(o.jsxs)("div",{className:"contacts",children:[Object(o.jsx)("h1",{children:"Contacts"}),Object(o.jsxs)("ul",{className:"contacts__list",children:[Object(o.jsx)("li",{children:"Github: no"}),Object(o.jsx)("li",{children:"VK: no"}),Object(o.jsx)("li",{children:"Facebook: no"}),Object(o.jsx)("li",{children:"Instagram: no"}),Object(o.jsx)("li",{children:"Twitter: no"}),Object(o.jsx)("li",{children:"Website: no"}),Object(o.jsx)("li",{children:"YouTube: no"}),Object(o.jsx)("li",{children:"mainLink: no"})]})]});if(!e.contacts&&s)return Object(o.jsx)(u.a,{});var c=Object.entries(e.contacts).map((function(t){return Object(o.jsx)(p,{contact:t})}));return Object(o.jsxs)("div",{className:"contacts",children:[Object(o.jsx)("h1",{children:"Contacts"}),Object(o.jsx)("ul",{className:"contacts__list",children:c})]})})),x=(s(99),s.p+"static/media/like.d6e9a73c.png"),m=function(t){return Object(o.jsx)("div",{className:"post",children:Object(o.jsxs)("div",{className:"post__row",children:[Object(o.jsx)("div",{className:"post__img",children:Object(o.jsx)("img",{src:a.a,alt:""})}),Object(o.jsxs)("div",{className:"post__text",children:[t.message," ",Object(o.jsx)("img",{src:x,width:"20px",alt:"likes"})," ",t.likesCount]})]})})},v=Object(r.b)((function(t){return{postsData:t.profilePage.postsData.map((function(t){return Object(o.jsx)(m,{message:t.message,likesCount:t.likesCount},t.id)}))}}),null)((function(t){var e=t.postsData,s=t.profile,c=t.isAuth,n=t.currentID;return Object(o.jsxs)("div",{className:"myPosts",children:[Object(o.jsxs)("div",{className:"myPosts__posts",children:[Object(o.jsx)(f,{}),e]}),Object(o.jsx)("div",{className:"myPosts__block",children:Object(o.jsx)(O,{profile:s,isAuth:c,currentID:n})})]})})),S=function(t){var e=t.profile,s=t.userStatus,c=t.updateUserStatus,n=t.setUserStatus,r=t.currentID,i=t.isAuth,a=t.savePhoto;return Object(o.jsxs)("div",{className:"profile",children:[Object(o.jsx)(j,{profile:e,userStatus:s,updateUserStatus:c,setUserStatus:n,currentID:r,isAuth:i,savePhoto:a}),Object(o.jsx)(v,{profile:e,isAuth:i,currentID:r})]})},g=s(30),N=(s(90),s(48)),_=s(3),P=function(t){return t.profilePage.profile},U=function(t){return t.profilePage.userStatus},k=s(18);e.default=Object(N.compose)(Object(r.b)((function(t){return{profile:P(t),isAuth:Object(k.a)(t),userStatus:U(t)}}),{setProfile:i.f,isFetchingChange:g.d,getUserProfile:i.c,requestUserStatus:i.d,updateUserStatus:i.h,setUserStatus:i.g,savePhoto:i.e}))((function(t){var e=t.getUserProfile,s=t.requestUserStatus,r=t.profile,i=t.userStatus,a=t.updateUserStatus,u=t.setUserStatus,l=t.isAuth,j=t.savePhoto,b=Object(n.useState)(null),d=Object(c.a)(b,2),h=d[0],f=d[1],p=Object(_.h)().id;return Object(n.useEffect)((function(){p||(p="23462"),e(p),s(p),f(p)}),[p]),Object(o.jsx)("div",{className:"profile",children:Object(o.jsx)(S,{profile:r,userStatus:i,updateUserStatus:a,setUserStatus:u,currentID:h,isAuth:l,savePhoto:j})})}))},90:function(t,e,s){"use strict";s(2),s(10),s(3),s(1)},91:function(t,e,s){},92:function(t,e,s){},93:function(t,e,s){},94:function(t,e,s){},95:function(t,e,s){},96:function(t,e,s){},97:function(t,e,s){},98:function(t,e,s){},99:function(t,e,s){}}]);
//# sourceMappingURL=3.249fa04a.chunk.js.map