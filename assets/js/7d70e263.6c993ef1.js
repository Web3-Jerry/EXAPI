"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3146],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(b,o(o({ref:t},i),{},{components:n})):a.createElement(b,o({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7462),r=n(7294),l=n(2389),o=n(5450),s=n(6010),u="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,i=e.block,d=e.defaultValue,p=e.values,m=e.groupId,b=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),g=h.tabGroupChoices,T=h.setTabGroupChoices,N=(0,r.useState)(v),C=N[0],E=N[1],x=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=g[m];null!=R&&R!==C&&f.some((function(e){return e.value===R}))&&E(R)}var P=function(e){var t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==C&&(O(t),E(a),null!=m&&T(m,a))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},b)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:w,onFocus:P,onClick:P},l,{className:(0,s.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function i(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},9680:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return d},assets:function(){return p},toc:function(){return m},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(9877),s=n(8215),u=["components"],c={sidebar_position:6,title:"Tokens"},i=void 0,d={unversionedId:"Bitlayer Scan APIs/Tokens",id:"Bitlayer Scan APIs/Tokens",title:"Tokens",description:"Get ERC20-Token TotalSupply (aka MaxSupply) by ContractAddress",source:"@site/docs/Bitlayer Scan APIs/Tokens.mdx",sourceDirName:"Bitlayer Scan APIs",slug:"/Bitlayer Scan APIs/Tokens",permalink:"/EXAPI/docs/Bitlayer Scan APIs/Tokens",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Tokens"},sidebar:"docs",previous:{title:"Logs",permalink:"/EXAPI/docs/Bitlayer Scan APIs/Logs"},next:{title:"Join Us",permalink:"/EXAPI/docs/category/join-us"}},p={},m=[{value:"Get ERC20-Token TotalSupply (aka MaxSupply) by ContractAddress",id:"get-erc20-token-totalsupply-aka-maxsupply-by-contractaddress",level:2},{value:"Get ERC20-Token Circulating Supply (Applicable for Bitlayer Cross Chain token Types) by ContractAddress",id:"get-erc20-token-circulating-supply-applicable-for-bitlayer-cross-chain-token-types-by-contractaddress",level:2},{value:"Get ERC20-Token Account Balance for TokenContractAddress",id:"get-erc20-token-account-balance-for-tokencontractaddress",level:2}],b={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"get-erc20-token-totalsupply-aka-maxsupply-by-contractaddress"},"Get ERC20-Token TotalSupply (aka MaxSupply) by ContractAddress"),(0,l.kt)("p",null,"Returns the current amount of an ERC-20 token in circulation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"https://api-testnet.bitlayer.org/scan/api?module=stats&action=tokensupply&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56\n")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},"Query Parameters",(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contractaddress"),(0,l.kt)("td",{parentName:"tr",align:null},"the ",(0,l.kt)("inlineCode",{parentName:"td"},"contract address")," of the ERC-20 token"))))),(0,l.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},"Sample Response (Returned 'isError' values: 0=Ok, 1=Rejected/Cancelled)")),(0,l.kt)("h2",{id:"get-erc20-token-circulating-supply-applicable-for-bitlayer-cross-chain-token-types-by-contractaddress"},"Get ERC20-Token Circulating Supply (Applicable for Bitlayer Cross Chain token Types) by ContractAddress"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"https://api-testnet.bitlayer.org/scan/api?module=stats&action=tokenCsupply&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56\n")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},"Query Parameters",(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contractaddress"),(0,l.kt)("td",{parentName:"tr",align:null},"the ",(0,l.kt)("inlineCode",{parentName:"td"},"contract address")," of the ERC-20 token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"the ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," representing the address to check for token balance"))))),(0,l.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},"Sample Response (Returned 'isError' values: 0=Ok, 1=Rejected/Cancelled)")),(0,l.kt)("h2",{id:"get-erc20-token-account-balance-for-tokencontractaddress"},"Get ERC20-Token Account Balance for TokenContractAddress"),(0,l.kt)("p",null,"Returns the current balance of an ERC-20 token of an address."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"https://api-testnet.bitlayer.org/scan/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0x89e73303049ee32919903c09e8de5629b84f59eb&tag=latest\n")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},"Query Parameters",(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contractaddress"),(0,l.kt)("td",{parentName:"tr",align:null},"the ",(0,l.kt)("inlineCode",{parentName:"td"},"contract address")," of the ERC-20 token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"the ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," representing the address to check for token balance"))))),(0,l.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},"Sample Response (Returned 'isError' values: 0=Ok, 1=Rejected/Cancelled)")))}k.isMDXComponent=!0}}]);