"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3573],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5562:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return v},default:function(){return P},frontMatter:function(){return b},metadata:function(){return y},toc:function(){return h}});var n=r(7462),a=r(3366),o=r(7294),l=r(3905),u=r(2389),i=r(5450),s=r(6010),c="tabItem_LplD";function p(e){var t,r,a,l=e.lazy,u=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(a=b[0])?void 0:a.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),O=h.tabGroupChoices,P=h.setTabGroupChoices,T=(0,o.useState)(g),k=T[0],w=T[1],E=[],A=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=O[f];null!=I&&I!==k&&v.some((function(e){return e.value===I}))&&w(I)}var x=function(e){var t=e.currentTarget,r=E.indexOf(t),n=v[r].value;n!==k&&(A(t),w(n),null!=f&&P(f,n))},j=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;r=E[n]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;r=E[a]||E[E.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},m)},v.map((function(e){var t=e.value,r=e.label,a=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:x,onClick:x},a,{className:(0,s.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":k===t})}),null!=r?r:t)}))),l?(0,o.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function d(e){var t=(0,u.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}function f(e){var t=e.children,r=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}var m=["components"],b={sidebar_position:1,title:"Account APIs"},v=void 0,y={unversionedId:"Bitlayer Scan APIs/Accounts",id:"Bitlayer Scan APIs/Accounts",title:"Account APIs",description:"Get BTC Balance for a single address",source:"@site/docs/Bitlayer Scan APIs/Accounts.mdx",sourceDirName:"Bitlayer Scan APIs",slug:"/Bitlayer Scan APIs/Accounts",permalink:"/EXAPI/docs/Bitlayer Scan APIs/Accounts",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Account APIs"},sidebar:"docs",previous:{title:"Bitlayer Scan APIs",permalink:"/EXAPI/docs/category/bitlayer-scan-apis"},next:{title:"Join Us",permalink:"/EXAPI/docs/category/join-us"}},g={},h=[{value:"Get BTC Balance for a single address",id:"get-btc-balance-for-a-single-address",level:2}],O={toc:h};function P(e){var t=e.components,r=(0,a.Z)(e,m);return(0,l.kt)("wrapper",(0,n.Z)({},O,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"get-btc-balance-for-a-single-address"},"Get BTC Balance for a single address"),(0,l.kt)("p",null,"Returns the BTC balance of a given address."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://api-testnet.bitlayer.org/scan/api?module=account&action=balance&address=0x6630fcee2a4822f2df842a61d69dc4061bcaa534&tag=latest\n")),(0,l.kt)(d,{mdxType:"Tabs"},(0,l.kt)(f,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},"Query Parameters | Parameter                   | Description  | |:------------------------|:----------| | `address`                  | the string representing the address to check for balance       | | `tag`           | the string pre-defined block parameter, either earliest, pending or latest        |"),(0,l.kt)(f,{value:"response",label:"Response",mdxType:"TabItem"},'Sample response ``` "status":"1", "message":"OK", "result":"40891626854930000000000" ```')))}P.isMDXComponent=!0}}]);