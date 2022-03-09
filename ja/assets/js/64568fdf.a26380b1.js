"use strict";(self.webpackChunkcross_docs=self.webpackChunkcross_docs||[]).push([[529],{7088:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var i=a(7462),o=a(3366),n=(a(7294),a(3905)),r=["components"],l={sidebar_position:4,id:"atomic-commit-protocol"},m="Atomic commit protocol",p={unversionedId:"architecture/atomic-commit-protocol",id:"architecture/atomic-commit-protocol",isDocsHomePage:!1,title:"Atomic commit protocol",description:"Atomic commit protocol\u3068\u306f\u3001\u8907\u6570\u306e\u64cd\u4f5c\u306e\u96c6\u5408\u30921\u3064\u306e\u51e6\u7406\u3068\u3057\u3066\u5b9f\u884c\u53ef\u80fd\u306b\u3059\u308b\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u3042\u308b\u3002\u4ee3\u8868\u7684\u306a\u3082\u306e\u3068\u3057\u3066\u306f\u3001Two-phase commit\u3084Three-phase commit\u306a\u3069\u304c\u3042\u308b\u3002\u6211\u3005\u306e\u6587\u8108\u3067\u306f\u3001\u8907\u6570\u306e\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30921\u3064\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3068\u3057\u3066\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u6307\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/03-architecture/04-atomic-commit-protocol.md",sourceDirName:"03-architecture",slug:"/architecture/atomic-commit-protocol",permalink:"/cross-docs/ja/architecture/atomic-commit-protocol",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"atomic-commit-protocol"},sidebar:"tutorialSidebar",previous:{title:"Cross-chain Transaction",permalink:"/cross-docs/ja/architecture/cross-chain-transaction"},next:{title:"State store",permalink:"/cross-docs/ja/architecture/state-store"}},c=[{value:"Two-phase commit protocol",id:"two-phase-commit-protocol",children:[]},{value:"Simple commit protocol",id:"simple-commit-protocol",children:[]}],k={toc:c};function s(t){var e=t.components,a=(0,o.Z)(t,r);return(0,n.kt)("wrapper",(0,i.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"atomic-commit-protocol"},"Atomic commit protocol"),(0,n.kt)("p",null,"Atomic commit protocol\u3068\u306f\u3001\u8907\u6570\u306e\u64cd\u4f5c\u306e\u96c6\u5408\u30921\u3064\u306e\u51e6\u7406\u3068\u3057\u3066\u5b9f\u884c\u53ef\u80fd\u306b\u3059\u308b\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u3042\u308b\u3002\u4ee3\u8868\u7684\u306a\u3082\u306e\u3068\u3057\u3066\u306f\u3001Two-phase commit\u3084Three-phase commit\u306a\u3069\u304c\u3042\u308b\u3002\u6211\u3005\u306e\u6587\u8108\u3067\u306f\u3001\u8907\u6570\u306e\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30921\u3064\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3068\u3057\u3066\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u6307\u3059\u3002"),(0,n.kt)("p",null,"Cross Framework\u3067\u306f\u3001\u73fe\u5728\u3001Simple commit protocol, Two-phase commit protocol\u306e2\u7a2e\u985e\u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u304a\u308a\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u6642\u306b\u6307\u5b9a\u304c\u53ef\u80fd\u3067\u3042\u308b\u3002\u3053\u308c\u3089\u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u306f\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3067\u6307\u5b9a\u3055\u308c\u308b\u5404\u51e6\u7406\u3092\u5b9f\u884c\u3059\u308b\u53c2\u52a0\u8005\u3068\u53c2\u52a0\u8005\u304c\u5171\u901a\u306e\u6c7a\u5b9a\u3092\u5f97\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c7\u30a3\u30cd\u30fc\u30c8\u3092\u884c\u3046\u30b3\u30fc\u30c7\u30a3\u30cd\u30fc\u30bf\u30fc\u306e2\u3064\u306e\u30ed\u30fc\u30eb\u304c\u3042\u308b\u3002\nSimple protocol\u306f\u3001\u53c2\u52a0\u8005\u304c2\u3064\u306b\u9650\u3089\u308c\u308b\u3053\u3068\u3068\u53c2\u52a0\u8005\u306e\u3046\u3061\u306e1\u3064\u304c\u30b3\u30fc\u30c7\u30a3\u30cd\u30fc\u30bf\u30fc\u3092\u62c5\u3046\u3002\u4e00\u65b9\u3001Two-phase commit\u306f\u53c2\u52a0\u8005\u306b\u5236\u7d04\u306f\u306a\u304f\u3001\u53c2\u52a0\u8005\u3067\u306f\u306a\u3044\u30b3\u30fc\u30c7\u30a3\u30cd\u30fc\u30bf\u30fc\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3042\u308b\u3002\u3057\u304b\u3057\u3001Simple protocol\u3068\u6bd4\u8f03\u3059\u308b\u3068\u30d5\u30ed\u30fc\u4e2d\u306e\u30b9\u30c6\u30c3\u30d7\u6570\u304c\u591a\u304f\u306a\u3063\u3066\u304a\u308a\u3001\u5b8c\u4e86\u307e\u3067\u306e\u6642\u9593\u304c\u9577\u304f\u306a\u308b\u3002\u3053\u308c\u3089\u306e\u5404\u65b9\u5f0f\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"#two-phase-commit-protocol"},"Two-phase commit protocol"),", ",(0,n.kt)("a",{parentName:"p",href:"#simple-commit-protocol"},"Simple commit protocol"),"\u3067\u8ff0\u3079\u308b\u3002\u307e\u305f\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306f",(0,n.kt)("a",{parentName:"p",href:"/cross-docs/ja/architecture/cross-chain-transaction"},"Cross-chain Transaction"),"\u3067\u8ff0\u3079\u308b\u3002"),(0,n.kt)("h2",{id:"two-phase-commit-protocol"},"Two-phase commit protocol"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Two-phase_commit_protocol"},"Two-phase commit(2PC)"),"\u306f\u3001Commit\u8981\u6c42\u3068Commit\u306e2 phase\u306e\u30d5\u30ed\u30fc\u3092Coordinator\u3068\u53c2\u52a0\u8005\u306e\u9593\u3067\u5b9f\u884c\u3059\u308b\u30b3\u30df\u30c3\u30c8\u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u3042\u308b\u3002"),(0,n.kt)("p",null,"\u30d7\u30ed\u30c8\u30b3\u30eb\u306f\u4e0b\u56f3\u306e\u3088\u3046\u306a\u30d5\u30ed\u30fc\u3068\u306a\u308b\u3002X\u306fCoordinator, A, B, C\u306f\u5404Participant, \u77e2\u5370\u306f\u30d5\u30ed\u30fc\u306e\u5404\u30b9\u30c6\u30c3\u30d7\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u5411\u304d\u3092\u793a\u3057\u3066\u3044\u308b\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_FFE17AA1F4B82D88109B81BA32CA19757CCAC2E7BBE2D24C9CAD3FFEE992E8B9_1581565269084_Screenshot+from+2020-02-13+12-40-55.png",alt:"Two-phase commit\u306e\u30d5\u30ed\u30fc"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Initiate step"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Initiator chain\u306b",(0,n.kt)("inlineCode",{parentName:"li"},"MsgInitiateTx"),"\u304c\u63d0\u51fa\u3055\u308c\u3001\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u30fb\u8a8d\u8a3c\u304c\u884c\u308f\u308c\u308b\u3002\u6ce8\u8a18: \u3053\u306e\u51e6\u7406\u306f\u30b3\u30df\u30c3\u30c8\u30d7\u30ed\u30c8\u30b3\u30eb\u5171\u901a\u3067\u3042\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\u5b8c\u4e86\u5f8c\u3001Initiator chain\u306fCoordinator\u3068\u3057\u3066",(0,n.kt)("inlineCode",{parentName:"li"},"MsgInitiateTx"),"\u306b\u6307\u5b9a\u3055\u308c\u305f\u5404Participant chains\u306b",(0,n.kt)("inlineCode",{parentName:"li"},"Prepare"),"\u3092\u8981\u6c42\u3059\u308bPacket\u3067\u3042\u308b",(0,n.kt)("inlineCode",{parentName:"li"},"PacketPrepare"),"\u3092\u9001\u4fe1\u3059\u308b"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Prepare step"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5404Participant chains\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"PacketPrepare"),"\u3092\u53d7\u3051\u53d6\u308b\u3068\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"ResolvedContractTransaction"),"\u3067\u6307\u5b9a\u3055\u308c\u308bContract\u95a2\u6570\u3092\u5b9f\u884c\u3059\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b9f\u884c\u306b\u6210\u529f\u3057\u305f\u5834\u5408\u3001State store\u306b\u5bfe\u3057\u3066\u306e\u5909\u66f4\u306e\u4fdd\u5b58\u3068\u4e26\u884c\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3068\u306e\u7af6\u5408\u3092\u9632\u3050\u305f\u3081\u306e\u30ed\u30c3\u30af\u3092\u53d6\u5f97\u3059\u308b\u3002\u3053\u306e\u64cd\u4f5c\u306f",(0,n.kt)("a",{parentName:"li",href:"/cross-docs/ja/architecture/state-store"},"State store"),"\u306b\u3088\u308a\u63d0\u4f9b\u3055\u308c\u308b\u3002\u6700\u5f8c\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"PacketPrepareAcknowledgement"),"\u306e",(0,n.kt)("inlineCode",{parentName:"li"},"Status"),"\u306b\u6210\u529f\u3092\u793a\u3059",(0,n.kt)("inlineCode",{parentName:"li"},"PREPARE_RESULT_OK"),"\u3092\u30bb\u30c3\u30c8\u3057\u3066Coordinator\u306b\u9001\u4fe1\u3059\u308b"),(0,n.kt)("li",{parentName:"ul"},"\u5b9f\u884c\u306b\u5931\u6557\u3057\u305f\u5834\u5408\u3001State store\u306b\u5bfe\u3057\u3066\u306e\u5909\u66f4\u64cd\u4f5c\u3092\u7834\u68c4\u3057\u3066\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"PacketPrepareAcknowledgement")," \u306e",(0,n.kt)("inlineCode",{parentName:"li"},"Status"),"\u306b\u5931\u6557\u3092\u793a\u3059",(0,n.kt)("inlineCode",{parentName:"li"},"PREPARE_RESULT_FAILED"),"\u3092\u30bb\u30c3\u30c8\u3057\u3066Coordinator\u306b\u9001\u4fe1\u3059\u308b\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirm step"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Coordinator chain\u306f\u3001\u5404Participant chain\u304c\u9001\u4fe1\u3057\u305f",(0,n.kt)("inlineCode",{parentName:"p"},"PacketPrepareAcknowledgement"),"\u3092\u53d7\u3051\u53d6\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306a\u72b6\u614b\u9077\u79fb\u3092\u304a\u3053\u306a\u3046\u3002"),(0,n.kt)("p",{parentName:"li"},"  (1) \u6b21\u306eAcknowlegement\u306e\u53d7\u4fe1\u5f85\u3061"),(0,n.kt)("p",{parentName:"li"},"  (2) \u53d7\u4fe1\u3057\u305fAcknowlegement\u306e",(0,n.kt)("inlineCode",{parentName:"p"},"Status"),"\u304c",(0,n.kt)("inlineCode",{parentName:"p"},"PREPARE_RESULT_OK"),"\u304b\u3064\u672a\u53d7\u4fe1\u306e",(0,n.kt)("inlineCode",{parentName:"p"},"PacketPrepareAcknowledgement"),"\u304c\u3042\u308b\u5834\u5408\u3001(1)\u306b\u9077\u79fb\u3059\u308b\u3002\u3059\u3079\u3066\u53d7\u4fe1\u3057\u305f\u5834\u5408\u3001\u5404Participant chain\u306bCommit\u8981\u6c42\u3092\u3059\u308b\u305f\u3081\u306b",(0,n.kt)("inlineCode",{parentName:"p"},"PacketCommit"),"\u306e",(0,n.kt)("inlineCode",{parentName:"p"},"Status"),"\u306b",(0,n.kt)("inlineCode",{parentName:"p"},"COMMIT"),"\u3092\u30bb\u30c3\u30c8\u3057\u3066\u9001\u4fe1\u3057\u3001Commit step\u306b\u9032\u3080"),(0,n.kt)("p",{parentName:"li"},"  (3) \u53d7\u4fe1\u3057\u305fAcknowlegement\u306e",(0,n.kt)("inlineCode",{parentName:"p"},"Status"),"\u304c",(0,n.kt)("inlineCode",{parentName:"p"},"PREPARE_RESULT_FAILED"),"\u306e\u5834\u5408\u3001\u5404Participant chain\u306bAbort\u8981\u6c42\u3092\u3059\u308b\u305f\u3081\u306b",(0,n.kt)("inlineCode",{parentName:"p"},"PacketCommit"),"\u306e",(0,n.kt)("inlineCode",{parentName:"p"},"Status"),"\u306b",(0,n.kt)("inlineCode",{parentName:"p"},"ABORT"),"\u3092\u30bb\u30c3\u30c8\u3057\u3066\u9001\u4fe1\u3057\u3001Commit step\u306b\u9032\u3080")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Commit step"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5404Participant chains\u306f\u3001Commit\u8981\u6c42\u304c\u3042\u3063\u305f\u5834\u5408(",(0,n.kt)("inlineCode",{parentName:"li"},"PacketCommit"),"\u306e",(0,n.kt)("inlineCode",{parentName:"li"},"Status"),"\u304c",(0,n.kt)("inlineCode",{parentName:"li"},"COMMIT"),")\u3001Prepare step\u3067\u4fdd\u5b58\u3057\u3066\u3044\u305f\u5909\u66f4\u64cd\u4f5c\u3092State store\u306b\u9069\u7528\u3057\u3001\u30ed\u30c3\u30af\u3092\u524a\u9664\u3057\u3066Coordinator chain\u306b\u5b8c\u4e86\u6e08\u307f\u3092\u793a\u3059",(0,n.kt)("inlineCode",{parentName:"li"},"PacketCommitAcknowledgement"),"\u3092\u9001\u4fe1\u3059\u308b"),(0,n.kt)("li",{parentName:"ul"},"\u5404Participant chains\u306f\u3001Abort\u8981\u6c42\u304c\u3042\u3063\u305f\u5834\u5408(",(0,n.kt)("inlineCode",{parentName:"li"},"PacketCommit"),"\u306e",(0,n.kt)("inlineCode",{parentName:"li"},"Status"),"\u304c",(0,n.kt)("inlineCode",{parentName:"li"},"ABORT"),")\u3001Prepare step\u3067\u4fdd\u5b58\u3057\u3066\u3044\u305f\u5909\u66f4\u64cd\u4f5c\u3068\u30ed\u30c3\u30af\u3092\u524a\u9664\u3057\u3066Coordinator chain\u306b\u5b8c\u4e86\u6e08\u307f\u3092\u793a\u3059",(0,n.kt)("inlineCode",{parentName:"li"},"PacketCommitAcknowledgement"),"\u3092\u9001\u4fe1\u3059\u308b")))),(0,n.kt)("h2",{id:"simple-commit-protocol"},"Simple commit protocol"),(0,n.kt)("p",null,"Simple commit protocol\u306f\u30012\u8005\u9593\u3067\u306eAtomic Commit\u6642\u306b\u975eCoordinator\u5074\u306e\u53c2\u52a0\u8005\u304c\u30ed\u30c3\u30af\u3092\u907f\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u308bCommit Protocol\u3067\u3042\u308b\u3002\u305d\u306e\u305f\u3081Simple commit protocol\u3067\u306f\u3001Initiator chain\u306fCoordinator\u3068Participant\u306e\u30ed\u30fc\u30eb\u3092\u517c\u306d\u308b\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_BF6A6C558FB10E2A2F4E74E9F7B342EF6228422735BC5F474C1D1BF9C0273659_1597826874435_Screenshot+from+2020-08-19+17-47-27.png",alt:"Simple commit flow"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Initiate step"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Initiator chain\u306b",(0,n.kt)("inlineCode",{parentName:"li"},"MsgInitiateTx"),"\u304c\u63d0\u51fa\u3055\u308c\u3001\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u30fb\u8a8d\u8a3c\u304c\u884c\u308f\u308c\u308b\u3002\u6ce8\u8a18: \u3053\u306e\u51e6\u7406\u306f\u30b3\u30df\u30c3\u30c8\u30d7\u30ed\u30c8\u30b3\u30eb\u5171\u901a\u3067\u3042\u308b\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Prepare step(A)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A\u306f",(0,n.kt)("inlineCode",{parentName:"li"},"MsgInitiateTx"),"\u3067\u6307\u5b9a\u3055\u308c\u305f",(0,n.kt)("inlineCode",{parentName:"li"},"ContractTransaction"),"\u3092\u5b9f\u884c\u3059\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b9f\u884c\u306b\u6210\u529f\u3057\u305f\u5834\u5408\u3001State store\u306b\u5bfe\u3057\u3066\u306e\u5909\u66f4\u306e\u4fdd\u5b58\u3068\u4e26\u884c\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3068\u306e\u7af6\u5408\u3092\u9632\u3050\u305f\u3081\u306e\u30ed\u30c3\u30af\u3092\u53d6\u5f97\u3059\u308b\u3002\u305d\u306e\u5f8c\u3001B\u306eContract\u95a2\u6570\u306e\u547c\u3073\u51fa\u3057\u60c5\u5831\u3092\u542b\u3080\u3001Packet ",(0,n.kt)("inlineCode",{parentName:"li"},"PacketDataCall"),"\u3092\u4f5c\u6210\u3057B\u3068\u306eChannel\u306b\u9001\u4fe1\u3059\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b9f\u884c\u306b\u5931\u6557\u3057\u305f\u5834\u5408\u3001\u3053\u306eTransaction\u306e\u51e6\u7406\u3092Abort\u3057\u3066\u7d42\u4e86\u3059\u308b\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Commit step(B)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"B\u306f",(0,n.kt)("inlineCode",{parentName:"li"},"PacketDataCall"),"\u3092\u53d7\u3051\u53d6\u308a\u3001\u6307\u5b9a\u3055\u308c\u305fContract\u95a2\u6570\u3092\u5b9f\u884c\u3059\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b9f\u884c\u306b\u6210\u529f\u3057\u305f\u5834\u5408\u3001Commit\u3092\u884c\u3046\u3002\u305d\u306e\u5f8c\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"PacketCallAcknowledgement"),"\u306b",(0,n.kt)("inlineCode",{parentName:"li"},"Status"),"\u3068\u3057\u3066",(0,n.kt)("inlineCode",{parentName:"li"},"COMMIT_OK"),"\u3092\u30bb\u30c3\u30c8\u3057\u3066\u3001A\u3068\u306eChannel\u306b\u9001\u4fe1\u3059\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b9f\u884c\u306b\u5931\u6557\u3057\u305f\u5834\u5408\u3001Abort\u3092\u884c\u3046\u3002\u305d\u306e\u5f8c\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"PacketCallAcknowledgement"),"\u306b",(0,n.kt)("inlineCode",{parentName:"li"},"Status"),"\u3068\u3057\u3066",(0,n.kt)("inlineCode",{parentName:"li"},"COMMIT_FAILED"),"\u3092\u30bb\u30c3\u30c8\u3057\u3066\u3001A\u3068\u306eChannel\u306b\u9001\u4fe1\u3059\u308b\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Commit step(A)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A\u306f",(0,n.kt)("inlineCode",{parentName:"li"},"PacketCallAcknowledgement"),"\u3092\u53d7\u3051\u53d6\u308a\u3001\u305d\u306e",(0,n.kt)("inlineCode",{parentName:"li"},"Status"),"\u3092\u78ba\u8a8d\u3059\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Status"),"\u304c",(0,n.kt)("inlineCode",{parentName:"li"},"COMMIT_OK"),"\u306e\u5834\u5408\u3001A\u306fPrepare\u6642\u306b\u4fdd\u5b58\u3057\u3066\u3044\u305fState store\u306e\u5909\u66f4\u64cd\u4f5c\u3092\u30b3\u30df\u30c3\u30c8\u3057\u3001\u30ed\u30c3\u30af\u3092\u524a\u9664\u3059\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Status"),"\u304c",(0,n.kt)("inlineCode",{parentName:"li"},"COMMIT_FAILED"),"\u306e\u5834\u5408\u3001A\u306fPrepare\u6642\u306b\u4fdd\u5b58\u3057\u3066\u3044\u305fState store\u306e\u5909\u66f4\u64cd\u4f5c\u3092\u7834\u68c4\u3057\u3001\u30ed\u30c3\u30af\u3092\u524a\u9664\u3059\u308b\u3002")))))}s.isMDXComponent=!0}}]);