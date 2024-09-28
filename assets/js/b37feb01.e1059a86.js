"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[3457],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var o=t(6540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(t),c=s,y=g["".concat(l,".").concat(c)]||g[c]||d[c]||a;return t?o.createElement(y,r(r({ref:n},p),{},{components:t})):o.createElement(y,r({ref:n},p))}));function y(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,r=new Array(a);r[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[g]="string"==typeof e?e:s,r[1]=i;for(var u=2;u<a;u++)r[u]=t[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=t(8168),s=(t(6540),t(5680));const a={},r="Manage sessions",i={unversionedId:"tutorials/sessions/manage-sessions",id:"tutorials/sessions/manage-sessions",title:"Manage sessions",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate as soon as possible.",source:"@site/docs/tutorials/sessions/manage-sessions.md",sourceDirName:"tutorials/sessions",slug:"/tutorials/sessions/manage-sessions",permalink:"/hydrogen-v1/tutorials/sessions/manage-sessions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Sessions",permalink:"/hydrogen-v1/tutorials/sessions/"},next:{title:"Static assets",permalink:"/hydrogen-v1/tutorials/static-assets/"}},l={},u=[{value:"Custom session storage",id:"custom-session-storage",level:2},{value:"Reading and updating session data",id:"reading-and-updating-session-data",level:2},{value:"Example",id:"example",level:3},{value:"Building custom session implementations",id:"building-custom-session-implementations",level:2},{value:"Related components and hooks",id:"related-components-and-hooks",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:u},g="wrapper";function d(e){let{components:n,...t}=e;return(0,s.yg)(g,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"manage-sessions"},"Manage sessions"),(0,s.yg)("admonition",{type:"tip"},(0,s.yg)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,s.yg)("a",{parentName:"p",href:"/migrate"},"migrate")," as soon as possible.")),(0,s.yg)("aside",{class:"note beta"},(0,s.yg)("h4",null,"Experimental feature"),(0,s.yg)("p",null,"Session management is an experimental feature. As a result, functionality is subject to change. You can provide feedback on this feature by ",(0,s.yg)("a",{href:"https://github.com/Shopify/hydrogen/issues"},"submitting an issue in GitHub"),".")),(0,s.yg)("p",null,"Hydrogen's ",(0,s.yg)("a",{parentName:"p",href:"/tutorials/getting-started/templates/"},"Demo Store template")," comes pre-configured with session support."),(0,s.yg)("p",null,"By default, session data is persisted within a cookie. You can adjust the session cookie configuration within your ",(0,s.yg)("a",{parentName:"p",href:"/hydrogen-v1/tutorials/configuration/#session"},"Hydrogen configuration file")," for an in-memory storage or file-based storage (NodeJS only), or build your own storage adapter."),(0,s.yg)("h2",{id:"custom-session-storage"},"Custom session storage"),(0,s.yg)("p",null,"If you want to persist session data in a custom way, then you can write your own session storage adapter. To do so, you need to implement a function that returns an object:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts"},"// customStorage.js\n\nimport {Cookie} from '@shopify/hydrogen';\n\nexport const CookieSessionStorage = function (name, options) {\n  return function () {\n    const cookie = new Cookie(name, options);\n    return {\n      async get(request) {\n        const sid = cookie.getSessionId(request) || generateNewCookieId();\n        const data = await customGetSessionData(sid);\n        return data;\n      },\n      async set(request, value) {\n        const sid = cookie.getSessionId(request) || generateNewCookieId();\n        cookie.setSessionid(sid);\n        await customPersistSessionData(sid, value);\n        // When complete, return the serialized cookie\n        return cookie.serialize();\n      },\n      async destroy(request) {\n        await customDeleteTheSession();\n        // When complete, return the destroyed cookie\n        return cookie.destroy();\n      },\n    };\n  };\n};\n")),(0,s.yg)("h2",{id:"reading-and-updating-session-data"},"Reading and updating session data"),(0,s.yg)("p",null,"In Hydrogen, you can use the ",(0,s.yg)("a",{parentName:"p",href:"/hooks/framework/usesession/"},(0,s.yg)("inlineCode",{parentName:"a"},"useSession"))," hook to read session data. You can update session data within ",(0,s.yg)("a",{parentName:"p",href:"/hydrogen-v1/tutorials/routing/#api-routes"},"API routes"),". API routes are passed a session object for interacting with the session. The session object has the following keys:"),(0,s.yg)("table",null,(0,s.yg)("thead",{parentName:"table"},(0,s.yg)("tr",{parentName:"thead"},(0,s.yg)("th",{parentName:"tr",align:null},"Key"),(0,s.yg)("th",{parentName:"tr",align:null},"Description"))),(0,s.yg)("tbody",{parentName:"table"},(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"get")),(0,s.yg)("td",{parentName:"tr",align:null},"An async function that resolves with the current session state.")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"set")),(0,s.yg)("td",{parentName:"tr",align:null},"An async function to modify a portion of the session state.")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"destroy")),(0,s.yg)("td",{parentName:"tr",align:null},"An async function to destroy the current session.")))),(0,s.yg)("h3",{id:"example"},"Example"),(0,s.yg)("p",null,"The following example shows an API route that's used to retrieve, set, and delete a ",(0,s.yg)("inlineCode",{parentName:"p"},"countryCode")," within a session:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts"},"// my-api.server.js\n\nexport async function api(request, {session}) {\n  let sessionData, jsonData;\n  switch (request.method) {\n    case 'GET':\n      sessionData = await session.get();\n      return {countryCode: sessionData.countryCode};\n    case 'POST':\n      jsonData = await request.json();\n      await session.set('countryCode', jsonData.countryCode);\n      return {countryCode: jsonData.countryCode};\n    case 'DELETE':\n      await session.destroy();\n      return;\n  }\n  return new Response(null, {status: 400});\n}\n")),(0,s.yg)("p",null,"The following example shows a server component which reads data from the session:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts"},"// my-component.server.jsx\n\nimport {useSession} from '@shopify/hydrogen';\n\nexport async function MyComponent() {\n  const {countryCode} = useSession();\n}\n")),(0,s.yg)("blockquote",null,(0,s.yg)("p",{parentName:"blockquote"},"Note:\nSession data is read-only within server components. To update or delete session data, use API functions.")),(0,s.yg)("h2",{id:"building-custom-session-implementations"},"Building custom session implementations"),(0,s.yg)("p",null,"Hydrogen provides a ",(0,s.yg)("a",{parentName:"p",href:"/components/framework/cookie/"},(0,s.yg)("inlineCode",{parentName:"a"},"Cookie"))," component for building your own custom cookie and session implementations. All ",(0,s.yg)("a",{parentName:"p",href:"/hydrogen-v1/tutorials/sessions/#types-of-session-storage"},"Hydrogen session storage mechanisms")," use the same configuration options as ",(0,s.yg)("inlineCode",{parentName:"p"},"Cookie"),"."),(0,s.yg)("h2",{id:"related-components-and-hooks"},"Related components and hooks"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/components/framework/cookie/"},(0,s.yg)("inlineCode",{parentName:"a"},"Cookie"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/components/framework/cookiesessionstorage/"},(0,s.yg)("inlineCode",{parentName:"a"},"CookieSessionStorage"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/components/framework/memorysessionstorage/"},(0,s.yg)("inlineCode",{parentName:"a"},"MemorySessionStorage"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/components/framework/filesessionstorage/"},(0,s.yg)("inlineCode",{parentName:"a"},"FileSessionStorage"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/hooks/framework/usesession/"},(0,s.yg)("inlineCode",{parentName:"a"},"useSession")))),(0,s.yg)("h2",{id:"next-steps"},"Next steps"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Get familiar with the ",(0,s.yg)("a",{parentName:"li",href:"/tutorials/routing/"},"file-based routing system")," that Hydrogen uses."),(0,s.yg)("li",{parentName:"ul"},"Learn about ",(0,s.yg)("a",{parentName:"li",href:"/tutorials/configuration/"},"Hydrogen's configuration properties")," and how to change the location of the configuration file.")))}d.isMDXComponent=!0}}]);