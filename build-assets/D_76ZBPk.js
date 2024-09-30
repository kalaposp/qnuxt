import{x as D,o as c,c as m,a as t,q as k,n as h,b as o,w as a,g as d,d as e,j as H,f as j,k as O,y as E,F as S,r as L,l as F,t as T,h as r,m as M,u as I}from"./CO27M0BJ.js";import{I as b,h as C,S as P}from"./B8E7ArIQ.js";import{_ as V}from"./C76bwupW.js";import{_ as W}from"./BrWLw2eV.js";import{_ as R}from"./Ch9zfDzi.js";import{_ as $}from"./FlwR2X9l.js";import{_ as U}from"./Dn2xOR29.js";import{Y as A,G as B,V as z}from"./DjFAYdcs.js";const G=["id"],N={class:"rounded-xl max-w-7xl p-0 mx-auto bg-none"},q={__name:"ModelsOverviewCard",props:{id:{type:String,default:"overview"},startColor:{type:String,default:"from-blue-100"},endColor:{type:String,default:"to-orange-100"},titleColor:{type:String,default:"text-gray-900"},contentColor:{type:String,default:"text-gray-500"}},setup(s){return(u,x)=>{const g=$,y=D("motion-fade-visible");return c(),m("div",{id:s.id,class:"p-4 py-0 my-4 bg-gray-100 max-w-7xl mx-auto border-none border-gray-200"},[t("div",N,[k((c(),m("div",{class:h([s.startColor,s.endColor,"bg-gradient-to-tr rounded-xl py-2 sm:py-8 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"])},[o(g,{to:`#${s.id}`},{default:a(()=>[t("h2",{class:h([s.titleColor,"text-lg sm:text-xl lg:text-2xl p-2 lg:p-2 pt-6 lg:pt-12 px-10 sm:px-16 lg:px-4 items-center text-center mx-auto flex font-bold tracking-normal max-w-4xl"])},[d(u.$slots,"heading-2",{},()=>[e(" Fallback Text. ")])],2)]),_:3},8,["to"]),t("div",{class:h([s.contentColor,"text-sm sm:text-base leading-relaxed lg:leading-relaxed font-normal rounded-3xl p-2 lg:p-2 pb-10 lg:pb-16 px-10 sm:px-16 lg:px-4 max-w-4xl justify-center items-center text-left mx-auto"])},[d(u.$slots,"overview",{},()=>[e(" Fallback text. ")])],2)],2)),[[y]])])],8,G)}}},Q={"data-aos":"fade-up",class:"bg-gray-100 max-w-7xl p-4 py-0 my-4 mx-auto border-none border-gray-200"},Y=["id"],J={class:"text-2xl lg:text-3xl font-bold max-w-4xl flex mx-auto text-left pt-8 lg:pt-16 pb-6 lg:pb-12 px-4 text-gray-700"},X={"data-aos":"fade-up",class:"flex mx-auto w-full max-w-4xl rounded-xl bg-gray-50"},K={class:"text-lg lg:text-xl font-bold max-w-4xl flex text-left pt-4 lg:pt-4 pb-4 lg:pb-4 px-4 text-gray-700"},Z={"data-aos":"fade-up",class:"pt-4 lg:pt-4 pb-10"},tt=t("hr",{class:"max-w-4xl mx-auto flex border-gray-200"},null,-1),et={class:"max-w-4xl py-4 mx-auto"},at=["innerHTML"],ot=["innerHTML"],st={__name:"ModelsTechSpecsTable",props:{id:{type:String,default:"tech-specs-table"},backgroundColor:{type:String,default:"bg-none"},hoverColor:{type:String,default:"hover:bg-gray-100"},dataPath:{type:String,required:!0}},setup(s){const u=s,{dataPath:x}=H(u),g=j([]);O(async()=>{const{app:l}=F(),i=`${l.baseURL}${x.value}`,n=await fetch(i);g.value=await n.json()});const y=E(()=>{const l={};return g.value.forEach(i=>{const n=i.category;l[n]||(l[n]=[]),l[n].push(i)}),l}),p=l=>l.replace(/\n/g,"<br>");return(l,i)=>{const n=$;return c(),m("section",Q,[t("div",{"data-aos":"fade-up",id:s.id,class:h([s.backgroundColor,"rounded-3xl py-8 sm:py-10 px-8 sm:px-14 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"])},[o(n,{to:`#${s.id}`,"data-aos":"fade-up"},{default:a(()=>[t("div",J,[d(l.$slots,"title",{},()=>[e(" Fallback text. ")])])]),_:3},8,["to"]),(c(!0),m(S,null,L(y.value,(f,_)=>(c(),m(S,{key:_},[t("div",X,[t("h2",K,T(_),1)]),t("div",Z,[(c(!0),m(S,null,L(f,w=>(c(),m("div",{key:w.rowheader},[tt,t("div",et,[t("div",{class:h([s.hoverColor,"max-w-4xl grid gap-0 lg:grid-cols-12 mx-auto transition rounded-xl"])},[t("div",{class:"lg:col-span-4 font-semibold text-base h-auto px-4 pt-4 lg:pt-8 pb-1 lg:pb-8 order-1 text-gray-500",innerHTML:p(w.rowheader)},null,8,at),t("div",{class:"lg:col-span-8 text-sm h-auto px-4 pt-1 lg:pt-8 pb-4 lg:pb-8 order-2 text-gray-500",innerHTML:p(w.value)},null,8,ot)],2)])]))),128))])],64))),128))],10,Y)])}}},it=["id"],rt={class:"text-2xl lg:text-3xl font-bold max-w-4xl flex mx-auto text-left pt-8 lg:pt-16 pb-0 lg:pb-0 px-4 mb-4 text-gray-700"},lt={class:"text-sm lg:text-base font-normal max-w-4xl flex mx-auto text-left pt-4 lg:pt-4 pb-4 lg:pb-4 px-4 mb-4 lg:mb-10 text-gray-700"},nt={__name:"ModelsInTheBox",props:{id:{type:String,default:"in-the-box"},backgroundColor:{type:String,default:"bg-none"}},setup(s){return(u,x)=>{const g=$;return c(),m("section",{"data-aos":"fade-up",id:s.id,class:"bg-gray-100 max-w-7xl p-4 py-0 my-4 mx-auto border-none border-gray-200"},[t("div",{"data-aos":"fade-up",class:h([s.backgroundColor,"rounded-3xl py-8 sm:py-10 px-8 sm:px-14 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"])},[o(g,{to:`#${s.id}`},{default:a(()=>[t("div",rt,[d(u.$slots,"title",{},()=>[e(" Fallback text. ")])])]),_:3},8,["to"]),t("div",lt,[d(u.$slots,"list",{},()=>[e(" Fallback text. ")])])],2)],8,it)}}},ct=["id"],ut=t("h2",{class:"sr-only"},"Downloads",-1),dt={class:"text-2xl lg:text-3xl font-bold max-w-4xl flex mx-auto text-left pt-8 lg:pt-16 pb-0 lg:pb-0 px-4 mb-4 text-gray-700"},mt={class:"grid grid-cols-1 gap-x-4 lg:gap-x-10 gap-y-4 lg:gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 max-w-4xl mx-auto p-4"},pt=["onClick"],ht={class:"flex items-center justify-between px-4"},gt={class:"flex-grow pb-8"},ft={class:"px-2 mt-8 text-lg sm:text-lg font-bold text-gray-700 text-left"},xt={class:"px-2 mt-2 text-base sm:text-base font-normal text-gray-700 text-left"},yt={class:"px-2 mt-2 text-base sm:text-base font-normal text-gray-700 text-left"},bt={class:"px-6"},vt={__name:"ModelsDownloads",props:{id:{type:String,default:"downloads"},backgroundColor:{type:String,default:"bg-none"},hoverColor:{type:String,default:"hover:bg-gray-100"},dataPath:{type:String,required:!0}},setup(s){const u=s,{dataPath:x}=H(u),g=j([]);O(async()=>{const{app:p}=F(),l=`${p.baseURL}${x.value}`,i=await fetch(l);g.value=await i.json()});function y(p){const{app:l}=F(),i=`${l.baseURL}${p.pdf}`;if(!i){console.error("PDF path not found in download data");return}const n=document.createElement("a");n.href=i,n.download=`Qualiton ${p.model} ${p.category} - ${p.title}.pdf`,n.target="_blank",n.click()}return(p,l)=>{const i=$,n=D("motion-fade-visible");return k((c(),m("section",{id:s.id,class:"bg-gray-100 max-w-7xl p-4 py-0 my-4 mx-auto border-none border-gray-200"},[k((c(),m("div",{class:h([s.backgroundColor,"rounded-3xl py-8 sm:py-10 px-8 sm:px-14 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"])},[ut,o(i,{to:`#${s.id}`},{default:a(()=>[t("div",dt,[d(p.$slots,"title",{},()=>[e(" Fallback text. ")])])]),_:3},8,["to"]),t("div",mt,[(c(!0),m(S,null,L(g.value,f=>(c(),m("button",{onClick:()=>y(f),key:f.id,class:"bg-white rounded-lg border-none border-gray-200 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300 relative flex items-start group mt-0 lg:mt-0 mb-0 lg:mb-16"},[t("div",null,[t("div",ht,[t("div",gt,[t("p",ft,T(f.title),1),t("p",xt,T(f.model),1),t("p",yt,T(f.category),1)]),t("div",bt,[o(r(b),{icon:"carbon:document-pdf",class:"h-6 w-6 absolute bottom-4 right-4 group-hover:text-gray-500 transition"})])])])],8,pt))),128))])],2)),[[n]])],8,ct)),[[n]])}}},wt={class:"p-4 py-0 my-4 bg-gray-100 max-w-7xl mx-auto border-none border-gray-200"},_t={class:"grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-y-4 xl:gap-x-4"},kt={class:"bg-white rounded-xl border-none border-gray-50 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"},$t={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"},Ct={class:"mx-auto flex max-w-7xl flex-row items-center justify-between p-6 lg:px-8 bg-none border-none border-gray-200","aria-label":"Global"},St={class:"flex flex-col justify-start py-2 font-normal"},Tt={class:"flex flex-wrap items-center text-center justify-end py-2 gap-x-4"},jt=t("div",{class:"fixed inset-0 bg-black/75 backdrop-blur-xl"},null,-1),qt={class:"fixed inset-0 overflow-y-auto"},Lt={class:"flex min-h-full items-center justify-center p-4 text-left"},Ft={class:"max-w-3xl mx-auto px-0 py-0 sm:px-0 sm:py-0 mb-4"},Dt={class:"p-4"},Mt={class:"mt-0"},Pt={class:"text-sm text-gray-600 sm:text-base leading-relaxed max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-2"},At={class:"bg-white rounded-xl border-none border-gray-50 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"},Bt={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"},zt={class:"mx-auto flex max-w-7xl flex-row items-center justify-between p-6 lg:px-8 bg-none border-none border-gray-200","aria-label":"Global"},Ht={class:"flex flex-col justify-start py-2 font-normal"},Ot={class:"flex flex-wrap items-center text-center justify-end py-2 gap-x-4"},Et=t("div",{class:"fixed inset-0 bg-black/75 backdrop-blur-xl"},null,-1),It={class:"fixed inset-0 overflow-y-auto"},Vt={class:"flex min-h-full items-center justify-center p-4 text-left"},Wt={class:"max-w-3xl mx-auto px-0 py-0 sm:px-0 sm:py-0 mb-4"},Rt={class:"p-4"},Ut={class:"mt-0"},Gt={class:"text-sm text-gray-600 sm:text-base leading-relaxed max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-2"},v={__name:"ModelsFeatureDuo",props:{id1:{type:String,default:"id1"},src1:{type:String,required:!0},alt1:{type:String,required:!0},startColor1:{type:String,default:"from-white"},endColor1:{type:String,default:"to-white"},titleColor1:{type:String,default:"text-gray-900"},contentColor1:{type:String,default:"text-gray-600"},buttonColor1:{type:String,default:"text-gray-900"},buttonHoverColor1:{type:String,default:"group-hover:text-gray-400"},id2:{type:String,default:"id2"},src2:{type:String,required:!0},alt2:{type:String,required:!0},startColor2:{type:String,default:"from-white"},endColor2:{type:String,default:"to-white"},titleColor2:{type:String,default:"text-gray-900"},contentColor2:{type:String,default:"text-gray-600"},buttonColor2:{type:String,default:"text-gray-900"},buttonHoverColor2:{type:String,default:"group-hover:text-gray-400"}},setup(s){const u=j(!1),x=j(!1);function g(){u.value=!1}function y(){x.value=!1}function p(){u.value=!0}function l(){x.value=!0}return(i,n)=>{const f=U,_=$,w=D("motion-fade-visible");return c(),m("div",wt,[t("div",_t,[k((c(),M(_,{duration:1e3,id:s.id1,to:`#${s.id1}`,onClick:p,class:"group"},{default:a(()=>[t("div",kt,[t("div",$t,[o(f,{src:s.src1,alt:s.alt1,loading:"lazy",class:"h-full w-full object-cover object-center transition-transform duration-300 ease-in group-hover:scale-105 group-hover:opacity-95 aspect-[16/9]"},null,8,["src","alt"])]),t("div",Ct,[t("div",St,[t("h3",{class:h([s.titleColor1,"text-sm sm:text-base font-semibold"])},[d(i.$slots,"title-1",{},()=>[e(" Fallback Text. ")])],2),t("p",{class:h([s.contentColor1,"text-sm"])},[d(i.$slots,"summary-1",{},()=>[e(" Fallback Text. ")])],2)]),t("div",Tt,[o(r(b),{icon:"carbon:add-filled",class:h([s.buttonColor1,s.buttonHoverColor1,"h-8 w-8 transition duration-300 justify-center items-center"])},null,8,["class"])])])])]),_:3},8,["id","to"])),[[w]]),o(r(P),{appear:"",show:u.value,as:"template"},{default:a(()=>[o(r(A),{as:"div",onClose:g,class:"relative z-10"},{default:a(()=>[o(r(C),{as:"template",class:"opacity-0",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[jt]),_:1}),t("div",qt,[t("div",Lt,[o(r(C),{as:"template",class:"opacity-0 scale-95",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[o(r(B),{class:"bg-white w-full max-w-3xl transform overflow-hidden rounded-xl p-0 pt-0 sm:pt-0 pb-16 text-left align-middle shadow-xl transition-all relative"},{default:a(()=>[t("div",Ft,[o(f,{src:s.src1,alt:s.alt1,loading:"lazy",class:"rounded-t-lg h-full w-full object-cover object-center relative group-hover:opacity-90 transition aspect-[16/9]"},null,8,["src","alt"])]),t("div",Dt,[o(r(z),{as:"h3",class:"text-lg text-gray-900 sm:text-xl font-bold leading-6 max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-3"},{default:a(()=>[d(i.$slots,"title-1",{},()=>[e(" Fallback Text. ")])]),_:3}),t("div",Mt,[t("p",Pt,[d(i.$slots,"content-1",{},()=>[e(" Fallback text. ")])])]),t("button",{type:"button",class:"absolute bottom-0 right-0 p-4",onClick:g},[o(r(b),{icon:"carbon:close-filled",class:"text-gray-900 hover:text-gray-400 h-8 w-8","aria-hidden":"true"})])])]),_:3})]),_:3})])])]),_:3})]),_:3},8,["show"]),k((c(),M(_,{duration:1e3,id:s.id2,to:`#${s.id2}`,onClick:l,class:"group"},{default:a(()=>[t("div",At,[t("div",Bt,[o(f,{src:s.src2,alt:s.alt2,loading:"lazy",class:"h-full w-full object-cover object-center transition-transform duration-300 ease-in group-hover:scale-105 group-hover:opacity-95 aspect-[16/9]"},null,8,["src","alt"])]),t("div",zt,[t("div",Ht,[t("h3",{class:h([s.titleColor2,"text-sm sm:text-base font-semibold"])},[d(i.$slots,"title-2",{},()=>[e(" Fallback Text. ")])],2),t("p",{class:h([s.contentColor2,"text-sm"])},[d(i.$slots,"summary-2",{},()=>[e(" Fallback Text. ")])],2)]),t("div",Ot,[o(r(b),{icon:"carbon:add-filled",class:h([s.buttonColor2,s.buttonHoverColor2,"h-8 w-8 transition duration-300 justify-center items-center"])},null,8,["class"])])])])]),_:3},8,["id","to"])),[[w]]),o(r(P),{appear:"",show:x.value,as:"template"},{default:a(()=>[o(r(A),{as:"div",onClose:y,class:"relative z-10"},{default:a(()=>[o(r(C),{as:"template",class:"opacity-0",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[Et]),_:1}),t("div",It,[t("div",Vt,[o(r(C),{as:"template",class:"opacity-0 scale-95",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[o(r(B),{class:"bg-white w-full max-w-3xl transform overflow-hidden rounded-lg p-0 pt-0 sm:pt-0 pb-16 text-left align-middle shadow-xl transition-all relative"},{default:a(()=>[t("div",Wt,[o(f,{src:s.src2,alt:s.alt2,loading:"lazy",class:"rounded-t-lg h-full w-full object-cover object-center relative group-hover:opacity-90 transition aspect-[16/9]"},null,8,["src","alt"])]),t("div",Rt,[o(r(z),{as:"h3",class:"text-lg text-gray-900 sm:text-xl font-bold leading-6 max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-3"},{default:a(()=>[d(i.$slots,"title-2",{},()=>[e(" Fallback Text. ")])]),_:3}),t("div",Ut,[t("p",Gt,[d(i.$slots,"content-2",{},()=>[e(" Fallback text. ")])])]),t("button",{type:"button",class:"absolute bottom-0 right-0 p-4",onClick:y},[o(r(b),{icon:"carbon:close-filled",class:"h-8 w-8 text-gray-900 hover:text-gray-400","aria-hidden":"true"})])])]),_:3})]),_:3})])])]),_:3})]),_:3},8,["show"])])])}}},Nt=t("div",null,[t("p",{class:"mt-2"},"At Qualiton, we adhere to a pragmatic approach in tube amplifier design. We believe that a truly exceptional amplifier should:"),t("ul",{class:"list-disc marker:text-gray-300 mx-10"},[t("li",{class:"my-4 px-2"},"Be compatible with a wide range of loudspeakers."),t("li",{class:"my-2 px-2"},"Exhibit a Total Harmonic Distortion (THD) of less than 0.5% across the entire power spectrum, from milliwatts to rated power, spanning 20 Hz to 20 kHz."),t("li",{class:"my-2 px-2"},"Maintain a flat THD vs. Frequency plot when measured at a fixed output power."),t("li",{class:"my-2 px-2"},"Deliver fast and controlled transients throughout the audio range, which goes hand in hand with the frequency response being wide and flat."),t("li",{class:"my-2 px-2"},"Operate at low noise levels with an exceptional signal-to-noise ratio."),t("li",{class:"my-2 px-2"},"Combine thoughtful design, robust technical parameters, and exceptional sound quality.")]),t("p",{class:"my-2 px-2"},"In the preamplifier and driver sections, the 12AX7 and 12AT7 tubes play a crucial role in achieving these goals. Furthermore, their DC-stabilized filament supply and circuits with low offset and stable DC operating points ensure resilience against parameter variations.")],-1),Qt=t("ul",{style:{"list-style-type":"disc"},class:"mx-10"},[t("li",{class:"my-4 px-2"},"The amplifier is equipped with a practical protective cover that serves a dual purpose: it shields the vacuum tubes from physical damage and protects the user from the tubes’ hot surface."),t("li",{class:"my-2 px-2"},"Furthermore, we have implemented mechanical protection on the vacuum tube sockets, preventing the expensive power tubes from being damaged due to possible incorrect installation."),t("li",{class:"my-2 px-2"},"The amplifier’s turn-on and turn-off sequencing circuit is designed to eliminate any unwanted pops and noises. The circuit ensures that the speakers are only connected to the outputs after the start-up time has elapsed. It actively monitors the presence of mains voltage, and if it detects an absence, it swiftly disconnects the loudspeakers from the output terminals. When turning off the amplifier, it disconnects the speakers first. This thoughtful design enhances the overall user experience and protects your audio equipment.")],-1),Yt=t("ul",{style:{"list-style-type":"disc"},class:"mx-10"},[t("li",{class:"my-4 px-2"},[e("Tested and Selected Vacuum Tubes: "),t("br"),e(" The power tubes in all our amplifiers come in matched quads. The preamp tubes are selected for low noise, symmetry and minimum distortion.")]),t("li",{class:"my-2 px-2"},[e("Gold-Plated Ceramic Tube Sockets: "),t("br"),e(" Ensuring reliable connections.")]),t("li",{class:"my-2 px-2"},[e("Gold-Plated Audio Terminals: "),t("br"),e(" Enhancing signal transmission quality.")]),t("li",{class:"my-2 px-2"},[e("Film Capacitors: "),t("br"),e(" We exclusively use film capacitors in our audio circuits for optimal performance.")]),t("li",{class:"my-2 px-2"},[e("Ceramic Composition Resistors: "),t("br"),e(" These resistors are placed in critical positions to enhance reliability.")]),t("li",{class:"my-2 px-2"},[e("Long-Life, High-Temperature-Tolerant Capacitors: "),t("br"),e(" Employed in our power supplies to withstand demanding conditions.")]),t("li",{class:"my-2 px-2"},[e("Mains Filtering: "),t("br"),e(" We use mains filtering on the primary side of the power transformers, with the purpose of filtering out any incoming interference that may be present on the powerline.")])],-1),Jt={class:"flex flex-wrap items-center text-left justify-start py-2 gap-4"},Xt={class:"flex flex-wrap items-center text-left justify-start py-2 gap-4"},Kt=t("div",{class:"prose"},[t("ul",{style:{"list-style-type":"disc"}},[t("li",null,"Qualiton 300B Integrated Amplifier"),t("li",null,"Remote Control"),t("li",null,"2 x 12AX7EH Gold vacuum tubes"),t("li",null,"4 x 12AT7EH Gold vacuum tubes"),t("li",null,"4 x 300B EH vacuum tubes"),t("li",null,"Standard Mains Cable"),t("li",null,"PH2 Phillips Screwdriver"),t("li",null,"Pair of Gloves"),t("li",null,"User's Manual")])],-1),Zt={class:"flex flex-wrap items-center text-left justify-start py-2 gap-4"},ne={__name:"index",setup(s){return I({title:"Qualiton | 300B Integrated Amplifier"}),(u,x)=>(c(),m("div",null,[o(W,{id:"300b-bar",path:"./300b"},{heading:a(()=>[e(" 300B Integrated Amplifier ")]),_:1}),o(R,{id:"title"},{title:a(()=>[e(" 300B Integrated Amplifier ")]),subtitle:a(()=>[e(" Timeless sound, natural beauty. ")]),_:1}),o(V,{id:"a50i-mq",src:"/img/300b/hifi-green.jpg",alt:"300b-hero"}),o(q,{id:"overview","start-color":"from-white","end-color":"to-white","title-color":"text-gray-900","content-color":"text-gray-600"},{"heading-2":a(()=>[e(" Overview ")]),overview:a(()=>[e(" The Qualiton 300B is an integrated stereo amplifier with 2 x 25 Watts output power, built around the captivating sound character of 300B power tubes. This amplifier harmoniously blends our classic heritage with modern details: it features refined vacuum tube circuits, which we have enhanced with several additional functionalities. In shaping the overall sound character, our primary goal was to move away from the pronounced coloration often associated with amplifiers utilizing the 300B tube. Instead, we envisioned a smooth, musical and balanced vacuum tube amplifier that excels across the entire audio frequency range. ")]),_:1}),o(v,{id1:"powered-by-300b",src1:"/img/300b/a50i-mq.jpg",alt1:"alt-text","title-color-1":"text-gray-900","content-color-1":"text-gray-600","button-color-1":"text-gray-900","button-hover-color-1":"group-hover:text-gray-400",id2:"custom-output-transformers",src2:"/img/unsplash/unsplash-10-mq.jpg",alt2:"alt-text","title-color-2":"text-gray-900","content-color-2":"text-gray-600","button-color-2":"text-gray-900","button-hover-color-2":"group-hover:text-gray-400"},{"title-1":a(()=>[e(" Powered by 300B ")]),"summary-1":a(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-1":a(()=>[e(" The 300B is a directly heated power triode that hardly needs an introduction. Originally developed by Western Electric in the mid-1930s for amplifying audio in movie theaters, it later became a favorite among audiophiles and one of the most successful vacuum tubes in history. Its outstanding sonic properties led us to name our top-of-the-line integrated amplifier after this phenomenal power tube. Its high linearity and low distortion serve as the perfect basis for the amplifier's power block, in which we combine it with our own custom output transformer for excellent low and high frequency behavior. Additionally, we have integrated the newest iteration of our Automatic Bias System for continuous and precise control of the quiescent currents, providing a seamless user experience. ")]),"title-2":a(()=>[e(" Custom Output Transformers ")]),"summary-2":a(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-2":a(()=>[e(" The transformers of our amplifiers are custom-designed and built in our in-house transformer workshop. Our output transformers are constructed using high-permeability, large cross-section toroidal magnetic cores, which undergo initial impregnation during the production process. Following this, the winding process begins, utilizing a multi-layered, sectioned, and specially arranged winding configuration. This meticulous design ensures optimal performance across both low and high frequencies. Once the winding is complete, the transformers are encased in metal shielding cans to minimize electromagnetic interference. Finally, they are potted using an epoxy compound to eliminate mechanical vibrations and associated noises. ")]),_:1}),o(v,{id1:"custom-power-transformer",src1:"/img/unsplash/unsplash-11-mod-hq.jpg",alt1:"alt-text","title-color-1":"text-gray-900","content-color-1":"text-gray-600","button-color-1":"text-gray-900","button-hover-color-1":"group-hover:text-gray-400",id2:"automatic-bias-system",src2:"/img/unsplash/unsplash-12-hq.jpg",alt2:"alt-text","title-color-2":"text-gray-900","content-color-2":"text-gray-600","button-color-2":"text-gray-900","button-hover-color-2":"group-hover:text-gray-400"},{"title-1":a(()=>[e(" Custom Power Transformer ")]),"summary-1":a(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-1":a(()=>[e(" Just like our output transformers, our power transformers are also custom-designed and built in our in-house transformer workshop. We manufacture them with the same precision and attention to details: the high-permeability, large cross-section toroidal cores are also impregnated, and then the winding process follows. The parameters of the windings are designed to avoid saturation of the magnetic core and to ensure efficient operation even under heavy load conditions. It is important to note that we use double electromagnetic shielding for our power transformers. Finally, we employ the same epoxy compound used to pot the output transformers to eliminate mechanical vibrations and associated noises. ")]),"title-2":a(()=>[e(" Automatic Bias System ")]),"summary-2":a(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-2":a(()=>[e(" This circuit continuously monitors the behavior of each tube and regulates the bias voltages accordingly, ensuring the smallest possible output voltage noise while guaranteeing the highest degree of linearity of the output stage. Additionally, it prevents the sensitive, high-permeability output transformer cores from saturating by precisely equalizing the quiescent currents of the power tubes. Furthermore, the bias system incorporates a built-in soft-start function, which prevents the tubes from drawing excessive current during start-up and eliminates pops and noises. The result is that no further adjustment is required once the electron tubes supplied with the unit have been installed; the Automatic Bias System takes care of everything. ")]),_:1}),o(v,{id1:"filament-soft-start",src1:"/img/unsplash/unsplash-7-mq.jpg",alt1:"alt-text",id2:"highly-optimized-layout",src2:"/img/unsplash/unsplash-9-mq.jpg",alt2:"alt-text"},{"title-1":a(()=>[e(" Filament Soft Start ")]),"summary-1":a(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-1":a(()=>[e(" To significantly extend the lifetime of the power tubes, we have implemented the Filament Soft-Start feature, which limits the current flowing through the heating filaments to a safe level during start-up when the tubes are cold. The transient current of a 300B's cold filament can exceed eight times the nominal heating current, which poses a risk of damaging the expensive power tubes in a short time. Therefore, each of the filaments of the 300B's is fed from its own stabilized DC power supply, and the soft-start circuit ensures that the transient current in each filament remains well below 2 Amperes throughout start-up, providing sufficient protection for the tubes. ")]),"title-2":a(()=>[e(" Highly Optimized Layout ")]),"summary-2":a(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-2":a(()=>[e(" During the design phase, a significant amount of engineering time was devoted to the layout details of the whole integrated amplifier. Our top priority was to maximize the signal-to-noise ratio and completely eliminate mains related signal components from the audio frequency spectrum. To achieve this, we separated the audio circuits as much as possible from the power supplies that cause the most electromagnetic interference. Additionally, we repackaged a substantial portion of the internal structure of the amplifier. By utilizing our highest-quality printed circuit boards, we have created a modular, robust, and high-performance layout. ")]),_:1}),o(q,{id:"pragmatic-audio-design","start-color":"from-white","end-color":"to-white","title-color":"text-gray-900","content-color":"text-gray-600"},{"heading-2":a(()=>[e(" Pragmatic Audio Design ")]),overview:a(()=>[Nt]),_:1}),o(v,{id1:"input-selection",src1:"/img/dummy/dummy-white-1x1-no-text.jpg",alt1:"alt-text",id2:"volume-control",src2:"/img/dummy/dummy-white-1x1-no-text.jpg",alt2:"alt-text"},{"title-1":a(()=>[e(" Relay-Controlled Input Selection ")]),"summary-1":a(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-1":a(()=>[e(" The amplifier features a total of five analog inputs: four unbalanced and one balanced. Selection between these inputs is accomplished using precision, low-power, ultra-miniature Japanese relays with ultra-low contact resistance gold overlay silver contacts, all of which are controlled by a microprocessor. The front panel Status Display indicates the currently active or inactive inputs. ")]),"title-2":a(()=>[e(" Relay-Controlled Volume ")]),"summary-2":a(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-2":a(()=>[e(" Our 100-step relay-controlled stereo attenuator features 25 microprocessor-controlled signal relays that switch a total of 48 precision metal film resistors. Programmed with a custom attenuating characteristic, it enables fine adjustments across the entire operating range of the volume control. At position 0, it is completely muted. The stereo tracking is exceptionally accurate. The signal relays are precision Japanese-made low-power types, featuring ultra-low contact resistance gold-plated contacts. ")]),_:1}),o(v,{id1:"multifunction-control-knob",src1:"/img/300b/multifunction.png",alt1:"alt-text",id2:"remote-control",src2:"/img/300b/remote.jpg",alt2:"alt-text"},{"title-1":a(()=>[e(" Multifunction Control Knob ")]),"summary-1":a(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-1":a(()=>[e(" We have updated our front panel rotary knob, which now serves multiple functions. In addition to adjusting the volume, it can power the device on and off from stand-by mode. Furthermore, when the amplifier is active, it also acts as an Input Selector. ")]),"title-2":a(()=>[e(" Remote Control ")]),"summary-2":a(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-2":a(()=>[e(" The remote control features a black anodized aluminum finish. Alongside the basic VOLUME UP and VOLUME DOWN functions, it also includes a convenient MUTE function. You can power the device on and off from stand-by mode using the POWER button. When the amplifier is active, this same POWER button also functions as an Input Selector. To return the amplifier to stand-by mode, simply long-press the POWER button. Additionally, the remote control allows you to fine-tune the brightness of the status display, with three preset levels to choose from. You can access the brightness control menu by long-pressing the MUTE button. ")]),_:1}),o(v,{id1:"status-display",src1:"/img/300b/status_display.png",alt1:"alt-text",id2:"aesthetics",src2:"/img/300b/aesthetics.jpg",alt2:"alt-text"},{"title-1":a(()=>[e(" Status Display ")]),"summary-1":a(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-1":a(()=>[e(" The microprocessor-based Input Selector and Volume Control System features a Status Display. The display material is scratch-resistant smoked plexiglass. By default, the top section of the Status Display indicates the volume value. During user action, the display becomes more intense, and then it dims to a lower brightness after a few seconds. Users have the option to select from three preset brightness levels. The stand-by mode's red LED is located in the lower section of the Status Display. ")]),"title-2":a(()=>[e(" Aesthetics ")]),"summary-2":a(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-2":a(()=>[e(" Our approach to the visual design centers around maintaining visual neutrality. We intentionally avoid overdesigning the appearance, aiming for aesthetic simplicity and cleanliness. Our products are not meant to be theatrical or ostentatious; rather, they seamlessly integrate into the audio system's interior without disrupting the user experience. However, we add unique touches, such as the chassis folded back at a 45-degree angle, a stainless steel logo badge, a custom rotary knob, or simply the sight of the gourgeous-looking vacuum tubes. ")]),_:1}),o(q,{id:"sound-character","start-color":"from-white","end-color":"to-white","title-color":"text-gray-900","content-color":"text-gray-600"},{"heading-2":a(()=>[e(" Sound Character ")]),overview:a(()=>[e(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel magna vehicula, volutpat justo a, eleifend purus. Aenean dictum faucibus orci, id accumsan purus feugiat a. Proin sagittis, augue vel laoreet pretium, nisl orci sodales justo, id venenatis erat lacus ut tellus. Praesent ullamcorper urna a lacus maximus aliquet. Donec auctor, nisl a elementum mollis, arcu neque feugiat orci, non vulputate tellus ante nec nunc. Vestibulum et ultrices ex. Maecenas ultricies neque leo, et vestibulum enim placerat vel. Nam et neque metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus volutpat diam dignissim quam aliquam, ac pretium odio aliquam. Vestibulum malesuada risus lacus. Morbi accumsan molestie felis, et pulvinar est imperdiet nec. Vestibulum eget suscipit lacus, vel ullamcorper felis. Ut tristique orci elementum, cursus leo sit amet, pretium sapien. Aliquam eget placerat mauris. ")]),_:1}),o(v,{id1:"protective-features",src1:"/img/300b/p200-hq.jpg",alt1:"alt-text",id2:"special-components",src2:"/img/300b/p200-hq.jpg",alt2:"alt-text"},{"title-1":a(()=>[e(" Protective Features ")]),"summary-1":a(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-1":a(()=>[Qt]),"title-2":a(()=>[e(" Special Components ")]),"summary-2":a(()=>[e(" Lorem ipsum dolor sit amet. ")]),"content-2":a(()=>[Yt]),_:1}),o(st,{id:"tech-specs","data-path":"assets/data/300b/300bElectricalSpecs.json","background-color":"bg-white","hover-color":"hover:bg-gray-50"},{title:a(()=>[t("div",Jt,[e(" Tech Specs "),o(r(b),{icon:"fxemoji:memo"})])]),_:1}),o(nt,{id:"in-the-box","background-color":"bg-white"},{title:a(()=>[t("div",Xt,[e(" In the Box "),o(r(b),{icon:"emojione:package"})])]),list:a(()=>[Kt]),_:1}),o(vt,{id:"downloads","data-path":"assets/data/300b/300bDownloads.json","background-color":"bg-white","hover-color":"hover:bg-gray-100"},{title:a(()=>[t("div",Zt,[e(" Downloads "),o(r(b),{icon:"ep:download"})])]),_:1})]))}};export{ne as default};