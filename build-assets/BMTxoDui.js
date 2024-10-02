import{g as n,o as p,c as m,a as e,v as c,x as d,y as x,u as g,b as u,w as h,d as y}from"./CWGAXxcT.js";import{_ as v}from"./BlPlX9Nx.js";import"./bnIyoLUy.js";const _={class:"flex items-center justify-start bg-white p-4 sm:p-0 max-w-full mx-auto border-none border-gray-300 py-4 sm:py-16"},w={class:"grid gap-10 lg:grid-cols-12 max-w-7xl mx-auto bg-white rounded-2xl p-8 sm:p-10 shadow-none shadow-gray-700/10 ring-none ring-gray-900/5 hover:shadow-none transition duration-300"},k={class:"mx-auto lg:col-span-6 h-full w-full max-w-lg border-none border-gray-200 order-1"},z=e("h1",{class:"text-xl sm:text-2xl lg:text-3xl font-semibold"},"Contact us",-1),C=e("p",{class:"text-sm sm:text-base mt-3 sm:mt-6"},"Whether it's a question about our services, a request for technical assistance, or suggestions for improvement, our team is eager to hear from you.",-1),A={id:"contactForm",target:"_blank",action:"https://formsubmit.co/peter.kalapos@audiohungary.hu",method:"POST",class:"mt-10"},P={class:"grid gap-6 sm:grid-cols-2"},V={class:"relative z-0"},q=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your name",-1),B={class:"relative z-0"},D=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your email",-1),I={class:"relative z-0 col-span-2"},U=e("label",{class:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"},"Your message",-1),M={class:"relative z-0 col-span-2"},N=e("p",{class:"text-xs text-gray-500 leading-relaxed"}," By signing the checkbox shown below, pursuant to Article 6 (1) (a) and Article 7 of the General Data Protection Act (GDPR), I agree that the personal data of the data controller defined in GDPR are subject to the terms of his prospectus. I know that I can withdraw my consent at any time under Article 7 (3) of the GDPR with one click. ",-1),G={class:"inline-flex items-center my-6"},H={class:"relative flex cursor-pointer items-center rounded-full mr-3",for:"login","data-ripple-dark":"true"},Y=e("div",{class:"pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-700 opacity-0 transition-opacity peer-checked:opacity-100"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor","stroke-width":"1"},[e("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})])],-1),E=e("label",{class:"mt-px cursor-pointer select-none font-normal text-xs sm:text-sm text-gray-700",for:"login"}," I agree ",-1),R=e("div",{class:"mx-auto lg:col-span-6 h-full w-full max-w-lg order-2 bg-gray-50 rounded-2xl pb-2 border border-gray-200"},[e("div",{class:"mx-auto max-w-7xl bg-none"},[e("div",{class:"max-w-lg h-96 overflow-hidden p-2 mx-auto bg-gray-50 rounded-2xl"},[e("iframe",{width:"100%",height:"100%",class:"max-w-4xl mx-auto rounded-2xl",frameborder:"0",title:"map",marginheight:"0",marginwidth:"0",scrolling:"no",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.9290749849074!2d21.695198006103094!3d47.942905199904125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47389fe5daa30c3d%3A0x4d3154f7c507852!2sAudio-Hungary%20Kft.!5e0!3m2!1shu!2shu!4v1724239859597!5m2!1shu!2shu",style:{filter:"contrast(1.2)"}})])]),e("div",{class:"bg-none items-center px-6 py-4"},[e("p",{class:"font-semibold text-sm sm:text-base"},"Audio-Hungary Kft."),e("p",{class:"text-sm sm:text-base"},"4400 Nyíregyháza, Derkovits utca 132/P, Hungary"),e("p",{class:"text-sm sm:text-base"},"+36 42 44 66 88")])],-1),S={__name:"ContactInformation",setup(f){const a=n(""),s=n(""),r=n(""),l=n(!1),b=()=>{if(!a.value||!s.value||!r.value||!l.value){alert("Please fill out all required fields and agree to the terms.");return}const i=document.getElementById("contactForm");i.submit(),i.reset(),a.value="",s.value="",r.value="",l.value=!1,alert("Your message has been sent!")};return(i,t)=>(p(),m("div",_,[e("div",w,[e("div",k,[z,C,e("form",A,[e("div",P,[e("div",V,[c(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),type:"text",name:"Name",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[d,a.value]]),q]),e("div",B,[c(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.value=o),type:"text",name:"E-mail",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[d,s.value]]),D]),e("div",I,[c(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=o=>r.value=o),name:"Message",rows:"5",class:"peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0",placeholder:" ",required:""},null,512),[[d,r.value]]),U]),e("div",M,[N,e("div",G,[e("label",H,[c(e("input",{id:"login",type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=o=>l.value=o),class:"before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded border border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-200 checked:before:bg-green-500 hover:before:opacity-10"},null,512),[[x,l.value]]),Y]),E])])]),e("button",{type:"button",onClick:b,class:"text-xs sm:text-base mt-1 rounded-3xl bg-black hover:bg-black/75 transition px-10 py-2 text-white flex mx-auto"}," Send Message ")])]),R])]))}},K={__name:"index",setup(f){return g({title:"Qualiton | Contact Us"}),(a,s)=>(p(),m("div",null,[u(v,{id:"contact-bar",path:"./contact"},{heading:h(()=>[y(" Contact Us ")]),_:1}),u(S)]))}};export{K as default};
