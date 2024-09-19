import{f as u,o as f,c as h,a as e,m as p,v as g,q as _,b as d,w as o,g as b,d as t}from"./EW29IDmw.js";import{_ as v}from"./B3zHn6Sj.js";import{_ as w}from"./CniQwyEg.js";const k={"data-aos":"fade-up",class:"bg-gray-50"},$={class:"max-w-screen-2xl mx-auto p-4 bg-gray-50 border-none border-gray-200"},S={class:"flex items-center justify-start bg-white rounded-xl p-4 sm:p-0 max-w-screen-2xl mx-auto py-8 sm:py-24 shadow-lg shadow-gray-700/10 ring-1 ring-gray-900/5 hover:shadow-xl transition duration-300"},q={class:"mx-auto w-full max-w-lg border-none border-gray-300"},C=e("h1",{class:"text-xl sm:text-3xl font-semibold"},"Contact us",-1),I=e("p",{class:"text-sm sm:text-base mt-3"},"Whether it's a question about our services, a request for technical assistance, or suggestions for improvement, our team is eager to hear from you.",-1),z={id:"contactForm",target:"_blank",action:"https://formsubmit.co/peter.kalapos@audiohungary.hu",method:"POST",class:"mt-10"},j={class:"grid gap-6 sm:grid-cols-2"},B={class:"relative z-0"},T=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your name",-1),V={class:"relative z-0"},F=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your email",-1),N={class:"relative z-0 col-span-2"},P=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your message",-1),A={class:"relative z-0 col-span-2"},D=e("p",{class:"text-xs text-gray-500 leading-relaxed"}," By signing the checkbox shown below, pursuant to Article 6 (1) (a) and Article 7 of the General Data Protection Act (GDPR), I agree that the personal data of the data controller defined in GDPR are subject to the terms of his prospectus. I know that I can withdraw my consent at any time under Article 7 (3) of the GDPR with one click. ",-1),E={class:"inline-flex items-center my-6"},L={class:"relative flex cursor-pointer items-center rounded-full mr-3",for:"login","data-ripple-dark":"true"},M=e("div",{class:"pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-700 opacity-0 transition-opacity peer-checked:opacity-100"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor","stroke-width":"1"},[e("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})])],-1),G=e("label",{class:"mt-px cursor-pointer select-none font-normal text-xs sm:text-sm text-gray-700",for:"login"}," I agree ",-1),U={__name:"ContactForm",setup(l){const a=u(""),n=u(""),c=u(""),i=u(!1),y=()=>{if(!a.value||!n.value||!c.value||!i.value){alert("Please fill out all required fields and agree to the terms.");return}const m=document.getElementById("contactForm");m.submit(),m.reset(),a.value="",n.value="",c.value="",i.value=!1,alert("Your message has been sent!")};return(m,s)=>(f(),h("section",k,[e("div",$,[e("div",S,[e("div",q,[C,I,e("form",z,[e("div",j,[e("div",B,[p(e("input",{"onUpdate:modelValue":s[0]||(s[0]=r=>a.value=r),type:"text",name:"Name",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[g,a.value]]),T]),e("div",V,[p(e("input",{"onUpdate:modelValue":s[1]||(s[1]=r=>n.value=r),type:"text",name:"E-mail",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[g,n.value]]),F]),e("div",N,[p(e("textarea",{"onUpdate:modelValue":s[2]||(s[2]=r=>c.value=r),name:"Message",rows:"5",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[g,c.value]]),P]),e("div",A,[D,e("div",E,[e("label",L,[p(e("input",{id:"login",type:"checkbox","onUpdate:modelValue":s[3]||(s[3]=r=>i.value=r),class:"before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded border border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-200 checked:before:bg-green-500 hover:before:opacity-10"},null,512),[[_,i.value]]),M]),G])])]),e("button",{type:"button",onClick:y,class:"text-sm sm:text-base mt-1 rounded-3xl bg-black hover:bg-black/75 transition px-10 py-2 text-white flex mx-auto"},"Send Message")])])])])]))}},Y=["id"],R={class:"mx-auto max-w-screen-2xl bg-gray-50 border-none border-gray-200"},H={class:"group relative block overflow-hidden transition ease-out active:opacity-75 rounded-xl"},O=e("div",{class:"absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"},null,-1),W={class:"absolute top-0 left-0 p-6 lg:pl-10 lg:pt-10 sm:text-sm md:text-base"},X={class:"text-base sm:text-base md:text-lg font-semibold text-gray-100"},J={class:"text-sm sm:text-sm md:text-base font-normal tracking-normal text-gray-100"},K={class:"absolute bottom-0 left-0 p-6 lg:pl-10 lg:pb-10 text-gray-100"},Q={class:"mx-auto flex rounded-3xl border border-gray-200 px-6 sm:px-8 py-2 mt-4 text-xs sm:text-base font-medium text-gray-100 transition duration-300 hover:bg-gray-200 hover:text-gray-900 focus:outline-none"},x={__name:"HeroSolo",props:{id:{type:String,default:"hero-solo"},src:{type:String,default:"/img/dummy/dummy-dark.jpg"},alt:{type:String,default:"alt-text"},link:{type:String,default:"/"},contentColor:{type:String,default:"text-gray-700"},buttonColor:{type:String,default:"text-gray-500"},buttonHoverColor:{type:String,default:"hover:text-gray-300"}},setup(l){return(a,n)=>{const c=v,i=w;return f(),h("section",{id:l.id,class:"bg-gray-50"},[e("div",R,[d(i,{to:l.link,class:"mb-4 grid mx-4 sm:mx-4 sm:grid-cols-1"},{default:o(()=>[e("div",H,[d(c,{class:"rounded-xl h-full w-full object-cover transition-transform duration-500 ease-in group-hover:scale-105 aspect-[16/9] lg:aspect-[16/7]",src:l.src,alt:l.alt,placeholder:[75,50,100,15],preload:""},null,8,["src","alt"]),O,e("div",W,[e("h3",X,[b(a.$slots,"heading",{},()=>[t(" Fallback Text. ")])]),e("p",J,[b(a.$slots,"paragraph",{},()=>[t(" Fallback Text. ")])])]),e("div",K,[e("button",Q,[b(a.$slots,"button",{},()=>[t(" Fallback Text. ")])])])])]),_:3},8,["to"])])],8,Y)}}},oe={__name:"index",setup(l){return(a,n)=>(f(),h("div",null,[d(x,{id:"hero-solo",src:"/img/unsplash/ableton-1-mq.jpg",alt:"alt-text",link:"/models/300b"},{heading:o(()=>[t(" 300B Integrated ")]),paragraph:o(()=>[t(" Timeless sound, natural beauty. ")]),button:o(()=>[t(" Explore ")]),_:1}),d(x,{id:"hero-solo",src:"/img/unsplash/unsplash-4-mq.jpg",alt:"alt-text",link:"/models/a75"},{heading:o(()=>[t(" A75 Integrated ")]),paragraph:o(()=>[t(" Lorem ipsum dolor sit amet. ")]),button:o(()=>[t(" Learn more ")]),_:1}),d(x,{id:"hero-solo",src:"/img/unsplash/ableton-4-hq.jpg",alt:"alt-text",link:"/models/x200"},{heading:o(()=>[t(" X200 Integrated ")]),paragraph:o(()=>[t(" Lorem ipsum dolor sit amet. ")]),button:o(()=>[t(" Explore ")]),_:1}),d(U)]))}};export{oe as default};
