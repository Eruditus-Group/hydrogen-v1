"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[1990],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>s});var a=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),y=o,s=d["".concat(p,".").concat(y)]||d[y]||g[y]||r;return t?a.createElement(s,i(i({ref:n},u),{},{components:t})):a.createElement(s,i({ref:n},u))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6261:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(8168),o=(t(6540),t(5680));const r={},i="useLocalization",l={unversionedId:"hooks/localization/uselocalization",id:"hooks/localization/uselocalization",title:"useLocalization",description:"The useLocalization hook returns the locale, country, and language of the current page. It can be used within server or client components and it must be a descendent of a ShopifyProvider component.",source:"@site/docs/hooks/localization/uselocalization.md",sourceDirName:"hooks/localization",slug:"/hooks/localization/uselocalization",permalink:"/hydrogen-v1/hooks/localization/uselocalization",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"useUrl",permalink:"/hydrogen-v1/hooks/global/useurl"},next:{title:"useLoadScript",permalink:"/hydrogen-v1/hooks/primitive/useloadscript"}},p={},c=[{value:"Example code",id:"example-code",level:2},{value:"Return value",id:"return-value",level:2},{value:"Determine the locale for i18n",id:"determine-the-locale-for-i18n",level:2},{value:"Related components",id:"related-components",level:2},{value:"Related framework topics",id:"related-framework-topics",level:2}],u={toc:c},d="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"uselocalization"},"useLocalization"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useLocalization")," hook returns the locale, country, and language of the current page. It can be used within server or client components and it must be a descendent of a ",(0,o.yg)("a",{parentName:"p",href:"/components/global/shopifyprovider/"},(0,o.yg)("inlineCode",{parentName:"a"},"ShopifyProvider"))," component."),(0,o.yg)("h2",{id:"example-code"},"Example code"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"import {useLocalization, gql} from '@shopify/hydrogen';\n\nexport function MyComponent() {\n  const {country, locale, language} = useLocalization();\n\n  const query = gql`\n    query ProductPriceMax($country: CountryCode) @inContext(country: $country) {\n      productByHandle(handle: \"1234\") {\n        priceRange {\n          maxVariantPrice {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n  `;\n\n  const {data} = useShopQuery({\n    query,\n    variables: {\n      country: country.isoCode,\n    },\n  });\n\n  return {\n    /* Your JSX*/\n  };\n}\n")),(0,o.yg)("h2",{id:"return-value"},"Return value"),(0,o.yg)("p",null,"This hook returns an object with the following properties:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Property"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"country")),(0,o.yg)("td",{parentName:"tr",align:null},"An object with the country's ",(0,o.yg)("inlineCode",{parentName:"td"},"isoCode"),".")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"language")),(0,o.yg)("td",{parentName:"tr",align:null},"An object with the language's ",(0,o.yg)("inlineCode",{parentName:"td"},"isoCode"),".")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"locale")),(0,o.yg)("td",{parentName:"tr",align:null},"The locale string based on ",(0,o.yg)("inlineCode",{parentName:"td"},"country")," and ",(0,o.yg)("inlineCode",{parentName:"td"},"language"),". See ",(0,o.yg)("a",{parentName:"td",href:"#determine-the-locale-for-i18n"},"how we determine locale"),".")))),(0,o.yg)("h2",{id:"determine-the-locale-for-i18n"},"Determine the locale for i18n"),(0,o.yg)("p",null,"We use the assigned ",(0,o.yg)("inlineCode",{parentName:"p"},"language")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"countryCode")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"ShopifyProvider")," to determine the ",(0,o.yg)("inlineCode",{parentName:"p"},"locale"),"."),(0,o.yg)("p",null,"If the ",(0,o.yg)("inlineCode",{parentName:"p"},"language")," doesn't contain language tag extensions, then we try to merge ",(0,o.yg)("inlineCode",{parentName:"p"},"language")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"countryCode"),". For example, if ",(0,o.yg)("inlineCode",{parentName:"p"},"language")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"EN")," (English) and ",(0,o.yg)("inlineCode",{parentName:"p"},"countryCode")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"US")," (United States), then ",(0,o.yg)("inlineCode",{parentName:"p"},"locale")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"EN-US"),"."),(0,o.yg)("p",null,"Alternatively if the ",(0,o.yg)("inlineCode",{parentName:"p"},"language")," contains a language tag extension, then we use it directly as ",(0,o.yg)("inlineCode",{parentName:"p"},"locale"),". For example, if\n",(0,o.yg)("inlineCode",{parentName:"p"},"language")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"PT_BR")," (Brazilian Portuguese) and ",(0,o.yg)("inlineCode",{parentName:"p"},"countryCode")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"US")," (United States), then ",(0,o.yg)("inlineCode",{parentName:"p"},"locale")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"PT_BR")),(0,o.yg)("h2",{id:"related-components"},"Related components"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/components/global/shopifyprovider/"},(0,o.yg)("inlineCode",{parentName:"a"},"ShopifyProvider")))),(0,o.yg)("h2",{id:"related-framework-topics"},"Related framework topics"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://shopify.dev/custom-storefronts/hydrogen/"},"Hydrogen configuration")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://shopify.dev/custom-storefronts/hydrogen/internationalization"},"Internationalization"))))}g.isMDXComponent=!0}}]);