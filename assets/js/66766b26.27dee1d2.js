"use strict";(self.webpackChunkcross_docs=self.webpackChunkcross_docs||[]).push([[373],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var o=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(a),h=i,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||n;return a?o.createElement(u,r(r({ref:t},s),{},{components:a})):o.createElement(u,r({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:i,r[1]=c;for(var p=2;p<n;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1578:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var o=a(7462),i=(a(7294),a(3905));const n={sidebar_position:4,id:"atomic-commit-protocol"},r="Atomic commit protocol",c={unversionedId:"docs/architecture/atomic-commit-protocol",id:"docs/architecture/atomic-commit-protocol",title:"Atomic commit protocol",description:"Atomic commit protocol is a protocol that allows a set of multiple operations to be executed as a single operation. Typical examples include Two-phase commit and Three-phase commit. In our context, it refers to a protocol that allows multiple blockchain transactions to be executed as a single transaction.",source:"@site/docs/01-docs/03-architecture/04-atomic-commit-protocol.md",sourceDirName:"01-docs/03-architecture",slug:"/docs/architecture/atomic-commit-protocol",permalink:"/cross-docs/docs/architecture/atomic-commit-protocol",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"atomic-commit-protocol"},sidebar:"tutorialSidebar",previous:{title:"Cross-chain Transaction",permalink:"/cross-docs/docs/architecture/cross-chain-transaction"},next:{title:"State store",permalink:"/cross-docs/docs/architecture/state-store"}},l={},p=[{value:"Two-phase commit protocol",id:"two-phase-commit-protocol",level:2},{value:"Simple commit protocol",id:"simple-commit-protocol",level:2}],s={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"atomic-commit-protocol"},"Atomic commit protocol"),(0,i.kt)("p",null,"Atomic commit protocol is a protocol that allows a set of multiple operations to be executed as a single operation. Typical examples include Two-phase commit and Three-phase commit. In our context, it refers to a protocol that allows multiple blockchain transactions to be executed as a single transaction."),(0,i.kt)("p",null,"Cross Framework currently supports two protocols, Simple commit protocol and Two-phase commit protocol, which can be specified when creating a transaction. In these protocols, there are two roles: the participants, or cohorts, who execute each process specified in the transaction and the coordinator who coordinates the participants to obtain a common decision.\nSimple protocol is limited to two participants, and one of the participants is the coordinator. On the other hand, Two-phase commit protocol is not limited to participants and can use a coordinator who is not a participant. However, compared to Simple protocol, the number of steps in the flow is larger, and the completion time is longer. Details of each of these methods are described in ",(0,i.kt)("a",{parentName:"p",href:"#two-phase-commit-protocol"},"Two-phase commit protocol")," and ",(0,i.kt)("a",{parentName:"p",href:"#simple-commit-protocol"},"Simple commit protocol"),". Also, details on transaction creation are described in ",(0,i.kt)("a",{parentName:"p",href:"/cross-docs/docs/architecture/cross-chain-transaction"},"Cross-chain Transaction"),"."),(0,i.kt)("h2",{id:"two-phase-commit-protocol"},"Two-phase commit protocol"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Two-phase_commit_protocol"},"Two-phase commit (2PC)")," is a commit protocol that executes a two-phase flow of commit request and commit between the coordinator and participants."),(0,i.kt)("p",null,"The protocol flow is shown in the figure below, where X is the coordinator, A, B, and C are the respective participants, and the arrows indicate the direction of the request for each step of the flow."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_FFE17AA1F4B82D88109B81BA32CA19757CCAC2E7BBE2D24C9CAD3FFEE992E8B9_1581565269084_Screenshot+from+2020-02-13+12-40-55.png",alt:"Two-phase commit flow"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Initiate step"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MsgInitiateTx")," is submitted to the Initiator chain for validation and authentication. Note: This process is common to all commit protocols."),(0,i.kt)("li",{parentName:"ul"},"After authentication, the Initiator chain sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketPrepare"),", a packet requesting ",(0,i.kt)("inlineCode",{parentName:"li"},"Prepare")," to each participant chain specified in the ",(0,i.kt)("inlineCode",{parentName:"li"},"MsgInitiateTx")," as coordinator."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Prepare step"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each Participant chain executes the contract function specified in ",(0,i.kt)("inlineCode",{parentName:"li"},"ResolvedContractTransaction")," on receiving a ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketPrepare"),"."),(0,i.kt)("li",{parentName:"ul"},"If the execution is successful, a lock is acquired to prevent conflicts between saving changes to the State store and concurrent transactions. This operation is available via ",(0,i.kt)("a",{parentName:"li",href:"/cross-docs/docs/architecture/state-store"},"State store"),". Finally, set the ",(0,i.kt)("inlineCode",{parentName:"li"},"Status")," of the ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketPrepareAcknowledgement")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"PREPARE_RESULT_OK")," indicating success and send it to the coordinator"),(0,i.kt)("li",{parentName:"ul"},"If the execution fails, the change operation on the State store is discarded, and the ",(0,i.kt)("inlineCode",{parentName:"li"},"Status")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketPrepareAcknowledgement")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"PREPARE_RESULT_FAILED")," indicating failure and sent to the coordinator."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Confirm step"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Coordinator chain receives the ",(0,i.kt)("inlineCode",{parentName:"p"},"PacketPrepareAcknowledgement")," sent by each Participant chain and performs the following state transitions."),(0,i.kt)("p",{parentName:"li"},"  (1) Wait for the next acknowledgement to be received"),(0,i.kt)("p",{parentName:"li"},"  (2) If the ",(0,i.kt)("inlineCode",{parentName:"p"},"Status")," of the received acknowledgement is ",(0,i.kt)("inlineCode",{parentName:"p"},"PREPARE_RESULT_OK")," and there is an unreceived ",(0,i.kt)("inlineCode",{parentName:"p"},"PacketPrepareAcknowledgement"),", transit to (1). . If all acknowledgements are received, set ",(0,i.kt)("inlineCode",{parentName:"p"},"COMMIT")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Status")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"PacketCommit")," to send a commit request to each participant chain, and proceed to the commit step"),(0,i.kt)("p",{parentName:"li"},"  (3) If the ",(0,i.kt)("inlineCode",{parentName:"p"},"Status")," of the received acknowledgement is ",(0,i.kt)("inlineCode",{parentName:"p"},"PREPARE_RESULT_FAILED"),", set ",(0,i.kt)("inlineCode",{parentName:"p"},"ABORT")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Status")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"PacketCommit")," to request abort to each participant chain, send it, and proceed to the commit step")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Commit step"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When a commit request is received (",(0,i.kt)("inlineCode",{parentName:"li"},"Status")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketCommit")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"COMMIT"),"), each participant chain applies the change operation saved in the Prepare step to the State store, removes the lock, and sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketCommitAcknowledgement")," to the coordinator chain indicating that it has been completed"),(0,i.kt)("li",{parentName:"ul"},"When each participant chain receives an abort request (",(0,i.kt)("inlineCode",{parentName:"li"},"Status")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketCommit")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"ABORT"),"), it deletes the change operation and locks saved in the prepare step, and sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketCommitAcknowledgement")," to the coordinator chain indicating that it has been completed.")))),(0,i.kt)("h2",{id:"simple-commit-protocol"},"Simple commit protocol"),(0,i.kt)("p",null,"Simple commit protocol is a commit protocol that allows non-coordinator participants to avoid locking during Atomic Commit between two parties. Therefore, in the Simple commit protocol, the Initiator chain also serves both the coordinator and participant roles."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_BF6A6C558FB10E2A2F4E74E9F7B342EF6228422735BC5F474C1D1BF9C0273659_1597826874435_Screenshot+from+2020-08-19+17-47-27.png",alt:"Simple commit flow"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Initiate step"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MsgInitiateTx")," is submitted to the Initiator chain for validation and authentication. Note: This process is common to all commit protocols."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Prepare step(A)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Participant A executes the ",(0,i.kt)("inlineCode",{parentName:"li"},"ContractTransaction")," specified in ",(0,i.kt)("inlineCode",{parentName:"li"},"MsgInitiateTx"),"."),(0,i.kt)("li",{parentName:"ul"},"If the execution is successful, a lock is acquired to save the changes to the state store and prevent conflicts with concurrent transactions. After that, it creates a packet ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketDataCall")," containing the information of participant B's contract function call, and sends it to the channel with B."),(0,i.kt)("li",{parentName:"ul"},"If the execution fails, the process of this transaction is terminated by abort."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Commit step(B)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"B receives the ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketDataCall")," and executes the specified contract function."),(0,i.kt)("li",{parentName:"ul"},"If execution is successful, commit is performed. After that, set ",(0,i.kt)("inlineCode",{parentName:"li"},"Commit_OK")," as ",(0,i.kt)("inlineCode",{parentName:"li"},"Status")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketCallAcknowledgement")," and send it to the channel with A."),(0,i.kt)("li",{parentName:"ul"},"If the execution fails, abort is performed. Then, set ",(0,i.kt)("inlineCode",{parentName:"li"},"COMMIT_FAILED")," as ",(0,i.kt)("inlineCode",{parentName:"li"},"Status")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketCallAcknowledgement")," and send it to the channel with A."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Commit step(A)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A receives a ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketCallAcknowledgement")," and checks its ",(0,i.kt)("inlineCode",{parentName:"li"},"Status"),"."),(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("inlineCode",{parentName:"li"},"Status")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"COMMIT_OK"),", A commits the state store change operation saved at Prepare and removes the lock."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"Status")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"COMMIT_FAILED"),", A discards the state store change operation saved at the prepare step and deletes the lock.")))))}d.isMDXComponent=!0}}]);