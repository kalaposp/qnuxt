import{f as u,o as f,c as h,a as e,m as p,v as b,q as v,b as n,w as o,g as x,d as t,n as _}from"./BFd0vrgF.js";import{_ as w}from"./DmRzJseM.js";import{_ as k}from"./BfogVCPK.js";const C={"data-aos":"fade-up",class:"bg-gray-100"},S={class:"max-w-full mb-4 mx-4 sm:mx-4 bg-gray-100 border-none border-gray-200"},$={class:"flex items-center justify-start bg-white rounded-xl p-8 sm:p-0 max-w-full mx-auto py-8 sm:py-24 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"},T={class:"mx-auto w-full max-w-lg border-none border-gray-300"},z=e("h1",{class:"text-lg sm:text-2xl font-semibold"},"Contact us",-1),j=e("p",{class:"text-sm sm:text-base mt-3"},"Whether it's a question about our services, a request for technical assistance, or suggestions for improvement, our team is eager to hear from you.",-1),B={id:"contactForm",target:"_blank",action:"https://formsubmit.co/peter.kalapos@audiohungary.hu",method:"POST",class:"mt-10"},q={class:"grid gap-6 sm:grid-cols-2"},P={class:"relative z-0"},V=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your name",-1),E={class:"relative z-0"},F=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your email",-1),I={class:"relative z-0 col-span-2"},L=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your message",-1),N={class:"relative z-0 col-span-2"},A=e("p",{class:"text-xs text-gray-500 leading-relaxed"}," By signing the checkbox shown below, pursuant to Article 6 (1) (a) and Article 7 of the General Data Protection Act (GDPR), I agree that the personal data of the data controller defined in GDPR are subject to the terms of his prospectus. I know that I can withdraw my consent at any time under Article 7 (3) of the GDPR with one click. ",-1),D={class:"inline-flex items-center my-6"},H={class:"relative flex cursor-pointer items-center rounded-full mr-3",for:"login","data-ripple-dark":"true"},M=e("div",{class:"pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-700 opacity-0 transition-opacity peer-checked:opacity-100"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor","stroke-width":"1"},[e("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})])],-1),G=e("label",{class:"mt-px cursor-pointer select-none font-normal text-xs sm:text-sm text-gray-700",for:"login"}," I agree ",-1),U={__name:"ContactForm",setup(a){const r=u(""),i=u(""),c=u(""),d=u(!1),y=()=>{if(!r.value||!i.value||!c.value||!d.value){alert("Please fill out all required fields and agree to the terms.");return}const g=document.getElementById("contactForm");g.submit(),g.reset(),r.value="",i.value="",c.value="",d.value=!1,alert("Your message has been sent!")};return(g,s)=>(f(),h("section",C,[e("div",S,[e("div",$,[e("div",T,[z,j,e("form",B,[e("div",q,[e("div",P,[p(e("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>r.value=l),type:"text",name:"Name",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[b,r.value]]),V]),e("div",E,[p(e("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>i.value=l),type:"text",name:"E-mail",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[b,i.value]]),F]),e("div",I,[p(e("textarea",{"onUpdate:modelValue":s[2]||(s[2]=l=>c.value=l),name:"Message",rows:"5",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[b,c.value]]),L]),e("div",N,[A,e("div",D,[e("label",H,[p(e("input",{id:"login",type:"checkbox","onUpdate:modelValue":s[3]||(s[3]=l=>d.value=l),class:"before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded border border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-200 checked:before:bg-green-500 hover:before:opacity-10"},null,512),[[v,d.value]]),M]),G])])]),e("button",{type:"button",onClick:y,class:"text-xs sm:text-base mt-1 rounded-3xl bg-black hover:bg-black/75 transition px-10 py-2 text-white flex mx-auto"},"Send Message")])])])])]))}},Y=["id"],R={class:"mx-auto max-w-full bg-gray-100 border-none border-gray-200"},O={class:"group relative block overflow-hidden transition ease-out active:opacity-75 rounded-xl"},W=e("div",{class:"absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"},null,-1),X={class:"absolute inset-0 flex flex-col p-6 lg:pl-10 lg:pt-12 sm:text-sm md:text-base"},J={class:"font-hero text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-100 text-center"},K={class:"font-sans text-sm sm:text-sm md:text-base lg:text-lg font-normal tracking-normal text-gray-100 text-center pt-0"},Q={class:"absolute bottom-0 left-0 w-full flex justify-center p-6 lg:pl-10 lg:pb-10 text-gray-100"},m={__name:"HeroSolo",props:{id:{type:String,default:"hero-solo"},src:{type:String,default:"/img/dummy/dummy-dark.jpg"},alt:{type:String,default:"alt-text"},link:{type:String,default:"/"},contentColor:{type:String,default:"text-gray-700"},buttonColor:{type:String,default:"bg-none"},buttonHoverColor:{type:String,default:"hover:bg-gray-200"},buttonTextColor:{type:String,default:"text-gray-100"},buttonTextHoverColor:{type:String,default:"hover:text-gray-900"},buttonBorderColor:{type:String,default:"border-gray-200"}},setup(a){return(r,i)=>{const c=w,d=k;return f(),h("section",{id:a.id,class:"bg-gray-100"},[e("div",R,[n(d,{to:a.link,class:"mb-4 grid mx-4 sm:mx-4 sm:grid-cols-1"},{default:o(()=>[e("div",O,[n(c,{class:"rounded-xl h-full w-full object-cover transition-transform duration-500 ease-in group-hover:scale-100 aspect-[1/1] sm:aspect-[16/9] lg:aspect-[16/7]",src:a.src,alt:a.alt,placeholder:[75,50,100,15],sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw",preload:""},null,8,["src","alt"]),W,e("div",X,[e("h3",J,[x(r.$slots,"heading",{},()=>[t(" Fallback Text. ")])]),e("p",K,[x(r.$slots,"paragraph",{},()=>[t(" Fallback Text. ")])])]),e("div",Q,[e("button",{class:_([a.buttonColor,a.buttonHoverColor,a.buttonTextColor,a.buttonTextHoverColor,a.buttonBorderColor,"mx-auto flex rounded-3xl border px-6 sm:px-8 py-2 mt-4 text-xs md:text-base font-medium transition duration-300 focus:outline-none"])},[x(r.$slots,"button",{},()=>[t(" Fallback Text. ")])],2)])])]),_:3},8,["to"])])],8,Y)}}},oe={__name:"index",setup(a){return(r,i)=>(f(),h("div",null,[n(m,{id:"hero-solo",src:"/img/unsplash/unsplash-13.jpg",alt:"alt-text",link:"/models/300b"},{heading:o(()=>[t(" 300B ")]),paragraph:o(()=>[t(" Timeless sound, natural beauty. ")]),button:o(()=>[t(" Explore ")]),_:1}),n(m,{id:"hero-solo",src:"/img/unsplash/unsplash-14.jpg",alt:"alt-text",link:"/models/p200"},{heading:o(()=>[t(" P200 ")]),paragraph:o(()=>[t(" Lorem ipsum dolor sit amet. ")]),button:o(()=>[t(" Explore ")]),_:1}),n(m,{id:"hero-solo",src:"/img/unsplash/unsplash-4.jpg",alt:"alt-text",link:"/models/a75"},{heading:o(()=>[t(" A75 ")]),paragraph:o(()=>[t(" Lorem ipsum dolor sit amet. ")]),button:o(()=>[t(" Learn more ")]),_:1}),n(m,{id:"hero-solo",src:"/img/unsplash/unsplash-15.jpg",alt:"alt-text",link:"/models/x200"},{heading:o(()=>[t(" X200 ")]),paragraph:o(()=>[t(" Lorem ipsum dolor sit amet. ")]),button:o(()=>[t(" Explore ")]),_:1}),n(U)]))}};export{oe as default};