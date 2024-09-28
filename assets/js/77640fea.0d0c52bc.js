"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[823],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),y=o,d=c["".concat(p,".").concat(y)]||c[y]||g[y]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(8168),o=(r(6540),r(5680));const a={},i="gql",l={unversionedId:"utilities/gql",id:"utilities/gql",title:"gql",description:"The gql literal utility adds syntax highlighting to your GraphQL queries. You can use gql to pass queries to the useShopQuery hook.",source:"@site/docs/utilities/gql.md",sourceDirName:"utilities",slug:"/utilities/gql",permalink:"/hydrogen-v1/utilities/gql",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"flattenConnection",permalink:"/hydrogen-v1/utilities/flattenconnection"},next:{title:"isBrowser",permalink:"/hydrogen-v1/utilities/isbrowser"}},p={},s=[{value:"Example code",id:"example-code",level:2},{value:"Related hooks",id:"related-hooks",level:2}],u={toc:s},c="wrapper";function g(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"gql"},"gql"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"gql")," literal utility adds syntax highlighting to your GraphQL queries. You can use ",(0,o.yg)("inlineCode",{parentName:"p"},"gql")," to pass queries to the ",(0,o.yg)("a",{parentName:"p",href:"/hooks/global/useshopquery/"},(0,o.yg)("inlineCode",{parentName:"a"},"useShopQuery"))," hook."),(0,o.yg)("p",null,"The difference between the ",(0,o.yg)("inlineCode",{parentName:"p"},"gql")," utility and ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apollographql/graphql-tag"},(0,o.yg)("inlineCode",{parentName:"a"},"graphql-tag"))," is that ",(0,o.yg)("inlineCode",{parentName:"p"},"gql")," never parses strings into ASTNodes in production. As a result, it makes the production bundle smaller by dropping certain AST-related dependencies. In development, however, ",(0,o.yg)("inlineCode",{parentName:"p"},"gql")," uses ASTNodes to provide better errors in your queries."),(0,o.yg)("h2",{id:"example-code"},"Example code"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"import {gql} from '@shopify/hydrogen';\n\nconst QUERY = gql`\nquery Localization {\n  localization {\n    availableCountries {\n      name\n    }\n  }\n}`\n\nuseShopQuery({\n  query: QUERY,\n})\n")),(0,o.yg)("h2",{id:"related-hooks"},"Related hooks"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/hooks/global/useshopquery/"},(0,o.yg)("inlineCode",{parentName:"a"},"useShopQuery")))))}g.isMDXComponent=!0}}]);