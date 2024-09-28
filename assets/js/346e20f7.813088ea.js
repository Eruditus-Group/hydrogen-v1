"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[3554],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3683:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const a={},s="Create custom fonts",i={unversionedId:"tutorials/css-support/create-custom-fonts",id:"tutorials/css-support/create-custom-fonts",title:"Create custom fonts",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate as soon as possible.",source:"@site/docs/tutorials/css-support/create-custom-fonts.md",sourceDirName:"tutorials/css-support",slug:"/tutorials/css-support/create-custom-fonts",permalink:"/hydrogen-v1/tutorials/css-support/create-custom-fonts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Built-in CSS support",permalink:"/hydrogen-v1/tutorials/css-support/"},next:{title:"Importing CSS in React Server Components",permalink:"/hydrogen-v1/tutorials/css-support/import-css-in-rsc"}},l={},c=[{value:"Create a custom font",id:"create-a-custom-font",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"create-custom-fonts"},"Create custom fonts"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,o.yg)("a",{parentName:"p",href:"/migrate"},"migrate")," as soon as possible.")),(0,o.yg)("p",null,"If you want to use a font that's not included in Shopify's font library, then you can use fonts from third-party solutions such as ",(0,o.yg)("a",{parentName:"p",href:"https://fonts.adobe.com/fonts"},"Typekit")," or create custom fonts."),(0,o.yg)("h2",{id:"create-a-custom-font"},"Create a custom font"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Add font files inside the ",(0,o.yg)("inlineCode",{parentName:"p"},"/public")," folder. For example, add font files to ",(0,o.yg)("inlineCode",{parentName:"p"},"/public/fonts"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Create a ",(0,o.yg)("inlineCode",{parentName:"p"},".css")," file that loads the local custom font and reference the font with ",(0,o.yg)("inlineCode",{parentName:"p"},"url()"),":"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-css"},"/* custom-font.css */\n\n/* fraunces-regular - latin */\n@font-face {\n  font-family: 'Fraunces';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('/fonts/fraunces-v22-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n    url('/fonts/fraunces-v22-latin-regular.eot?#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */ url('/fonts/fraunces-v22-latin-regular.woff2') format('woff2'),\n    /* Super Modern Browsers */ url('/fonts/fraunces-v22-latin-regular.woff')\n      format('woff'),\n    /* Modern Browsers */ url('/fonts/fraunces-v22-latin-regular.ttf')\n      format('truetype'),\n    /* Safari, Android, iOS */\n      url('/fonts/fraunces-v22-latin-regular.svg#Fraunces') format('svg'); /* Legacy iOS */\n}\n")))),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Import your ",(0,o.yg)("inlineCode",{parentName:"li"},".css")," file into ",(0,o.yg)("inlineCode",{parentName:"li"},"index.html")," or any desired client component.")))}f.isMDXComponent=!0}}]);