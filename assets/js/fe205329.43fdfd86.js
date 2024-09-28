"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[4325],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,u=m["".concat(i,".").concat(d)]||m[d]||y[d]||o;return n?r.createElement(u,l(l({ref:t},s),{},{components:n})):r.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={},l="CartCost",p={unversionedId:"components/cart/cartcost",id:"components/cart/cartcost",title:"CartCost",description:"The CartCost component renders a Money component with the",source:"@site/docs/components/cart/cartcost.md",sourceDirName:"components/cart",slug:"/components/cart/cartcost",permalink:"/hydrogen-v1/components/cart/cartcost",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"CartCheckoutButton",permalink:"/hydrogen-v1/components/cart/cartcheckoutbutton"},next:{title:"CartLineImage",permalink:"/hydrogen-v1/components/cart/cartlineimage"}},i={},c=[{value:"Example code",id:"example-code",level:2},{value:"Props",id:"props",level:2},{value:"Component type",id:"component-type",level:2},{value:"Related components",id:"related-components",level:2},{value:"Related hooks",id:"related-hooks",level:2}],s={toc:c},m="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cartcost"},"CartCost"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"CartCost")," component renders a ",(0,a.yg)("inlineCode",{parentName:"p"},"Money")," component with the\ncost associated with the ",(0,a.yg)("inlineCode",{parentName:"p"},"amountType")," prop. If no ",(0,a.yg)("inlineCode",{parentName:"p"},"amountType")," prop is specified, then it defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"totalAmount"),"."),(0,a.yg)("h2",{id:"example-code"},"Example code"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import {CartProvider, CartCost} from '@shopify/hydrogen';\n\nexport default function MyCart() {\n  return (\n    <CartProvider>\n      <CartCost amountType=\"total\" />\n    </CartProvider>\n  );\n}\n")),(0,a.yg)("h2",{id:"props"},"Props"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"amountType?"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},'"total" &#124; "subtotal" &#124; "tax" &#124; "duty"')),(0,a.yg)("td",{parentName:"tr",align:null},"A string type that defines the type of cost needed. Valid values: ",(0,a.yg)("inlineCode",{parentName:"td"},"total"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"subtotal"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"tax"),", or ",(0,a.yg)("inlineCode",{parentName:"td"},"duty"),".")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"children?"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,a.yg)("td",{parentName:"tr",align:null},"A function that takes an object return by the ",(0,a.yg)("inlineCode",{parentName:"td"},"useMoney")," hook and returns a ",(0,a.yg)("inlineCode",{parentName:"td"},"ReactNode"),".")))),(0,a.yg)("h2",{id:"component-type"},"Component type"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"CartCost")," component is a client component, which means that it renders on the client.\nFor more information about component types, refer to ",(0,a.yg)("a",{parentName:"p",href:"https://shopify.dev/custom-storefronts/hydrogen/react-server-components"},"React Server Components"),"."),(0,a.yg)("h2",{id:"related-components"},"Related components"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/components/primitive/money/"},(0,a.yg)("inlineCode",{parentName:"a"},"Money")))),(0,a.yg)("h2",{id:"related-hooks"},"Related hooks"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/hooks/cart/usecart/"},(0,a.yg)("inlineCode",{parentName:"a"},"useCart")))))}y.isMDXComponent=!0}}]);