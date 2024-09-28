"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[9763],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,y=d["".concat(l,".").concat(p)]||d[p]||g[p]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(8168),r=(n(6540),n(5680));const o={},i="User authentication",s={unversionedId:"tutorials/authentication/index",id:"tutorials/authentication/index",title:"User authentication",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate as soon as possible.",source:"@site/docs/tutorials/authentication/index.md",sourceDirName:"tutorials/authentication",slug:"/tutorials/authentication/",permalink:"/hydrogen-v1/tutorials/authentication/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Configure analytics",permalink:"/hydrogen-v1/tutorials/analytics/configure-analytics"},next:{title:"Configure user authentication",permalink:"/hydrogen-v1/tutorials/authentication/configure-user-authentication"}},l={},u=[{value:"User account routes",id:"user-account-routes",level:2},{value:"Configuring user authentication",id:"configuring-user-authentication",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:u},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"user-authentication"},"User authentication"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,r.yg)("a",{parentName:"p",href:"/migrate"},"migrate")," as soon as possible.")),(0,r.yg)("p",null,"Hydrogen includes built-in support for managing user authentication, including account creation, login, password reset, and logout. This guide describes the routes, hooks, and components that you can use to implement an end-to-end user authentication experience."),(0,r.yg)("h2",{id:"user-account-routes"},"User account routes"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"/tutorials/getting-started/templates/"},"Demo Store template")," contains the following user account-specific routes:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Route"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/account")),(0,r.yg)("td",{parentName:"tr",align:null},"An account settings page for the current logged in user. If the user isn't logged in when they access this page, then they're redirected to ",(0,r.yg)("inlineCode",{parentName:"td"},"/account/login"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/account/login")),(0,r.yg)("td",{parentName:"tr",align:null},"A page for the user to enter their credentials and log in.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/account/logout")),(0,r.yg)("td",{parentName:"tr",align:null},"An API route that expects a ",(0,r.yg)("inlineCode",{parentName:"td"},"POST")," request to delete the current session.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/account/register")),(0,r.yg)("td",{parentName:"tr",align:null},"A form for the user to set up a new account. On success, the user is redirected to ",(0,r.yg)("inlineCode",{parentName:"td"},"/account"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/account/recover")),(0,r.yg)("td",{parentName:"tr",align:null},"A form for the user to initiate a password reset. If the form is sent successfully, then an email is sent to the user with a link to reset their password. Clicking the link leads the user to the ",(0,r.yg)("inlineCode",{parentName:"td"},"/account/reset/[id]/[resetToken]")," page.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/account/reset/[id]/[resetToken]")),(0,r.yg)("td",{parentName:"tr",align:null},"A form for the user to enter a new password. The user submits the new password and ",(0,r.yg)("inlineCode",{parentName:"td"},"resetToken")," to ",(0,r.yg)("inlineCode",{parentName:"td"},"/account/reset"),". On success, the user is redirected to ",(0,r.yg)("inlineCode",{parentName:"td"},"/account"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/account/reset")),(0,r.yg)("td",{parentName:"tr",align:null},"An API route to update the new password for the user.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/account/activate/[id]/[activationToken]")),(0,r.yg)("td",{parentName:"tr",align:null},"A form to activate the new user. The user should only reach this form from a link in their email. The user submits the password and ",(0,r.yg)("inlineCode",{parentName:"td"},"activationToken")," to ",(0,r.yg)("inlineCode",{parentName:"td"},"/account/activate"),". On success, the user is redirected to ",(0,r.yg)("inlineCode",{parentName:"td"},"/account"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/account/activate")),(0,r.yg)("td",{parentName:"tr",align:null},"An API route to activate the user account.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/address")),(0,r.yg)("td",{parentName:"tr",align:null},"An API route for creating a new address.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/address/[addressId]")),(0,r.yg)("td",{parentName:"tr",align:null},"An API route for updating and deleting an address.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/orders/[orderId]")),(0,r.yg)("td",{parentName:"tr",align:null},"A page to view the details of an order. Requires the user to be authenticated.")))),(0,r.yg)("h2",{id:"configuring-user-authentication"},"Configuring user authentication"),(0,r.yg)("p",null,"You can ",(0,r.yg)("a",{parentName:"p",href:"/tutorials/authentication/configure-user-authentication/"},"configure user authentication")," with the following tasks:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Retrieve a customer access token"),(0,r.yg)("li",{parentName:"ul"},"Tell bots not to index a page")),(0,r.yg)("h2",{id:"next-steps"},"Next steps"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn how to ",(0,r.yg)("a",{parentName:"li",href:"https://shopify.dev/docs/custom-storefronts/customer-accounts"},"manage customer accounts")," with the Storefront API."),(0,r.yg)("li",{parentName:"ul"},"Get familiar with the ",(0,r.yg)("a",{parentName:"li",href:"/tutorials/routing/"},"file-based routing system")," that Hydrogen uses."),(0,r.yg)("li",{parentName:"ul"},"Learn about the Hydrogen framework's built-in support for ",(0,r.yg)("a",{parentName:"li",href:"/tutorials/sessions/"},"session management"),"."),(0,r.yg)("li",{parentName:"ul"},"Learn how to customize the output of ",(0,r.yg)("a",{parentName:"li",href:"/tutorials/seo/manage-seo/"},"SEO-related tags")," in your Hydrogen client and server components.")))}g.isMDXComponent=!0}}]);