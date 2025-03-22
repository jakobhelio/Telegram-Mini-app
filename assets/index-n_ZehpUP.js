const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-CZmES2Os.js","assets/index-tLyCCnDv.js","assets/index-Dtn62Xmo.css","assets/all-wallets-C3x9kiFZ.js","assets/arrow-bottom-circle-CXzfXcIu.js","assets/app-store-CNE670Sl.js","assets/apple-Xy7Q4Os7.js","assets/arrow-bottom-B09miUYb.js","assets/arrow-left-B57pr1X5.js","assets/arrow-right-B21yvNOS.js","assets/arrow-top-D0sYYpEq.js","assets/bank-Cyl6ccP7.js","assets/browser-CCr9dBVw.js","assets/card-TNK8uoZo.js","assets/checkmark-C2w8Cikz.js","assets/checkmark-bold-BMdMQszU.js","assets/chevron-bottom-DxBHEAPc.js","assets/chevron-left-CKs6NS7Z.js","assets/chevron-right-BOY3qfDs.js","assets/chevron-top-Bpa0uT2j.js","assets/chrome-store-BToCYVgp.js","assets/clock-HRdyvwoo.js","assets/close-D3aFVave.js","assets/compass-l5X63hul.js","assets/coinPlaceholder-DD9mRH7w.js","assets/copy-DgEetYjV.js","assets/cursor-Ky3eaAD7.js","assets/cursor-transparent-Bqe9d4Di.js","assets/desktop-unIDhpaz.js","assets/disconnect-1_lXpvYK.js","assets/discord-BidzYjuF.js","assets/etherscan-CpQ5GyIP.js","assets/extension-Cgt205IU.js","assets/external-link-BsY3hSlM.js","assets/facebook-SSktdS6X.js","assets/farcaster-CNEyYgYz.js","assets/filters-Uk5r0NW3.js","assets/github-BSB171gO.js","assets/google-BY89mswP.js","assets/help-circle-DRq46-uW.js","assets/image-JN3rlAuX.js","assets/id-DhrXraqC.js","assets/info-circle-DRP0NpCN.js","assets/lightbulb-6y657fq5.js","assets/mail-DCx4begw.js","assets/mobile-B1w5pdz-.js","assets/more-DfcsneRS.js","assets/network-placeholder-Ljn6DY8Z.js","assets/nftPlaceholder-xHBOitBh.js","assets/off-Bm___1v2.js","assets/play-store-T1a7MDIJ.js","assets/plus-CogSVdkJ.js","assets/qr-code-GUCGRdcz.js","assets/recycle-horizontal-CiMfzxZP.js","assets/refresh-muSAyIGI.js","assets/search-BFYxgZVU.js","assets/send-BCq1MAE7.js","assets/swapHorizontal-eyYY3c6n.js","assets/swapHorizontalMedium-Ce5zDgSW.js","assets/swapHorizontalBold-BMZ_ru9b.js","assets/swapHorizontalRoundedBold-C5HCyXsr.js","assets/swapVertical-7hthaOkE.js","assets/telegram-D3RvCYjN.js","assets/three-dots-Br_4dJpY.js","assets/twitch-7bBXmTMD.js","assets/x-CFSrQLnd.js","assets/twitterIcon-DbJUeAPg.js","assets/verify-BOv59zqu.js","assets/verify-filled-BjdJOjTw.js","assets/wallet-Dfdt6DRe.js","assets/walletconnect-UxM2Ul8z.js","assets/wallet-placeholder-B9ecLRMJ.js","assets/warning-circle-BIflJwf7.js","assets/info-CVHFbq6h.js","assets/exclamation-triangle-ChYSH75v.js","assets/reown-logo-BOjx22Xl.js"])))=>i.map(i=>d[i]);
import{a1 as xt,a2 as Lt,a3 as Q,e as tt,r as et,K as It,f as it,x as j,_ as a}from"./index-tLyCCnDv.js";const m={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){try{return new URL(e).hostname}catch{return""}},getTruncateString({string:e,charsStart:t,charsEnd:i,truncate:r}){return e.length<=t+i?e:r==="end"?`${e.substring(0,t)}...`:r==="start"?`...${e.substring(e.length-i)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(i))}`},generateAvatarColors(e){const i=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(i),s=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),o=100-3*Number(s==null?void 0:s.replace("px","")),c=`${o}% ${o}% at 65% 40%`,l=[];for(let d=0;d<5;d+=1){const u=this.tintColor(r,.15*d);l.push(`rgb(${u[0]}, ${u[1]}, ${u[2]})`)}return`
    --local-color-1: ${l[0]};
    --local-color-2: ${l[1]};
    --local-color-3: ${l[2]};
    --local-color-4: ${l[3]};
    --local-color-5: ${l[4]};
    --local-radial-circle: ${c}
   `},hexToRgb(e){const t=parseInt(e,16),i=t>>16&255,r=t>>8&255,s=t&255;return[i,r,s]},tintColor(e,t){const[i,r,s]=e,n=Math.round(i+(255-i)*t),o=Math.round(r+(255-r)*t),c=Math.round(s+(255-s)*t);return[n,o,c]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){var t;return e||(typeof window<"u"&&window.matchMedia?(t=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&t.matches?"dark":"light":"dark")},splitBalance(e){const t=e.split(".");return t.length===2?[t[0],t[1]]:["0","00"]},roundNumber(e,t,i){return e.toString().length>=t?Number(e).toFixed(i):e},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})}};function Dt(e,t){const{kind:i,elements:r}=t;return{kind:i,elements:r,finisher(s){customElements.get(e)||customElements.define(e,s)}}}function Vt(e,t){return customElements.get(e)||customElements.define(e,t),t}function rt(e){return function(i){return typeof i=="function"?Vt(e,i):Dt(e,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,st=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol(),ct=new WeakMap;let St=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(st&&t===void 0){const r=i!==void 0&&i.length===1;r&&(t=ct.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ct.set(i,t))}return t}toString(){return this.cssText}};const Ut=e=>new St(typeof e=="string"?e:e+"",void 0,nt),Ae=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,s,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[n+1],e[0]);return new St(i,e,nt)},kt=(e,t)=>{if(st)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const r=document.createElement("style"),s=N.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=i.cssText,e.appendChild(r)}},lt=st?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return Ut(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ht,defineProperty:zt,getOwnPropertyDescriptor:Mt,getOwnPropertyNames:Nt,getOwnPropertySymbols:Bt,getPrototypeOf:jt}=Object,$=globalThis,ht=$.trustedTypes,Wt=ht?ht.emptyScript:"",K=$.reactiveElementPolyfillSupport,x=(e,t)=>e,W={toAttribute(e,t){switch(t){case Boolean:e=e?Wt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},ot=(e,t)=>!Ht(e,t),ut={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ot};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class T extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=ut){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,i);s!==void 0&&zt(this.prototype,t,s)}}static getPropertyDescriptor(t,i,r){const{get:s,set:n}=Mt(this.prototype,t)??{get(){return this[i]},set(o){this[i]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const c=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ut}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=jt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const i=this.properties,r=[...Nt(i),...Bt(i)];for(const s of r)this.createProperty(s,i[s])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[r,s]of i)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[i,r]of this.elementProperties){const s=this._$Eu(i,r);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)i.unshift(lt(s))}else t!==void 0&&i.push(lt(t));return i}static _$Eu(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const r of i.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostConnected)==null?void 0:r.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostDisconnected)==null?void 0:r.call(i)})}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$EC(t,i){var n;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const o=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:W).toAttribute(i,r.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,i){var n;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=r.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:W;this._$Em=s,this[s]=c.fromAttribute(i,o.type),this._$Em=null}}requestUpdate(t,i,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??ot)(this[t],i))return;this.P(t,i,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,r){this._$AL.has(t)||this._$AL.set(t,i),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(r=this._$EO)==null||r.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(i)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(i)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[x("elementProperties")]=new Map,T[x("finalized")]=new Map,K==null||K({ReactiveElement:T}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,F=L.trustedTypes,dt=F?F.createPolicy("lit-html",{createHTML:e=>e}):void 0,Et="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,At="?"+y,Ft=`<${At}>`,A=document,D=()=>A.createComment(""),V=e=>e===null||typeof e!="object"&&typeof e!="function",at=Array.isArray,qt=e=>at(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Z=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,pt=/>/g,S=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gt=/'/g,vt=/"/g,bt=/^(?:script|style|textarea|title)$/i,Gt=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),be=Gt(1),R=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ft=new WeakMap,E=A.createTreeWalker(A,129);function Pt(e,t){if(!at(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return dt!==void 0?dt.createHTML(t):t}const Kt=(e,t)=>{const i=e.length-1,r=[];let s,n=t===2?"<svg>":t===3?"<math>":"",o=O;for(let c=0;c<i;c++){const l=e[c];let d,u,h=-1,f=0;for(;f<l.length&&(o.lastIndex=f,u=o.exec(l),u!==null);)f=o.lastIndex,o===O?u[1]==="!--"?o=_t:u[1]!==void 0?o=pt:u[2]!==void 0?(bt.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=S):u[3]!==void 0&&(o=S):o===S?u[0]===">"?(o=s??O,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?S:u[3]==='"'?vt:gt):o===vt||o===gt?o=S:o===_t||o===pt?o=O:(o=S,s=void 0);const w=o===S&&e[c+1].startsWith("/>")?" ":"";n+=o===O?l+Ft:h>=0?(r.push(d),l.slice(0,h)+Et+l.slice(h)+y+w):l+y+(h===-2?c:w)}return[Pt(e,n+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class U{constructor({strings:t,_$litType$:i},r){let s;this.parts=[];let n=0,o=0;const c=t.length-1,l=this.parts,[d,u]=Kt(t,i);if(this.el=U.createElement(d,r),E.currentNode=this.el.content,i===2||i===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=E.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(Et)){const f=u[o++],w=s.getAttribute(h).split(y),M=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:M[2],strings:w,ctor:M[1]==="."?Xt:M[1]==="?"?Yt:M[1]==="@"?Jt:G}),s.removeAttribute(h)}else h.startsWith(y)&&(l.push({type:6,index:n}),s.removeAttribute(h));if(bt.test(s.tagName)){const h=s.textContent.split(y),f=h.length-1;if(f>0){s.textContent=F?F.emptyScript:"";for(let w=0;w<f;w++)s.append(h[w],D()),E.nextNode(),l.push({type:2,index:++n});s.append(h[f],D())}}}else if(s.nodeType===8)if(s.data===At)l.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(y,h+1))!==-1;)l.push({type:7,index:n}),h+=y.length-1}n++}}static createElement(t,i){const r=A.createElement("template");return r.innerHTML=t,r}}function C(e,t,i=e,r){var o,c;if(t===R)return t;let s=r!==void 0?(o=i._$Co)==null?void 0:o[r]:i._$Cl;const n=V(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),n===void 0?s=void 0:(s=new n(e),s._$AT(e,i,r)),r!==void 0?(i._$Co??(i._$Co=[]))[r]=s:i._$Cl=s),s!==void 0&&(t=C(e,s._$AS(e,t.values),s,r)),t}class Zt{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??A).importNode(i,!0);E.currentNode=s;let n=E.nextNode(),o=0,c=0,l=r[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new k(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new Qt(n,this,t)),this._$AV.push(d),l=r[++c]}o!==(l==null?void 0:l.index)&&(n=E.nextNode(),o++)}return E.currentNode=A,s}p(t){let i=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}class k{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,r,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=C(this,t,i),V(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==R&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):qt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var n;const{values:i,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=U.createElement(Pt(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(i);else{const o=new Zt(s,this),c=o.u(this.options);o.p(i),this.T(c),this._$AH=o}}_$AC(t){let i=ft.get(t.strings);return i===void 0&&ft.set(t.strings,i=new U(t)),i}k(t){at(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,s=0;for(const n of t)s===i.length?i.push(r=new k(this.O(D()),this.O(D()),this,this.options)):r=i[s],r._$AI(n),s++;s<i.length&&(this._$AR(r&&r._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,i);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,r,s,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(t,i=this,r,s){const n=this.strings;let o=!1;if(n===void 0)t=C(this,t,i,0),o=!V(t)||t!==this._$AH&&t!==R,o&&(this._$AH=t);else{const c=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=C(this,c[r+l],i,l),d===R&&(d=this._$AH[l]),o||(o=!V(d)||d!==this._$AH[l]),d===p?t=p:t!==p&&(t+=(d??"")+n[l+1]),this._$AH[l]=d}o&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xt extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Yt extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Jt extends G{constructor(t,i,r,s,n){super(t,i,r,s,n),this.type=5}_$AI(t,i=this){if((t=C(this,t,i,0)??p)===R)return;const r=this._$AH,s=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==p&&(r===p||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class Qt{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const X=L.litHtmlPolyfillSupport;X==null||X(U,k),(L.litHtmlVersions??(L.litHtmlVersions=[])).push("3.2.1");const te=(e,t,i)=>{const r=(i==null?void 0:i.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const n=(i==null?void 0:i.renderBefore)??null;r._$litPart$=s=new k(t.insertBefore(D(),n),n,void 0,i??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let B=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=te(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return R}};var $t;B._$litElement$=!0,B.finalized=!0,($t=globalThis.litElementHydrateSupport)==null||$t.call(globalThis,{LitElement:B});const Y=globalThis.litElementPolyfillSupport;Y==null||Y({LitElement:B});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ot},ie=(e=ee,t,i)=>{const{kind:r,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(i.name,e),r==="accessor"){const{name:o}=i;return{set(c){const l=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,l,e)},init(c){return c!==void 0&&this.P(o,void 0,e),c}}}if(r==="setter"){const{name:o}=i;return function(c){const l=this[o];t.call(this,c),this.requestUpdate(o,l,e)}}throw Error("Unsupported decorator location: "+r)};function re(e){return(t,i)=>typeof i=="object"?ie(e,t,i):((r,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(s,n):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Te(e){return re({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se={attribute:!0,type:String,converter:Lt,reflect:!1,hasChanged:xt},ne=(e=se,t,i)=>{const{kind:r,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(i.name,e),r==="accessor"){const{name:o}=i;return{set(c){const l=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,l,e)},init(c){return c!==void 0&&this.P(o,void 0,e),c}}}if(r==="setter"){const{name:o}=i;return function(c){const l=this[o];t.call(this,c),this.requestUpdate(o,l,e)}}throw Error("Unsupported decorator location: "+r)};function _(e){return(t,i)=>typeof i=="object"?ne(e,t,i):((r,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(s,n):void 0})(e,t,i)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=e=>e===null||typeof e!="object"&&typeof e!="function",ae=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt={ATTRIBUTE:1,CHILD:2},Rt=e=>(...t)=>({_$litDirective$:e,values:t});let Ct=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=(e,t)=>{var r;const i=e._$AN;if(i===void 0)return!1;for(const s of i)(r=s._$AO)==null||r.call(s,t,!1),I(s,t);return!0},q=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Ot=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),he(t)}};function ce(e){this._$AN!==void 0?(q(this),this._$AM=e,Ot(this)):this._$AM=e}function le(e,t=!1,i=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let n=i;n<r.length;n++)I(r[n],!1),q(r[n]);else r!=null&&(I(r,!1),q(r));else I(this,e)}const he=e=>{e.type==Tt.CHILD&&(e._$AP??(e._$AP=le),e._$AQ??(e._$AQ=ce))};class ue extends Ct{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,r){super._$AT(t,i,r),Ot(this),this.isConnected=t._$AU}_$AO(t,i=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),i&&(I(this,t),q(this))}setValue(t){if(ae(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class de{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class _e{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=e=>!oe(e)&&typeof e.then=="function",mt=1073741823;class pe extends ue{constructor(){super(...arguments),this._$Cwt=mt,this._$Cbt=[],this._$CK=new de(this),this._$CX=new _e}render(...t){return t.find(i=>!wt(i))??Q}update(t,i){const r=this._$Cbt;let s=r.length;this._$Cbt=i;const n=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<i.length&&!(c>this._$Cwt);c++){const l=i[c];if(!wt(l))return this._$Cwt=c,l;c<s&&l===r[c]||(this._$Cwt=mt,s=0,Promise.resolve(l).then(async d=>{for(;o.get();)await o.get();const u=n.deref();if(u!==void 0){const h=u._$Cbt.indexOf(l);h>-1&&h<u._$Cwt&&(u._$Cwt=h,u.setValue(d))}}))}return Q}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ge=Rt(pe);class ve{constructor(){this.cache=new Map}set(t,i){this.cache.set(t,i)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}}const J=new ve,fe=tt`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var H=function(e,t,i,r){var s=arguments.length,n=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};const yt={add:async()=>(await a(async()=>{const{addSvg:e}=await import("./add-CZmES2Os.js");return{addSvg:e}},__vite__mapDeps([0,1,2]))).addSvg,allWallets:async()=>(await a(async()=>{const{allWalletsSvg:e}=await import("./all-wallets-C3x9kiFZ.js");return{allWalletsSvg:e}},__vite__mapDeps([3,1,2]))).allWalletsSvg,arrowBottomCircle:async()=>(await a(async()=>{const{arrowBottomCircleSvg:e}=await import("./arrow-bottom-circle-CXzfXcIu.js");return{arrowBottomCircleSvg:e}},__vite__mapDeps([4,1,2]))).arrowBottomCircleSvg,appStore:async()=>(await a(async()=>{const{appStoreSvg:e}=await import("./app-store-CNE670Sl.js");return{appStoreSvg:e}},__vite__mapDeps([5,1,2]))).appStoreSvg,apple:async()=>(await a(async()=>{const{appleSvg:e}=await import("./apple-Xy7Q4Os7.js");return{appleSvg:e}},__vite__mapDeps([6,1,2]))).appleSvg,arrowBottom:async()=>(await a(async()=>{const{arrowBottomSvg:e}=await import("./arrow-bottom-B09miUYb.js");return{arrowBottomSvg:e}},__vite__mapDeps([7,1,2]))).arrowBottomSvg,arrowLeft:async()=>(await a(async()=>{const{arrowLeftSvg:e}=await import("./arrow-left-B57pr1X5.js");return{arrowLeftSvg:e}},__vite__mapDeps([8,1,2]))).arrowLeftSvg,arrowRight:async()=>(await a(async()=>{const{arrowRightSvg:e}=await import("./arrow-right-B21yvNOS.js");return{arrowRightSvg:e}},__vite__mapDeps([9,1,2]))).arrowRightSvg,arrowTop:async()=>(await a(async()=>{const{arrowTopSvg:e}=await import("./arrow-top-D0sYYpEq.js");return{arrowTopSvg:e}},__vite__mapDeps([10,1,2]))).arrowTopSvg,bank:async()=>(await a(async()=>{const{bankSvg:e}=await import("./bank-Cyl6ccP7.js");return{bankSvg:e}},__vite__mapDeps([11,1,2]))).bankSvg,browser:async()=>(await a(async()=>{const{browserSvg:e}=await import("./browser-CCr9dBVw.js");return{browserSvg:e}},__vite__mapDeps([12,1,2]))).browserSvg,card:async()=>(await a(async()=>{const{cardSvg:e}=await import("./card-TNK8uoZo.js");return{cardSvg:e}},__vite__mapDeps([13,1,2]))).cardSvg,checkmark:async()=>(await a(async()=>{const{checkmarkSvg:e}=await import("./checkmark-C2w8Cikz.js");return{checkmarkSvg:e}},__vite__mapDeps([14,1,2]))).checkmarkSvg,checkmarkBold:async()=>(await a(async()=>{const{checkmarkBoldSvg:e}=await import("./checkmark-bold-BMdMQszU.js");return{checkmarkBoldSvg:e}},__vite__mapDeps([15,1,2]))).checkmarkBoldSvg,chevronBottom:async()=>(await a(async()=>{const{chevronBottomSvg:e}=await import("./chevron-bottom-DxBHEAPc.js");return{chevronBottomSvg:e}},__vite__mapDeps([16,1,2]))).chevronBottomSvg,chevronLeft:async()=>(await a(async()=>{const{chevronLeftSvg:e}=await import("./chevron-left-CKs6NS7Z.js");return{chevronLeftSvg:e}},__vite__mapDeps([17,1,2]))).chevronLeftSvg,chevronRight:async()=>(await a(async()=>{const{chevronRightSvg:e}=await import("./chevron-right-BOY3qfDs.js");return{chevronRightSvg:e}},__vite__mapDeps([18,1,2]))).chevronRightSvg,chevronTop:async()=>(await a(async()=>{const{chevronTopSvg:e}=await import("./chevron-top-Bpa0uT2j.js");return{chevronTopSvg:e}},__vite__mapDeps([19,1,2]))).chevronTopSvg,chromeStore:async()=>(await a(async()=>{const{chromeStoreSvg:e}=await import("./chrome-store-BToCYVgp.js");return{chromeStoreSvg:e}},__vite__mapDeps([20,1,2]))).chromeStoreSvg,clock:async()=>(await a(async()=>{const{clockSvg:e}=await import("./clock-HRdyvwoo.js");return{clockSvg:e}},__vite__mapDeps([21,1,2]))).clockSvg,close:async()=>(await a(async()=>{const{closeSvg:e}=await import("./close-D3aFVave.js");return{closeSvg:e}},__vite__mapDeps([22,1,2]))).closeSvg,compass:async()=>(await a(async()=>{const{compassSvg:e}=await import("./compass-l5X63hul.js");return{compassSvg:e}},__vite__mapDeps([23,1,2]))).compassSvg,coinPlaceholder:async()=>(await a(async()=>{const{coinPlaceholderSvg:e}=await import("./coinPlaceholder-DD9mRH7w.js");return{coinPlaceholderSvg:e}},__vite__mapDeps([24,1,2]))).coinPlaceholderSvg,copy:async()=>(await a(async()=>{const{copySvg:e}=await import("./copy-DgEetYjV.js");return{copySvg:e}},__vite__mapDeps([25,1,2]))).copySvg,cursor:async()=>(await a(async()=>{const{cursorSvg:e}=await import("./cursor-Ky3eaAD7.js");return{cursorSvg:e}},__vite__mapDeps([26,1,2]))).cursorSvg,cursorTransparent:async()=>(await a(async()=>{const{cursorTransparentSvg:e}=await import("./cursor-transparent-Bqe9d4Di.js");return{cursorTransparentSvg:e}},__vite__mapDeps([27,1,2]))).cursorTransparentSvg,desktop:async()=>(await a(async()=>{const{desktopSvg:e}=await import("./desktop-unIDhpaz.js");return{desktopSvg:e}},__vite__mapDeps([28,1,2]))).desktopSvg,disconnect:async()=>(await a(async()=>{const{disconnectSvg:e}=await import("./disconnect-1_lXpvYK.js");return{disconnectSvg:e}},__vite__mapDeps([29,1,2]))).disconnectSvg,discord:async()=>(await a(async()=>{const{discordSvg:e}=await import("./discord-BidzYjuF.js");return{discordSvg:e}},__vite__mapDeps([30,1,2]))).discordSvg,etherscan:async()=>(await a(async()=>{const{etherscanSvg:e}=await import("./etherscan-CpQ5GyIP.js");return{etherscanSvg:e}},__vite__mapDeps([31,1,2]))).etherscanSvg,extension:async()=>(await a(async()=>{const{extensionSvg:e}=await import("./extension-Cgt205IU.js");return{extensionSvg:e}},__vite__mapDeps([32,1,2]))).extensionSvg,externalLink:async()=>(await a(async()=>{const{externalLinkSvg:e}=await import("./external-link-BsY3hSlM.js");return{externalLinkSvg:e}},__vite__mapDeps([33,1,2]))).externalLinkSvg,facebook:async()=>(await a(async()=>{const{facebookSvg:e}=await import("./facebook-SSktdS6X.js");return{facebookSvg:e}},__vite__mapDeps([34,1,2]))).facebookSvg,farcaster:async()=>(await a(async()=>{const{farcasterSvg:e}=await import("./farcaster-CNEyYgYz.js");return{farcasterSvg:e}},__vite__mapDeps([35,1,2]))).farcasterSvg,filters:async()=>(await a(async()=>{const{filtersSvg:e}=await import("./filters-Uk5r0NW3.js");return{filtersSvg:e}},__vite__mapDeps([36,1,2]))).filtersSvg,github:async()=>(await a(async()=>{const{githubSvg:e}=await import("./github-BSB171gO.js");return{githubSvg:e}},__vite__mapDeps([37,1,2]))).githubSvg,google:async()=>(await a(async()=>{const{googleSvg:e}=await import("./google-BY89mswP.js");return{googleSvg:e}},__vite__mapDeps([38,1,2]))).googleSvg,helpCircle:async()=>(await a(async()=>{const{helpCircleSvg:e}=await import("./help-circle-DRq46-uW.js");return{helpCircleSvg:e}},__vite__mapDeps([39,1,2]))).helpCircleSvg,image:async()=>(await a(async()=>{const{imageSvg:e}=await import("./image-JN3rlAuX.js");return{imageSvg:e}},__vite__mapDeps([40,1,2]))).imageSvg,id:async()=>(await a(async()=>{const{idSvg:e}=await import("./id-DhrXraqC.js");return{idSvg:e}},__vite__mapDeps([41,1,2]))).idSvg,infoCircle:async()=>(await a(async()=>{const{infoCircleSvg:e}=await import("./info-circle-DRP0NpCN.js");return{infoCircleSvg:e}},__vite__mapDeps([42,1,2]))).infoCircleSvg,lightbulb:async()=>(await a(async()=>{const{lightbulbSvg:e}=await import("./lightbulb-6y657fq5.js");return{lightbulbSvg:e}},__vite__mapDeps([43,1,2]))).lightbulbSvg,mail:async()=>(await a(async()=>{const{mailSvg:e}=await import("./mail-DCx4begw.js");return{mailSvg:e}},__vite__mapDeps([44,1,2]))).mailSvg,mobile:async()=>(await a(async()=>{const{mobileSvg:e}=await import("./mobile-B1w5pdz-.js");return{mobileSvg:e}},__vite__mapDeps([45,1,2]))).mobileSvg,more:async()=>(await a(async()=>{const{moreSvg:e}=await import("./more-DfcsneRS.js");return{moreSvg:e}},__vite__mapDeps([46,1,2]))).moreSvg,networkPlaceholder:async()=>(await a(async()=>{const{networkPlaceholderSvg:e}=await import("./network-placeholder-Ljn6DY8Z.js");return{networkPlaceholderSvg:e}},__vite__mapDeps([47,1,2]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await a(async()=>{const{nftPlaceholderSvg:e}=await import("./nftPlaceholder-xHBOitBh.js");return{nftPlaceholderSvg:e}},__vite__mapDeps([48,1,2]))).nftPlaceholderSvg,off:async()=>(await a(async()=>{const{offSvg:e}=await import("./off-Bm___1v2.js");return{offSvg:e}},__vite__mapDeps([49,1,2]))).offSvg,playStore:async()=>(await a(async()=>{const{playStoreSvg:e}=await import("./play-store-T1a7MDIJ.js");return{playStoreSvg:e}},__vite__mapDeps([50,1,2]))).playStoreSvg,plus:async()=>(await a(async()=>{const{plusSvg:e}=await import("./plus-CogSVdkJ.js");return{plusSvg:e}},__vite__mapDeps([51,1,2]))).plusSvg,qrCode:async()=>(await a(async()=>{const{qrCodeIcon:e}=await import("./qr-code-GUCGRdcz.js");return{qrCodeIcon:e}},__vite__mapDeps([52,1,2]))).qrCodeIcon,recycleHorizontal:async()=>(await a(async()=>{const{recycleHorizontalSvg:e}=await import("./recycle-horizontal-CiMfzxZP.js");return{recycleHorizontalSvg:e}},__vite__mapDeps([53,1,2]))).recycleHorizontalSvg,refresh:async()=>(await a(async()=>{const{refreshSvg:e}=await import("./refresh-muSAyIGI.js");return{refreshSvg:e}},__vite__mapDeps([54,1,2]))).refreshSvg,search:async()=>(await a(async()=>{const{searchSvg:e}=await import("./search-BFYxgZVU.js");return{searchSvg:e}},__vite__mapDeps([55,1,2]))).searchSvg,send:async()=>(await a(async()=>{const{sendSvg:e}=await import("./send-BCq1MAE7.js");return{sendSvg:e}},__vite__mapDeps([56,1,2]))).sendSvg,swapHorizontal:async()=>(await a(async()=>{const{swapHorizontalSvg:e}=await import("./swapHorizontal-eyYY3c6n.js");return{swapHorizontalSvg:e}},__vite__mapDeps([57,1,2]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await a(async()=>{const{swapHorizontalMediumSvg:e}=await import("./swapHorizontalMedium-Ce5zDgSW.js");return{swapHorizontalMediumSvg:e}},__vite__mapDeps([58,1,2]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await a(async()=>{const{swapHorizontalBoldSvg:e}=await import("./swapHorizontalBold-BMZ_ru9b.js");return{swapHorizontalBoldSvg:e}},__vite__mapDeps([59,1,2]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await a(async()=>{const{swapHorizontalRoundedBoldSvg:e}=await import("./swapHorizontalRoundedBold-C5HCyXsr.js");return{swapHorizontalRoundedBoldSvg:e}},__vite__mapDeps([60,1,2]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await a(async()=>{const{swapVerticalSvg:e}=await import("./swapVertical-7hthaOkE.js");return{swapVerticalSvg:e}},__vite__mapDeps([61,1,2]))).swapVerticalSvg,telegram:async()=>(await a(async()=>{const{telegramSvg:e}=await import("./telegram-D3RvCYjN.js");return{telegramSvg:e}},__vite__mapDeps([62,1,2]))).telegramSvg,threeDots:async()=>(await a(async()=>{const{threeDotsSvg:e}=await import("./three-dots-Br_4dJpY.js");return{threeDotsSvg:e}},__vite__mapDeps([63,1,2]))).threeDotsSvg,twitch:async()=>(await a(async()=>{const{twitchSvg:e}=await import("./twitch-7bBXmTMD.js");return{twitchSvg:e}},__vite__mapDeps([64,1,2]))).twitchSvg,twitter:async()=>(await a(async()=>{const{xSvg:e}=await import("./x-CFSrQLnd.js");return{xSvg:e}},__vite__mapDeps([65,1,2]))).xSvg,twitterIcon:async()=>(await a(async()=>{const{twitterIconSvg:e}=await import("./twitterIcon-DbJUeAPg.js");return{twitterIconSvg:e}},__vite__mapDeps([66,1,2]))).twitterIconSvg,verify:async()=>(await a(async()=>{const{verifySvg:e}=await import("./verify-BOv59zqu.js");return{verifySvg:e}},__vite__mapDeps([67,1,2]))).verifySvg,verifyFilled:async()=>(await a(async()=>{const{verifyFilledSvg:e}=await import("./verify-filled-BjdJOjTw.js");return{verifyFilledSvg:e}},__vite__mapDeps([68,1,2]))).verifyFilledSvg,wallet:async()=>(await a(async()=>{const{walletSvg:e}=await import("./wallet-Dfdt6DRe.js");return{walletSvg:e}},__vite__mapDeps([69,1,2]))).walletSvg,walletConnect:async()=>(await a(async()=>{const{walletConnectSvg:e}=await import("./walletconnect-UxM2Ul8z.js");return{walletConnectSvg:e}},__vite__mapDeps([70,1,2]))).walletConnectSvg,walletConnectLightBrown:async()=>(await a(async()=>{const{walletConnectLightBrownSvg:e}=await import("./walletconnect-UxM2Ul8z.js");return{walletConnectLightBrownSvg:e}},__vite__mapDeps([70,1,2]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await a(async()=>{const{walletConnectBrownSvg:e}=await import("./walletconnect-UxM2Ul8z.js");return{walletConnectBrownSvg:e}},__vite__mapDeps([70,1,2]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await a(async()=>{const{walletPlaceholderSvg:e}=await import("./wallet-placeholder-B9ecLRMJ.js");return{walletPlaceholderSvg:e}},__vite__mapDeps([71,1,2]))).walletPlaceholderSvg,warningCircle:async()=>(await a(async()=>{const{warningCircleSvg:e}=await import("./warning-circle-BIflJwf7.js");return{warningCircleSvg:e}},__vite__mapDeps([72,1,2]))).warningCircleSvg,x:async()=>(await a(async()=>{const{xSvg:e}=await import("./x-CFSrQLnd.js");return{xSvg:e}},__vite__mapDeps([65,1,2]))).xSvg,info:async()=>(await a(async()=>{const{infoSvg:e}=await import("./info-CVHFbq6h.js");return{infoSvg:e}},__vite__mapDeps([73,1,2]))).infoSvg,exclamationTriangle:async()=>(await a(async()=>{const{exclamationTriangleSvg:e}=await import("./exclamation-triangle-ChYSH75v.js");return{exclamationTriangleSvg:e}},__vite__mapDeps([74,1,2]))).exclamationTriangleSvg,reown:async()=>(await a(async()=>{const{reownSvg:e}=await import("./reown-logo-BOjx22Xl.js");return{reownSvg:e}},__vite__mapDeps([75,1,2]))).reownSvg};async function we(e){if(J.has(e))return J.get(e);const i=(yt[e]??yt.copy)();return J.set(e,i),i}let b=class extends it{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,j`${ge(we(this.name),j`<div class="fallback"></div>`)}`}};b.styles=[et,It,fe];H([_()],b.prototype,"size",void 0);H([_()],b.prototype,"name",void 0);H([_()],b.prototype,"color",void 0);H([_()],b.prototype,"aspectRatio",void 0);b=H([rt("wui-icon")],b);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=Rt(class extends Ct{constructor(e){var t;if(super(e),e.type!==Tt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,s;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((r=this.nt)!=null&&r.has(n))&&this.st.add(n);return this.render(t)}const i=e.element.classList;for(const n of this.st)n in t||(i.remove(n),this.st.delete(n));for(const n in t){const o=!!t[n];o===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(o?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return Q}}),ye=tt`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var z=function(e,t,i,r){var s=arguments.length,n=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let P=class extends it{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,j`<slot class=${me(t)}></slot>`}};P.styles=[et,ye];z([_()],P.prototype,"variant",void 0);z([_()],P.prototype,"color",void 0);z([_()],P.prototype,"align",void 0);z([_()],P.prototype,"lineClamp",void 0);P=z([rt("wui-text")],P);const $e=tt`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var v=function(e,t,i,r){var s=arguments.length,n=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let g=class extends it{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&m.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&m.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&m.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&m.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&m.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&m.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&m.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&m.getSpacingStyles(this.margin,3)};
    `,j`<slot></slot>`}};g.styles=[et,$e];v([_()],g.prototype,"flexDirection",void 0);v([_()],g.prototype,"flexWrap",void 0);v([_()],g.prototype,"flexBasis",void 0);v([_()],g.prototype,"flexGrow",void 0);v([_()],g.prototype,"flexShrink",void 0);v([_()],g.prototype,"alignItems",void 0);v([_()],g.prototype,"justifyContent",void 0);v([_()],g.prototype,"columnGap",void 0);v([_()],g.prototype,"rowGap",void 0);v([_()],g.prototype,"gap",void 0);v([_()],g.prototype,"padding",void 0);v([_()],g.prototype,"margin",void 0);g=v([rt("wui-flex")],g);export{p as E,R as T,m as U,Te as a,re as b,rt as c,Rt as d,me as e,ue as f,Ae as i,_ as n,B as r,be as x};
