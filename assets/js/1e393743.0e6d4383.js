"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[1648],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(a),y=r,g=s["".concat(d,".").concat(y)]||s[y]||u[y]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=y;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},6245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(8168),r=(a(6540),a(5680));const o={},i="useCart",l={unversionedId:"hooks/cart/usecart",id:"hooks/cart/usecart",title:"useCart",description:"The useCart hook provides access to the cart object. It must be a descendent of a CartProvider component.",source:"@site/docs/hooks/cart/usecart.md",sourceDirName:"hooks/cart",slug:"/hooks/cart/usecart",permalink:"/hydrogen-v1/hooks/cart/usecart",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"ProductProvider",permalink:"/hydrogen-v1/components/product-variant/productprovider"},next:{title:"useCartLine",permalink:"/hydrogen-v1/hooks/cart/usecartline"}},d={},p=[{value:"Example code",id:"example-code",level:2},{value:"Return value",id:"return-value",level:2},{value:"Related components",id:"related-components",level:2}],c={toc:p},s="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(s,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"usecart"},"useCart"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"useCart")," hook provides access to the cart object. It must be a descendent of a ",(0,r.yg)("inlineCode",{parentName:"p"},"CartProvider")," component."),(0,r.yg)("h2",{id:"example-code"},"Example code"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import {CartProvider, useCart} from '@shopify/hydrogen';\n\nexport function MyComponent() {\n  return (\n    <CartProvider>\n      <CartLineItems />\n    </CartProvider>\n  );\n}\n\nexport function CartLineItems() {\n  const {lines} = useCart();\n\n  return (\n    <>\n      {lines.map((line) => {\n        return {\n          /* your JSX*/\n        };\n      })}\n    </>\n  );\n}\n")),(0,r.yg)("h2",{id:"return-value"},"Return value"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"useCart")," hook returns an object with the following keys:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"id")),(0,r.yg)("td",{parentName:"tr",align:null},"The cart ID.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"lines")),(0,r.yg)("td",{parentName:"tr",align:null},"The cart lines.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"checkoutUrl")),(0,r.yg)("td",{parentName:"tr",align:null},"The URL for the checkout for this cart.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"note")),(0,r.yg)("td",{parentName:"tr",align:null},"The cart note.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"buyerIdentity")),(0,r.yg)("td",{parentName:"tr",align:null},"The cart's buyer identity.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"attributes")),(0,r.yg)("td",{parentName:"tr",align:null},"The cart attributes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"discountCodes")),(0,r.yg)("td",{parentName:"tr",align:null},"The discount codes applied to the cart.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"cost")),(0,r.yg)("td",{parentName:"tr",align:null},"The cost for the cart, including the subtotal, total, taxes, and duties.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"status")),(0,r.yg)("td",{parentName:"tr",align:null},"The status of the cart. This returns 'uninitialized' when the cart is not yet created, 'creating' when the cart is being created, 'updating' when the cart is updating, and 'idle' when the cart isn't being created or updated.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"error")),(0,r.yg)("td",{parentName:"tr",align:null},"A string of an error from a cart action, such as adding or removing an item from the cart. If an error does occur, then the cart is put back into the last valid state it was in.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"cartCreate")),(0,r.yg)("td",{parentName:"tr",align:null},"A callback that creates a cart. Expects the same input you would provide to the Storefront API's ",(0,r.yg)("a",{parentName:"td",href:"https://shopify.dev/api/storefront/reference/cart/cartcreate"},"cartCreate")," mutation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"linesAdd")),(0,r.yg)("td",{parentName:"tr",align:null},"A callback that adds lines to the cart. Expects the same ",(0,r.yg)("inlineCode",{parentName:"td"},"lines")," input that you would provide to the Storefront API's ",(0,r.yg)("a",{parentName:"td",href:"https://shopify.dev/api/storefront/reference/cart/cartlinesadd"},"cartLinesAdd")," mutation. If a cart doesn't already exist, then it will create the cart for you.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"linesRemove")),(0,r.yg)("td",{parentName:"tr",align:null},"A callback that removes lines from the cart. Expects the same ",(0,r.yg)("inlineCode",{parentName:"td"},"lines")," input that you would provide to the Storefront API's ",(0,r.yg)("a",{parentName:"td",href:"https://shopify.dev/api/storefront/reference/cart/cartlinesremove"},"cartLinesRemove")," mutation. Only lines that are included in the ",(0,r.yg)("inlineCode",{parentName:"td"},"lines")," parameter will be in the cart afterwards.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"linesUpdate")),(0,r.yg)("td",{parentName:"tr",align:null},"A callback that updates lines in the cart. Expects the same ",(0,r.yg)("inlineCode",{parentName:"td"},"lines")," input that you would provide to the Storefront API's ",(0,r.yg)("a",{parentName:"td",href:"https://shopify.dev/api/storefront/reference/cart/cartlinesupdate"},"cartLinesUpdate")," mutation. If a line item is not included in the ",(0,r.yg)("inlineCode",{parentName:"td"},"lines")," parameter, it will still exist in the cart and will not be changed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"noteUpdate")),(0,r.yg)("td",{parentName:"tr",align:null},"A callback that updates the note in the cart. Expects the same ",(0,r.yg)("inlineCode",{parentName:"td"},"note")," input that you would provide to the Storefront API's ",(0,r.yg)("a",{parentName:"td",href:"https://shopify.dev/api/storefront/reference/cart/cartnoteupdate"},"cartNoteUpdate")," mutation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"buyerIdentityUpdate")),(0,r.yg)("td",{parentName:"tr",align:null},"A callback that updates the buyer identity in the cart. Expects the same ",(0,r.yg)("inlineCode",{parentName:"td"},"buyerIdentity")," input that you would provide to the Storefront API's ",(0,r.yg)("a",{parentName:"td",href:"https://shopify.dev/api/storefront/reference/cart/cartbuyeridentityupdate"},"cartBuyerIdentityUpdate")," mutation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"cartAttributesUpdate")),(0,r.yg)("td",{parentName:"tr",align:null},"A callback that updates the cart attributes. Expects the same ",(0,r.yg)("inlineCode",{parentName:"td"},"attributes")," input that you would provide to the Storefront API's ",(0,r.yg)("a",{parentName:"td",href:"https://shopify.dev/api/storefront/reference/cart/cartattributesupdate"},"cartAttributesUpdate")," mutation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"discountCodesUpdate")),(0,r.yg)("td",{parentName:"tr",align:null},"A callback that updates the cart's discount codes. Expects the same ",(0,r.yg)("inlineCode",{parentName:"td"},"codes")," input that you would provide to the Storefront API's ",(0,r.yg)("a",{parentName:"td",href:"https://shopify.dev/api/storefront/reference/cart/cartdiscountcodesupdate"},"cartDiscountCodesUpdate")," mutation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"totalQuantity")),(0,r.yg)("td",{parentName:"tr",align:null},"The total number of items in the cart, across all lines. If there are no lines, then the value is 0.")))),(0,r.yg)("h2",{id:"related-components"},"Related components"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/components/cart/cartprovider/"},(0,r.yg)("inlineCode",{parentName:"a"},"CartProvider")))))}u.isMDXComponent=!0}}]);