import{q as ve,N as ce,E as de,w as fe,a as be,h as Pe,n as te,f as q,u as U,v as me,i as R,b as z,o as N,P as G,c as O,d as T,T as W}from"./Ceh50MpT.js";import{a as o,u as M,t as ge,A as H,I as j,l as he,N as Z,i as D}from"./4OpsHXDJ.js";import{f as w,j as J,V as K,y as _,x as k,ab as Q,G as F,F as V,z as le,af as Se,ac as X,o as oe,c as ne,a as ae}from"./DgW9msFz.js";function ee(r,i){if(r)return r;let p=i??"button";if(typeof p=="string"&&p.toLowerCase()==="button")return"button"}function ye(r,i){let p=w(ee(r.value.type,r.value.as));return J(()=>{p.value=ee(r.value.type,r.value.as)}),K(()=>{var E;p.value||o(i)&&o(i)instanceof HTMLButtonElement&&!((E=o(i))!=null&&E.hasAttribute("type"))&&(p.value="button")}),p}var we=(r=>(r[r.Open=0]="Open",r[r.Closed=1]="Closed",r))(we||{});let re=Symbol("PopoverContext");function Y(r){let i=X(re,null);if(i===null){let p=new Error(`<${r} /> is missing a parent <${$e.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,Y),p}return i}let ue=Symbol("PopoverGroupContext");function se(){return X(ue,null)}let ie=Symbol("PopoverPanelContext");function Ee(){return X(ie,null)}let $e=_({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(r,{slots:i,attrs:p,expose:E}){var h;let b=w(null);E({el:b,$el:b});let l=w(1),t=w(null),y=w(null),S=w(null),m=w(null),P=k(()=>R(b)),v=k(()=>{var e,a;if(!o(t)||!o(m))return!1;for(let L of document.querySelectorAll("body > *"))if(Number(L==null?void 0:L.contains(o(t)))^Number(L==null?void 0:L.contains(o(m))))return!0;let n=z(),f=n.indexOf(o(t)),B=(f+n.length-1)%n.length,C=(f+1)%n.length,A=n[B],pe=n[C];return!((e=o(m))!=null&&e.contains(A))&&!((a=o(m))!=null&&a.contains(pe))}),u={popoverState:l,buttonId:w(null),panelId:w(null),panel:m,button:t,isPortalled:v,beforePanelSentinel:y,afterPanelSentinel:S,togglePopover(){l.value=M(l.value,{0:1,1:0})},closePopover(){l.value!==1&&(l.value=1)},close(e){u.closePopover();let a=e?e instanceof HTMLElement?e:e.value instanceof HTMLElement?o(e):o(u.button):o(u.button);a==null||a.focus()}};Q(re,u),ge(k(()=>M(l.value,{0:D.Open,1:D.Closed})));let $={buttonId:u.buttonId,panelId:u.panelId,close(){u.closePopover()}},g=se(),I=g==null?void 0:g.registerPopover,[x,c]=ve(),d=ce({mainTreeNodeRef:g==null?void 0:g.mainTreeNodeRef,portals:x,defaultContainers:[t,m]});function s(){var e,a,n,f;return(f=g==null?void 0:g.isFocusWithinPopoverGroup())!=null?f:((e=P.value)==null?void 0:e.activeElement)&&(((a=o(t))==null?void 0:a.contains(P.value.activeElement))||((n=o(m))==null?void 0:n.contains(P.value.activeElement)))}return K(()=>I==null?void 0:I($)),de((h=P.value)==null?void 0:h.defaultView,"focus",e=>{var a,n;e.target!==window&&e.target instanceof HTMLElement&&l.value===0&&(s()||t&&m&&(d.contains(e.target)||(a=o(u.beforePanelSentinel))!=null&&a.contains(e.target)||(n=o(u.afterPanelSentinel))!=null&&n.contains(e.target)||u.closePopover()))},!0),fe(d.resolveContainers,(e,a)=>{var n;u.closePopover(),be(a,Pe.Loose)||(e.preventDefault(),(n=o(t))==null||n.focus())},k(()=>l.value===0)),()=>{let e={open:l.value===0,close:u.close};return F(V,[F(c,{},()=>H({theirProps:{...r,...p},ourProps:{ref:b},slot:e,slots:i,attrs:p,name:"Popover"})),F(d.MainTreeNode)])}}}),xe=_({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(r,{attrs:i,slots:p,expose:E}){var h;let b=(h=r.id)!=null?h:`headlessui-popover-button-${j()}`,l=Y("PopoverButton"),t=k(()=>R(l.button));E({el:l.button,$el:l.button}),J(()=>{l.buttonId.value=b}),le(()=>{l.buttonId.value=null});let y=se(),S=y==null?void 0:y.closeOthers,m=Ee(),P=k(()=>m===null?!1:m.value===l.panelId.value),v=w(null),u=`headlessui-focus-sentinel-${j()}`;P.value||K(()=>{l.button.value=o(v)});let $=ye(k(()=>({as:r.as,type:i.type})),v);function g(e){var a,n,f,B,C;if(P.value){if(l.popoverState.value===1)return;switch(e.key){case N.Space:case N.Enter:e.preventDefault(),(n=(a=e.target).click)==null||n.call(a),l.closePopover(),(f=o(l.button))==null||f.focus();break}}else switch(e.key){case N.Space:case N.Enter:e.preventDefault(),e.stopPropagation(),l.popoverState.value===1&&(S==null||S(l.buttonId.value)),l.togglePopover();break;case N.Escape:if(l.popoverState.value!==0)return S==null?void 0:S(l.buttonId.value);if(!o(l.button)||(B=t.value)!=null&&B.activeElement&&!((C=o(l.button))!=null&&C.contains(t.value.activeElement)))return;e.preventDefault(),e.stopPropagation(),l.closePopover();break}}function I(e){P.value||e.key===N.Space&&e.preventDefault()}function x(e){var a,n;r.disabled||(P.value?(l.closePopover(),(a=o(l.button))==null||a.focus()):(e.preventDefault(),e.stopPropagation(),l.popoverState.value===1&&(S==null||S(l.buttonId.value)),l.togglePopover(),(n=o(l.button))==null||n.focus()))}function c(e){e.preventDefault(),e.stopPropagation()}let d=te();function s(){let e=o(l.panel);if(!e)return;function a(){M(d.value,{[T.Forwards]:()=>G(e,O.First),[T.Backwards]:()=>G(e,O.Last)})===W.Error&&G(z().filter(n=>n.dataset.headlessuiFocusGuard!=="true"),M(d.value,{[T.Forwards]:O.Next,[T.Backwards]:O.Previous}),{relativeTo:o(l.button)})}a()}return()=>{let e=l.popoverState.value===0,a={open:e},{...n}=r,f=P.value?{ref:v,type:$.value,onKeydown:g,onClick:x}:{ref:v,id:b,type:$.value,"aria-expanded":l.popoverState.value===0,"aria-controls":o(l.panel)?l.panelId.value:void 0,disabled:r.disabled?!0:void 0,onKeydown:g,onKeyup:I,onClick:x,onMousedown:c};return F(V,[H({ourProps:f,theirProps:{...i,...n},slot:a,attrs:i,slots:p,name:"PopoverButton"}),e&&!P.value&&l.isPortalled.value&&F(q,{id:u,features:U.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:s})])}}}),Be=_({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(r,{attrs:i,slots:p,expose:E}){var h;let b=(h=r.id)!=null?h:`headlessui-popover-panel-${j()}`,{focus:l}=r,t=Y("PopoverPanel"),y=k(()=>R(t.panel)),S=`headlessui-focus-sentinel-before-${j()}`,m=`headlessui-focus-sentinel-after-${j()}`;E({el:t.panel,$el:t.panel}),J(()=>{t.panelId.value=b}),le(()=>{t.panelId.value=null}),Q(ie,t.panelId),K(()=>{var c,d;if(!l||t.popoverState.value!==0||!t.panel)return;let s=(c=y.value)==null?void 0:c.activeElement;(d=o(t.panel))!=null&&d.contains(s)||G(o(t.panel),O.First)});let P=he(),v=k(()=>P!==null?(P.value&D.Open)===D.Open:t.popoverState.value===0);function u(c){var d,s;switch(c.key){case N.Escape:if(t.popoverState.value!==0||!o(t.panel)||y.value&&!((d=o(t.panel))!=null&&d.contains(y.value.activeElement)))return;c.preventDefault(),c.stopPropagation(),t.closePopover(),(s=o(t.button))==null||s.focus();break}}function $(c){var d,s,e,a,n;let f=c.relatedTarget;f&&o(t.panel)&&((d=o(t.panel))!=null&&d.contains(f)||(t.closePopover(),((e=(s=o(t.beforePanelSentinel))==null?void 0:s.contains)!=null&&e.call(s,f)||(n=(a=o(t.afterPanelSentinel))==null?void 0:a.contains)!=null&&n.call(a,f))&&f.focus({preventScroll:!0})))}let g=te();function I(){let c=o(t.panel);if(!c)return;function d(){M(g.value,{[T.Forwards]:()=>{var s;G(c,O.First)===W.Error&&((s=o(t.afterPanelSentinel))==null||s.focus())},[T.Backwards]:()=>{var s;(s=o(t.button))==null||s.focus({preventScroll:!0})}})}d()}function x(){let c=o(t.panel);if(!c)return;function d(){M(g.value,{[T.Forwards]:()=>{let s=o(t.button),e=o(t.panel);if(!s)return;let a=z(),n=a.indexOf(s),f=a.slice(0,n+1),B=[...a.slice(n+1),...f];for(let C of B.slice())if(C.dataset.headlessuiFocusGuard==="true"||e!=null&&e.contains(C)){let A=B.indexOf(C);A!==-1&&B.splice(A,1)}G(B,O.First,{sorted:!1})},[T.Backwards]:()=>{var s;G(c,O.Previous)===W.Error&&((s=o(t.button))==null||s.focus())}})}d()}return()=>{let c={open:t.popoverState.value===0,close:t.close},{focus:d,...s}=r,e={ref:t.panel,id:b,onKeydown:u,onFocusout:l&&t.popoverState.value===0?$:void 0,tabIndex:-1};return H({ourProps:e,theirProps:{...i,...s},attrs:i,slot:c,slots:{...p,default:(...a)=>{var n;return[F(V,[v.value&&t.isPortalled.value&&F(q,{id:S,ref:t.beforePanelSentinel,features:U.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:I}),(n=p.default)==null?void 0:n.call(p,...a),v.value&&t.isPortalled.value&&F(q,{id:m,ref:t.afterPanelSentinel,features:U.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:x})])]}},features:Z.RenderStrategy|Z.Static,visible:v.value,name:"PopoverPanel"})}}}),Ce=_({name:"PopoverGroup",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(r,{attrs:i,slots:p,expose:E}){let h=w(null),b=Se([]),l=k(()=>R(h)),t=me();E({el:h,$el:h});function y(v){let u=b.value.indexOf(v);u!==-1&&b.value.splice(u,1)}function S(v){return b.value.push(v),()=>{y(v)}}function m(){var v;let u=l.value;if(!u)return!1;let $=u.activeElement;return(v=o(h))!=null&&v.contains($)?!0:b.value.some(g=>{var I,x;return((I=u.getElementById(g.buttonId.value))==null?void 0:I.contains($))||((x=u.getElementById(g.panelId.value))==null?void 0:x.contains($))})}function P(v){for(let u of b.value)u.buttonId.value!==v&&u.close()}return Q(ue,{registerPopover:S,unregisterPopover:y,isFocusWithinPopoverGroup:m,closeOthers:P,mainTreeNodeRef:t.mainTreeNodeRef}),()=>F(V,[H({ourProps:{ref:h},theirProps:{...r,...i},slot:{},attrs:i,slots:p,name:"PopoverGroup"}),F(t.MainTreeNode)])}});function Oe(r,i){return oe(),ne("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 9h16.5m-16.5 6.75h16.5"})])}function Te(r,i){return oe(),ne("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}export{Ce as A,xe as G,Te as a,Be as j,Oe as r,ye as s,$e as y};