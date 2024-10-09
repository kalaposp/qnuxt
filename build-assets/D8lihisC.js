import{f as m,m as y,q as u,o as f,c as g,a as e,v as b,x as w,b as n,w as o,g as x,d as t,n as k}from"./Bj4-uZt8.js";import{_ as C}from"./HuHMp5zs.js";import{_ as S}from"./Cq9I7q4w.js";const $={class:"bg-theme-100"},T={class:"max-w-full mb-3 mx-0 sm:mx-0 bg-theme-100 border-none border-theme-200"},z={class:"flex items-center justify-start bg-white rounded-none sm:rounded-none p-8 sm:p-0 max-w-full mx-auto py-8 sm:py-24 shadow-none shadow-theme-700/10 ring-none ring-theme-900/5 hover:shadow-none transition duration-300"},j={class:"mx-auto w-full max-w-lg border-none border-theme-300"},B=e("h1",{class:"text-lg sm:text-2xl font-semibold"},"Contact us",-1),q=e("p",{class:"text-sm sm:text-base mt-3"},"Whether it's a question about our services, a request for technical assistance, or suggestions for improvement, our team is eager to hear from you.",-1),P={id:"contactForm",target:"_blank",action:"https://formsubmit.co/peter.kalapos@audiohungary.hu",method:"POST",class:"mt-10"},V={class:"grid gap-6 sm:grid-cols-2"},D={class:"relative z-0"},E=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-theme-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your name",-1),F={class:"relative z-0"},I=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-theme-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your email",-1),L={class:"relative z-0 col-span-2"},N=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-theme-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your message",-1),A={class:"relative z-0 col-span-2"},H=e("p",{class:"text-xs text-theme-500 leading-relaxed"}," By signing the checkbox shown below, pursuant to Article 6 (1) (a) and Article 7 of the General Data Protection Act (GDPR), I agree that the personal data of the data controller defined in GDPR are subject to the terms of his prospectus. I know that I can withdraw my consent at any time under Article 7 (3) of the GDPR with one click. ",-1),M={class:"inline-flex items-center my-6"},G={class:"relative flex cursor-pointer items-center rounded-full mr-3",for:"login","data-ripple-dark":"true"},U=e("div",{class:"pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-700 opacity-0 transition-opacity peer-checked:opacity-100"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor","stroke-width":"1"},[e("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})])],-1),Y=e("label",{class:"mt-px cursor-pointer select-none font-normal text-xs sm:text-sm text-theme-700",for:"login"}," I agree ",-1),R={__name:"ContactForm",setup(s){const a=m(""),i=m(""),c=m(""),d=m(!1),v=()=>{if(!a.value||!i.value||!c.value||!d.value){alert("Please fill out all required fields and agree to the terms.");return}const h=document.getElementById("contactForm");h.submit(),h.reset(),a.value="",i.value="",c.value="",d.value=!1,alert("Your message has been sent!")};return(h,r)=>{const _=y("motion-fade-visible");return u((f(),g("section",$,[e("div",T,[e("div",z,[e("div",j,[B,q,e("form",P,[e("div",V,[e("div",D,[u(e("input",{"onUpdate:modelValue":r[0]||(r[0]=l=>a.value=l),type:"text",name:"Name",class:"peer block w-full appearance-none border-0 border-b border-theme-500 bg-transparent py-2.5 px-0 text-sm text-theme-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[b,a.value]]),E]),e("div",F,[u(e("input",{"onUpdate:modelValue":r[1]||(r[1]=l=>i.value=l),type:"text",name:"E-mail",class:"peer block w-full appearance-none border-0 border-b border-theme-500 bg-transparent py-2.5 px-0 text-sm text-theme-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[b,i.value]]),I]),e("div",L,[u(e("textarea",{"onUpdate:modelValue":r[2]||(r[2]=l=>c.value=l),name:"Message",rows:"5",class:"peer block w-full appearance-none border-0 border-b border-theme-500 bg-transparent py-2.5 px-0 text-sm text-theme-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[b,c.value]]),N]),e("div",A,[H,e("div",M,[e("label",G,[u(e("input",{id:"login",type:"checkbox","onUpdate:modelValue":r[3]||(r[3]=l=>d.value=l),class:"before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded border border-theme-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-theme-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-200 checked:before:bg-green-500 hover:before:opacity-10"},null,512),[[w,d.value]]),U]),Y])])]),e("button",{type:"button",onClick:v,class:"text-xs sm:text-base mt-1 rounded-3xl bg-black hover:bg-black/75 transition px-10 py-2 text-white flex mx-auto"},"Send Message")])])])])])),[[_]])}}},O=["id"],W={class:"mx-auto max-w-full bg-theme-100 border-none border-theme-200"},X={class:"group relative block overflow-hidden transition ease-out active:opacity-75 rounded-none sm:rounded-none"},J=e("div",{class:"absolute inset-0 bg-gradient-to-b from-theme-900/25 to-theme-900/5"},null,-1),K={class:"absolute inset-0 flex flex-col p-6 lg:pt-12 sm:text-sm md:text-base"},Q={class:"font-hero text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-theme-100 text-center"},Z={class:"font-sans text-sm sm:text-sm md:text-base lg:text-lg font-normal tracking-normal text-theme-100 text-center pt-0"},ee={class:"absolute bottom-0 left-0 w-full flex justify-center mx-auto p-6 lg:pb-10 text-theme-100"},p={__name:"HeroSolo",props:{id:{type:String,default:"hero-solo"},src:{type:String,default:"/img/dummy/dummy-dark.jpg"},alt:{type:String,default:"alt-text"},link:{type:String,default:"/"},contentColor:{type:String,default:"text-theme-700"},buttonColor:{type:String,default:"bg-none"},buttonHoverColor:{type:String,default:"hover:bg-theme-200"},buttonTextColor:{type:String,default:"text-theme-100"},buttonTextHoverColor:{type:String,default:"hover:text-theme-900"},buttonBorderColor:{type:String,default:"border-theme-200"}},setup(s){return(a,i)=>{const c=C,d=S;return f(),g("section",{id:s.id,class:"bg-theme-100"},[e("div",W,[n(d,{to:s.link,class:"mb-3 grid mx-0 sm:mx-0 sm:grid-cols-1"},{default:o(()=>[e("div",X,[n(c,{class:"rounded-none sm:rounded-none h-full w-full object-cover transition-transform duration-500 ease-in group-hover:scale-100 aspect-[1/1] sm:aspect-[16/9] lg:aspect-[16/7]",src:s.src,alt:s.alt,placeholder:[75,50,100,15],sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw",preload:""},null,8,["src","alt"]),J,e("div",K,[e("h3",Q,[x(a.$slots,"heading",{},()=>[t(" Fallback Text. ")])]),e("p",Z,[x(a.$slots,"paragraph",{},()=>[t(" Fallback Text. ")])])]),e("div",ee,[e("button",{class:k([s.buttonColor,s.buttonHoverColor,s.buttonTextColor,s.buttonTextHoverColor,s.buttonBorderColor,"mx-auto flex rounded-3xl border px-6 sm:px-8 py-2 mt-4 text-xs md:text-base font-medium transition duration-300 focus:outline-none"])},[x(a.$slots,"button",{},()=>[t(" Fallback Text. ")])],2)])])]),_:3},8,["to"])])],8,O)}}},ae={__name:"index",setup(s){return(a,i)=>(f(),g("div",null,[n(p,{id:"hero-solo",src:"/img/unsplash/unsplash-13.jpg",alt:"alt-text",link:"/models/300b"},{heading:o(()=>[t(" 300B ")]),paragraph:o(()=>[t(" Timeless sound, natural beauty. ")]),button:o(()=>[t(" Explore ")]),_:1}),n(p,{id:"hero-solo",src:"/img/unsplash/unsplash-14.jpg",alt:"alt-text",link:"/models/p200"},{heading:o(()=>[t(" P200 ")]),paragraph:o(()=>[t(" Lorem ipsum dolor sit amet. ")]),button:o(()=>[t(" Explore ")]),_:1}),n(p,{id:"hero-solo",src:"/img/unsplash/unsplash-4.jpg",alt:"alt-text",link:"/models/a75"},{heading:o(()=>[t(" A75 ")]),paragraph:o(()=>[t(" Lorem ipsum dolor sit amet. ")]),button:o(()=>[t(" Learn more ")]),_:1}),n(p,{id:"hero-solo",src:"/img/unsplash/unsplash-15.jpg",alt:"alt-text",link:"/models/x200"},{heading:o(()=>[t(" X200 ")]),paragraph:o(()=>[t(" Lorem ipsum dolor sit amet. ")]),button:o(()=>[t(" Explore ")]),_:1}),n(R)]))}};export{ae as default};
