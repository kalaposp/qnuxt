import{u as y}from"./DSosHptO.js";import{_ as h}from"./D9507cj7.js";import{k as w,o as c,c as d,b as s,_ as b,a as e,B as n,d as o,A as p,r as v,y as i,w as a}from"./G_pUFV03.js";import{I as f}from"./Cm5lF1Ey.js";import{Y as $,G as C,V as k}from"./DwJyW893.js";import{h as x,S}from"./BXAUQo5k.js";import{Q as j,V as q,N as F}from"./D7cPjDjo.js";import"./B72jLRcB.js";const T={class:"pt-8 grid p-4 sm:grid-cols-1 max-w-5xl mx-auto"},B=w({__name:"ModelsImage",props:{src:{type:String,required:!0},alt:{type:String,required:!0}},setup(t){return(r,u)=>{const l=h;return c(),d("div",T,[s(l,{class:"rounded-3xl",src:t.src,alt:t.alt,loading:"lazy"},null,8,["src","alt"])])}}}),I={},z={class:"w-full sticky start-0 top-0 z-10 bg-sky-200"},A={class:"text-lg h-20 p-4 items-center text-center mx-auto flex font-medium tracking-normal max-w-5xl"};function M(t,r){return c(),d("div",z,[e("h1",A,[n(t.$slots,"heading",{},()=>[o(" Fallback Text. ")])])])}const N=b(I,[["render",M]]),O={},V={class:"rounded-3xl max-w-5xl p-4 mx-auto"},Q={class:"bg-gradient-to-tr from-blue-100 to-orange-100 rounded-3xl"},W={class:"text-xl sm:text-2xl p-2 sm:p-2 pt-12 sm:pt-12 px-10 sm:px-10 items-center text-center mx-auto flex font-semibold tracking-normal max-w-3xl"},D={class:"text-base font-normal rounded-3xl p-2 sm:p-2 pb-16 sm:pb-16 px-10 sm:px-10 max-w-3xl justify-center items-center text-left flex mx-auto"};function E(t,r){return c(),d("div",V,[e("div",Q,[e("h2",W,[n(t.$slots,"heading-2",{},()=>[o(" Fallback Text. ")])]),e("p",D,[n(t.$slots,"overview",{},()=>[o(" Fallback text. ")])])])])}const G=b(O,[["render",E]]),P={class:"rounded-3xl max-w-5xl p-4 mx-auto"},Y={class:"text-xl sm:text-2xl p-2 sm:p-2 pt-12 sm:pt-16 px-10 sm:px-10 items-center text-left mx-auto flex font-semibold tracking-normal max-w-3xl"},H={class:"text-base font-normal rounded-3xl p-2 sm:p-2 pb-8 sm:pb-8 px-10 sm:px-10 max-w-3xl justify-center items-center text-left flex mx-auto"},J={class:"grid sm:grid-cols-1 p-2 sm:p-2 pb-12 sm:pb-16 px-10 sm:px-10 max-w-3xl justify-center items-center mx-auto"},g={__name:"ModelsFeatureCard",props:{src:{type:String,required:!0},alt:{type:String,required:!0},startColor:{type:String,default:"from-red-300"},endColor:{type:String,required:!0,default:"to-blue-300"}},setup(t){return(r,u)=>{const l=h;return c(),d("div",P,[e("div",{class:p([t.startColor,t.endColor,"bg-gradient-to-tr rounded-3xl"])},[e("h2",Y,[n(r.$slots,"heading-2",{},()=>[o(" Fallback Text. ")])]),e("p",H,[n(r.$slots,"content",{},()=>[o(" Fallback text. ")])]),e("div",J,[s(l,{class:"rounded-3xl",src:t.src,alt:t.alt,loading:"lazy"},null,8,["src","alt"])])],2)])}}},K={class:"rounded-3xl max-w-5xl p-4 mx-auto"},L={class:"flex mx-auto justify-between max-w-3xl p-2 sm:p-2 pt-12 sm:pt-16 px-10 sm:px-10"},R={class:"flex items-center"},U={class:"text-xl sm:text-2xl text-left font-semibold tracking-normal"},X=e("div",{class:"fixed inset-0 bg-black/75 backdrop-blur-xl"},null,-1),Z={class:"fixed inset-0 overflow-y-auto"},ee={class:"flex min-h-full items-center justify-center p-4 text-left"},te={class:"flex mx-auto justify-between max-w-xl"},se={class:"flex items-center"},oe={class:"mt-4"},ae={class:"text-base max-w-xl mx-auto text-gray-700"},re={class:"grid sm:grid-cols-1 p-2 sm:p-2 pb-12 sm:pb-16 px-10 sm:px-10 max-w-3xl justify-center items-center mx-auto"},ie={__name:"ModelsFeatureCardDialog",props:{src:{type:String,required:!0},alt:{type:String,required:!0},startColor:{type:String,default:"from-red-300"},endColor:{type:String,default:"to-blue-300"}},setup(t){const r=v(!1);function u(){r.value=!1}function l(){r.value=!0}return(m,fe)=>{const _=h;return c(),d("div",K,[e("div",{class:p([t.startColor,t.endColor,"bg-gradient-to-tr rounded-3xl"])},[e("div",L,[e("div",R,[e("h2",U,[n(m.$slots,"heading-2",{},()=>[o(" Fallback Text. ")])])]),e("button",{type:"button",onClick:l,class:"rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"},[s(i(f),{icon:"carbon:add-filled",class:"h-10 w-10 justify-center items-center text-gray-800 hover:text-gray-400","aria-hidden":"true"})]),s(i(S),{appear:"",show:r.value,as:"template"},{default:a(()=>[s(i($),{as:"div",onClose:u,class:"relative z-10"},{default:a(()=>[s(i(x),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[X]),_:1}),e("div",Z,[e("div",ee,[s(i(x),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[s(i(C),{class:"w-full max-w-2xl transform overflow-hidden rounded-2xl bg-gray-200 p-8 pb-12 text-left align-middle shadow-xl transition-all"},{default:a(()=>[e("div",te,[e("div",se,[s(i(k),{as:"h3",class:"text-xl font-semibold leading-6 max-w-xl mx-auto text-gray-900"},{default:a(()=>[n(m.$slots,"heading-2",{},()=>[o(" Fallback Text. ")])]),_:3})]),e("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent text-sm font-medium text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:u},[s(i(f),{icon:"carbon:close-filled",class:"h-10 w-10 justify-center items-center text-gray-800 hover:text-gray-400","aria-hidden":"true"})])]),e("div",oe,[e("p",ae,[n(m.$slots,"content",{},()=>[o(" Fallback text. ")])])])]),_:3})]),_:3})])])]),_:3})]),_:3},8,["show"])]),e("div",re,[s(_,{class:"rounded-3xl",src:t.src,alt:t.alt,loading:"lazy"},null,8,["src","alt"])])],2)])}}},ne={class:"rounded-3xl max-w-5xl p-4 mx-auto"},le={class:"w-full px-4 pt-16"},ce={class:"mx-auto w-full max-w-3xl rounded-2x p-2 sm:p-2 px-10 sm:px-10"},de={class:"flex items-center w-full"},ue={class:"flex-grow text-xl sm:text-2xl text-left font-semibold tracking-normal"},me={class:"text-base max-w-3xl mx-auto text-gray-700"},pe={class:"grid sm:grid-cols-1 p-2 sm:p-2 pb-12 sm:pb-16 px-10 sm:px-10 max-w-3xl justify-center items-center mx-auto"},he={__name:"ModelsFeatureDisclosure",props:{src:{type:String,required:!0},alt:{type:String,required:!0},startColor:{type:String,default:"from-red-300"},endColor:{type:String,default:"to-blue-300"}},setup(t){return(r,u)=>{const l=h;return c(),d("div",ne,[e("div",{class:p([t.startColor,t.endColor,"bg-gradient-to-tr rounded-3xl"])},[e("div",le,[e("div",ce,[s(i(F),null,{default:a(({open:m})=>[s(i(j),{class:"flex w-full justify-between text-left text-sm font-medium text-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"},{default:a(()=>[e("div",de,[e("h2",ue,[n(r.$slots,"heading-2",{},()=>[o(" Fallback Text. ")])]),s(i(f),{icon:"carbon:add-filled",class:p([m?"rotate-45 transform":"","h-10 w-10 justify-center items-center text-gray-800 hover:text-gray-600"]),"aria-hidden":"true"},null,8,["class"])])]),_:2},1024),s(i(q),{class:"pb-2 pt-2 text-sm text-gray-500"},{default:a(()=>[e("p",me,[n(r.$slots,"content",{},()=>[o(" Fallback text. ")])])]),_:3})]),_:3})])]),e("div",pe,[s(l,{class:"rounded-3xl",src:t.src,alt:t.alt,loading:"lazy"},null,8,["src","alt"])])],2)])}}},Ce={__name:"index",setup(t){return y({title:"Qualiton | 300B Integrated Amplifier"}),(r,u)=>(c(),d("div",null,[s(N,null,{heading:a(()=>[o(" 300B Integrated Amplifier ")]),_:1}),s(B,{src:"/img/300b/a50i-mq.jpg",alt:"300b-hero"}),s(G,null,{"heading-2":a(()=>[o(" Overview ")]),overview:a(()=>[o(" The Qualiton 300B is an integrated stereo amplifier with 2 x 25 Watts output power, built around the captivating sound character of 300B power tubes. This amplifier harmoniously blends our classic heritage with modern details: it features refined vacuum tube circuits, which we have enhanced with several additional functionalities. In shaping the overall sound character, our primary goal was to move away from the pronounced coloration often associated with amplifiers utilizing the 300B tube. Instead, we envisioned a smooth, musical and balanced vacuum tube amplifier that excels across the entire audio frequency range. ")]),_:1}),s(g,{src:"/img/300b/dummy-light.jpg",alt:"powered-by-300b",startColor:"from-green-200",endColor:"to-blue-200"},{"heading-2":a(()=>[o(" Powered by 300B ")]),content:a(()=>[o(" The 300B is a directly heated power triode that hardly needs an introduction. Originally developed by Western Electric in the mid-1930s for amplifying audio in movie theaters, it later became a favorite among audiophiles and one of the most successful vacuum tubes in history. Its outstanding sonic properties led us to name our top-of-the-line integrated amplifier after this phenomenal power tube. Its high linearity and low distortion serve as the perfect basis for the amplifier's power block, in which we combine it with our own custom output transformer for excellent low and high frequency behavior. Additionally, we have integrated the newest iteration of our Automatic Bias System for continuous and precise control of the quiescent currents, providing a seamless user experience. ")]),_:1}),s(g,{src:"/img/300b/dummy-light.jpg",alt:"custom-output-transformers",startColor:"from-slate-400",endColor:"to-slate-200"},{"heading-2":a(()=>[o(" Custom Output Transformers ")]),content:a(()=>[o(" The transformers of our amplifiers are custom-designed and built in our in-house transformer workshop. Our output transformers are constructed using high-permeability, large cross-section toroidal magnetic cores, which undergo initial impregnation during the production process. Following this, the winding process begins, utilizing a multi-layered, sectioned, and specially arranged winding configuration. This meticulous design ensures optimal performance across both low and high frequencies. Once the winding is complete, the transformers are encased in metal shielding cans to minimize electromagnetic interference. Finally, they are potted using an epoxy compound to eliminate mechanical vibrations and associated noises. ")]),_:1}),s(ie,{src:"/img/300b/dummy-light.jpg",alt:"custom-output-transformers",startColor:"from-red-100",endColor:"to-blue-200"},{"heading-2":a(()=>[o(" Custom Power Transformer ")]),content:a(()=>[o(" Just like our output transformers, our power transformers are also custom-designed and built in our in-house transformer workshop. We manufacture them with the same precision and attention to details: the high-permeability, large cross-section toroidal cores are also impregnated, and then the winding process follows. The parameters of the windings are designed to avoid saturation of the magnetic core and to ensure efficient operation even under heavy load conditions. It is important to note that we use double electromagnetic shielding for our power transformers. Finally, we employ the same epoxy compound used to pot the output transformers to eliminate mechanical vibrations and associated noises. ")]),_:1}),s(he,{src:"/img/300b/dummy-light.jpg",alt:"300b-hero",startColor:"from-blue-100",endColor:"to-orange-100"},{"heading-2":a(()=>[o(" Automatic Bias System ")]),content:a(()=>[o(" This circuit continuously monitors the behavior of each tube and regulates the bias voltages accordingly, ensuring the smallest possible output voltage noise while guaranteeing the highest degree of linearity of the output stage. Additionally, it prevents the sensitive, high-permeability output transformer cores from saturating by precisely equalizing the quiescent currents of the power tubes. Furthermore, the bias system incorporates a built-in soft-start function, which prevents the tubes from drawing excessive current during start-up and eliminates pops and noises. The result is that no further adjustment is required once the electron tubes supplied with the unit have been installed; the Automatic Bias System takes care of everything. ")]),_:1})]))}};export{Ce as default};
