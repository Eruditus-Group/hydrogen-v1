"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[9934],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),y=p(n),u=r,m=y["".concat(s,".").concat(u)]||y[u]||d[u]||i;return n?a.createElement(m,o(o({ref:t},g),{},{components:n})):a.createElement(m,o({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(8168),r=(n(6540),n(5680));const i={},o="Analytics",l={unversionedId:"tutorials/analytics/index",id:"tutorials/analytics/index",title:"Analytics",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate as soon as possible.",source:"@site/docs/tutorials/analytics/index.md",sourceDirName:"tutorials/analytics",slug:"/tutorials/analytics/",permalink:"/hydrogen-v1/tutorials/analytics/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Build a product page",permalink:"/hydrogen-v1/tutorials/getting-started/tutorial/products"},next:{title:"Configure analytics",permalink:"/hydrogen-v1/tutorials/analytics/configure-analytics"}},s={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Default events",id:"default-events",level:2},{value:"Analytics sent from the server-side",id:"analytics-sent-from-the-server-side",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Performance metrics",id:"performance-metrics",level:2},{value:"Related components",id:"related-components",level:2},{value:"Next steps",id:"next-steps",level:2}],g={toc:p},y="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"analytics"},"Analytics"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,r.yg)("a",{parentName:"p",href:"/migrate"},"migrate")," as soon as possible.")),(0,r.yg)("p",null,"Hydrogen includes support for analytics that give you insight into how customers are interacting with a custom storefront. This guide describes how the analytics support that's built in to Hydrogen works"),(0,r.yg)("h2",{id:"how-it-works"},"How it works"),(0,r.yg)("p",null,"The following diagram describes how analytics data is processed on the server and client in Hydrogen:"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/hydrogen-analytics.png",alt:"Shows a diagram that describes how analytics data is processed on the server and client in Hydrogen"})),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"On the server, the ",(0,r.yg)("inlineCode",{parentName:"p"},"useServerAnalytics")," hook collects data in a single render request.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"On the client, the data is streamed as part of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Suspense")," component. This single render request waits for all queries to complete, outputs the collected data from the server-side, and triggers a ",(0,r.yg)("inlineCode",{parentName:"p"},"PAGE_VIEW")," event.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Events can be published to external endpoints from the client or server-side:"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Client"),": The client can subscribe to events and publish them to external endpoints."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Server"),": Events are published to the ",(0,r.yg)("inlineCode",{parentName:"li"},"/__event")," endpoint, a server analytics route. You can use server analytics connectors to publish the event to an external endpoint.")),(0,r.yg)("h2",{id:"default-events"},"Default events"),(0,r.yg)("p",null,"By default, Hydrogen publishes the following events to subscribers (",(0,r.yg)("inlineCode",{parentName:"p"},"ClientAnalytics.subscribe"),"):"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Event name"),(0,r.yg)("th",{parentName:"tr",align:null},"When the event is published"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PAGE_VIEW")),(0,r.yg)("td",{parentName:"tr",align:null},"A customer visits a storefront page")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ADD_TO_CART")),(0,r.yg)("td",{parentName:"tr",align:null},"A customer adds an item to their cart")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"UPDATE_CART")),(0,r.yg)("td",{parentName:"tr",align:null},"A customer updates an item in their cart")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"REMOVE_FROM_CART")),(0,r.yg)("td",{parentName:"tr",align:null},"A customer removes an item from their cart")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"DISCOUNT_CODE_UPDATED")),(0,r.yg)("td",{parentName:"tr",align:null},"A discount code that a customer applies to a cart is updated")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"VIEWED_PRODUCT")),(0,r.yg)("td",{parentName:"tr",align:null},"A customer views a product details page. This is set with ",(0,r.yg)("inlineCode",{parentName:"td"},"publishEventsOnNavigate")," on product pages.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PERFORMANCE")),(0,r.yg)("td",{parentName:"tr",align:null},"The performance metrics for page loads in a Hydrogen storefront. This is available when you opt in to ",(0,r.yg)("inlineCode",{parentName:"td"},"<PerformanceMetrics />"),".")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note:\nThe event name constants are available in ",(0,r.yg)("inlineCode",{parentName:"p"},"ClientAnalytics.eventNames"),".")),(0,r.yg)("p",null,"Learn how to ",(0,r.yg)("a",{parentName:"p",href:"/tutorials/analytics/configure-analytics/"},"subscribe and unsubscribe")," to events, and learn how to ",(0,r.yg)("a",{parentName:"p",href:"/hydrogen-v1/tutorials/analytics/configure-analytics#configure-custom-events"},"configure custom events")),(0,r.yg)("h2",{id:"analytics-sent-from-the-server-side"},"Analytics sent from the server-side"),(0,r.yg)("p",null,"Some information that isn't relevant to storefront customers, but might be helpful for the development team, is only available on the server. For example, server-side information includes detailed information about how many API calls a single page render makes, or how long each API call took."),(0,r.yg)("h3",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,"The following table describes the request function parameters for ",(0,r.yg)("inlineCode",{parentName:"p"},"ServerAnalyticsConnector"),":"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"requestUrl")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The analytics request url.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"requestHeader")),(0,r.yg)("td",{parentName:"tr",align:null},"Headers"),(0,r.yg)("td",{parentName:"tr",align:null},"The analytics request headers object.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"data")),(0,r.yg)("td",{parentName:"tr",align:null},"object or text"),(0,r.yg)("td",{parentName:"tr",align:null},"The result from ",(0,r.yg)("inlineCode",{parentName:"td"},".json()")," or ",(0,r.yg)("inlineCode",{parentName:"td"},".text()"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"contentType")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"The content type. Valid values: ",(0,r.yg)("inlineCode",{parentName:"td"},"json")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"text"),".")))),(0,r.yg)("p",null,"Learn how to ",(0,r.yg)("a",{parentName:"p",href:"/hydrogen-v1/tutorials/analytics/configure-analytics#send-analytics-data-from-the-server-side"},"send analytics data")," from the server-side."),(0,r.yg)("h2",{id:"performance-metrics"},"Performance metrics"),(0,r.yg)("p",null,"Performance metrics provide insight into how fast pages are loading in your Hydrogen storefront. For example, you might want to gather the following metrics for full and sub page loads:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Time to First Byte (TTFB)"),": The time between a browser requesting a page and receiving the first byte of information from the server"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"First Contentful Paint (FCP)"),": The time it takes for a browser to render content on a page"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Largest Contentful Paint (LCP)"),": The time it takes to render and interact with the largest content element on the page"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Duration"),": The total amount of time it takes for a page to finish streaming")),(0,r.yg)("p",null,"Learn about ",(0,r.yg)("a",{parentName:"p",href:"/hydrogen-v1/tutorials/analytics/configure-analytics#performance-metrics"},"displaying performance metrics"),"."),(0,r.yg)("h2",{id:"related-components"},"Related components"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/components/framework/shopifyanalytics/"},(0,r.yg)("inlineCode",{parentName:"a"},"ShopifyAnalytics")))),(0,r.yg)("h2",{id:"next-steps"},"Next steps"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn how to perform common tasks for ",(0,r.yg)("a",{parentName:"li",href:"/tutorials/analytics/configure-analytics/"},"configuring analytics"),"."),(0,r.yg)("li",{parentName:"ul"},"Learn how to ",(0,r.yg)("a",{parentName:"li",href:"/tutorials/querying/preloaded-queries/"},"configure queries to preload")," in your Hydrogen app."),(0,r.yg)("li",{parentName:"ul"},"Learn how to customize the output of ",(0,r.yg)("a",{parentName:"li",href:"/tutorials/seo/manage-seo/"},"SEO-related tags")," in your Hydrogen client and server components."),(0,r.yg)("li",{parentName:"ul"},"Learn about ",(0,r.yg)("a",{parentName:"li",href:"/tutorials/configuration/"},"Hydrogen's configuration properties")," and how to change the location of the configuration file.")))}d.isMDXComponent=!0}}]);