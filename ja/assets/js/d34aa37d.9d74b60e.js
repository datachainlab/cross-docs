"use strict";(self.webpackChunkcross_docs=self.webpackChunkcross_docs||[]).push([[598],{5936:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:1,id:"overview"},s="Overivew",l={unversionedId:"architecture/overview",id:"architecture/overview",isDocsHomePage:!1,title:"Overivew",description:"Cross Framework\u306f\u6b21\u306e\u3088\u3046\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u69cb\u6210\u3055\u308c\u308b\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/03-architecture/01-overview.md",sourceDirName:"03-architecture",slug:"/architecture/overview",permalink:"/cross-docs/ja/architecture/overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"overview"},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/cross-docs/ja/getting-started/install"},next:{title:"Smart Contract",permalink:"/cross-docs/ja/architecture/smart-contract"}},u=[{value:"Tx Initiator",id:"tx-initiator",children:[]},{value:"Authenticator",id:"authenticator",children:[]},{value:"Tx Runner",id:"tx-runner",children:[]},{value:"Contract Manager",id:"contract-manager",children:[]},{value:"Contract Module",id:"contract-module",children:[]}],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overivew"},"Overivew"),(0,o.kt)("p",null,"Cross Framework\u306f\u6b21\u306e\u3088\u3046\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u69cb\u6210\u3055\u308c\u308b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1170428/136157600-5f459aa6-a0d3-44df-9d16-31da4d4d1d4e.png",alt:"Fig. Architecture"})),(0,o.kt)("h3",{id:"tx-initiator"},"Tx Initiator"),(0,o.kt)("p",null,"Tx Initiator\u306fClient\u304b\u3089\u63d0\u51fa\u3055\u308c\u305fTransaction(MsgInitiateTx)\u3092\u53d7\u3051\u4ed8\u3051\u308b\u3002\u63d0\u51fa\u5f8c\u3001\u57fa\u672c\u7684\u306a\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u306e\u5f8c\u306b\u3001Cross-chain calls\u306e\u305f\u3081\u306bContract Transaction\u9593\u306e",(0,o.kt)("a",{parentName:"p",href:"./cross-chain-transaction#link"},"Link\u51e6\u7406"),"\u3092\u884c\u3046\u3002"),(0,o.kt)("p",null,"\u6b21\u306b\u3001\u63d0\u51fa\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3054\u3068\u306b\u30e6\u30cb\u30fc\u30af\u306aTxID\u3092\u751f\u6210\u3057\u3001Transaction\u306b\u542b\u307e\u308c\u308bContract Transaction\u306e\u8a8d\u8a3c\u306b\u5fc5\u8981\u306aAccount\u3092\u53d6\u308a\u51fa\u3057\u3001Authenticator\u3092\u547c\u3073\u51fa\u3059\u3002\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u3001Authenticator\u306b\u3088\u308a\u5168\u3066\u306e\u5fc5\u8981\u306a\u8a8d\u8a3c\u304c\u5b8c\u4e86\u3059\u308b\u307e\u3067\u30d6\u30ed\u30c3\u30af\u3055\u308c\u308b\u3002\u5b8c\u4e86\u5f8c\u3001Tx Runner\u306b\u3088\u308a\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u958b\u59cb\u3055\u308c\u308b\u3002"),(0,o.kt)("p",null,"Transaction\u306e\u63d0\u51fa\u306e\u8a73\u7d30\u306f",(0,o.kt)("a",{parentName:"p",href:"./cross-chain-transaction#initiate-transaction"},"Inititate Transaction"),"\u3067\u3082\u8ff0\u3079\u3089\u308c\u308b\u3002"),(0,o.kt)("h3",{id:"authenticator"},"Authenticator"),(0,o.kt)("p",null,"Authenticator\u306f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u8a8d\u8a3c\u51e6\u7406\u306e\u63d0\u4f9b\u3068\u305d\u306e\u72b6\u614b\u306e\u7ba1\u7406\u3092\u884c\u3046\u3002\u8a8d\u8a3c\u65b9\u5f0f\u306f\u3001\u5b9f\u884c\u30c1\u30a7\u30fc\u30f3\u4e0a\u306e\u8a8d\u8a3c\u306e\u4ed6\u3001IBC\u3092\u7528\u3044\u305f\u4ed6\u30c1\u30a7\u30fc\u30f3\u4e0a\u3067\u306e\u65b9\u5f0f\u306a\u3069\u8907\u6570\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u3002"),(0,o.kt)("p",null,"\u5404\u8a8d\u8a3c\u51e6\u7406\u306f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u63d0\u51fa\u30c1\u30a7\u30fc\u30f3\u3067\u540c\u671f\u7684\u306b\u884c\u308f\u308c\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u975e\u540c\u671f\u3067\u306e\u51e6\u7406\u3084\u5225\u30c1\u30a7\u30fc\u30f3\u304b\u3089\u306ePacket\u306b\u3088\u308a\u51e6\u7406\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308b\u3002"),(0,o.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u8a8d\u8a3c\u6642\u306b\u306f\u5bfe\u8c61\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u8b58\u5225\u3059\u308b\u305f\u3081\u306bTxID\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002\u8a8d\u8a3c\u65b9\u5f0f\u306e\u8a73\u7d30\u306f",(0,o.kt)("a",{parentName:"p",href:"./cross-chain-transaction#authentication"},"Authentication"),"\u3067\u8ff0\u3079\u308b\u3002"),(0,o.kt)("h3",{id:"tx-runner"},"Tx Runner"),(0,o.kt)("p",null,"Tx Runner\u306f\u3001Authenticator\u306b\u3088\u308a\u8a8d\u8a3c\u304c\u6210\u529f\u3057\u305f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3002\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u8907\u6570\u30c1\u30a7\u30fc\u30f3\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u308b\u305f\u3081\u3001\u305d\u308c\u3089\u3092Atomic\u306b\u5b9f\u884c\u3067\u304d\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3002\u305d\u306e\u305f\u3081\u3001",(0,o.kt)("a",{parentName:"p",href:"/cross-docs/ja/architecture/atomic-commit-protocol"},"Atomic commit protocol"),"\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u3002e.g. Two-phase commit protocol, Simple commit protocol"),(0,o.kt)("p",null,"Transaction\u304c\u3069\u306eCommit protocol\u3092\u7528\u3044\u308b\u304b\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"MsgInitiateTx"),"\u3067\u6307\u5b9a\u3055\u308c\u305f\u65b9\u5f0f\u306b\u5f93\u3046\u3002\u63d0\u51faChain\u306f\u305d\u306eCommit protocol\u306ecoordinator\u3068\u306a\u308a\u3001\u4ed6\u30c1\u30a7\u30fc\u30f3\u3068IBC Channel\u3092\u901a\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u3092\u884c\u3046\u3002\u305d\u3057\u3066\u3001Commit or Abort\u306e\u6c7a\u5b9a\u3092\u884c\u3044\u3001\u5404\u53c2\u52a0\u8005\u306b\u305d\u306e\u7d50\u679c\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b\u3002"),(0,o.kt)("h3",{id:"contract-manager"},"Contract Manager"),(0,o.kt)("p",null,"Contract Manager\u306f\u3001Contract\u3092\u5b9f\u88c5\u3059\u308bContract Module\u3068",(0,o.kt)("a",{parentName:"p",href:"/cross-docs/ja/architecture/state-store"},"State Store"),"\u3092\u7ba1\u7406\u3057\u3001\u305d\u306e\u72b6\u614b\u5909\u66f4\u3092\u64cd\u4f5c\u3059\u308bAPI\u3092\u5b9f\u88c5\u3059\u308b\u3002\u3053\u308c\u3089\u306eAPI\u306f\u3001Commit protocol\u306e\u30d5\u30ed\u30fc\u306e\u72b6\u614b\u306b\u5fdc\u3058\u3066Tx Runner\u306b\u3088\u308a\u547c\u3073\u51fa\u3055\u308c\u308b\u3002"),(0,o.kt)("h3",{id:"contract-module"},"Contract Module"),(0,o.kt)("p",null,"Contract Module\u306f\u3001Framework\u3092\u5229\u7528\u3059\u308b\u958b\u767a\u8005\u304c\u5b9f\u88c5\u3059\u308bModule\u3067\u3042\u308b\u3002"),(0,o.kt)("p",null,"\u958b\u767a\u8005\u306f\u4ee5\u4e0b\u306eInterface\u3092\u5b9f\u88c5\u3059\u308bModule\u3092\u5b9f\u88c5\u3059\u308b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type ContractModule interface {\n    OnContractCall(ctx context.Context, signers []authtypes.Account, callInfo txtypes.ContractCallInfo) (*txtypes.ContractCallResult, error)\n}\n")),(0,o.kt)("p",null,"TxRunner\u306b\u3088\u308a\u3001\u547c\u3073\u51fa\u3057\u60c5\u5831\u3001\u8a8d\u8a3c\u60c5\u5831\u3068\u3068\u3082\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"OnContractCall"),"\u304c\u547c\u3070\u308c\u308b\u3053\u3068\u3067Contract\u306f\u5b9f\u884c\u3055\u308c\u308b\u3002Contract\u306f\u4e00\u822c\u7684\u306b\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"signers"),"\u3067\u6307\u5b9a\u3055\u308c\u305fAccount\u306e\u8a8d\u8a3c\u65b9\u5f0f\u304c\u671f\u5f85\u3057\u305f\u3082\u306e\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002Contract Module\u306e\u5b9f\u88c5\u4f8b\u306f",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datachainlab/cross/blob/v0.2.0/simapp/samplemod/module.go"},"\u3053\u3053"),"\u3067\u78ba\u8a8d\u3067\u304d\u308b\u3002"))}d.isMDXComponent=!0}}]);