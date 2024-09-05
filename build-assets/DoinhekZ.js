import{f as u,o as x,c as f,a as e,m as p,v as b,q as _,b as d,w as r,g,d as o}from"./CxJ6dmJg.js";import{_ as v}from"./BG1-cXgx.js";import{_ as w}from"./NZSqQkmb.js";const k={"data-aos":"fade-up",class:"bg-gray-50"},$={class:"max-w-7xl mx-auto p-4 bg-gray-50 border-none border-gray-200"},S={class:"flex items-center justify-start bg-white rounded-xl p-4 sm:p-0 max-w-7xl mx-auto py-8 sm:py-24 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"},C={class:"mx-auto w-full max-w-lg border-none border-gray-300"},q=e("h1",{class:"text-xl sm:text-3xl font-semibold"},"Contact us",-1),z=e("p",{class:"text-sm sm:text-base mt-3"},"Whether it's a question about our services, a request for technical assistance, or suggestions for improvement, our team is eager to hear from you.",-1),I={id:"contactForm",target:"_blank",action:"https://formsubmit.co/peter.kalapos@audiohungary.hu",method:"POST",class:"mt-10"},B={class:"grid gap-6 sm:grid-cols-2"},T={class:"relative z-0"},V=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your name",-1),j={class:"relative z-0"},F=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your email",-1),N={class:"relative z-0 col-span-2"},P=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your message",-1),A={class:"relative z-0 col-span-2"},D=e("p",{class:"text-xs text-gray-500 leading-relaxed"}," By signing the checkbox shown below, pursuant to Article 6 (1) (a) and Article 7 of the General Data Protection Act (GDPR), I agree that the personal data of the data controller defined in GDPR are subject to the terms of his prospectus. I know that I can withdraw my consent at any time under Article 7 (3) of the GDPR with one click. ",-1),M={class:"inline-flex items-center my-6"},E={class:"relative flex cursor-pointer items-center rounded-full mr-3",for:"login","data-ripple-dark":"true"},G=e("div",{class:"pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-700 opacity-0 transition-opacity peer-checked:opacity-100"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor","stroke-width":"1"},[e("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})])],-1),L=e("label",{class:"mt-px cursor-pointer select-none font-normal text-xs sm:text-sm text-gray-700",for:"login"}," I agree ",-1),U={__name:"ContactForm",setup(l){const t=u(""),n=u(""),c=u(""),i=u(!1),y=()=>{if(!t.value||!n.value||!c.value||!i.value){alert("Please fill out all required fields and agree to the terms.");return}const m=document.getElementById("contactForm");m.submit(),m.reset(),t.value="",n.value="",c.value="",i.value=!1,alert("Your message has been sent!")};return(m,a)=>(x(),f("section",k,[e("div",$,[e("div",S,[e("div",C,[q,z,e("form",I,[e("div",B,[e("div",T,[p(e("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),type:"text",name:"Name",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[b,t.value]]),V]),e("div",j,[p(e("input",{"onUpdate:modelValue":a[1]||(a[1]=s=>n.value=s),type:"text",name:"E-mail",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[b,n.value]]),F]),e("div",N,[p(e("textarea",{"onUpdate:modelValue":a[2]||(a[2]=s=>c.value=s),name:"Message",rows:"5",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[b,c.value]]),P]),e("div",A,[D,e("div",M,[e("label",E,[p(e("input",{id:"login",type:"checkbox","onUpdate:modelValue":a[3]||(a[3]=s=>i.value=s),class:"before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded border border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-200 checked:before:bg-green-500 hover:before:opacity-10"},null,512),[[_,i.value]]),G]),L])])]),e("button",{type:"button",onClick:y,class:"text-sm sm:text-base mt-1 rounded-3xl bg-black hover:bg-black/75 transition px-10 py-2 text-white flex mx-auto"},"Send Message")])])])])]))}},Y=["id"],R={class:"mx-auto max-w-screen-xl bg-gray-50 border-none border-gray-200"},H={class:"group relative block overflow-hidden transition ease-out active:opacity-75 rounded-xl"},O=e("div",{class:"absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"},null,-1),W={class:"absolute top-0 left-0 p-4 pl-10 pt-10 sm:text-sm md:text-base"},J={class:"text-base sm:text-base md:text-lg font-semibold text-gray-100"},K={class:"text-sm sm:text-sm md:text-base font-normal tracking-normal text-gray-100"},Q={class:"absolute bottom-0 left-0 pr-10 pl-10 pb-10 text-gray-100"},X={class:"mx-auto flex rounded-3xl border border-gray-200 px-6 sm:px-8 py-2 mt-4 text-xs sm:text-base font-medium text-gray-100 transition duration-300 hover:bg-gray-200 hover:text-gray-900 focus:outline-none"},h={__name:"HeroSolo",props:{id:{type:String,default:"hero-solo"},src:{type:String,default:"/img/dummy/dummy-dark.jpg"},alt:{type:String,default:"alt-text"},link:{type:String,default:"/"},contentColor:{type:String,default:"text-gray-700"},buttonColor:{type:String,default:"text-gray-500"},buttonHoverColor:{type:String,default:"hover:text-gray-300"}},setup(l){return(t,n)=>{const c=v,i=w;return x(),f("section",{id:l.id,class:"bg-gray-50"},[e("div",R,[d(i,{to:l.link,class:"pt-4 grid px-4 sm:px-4 sm:grid-cols-1"},{default:r(()=>[e("div",H,[d(c,{class:"rounded-xl h-full w-full object-cover transition-transform duration-500 ease-in group-hover:scale-105 aspect-[16/9]",src:l.src,alt:l.alt,placeholder:[75,50,100,15],loading:"lazy"},null,8,["src","alt"]),O,e("div",W,[e("h3",J,[g(t.$slots,"heading",{},()=>[o(" Fallback Text. ")])]),e("p",K,[g(t.$slots,"paragraph",{},()=>[o(" Fallback Text. ")])])]),e("div",Q,[e("button",X,[g(t.$slots,"button",{},()=>[o(" Fallback Text. ")])])])])]),_:3},8,["to"])])],8,Y)}}},oe={__name:"index",setup(l){return(t,n)=>(x(),f("div",null,[d(h,{id:"hero-solo",src:"/img/unsplash/ableton-1-mq.jpg",alt:"alt-text",link:"/models/300b"},{heading:r(()=>[o(" 300B Integrated ")]),paragraph:r(()=>[o(" Timeless sound, natural beauty. ")]),button:r(()=>[o(" Explore ")]),_:1}),d(h,{id:"hero-solo",src:"/img/unsplash/unsplash-4-mq.jpg",alt:"alt-text",link:"/models/a75"},{heading:r(()=>[o(" A75 Integrated ")]),paragraph:r(()=>[o(" Lorem ipsum dolor sit amet. ")]),button:r(()=>[o(" Learn more ")]),_:1}),d(U)]))}};export{oe as default};
