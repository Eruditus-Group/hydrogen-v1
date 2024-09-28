"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[747],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,y=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(8168),o=(n(6540),n(5680));const a={},s="Integrate content in Hydrogen",i={unversionedId:"tutorials/content",id:"tutorials/content",title:"Integrate content in Hydrogen",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate as soon as possible.",source:"@site/docs/tutorials/content.md",sourceDirName:"tutorials",slug:"/tutorials/content",permalink:"/hydrogen-v1/tutorials/content",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Change the configuration file location",permalink:"/hydrogen-v1/tutorials/configuration/change-config-file-location"},next:{title:"Built-in CSS support",permalink:"/hydrogen-v1/tutorials/css-support/"}},l={},p=[{value:"Build a content model",id:"build-a-content-model",level:2},{value:"Build a content layout",id:"build-a-content-layout",level:2},{value:"Retrieve content",id:"retrieve-content",level:2},{value:"Basic example",id:"basic-example",level:3},{value:"Advanced example",id:"advanced-example",level:3},{value:"Next steps",id:"next-steps",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"integrate-content-in-hydrogen"},"Integrate content in Hydrogen"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,o.yg)("a",{parentName:"p",href:"/migrate"},"migrate")," as soon as possible.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Beta:\nThe Content platform is in beta and is only available to ",(0,o.yg)("a",{parentName:"p",href:"https://www.shopify.com/plus"},"Shopify Plus")," and ",(0,o.yg)("a",{parentName:"p",href:"https://www.shopify.com/pricing"},"Advanced")," plans.")),(0,o.yg)("p",null,"Hydrogen includes support for integrating content on storefronts. For example, you might have content about product features, specifications, or size charts. You can integrate content into your Hydrogen storefront using the ",(0,o.yg)("a",{parentName:"p",href:"https://shopify.dev/api/storefront"},"Storefront API"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/hydrogen-content.gif",alt:"Product features content in a custom storefront"})),(0,o.yg)("h2",{id:"build-a-content-model"},"Build a content model"),(0,o.yg)("p",null,"Content models are custom object schemas that you can create and associate with Shopify resources, such as products, collections, and orders. You use content models to create and store structured content in your Hydrogen storefront. You can build a content model in the ",(0,o.yg)("strong",{parentName:"p"},"Content")," section of your Shopify admin."),(0,o.yg)("p",null,"The following example shows a content model that displays product features content:"),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/product-feature-metafields.png",alt:"Product feature metafields"})),(0,o.yg)("p",null,"After you've set up the content model, you can add content:"),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/product-feature-content.png",alt:"Content associated with the product feature metafield"})),(0,o.yg)("p",null,"The following example shows an individual content entry that maps to the content model:"),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/individual-entry-content.png",alt:"Individual content entry"})),(0,o.yg)("h2",{id:"build-a-content-layout"},"Build a content layout"),(0,o.yg)("p",null,"The following code snippet provides an example layout of product features content on the product details page. The content model, ",(0,o.yg)("inlineCode",{parentName:"p"},"features"),", is mapped to the layout of the page:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'// /src/routes/products/[handle].server.jsx\n...\n<Layout>\n  <Seo type="product" data={product} />\n  <ProductDetails product={product} />\n  <section>\n    {features.map(\n      ({id, heading, tagline, description, featured_image}, i) => (\n        <div\n          key={id}\n          className={`flex flex-col ${\n            isOdd(i) ? \'md:flex-row\' : \'md:flex-row-reverse\'\n          } md:justify-center gap-4 p-6 md:gap-8 md:p-12`}\n        >\n          <Image\n            className={`object-cover w-full md:w-1/2 aspect-[4/3]`}\n            width={featured_image.width}\n            height={featured_image.height}\n            src={featured_image.url}\n          />\n\n          <div className="flex flex-col items-start justify-center w-full gap-4 md:w-1/2">\n            <h4 className="text-base font-bold uppercase">{heading}</h4>\n            <h3 className="text-3xl font-bold">{title(tagline)}</h3>\n            <p className="text-base">{description}</p>\n          </div>\n        </div>\n      ),\n    )}\n  </section>\n</Layout>\n...\n')),(0,o.yg)("h2",{id:"retrieve-content"},"Retrieve content"),(0,o.yg)("p",null,"Your Hydrogen storefront can retrieve the data that's stored in a content model using the Storefront API. You can retrieve content by querying the ",(0,o.yg)("inlineCode",{parentName:"p"},"type")," field, which is the definition or type of data that the metafield stores."),(0,o.yg)("p",null,"All connected ",(0,o.yg)("a",{parentName:"p",href:"http://shopify.dev/apps/custom-data/metafields"},"metafields")," have a ",(0,o.yg)("inlineCode",{parentName:"p"},"namespace")," that matches the ",(0,o.yg)("inlineCode",{parentName:"p"},"type")," field."),(0,o.yg)("h3",{id:"basic-example"},"Basic example"),(0,o.yg)("p",null,"The following example shows a Storefront API query that retrieves content by its associated ",(0,o.yg)("inlineCode",{parentName:"p"},"handle"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-graphql"},'# POST /api/unstable/graphql.json\n\nquery {\n content(type: "lookbook", first: 10) {\n   edges {\n     node {\n       handle\n     }\n   }\n }\n}\n')),(0,o.yg)("h3",{id:"advanced-example"},"Advanced example"),(0,o.yg)("p",null,"The following GraphQL query retrieves a ",(0,o.yg)("inlineCode",{parentName:"p"},"references")," array for product content. The query returns ",(0,o.yg)("inlineCode",{parentName:"p"},"nil")," if no object is referenced on the product details page."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-graphql"},'# /src/routes/products/[handle].server.jsx\n\nconst QUERY = gql`\n  query product(\n    $handle: String!\n  ) {\n    product: product(handle: $handle) {\n      product_features: metafield(\n        namespace: "custom"\n        key: "product_feature"\n      ) {\n        references(first: 5) {\n          edges {\n            node {\n              ... on ContentEntry {\n                heading: field(key: "heading") {\n                  value\n                }\n                tagline: field(key: "tagline") {\n                  value\n                }\n                description: field(key: "description") {\n                  value\n                }\n                featured_image: field(key: "featured_image") {\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n`;\n')),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/hydrogen-content.gif",alt:"Product features content in a custom storefront"})),(0,o.yg)("h2",{id:"next-steps"},"Next steps"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Learn about the ",(0,o.yg)("a",{parentName:"li",href:"/tutorials/css-support/"},"CSS support")," built into Hydrogen."),(0,o.yg)("li",{parentName:"ul"},"Learn how to reference and serve ",(0,o.yg)("a",{parentName:"li",href:"/tutorials/static-assets/manage-static-assets/"},"static assets")," in Hydrogen.")))}u.isMDXComponent=!0}}]);