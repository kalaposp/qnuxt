import{u as B}from"./B0426hed.js";import{I as x}from"./HLYzEpub.js";import{_ as P}from"./BVAq7uT2.js";import{s as O,o as h,c as g,b as s,a as t,n as l,w as o,g as m,d as e,i as I,f as S,j as H,x as E,F as k,r as q,k as L,t as $,u as r}from"./D4g3NPWE.js";import{_ as z}from"./EDF7rtGb.js";import{_ as V}from"./a3HkS3Bd.js";import{_}from"./IDekIkCF.js";import{Y as F,G as D,V as A}from"./CprSPefe.js";import{h as C,S as M}from"./De5OIsVa.js";import"./BY1FXRTD.js";const R=["id"],W=O({__name:"ModelsImage",props:{id:{type:String,required:!0},src:{type:String,required:!0},alt:{type:String,required:!0}},setup(a){return(u,f)=>{const d=P;return h(),g("div",{id:a.id,class:"grid p-4 py-0 my-4 sm:grid-cols-1 max-w-7xl mx-auto bg-gray-50 border-none border-gray-200"},[s(d,{class:"rounded-xl shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5",src:a.src,alt:a.alt,loading:"lazy"},null,8,["src","alt"])],8,R)}}}),U=["id"],N={class:"rounded-xl max-w-7xl p-0 mx-auto bg-blue-200"},j={__name:"ModelsOverviewCard",props:{id:{type:String,default:"overview"},startColor:{type:String,default:"from-blue-100"},endColor:{type:String,default:"to-orange-100"},titleColor:{type:String,default:"text-gray-900"},contentColor:{type:String,default:"text-gray-500"}},setup(a){return(u,f)=>{const d=_;return h(),g("div",{id:a.id,class:"p-4 py-0 my-4 bg-gray-50 max-w-7xl mx-auto border-none border-gray-200"},[t("div",N,[t("div",{class:l([a.startColor,a.endColor,"bg-gradient-to-tr rounded-xl py-2 sm:py-8 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"])},[s(d,{to:`#${a.id}`},{default:o(()=>[t("h2",{class:l([a.titleColor,"text-xl lg:text-2xl p-2 lg:p-2 pt-12 lg:pt-12 px-10 lg:px-4 items-center text-center mx-auto flex font-bold tracking-normal max-w-4xl"])},[m(u.$slots,"heading-2",{},()=>[e(" Fallback Text. ")])],2)]),_:3},8,["to"]),t("div",{class:l([a.contentColor,"text-sm sm:text-base leading-relaxed lg:leading-relaxed font-normal rounded-3xl p-2 lg:p-2 pb-16 lg:pb-16 px-10 lg:px-4 max-w-4xl justify-center items-center text-left mx-auto"])},[m(u.$slots,"overview",{},()=>[e(" Fallback text. ")])],2)],2)])],8,U)}}},G={class:"bg-gray-50 max-w-7xl p-4 py-0 my-4 mx-auto border-none border-gray-200"},Q=["id"],Y={class:"text-2xl lg:text-3xl font-bold max-w-4xl flex mx-auto text-left pt-8 lg:pt-16 pb-6 lg:pb-12 px-4 text-gray-700"},J={class:"flex mx-auto w-full max-w-4xl rounded-xl bg-gray-50"},X={class:"text-lg lg:text-xl font-bold max-w-4xl flex text-left pt-4 lg:pt-4 pb-4 lg:pb-4 px-4 text-gray-700"},K={class:"pt-4 lg:pt-4 pb-10"},Z=t("hr",{class:"max-w-4xl mx-auto flex border-gray-200"},null,-1),tt={class:"max-w-4xl py-4 mx-auto"},et=["innerHTML"],ot=["innerHTML"],at={__name:"ModelsTechSpecsTable",props:{id:{type:String,default:"tech-specs-table"},backgroundColor:{type:String,default:"bg-none"},hoverColor:{type:String,default:"hover:bg-gray-100"},dataPath:{type:String,required:!0}},setup(a){const u=a,{dataPath:f}=I(u),d=S([]);H(async()=>{const{app:c}=L(),i=`${c.baseURL}${f.value}`,n=await fetch(i);d.value=await n.json()});const b=E(()=>{const c={};return d.value.forEach(i=>{const n=i.category;c[n]||(c[n]=[]),c[n].push(i)}),c}),p=c=>c.replace(/\n/g,"<br>");return(c,i)=>{const n=_;return h(),g("section",G,[t("div",{id:a.id,class:l([a.backgroundColor,"rounded-3xl py-8 sm:py-10 px-8 sm:px-14 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"])},[s(n,{to:`#${a.id}`},{default:o(()=>[t("div",Y,[m(c.$slots,"title",{},()=>[e(" Fallback text. ")])])]),_:3},8,["to"]),(h(!0),g(k,null,q(b.value,(v,w)=>(h(),g(k,{key:w},[t("div",J,[t("h2",X,$(w),1)]),t("div",K,[(h(!0),g(k,null,q(v,T=>(h(),g("div",{key:T.rowheader},[Z,t("div",tt,[t("div",{class:l([a.hoverColor,"max-w-4xl grid gap-0 lg:grid-cols-12 mx-auto transition rounded-xl"])},[t("div",{class:"lg:col-span-4 font-semibold text-base h-auto px-4 pt-4 lg:pt-8 pb-1 lg:pb-8 order-1 text-gray-500",innerHTML:p(T.rowheader)},null,8,et),t("div",{class:"lg:col-span-8 text-sm h-auto px-4 pt-1 lg:pt-8 pb-4 lg:pb-8 order-2 text-gray-500",innerHTML:p(T.value)},null,8,ot)],2)])]))),128))])],64))),128))],10,Q)])}}},st=["id"],it={class:"text-2xl lg:text-3xl font-bold max-w-4xl flex mx-auto text-left pt-8 lg:pt-16 pb-0 lg:pb-0 px-4 mb-4 text-gray-700"},lt={class:"text-sm lg:text-base font-normal max-w-4xl flex mx-auto text-left pt-4 lg:pt-4 pb-4 lg:pb-4 px-4 mb-4 lg:mb-10 text-gray-700"},rt={__name:"ModelsInTheBox",props:{id:{type:String,default:"in-the-box"},backgroundColor:{type:String,default:"bg-none"}},setup(a){return(u,f)=>{const d=_;return h(),g("section",{id:a.id,class:"bg-gray-50 max-w-7xl p-4 py-0 my-4 mx-auto border-none border-gray-200"},[t("div",{class:l([a.backgroundColor,"rounded-3xl py-8 sm:py-10 px-8 sm:px-14 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"])},[s(d,{to:`#${a.id}`},{default:o(()=>[t("div",it,[m(u.$slots,"title",{},()=>[e(" Fallback text. ")])])]),_:3},8,["to"]),t("div",lt,[m(u.$slots,"list",{},()=>[e(" Fallback text. ")])])],2)],8,st)}}},nt=["id"],ct=t("h2",{class:"sr-only"},"Downloads",-1),ut={class:"text-2xl lg:text-3xl font-bold max-w-4xl flex mx-auto text-left pt-8 lg:pt-16 pb-0 lg:pb-0 px-4 mb-4 text-gray-700"},dt={class:"grid grid-cols-1 gap-x-4 lg:gap-x-10 gap-y-4 lg:gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 max-w-4xl mx-auto p-4"},mt=["onClick"],pt={class:"flex items-center justify-between px-4"},ht={class:"flex-grow pb-8"},gt={class:"px-2 mt-8 text-lg sm:text-lg font-bold text-gray-700 text-left"},ft={class:"px-2 mt-2 text-base sm:text-base font-normal text-gray-700 text-left"},xt={class:"px-2 mt-2 text-base sm:text-base font-normal text-gray-700 text-left"},yt={class:"px-6"},bt={__name:"ModelsDownloads",props:{id:{type:String,default:"downloads"},backgroundColor:{type:String,default:"bg-none"},hoverColor:{type:String,default:"hover:bg-gray-100"},dataPath:{type:String,required:!0}},setup(a){const u=a,{dataPath:f}=I(u),d=S([]);H(async()=>{const{app:p}=L(),c=`${p.baseURL}${f.value}`,i=await fetch(c);d.value=await i.json()});function b(p){const{app:c}=L(),i=`${c.baseURL}${p.pdf}`;if(!i){console.error("PDF path not found in download data");return}const n=document.createElement("a");n.href=i,n.download=`Qualiton ${p.model} ${p.category} - ${p.title}.pdf`,n.target="_blank",n.click()}return(p,c)=>{const i=_;return h(),g("section",{id:a.id,class:"bg-gray-50 max-w-7xl p-4 py-0 my-4 mx-auto border-none border-gray-200"},[t("div",{class:l([a.backgroundColor,"rounded-3xl py-8 sm:py-10 px-8 sm:px-14 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"])},[ct,s(i,{to:`#${a.id}`},{default:o(()=>[t("div",ut,[m(p.$slots,"title",{},()=>[e(" Fallback text. ")])])]),_:3},8,["to"]),t("div",dt,[(h(!0),g(k,null,q(d.value,n=>(h(),g("button",{onClick:()=>b(n),key:n.id,class:"bg-white rounded-lg border-none border-gray-200 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300 relative flex items-start group mt-0 lg:mt-0 mb-0 lg:mb-16"},[t("div",null,[t("div",pt,[t("div",ht,[t("p",gt,$(n.title),1),t("p",ft,$(n.model),1),t("p",xt,$(n.category),1)]),t("div",yt,[s(r(x),{icon:"carbon:document-pdf",class:"h-6 w-6 absolute bottom-4 right-4 group-hover:text-gray-500 transition"})])])])],8,mt))),128))])],2)],8,nt)}}},vt={class:"p-4 py-0 my-4 bg-gray-50 max-w-7xl mx-auto border-none border-gray-200"},wt={class:"grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-y-4 xl:gap-x-4"},_t={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"},Ct={class:"absolute top-0 left-0 flex flex-col text-left p-6"},kt={class:"absolute bottom-0 right-0 p-4 pr-4 pb-4"},$t=t("div",{class:"fixed inset-0 bg-black/75 backdrop-blur-xl"},null,-1),St={class:"fixed inset-0 overflow-y-auto"},Tt={class:"flex min-h-full items-center justify-center p-4 text-left"},jt={class:"max-w-3xl mx-auto px-0 py-0 sm:px-0 sm:py-0 mb-4"},qt={class:"p-4"},Lt={class:"mt-0"},Ft={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"},Dt={class:"absolute top-0 left-0 flex flex-col text-left p-6"},At={class:"absolute bottom-0 right-0 p-4 pr-4 pb-4"},Mt=t("div",{class:"fixed inset-0 bg-black/75 backdrop-blur-xl"},null,-1),Pt={class:"fixed inset-0 overflow-y-auto"},It={class:"flex min-h-full items-center justify-center p-4 text-left"},Ht={class:"max-w-3xl mx-auto px-0 py-0 sm:px-0 sm:py-0 mb-4"},Bt={class:"p-4"},Ot={class:"mt-0"},y={__name:"ModelsFeatureDuo",props:{id1:{type:String,default:"id1"},src1:{type:String,required:!0},alt1:{type:String,required:!0},startColor1:{type:String,default:"from-blue-100"},endColor1:{type:String,default:"to-red-100"},titleColor1:{type:String,default:"text-gray-900"},contentColor1:{type:String,default:"text-gray-600"},buttonColor1:{type:String,default:"text-gray-500"},buttonHoverColor1:{type:String,default:"hover:text-gray-300"},id2:{type:String,default:"id2"},src2:{type:String,required:!0},alt2:{type:String,required:!0},startColor2:{type:String,default:"from-blue-100"},endColor2:{type:String,default:"to-red-100"},titleColor2:{type:String,default:"text-gray-900"},contentColor2:{type:String,default:"text-gray-600"},buttonColor2:{type:String,default:"text-gray-500"},buttonHoverColor2:{type:String,default:"hover:text-gray-300"}},setup(a){const u=S(!1),f=S(!1);function d(){u.value=!1}function b(){f.value=!1}function p(){u.value=!0}function c(){f.value=!0}return(i,n)=>{const v=P,w=_;return h(),g("div",vt,[t("div",wt,[s(w,{id:a.id1,to:`#${a.id1}`,onClick:p,class:"group"},{default:o(()=>[t("div",_t,[s(v,{src:a.src1,alt:a.alt1,class:"h-full w-full object-cover object-center group-hover:opacity-90 aspect-[16/9] transition duration-300 ease-in group-hover:scale-105"},null,8,["src","alt"]),t("div",Ct,[t("h3",{class:l([a.titleColor1,"text-base sm:text-base md:text-lg font-semibold"])},[m(i.$slots,"title-1",{},()=>[e(" Fallback Text. ")])],2),t("p",{class:l([a.contentColor1,"text-sm sm:text-sm md:text-base font-normal tracking-normal"])},[m(i.$slots,"summary-1",{},()=>[e(" Fallback Text. ")])],2)]),t("div",kt,[s(r(x),{icon:"carbon:add-filled",class:l([a.buttonColor1,a.buttonHoverColor1,"h-8 w-8 transition duration-300"])},null,8,["class"])])])]),_:3},8,["id","to"]),s(r(M),{appear:"",show:u.value,as:"template"},{default:o(()=>[s(r(F),{as:"div",onClose:d,class:"relative z-10"},{default:o(()=>[s(r(C),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:o(()=>[$t]),_:1}),t("div",St,[t("div",Tt,[s(r(C),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:o(()=>[s(r(D),{class:l([a.startColor1,a.endColor1,"bg-gradient-to-tr w-full max-w-3xl transform overflow-hidden rounded-xl p-0 pt-0 sm:pt-0 pb-16 text-left align-middle shadow-xl transition-all relative"])},{default:o(()=>[t("div",jt,[s(v,{src:a.src1,alt:a.alt1,class:"rounded-t-xl h-full w-full object-cover object-center relative group-hover:opacity-90 transition"},null,8,["src","alt"])]),t("div",qt,[s(r(A),{as:"h3",class:l([a.titleColor1,"text-lg sm:text-xl font-bold leading-6 max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-3"])},{default:o(()=>[m(i.$slots,"title-1",{},()=>[e(" Fallback Text. ")])]),_:3},8,["class"]),t("div",Lt,[t("p",{class:l([a.contentColor1,"text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-2"])},[m(i.$slots,"content-1",{},()=>[e(" Fallback text. ")])],2)]),t("button",{type:"button",class:"absolute bottom-0 right-0 p-4",onClick:d},[s(r(x),{icon:"carbon:close-filled",class:l([a.buttonColor1,a.buttonHoverColor1,"h-8 w-8"]),"aria-hidden":"true"},null,8,["class"])])])]),_:3},8,["class"])]),_:3})])])]),_:3})]),_:3},8,["show"]),s(w,{id:a.id2,to:`#${a.id2}`,onClick:c,class:"group"},{default:o(()=>[t("div",Ft,[s(v,{src:a.src2,alt:a.alt2,class:"h-full w-full object-cover object-center group-hover:opacity-90 aspect-[16/9] transition duration-300 ease-in group-hover:scale-105"},null,8,["src","alt"]),t("div",Dt,[t("h3",{class:l([a.titleColor2,"text-base sm:text-base md:text-lg font-semibold"])},[m(i.$slots,"title-2",{},()=>[e(" Fallback Text. ")])],2),t("p",{class:l([a.contentColor2,"text-sm sm:text-sm md:text-base font-normal tracking-normal"])},[m(i.$slots,"summary-2",{},()=>[e(" Fallback Text. ")])],2)]),t("div",At,[s(r(x),{icon:"carbon:add-filled",class:l([a.buttonColor2,a.buttonHoverColor2,"h-8 w-8 transition duration-300"])},null,8,["class"])])])]),_:3},8,["id","to"]),s(r(M),{appear:"",show:f.value,as:"template"},{default:o(()=>[s(r(F),{as:"div",onClose:b,class:"relative z-10"},{default:o(()=>[s(r(C),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:o(()=>[Mt]),_:1}),t("div",Pt,[t("div",It,[s(r(C),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:o(()=>[s(r(D),{class:l([a.startColor2,a.endColor2,"bg-gradient-to-tr w-full max-w-3xl transform overflow-hidden rounded-lg p-0 pt-0 sm:pt-0 pb-16 text-left align-middle shadow-xl transition-all relative"])},{default:o(()=>[t("div",Ht,[s(v,{src:a.src2,alt:a.alt2,class:"rounded-t-xl h-full w-full object-cover object-center relative group-hover:opacity-90 transition"},null,8,["src","alt"])]),t("div",Bt,[s(r(A),{as:"h3",class:l([a.titleColor2,"text-lg sm:text-xl font-bold leading-6 max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-3"])},{default:o(()=>[m(i.$slots,"title-2",{},()=>[e(" Fallback Text. ")])]),_:3},8,["class"]),t("div",Ot,[t("p",{class:l([a.contentColor2,"text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-2"])},[m(i.$slots,"content-2",{},()=>[e(" Fallback text. ")])],2)]),t("button",{type:"button",class:"absolute bottom-0 right-0 p-4",onClick:b},[s(r(x),{icon:"carbon:close-filled",class:l([a.buttonColor2,a.buttonHoverColor2,"h-8 w-8"]),"aria-hidden":"true"},null,8,["class"])])])]),_:3},8,["class"])]),_:3})])])]),_:3})]),_:3},8,["show"])])])}}},Et=t("div",null,[t("p",{class:"mt-2"},"In terms of audio design, we firmly believe that:"),t("ul",{style:{"list-style-type":"disc"},class:"mx-10"},[t("li",{class:"my-4 px-2"},"A really good tube amplifier should be compatible with as many loudspeakers as possible."),t("li",{class:"my-2 px-2"},"A well-designed tube amplifier should exhibit Total Harmonic Distortion (THD) below 0.5% across the entire power spectrum, from milliwatts to rated power, spanning 20 Hz to 20 kHz."),t("li",{class:"my-2 px-2"},"Ideally, the THD vs. Frequency plot should remain flat when measured at a fixed output power."),t("li",{class:"my-2 px-2"},"The transient response should remain fast and controlled throughout the entire audio range, which goes hand in hand with the frequency response being wide and flat."),t("li",{class:"my-2 px-2"},"A tube amplifier can have low noise and an exceptional signal-to-noise ratio."),t("li",{class:"my-2 px-2"},"Thoughtful work, good technical parameters and excellent sound quality can coexist in a high-end tube amplifier."),t("li",{class:"my-2 px-2"},"In the preamplifier and driver sections, the 12AX7 and 12AT7 tubes play a crucial role in achieving these goals. Furthermore, their DC-stabilized filament supply and circuits with low offset and stable DC operating points ensure resilience against parameter variations.")])],-1),zt=t("ul",{style:{"list-style-type":"disc"},class:"mx-10"},[t("li",{class:"my-4 px-2"},"The amplifier is equipped with a practical protective cover that serves a dual purpose: it shields the vacuum tubes from physical damage and protects the user from the tubes’ hot surface."),t("li",{class:"my-2 px-2"},"Furthermore, we have implemented mechanical protection on the vacuum tube sockets, preventing the expensive power tubes from being damaged due to possible incorrect installation."),t("li",{class:"my-2 px-2"},"The amplifier’s turn-on and turn-off sequencing circuit is designed to eliminate any unwanted pops and noises. The circuit ensures that the speakers are only connected to the outputs after the start-up time has elapsed. It actively monitors the presence of mains voltage, and if it detects an absence, it swiftly disconnects the loudspeakers from the output terminals. When turning off the amplifier, it disconnects the speakers first. This thoughtful design enhances the overall user experience and protects your audio equipment.")],-1),Vt=t("ul",{style:{"list-style-type":"disc"},class:"mx-10"},[t("li",{class:"my-4 px-2"},[e("Tested and Selected Vacuum Tubes: "),t("br"),e(" The power tubes in all our amplifiers come in matched quads. The preamp tubes are selected for low noise, symmetry and minimum distortion.")]),t("li",{class:"my-2 px-2"},[e("Gold-Plated Ceramic Tube Sockets: "),t("br"),e(" Ensuring reliable connections.")]),t("li",{class:"my-2 px-2"},[e("Gold-Plated Audio Terminals: "),t("br"),e(" Enhancing signal transmission quality.")]),t("li",{class:"my-2 px-2"},[e("Film Capacitors: "),t("br"),e(" We exclusively use film capacitors in our audio circuits for optimal performance.")]),t("li",{class:"my-2 px-2"},[e("Ceramic Composition Resistors: "),t("br"),e(" These resistors are placed in critical positions to enhance reliability.")]),t("li",{class:"my-2 px-2"},[e("Long-Life, High-Temperature-Tolerant Capacitors: "),t("br"),e(" Employed in our power supplies to withstand demanding conditions.")]),t("li",{class:"my-2 px-2"},[e("Mains Filtering: "),t("br"),e(" We use mains filtering on the primary side of the power transformers, with the purpose of filtering out any incoming interference that may be present on the powerline.")])],-1),Rt={class:"flex flex-wrap items-center text-left justify-start py-2 gap-4"},Wt={class:"flex flex-wrap items-center text-left justify-start py-2 gap-4"},Ut=t("div",{class:"prose"},[t("ul",{style:{"list-style-type":"disc"}},[t("li",null,"Qualiton 300B Integrated Amplifier"),t("li",null,"Remote Control"),t("li",null,"2 x 12AX7EH Gold vacuum tubes"),t("li",null,"4 x 12AT7EH Gold vacuum tubes"),t("li",null,"4 x 300B EH vacuum tubes"),t("li",null,"Standard Mains Cable"),t("li",null,"PH2 Phillips Screwdriver"),t("li",null,"Pair of Gloves"),t("li",null,"User's Manual")])],-1),Nt={class:"flex flex-wrap items-center text-left justify-start py-2 gap-4"},ae={__name:"index",setup(a){return B({title:"Qualiton | 300B Integrated Amplifier"}),(u,f)=>(h(),g("div",null,[s(z,{id:"300b-bar",path:"./300b"},{heading:o(()=>[e(" 300B Integrated Amplifier ")]),_:1}),s(V,{id:"title"},{title:o(()=>[e(" 300B Integrated Amplifier ")]),subtitle:o(()=>[e(" Timeless sound, natural beauty. ")]),_:1}),s(W,{id:"a50i-mq",src:"/img/300b/a50i-mq.jpg",alt:"300b-hero"}),s(j,{id:"overview","start-color":"from-blue-50","end-color":"to-orange-50","title-color":"text-gray-900","content-color":"text-gray-600"},{"heading-2":o(()=>[e(" Overview ")]),overview:o(()=>[e(" The Qualiton 300B is an integrated stereo amplifier with 2 x 25 Watts output power, built around the captivating sound character of 300B power tubes. This amplifier harmoniously blends our classic heritage with modern details: it features refined vacuum tube circuits, which we have enhanced with several additional functionalities. In shaping the overall sound character, our primary goal was to move away from the pronounced coloration often associated with amplifiers utilizing the 300B tube. Instead, we envisioned a smooth, musical and balanced vacuum tube amplifier that excels across the entire audio frequency range. ")]),_:1}),s(y,{id1:"powered-by-300b",src1:"/img/300b/a50i-mq.jpg",alt1:"alt-text","start-color-1":"from-gray-500","end-color-1":"to-black","title-color-1":"text-gray-200","content-color-1":"text-gray-200","button-color-1":"text-gray-200","button-hover-color-1":"hover:text-gray-50",id2:"custom-output-transformers",src2:"/img/dummy/dummy-white-1x1-no-text.jpg",alt2:"alt-text","start-color-2":"from-white","end-color-2":"to-gray-200","title-color-2":"text-gray-700","content-color-2":"text-gray-700","button-color-2":"text-gray-700","button-hover-color-2":"hover:text-gray-500"},{"title-1":o(()=>[e(" Powered by 300B ")]),"summary-1":o(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-1":o(()=>[e(" The 300B is a directly heated power triode that hardly needs an introduction. Originally developed by Western Electric in the mid-1930s for amplifying audio in movie theaters, it later became a favorite among audiophiles and one of the most successful vacuum tubes in history. Its outstanding sonic properties led us to name our top-of-the-line integrated amplifier after this phenomenal power tube. Its high linearity and low distortion serve as the perfect basis for the amplifier's power block, in which we combine it with our own custom output transformer for excellent low and high frequency behavior. Additionally, we have integrated the newest iteration of our Automatic Bias System for continuous and precise control of the quiescent currents, providing a seamless user experience. ")]),"title-2":o(()=>[e(" Custom Output Transformers ")]),"summary-2":o(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-2":o(()=>[e(" The transformers of our amplifiers are custom-designed and built in our in-house transformer workshop. Our output transformers are constructed using high-permeability, large cross-section toroidal magnetic cores, which undergo initial impregnation during the production process. Following this, the winding process begins, utilizing a multi-layered, sectioned, and specially arranged winding configuration. This meticulous design ensures optimal performance across both low and high frequencies. Once the winding is complete, the transformers are encased in metal shielding cans to minimize electromagnetic interference. Finally, they are potted using an epoxy compound to eliminate mechanical vibrations and associated noises. ")]),_:1}),s(y,{id1:"custom-power-transformer",src1:"/img/dummy/dummy-white-1x1-no-text.jpg",alt1:"alt-text",id2:"automatic-bias-system",src2:"/img/dummy/dummy-white-1x1-no-text.jpg",alt2:"alt-text"},{"title-1":o(()=>[e(" Custom Power Transformer ")]),"summary-1":o(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-1":o(()=>[e(" Just like our output transformers, our power transformers are also custom-designed and built in our in-house transformer workshop. We manufacture them with the same precision and attention to details: the high-permeability, large cross-section toroidal cores are also impregnated, and then the winding process follows. The parameters of the windings are designed to avoid saturation of the magnetic core and to ensure efficient operation even under heavy load conditions. It is important to note that we use double electromagnetic shielding for our power transformers. Finally, we employ the same epoxy compound used to pot the output transformers to eliminate mechanical vibrations and associated noises. ")]),"title-2":o(()=>[e(" Automatic Bias System ")]),"summary-2":o(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-2":o(()=>[e(" This circuit continuously monitors the behavior of each tube and regulates the bias voltages accordingly, ensuring the smallest possible output voltage noise while guaranteeing the highest degree of linearity of the output stage. Additionally, it prevents the sensitive, high-permeability output transformer cores from saturating by precisely equalizing the quiescent currents of the power tubes. Furthermore, the bias system incorporates a built-in soft-start function, which prevents the tubes from drawing excessive current during start-up and eliminates pops and noises. The result is that no further adjustment is required once the electron tubes supplied with the unit have been installed; the Automatic Bias System takes care of everything. ")]),_:1}),s(y,{id1:"filament-soft-start",src1:"/img/dummy/dummy-white-1x1-no-text.jpg",alt1:"alt-text",id2:"highly-optimized-layout",src2:"/img/dummy/dummy-white-1x1-no-text.jpg",alt2:"alt-text"},{"title-1":o(()=>[e(" Filament Soft Start ")]),"summary-1":o(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-1":o(()=>[e(" To significantly extend the lifetime of the power tubes, we have implemented the Filament Soft-Start feature, which limits the current flowing through the heating filaments to a safe level during start-up when the tubes are cold. The transient current of a 300B's cold filament can exceed eight times the nominal heating current, which poses a risk of damaging the expensive power tubes in a short time. Therefore, each of the filaments of the 300B's is fed from its own stabilized DC power supply, and the soft-start circuit ensures that the transient current in each filament remains well below 2 Amperes throughout start-up, providing sufficient protection for the tubes. ")]),"title-2":o(()=>[e(" Highly Optimized Layout ")]),"summary-2":o(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-2":o(()=>[e(" During the design phase, a significant amount of engineering time was devoted to the layout details of the whole integrated amplifier. Our top priority was to maximize the signal-to-noise ratio and completely eliminate mains related signal components from the audio frequency spectrum. To achieve this, we separated the audio circuits as much as possible from the power supplies that cause the most electromagnetic interference. Additionally, we repackaged a substantial portion of the internal structure of the amplifier. By utilizing our highest-quality printed circuit boards, we have created a modular, robust, and high-performance layout. ")]),_:1}),s(j,{id:"pragmatic-audio-design","start-color":"from-blue-50","end-color":"to-orange-50","title-color":"text-gray-900","content-color":"text-gray-600"},{"heading-2":o(()=>[e(" Pragmatic Audio Design ")]),overview:o(()=>[Et]),_:1}),s(y,{id1:"input-selection",src1:"/img/dummy/dummy-white-1x1-no-text.jpg",alt1:"alt-text",id2:"volume-control",src2:"/img/dummy/dummy-white-1x1-no-text.jpg",alt2:"alt-text"},{"title-1":o(()=>[e(" Relay-Controlled Input Selection ")]),"summary-1":o(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-1":o(()=>[e(" The amplifier features a total of five analog inputs: four unbalanced and one balanced. Selection between these inputs is accomplished using precision, low-power, ultra-miniature Japanese relays with ultra-low contact resistance gold overlay silver contacts, all of which are controlled by a microprocessor. The front panel Status Display indicates the currently active or inactive inputs. ")]),"title-2":o(()=>[e(" Relay-Controlled Volume ")]),"summary-2":o(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-2":o(()=>[e(" Our 100-step relay-controlled stereo attenuator features 25 microprocessor-controlled signal relays that switch a total of 48 precision metal film resistors. Programmed with a custom attenuating characteristic, it enables fine adjustments across the entire operating range of the volume control. At position 0, it is completely muted. The stereo tracking is exceptionally accurate. The signal relays are precision Japanese-made low-power types, featuring ultra-low contact resistance gold-plated contacts. ")]),_:1}),s(y,{id1:"multifunction-control-knob",src1:"/img/dummy/dummy-white-1x1-no-text.jpg",alt1:"alt-text",id2:"remote-control",src2:"/img/dummy/dummy-white-1x1-no-text.jpg",alt2:"alt-text"},{"title-1":o(()=>[e(" Multifunction Control Knob ")]),"summary-1":o(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-1":o(()=>[e(" We have updated our front panel rotary knob, which now serves multiple functions. In addition to adjusting the volume, it can power the device on and off from stand-by mode. Furthermore, when the amplifier is active, it also acts as an Input Selector. ")]),"title-2":o(()=>[e(" Remote Control ")]),"summary-2":o(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-2":o(()=>[e(" The remote control features a black anodized aluminum finish. Alongside the basic VOLUME UP and VOLUME DOWN functions, it also includes a convenient MUTE function. You can power the device on and off from stand-by mode using the POWER button. When the amplifier is active, this same POWER button also functions as an Input Selector. To return the amplifier to stand-by mode, simply long-press the POWER button. Additionally, the remote control allows you to fine-tune the brightness of the status display, with three preset levels to choose from. You can access the brightness control menu by long-pressing the MUTE button. ")]),_:1}),s(y,{id1:"status-display",src1:"/img/dummy/dummy-white-1x1-no-text.jpg",alt1:"alt-text",id2:"aesthetics",src2:"/img/dummy/dummy-white-1x1-no-text.jpg",alt2:"alt-text"},{"title-1":o(()=>[e(" Status Display ")]),"summary-1":o(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-1":o(()=>[e(" The microprocessor-based Input Selector and Volume Control System features a Status Display. The display material is scratch-resistant smoked plexiglass. By default, the top section of the Status Display indicates the volume value. During user action, the display becomes more intense, and then it dims to a lower brightness after a few seconds. Users have the option to select from three preset brightness levels. The stand-by mode's red LED is located in the lower section of the Status Display. ")]),"title-2":o(()=>[e(" Aesthetics ")]),"summary-2":o(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-2":o(()=>[e(" Our approach to the visual design centers around maintaining visual neutrality. We intentionally avoid overdesigning the appearance, aiming for aesthetic simplicity and cleanliness. Our products are not meant to be theatrical or ostentatious; rather, they seamlessly integrate into the audio system's interior without disrupting the user experience. However, we add unique touches, such as the chassis folded back at a 45-degree angle, a stainless steel logo badge, a custom rotary knob, or simply the sight of the gourgeous-looking vacuum tubes. ")]),_:1}),s(j,{id:"sound-character","start-color":"from-orange-50","end-color":"to-purple-50","title-color":"text-gray-900","content-color":"text-gray-600"},{"heading-2":o(()=>[e(" Sound Character ")]),overview:o(()=>[e(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel magna vehicula, volutpat justo a, eleifend purus. Aenean dictum faucibus orci, id accumsan purus feugiat a. Proin sagittis, augue vel laoreet pretium, nisl orci sodales justo, id venenatis erat lacus ut tellus. Praesent ullamcorper urna a lacus maximus aliquet. Donec auctor, nisl a elementum mollis, arcu neque feugiat orci, non vulputate tellus ante nec nunc. Vestibulum et ultrices ex. Maecenas ultricies neque leo, et vestibulum enim placerat vel. Nam et neque metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus volutpat diam dignissim quam aliquam, ac pretium odio aliquam. Vestibulum malesuada risus lacus. Morbi accumsan molestie felis, et pulvinar est imperdiet nec. Vestibulum eget suscipit lacus, vel ullamcorper felis. Ut tristique orci elementum, cursus leo sit amet, pretium sapien. Aliquam eget placerat mauris. ")]),_:1}),s(y,{id1:"protective-features",src1:"/img/dummy/dummy-white-1x1-no-text.jpg",alt1:"alt-text",id2:"special-components",src2:"/img/dummy/dummy-white-1x1-no-text.jpg",alt2:"alt-text"},{"title-1":o(()=>[e(" Protective Features ")]),"summary-1":o(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-1":o(()=>[zt]),"title-2":o(()=>[e(" Special Components ")]),"summary-2":o(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-2":o(()=>[Vt]),_:1}),s(at,{id:"tech-specs","data-path":"assets/data/300b/300bElectricalSpecs.json","background-color":"bg-white","hover-color":"hover:bg-gray-50"},{title:o(()=>[t("div",Rt,[e(" Tech Specs "),s(r(x),{icon:"fxemoji:memo"})])]),_:1}),s(rt,{id:"in-the-box","background-color":"bg-white"},{title:o(()=>[t("div",Wt,[e(" In the Box "),s(r(x),{icon:"emojione:package"})])]),list:o(()=>[Ut]),_:1}),s(bt,{id:"downloads","data-path":"assets/data/300b/300bDownloads.json","background-color":"bg-white","hover-color":"hover:bg-gray-100"},{title:o(()=>[t("div",Nt,[e(" Downloads "),s(r(x),{icon:"ep:download"})])]),_:1})]))}};export{ae as default};
