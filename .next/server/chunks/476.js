"use strict";exports.id=476,exports.ids=[476,578,853,18],exports.modules={5578:(e,r,t)=>{t.d(r,{Z:()=>u});var i=t(7577);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim(),a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()),l=e=>{let r=s(e);return r.charAt(0).toUpperCase()+r.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0;return!1},c=(0,i.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:a,className:s="",children:l,iconNode:c,...u},m)=>(0,i.createElement)("svg",{ref:m,...n,width:r,height:r,stroke:e,strokeWidth:a?24*Number(t)/Number(r):t,className:o("lucide",s),...!l&&!d(u)&&{"aria-hidden":"true"},...u},[...c.map(([e,r])=>(0,i.createElement)(e,r)),...Array.isArray(l)?l:[l]])),u=(e,r)=>{let t=(0,i.forwardRef)(({className:t,...s},n)=>(0,i.createElement)(c,{ref:n,iconNode:r,className:o(`lucide-${a(l(e))}`,`lucide-${e}`,t),...s}));return t.displayName=l(e),t}}};