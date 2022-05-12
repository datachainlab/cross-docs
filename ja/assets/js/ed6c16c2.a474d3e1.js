"use strict";(self.webpackChunkcross_docs=self.webpackChunkcross_docs||[]).push([[379],{3905:function(t,n,e){e.d(n,{Zo:function(){return p},kt:function(){return k}});var a=e(7294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,a,i=function(t,n){if(null==t)return{};var e,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var l=a.createContext({}),s=function(t){var n=a.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},p=function(t){var n=s(t.components);return a.createElement(l.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=s(e),k=i,d=m["".concat(l,".").concat(k)]||m[k]||u[k]||r;return e?a.createElement(d,o(o({ref:n},p),{},{components:e})):a.createElement(d,o({ref:n},p))}));function k(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var r=e.length,o=new Array(r);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=t,c.mdxType="string"==typeof t?t:i,o[1]=c;for(var s=2;s<r;s++)o[s]=e[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},9582:function(t,n,e){e.r(n),e.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var a=e(3117),i=e(102),r=(e(7294),e(3905)),o=["components"],c={sidebar_position:3,id:"cross-chain-transaction"},l="Cross-chain Transaction",s={unversionedId:"docs/architecture/cross-chain-transaction",id:"docs/architecture/cross-chain-transaction",title:"Cross-chain Transaction",description:"Cross-chain Transaction\u306f\u3001IBC channel\u3067\u63a5\u7d9a\u3055\u308c\u305fChain\u9593\u3067\u5b9f\u884c\u3055\u308c\u308b\u5206\u6563Transaction\u3067\u3042\u308b\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/01-docs/03-architecture/03-cross-chain-transaction.md",sourceDirName:"01-docs/03-architecture",slug:"/docs/architecture/cross-chain-transaction",permalink:"/cross-docs/ja/docs/architecture/cross-chain-transaction",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"cross-chain-transaction"},sidebar:"tutorialSidebar",previous:{title:"Smart Contract",permalink:"/cross-docs/ja/docs/architecture/smart-contract"},next:{title:"Atomic commit protocol",permalink:"/cross-docs/ja/docs/architecture/atomic-commit-protocol"}},p={},u=[{value:"Account",id:"account",level:2},{value:"Initiate Transaction",id:"initiate-transaction",level:2},{value:"Link",id:"link",level:2},{value:"Authentication",id:"authentication",level:2},{value:"SignTx",id:"signtx",level:3},{value:"IBCSignTx",id:"ibcsigntx",level:3},{value:"ExtSignTx",id:"extsigntx",level:3},{value:"Transaction Execution",id:"transaction-execution",level:2}],m={toc:u};function k(t){var n=t.components,e=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cross-chain-transaction"},"Cross-chain Transaction"),(0,r.kt)("p",null,"Cross-chain Transaction\u306f\u3001IBC channel\u3067\u63a5\u7d9a\u3055\u308c\u305fChain\u9593\u3067\u5b9f\u884c\u3055\u308c\u308b\u5206\u6563Transaction\u3067\u3042\u308b\u3002"),(0,r.kt)("p",null,"Cross Framework\u3067\u306f\u3001\u8907\u6570\u306eAtomic commit protocol\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u307e\u305f\u5404Chain\u306e\u72b6\u614b\u306e\u30b3\u30df\u30c3\u30c8\u3001\u5dfb\u304d\u623b\u3057\u6a5f\u80fd\u304a\u3088\u3073\u4e26\u884c\u5236\u5fa1\u306e\u305f\u3081\u306eLock mechanism\u3092\u63d0\u4f9b\u3059\u308bState store\u3092\u63d0\u4f9b\u3057\u3066\u3044\u308b\u3002"),(0,r.kt)("p",null,"Transaction\u306f\u30e6\u30fc\u30b6\u304b\u3089\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u305fChain\u304c\u305d\u306e\u5185\u5bb9\u3092\u691c\u8a3c\u3057\u3001\u6307\u5b9a\u3055\u308c\u305fChain\u306b\u5bfe\u3057\u3066Contract\u547c\u3073\u51fa\u3057\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u542b\u3080Packet\u3092\u9001\u4fe1\u3059\u308b\u3053\u3068\u3067\u958b\u59cb\u3055\u308c\u308b\u3002\u30e6\u30fc\u30b6\u306eTransaction\u958b\u59cb\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u308bChain\u3092Initiator chain\u3068\u547c\u3076\u3002Initiator chain\u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u308b\u3068\u3001\u5404Account\u306b\u3088\u308b\u627f\u8a8d\u3092\u51e6\u7406\u3057\u3001\u305d\u306e\u5f8cAtomic commit\u306e\u30d5\u30ed\u30fc\u3092\u6307\u5b9a\u3055\u308c\u305f\u5f62\u5f0f\u306b\u5f93\u3044\u5b9f\u884c\u3059\u308b\u3002"),(0,r.kt)("p",null,"\u4f8b\u3048\u3070\u3001Atomic commit\u3068\u3057\u3066Two phase commit\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u3001Initiator chain\u304cCoordinator\u306e\u5f79\u5272\u3092\u62c5\u3046\u3002\u6700\u521d\u306bCoordinator\u306f\u5404Participant chain\u306bContract\u95a2\u6570\u306e\u5b9f\u884c\u3092\u8981\u6c42\u3059\u308b\u3002\u6b21\u306b\u3001Coordinator\u306f\u3001\u5404Participant chain\u306e\u95a2\u6570\u306e\u547c\u3073\u51fa\u3057\u7d50\u679c\u3092\u53d6\u5f97\u3057\u3001\u6700\u7d42\u7684\u306aCommit\u306e\u53ef\u5426\u3092\u6c7a\u5b9a\u3059\u308b\u3002\u6700\u7d42\u7684\u306b\u305d\u306e\u6c7a\u5b9a\u3092\u53d7\u3051\u53d6\u3063\u305f\u5404Participant chains\u306fCommit\u3082\u3057\u304f\u306fAbort\u3092\u884c\u3046\u3002"),(0,r.kt)("h2",{id:"account"},"Account"),(0,r.kt)("p",null,"\u30a2\u30ab\u30a6\u30f3\u30c8\u3068\u306f\u3001\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306b\u5bfe\u3057\u3066\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u9001\u4fe1\u3067\u304d\u308b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3067\u3042\u308b\u3002\u901a\u5e38\u3001\u305d\u308c\u3089\u306f\u3042\u308b\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u5185\u3067\u4e00\u610f\u306b\u8b58\u5225\u3055\u308c\u308b\u3053\u3068\u304c\u6c42\u3081\u3089\u308c\u308b\u3002\u307e\u305f\u3001\u4e00\u822c\u7684\u306b\u3042\u308b\u30c1\u30a7\u30fc\u30f3\u3067\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u5225\u30c1\u30a7\u30fc\u30f3\u4e0a\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3068\u306e\u76f8\u4e92\u904b\u7528\u6027\u304c\u306a\u3044\u3002\u3053\u308c\u306f\u3001\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u3054\u3068\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u6982\u5ff5\u3084\u8868\u73fe\u65b9\u5f0f\u304c\u7570\u306a\u308b\u305f\u3081\u3067\u3042\u308b\u3002"),(0,r.kt)("p",null,"Cross-chain\u4e0a\u306e\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u8a8d\u8a3c\u306b\u304a\u3044\u3066\u3001\u4efb\u610f\u306e\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u4e0a\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u591a\u69d8\u306a\u8a8d\u8a3c\u65b9\u5f0f\u3092\u30b5\u30dd\u30fc\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u3002Cross Framework\u3067\u306f\u3001Account\u306f\u5404\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u4e0a\u3067\u306e\u30e6\u30fc\u30b6\u306e\u8b58\u5225\u5b50\u3092\u793a\u3059",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"AuthType"),"\u3068\u547c\u3070\u308c\u308b\u8a8d\u8a3c\u60c5\u5831\u304b\u3089\u69cb\u6210\u3055\u308c\u308b\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u7570\u306a\u308b\u30c1\u30a7\u30fc\u30f3\u4e0a\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u8b58\u5225\u53ef\u80fd\u306b\u3057\u3066\u3044\u308b\u3002\n\u306a\u304a\u3001Cross Framework\u304c\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u5404\u8a8d\u8a3c\u65b9\u5f0f\u306b\u3064\u3044\u3066\u306f",(0,r.kt)("a",{parentName:"p",href:"#authentication"},"\u3053\u3061\u3089"),"\u3092\u53c2\u7167\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message Account {\n  bytes id = 1;\n  AuthType auth_type = 2;\n}\n\nmessage AuthType {\n  AuthMode mode = 1;\n  google.protobuf.Any option = 2;\n}\n\nenum AuthMode {\n  AUTH_MODE_UNSPECIFIED = 0;\n  AUTH_MODE_LOCAL       = 1;\n  AUTH_MODE_CHANNEL     = 2;\n  AUTH_MODE_EXTENSION   = 3;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AuthMode"),"\u3068\u306f\u3001\u8a8d\u8a3c\u65b9\u5f0f\u3092\u6307\u3059\u8b58\u5225\u5b50\u3067\u3042\u308a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"option"),"\u3068\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"AuthMode"),"\u3054\u3068\u306b\u5b9a\u7fa9\u3055\u308c\u308b\u8a8d\u8a3c\u60c5\u5831\u3067\u3042\u308b\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"AUTH_MODE_CHANNEL"),"\u306e\u5834\u5408\u306fChannel\u306e\u60c5\u5831\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"AUTH_MODE_EXTENSION"),"\u306e\u5834\u5408\u306fExtension\u306eprotobuf.Any\u306e\u5b9a\u7fa9\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"option"),"\u306b\u542b\u307e\u308c\u308b\u3002Transaction\u306e\u8a8d\u8a3c\u306e\u8a73\u7d30\u306f",(0,r.kt)("a",{parentName:"p",href:"#authentication"},"Authentication"),"\u3067\u8ff0\u3079\u308b\u3002"),(0,r.kt)("h2",{id:"initiate-transaction"},"Initiate Transaction"),(0,r.kt)("p",null,"Transaction\u3092\u958b\u59cb\u3059\u308b\u305f\u3081\u306b\u3001\u30e6\u30fc\u30b6\u306f\u4ee5\u4e0b\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"MsgInitiateTx"),"\u3068\u3057\u3066\u5b9a\u7fa9\u3055\u308c\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3001Chain\u306b\u63d0\u51fa\u3059\u308b\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"MsgInitiateTx"),"\u304c\u63d0\u51fa\u3055\u308c\u305fChain\u3092Initiator chain\u3068\u547c\u3076\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgInitiateTx {\n  string chain_id = 1;\n  uint64 nonce    = 2;\n  cross.core.tx.CommitProtocol commit_protocol = 3;\n  repeated cross.core.initiator.ContractTransaction contract_transactions = 4;\n  repeated cross.core.auth.Account signers = 5;\n  ibc.core.client.v1.Height timeout_height = 6;\n  uint64 timeout_timestamp = 7;\n}\n\nmessage ContractTransaction {\n  google.protobuf.Any cross_chain_channel = 1;\n  repeated cross.core.auth.Account signers = 2;\n  bytes call_info = 3;\n  cross.core.tx.ReturnValue return_value = 4;\n  repeated Link links = 5;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MsgInitiateTx"),"\u306f\u3001\u4e3b\u306b\u6b21\u306e\u8981\u7d20\u304b\u3089\u69cb\u6210\u3055\u308c\u308b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contract_transactions"),": \u5404Chain\u4e0a\u306e",(0,r.kt)("a",{parentName:"li",href:"/cross-docs/ja/docs/architecture/overview#contract-module"},"Contract Module"),"\u3092\u5b9f\u884c\u3059\u308bContract Transaction\u306e\u914d\u5217\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"commit_protocol"),": \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u30b3\u30df\u30c3\u30c8\u30d7\u30ed\u30c8\u30b3\u30eb"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout_height"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"timeout_timestamp"),": \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3092\u6307\u5b9a\u3002\u3053\u308c\u3092\u904e\u304e\u305f\u5834\u5408\u3001\u5b9f\u884c\u3055\u308c\u306a\u3044\u3002")),(0,r.kt)("p",null,"\u307e\u305f\u3001Contract Transaction\u306f\u3001\u6b21\u306e\u8981\u7d20\u304b\u3089\u69cb\u6210\u3055\u308c\u308b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cross_chain_channel"),": Initiator Chain\u3068\u5b9f\u884c\u5bfe\u8c61\u306e\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u304c\u5b58\u5728\u3059\u308bChain\u3068\u306eIBC Channel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signers"),": \u8a8d\u8a3c\u304c\u5fc5\u8981\u306a",(0,r.kt)("inlineCode",{parentName:"li"},"Account"),"\u306e\u914d\u5217"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"callInfo"),": Contract\u306e\u8b58\u5225\u5b50\u3001\u95a2\u6570\u540d\u3001\u5f15\u6570\u306a\u3069\u3092\u542b\u3080\u547c\u3073\u51fa\u3057\u60c5\u5831\u3002\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f",(0,r.kt)("a",{parentName:"li",href:"/cross-docs/ja/docs/architecture/overview#contract-module"},"Contract Module"),"\u306e\u4ed5\u69d8\u3067\u5b9a\u3081\u3089\u308c\u308b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"return_value"),": \u3053\u306eContract\u306e\u5b9f\u884c\u306b\u3088\u308a\u671f\u5f85\u3055\u308c\u308b\u623b\u308a\u5024(\u30aa\u30d7\u30b7\u30e7\u30f3)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"links"),": \u3053\u306eContract\u306e\u5b9f\u884c\u6642\u306b\u53c2\u7167\u3055\u308c\u308b\u4ed6\u306eContract\u547c\u3073\u51fa\u3057\u7d50\u679c(\u30aa\u30d7\u30b7\u30e7\u30f3)\u3002\u8a73\u7d30\u306f",(0,r.kt)("a",{parentName:"li",href:"#link"},"Link"),"\u306e\u9805\u3092\u53c2\u7167")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MsgInitiateTx"),"\u304c\u63d0\u51fa\u3055\u308c\u308b\u3068\u3001",(0,r.kt)("a",{parentName:"p",href:"/cross-docs/ja/docs/architecture/overview#tx-initiator"},"Tx Initiator"),"\u306b\u3088\u308a\u51e6\u7406\u3055\u308c\u308b\u3002Tx Initiator\u306f\u3001\u6b21\u306b\u4ee5\u4e0b\u306e\u51e6\u7406\u3092\u884c\u3046:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MsgInitiateTx"),"\u304b\u3089TxID\u3092\u751f\u6210\u3057\u3001\u672a\u63d0\u51fa\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u305f\u3046\u3048\u3067\u3001TxID\u3068",(0,r.kt)("inlineCode",{parentName:"li"},"MsgInitiateTx"),"\u3092\u4fdd\u5b58\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"commit_protocol"),"\u3092Initiator Chain\u304c\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u304b\u3092\u78ba\u8a8d\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout_height"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"timeout_timestamp"),"\u304c\u904e\u304e\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b")),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u51e6\u7406\u306e\u5f8c\u3001",(0,r.kt)("a",{parentName:"p",href:"#link"},"Link\u51e6\u7406"),"\u3092\u884c\u3046\u3002"),(0,r.kt)("h2",{id:"link"},"Link"),(0,r.kt)("p",null,"Link\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/cross-docs/ja/docs/architecture/smart-contract#cross-chain-calls"},"Cross-chain calls"),"\u3092\u884c\u3046Contract Transaction\u9593\u306e\u95a2\u9023\u4ed8\u3051\u3092\u884c\u3046\u6a5f\u80fd\u3067\u3042\u308b\u3002Initiator Chain\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"MsgInitiateTx"),"\u306e\u63d0\u51fa\u6642\u306bLinker\u3092\u7528\u3044\u3066\u5404Link\u3092\u5bfe\u5fdc\u3059\u308b\u547c\u3073\u51fa\u3057\u7d50\u679c\u3078\u89e3\u6c7a\u3059\u308b\u3002"),(0,r.kt)("p",null,"Cross-chain\u306eContract\u95a2\u6570\u547c\u3073\u51fa\u3057\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u70b9\u3092\u8003\u616e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5404Contract\u95a2\u6570\u306f\u305d\u308c\u305e\u308c\u306eChain\u4e0a\u3067\u4e26\u884c\u3057\u3066\u5b9f\u884c\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308b"),(0,r.kt)("li",{parentName:"ol"},"\u5916\u90e8\u306eContract\u95a2\u6570\u306e\u5b9f\u884c\u306f\u305d\u306e\u547c\u3073\u51fa\u3057\u5143\u306e\u95a2\u6570\u306e\u5b9f\u884c\u3068Atomic\u306b\u884c\u308f\u308c\u308b\u5fc5\u8981\u304c\u3042\u308b"),(0,r.kt)("li",{parentName:"ol"},"\u5916\u90e8\u306eContract\u95a2\u6570\u306e\u5b9f\u884c\u306b\u3088\u308b\u8fd4\u308a\u5024\u3092\u547c\u3073\u51fa\u3057\u5143\u95a2\u6570\u3067\u53c2\u7167\u3067\u304d\u308b")),(0,r.kt)("p",null,"1.\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/cross-docs/ja/docs/architecture/state-store"},"State store"),"\u306eLocking mechanism\u3067\u76f4\u5217\u5316\u53ef\u80fd\u6027\u304c\u4fdd\u8a3c\u3055\u308c\u30012.\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/cross-docs/ja/docs/architecture/atomic-commit-protocol"},"Atomic commit protocol"),"\u306b\u3088\u308a\u4fdd\u8a3c\u3055\u308c\u308b\u3002Link\u306f\u30013\u306e\u8981\u7d20\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306e\u6a5f\u80fd\u3067\u3042\u308a\u3001Transaction\u63d0\u51fa\u8005\u306fCross-chain call\u3092\u884c\u3046",(0,r.kt)("inlineCode",{parentName:"p"},"ContractTransaction"),"\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"links"),"\u3068\u3057\u3066\u53c2\u7167\u5148\u306eChain\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u95a2\u9023\u4ed8\u3051\u308b\u3053\u3068\u304c\u53ef\u80fd\u3068\u306a\u308b\u3002\u306a\u304a\u3001Link\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"contract_transactions"),"\u5185\u306e\u53c2\u7167\u5148\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"ContractTransaction"),"\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3068\u3057\u3066\u8868\u3055\u308c\u308b\u3002"),(0,r.kt)("p",null,"Link\u304c\u6307\u3059Contract Transaction(calleeTx)\u3068\u3001Link\u3092\u53c2\u7167\u3059\u308bContract Transaction(callerTx)\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u51e6\u7406\u3055\u308c\u308b:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Linker\u306f\u3001calleeTx\u306e",(0,r.kt)("inlineCode",{parentName:"li"},"call_info"),"\u3068",(0,r.kt)("inlineCode",{parentName:"li"},"signers"),"\u304b\u3089\u69cb\u6210\u3055\u308c\u308b\u3082\u306e\u3092\u30ad\u30fc\u3068\u3057\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"return_value"),"\u3092\u5024\u3068\u3059\u308b",(0,r.kt)("inlineCode",{parentName:"li"},"CallResult"),"\u3092\u751f\u6210\u3059\u308b"),(0,r.kt)("li",{parentName:"ol"},"Linker\u306f\u3001calleeTx\u306e",(0,r.kt)("inlineCode",{parentName:"li"},"cross_chain_channel"),"\u3092caller\u304c\u5229\u7528\u53ef\u80fd\u306aIBC Channel\u306b\u89e3\u6c7a\u3057\u3001\u305d\u308c\u3092",(0,r.kt)("inlineCode",{parentName:"li"},"CallResult"),"\u306b\u30bb\u30c3\u30c8\u3059\u308b"),(0,r.kt)("li",{parentName:"ol"},"TxInitiator\u306f\u3001callerTx\u306e",(0,r.kt)("inlineCode",{parentName:"li"},"ContractTransaction"),"\u3068",(0,r.kt)("inlineCode",{parentName:"li"},"CallResult"),"\u304b\u3089",(0,r.kt)("inlineCode",{parentName:"li"},"ResolvedContractTransaction"),"\u3092\u751f\u6210\u3059\u308b\u3002",(0,r.kt)("inlineCode",{parentName:"li"},"ResolvedContractTransaction"),"\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5b9a\u7fa9\u3068\u306a\u308b\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message ResolvedContractTransaction {\n  google.protobuf.Any cross_chain_channel = 1;\n  repeated cross.core.auth.Account signers = 2;\n  bytes call_info = 3;\n  ReturnValue return_value = 4;\n  repeated google.protobuf.Any call_results = 5; // List of CallResult\n}\n")),(0,r.kt)("p",null,"TxInitiator\u306f\u3001Link\u306e\u89e3\u6c7a\u5f8c\u3001Transaction\u306e",(0,r.kt)("a",{parentName:"p",href:"#authentication"},"\u8a8d\u8a3c\u51e6\u7406"),"\u3092\u884c\u3046\u3002"),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Transaction\u306e\u8a8d\u8a3c\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/cross-docs/ja/docs/architecture/overview#authenticator"},"Authenticator"),"\u306b\u3088\u308a\u884c\u308f\u308c\u308b\u3002Authenticator\u306f\u3001Initiator Chain\u3067\u306e\u8a8d\u8a3c\u65b9\u5f0f\u306e\u307b\u304b\u3001IBC Channel\u3067\u63a5\u7d9a\u3055\u308c\u308b\u4ed6\u30c1\u30a7\u30fc\u30f3\u3067\u306e\u8a8d\u8a3c\u65b9\u5f0f\u3092\u63d0\u4f9b\u3059\u308b\u3002"),(0,r.kt)("p",null,"Transaction\u306e\u8a8d\u8a3c\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"contract_transactions"),"\u306e\u5404Contract Transaction\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"signers"),"\u306b\u6307\u5b9a\u3055\u308c\u305fAccount\u306b\u3088\u308a\u884c\u308f\u308c\u308b\u3002\u307e\u305f\u3001\u8a8d\u8a3c\u304c\u5b8c\u4e86\u3059\u308b\u307e\u3067\u5b9f\u884c\u306f\u30d6\u30ed\u30c3\u30af\u3055\u308c\u308b\u3002"),(0,r.kt)("p",null,"\u8a8d\u8a3c\u306f\u5404Account\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"AuthType"),"\u3067\u6307\u5b9a\u3055\u308c\u305f\u65b9\u5f0f\u3092\u6e80\u305f\u3059\u5fc5\u8981\u304c\u3042\u308b\u3002\u5404\u65b9\u5f0f\u3054\u3068\u306b\u5bfe\u5fdc\u3059\u308bMsg\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u304a\u308a\u3001\u5bfe\u8c61\u306eTxID\u3092\u6307\u5b9a\u3057\u3001\u6c7a\u3081\u3089\u308c\u305f\u65b9\u5f0f\u3092\u6e80\u305f\u3059\u3053\u3068\u3067\u627f\u8a8d\u304c\u53ef\u80fd\u3067\u3042\u308b\u3002"),(0,r.kt)("p",null,"\u73fe\u5728\u3001\u8a8d\u8a3c\u65b9\u5f0f\u3068\u3057\u3066\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"SignTx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"IBCSignTx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ExtSignTx"),"\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u3002\u5404\u65b9\u5f0f\u3068\u305d\u308c\u3089\u306b\u5bfe\u5fdc\u3059\u308bMsg\u306e\u5b9a\u7fa9\u3092\u4ee5\u4e0b\u3067\u8ff0\u3079\u308b\u3002"),(0,r.kt)("h3",{id:"signtx"},"SignTx"),(0,r.kt)("p",null,"SignTx\u306f\u3001Transaction\u304c\u63d0\u51fa\u3055\u308c\u305f\u30c1\u30a7\u30fc\u30f3\u306e\u8a8d\u8a3c\u65b9\u5f0f\u306b\u3057\u305f\u304c\u3063\u3066\u8a8d\u8a3c\u3092\u884c\u3046\u65b9\u5f0f\u3067\u3042\u308b\u3002\u3053\u308c\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"AuthMode"),"\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"AUTH_MODE_LOCAL"),"\u3067\u6307\u5b9a\u3055\u308c\u305fAccount\u306e\u8a8d\u8a3c\u304c\u53ef\u80fd\u3067\u3042\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message MsgSignTx {\n  bytes txID = 1;\n  repeated bytes signers = 2; // List of Account IDs\n}\n")),(0,r.kt)("h3",{id:"ibcsigntx"},"IBCSignTx"),(0,r.kt)("p",null,"IBCSignTx\u306f\u3001Transaction\u304c\u63d0\u51fa\u3055\u308c\u305f\u30c1\u30a7\u30fc\u30f3\u3068IBC Channel\u3067\u63a5\u7d9a\u3055\u308c\u305f\u30c1\u30a7\u30fc\u30f3\u306e\u8a8d\u8a3c\u65b9\u5f0f\u306b\u3057\u305f\u304c\u3063\u3066\u8a8d\u8a3c\u3092\u884c\u3046\u65b9\u5f0f\u3067\u3042\u308b\u3002\u3053\u308c\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"AuthMode"),"\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"AUTH_MODE_CHANNEL"),"\u3067\u6307\u5b9a\u3055\u308c\u305fAccount\u306e\u8a8d\u8a3c\u304c\u53ef\u80fd\u3067\u3042\u308b\u3002\u306a\u304a\u3001\u305d\u306eAccount\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"option"),"\u3068\u3057\u3066\u8a8d\u8a3c\u3092\u8a31\u53ef\u3059\u308bIBC Channel\u306e\u60c5\u5831\u3092\u4fdd\u6301\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message MsgIBCSignTx {\n  google.protobuf.Any cross_chain_channel = 1;\n  bytes txID = 2;\n  repeated bytes signers = 3; // List of Account IDs\n  ibc.core.client.v1.Height timeout_height = 4;\n  uint64 timeout_timestamp = 5;\n}\n")),(0,r.kt)("h3",{id:"extsigntx"},"ExtSignTx"),(0,r.kt)("p",null,"ExtSignTx\u306f\u3001\u958b\u767a\u8005\u5b9a\u7fa9\u306e\u8a8d\u8a3c\u5f0f\u306b\u3057\u305f\u304c\u3063\u3066\u8a8d\u8a3c\u3092\u884c\u3046\u65b9\u5f0f\u3067\u3042\u308b\u3002\u3053\u308c\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"AuthMode"),"\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"AUTH_MODE_EXTENSION"),"\u3067\u6307\u5b9a\u3055\u308c\u305fAccount\u306e\u8a8d\u8a3c\u304c\u53ef\u80fd\u3067\u3042\u308b\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u306b\u5bfe\u5fdc\u3059\u308bAccount\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"option"),"\u3068\u3057\u3066AuthExtensionVerifier\u3092\u5b9f\u88c5\u3059\u308bproto.Message\u3092\u4fdd\u6301\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message MsgExtSignTx {\n  bytes txID = 1;\n  repeated Account signers = 2;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type AuthExtensionVerifier interface {\n    proto.Message\n    Verify(ctx sdk.Context, signer Account, signature signing.SignatureV2, tx sdk.Tx) error\n}\n")),(0,r.kt)("p",null,"\u3053\u306e\u3088\u3046\u306a\u62e1\u5f35\u8a8d\u8a3c\u306e\u5b9f\u88c5\u4f8b\u306f",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/cross/blob/v0.2.0/simapp/samplemod/types/auth.go"},"\u3053\u3053"),"\u3092\u53c2\u7167\u3002"),(0,r.kt)("h2",{id:"transaction-execution"},"Transaction Execution"),(0,r.kt)("p",null,"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u5168\u3066\u306e\u8a8d\u8a3c\u304c\u5b8c\u4e86\u3057\u305f\u5f8c\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Tx Runner"),"\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"commit_protocol"),"\u306b\u5f93\u3044Atomic\u306aCommit\u3092\u884c\u3046\u30d5\u30ed\u30fc\u3092\u958b\u59cb\u3059\u308b\u3002\u30d5\u30ed\u30fc\u306e\u5404\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001\u5404Chain\u3068\u5bfe\u5fdc\u3059\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"ResolvedContractTransaction"),"\u3092\u542b\u3081\u305fPacket\u3092\u9001\u4fe1\u3059\u308b\u3002Commit\u306e\u30d5\u30ed\u30fc\u306e\u7a2e\u985e\u3068\u305d\u308c\u305e\u308c\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/cross-docs/ja/docs/architecture/atomic-commit-protocol"},"Atomic commit protocol\u306e\u7ae0"),"\u3067\u8aac\u660e\u3059\u308b\u3002"),(0,r.kt)("p",null,"\u5404Chain\u4e0a\u3067\u6b21\u306e\u3088\u3046\u306bContract\u306f\u51e6\u7406\u3055\u308c\u308b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ResolvedContractTransaction"),"\u3092\u51e6\u7406\u3057\u3001",(0,r.kt)("a",{parentName:"li",href:"/cross-docs/ja/docs/architecture/overview#contract-module"},"Contract Module"),"\u3067\u5b9a\u7fa9\u3055\u308c\u308bContract\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059"),(0,r.kt)("li",{parentName:"ul"},"Contract\u304cCross-chain calls\u3092\u542b\u3080\u5834\u5408\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"Call"),"\u306e\u5f15\u6570",(0,r.kt)("inlineCode",{parentName:"li"},"ChannelInfo"),"\u3068",(0,r.kt)("inlineCode",{parentName:"li"},"ContractCallInfo"),"\u304c\u5bfe\u5fdc\u3059\u308b",(0,r.kt)("inlineCode",{parentName:"li"},"ResolvedContractTransaction"),"\u306e",(0,r.kt)("inlineCode",{parentName:"li"},"CallResult"),"\u306e\u5024\u3068\u4e00\u81f4\u3059\u308b\u3053\u3068\u3092\u691c\u8a3c\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"Contract\u306e\u5b9f\u884c\u5f8c\u3001\u30b3\u30df\u30c3\u30c8\u30d5\u30ed\u30fc\u306b\u5fdc\u3058\u3066",(0,r.kt)("a",{parentName:"li",href:"/cross-docs/ja/docs/architecture/overview#contract-manager"},"Contract Manager"),"\u306ePrecommit\u3082\u3057\u304f\u306fCommitImmediately\u3092\u547c\u3073\u51fa\u3057\u72b6\u614b\u3092\u4fdd\u5b58\u3059\u308b")),(0,r.kt)("p",null,"Commit\u30d5\u30ed\u30fc\u306e\u7a2e\u985e\u306b\u304b\u304b\u308f\u3089\u305a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"MsgInitiateTx"),"\u306b\u542b\u307e\u308c\u308b\u5168\u3066\u306eContract Transaction\u306e\u5b9f\u884c\u304c\u6210\u529f\u3057\u305f\u5834\u5408\u306e\u307f\u66f4\u65b0\u306f\u30b3\u30df\u30c3\u30c8\u3055\u308c\u3001\u3044\u305a\u308c\u304b\u304c\u5931\u6557\u3057\u305f\u5834\u5408\u306f\u5168\u3066\u306eContract Transaction\u306f\u4e2d\u6b62\u3055\u308c\u308b\u3053\u3068\u304c\u4fdd\u8a3c\u3055\u308c\u3066\u3044\u308b\u3002"))}k.isMDXComponent=!0}}]);