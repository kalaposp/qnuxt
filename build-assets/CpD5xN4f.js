import{z as $,A as q,B as z,C as D,D as N,E as H,G as I,H as P,k as R,x as v,s as C,I as L,f as W,j as U,o as F,c as G,J as T,u as j}from"./C703jK_S.js";async function J(e,t){return await V(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function V(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};t(o)},i.onerror=o=>r(o),i.src=e})}function M(e){return t=>t?e[t]||t:e.missingValue}function Q({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(s,n)=>`${s}=${n}`),t&&typeof t!="function"&&(t=M(t));const o=i||{};return Object.keys(o).forEach(s=>{typeof o[s]!="function"&&(o[s]=M(o[s]))}),(s={})=>Object.entries(s).filter(([a,c])=>typeof c<"u").map(([a,c])=>{const l=o[a];return typeof l=="function"&&(c=l(s[a])),a=typeof t=="function"?t(a):a,e(a,c)}).join(r)}function m(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function X(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=Number.parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function Y(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function Z(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function K(e){const t={options:e},r=(o,s={})=>O(t,o,s),i=(o,s={},n={})=>r(o,{...n,modifiers:N(s,n.modifiers||{})}).url;for(const o in e.presets)i[o]=(s,n,a)=>i(s,n,{...e.presets[o],...a});return i.options=e,i.getImage=r,i.getMeta=(o,s)=>ee(t,o,s),i.getSizes=(o,s)=>re(t,o,s),t.$img=i,i}async function ee(e,t,r){const i=O(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await J(e,i.url)}function O(e,t,r){var l,u;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:o}=te(e,r.provider||e.options.provider),s=ie(e,r.preset);if(t=$(t)?t:q(t),!i.supportsAlias)for(const g in e.options.alias)t.startsWith(g)&&(t=z(e.options.alias[g],t.substr(g.length)));if(i.validateDomains&&$(t)){const g=D(t).host;if(!e.options.domains.find(y=>y===g))return{url:t}}const n=N(r,s,o);n.modifiers={...n.modifiers};const a=n.modifiers.format;(l=n.modifiers)!=null&&l.width&&(n.modifiers.width=m(n.modifiers.width)),(u=n.modifiers)!=null&&u.height&&(n.modifiers.height=m(n.modifiers.height));const c=i.getImage(t,n,e);return c.format=c.format||a||"",c}function te(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function ie(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function re(e,t,r){var _,x,b,d,h;const i=m((_=r.modifiers)==null?void 0:_.width),o=m((x=r.modifiers)==null?void 0:x.height),s=Z(r.sizes),n=(b=r.densities)!=null&&b.trim()?X(r.densities.trim()):e.options.densities;Y(n);const a=i&&o?o/i:0,c=[],l=[];if(Object.keys(s).length>=1){for(const f in s){const p=A(f,String(s[f]),o,a,e);if(p!==void 0){c.push({size:p.size,screenMaxWidth:p.screenMaxWidth,media:`(max-width: ${p.screenMaxWidth}px)`});for(const w of n)l.push({width:p._cWidth*w,src:E(e,t,r,p,w)})}}oe(c)}else for(const f of n){const p=Object.keys(s)[0];let w=A(p,String(s[p]),o,a,e);w===void 0&&(w={size:"",screenMaxWidth:0,_cWidth:(d=r.modifiers)==null?void 0:d.width,_cHeight:(h=r.modifiers)==null?void 0:h.height}),l.push({width:f,src:E(e,t,r,w,f)})}se(l);const u=l[l.length-1],g=c.length?c.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,y=g?"w":"x",S=l.map(f=>`${f.src} ${f.width}${y}`).join(", ");return{sizes:g,srcset:S,src:u==null?void 0:u.src}}function A(e,t,r,i,o){const s=o.options.screens&&o.options.screens[e]||Number.parseInt(e),n=t.endsWith("vw");if(!n&&/^\d+$/.test(t)&&(t=t+"px"),!n&&!t.endsWith("px"))return;let a=Number.parseInt(t);if(!s||!a)return;n&&(a=Math.round(a/100*s));const c=i?Math.round(a*i):r;return{size:t,screenMaxWidth:s,_cWidth:a,_cHeight:c}}function E(e,t,r,i,o){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*o:void 0,height:i._cHeight?i._cHeight*o:void 0},r)}function oe(e){var r;e.sort((i,o)=>i.screenMaxWidth-o.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const o=e[i];o.media===t&&e.splice(i,1),t=o.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function se(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const ne=Q({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>I(e)+"_"+I(t)}),ae=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const o=ne(t)||"_";return r||(r=z(i.options.nuxt.baseURL,"/_ipx")),{url:z(r,o,H(e))}},de=!0,ce=!0,le=Object.freeze(Object.defineProperty({__proto__:null,getImage:ae,supportsAlias:ce,validateDomains:de},Symbol.toStringTag,{value:"Module"})),k={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};k.providers={ipxStatic:{provider:le,defaults:{}}};const B=()=>{const e=R(),t=P();return t.$img||t._img||(t._img=K({...k,nuxt:{baseURL:e.app.baseURL}}))};function ue(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const fe={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:[Boolean,Object],default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},ge=e=>{const t=v(()=>({provider:e.provider,preset:e.preset})),r=v(()=>({width:m(e.width),height:m(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=B(),o=v(()=>({...e.modifiers,width:m(e.width),height:m(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:o}},he={...fe,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},me=["src"],ve=C({__name:"NuxtImg",props:he,emits:["load","error"],setup(e,{emit:t}){const r=e,i=L(),o=t,s=!1,n=B(),a=ge(r),c=W(!1),l=W(),u=v(()=>n.getSizes(r.src,{...a.options.value,sizes:r.sizes,densities:r.densities,modifiers:{...a.modifiers.value,width:m(r.width),height:m(r.height)}})),g=v(()=>{const d={...a.attrs.value,"data-nuxt-img":""};return(!r.placeholder||c.value)&&(d.sizes=u.value.sizes,d.srcset=u.value.srcset),d}),y=v(()=>{let d=r.placeholder;if(d===""&&(d=!0),!d||c.value)return!1;if(typeof d=="string")return d;const h=Array.isArray(d)?d:typeof d=="number"?[d,d]:[10,10];return n(r.src,{...a.modifiers.value,width:h[0],height:h[1],quality:h[2]||50,blur:h[3]||3},a.options.value)}),S=v(()=>r.sizes?u.value.src:n(r.src,a.modifiers.value,a.options.value)),_=v(()=>y.value?y.value:S.value),b=P().isHydrating;return U(()=>{if(y.value){const d=new Image;d.src=S.value,r.sizes&&(d.sizes=u.value.sizes||"",d.srcset=u.value.srcset),d.onload=h=>{c.value=!0,o("load",h)},ue("nuxt-image");return}l.value&&(l.value.complete&&b&&(l.value.getAttribute("data-error")?o("error",new Event("error")):o("load",new Event("load"))),l.value.onload=d=>{o("load",d)},l.value.onerror=d=>{o("error",d)})}),(d,h)=>(F(),G("img",T({ref_key:"imgEl",ref:l,class:r.placeholder&&!c.value?r.placeholderClass:void 0},{...j(s)?{onerror:"this.setAttribute('data-error', 1)"}:{},...g.value,...j(i)},{src:_.value}),null,16,me))}});export{ve as _};
