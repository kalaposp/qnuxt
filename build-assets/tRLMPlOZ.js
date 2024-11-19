import{_ as y}from"./C2HAvIRa.js";import{_ as N}from"./B7pqZHKm.js";import{_ as x}from"./Cvxw9Hdt.js";import{r as f,o as b,c as w,b as i,w as o,a as t,p,d as a,l as r,I as c,n as u,x as I,u as P}from"./DpQK2Jkc.js";import{Y as O,G as D,V as B}from"./BBfvinYA.js";import{h as v,S as R}from"./DSdiAxFF.js";import{_ as U}from"./DEn0NdMH.js";const j=["id"],q={class:"h-full w-full"},Q={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-theme-200 xl:aspect-h-8 xl:aspect-w-7"},$={class:"flex items-center justify-between px-4 py-4 lg:px-6 lg:py-6"},H={class:"flex-grow pt-2 pb-4"},W={class:"mt-0 text-sm font-semibold text-theme-400 text-left"},F={class:"mt-2 text-md font-semibold text-theme-200 text-left"},L={class:"mt-2 text-sm text-theme-400 text-left"},M={class:"px-6"},V={class:"fixed inset-0 overflow-y-auto"},z={class:"flex min-h-full items-center justify-center p-4 text-left"},G={class:"max-w-3xl mx-auto px-0 py-0 sm:px-0 sm:py-0 mb-3"},X={class:"p-4"},K={class:"max-w-2xl mx-auto gap-6 flex px-2 py-2 sm:px-4 sm:py-3"},Y={key:0,class:"bg-theme-900 text-theme-100 text-xs rounded-md py-0.5 px-2"},J={class:"mt-2"},d={__name:"NewsPair",props:{id:{type:String,required:!0},src:{type:String,required:!0},alt:{type:String,required:!0},startColor:{type:String,default:"from-theme-100"},endColor:{type:String,default:"to-theme-100"},textOrder:{type:String,default:"lg:order-2"},imgOrder:{type:String,default:"lg:order-1"},titleColor:{type:String,default:"text-theme-900"},contentColor:{type:String,default:"text-theme-800"},contentHoverColor:{type:String,default:"lg:hover:text-theme-500"},buttonColor:{type:String,default:"text-theme-700"},buttonHoverColor:{type:String,default:"lg:hover:text-theme-500"}},setup(s){const m=f(!1);function e(){m.value=!1}function h(){m.value=!0}const g=f(!1),C=async()=>{try{await navigator.clipboard.writeText(window.location.href),g.value=!0,setTimeout(()=>{g.value=!1},1e3)}catch(n){console.error("Failed to copy URL:",n)}};f([]);function k(){const n=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;window.open(n,"_blank")}function T(){const n=`https://twitter.com/share?url=${encodeURIComponent(window.location.href)}`;window.open(n,"_blank")}return(n,l)=>{const S=x,A=y,E=x;return b(),w("div",{id:s.id,class:"mt-0 bg-none border-none border-red-200 max-w-full h-full w-full mx-auto flex"},[i(A,{to:`#${s.id}`,type:"button",onClick:h,class:"h-full w-full bg-theme-900 lg:hover:bg-theme-800 rounded-3xl border-none border-theme-200 shadow-none shadow-theme-700/10 ring-none ring-theme-900/5 transition duration-300 relative flex items-start group"},{default:o(()=>[t("div",q,[t("div",Q,[i(S,{src:s.src,alt:s.alt,class:"h-full w-full object-cover object-center lg:group-hover:opacity-90 transition aspect-[16/9]",placeholder:[75,50,100,15],loading:"lazy"},null,8,["src","alt"])]),t("div",$,[t("div",H,[t("p",W,[p(n.$slots,"category",{},()=>[l[0]||(l[0]=a(" Fallback "))])]),t("h3",F,[p(n.$slots,"title",{},()=>[l[1]||(l[1]=a(" Fallback "))])]),t("p",L,[p(n.$slots,"date",{},()=>[l[2]||(l[2]=a(" Fallback "))])])]),t("div",M,[i(r(c),{icon:"carbon:add-filled",class:"h-8 w-8 absolute bottom-4 right-4 text-theme-400 lg:group-hover:text-theme-100 transition"})])])])]),_:3},8,["to"]),i(r(R),{appear:"",show:m.value,as:"template"},{default:o(()=>[i(r(O),{as:"div",onClose:e,class:"relative z-10"},{default:o(()=>[i(r(v),{as:"template",class:"opacity-0",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:o(()=>l[3]||(l[3]=[t("div",{class:"fixed inset-0 bg-black/75 backdrop-blur-xl"},null,-1)])),_:1}),t("div",V,[t("div",z,[i(r(v),{as:"template",class:"opacity-0 scale-95",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:o(()=>[i(r(D),{class:u([s.startColor,s.endColor,"bg-gradient-to-tr w-full max-w-3xl transform overflow-hidden rounded-3xl p-0 pt-0 sm:pt-0 pb-16 text-left align-middle shadow-xl transition-all relative"])},{default:o(()=>[t("div",G,[i(E,{src:s.src,alt:s.alt,loading:"lazy",class:"rounded-t-3xl h-full w-full object-cover object-center relative lg:group-hover:opacity-90 transition",placeholder:[75,50,100,15]},null,8,["src","alt"])]),t("div",X,[t("div",{class:u([s.contentColor,"text-sm sm:text-sm font-medium max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-3"])},[p(n.$slots,"date",{},()=>[l[4]||(l[4]=a(" Fallback Date. "))])],2),i(r(B),{as:"h3",class:u([s.titleColor,"text-xl font-semibold leading-6 max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-3"])},{default:o(()=>[p(n.$slots,"title",{},()=>[l[5]||(l[5]=a(" Fallback Text. "))])]),_:3},8,["class"]),t("div",K,[t("button",{onClick:k,class:"focus:outline-none"},[i(r(c),{icon:"basil:facebook-solid",class:u([s.contentColor,s.contentHoverColor,"h-5 w-5 items-center justify-center mx-auto transition"]),"aria-hidden":"true"},null,8,["class"])]),t("button",{onClick:T,class:"focus:outline-none"},[i(r(c),{icon:"ri:twitter-x-line",class:u([s.contentColor,s.contentHoverColor,"h-5 w-5 items-center justify-center mx-auto transition"]),"aria-hidden":"true"},null,8,["class"])]),t("button",{onClick:C,class:u([{copied:g.value},"flex items-center gap-4 focus:outline-none"])},[i(r(c),{icon:"lucide:link",class:u([s.contentColor,s.contentHoverColor,"h-5 w-5 transition"])},null,8,["class"]),g.value?(b(),w("span",Y," Copied to clipboard. ")):I("",!0)],2)]),t("div",J,[t("p",{class:u([s.contentColor,"text-sm sm:text-base max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-2"])},[p(n.$slots,"content",{},()=>[l[6]||(l[6]=a(" Fallback text. "))])],2)])]),t("button",{type:"button",class:"absolute bottom-0 right-0 p-4",onClick:e},[i(r(c),{icon:"carbon:close",class:u([s.buttonColor,s.buttonHoverColor,"h-10 w-10"]),"aria-hidden":"true"},null,8,["class"])])]),_:3},8,["class"])]),_:3})])])]),_:3})]),_:3},8,["show"])],8,j)}}},Z={class:"bg-background border-none border-theme-200 max-w-full mx-auto"},_={class:"mx-auto max-w-screen-2xl px-3 pt-0 sm:pt-0 py-16 sm:py-16 lg:max-w-screen-2xl"},ee={class:"grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"},te={class:"leading-relaxed"},oe={class:"leading-relaxed"},de={__name:"index",setup(s){return P({title:"News - Qualiton"}),(m,e)=>{const h=y;return b(),w("div",null,[i(N,{id:"news-bar",path:"./news"},{heading:o(()=>e[0]||(e[0]=[a(" News ")])),_:1}),i(U,{id:"title","card-color":"bg-theme-900","content-color":"text-theme-100"},{title:o(()=>e[1]||(e[1]=[a(" News ")])),subtitle:o(()=>e[2]||(e[2]=[a(" The latest news about the Qualiton brand. ")])),_:1}),t("div",Z,[t("div",_,[e[37]||(e[37]=t("h2",{class:"sr-only"},"Reviews",-1)),t("div",ee,[i(d,{id:"introducing-the-qualiton-300b",src:"/img/news/introducing-the-qualiton-300b-mq.jpg",alt:"alt-text",class:"pt-0"},{category:o(()=>e[3]||(e[3]=[a(" NEW PRODUCT ")])),title:o(()=>e[4]||(e[4]=[a(" Introducing the Qualiton 300B ")])),date:o(()=>e[5]||(e[5]=[a(" April 30, 2024 ")])),content:o(()=>e[6]||(e[6]=[t("p",{class:"leading-relaxed"}," Today, we proudly unveil the latest addition to our product lineup: the Qualiton 300B, an integrated stereo amplifier delivering 2 x 25 Watts output power. Built around the captivating sound character of 300B power tubes, this amplifier harmoniously blends our classic heritage with modern details. It features refined vacuum tube circuits, which we have enhanced with several additional functionalities, including the Automatic Bias System, Filament Soft-Start, Relay Controlled Input Selection and Volume – just to name a few. Our sonic vision was clear: to create a smooth, musical, and well-balanced vacuum tube amplifier that excels across the entire audio frequency spectrum. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," We invite you to experience the Qualiton 300B firsthand by visiting our booth F13 in Halle 2 between May 9th and 12th at the HIGH END 2024 exhibition in Munich. Additionally, don’t miss the opportunity to explore the hORNS Speakers' room F231a in Atrium 4.2 — where the magic of the Qualiton 300B comes alive. ",-1)])),_:1}),i(d,{id:"a75-positive-feedback",src:"/img/news/a75-positive-feedback.jpg",alt:"alt-text","text-order":"lg:order-2","img-order":"lg:order-1",class:"pt-0"},{category:o(()=>e[7]||(e[7]=[a(" REVIEW ")])),title:o(()=>e[8]||(e[8]=[a(" Qualiton A75 - Positive Feedback review ")])),date:o(()=>e[9]||(e[9]=[a(" January 24, 2024 ")])),content:o(()=>[e[11]||(e[11]=t("q",{class:"leading-relaxed italic"}," When I receive a review component, I start with no tweaks and plunk it beside the component it is replacing. Trying for a tabula rasa, I just plug it in and listen like a cello string, what resonates, what does the component bring, what insight does it provide? Does it excite me or am I bored? Sometimes impressions are equipment related and sometimes they're about obvious musical qualities. (...) ",-1)),e[12]||(e[12]=t("br",null,null,-1)),e[13]||(e[13]=t("br",null,null,-1)),t("p",te,[i(h,{to:"https://positive-feedback.com/reviews/hardware-reviews/audio-hungary-qualiton-a75-integrated-amplifier/",target:"_blank"},{default:o(()=>e[10]||(e[10]=[t("span",{class:"text-blue-600"},"Read the whole review.",-1)])),_:1})])]),_:1}),i(d,{id:"a75-hifi-knights",src:"/img/news/a75-hifi-knights.jpg",alt:"alt-text","text-order":"lg:order-2","img-order":"lg:order-1",class:"pt-0"},{category:o(()=>e[14]||(e[14]=[a(" REVIEW ")])),title:o(()=>e[15]||(e[15]=[a(" Qualiton A75 - Hifi Knights review ")])),date:o(()=>e[16]||(e[16]=[a(" January 1, 2024 ")])),content:o(()=>[e[18]||(e[18]=t("q",{class:"leading-relaxed italic"}," A not-too-big, sleek tube integrated amplifier offering enough power to drive most speakers, and a bonus feature allowing users to use various tube types. All that for a reasonable price – can it be done? The makers of the Audio Hungary Qualiton A75 claim it can. Let’s check it out. (...) ",-1)),e[19]||(e[19]=t("br",null,null,-1)),e[20]||(e[20]=t("br",null,null,-1)),t("p",oe,[i(h,{to:"https://hifiknights.com/reviews/amplifiers/qualiton-a75/",target:"_blank"},{default:o(()=>e[17]||(e[17]=[t("span",{class:"text-blue-600"},"Read the whole review.",-1)])),_:1})])]),_:1}),i(d,{id:"c200-release",src:"/img/news/c200-release.jpg",alt:"alt-text","text-order":"lg:order-2","img-order":"lg:order-1",class:"pt-0"},{category:o(()=>e[21]||(e[21]=[a(" NEW PRODUCT ")])),title:o(()=>e[22]||(e[22]=[a(" Qualiton C200 - New Preamplifier introduced to Classic Series ")])),date:o(()=>e[23]||(e[23]=[a(" September 12, 2022 ")])),content:o(()=>e[24]||(e[24]=[t("p",{class:"leading-relaxed"}," To complete the line-up of our Classic Series, we designed a true all-rounder preamplifier, with beautifully balanced sound character, and one of the finest vintage tubes available, the Tungsram ECC83. The C200 uses 8 of them, so each output gets the flavour of these exceptional tubes. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," As always, the most important aspect of the design process was to meet the widest possible range of user needs. Starting at the inputs, we have 4 UNBALANCED and 2 BALANCED line level inputs and a MM PHONO level input available. On the output side, the C200 is equipped with 2 UNBALANCED line level outputs (one of which can be connected to a subwoofer), we also have a BALANCED line level output and a HEADPHONE connection for dynamic headphones. With this set of I/O ports, users have plenty of options to connect the C200 into their system. And best of all, each output port carries the characteristics of classic Tungsram tube sound, while interference and noise levels have been reduced to the absolute minimum. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," Along with the C200, we are also introducing an updated remote control, on which, in addition to the previous VOLUME UP, VOLUME DOWN and MUTE buttons, there is also a POWER ON/STANDBY button. After pressing this button, a circuit provides 1 minute of wake-up / warm-up time for the tubes. After this time, the C200's outputs will become active and ready for use. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," The Qualiton C200 is available from our authorized distributors and dealers. For more information, please visit the product page, where you can find the technical specifications of the C200, and you can also download the User's Manual. ",-1)])),_:1}),i(d,{id:"x200-update",src:"/img/news/x200-update.jpg",alt:"alt-text","text-order":"lg:order-2","img-order":"lg:order-1",class:"pt-0"},{category:o(()=>e[25]||(e[25]=[a(" PRODUCT UPDATE ")])),title:o(()=>e[26]||(e[26]=[a(" Qualiton X200 gets a major update ")])),date:o(()=>e[27]||(e[27]=[a(" September 12, 2022 ")])),content:o(()=>e[28]||(e[28]=[t("p",{class:"leading-relaxed"}," Our popular X200 integrated amplifier just keeps getting better and better, as it now receives the latest version of our sophisticated Automatic Bias Control System introduced in the P200 earlier this year. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," This circuit continuously monitors the behavior of each tube and regulates the bias voltages accordingly, ensuring the smallest possible output voltage noise while guaranteeing the highest degree of linearity of the output stage. It also prevents the sensitive, high permeability transformer cores from saturating by precisely equalizing the quiescent currents of the power tubes. Finally, the bias system has a built-in soft-start function too, which prevents the tubes from drawing excessive current during start-up and eliminates pops and noises during power-up. The above means that no further adjustment is required once the electron tubes supplied with the unit have been installed, the circuit automatically takes care of everything. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," The updated devices are now available to order from our authorized distributors and dealers. ",-1)])),_:1}),i(d,{id:"p200-release",src:"/img/news/p200-release.jpg",alt:"alt-text","text-order":"lg:order-2","img-order":"lg:order-1",class:"pt-0"},{category:o(()=>e[29]||(e[29]=[a(" NEW PRODUCT ")])),title:o(()=>e[30]||(e[30]=[a(" Qualiton P200 Classic Power Amplifier debuted ")])),date:o(()=>e[31]||(e[31]=[a(" September 9, 2022 ")])),content:o(()=>e[32]||(e[32]=[t("p",{class:"leading-relaxed"}," The line-up of our Classic Series amplifiers has been expanded with a new member, the Qualiton P200 power amplifier, which was presented to the public for the first time at the HIGH END Munich 2022 exhibition. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," The P200 is a versatile, high power amplifier, built on Tung-Sol KT120 (optionally KT150) beam tetrodes and our latest transformer designs. The P200 features the latest version of our sophisticated Automatic Bias Control System for the four power tubes too. This circuit continuously monitors the behavior of each tube and regulates the bias voltages accordingly, ensuring the smallest possible output voltage noise while guaranteeing the highest degree of linearity of the output stage. It also prevents the sensitive, high permeability transformer cores from saturating by precisely equalizing the quiescent currents of the power tubes. Finally, the bias system has a built-in soft-start function too, which prevents the tubes from drawing excessive current during start-up and eliminates pops and noises during power-up. The above means that no further adjustment is required once the electron tubes supplied with the unit have been installed, the circuit automatically takes care of everything. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," The amp has two distinct modes of operation, STEREO and BRIDGE mode. You can change the operating mode by reconfiguring the output connections, then use a STEREO INPUT /BRIDGE INPUT selector switch to select the input source for the chosen operation mode. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," In STEREO mode the P200 can be used as a conventional stereo power amplifier which has two unbalanced outputs for 4 or 8 Ohm speakers, with a maximum available output power of 2 x 100 W. In this mode you can connect an UNBALANCED or BALANCED stereo signal source to the amplifier. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," In BRIDGE mode the P200 can be used as a monoblock power amplifier with a BALANCED input. In this mode you can concentrate the total output power of the P200 into a single channel: the two channels of P200 are fed from a monaural, symmetrical audio signal (BRIDGE input), and a single 8 Ohm loudspeaker can be connected between the two amplifier outputs, bridging the output terminals. The maximum available bridged, monaural output power is 1 x 200 W. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," The Qualiton P200 is available from our authorized distributors and dealers. For more information, please visit the product page, where you can find the technical specifications of the P200, and you can also download the User's Manual. ",-1)])),_:1}),i(d,{id:"x200-release",src:"/img/news/x200-release.jpg",alt:"alt-text","text-order":"lg:order-2","img-order":"lg:order-1",class:"pt-0"},{category:o(()=>e[33]||(e[33]=[a(" NEW PRODUCT ")])),title:o(()=>e[34]||(e[34]=[a(" New product, Qualiton X200 unveiled. ")])),date:o(()=>e[35]||(e[35]=[a(" December 21, 2020 ")])),content:o(()=>e[36]||(e[36]=[t("p",{class:"leading-relaxed"}," We are excited to announce that the latest member of our Qualiton Classic Series, the Qualiton X200 Integrated Stereo Power Amplifier is finally here and ready to production. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," The Qualiton X200 is designed to serve analog enthusiasts who need a combination of a high-performance vacuum tube power amplifier and a versatile preamplifier, along with sophisticated technical details, built into a single chassis. In this way, perfect matching is achieved - both sonically and technically - between the main signal processing sections. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," The most important aspect of the design process was to meet the widest possible range of user needs in a compact footprint. All internal circuits were designed from scratch, avoiding the usual clichés throughout, to create a complete all-rounder. The X200 can be used as a separate preamplifier, as an integrated power amplifier, as a stand-alone power amplifier with direct inputs, or as a headphone amplifier, but other configurations are possible. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," The low noise analog front-end built around a wideband and transparent circuit and features a phono preamp with enhanced precision too. Line level and subwoofer outputs are absolute necessary in this category, these ports are included on the back. We've added a real specialty too: a built-in, studio grade Parallel Equalizer. This kind of tools is primarily used as a master channel effect in recording studios, to bring fresh air into the mix, as a finishing touch. We've found that this effect can also be a huge help at home as well, as it can breath new life into certain, not so vivid records. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," The balanced power amp is based on KT120 (optionally KT150) beam tetrodes and our latest, fully symmetrical output transformer design. Due to the symmetrical circuitry, we were able to further reduce the output noise of the output stage. In addition, our new BIAS section on the front panel makes it really easy to check and fine-tune the bias levels of the output tubes. ",-1),t("br",null,null,-1),t("p",{class:"leading-relaxed"}," That's all for now, please don't forget to share your opinion with us. Stay tuned, we'll be back with more details in the next few weeks. ",-1)])),_:1})])])])])}}};export{de as default};
