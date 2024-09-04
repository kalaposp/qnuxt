import{f as x,o as b,c as f,a as e,m as h,v,q as C,n as d,b as r,w as a,g as n,d as o,u as m}from"./D4g3NPWE.js";import{_ as w}from"./BVAq7uT2.js";import{_}from"./IDekIkCF.js";import{I as y}from"./HLYzEpub.js";import{S as j,h as $}from"./De5OIsVa.js";import{Y as F,G as T,V as O}from"./CprSPefe.js";import"./BY1FXRTD.js";const q={class:"bg-gray-50"},I={class:"max-w-7xl mx-auto p-4 bg-gray-50 border-none border-gray-200"},z={class:"flex items-center justify-start bg-white rounded-xl p-4 sm:p-0 max-w-7xl mx-auto py-8 sm:py-24 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"},L={class:"mx-auto w-full max-w-lg border-none border-gray-300"},P=e("h1",{class:"text-xl sm:text-3xl font-semibold"},"Contact us",-1),N=e("p",{class:"text-sm sm:text-base mt-3"},"Whether it's a question about our services, a request for technical assistance, or suggestions for improvement, our team is eager to hear from you.",-1),V={id:"contactForm",target:"_blank",action:"https://formsubmit.co/peter.kalapos@audiohungary.hu",method:"POST",class:"mt-10"},M={class:"grid gap-6 sm:grid-cols-2"},A={class:"relative z-0"},B=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your name",-1),G={class:"relative z-0"},H=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your email",-1),Y={class:"relative z-0 col-span-2"},D=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your message",-1),E={class:"relative z-0 col-span-2"},R=e("p",{class:"text-xs text-gray-500 leading-relaxed"}," By signing the checkbox shown below, pursuant to Article 6 (1) (a) and Article 7 of the General Data Protection Act (GDPR), I agree that the personal data of the data controller defined in GDPR are subject to the terms of his prospectus. I know that I can withdraw my consent at any time under Article 7 (3) of the GDPR with one click. ",-1),U={class:"inline-flex items-center my-6"},W={class:"relative flex cursor-pointer items-center rounded-full mr-3",for:"login","data-ripple-dark":"true"},X=e("div",{class:"pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-700 opacity-0 transition-opacity peer-checked:opacity-100"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor","stroke-width":"1"},[e("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})])],-1),J=e("label",{class:"mt-px cursor-pointer select-none font-normal text-xs sm:text-sm text-gray-700",for:"login"}," I agree ",-1),K={__name:"ContactForm",setup(t){const s=x(""),c=x(""),i=x(""),l=x(!1),k=()=>{if(!s.value||!c.value||!i.value||!l.value){alert("Please fill out all required fields and agree to the terms.");return}const p=document.getElementById("contactForm");p.submit(),p.reset(),s.value="",c.value="",i.value="",l.value=!1,alert("Your message has been sent!")};return(p,u)=>(b(),f("section",q,[e("div",I,[e("div",z,[e("div",L,[P,N,e("form",V,[e("div",M,[e("div",A,[h(e("input",{"onUpdate:modelValue":u[0]||(u[0]=g=>s.value=g),type:"text",name:"Name",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[v,s.value]]),B]),e("div",G,[h(e("input",{"onUpdate:modelValue":u[1]||(u[1]=g=>c.value=g),type:"text",name:"E-mail",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[v,c.value]]),H]),e("div",Y,[h(e("textarea",{"onUpdate:modelValue":u[2]||(u[2]=g=>i.value=g),name:"Message",rows:"5",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[v,i.value]]),D]),e("div",E,[R,e("div",U,[e("label",W,[h(e("input",{id:"login",type:"checkbox","onUpdate:modelValue":u[3]||(u[3]=g=>l.value=g),class:"before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded border border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-200 checked:before:bg-green-500 hover:before:opacity-10"},null,512),[[C,l.value]]),X]),J])])]),e("button",{type:"button",onClick:k,class:"text-sm sm:text-base mt-1 rounded-3xl bg-black hover:bg-black/75 transition px-10 py-2 text-white flex mx-auto"},"Send Message")])])])])]))}},Q=["id"],Z={class:"mx-auto max-w-screen-xl bg-gray-50 border-none border-gray-200"},ee={class:"w-full grid grid-cols-12 lg:grid-rows-2 bg-gray-50 rounded-xl px-4 pt-4 pb-0 gap-4 h-full"},te=e("div",{class:"absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"},null,-1),oe={class:"absolute top-0 left-0 p-4 pl-10 pt-10 sm:text-sm md:text-base"},ae={class:"text-base sm:text-base md:text-lg font-semibold text-gray-100"},re={class:"text-sm sm:text-sm md:text-base font-normal tracking-normal text-gray-100"},se={class:"absolute bottom-0 left-0 pr-10 pl-10 pb-10 text-white"},le={class:"mx-auto flex rounded-3xl border border-gray-200 px-6 sm:px-8 py-2 mt-4 text-xs sm:text-base font-medium text-gray-200 transition duration-300 hover:bg-gray-200 hover:text-gray-900 focus:outline-none"},ne=e("div",{class:"absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"},null,-1),ie={class:"absolute top-0 left-0 p-4 pl-10 pt-10 sm:text-sm md:text-base"},de={class:"text-base sm:text-base md:text-lg font-semibold text-gray-100"},ce={class:"text-sm sm:text-sm md:text-base font-normal tracking-normal text-gray-100"},ue={class:"absolute bottom-0 right-0 p-4 pr-6 pb-6"},me=e("div",{class:"absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"},null,-1),ge={class:"absolute top-0 left-0 p-4 pl-10 pt-10 sm:text-sm md:text-base"},pe={class:"text-base sm:text-base md:text-lg font-semibold text-gray-100"},xe={class:"text-sm sm:text-sm md:text-base font-normal tracking-normal text-gray-100"},be={class:"absolute bottom-0 right-0 p-4 pr-6 pb-6"},S={__name:"HeroTrio",props:{id:{type:String,default:"hero-trio"},src1:{type:String,default:"/img/dummy/dummy-dark.jpg"},alt1:{type:String,default:"alt-text"},link1:{type:String,default:"/"},card1Order:{type:String,default:"lg:order-1"},src2:{type:String,default:"/img/dummy/dummy-dark.jpg"},alt2:{type:String,default:"alt-text"},link2:{type:String,default:"/"},card2Order:{type:String,default:"lg:order-2"},src3:{type:String,default:"/img/dummy/dummy-dark.jpg"},alt3:{type:String,default:"alt-text"},link3:{type:String,default:"/"},card3Order:{type:String,default:"lg:order-3"}},setup(t){return(s,c)=>{const i=w,l=_;return b(),f("section",{id:t.id,class:"bg-gray-50"},[e("div",Z,[e("div",ee,[e("div",{class:d([t.card1Order,"lg:row-start-1 lg:row-span-2 lg:col-span-8 col-span-12 bg-none h-auto md:h-full flex flex-col"])},[r(l,{to:t.link1,class:"group relative flex flex-col overflow-hidden rounded-xl px-4 pt-4 pb-0 h-56 md:h-96 lg:h-60 flex-grow"},{default:a(()=>[r(i,{src:t.src1,alt:t.alt1,class:"absolute inset-0 h-full w-full object-cover rounded-xl group-hover:scale-105 group-hover:opacity-90 transition duration-500 ease-in-out"},null,8,["src","alt"]),te,e("div",oe,[e("h3",ae,[n(s.$slots,"title-1",{},()=>[o(" Fallback Text. ")])]),e("p",re,[n(s.$slots,"paragraph-1",{},()=>[o(" Fallback Text. ")])])]),e("div",se,[e("button",le,[n(s.$slots,"button-1",{},()=>[o(" Fallback Text. ")])])])]),_:3},8,["to"])],2),e("div",{class:d([t.card2Order,"lg:row-start-1 lg:row-span-1 lg:col-span-4 md:col-span-6 col-span-12 bg-none"])},[r(l,{to:t.link2,class:"group relative flex flex-col overflow-hidden rounded-xl px-4 py-4 pb-4 h-56 md:h-64 lg:h-60 flex-grow"},{default:a(()=>[r(i,{src:t.src2,alt:t.alt2,class:"absolute inset-0 h-full w-full object-cover rounded-xl group-hover:scale-105 group-hover:opacity-90 transition duration-500 ease-in-out"},null,8,["src","alt"]),ne,e("div",ie,[e("h3",de,[n(s.$slots,"title-2",{},()=>[o(" Fallback Text. ")])]),e("p",ce,[n(s.$slots,"paragraph-2",{},()=>[o(" Fallback Text. ")])])]),e("div",ue,[r(m(y),{icon:"carbon:arrow-right",class:"h-8 w-8 text-gray-100"})])]),_:3},8,["to"])],2),e("div",{class:d([t.card3Order,"lg:row-start-2 lg:row-span-1 lg:col-span-4 md:col-span-6 col-span-12 bg-none"])},[r(l,{to:t.link3,class:"group relative flex flex-col overflow-hidden rounded-xl px-4 py-4 pb-4 h-56 md:h-64 lg:h-60 flex-grow"},{default:a(()=>[r(i,{src:t.src3,alt:t.alt3,class:"absolute inset-0 h-full w-full object-cover rounded-xl group-hover:scale-105 group-hover:opacity-90 transition duration-500 ease-in-out"},null,8,["src","alt"]),me,e("div",ge,[e("h3",pe,[n(s.$slots,"title-3",{},()=>[o(" Fallback Text. ")])]),e("p",xe,[n(s.$slots,"paragraph-3",{},()=>[o(" Fallback Text. ")])])]),e("div",be,[r(m(y),{icon:"carbon:arrow-right",class:"h-8 w-8 text-gray-100"})])]),_:3},8,["to"])],2)])])],8,Q)}}},fe=["id"],he={class:"mx-auto max-w-screen-xl bg-gray-50 border-none border-gray-200"},ye={class:"group relative block overflow-hidden transition ease-out active:opacity-75 rounded-xl"},ve=e("div",{class:"absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"},null,-1),we={class:"absolute top-0 left-0 p-4 pl-10 pt-10 sm:text-sm md:text-base"},_e={class:"text-base sm:text-base md:text-lg font-semibold text-gray-100"},ke={class:"text-sm sm:text-sm md:text-base font-normal tracking-normal text-gray-100"},$e={class:"absolute bottom-0 left-0 pr-10 pl-10 pb-10 text-gray-100"},Se={class:"mx-auto flex rounded-3xl border border-gray-200 px-6 sm:px-8 py-2 mt-4 text-xs sm:text-base font-medium text-gray-100 transition duration-300 hover:bg-gray-200 hover:text-gray-900 focus:outline-none"},Ce={__name:"HeroSolo",props:{id:{type:String,default:"hero-solo"},src:{type:String,default:"/img/dummy/dummy-dark.jpg"},alt:{type:String,default:"alt-text"},link:{type:String,default:"/"},contentColor:{type:String,default:"text-gray-700"},buttonColor:{type:String,default:"text-gray-500"},buttonHoverColor:{type:String,default:"hover:text-gray-300"}},setup(t){return(s,c)=>{const i=w,l=_;return b(),f("section",{id:t.id,class:"bg-gray-50"},[e("div",he,[r(l,{to:t.link,class:"pt-4 grid px-4 sm:px-4 sm:grid-cols-1"},{default:a(()=>[e("div",ye,[r(i,{class:"rounded-xl h-full w-full object-cover transition-transform duration-500 ease-in group-hover:scale-105 aspect-[16/9]",src:t.src,alt:t.alt,placeholder:[75,50,100,15]},null,8,["src","alt"]),ve,e("div",we,[e("h3",_e,[n(s.$slots,"heading",{},()=>[o(" Fallback Text. ")])]),e("p",ke,[n(s.$slots,"paragraph",{},()=>[o(" Fallback Text. ")])])]),e("div",$e,[e("button",Se,[n(s.$slots,"button",{},()=>[o(" Fallback Text. ")])])])])]),_:3},8,["to"])])],8,fe)}}},je=["id"],Fe=e("div",{class:"fixed inset-0 bg-black/75 backdrop-blur-xl"},null,-1),Te={class:"fixed inset-0 overflow-y-auto"},Oe={class:"flex min-h-full items-center justify-center p-4 text-left"},qe={class:"max-w-3xl mx-auto px-0 py-0 sm:px-0 sm:py-0 mb-4"},Ie={class:"p-4"},ze={class:"mt-0"},Le={__name:"ModelsFeaturePair",props:{id:{type:String,required:!0},src:{type:String,required:!0},alt:{type:String,required:!0},startColor:{type:String,default:"from-blue-100"},endColor:{type:String,default:"to-red-100"},textOrder:{type:String,default:"lg:order-1"},imgOrder:{type:String,default:"lg:order-2"},titleColor:{type:String,default:"text-gray-900"},contentColor:{type:String,default:"text-gray-600"},buttonColor:{type:String,default:"text-gray-500"},buttonHoverColor:{type:String,default:"hover:text-gray-300"}},setup(t){const s=x(!1);function c(){s.value=!1}function i(){s.value=!0}return(l,k)=>{const p=w,u=_;return b(),f("div",{id:t.id,class:"p-4 py-0 my-4 bg-gray-50 max-w-7xl mx-auto border-none border-gray-200"},[r(u,{to:`#${t.id}`,onClick:i,class:"p-0 bg-none rounded-xl grid gap-4 lg:grid-cols-12 max-w-7xl mx-auto"},{default:a(()=>[e("div",{class:d([t.startColor,t.endColor,t.textOrder,"rounded-xl bg-gradient-to-tr lg:col-span-5 h-full w-full object-cover object-center p-4 order-2 relative shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5"])},[e("h2",{class:d([t.titleColor,"text-lg sm:text-xl p-2 sm:p-2 pt-12 sm:pt-12 px-10 sm:px-10 items-center text-left mx-auto flex font-semibold tracking-normal max-w-3xl"])},[n(l.$slots,"title",{},()=>[o(" Fallback Text. ")])],2),e("p",{class:d([t.contentColor,"text-sm sm:text-base leading-relaxed sm:leading-relaxed font-normal rounded-xl p-2 sm:p-2 pb-16 sm:pb-16 px-10 sm:px-10 max-w-3xl justify-center items-center text-left flex mx-auto"])},[n(l.$slots,"summary",{},()=>[o(" Fallback text. ")])],2),e("button",{type:"button",onClick:i,class:"absolute bottom-0 right-0 mr-4 mb-4"},[r(m(y),{icon:"carbon:add-filled",class:d([t.buttonColor,t.buttonHoverColor,"h-8 w-8 justify-center items-center"]),"aria-hidden":"true"},null,8,["class"])])],2),e("div",{class:d([t.imgOrder,"lg:col-span-7 order-1"])},[r(p,{src:t.src,alt:t.alt,class:"rounded-xl h-full w-full object-cover object-center relative shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5",loading:"lazy"},null,8,["src","alt"])],2),r(m(j),{appear:"",show:s.value,as:"template"},{default:a(()=>[r(m(F),{as:"div",onClose:c,class:"relative z-10"},{default:a(()=>[r(m($),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[Fe]),_:1}),e("div",Te,[e("div",Oe,[r(m($),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[r(m(T),{class:d([t.startColor,t.endColor,"bg-gradient-to-tr w-full max-w-3xl transform overflow-hidden rounded-lg p-0 pt-0 sm:pt-0 pb-16 text-left align-middle shadow-xl transition-all relative"])},{default:a(()=>[e("div",qe,[r(p,{src:t.src,alt:t.alt,class:"rounded-t-lg h-full w-full object-cover object-center relative group-hover:opacity-90 transition"},null,8,["src","alt"])]),e("div",Ie,[r(m(O),{as:"h3",class:d([t.titleColor,"text-lg sm:text-xl font-semibold leading-6 max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-3"])},{default:a(()=>[n(l.$slots,"title",{},()=>[o(" Fallback Text. ")])]),_:3},8,["class"]),e("div",ze,[e("p",{class:d([t.contentColor,"text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-2 py-2 sm:px-4 sm:py-2"])},[n(l.$slots,"content",{},()=>[o(" Fallback text. ")])],2)]),e("button",{type:"button",class:"absolute bottom-0 right-0 p-4",onClick:c},[r(m(y),{icon:"carbon:close-filled",class:d([t.buttonColor,t.buttonHoverColor,"h-8 w-8"]),"aria-hidden":"true"},null,8,["class"])])])]),_:3},8,["class"])]),_:3})])])]),_:3})]),_:3},8,["show"])]),_:3},8,["to"])],8,je)}}},He={__name:"index",setup(t){return(s,c)=>(b(),f("div",null,[r(Ce,{id:"hero-solo",src:"/img/dummy/dummy-dark.jpg",alt:"alt-text",link:"/models/300b"},{heading:a(()=>[o(" 300B Integrated ")]),paragraph:a(()=>[o(" Timeless sound, natural beauty. ")]),button:a(()=>[o(" Explore ")]),_:1}),r(Le,{id:"custom-output-transformers",src:"/img/dummy/dummy-dark.jpg",alt:"alt-text","start-color":"from-white","end-color":"to-white","text-order":"lg:order-2","img-order":"lg:order-1","button-color":"text-gray-700","button-hover-color":"hover:text-gray-400"},{title:a(()=>[o(" Custom Output Transformers ")]),summary:a(()=>[o(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore voluptas atque aliquid minus alias repellendus optio provident neque asperiores officia ullam dolor ad sapiente dicta, nihil error! Recusandae, beatae. ")]),content:a(()=>[o(" The transformers of our amplifiers are custom-designed and built in our in-house transformer workshop. Our output transformers are constructed using high-permeability, large cross-section toroidal magnetic cores, which undergo initial impregnation during the production process. Following this, the winding process begins, utilizing a multi-layered, sectioned, and specially arranged winding configuration. This meticulous design ensures optimal performance across both low and high frequencies. Once the winding is complete, the transformers are encased in metal shielding cans to minimize electromagnetic interference. Finally, they are potted using an epoxy compound to eliminate mechanical vibrations and associated noises. ")]),_:1}),r(S,{id:"hero-trio",src1:"/img/openai/openai-1.jpg",src2:"/img/openai/openai-6.jpg",src3:"/img/openai/openai-9.jpg",link1:"/models/a75",link2:"/models/a35",link3:"/models/x200","card1-order":"lg:order-1","card2-order":"lg:order-2","card3-order":"lg:order-3"},{"title-1":a(()=>[o(" A75 Integrated ")]),"paragraph-1":a(()=>[o(" Lorem, ipsum dolor sit amet consectetur. ")]),"button-1":a(()=>[o(" Learn more ")]),"title-2":a(()=>[o(" A35 Integrated ")]),"paragraph-2":a(()=>[o(" Lorem, ipsum dolor sit amet. ")]),"title-3":a(()=>[o(" X200 Integrated ")]),"paragraph-3":a(()=>[o(" Lorem, ipsum dolor sit amet. ")]),_:1}),r(S,{id:"hero-trio-2",src1:"/img/openai/openai-29.jpg",src2:"/img/openai/openai-27.jpg",src3:"/img/openai/openai-28.jpg",link1:"/models/p200",link2:"/models/c200",link3:"/models/phono","card1-order":"lg:order-2","card2-order":"lg:order-1","card3-order":"lg:order-3"},{"title-1":a(()=>[o(" P200 Power Amplifier ")]),"paragraph-1":a(()=>[o(" Lorem, ipsum dolor sit amet consectetur. ")]),"button-1":a(()=>[o(" Learn more ")]),"title-2":a(()=>[o(" C200 Preamplifier ")]),"paragraph-2":a(()=>[o(" Lorem, ipsum dolor sit amet. ")]),"title-3":a(()=>[o(" Phono Preamplifier ")]),"paragraph-3":a(()=>[o(" Lorem, ipsum dolor sit amet. ")]),_:1}),r(K)]))}};export{He as default};
