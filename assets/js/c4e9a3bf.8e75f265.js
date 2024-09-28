"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[2788],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,u=d["".concat(l,".").concat(g)]||d[g]||m[g]||a;return t?r.createElement(u,s(s({ref:n},c),{},{components:t})):r.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2125:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(8168),o=(t(6540),t(5680));const a={},s="React Server Components overview",i={unversionedId:"tutorials/react-server-components/index",id:"tutorials/react-server-components/index",title:"React Server Components overview",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate as soon as possible.",source:"@site/docs/tutorials/react-server-components/index.md",sourceDirName:"tutorials/react-server-components",slug:"/tutorials/react-server-components/",permalink:"/hydrogen-v1/tutorials/react-server-components/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Preloaded queries",permalink:"/hydrogen-v1/tutorials/querying/preloaded-queries"},next:{title:"Working with React Server Components",permalink:"/hydrogen-v1/tutorials/react-server-components/work-with-rsc"}},l={},p=[{value:"How React Server Components work",id:"how-react-server-components-work",level:2},{value:"Component types",id:"component-types",level:3},{value:"Benefits",id:"benefits",level:2},{value:"Constraints",id:"constraints",level:2},{value:"Composition",id:"composition",level:3},{value:"Sending props",id:"sending-props",level:3},{value:"Sharing code between server and client",id:"sharing-code-between-server-and-client",level:3},{value:"Client components and server-side rendering",id:"client-components-and-server-side-rendering",level:3},{value:"Component organization and index files",id:"component-organization-and-index-files",level:3},{value:"Next steps",id:"next-steps",level:2}],c={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"react-server-components-overview"},"React Server Components overview"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,o.yg)("a",{parentName:"p",href:"/migrate"},"migrate")," as soon as possible.")),(0,o.yg)("p",null,"Hydrogen is modelled after ",(0,o.yg)("a",{parentName:"p",href:"https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html"},"React Server Components"),", an approach that offers an opinionated data-fetching and rendering workflow for React apps."),(0,o.yg)("p",null,"This guide provides information about how React Server Components work in the context of Hydrogen."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note:\nHydrogen's ",(0,o.yg)("a",{parentName:"p",href:"/tutorials/react-server-components/work-with-rsc/"},"implementation")," of server components is a modified version of React Server Components, which are currently in ",(0,o.yg)("a",{parentName:"p",href:"https://reactjs.org/blog/2022/06/15/react-labs-what-we-have-been-working-on-june-2022.html#server-components"},"Alpha"),". Shopify provides a layer of abstractions to make server components stable for use in Hydrogen apps."),(0,o.yg)("p",{parentName:"blockquote"},"Shopify is currently working with Vercel and the React team to align on enhancements to server components, and will release a future version of Hydrogen with tools for migrating existing Hydrogen apps.")),(0,o.yg)("h2",{id:"how-react-server-components-work"},"How React Server Components work"),(0,o.yg)("p",null,"React Server Components allow the server and the client to work together to render your Hydrogen app."),(0,o.yg)("p",null,"For example, the following React element tree is ",(0,o.yg)("a",{parentName:"p",href:"#composition"},"composed of React components")," that render other React components. React Server Components allow some components to render on the server, some to render in the browser or on the server using server-side rendering (SSR), and others to render on both the server and the client:"),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/react-element-tree.png",alt:"A diagram that illustrates a React element tree composed of server, client, and shared components"})),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note:\nYou can't import a server component into a client component. However, you can pass a server component into a client component using ",(0,o.yg)("a",{parentName:"p",href:"/components/#customizing-hydrogen-components"},"passthrough props"),".")),(0,o.yg)("h3",{id:"component-types"},"Component types"),(0,o.yg)("p",null,"React Server Components include the following component types:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"),(0,o.yg)("th",{parentName:"tr",align:null},"Filename convention"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Server"),(0,o.yg)("td",{parentName:"tr",align:null},"Components that fetch data and render content on the server. Their dependencies aren't in the client bundle. Server components don't include any client-side interactivity. Only server components can make calls to the ",(0,o.yg)("a",{parentName:"td",href:"https://shopify.dev/api/storefront"},"Storefront API"),"."),(0,o.yg)("td",{parentName:"tr",align:null},"Server components end in ",(0,o.yg)("inlineCode",{parentName:"td"},".server.jsx"),".")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Client"),(0,o.yg)("td",{parentName:"tr",align:null},"Components that render on the client. Client components include client-side stateful interactivity."),(0,o.yg)("td",{parentName:"tr",align:null},"Client components end in ",(0,o.yg)("inlineCode",{parentName:"td"},".client.jsx"),".")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Shared"),(0,o.yg)("td",{parentName:"tr",align:null},"Components that render on both the server and the client."),(0,o.yg)("td",{parentName:"tr",align:null},"Shared components don't end in either ",(0,o.yg)("inlineCode",{parentName:"td"},".client.jsx")," or ",(0,o.yg)("inlineCode",{parentName:"td"},".server.jsx"),".")))),(0,o.yg)("h2",{id:"benefits"},"Benefits"),(0,o.yg)("p",null,"React Server Components separate client and server logic. This separation provides the following benefits to Hydrogen apps:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Server-only code that has no impact on bundle size and reduces bundle sizes"),(0,o.yg)("li",{parentName:"ul"},"Server-side access to custom and private server-side data sources"),(0,o.yg)("li",{parentName:"ul"},"Seamless integration and a well-defined protocol for server and client components"),(0,o.yg)("li",{parentName:"ul"},"Streaming rendering and progressive hydration"),(0,o.yg)("li",{parentName:"ul"},"Subtree and component-level updates that preserve client state"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#sharing-code-between-server-and-client"},"Server and client code sharing"),", where appropriate")),(0,o.yg)("h2",{id:"constraints"},"Constraints"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Tip:\nYou don't need to memorize the rules referenced in this section to use React Server Components. Hydrogen has lint rules and error messages to help enforce the constraints on ",(0,o.yg)("inlineCode",{parentName:"p"},".server.jsx")," and ",(0,o.yg)("inlineCode",{parentName:"p"},".client.jsx")," files during the rendering process.")),(0,o.yg)("p",null,"React Server Components have the following constraints on server and client components:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Client components can\u2019t access server-only features, like the filesystem, and can only import other client components."),(0,o.yg)("li",{parentName:"ul"},"Server components can\u2019t access client-only features, like state.")),(0,o.yg)("p",null,"Due to these constraints, there are ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/josephsavona/rfcs/blob/server-components/text/0000-server-components.md#capabilities--constraints-of-server-and-client-components"},"specific rules")," that you need to follow when building your Hydrogen app:"),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/server-client-component-rules.png",alt:"A diagram that illustrates the rules that apply to server and client components"})),(0,o.yg)("h3",{id:"composition"},"Composition"),(0,o.yg)("p",null,"One of the key constraints of React Server Components is that you can't import and render server components from client components. However, you can compose React Server Components to take in props."),(0,o.yg)("p",null,"The following example shows how to pass a server component as a ",(0,o.yg)("inlineCode",{parentName:"p"},"children")," prop to a client component. The ",(0,o.yg)("inlineCode",{parentName:"p"},"OuterServerComponent")," can then instantiate both the client and server components. This is how you can have server components under client components in your ",(0,o.yg)("a",{parentName:"p",href:"#how-react-server-components-work"},"React element tree"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"// MyClientComponent.client.jsx\n\nexport default function MyClientComponent({children}) {\n  return (\n    <div>\n      <h1>This code is rendered on the client</h1>\n      {children}\n    </div>\n  );\n}\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"// MyServerComponent.server.jsx\n\nexport default function MyServerComponent() {\n  return <span>This code is rendered on the server</span>;\n}\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"// MyOuterServerComponent.server.jsx\n\n// `MyOuterServerComponent` can instantiate both the client and server\n// components. You can pass in `<MyServerComponent/>` as\n// the `children` prop to `MyClientComponent`.\nimport MyClientComponent from './MyClientComponent.client';\nimport MyServerComponent from './MyServerComponent.server';\nexport default function MyOuterServerComponent() {\n  return (\n    <MyClientComponent>\n      <MyServerComponent />\n    </MyClientComponent>\n  );\n}\n")),(0,o.yg)("h3",{id:"sending-props"},"Sending props"),(0,o.yg)("p",null,"When you send props to client components from a server component, make sure that the props are JSON-serializable. For example, functions or callbacks can't be passed as props."),(0,o.yg)("p",null,"The following prop would send successfully:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},'// App.server.jsx\n\n<MyClientComponent color="red" intro={<p>Here\'s my favorite color:</p>}>\n  Great to have you here today.\n</MyClientComponent>\n')),(0,o.yg)("p",null,"The following prop wouldn't send successfully:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},"// App.server.jsx\n\n<MyClientComponent onClick={() => console.log('uh oh')}>\n  Great to have you here today.\n</MyClientComponent>\n")),(0,o.yg)("h3",{id:"sharing-code-between-server-and-client"},"Sharing code between server and client"),(0,o.yg)("p",null,"In addition to server-specific and client-specific components, you can create components that work on both the server and the client. This allows logic to be shared across environments, as long as the components meet all the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/josephsavona/rfcs/blob/server-components/text/0000-server-components.md#sharing-code-between-server-and-client"},"constraints of both the server and client components"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/hydrogen-shared-components.png",alt:"A diagram that illustrates server-specific and client-specific components, and shared components between the client and server"})),(0,o.yg)("p",null,"Although shared components have the most constraints, many components already obey these rules and can be used across the server and client without modification. For example, many components transform some props based on certain conditions, without using state or loading additional data. This is why shared components are the default and ",(0,o.yg)("a",{parentName:"p",href:"#component-types"},"don\u2019t have a dedicated file extension"),"."),(0,o.yg)("h3",{id:"client-components-and-server-side-rendering"},"Client components and server-side rendering"),(0,o.yg)("p",null,"Client components ending in ",(0,o.yg)("inlineCode",{parentName:"p"},".client.jsx"),' are rendered in the browser. However, they are also rendered on the server during server-side rendering (SSR). This is because SSR produces an HTML "preview" of what will eventually be rendered in the browser.'),(0,o.yg)("p",null,'This behavior might be confusing, because the word "client" indicates a client-only behavior. Shopify is working with the React team to ',(0,o.yg)("a",{parentName:"p",href:"https://github.com/reactjs/rfcs/pull/189#issuecomment-1116482278"},"refine these naming conventions")," to make it less confusing."),(0,o.yg)("p",null,"In the meantime, avoid including browser-only logic in client components in a way that will cause problems during SSR:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"// Button.client.jsx\n\n// \u274c Don't do this because `window` isn't available during SSR\nfunction Button() {\n  const innerWidth = window.innerWidth;\n\n  return <button>...</button>\n}\n\n// \u2705 Do this because `useEffect` doesn't run during SSR\nfunction Button() {\n  const [innerWidth, setInnerWidth] = useState();\n\n  useEffect(() => {\n    setInnerWidth(window.innerWidth);\n  }, []);\n\n  return <button>...</button>\n}\n")),(0,o.yg)("h3",{id:"component-organization-and-index-files"},"Component organization and index files"),(0,o.yg)("p",null,'You might be familiar with a "facade file" pattern, where similar files are re-exported from a shared ',(0,o.yg)("inlineCode",{parentName:"p"},"index.js")," file in a folder. This pattern isn't supported in React Server Components when mixing client components with server components."),(0,o.yg)("p",null,"If you want to use the facade pattern, then you need to create separate files for client components and server components:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"// components/index.js\n\n// \u274c Don't do this because it mixes client components and server components:\n\nexport {Button} from './Button.client.jsx'\nexport {Dropdown} from './Dropdown.client.jsx'\nexport {Widget} from './Widget.server.jsx'\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"// components/index.js\n\n// \u2705 Do this because only client components are exported\n\nexport {Button} from './Button.client.jsx'\nexport {Dropdown} from './Dropdown.client.jsx'\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"// components/server.js\n\n// \u2705 Do this because only server components are exported\n\nexport {Widget} from './Widget.server.jsx'\n")),(0,o.yg)("h2",{id:"next-steps"},"Next steps"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Learn how to ",(0,o.yg)("a",{parentName:"li",href:"/tutorials/react-server-components/work-with-rsc/"},"work with React Server Components"),"."),(0,o.yg)("li",{parentName:"ul"},"Improve your app's loading performance with ",(0,o.yg)("a",{parentName:"li",href:"/tutorials/streaming-ssr/"},"streaming SSR and Suspense"),".")))}m.isMDXComponent=!0}}]);