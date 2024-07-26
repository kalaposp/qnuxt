import{n as B,r as v,x as T,s as S,f as L,z as N,l as U,A as z,o as i,c as p,a as e,b as c,u,w as g,Q as R,F as k,d as x,a3 as W,j as $,C as q,B as A,a4 as P,t as C}from"./CW2CgJTy.js";import{r as J,y as X,b as ee,j as te,A as ae,G as se,a as le,Y as ne}from"./ds99XumV.js";import{I,a as V,o as y,h as oe,A as j,s as re,l as ie,N as E,b as w,k as D}from"./BH_YyuKs.js";var de=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(de||{});let G=Symbol("DisclosureContext");function O(t){let l=z(G,null);if(l===null){let f=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,O),f}return l}let Y=Symbol("DisclosurePanelContext");function ce(){return z(Y,null)}let ue=B({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:l,attrs:f}){let o=v(t.defaultOpen?0:1),a=v(null),d=v(null),s={buttonId:v(`headlessui-disclosure-button-${I()}`),panelId:v(`headlessui-disclosure-panel-${I()}`),disclosureState:o,panel:a,button:d,toggleDisclosure(){o.value=V(o.value,{0:1,1:0})},closeDisclosure(){o.value!==1&&(o.value=1)},close(n){s.closeDisclosure();let h=n?n instanceof HTMLElement?n:n.value instanceof HTMLElement?y(n):y(s.button):y(s.button);h==null||h.focus()}};return T(G,s),oe(S(()=>V(o.value,{0:D.Open,1:D.Closed}))),()=>{let{defaultOpen:n,...h}=t,m={open:o.value===0,close:s.close};return j({theirProps:h,ourProps:{},slot:m,slots:l,attrs:f,name:"Disclosure"})}}}),Z=B({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(t,{attrs:l,slots:f,expose:o}){let a=O("DisclosureButton"),d=ce(),s=S(()=>d===null?!1:d.value===a.panelId.value);L(()=>{s.value||t.id!==null&&(a.buttonId.value=t.id)}),N(()=>{s.value||(a.buttonId.value=null)});let n=v(null);o({el:n,$el:n}),s.value||U(()=>{a.button.value=n.value});let h=re(S(()=>({as:t.as,type:l.type})),n);function m(){var r;t.disabled||(s.value?(a.toggleDisclosure(),(r=y(a.button))==null||r.focus()):a.toggleDisclosure())}function _(r){var b;if(!t.disabled)if(s.value)switch(r.key){case w.Space:case w.Enter:r.preventDefault(),r.stopPropagation(),a.toggleDisclosure(),(b=y(a.button))==null||b.focus();break}else switch(r.key){case w.Space:case w.Enter:r.preventDefault(),r.stopPropagation(),a.toggleDisclosure();break}}function M(r){switch(r.key){case w.Space:r.preventDefault();break}}return()=>{var r;let b={open:a.disclosureState.value===0},{id:F,...K}=t,Q=s.value?{ref:n,type:h.value,onClick:m,onKeydown:_}:{id:(r=a.buttonId.value)!=null?r:F,ref:n,type:h.value,"aria-expanded":a.disclosureState.value===0,"aria-controls":a.disclosureState.value===0||y(a.panel)?a.panelId.value:void 0,disabled:t.disabled?!0:void 0,onClick:m,onKeydown:_,onKeyup:M};return j({ourProps:Q,theirProps:K,slot:b,attrs:l,slots:f,name:"DisclosureButton"})}}}),pe=B({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:l,slots:f,expose:o}){let a=O("DisclosurePanel");L(()=>{t.id!==null&&(a.panelId.value=t.id)}),N(()=>{a.panelId.value=null}),o({el:a.panel,$el:a.panel}),T(Y,a.panelId);let d=ie(),s=S(()=>d!==null?(d.value&D.Open)===D.Open:a.disclosureState.value===0);return()=>{var n;let h={open:a.disclosureState.value===0,close:a.close},{id:m,..._}=t,M={id:(n=a.panelId.value)!=null?n:m,ref:a.panel};return j({ourProps:M,theirProps:_,slot:h,attrs:l,slots:f,features:E.RenderStrategy|E.Static,visible:s.value,name:"DisclosurePanel"})}}});function fe(t,l){return i(),p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"})])}function ge(t,l){return i(),p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"})])}function he(t,l){return i(),p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"})])}function ve(t,l){return i(),p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"})])}function me(t,l){return i(),p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"})])}function H(t,l){return i(),p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}function xe(t,l){return i(),p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z","clip-rule":"evenodd"})])}function ye(t,l){return i(),p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z","clip-rule":"evenodd"})])}const we={class:"bg-white antialiased"},_e={class:"mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8","aria-label":"Global"},be=e("div",{class:"flex lg:flex-1"},[e("a",{href:"#",class:"-m-1.5 p-1.5"},[e("span",{class:"sr-only"},"Your Company"),e("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:""})])],-1),ke={class:"flex lg:hidden"},Ce=e("span",{class:"sr-only"},"Open main menu",-1),Se={class:"p-4"},De={class:"flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"},Me={class:"flex-auto"},$e=["href"],Ae=e("span",{class:"absolute inset-0"},null,-1),Be={class:"mt-1 text-gray-600"},je={class:"grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"},Oe=["href"],Pe=e("a",{href:"#",class:"text-sm font-semibold leading-6 text-gray-900"},"Features",-1),Ie=e("a",{href:"#",class:"text-sm font-semibold leading-6 text-gray-900"},"Marketplace",-1),Ve=e("a",{href:"#",class:"text-sm font-semibold leading-6 text-gray-900"},"Company",-1),Ee=e("div",{class:"hidden lg:flex lg:flex-1 lg:justify-end"},[e("a",{href:"#",class:"text-sm font-semibold leading-6 text-gray-900"},[x("Log in "),e("span",{"aria-hidden":"true"},"→")])],-1),Ze=e("div",{class:"fixed inset-0 z-10"},null,-1),He={class:"flex items-center justify-between"},Te=e("a",{href:"#",class:"-m-1.5 p-1.5"},[e("span",{class:"sr-only"},"Your Company"),e("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:""})],-1),Le=e("span",{class:"sr-only"},"Close menu",-1),Ne={class:"mt-6 flow-root"},ze={class:"-my-6 divide-y divide-gray-500/10"},Ge={class:"space-y-2 py-6"},Ye=e("a",{href:"#",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},"Features",-1),Fe=e("a",{href:"#",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},"Marketplace",-1),Ke=e("a",{href:"#",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},"Company",-1),Qe=e("div",{class:"py-6"},[e("a",{href:"#",class:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},"Log in")],-1),qe={__name:"navbar-test-1",setup(t){const l=[{name:"Analytics",description:"Get a better understanding of your traffic",href:"#",icon:ge},{name:"Engagement",description:"Speak directly to your customers",href:"#",icon:he},{name:"Security",description:"Your customers’ data will be safe and secure",href:"#",icon:ve},{name:"Integrations",description:"Connect with third-party tools",href:"#",icon:me},{name:"Automations",description:"Build strategic funnels that will convert",href:"#",icon:fe}],f=[{name:"Watch demo",href:"#",icon:ye},{name:"Contact sales",href:"#",icon:xe}],o=v(!1);return(a,d)=>(i(),p(k,null,[e("header",we,[e("nav",_e,[be,e("div",ke,[e("button",{type:"button",class:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:d[0]||(d[0]=s=>o.value=!0)},[Ce,c(u(J),{class:"h-6 w-6","aria-hidden":"true"})])]),c(u(ae),{class:"hidden lg:flex lg:gap-x-12"},{default:g(()=>[c(u(X),{class:"relative"},{default:g(()=>[c(u(ee),{class:"flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"},{default:g(()=>[x(" Product "),c(u(H),{class:"h-5 w-5 flex-none text-gray-400","aria-hidden":"true"})]),_:1}),c(W,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-1"},{default:g(()=>[c(u(te),{class:"absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"},{default:g(()=>[e("div",Se,[(i(),p(k,null,$(l,s=>e("div",{key:s.name,class:"group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"},[e("div",De,[(i(),A(P(s.icon),{class:"h-6 w-6 text-gray-600 group-hover:text-indigo-600","aria-hidden":"true"}))]),e("div",Me,[e("a",{href:s.href,class:"block font-semibold text-gray-900"},[x(C(s.name)+" ",1),Ae],8,$e),e("p",Be,C(s.description),1)])])),64))]),e("div",je,[(i(),p(k,null,$(f,s=>e("a",{key:s.name,href:s.href,class:"flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"},[(i(),A(P(s.icon),{class:"h-5 w-5 flex-none text-gray-400","aria-hidden":"true"})),x(" "+C(s.name),1)],8,Oe)),64))])]),_:1})]),_:1})]),_:1}),Pe,Ie,Ve]),_:1}),Ee]),c(u(ne),{class:"lg:hidden",onClose:d[2]||(d[2]=s=>o.value=!1),open:o.value},{default:g(()=>[Ze,c(u(se),{class:"fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:g(()=>[e("div",He,[Te,e("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:d[1]||(d[1]=s=>o.value=!1)},[Le,c(u(le),{class:"h-6 w-6","aria-hidden":"true"})])]),e("div",Ne,[e("div",ze,[e("div",Ge,[c(u(ue),{as:"div",class:"-mx-3"},{default:g(({open:s})=>[c(u(Z),{class:"flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:g(()=>[x(" Product "),c(u(H),{class:q([s?"rotate-180":"","h-5 w-5 flex-none"]),"aria-hidden":"true"},null,8,["class"])]),_:2},1024),c(u(pe),{class:"mt-2 space-y-2"},{default:g(()=>[(i(!0),p(k,null,$([...l,...f],n=>(i(),A(u(Z),{key:n.name,as:"a",href:n.href,class:"block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:g(()=>[x(C(n.name),1)]),_:2},1032,["href"]))),128))]),_:1})]),_:1}),Ye,Fe,Ke]),Qe])])]),_:1})]),_:1},8,["open"])]),e("div",null,[R(a.$slots,"default")])],64))}};export{qe as default};
