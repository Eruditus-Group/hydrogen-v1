"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[8704],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),y=o,m=u["".concat(d,".").concat(y)]||u[y]||s[y]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(8168),o=(t(6540),t(5680));const a={},i="flattenConnection",l={unversionedId:"utilities/flattenconnection",id:"utilities/flattenconnection",title:"flattenConnection",description:"The flattenConnection utility transforms a connection object from the Storefront API (for example, Product-related connections) into a flat array of nodes. The utility works with either nodes or edges.node.",source:"@site/docs/utilities/flattenconnection.md",sourceDirName:"utilities",slug:"/utilities/flattenconnection",permalink:"/hydrogen-v1/utilities/flattenconnection",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"useProductOptions",permalink:"/hydrogen-v1/hooks/product-variant/useproductoptions"},next:{title:"gql",permalink:"/hydrogen-v1/utilities/gql"}},d={},c=[{value:"Example code",id:"example-code",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Return type",id:"return-type",level:2},{value:"Related components",id:"related-components",level:2},{value:"Related hooks",id:"related-hooks",level:2}],p={toc:c},u="wrapper";function s(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"flattenconnection"},"flattenConnection"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"flattenConnection")," utility transforms a connection object from the Storefront API (for example, ",(0,o.yg)("a",{parentName:"p",href:"https://shopify.dev/api/storefront/reference/products/product"},"Product-related connections"),") into a flat array of nodes. The utility works with either ",(0,o.yg)("inlineCode",{parentName:"p"},"nodes")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"edges.node"),"."),(0,o.yg)("h2",{id:"example-code"},"Example code"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"import {\n  flattenConnection,\n  MediaFile,\n  useShopQuery,\n  MediaFile,\n  gql,\n} from '@shopify/hydrogen';\n\nconst QUERY = gql`\n  query product($handle: String!) {\n    product: productByHandle(handle: $handle) {\n      media(first: 10) {\n        edges {\n          node {\n            ... on MediaImage {\n              mediaContentType\n              image {\n                id\n                url\n                altText\n                width\n                height\n              }\n            }\n            ... on Video {\n              mediaContentType\n              id\n              previewImage {\n                url\n              }\n              sources {\n                mimeType\n                url\n              }\n            }\n            ... on ExternalVideo {\n              mediaContentType\n              id\n              embedUrl\n              host\n            }\n            ... on Model3d {\n              mediaContentType\n              id\n              alt\n              mediaContentType\n              previewImage {\n                url\n              }\n              sources {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n`;\nexport function Product({handle}) {\n  const {data} = useShopQuery({query: QUERY, variables: {handle}});\n  const media = flattenConnection(data.product.media);\n  return (\n    <>\n      {media.map((mediaFile) => {\n        return <MediaFile data={mediaFile} key={mediaFile.id} />;\n      })}\n    </>\n  );\n}\n")),(0,o.yg)("h2",{id:"arguments"},"Arguments"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Argument"),(0,o.yg)("th",{parentName:"tr",align:null},"Required"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"A connection object with the field ",(0,o.yg)("inlineCode",{parentName:"td"},"nodes")," or ",(0,o.yg)("inlineCode",{parentName:"td"},"edges"),". For example, any of the ",(0,o.yg)("a",{parentName:"td",href:"https://shopify.dev/docs/api/storefront/reference/products/product"},"Product connections"),"."),(0,o.yg)("td",{parentName:"tr",align:null},"Yes")))),(0,o.yg)("h2",{id:"return-type"},"Return type"),(0,o.yg)("p",null,"A flat array that contains elements that correspond to the ",(0,o.yg)("inlineCode",{parentName:"p"},"node")," value in each element of the original ",(0,o.yg)("inlineCode",{parentName:"p"},"edges")," array, or the ",(0,o.yg)("inlineCode",{parentName:"p"},"node")," itself."),(0,o.yg)("h2",{id:"related-components"},"Related components"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/components/product-variant/productoptionsprovider/"},"ProductOptionsProvider"))),(0,o.yg)("h2",{id:"related-hooks"},"Related hooks"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/hooks/product-variant/useproductoptions/"},"useProductOptions"))))}s.isMDXComponent=!0}}]);