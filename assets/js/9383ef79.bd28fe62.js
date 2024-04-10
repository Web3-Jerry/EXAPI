"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7636],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=c(r),d=o,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9710:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={sidebar_position:2},l="The Graph",c={unversionedId:"Tools/TheGraph",id:"Tools/TheGraph",title:"The Graph",description:"Graph Node is a protocol for building decentralized applications (dApps) quickly on Ethereum and IPFS using GraphQL.",source:"@site/docs/Tools/TheGraph.md",sourceDirName:"Tools",slug:"/Tools/TheGraph",permalink:"/EXAPI/docs/Tools/TheGraph",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Supported Wallets for Bitlayer",permalink:"/EXAPI/docs/Tools/Wallets"},next:{title:"Faucets",permalink:"/EXAPI/docs/Tools/Faucets"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"The Graph Official",id:"the-graph-official",level:3},{value:"Bitlayer Graph Node",id:"bitlayer-graph-node",level:3},{value:"Project Local Graph Node",id:"project-local-graph-node",level:3},{value:"Set up graph-node",id:"set-up-graph-node",level:4},{value:"Migration",id:"migration",level:3}],h={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-graph"},"The Graph"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Graph Node")," is a protocol for building decentralized applications (dApps) quickly on Ethereum and IPFS using GraphQL."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://thegraph.com/"},"Official website")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/graphprotocol/graph-node"},"Github"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"the-graph-official"},"The Graph Official"),(0,a.kt)("p",null,"The Graph official has not support bitlayer, will coming soon."),(0,a.kt)("h3",{id:"bitlayer-graph-node"},"Bitlayer Graph Node"),(0,a.kt)("p",null,"Self hosting graph node service of Bitlayer is avaiable now.\nPlease contact us via business or ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/bitlayer_developers"},"telegram")," if you need this service."),(0,a.kt)("h3",{id:"project-local-graph-node"},"Project Local Graph Node"),(0,a.kt)("p",null,"We recommend following the ",(0,a.kt)("a",{parentName:"p",href:"https://thegraph.com/docs/"},"Official documentation")," for deployment. The next operation is only intended as a simple setup tutorial for reference."),(0,a.kt)("h4",{id:"set-up-graph-node"},"Set up graph-node"),(0,a.kt)("p",null,"For convenience reasons, we use the official ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphprotocol/graph-node/tree/master/docker"},"docker compose")," for node, database, and IPFS deployment.\nNote that the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ethereum")," field in ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," is replaced with ",(0,a.kt)("inlineCode",{parentName:"p"},"Bitlayer"),"'s node connection information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"graph-node:\n    image: graphprotocol/graph-node\n    ports:\n      - '8000:8000'\n      - '8001:8001'\n      - '8020:8020'\n      - '8030:8030'\n      - '8040:8040'\n    depends_on:\n      - ipfs\n      - postgres\n    environment:\n      postgres_host: postgres\n      postgres_user: graph-node\n      postgres_pass: let-me-in\n      postgres_db: graph-node\n      ipfs: 'ipfs:5001'\n      ethereum: 'mainnet:http://127.0.0.1:8545'  #replaced with bitlayer rpc info\n      RUST_LOG: info\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: The node connected to graph-node needs to be in ",(0,a.kt)("inlineCode",{parentName:"p"},"archive")," mode (add flag --syncmode full --gcmode archive when starting the node), we recommend each user to build their own RPC node.")),(0,a.kt)("h3",{id:"migration"},"Migration"),(0,a.kt)("p",null,"You can migrate your subgraph from bitlayer graph node or project local graph node to offical environment when the graph enables bitlayer.\nTo migrate smoothly, please set dataSources.source.startBlock in subgraph.yaml, we suggest using the block in which the contract was created."))}d.isMDXComponent=!0}}]);