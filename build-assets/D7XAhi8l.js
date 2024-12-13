import{r as p,m as T,e as u,o as h,c as v,a as t,v as b,f as $,b as i,w as s,p as f,d as r,n as z,u as y}from"./DwlPaNsZ.js";import{_ as B}from"./C3Z3QlMf.js";import{_ as j}from"./C9PvrmpF.js";const P={class:"bg-background"},A={class:"max-w-full mb-1 sm:mb-2 mx-1 sm:mx-2 rounded-xl sm:rounded-xl bg-theme-100 border-none border-theme-200"},H={class:"flex items-center justify-start bg-theme-100 rounded-xl sm:rounded-xl p-8 sm:p-0 max-w-full mx-auto py-8 sm:py-24 shadow-none shadow-theme-700/10 ring-none ring-theme-900/5 hover:shadow-none transition duration-300"},q={class:"mx-auto w-full max-w-lg border-none border-theme-300"},D={id:"contactForm",target:"_blank",action:"https://formsubmit.co/peter.kalapos@audiohungary.hu",method:"POST",class:"mt-10"},I={class:"grid gap-6 sm:grid-cols-2"},N={class:"relative z-0"},V={class:"relative z-0"},_={class:"relative z-0 col-span-2"},F={class:"relative z-0 col-span-2"},L={class:"inline-flex items-center my-6"},M={class:"relative flex cursor-pointer items-center rounded-full mr-3",for:"login","data-ripple-dark":"true"},U={__name:"ContactForm",setup(l){const n=p(""),e=p(""),d=p(""),m=p(!1),C=()=>{if(!n.value||!e.value||!d.value||!m.value){alert("Please fill out all required fields and agree to the terms.");return}const x=document.getElementById("contactForm");x.submit(),x.reset(),n.value="",e.value="",d.value="",m.value=!1,alert("Your message has been sent!")};return(x,o)=>{const S=T("motion-fade-visible");return u((h(),v("section",P,[t("div",A,[t("div",H,[t("div",q,[o[10]||(o[10]=t("h1",{class:"text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold"},"Contact Us",-1)),o[11]||(o[11]=t("p",{class:"text-sm sm:text-base mt-3 sm:mt-4 lg:mt-5 xl:mt-6"},"Whether it's a question about our services, a request for technical assistance, or suggestions for improvement, our team is eager to hear from you.",-1)),t("form",D,[t("div",I,[t("div",N,[u(t("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),type:"text",name:"Name",class:"peer block w-full appearance-none border-0 border-b border-theme-500 bg-transparent py-2.5 px-0 text-sm text-theme-900 focus:border-theme-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[b,n.value]]),o[4]||(o[4]=t("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-theme-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-theme-600 peer-focus:dark:text-theme-500"},"Your name",-1))]),t("div",V,[u(t("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>e.value=a),type:"text",name:"E-mail",class:"peer block w-full appearance-none border-0 border-b border-theme-500 bg-transparent py-2.5 px-0 text-sm text-theme-900 focus:border-theme-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[b,e.value]]),o[5]||(o[5]=t("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-theme-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-theme-600 peer-focus:dark:text-theme-500"},"Your email",-1))]),t("div",_,[u(t("textarea",{"onUpdate:modelValue":o[2]||(o[2]=a=>d.value=a),name:"Message",rows:"5",class:"peer block w-full appearance-none border-0 border-b border-theme-500 bg-transparent py-2.5 px-0 text-sm text-theme-900 focus:border-theme-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[b,d.value]]),o[6]||(o[6]=t("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-theme-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-theme-600 peer-focus:dark:text-theme-500"},"Your message",-1))]),t("div",F,[o[9]||(o[9]=t("p",{class:"text-xs text-theme-500 leading-relaxed"}," By signing the checkbox shown below, pursuant to Article 6 (1) (a) and Article 7 of the General Data Protection Act (GDPR), I agree that the personal data of the data controller defined in GDPR are subject to the terms of his prospectus. I know that I can withdraw my consent at any time under Article 7 (3) of the GDPR with one click. ",-1)),t("div",L,[t("label",M,[u(t("input",{id:"login",type:"checkbox","onUpdate:modelValue":o[3]||(o[3]=a=>m.value=a),class:"before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded border border-theme-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-theme-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-200 checked:before:bg-green-500 hover:before:opacity-10"},null,512),[[$,m.value]]),o[7]||(o[7]=t("div",{class:"pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-700 opacity-0 transition-opacity peer-checked:opacity-100"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor","stroke-width":"1"},[t("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})])],-1))]),o[8]||(o[8]=t("label",{class:"mt-px cursor-pointer select-none font-normal text-xs sm:text-sm text-theme-700",for:"login"}," I agree ",-1))])])]),t("button",{type:"button",onClick:C,class:"text-sm sm:text-base mt-1 rounded-3xl bg-theme-700 hover:bg-theme-900 transition px-8 py-2 text-white flex mx-auto"},"Send Message")])])])])])),[[S]])}}},E=["id"],G={class:"mx-auto max-w-full bg-background border-none border-theme-200"},Y={class:"group relative block overflow-hidden transition ease-out active:opacity-75 rounded-none sm:rounded-none bg-background"},R={class:"absolute inset-0 flex flex-col p-6 lg:pt-12 sm:text-sm md:text-base"},X={class:"font-hero tracking-tight text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-theme-100 text-center"},O={class:"font-hero text-sm sm:text-base md:text-base lg:text-lg font-normal tracking-normal text-theme-100 text-center pt-0"},Q={class:"absolute bottom-0 left-0 w-full flex justify-center mx-auto p-6 lg:pb-10 text-theme-100"},c={__name:"HeroSolo",props:{id:{type:String,default:"hero-solo"},src:{type:String,default:"/img/dummy/dummy-dark.jpg"},alt:{type:String,default:"alt-text"},link:{type:String,default:"/"},contentColor:{type:String,default:"text-theme-700"},buttonColor:{type:String,default:"bg-theme-800 bg-opacity-50"},buttonHoverColor:{type:String,default:"lg:hover:bg-theme-600 lg:hover:bg-opacity-50"},buttonTextColor:{type:String,default:"text-white"},buttonTextHoverColor:{type:String,default:"lg:hover:text-white"},buttonBorderColor:{type:String,default:"border-white lg:hover:border-white"}},setup(l){return(n,e)=>{const d=B,m=j;return h(),v("section",{id:l.id,class:"bg-background"},[t("div",G,[i(m,{to:l.link,class:"mb-1 sm:mb-2 grid mx-1 sm:mx-2 sm:grid-cols-1"},{default:s(()=>[t("div",Y,[i(d,{class:"rounded-xl sm:rounded-xl h-full w-full object-cover transition-transform duration-500 ease-in group-hover:scale-100 aspect-[1/1] sm:aspect-[16/9] lg:aspect-[16/7]",src:l.src,alt:l.alt,placeholder:[75,50,100,15],sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw",preload:"",as:"image"},null,8,["src","alt"]),e[3]||(e[3]=t("div",{class:"absolute inset-0 rounded-xl bg-gradient-to-b from-theme-900/80 via-theme-900/0 to-theme-900/0"},null,-1)),t("div",R,[t("h3",X,[f(n.$slots,"heading",{},()=>[e[0]||(e[0]=r(" Fallback Text. "))])]),t("p",O,[f(n.$slots,"paragraph",{},()=>[e[1]||(e[1]=r(" Fallback Text. "))])])]),t("div",Q,[t("button",{class:z([l.buttonColor,l.buttonHoverColor,l.buttonTextColor,l.buttonTextHoverColor,l.buttonBorderColor,"mx-auto flex rounded-3xl border px-6 sm:px-8 py-2 mt-4 text-sm md:text-base font-normal transition duration-300 focus:outline-none"])},[f(n.$slots,"button",{},()=>[e[2]||(e[2]=r(" Fallback Text. "))])],2)])])]),_:3},8,["to"])])],8,E)}}},w="Qualiton",g="High-End Audio Products. Made in Nyiregyhaza, Hungary.",k="/img/hero/300B-1.jpg",Z={__name:"index",setup(l){return y({title:"",meta:[{name:"description",content:g},{property:"og:title",content:w},{property:"og:description",content:g},{property:"og:image",content:k},{name:"twitter:title",content:w},{name:"twitter:description",content:g},{name:"twitter:image",content:k},{name:"twitter:card",content:"summary"}]}),y({htmlAttrs:{lang:"en"},link:[{rel:"icon",type:"image/x-icon",href:"favicon-q.ico?v=1"}]}),(n,e)=>(h(),v("div",null,[i(c,{id:"hero-solo",src:"/img/hero/300B-1.jpg",alt:"alt-text",link:"/models/300b"},{heading:s(()=>e[0]||(e[0]=[r(" 300B ")])),paragraph:s(()=>e[1]||(e[1]=[r(" Timeless sound, natural beauty. ")])),button:s(()=>e[2]||(e[2]=[r(" Learn more ")])),_:1}),i(c,{id:"hero-solo",src:"/img/hero/p200-2.jpg",alt:"alt-text",link:"/models/p200"},{heading:s(()=>e[3]||(e[3]=[r(" P200 ")])),paragraph:s(()=>e[4]||(e[4]=[r(" Power meets precision. ")])),button:s(()=>e[5]||(e[5]=[r(" Learn more ")])),_:1}),i(c,{id:"hero-solo",src:"/img/hero/A75.jpg",alt:"alt-text",link:"/models/a75"},{heading:s(()=>e[6]||(e[6]=[r(" A75 ")])),paragraph:s(()=>e[7]||(e[7]=[r(" Compact tube power, perfected. ")])),button:s(()=>e[8]||(e[8]=[r(" Learn more ")])),_:1}),i(c,{id:"hero-solo",src:"/img/hero/X200-1.jpg",alt:"alt-text",link:"/models/x200"},{heading:s(()=>e[9]||(e[9]=[r(" X200 ")])),paragraph:s(()=>e[10]||(e[10]=[r(" The ultimate analog all-rounder. ")])),button:s(()=>e[11]||(e[11]=[r(" Learn more ")])),_:1}),i(U)]))}};export{Z as default};