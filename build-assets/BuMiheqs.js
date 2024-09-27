import{i as k,u as w,b as d,t as T,A as g,l as K,N as O,a as m}from"./CHwlvqJt.js";import{s as L}from"./CAvwbCeu.js";import{o as v}from"./CjNbWwc4.js";import{y as S,f as p,ab as P,x as y,j as B,z as I,V as N,ac as x,o as V,c as H,a as U}from"./BxpqEN0Y.js";var _=(l=>(l[l.Open=0]="Open",l[l.Closed=1]="Closed",l))(_||{});let C=Symbol("DisclosureContext");function h(l){let n=x(C,null);if(n===null){let r=new Error(`<${l} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,h),r}return n}let E=Symbol("DisclosurePanelContext");function z(){return x(E,null)}let q=S({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(l,{slots:n,attrs:r}){let s=p(l.defaultOpen?0:1),e=p(null),i=p(null),o={buttonId:p(`headlessui-disclosure-button-${k()}`),panelId:p(`headlessui-disclosure-panel-${k()}`),disclosureState:s,panel:e,button:i,toggleDisclosure(){s.value=w(s.value,{0:1,1:0})},closeDisclosure(){s.value!==1&&(s.value=1)},close(t){o.closeDisclosure();let u=t?t instanceof HTMLElement?t:t.value instanceof HTMLElement?d(t):d(o.button):d(o.button);u==null||u.focus()}};return P(C,o),T(y(()=>w(s.value,{0:m.Open,1:m.Closed}))),()=>{let{defaultOpen:t,...u}=l,c={open:s.value===0,close:o.close};return g({theirProps:u,ourProps:{},slot:c,slots:n,attrs:r,name:"Disclosure"})}}}),F=S({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(l,{attrs:n,slots:r,expose:s}){let e=h("DisclosureButton"),i=z(),o=y(()=>i===null?!1:i.value===e.panelId.value);B(()=>{o.value||l.id!==null&&(e.buttonId.value=l.id)}),I(()=>{o.value||(e.buttonId.value=null)});let t=p(null);s({el:t,$el:t}),o.value||N(()=>{e.button.value=t.value});let u=L(y(()=>({as:l.as,type:n.type})),t);function c(){var a;l.disabled||(o.value?(e.toggleDisclosure(),(a=d(e.button))==null||a.focus()):e.toggleDisclosure())}function f(a){var b;if(!l.disabled)if(o.value)switch(a.key){case v.Space:case v.Enter:a.preventDefault(),a.stopPropagation(),e.toggleDisclosure(),(b=d(e.button))==null||b.focus();break}else switch(a.key){case v.Space:case v.Enter:a.preventDefault(),a.stopPropagation(),e.toggleDisclosure();break}}function D(a){switch(a.key){case v.Space:a.preventDefault();break}}return()=>{var a;let b={open:e.disclosureState.value===0},{id:$,...j}=l,M=o.value?{ref:t,type:u.value,onClick:c,onKeydown:f}:{id:(a=e.buttonId.value)!=null?a:$,ref:t,type:u.value,"aria-expanded":e.disclosureState.value===0,"aria-controls":e.disclosureState.value===0||d(e.panel)?e.panelId.value:void 0,disabled:l.disabled?!0:void 0,onClick:c,onKeydown:f,onKeyup:D};return g({ourProps:M,theirProps:j,slot:b,attrs:n,slots:r,name:"DisclosureButton"})}}}),G=S({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(l,{attrs:n,slots:r,expose:s}){let e=h("DisclosurePanel");B(()=>{l.id!==null&&(e.panelId.value=l.id)}),I(()=>{e.panelId.value=null}),s({el:e.panel,$el:e.panel}),P(E,e.panelId);let i=K(),o=y(()=>i!==null?(i.value&m.Open)===m.Open:e.disclosureState.value===0);return()=>{var t;let u={open:e.disclosureState.value===0,close:e.close},{id:c,...f}=l,D={id:(t=e.panelId.value)!=null?t:c,ref:e.panel};return g({ourProps:D,theirProps:f,slot:u,attrs:n,slots:r,features:O.RenderStrategy|O.Static,visible:o.value,name:"DisclosurePanel"})}}});function J(l,n){return V(),H("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[U("path",{"fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}export{q as N,F as Q,G as V,J as r};
