"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[5486],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var o=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),m=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(r),h=n,y=c["".concat(l,".").concat(h)]||c[h]||g[h]||a;return r?o.createElement(y,s(s({ref:t},p),{},{components:r})):o.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var m=2;m<a;m++)s[m]=r[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9174:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var o=r(8168),n=(r(6540),r(5680));const a={},s="Hydrogen templates",i={unversionedId:"tutorials/getting-started/templates",id:"tutorials/getting-started/templates",title:"Hydrogen templates",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate as soon as possible.",source:"@site/docs/tutorials/getting-started/templates.md",sourceDirName:"tutorials/getting-started",slug:"/tutorials/getting-started/templates",permalink:"/hydrogen-v1/tutorials/getting-started/templates",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Hydrogen quickstart",permalink:"/hydrogen-v1/tutorials/getting-started/quickstart"},next:{title:"Build a Hydrogen storefront",permalink:"/hydrogen-v1/tutorials/getting-started/tutorial/"}},l={},m=[{value:"How it works",id:"how-it-works",level:2},{value:"Components",id:"components",level:3},{value:"Account",id:"account",level:4},{value:"Cards",id:"cards",level:4},{value:"Cart",id:"cart",level:4},{value:"Elements",id:"elements",level:4},{value:"Global",id:"global",level:4},{value:"Product",id:"product",level:4},{value:"Search",id:"search",level:4},{value:"Sections",id:"sections",level:4},{value:"Additional components",id:"additional-components",level:4},{value:"Routes",id:"routes",level:3}],p={toc:m},c="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,o.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"hydrogen-templates"},"Hydrogen templates"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,n.yg)("a",{parentName:"p",href:"/migrate"},"migrate")," as soon as possible.")),(0,n.yg)("p",null,"Hydrogen offers different templates that provide paths to building Shopify custom storefronts. This guide describes the templates that Hydrogen offers and how you can begin exploring them."),(0,n.yg)("h2",{id:"how-it-works"},"How it works"),(0,n.yg)("p",null,"Hydrogen provides the following templates to help you get started:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/hello-world/"},"Hello World")),": A minimal template for developers who want to build their Hydrogen storefront from the very beginning. Pick this template to start building from scratch."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/"},"Demo Store")),": The default template installed when creating a new Hydrogen storefront. It\u2019s a complete Hydrogen storefront that uses live production data provided by Shopify. Pick this template to inspect a working Hydrogen codebase, or to use as a starting point for your own build.")),(0,n.yg)("h3",{id:"components"},"Components"),(0,n.yg)("p",null,"The Demo Store template provides a series of components that you can use to accelerate your development process. The components integrate directly with the ",(0,n.yg)("a",{parentName:"p",href:"https://shopify.dev/api/storefront"},"Storefront API")," for efficient data-fetching, allowing you to save time on crafting GraphQL queries to interact with Shopify APIs or other third-party data sources."),(0,n.yg)("p",null,"The Demo Store template includes different categories of components."),(0,n.yg)("h4",{id:"account"},"Account"),(0,n.yg)("p",null,"The following components render account information:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/account/AccountActivateForm.client.tsx"},"AccountActivateForm")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/account/AccountAddressBook.client.tsx"},"AccountAddressBook")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/account/AccountAddressEdit.client.tsx"},"AccountAddressEdit")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/account/AccountCreateForm.client.tsx"},"AccountCreateForm")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/account/AccountDeleteAddress.client.tsx"},"AccountDeleteAddress")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/account/AccountDetails.client.tsx"},"AccountDetails")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/account/AccountDetailsEdit.client.tsx"},"AccountDetailsEdit")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/account/AccountLoginForm.client.tsx"},"AccountLoginForm")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/account/AccountOrderHistory.client.tsx"},"AccountOrderHistory")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/account/AccountPasswordResetForm.client.tsx"},"AccountPasswordResetForm")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/account/AccountRecoverForm.client.tsx"},"AccountRecoverForm"))),(0,n.yg)("h4",{id:"cards"},"Cards"),(0,n.yg)("p",null,"The following components render card elements:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/cards/ArticleCard.tsx"},"ArticleCard")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/cards/CollectionCard.server.tsx"},"CollectionCard")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/cards/OrderCard.client.tsx"},"OrderCard")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/cards/ProductCard.client.tsx"},"ProductCard"))),(0,n.yg)("h4",{id:"cart"},"Cart"),(0,n.yg)("p",null,"The following components render cart elements:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/cart/CartDetails.client.tsx"},"CartDetails")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/cart/CartEmpty.client.tsx"},"CartEmpty")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/cart/CartLineItem.client.tsx"},"CartLineItem"))),(0,n.yg)("h4",{id:"elements"},"Elements"),(0,n.yg)("p",null,"The following components render small chunks of reusable content:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/elements/Button.tsx"},"Button")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/elements/Grid.tsx"},"Grid")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/elements/Heading.tsx"},"Heading")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/elements/Icon.tsx"},"Icon")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/elements/Input.tsx"},"Input")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/elements/LogoutButton.client.tsx"},"LogoutButton")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/elements/Section.tsx"},"Section")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/elements/Skeleton.tsx"},"Skeleton")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/elements/Text.tsx"},"Text"))),(0,n.yg)("h4",{id:"global"},"Global"),(0,n.yg)("p",null,"The following components render global elements:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/global/CartDrawer.client.tsx"},"CartDrawer")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/global/Drawer.client.tsx"},"Drawer")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/global/Footer.server.tsx"},"Footer")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/global/FooterMenu.client.tsx"},"FooterMenu")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/global/Header.client.tsx"},"Header")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/global/Layout.server.tsx"},"Layout")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/global/MenuDrawer.client.tsx"},"MenuDrawer")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/global/Modal.client.tsx"},"Modal")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/global/NotFound.server.tsx"},"NotFound")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/global/PageHeader.tsx"},"PageHeader"))),(0,n.yg)("h4",{id:"product"},"Product"),(0,n.yg)("p",null,"The following components render product information:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/product/ProductDetail.client.tsx"},"ProductDetail")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/product/ProductForm.client.tsx"},"ProductForm")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/product/ProductGallery.client.tsx"},"ProductGallery")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/product/ProductGrid.client.tsx"},"ProductGrid")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/product/ProductOptions.client.tsx"},"ProductOptions"))),(0,n.yg)("h4",{id:"search"},"Search"),(0,n.yg)("p",null,"The following components render search functionality:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/search/NoResultRecommendations.server.tsx"},"NoResultRecommendations")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/search/SearchPage.server.tsx"},"SearchPage"))),(0,n.yg)("h4",{id:"sections"},"Sections"),(0,n.yg)("p",null,"The following components render specific pieces of content on a page:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/sections/FeaturedCollections.tsx"},"FeaturedCollections")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/sections/Hero.tsx"},"Hero")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/sections/ProductCards.tsx"},"ProductCards")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/sections/ProductSwimlane.server.tsx"},"ProductSwimlane"))),(0,n.yg)("h4",{id:"additional-components"},"Additional components"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/CountrySelector.client.tsx"},"CountrySelector")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/CustomFont.client.tsx"},"CustomFont")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/components/HeaderFallback.tsx"},"HeaderFallback"))),(0,n.yg)("h3",{id:"routes"},"Routes"),(0,n.yg)("p",null,"Hydrogen uses ",(0,n.yg)("a",{parentName:"p",href:"/tutorials/routing/"},"file-based routing"),". Any pages added to the ",(0,n.yg)("inlineCode",{parentName:"p"},"src/routes")," directory will be automatically registered as routes by the app. The following routes are included in the Demo Store template:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/routes/account"},"Account")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/routes/api"},"API")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/routes/collections"},"Collections")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/routes/journal"},"Journal")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/routes/pages"},"Pages")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/routes/policies"},"Policies")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/routes/products"},"Products")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/routes/admin.server.tsx"},"Admin")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/routes/cart.server.tsx"},"Cart")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/routes/index.server.tsx"},"Index")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/routes/robots.txt.server.ts"},"Robots")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/routes/search.server.tsx"},"Search")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen-v1/tree/main/templates/demo-store/src/routes/sitemap.xml.server.ts"},"Sitemap"))))}g.isMDXComponent=!0}}]);