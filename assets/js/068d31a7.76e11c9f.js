"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3573],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5562:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return v},default:function(){return O},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return g}});var r=n(7462),a=n(3366),o=n(7294),l=n(3905),u=n(2389),i=n(5450),c=n(6010),s="tabItem_LplD";function p(e){var t,n,a,l=e.lazy,u=e.block,p=e.defaultValue,d=e.values,f=e.groupId,b=e.className,m=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=m[0])?void 0:a.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),T=g.tabGroupChoices,O=g.setTabGroupChoices,k=(0,o.useState)(h),w=k[0],E=k[1],P=[],A=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=T[f];null!=x&&x!==w&&v.some((function(e){return e.value===x}))&&E(x)}var I=function(e){var t=e.currentTarget,n=P.indexOf(t),r=v[n].value;r!==w&&(A(t),E(r),null!=f&&O(f,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.currentTarget)+1;n=P[r]||P[0];break;case"ArrowLeft":var a=P.indexOf(e.currentTarget)-1;n=P[a]||P[P.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},b)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return P.push(e)},onKeyDown:j,onFocus:I,onClick:I},a,{className:(0,c.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,u.Z)();return o.createElement(p,(0,r.Z)({key:String(t)},e))}function f(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}var b=["components"],m={sidebar_position:1},v=void 0,y={unversionedId:"Bitlayer Scan APIs/Accounts",id:"Bitlayer Scan APIs/Accounts",title:"Accounts",description:"Get BTC Balance for a single address",source:"@site/docs/Bitlayer Scan APIs/Accounts.mdx",sourceDirName:"Bitlayer Scan APIs",slug:"/Bitlayer Scan APIs/Accounts",permalink:"/EXAPI/docs/Bitlayer Scan APIs/Accounts",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Bitlayer Scan APIs",permalink:"/EXAPI/docs/category/bitlayer-scan-apis"},next:{title:"Join Us",permalink:"/EXAPI/docs/category/join-us"}},h={},g=[{value:"Get BTC Balance for a single address",id:"get-btc-balance-for-a-single-address",level:2}],T={toc:g};function O(e){var t=e.components,n=(0,a.Z)(e,b);return(0,l.kt)("wrapper",(0,r.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"account-apis"},"Account APIs"),(0,l.kt)("h2",{id:"get-btc-balance-for-a-single-address"},"Get BTC Balance for a single address"),(0,l.kt)("p",null,"Returns the BTC balance of a given address."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://api-testnet.bitlayer.org/scan/api?module=account&action=balance&address=0x6630fcee2a4822f2df842a61d69dc4061bcaa534&tag=latest\n")),(0,l.kt)(d,{mdxType:"Tabs"},(0,l.kt)(f,{value:"apple",label:"Apple",default:!0,mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,l.kt)(f,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,l.kt)(f,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))}O.isMDXComponent=!0}}]);