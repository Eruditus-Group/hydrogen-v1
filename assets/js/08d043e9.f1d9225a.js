"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[4482],{5680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>h});var t=n(6540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),y=o,h=p["".concat(i,".").concat(y)]||p[y]||g[y]||l;return n?t.createElement(h,a(a({ref:r},c),{},{components:n})):t.createElement(h,a({ref:r},c))}));function h(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=y;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<l;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9369:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var t=n(8168),o=(n(6540),n(5680));const l={},a="useUrl",u={unversionedId:"hooks/global/useurl",id:"hooks/global/useurl",title:"useUrl",description:"The useUrl hook retrieves the current URL in a server or client component.",source:"@site/docs/hooks/global/useurl.md",sourceDirName:"hooks/global",slug:"/hooks/global/useurl",permalink:"/hydrogen-v1/hooks/global/useurl",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"useShopQuery",permalink:"/hydrogen-v1/hooks/global/useshopquery"},next:{title:"useLocalization",permalink:"/hydrogen-v1/hooks/localization/uselocalization"}},i={},s=[{value:"Example code",id:"example-code",level:2},{value:"Subscribing to the current URL value",id:"subscribing-to-the-current-url-value",level:3},{value:"Return value",id:"return-value",level:2}],c={toc:s},p="wrapper";function g(e){let{components:r,...n}=e;return(0,o.yg)(p,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"useurl"},"useUrl"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useUrl")," hook retrieves the current URL in a server or client component."),(0,o.yg)("h2",{id:"example-code"},"Example code"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"import {useUrl} from '@shopify/hydrogen';\n\nexport default function Page() {\n  const url = useUrl();\n\n  return <h1>Current Url is: {url.href}</h1>;\n}\n")),(0,o.yg)("h3",{id:"subscribing-to-the-current-url-value"},"Subscribing to the current URL value"),(0,o.yg)("p",null,"In client components, you can subscribe to the current value of the URL:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"import {useUrl} from '@shopify/hydrogen';\nimport {useEffect} from 'react';\n\nexport function MyClientComponent() {\n  const url = useUrl();\n\n  useEffect(() => {\n    // Do something with url\n  }, [url]);\n\n  // ...\n}\n")),(0,o.yg)("p",null,"The value of the URL will change immediately, but the page transition might not yet be completed. If you want to wait until the page is completely transitioned, then use the ",(0,o.yg)("inlineCode",{parentName:"p"},"pending")," server state hook value:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"import {useUrl, useServerProps} from '@shopify/hydrogen';\nimport {useEffect} from 'react';\n\nexport function MyClientComponent() {\n  const url = useUrl();\n  const {pending} = useServerProps();\n\n  useEffect(() => {\n    if (!pending) {\n      // Do something with url, now that the page transition has completed.\n    }\n  }, [url, pending]);\n\n  // ...\n}\n")),(0,o.yg)("h2",{id:"return-value"},"Return value"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useUrl")," hook returns a ",(0,o.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL"},"URL")," object with the current URL."))}g.isMDXComponent=!0}}]);