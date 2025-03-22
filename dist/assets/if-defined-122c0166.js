import{ae as k,af as B,ag as A,l as P,t as R,a3 as M,r as L,x as E,_ as o,a9 as j}from"./index-a3470178.js";const h={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){try{return new URL(e).hostname}catch{return""}},getTruncateString({string:e,charsStart:t,charsEnd:i,truncate:a}){return e.length<=t+i?e:a==="end"?`${e.substring(0,t)}...`:a==="start"?`...${e.substring(e.length-i)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(i))}`},generateAvatarColors(e){const i=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),a=this.hexToRgb(i),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(n==null?void 0:n.replace("px","")),c=`${s}% ${s}% at 65% 40%`,_=[];for(let v=0;v<5;v+=1){const d=this.tintColor(a,.15*v);_.push(`rgb(${d[0]}, ${d[1]}, ${d[2]})`)}return`
    --local-color-1: ${_[0]};
    --local-color-2: ${_[1]};
    --local-color-3: ${_[2]};
    --local-color-4: ${_[3]};
    --local-color-5: ${_[4]};
    --local-radial-circle: ${c}
   `},hexToRgb(e){const t=parseInt(e,16),i=t>>16&255,a=t>>8&255,n=t&255;return[i,a,n]},tintColor(e,t){const[i,a,n]=e,r=Math.round(i+(255-i)*t),s=Math.round(a+(255-a)*t),c=Math.round(n+(255-n)*t);return[r,s,c]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){var t;return e||(typeof window<"u"&&window.matchMedia?(t=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&t.matches?"dark":"light":"dark")},splitBalance(e){const t=e.split(".");return t.length===2?[t[0],t[1]]:["0","00"]},roundNumber(e,t,i){return e.toString().length>=t?Number(e).toFixed(i):e},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})}};function U(e,t){const{kind:i,elements:a}=t;return{kind:i,elements:a,finisher(n){customElements.get(e)||customElements.define(e,n)}}}function H(e,t){return customElements.get(e)||customElements.define(e,t),t}function O(e){return function(i){return typeof i=="function"?H(e,i):U(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:B},F=(e=N,t,i)=>{const{kind:a,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,e),a==="accessor"){const{name:s}=i;return{set(c){const _=t.get.call(this);t.set.call(this,c),this.requestUpdate(s,_,e)},init(c){return c!==void 0&&this.P(s,void 0,e),c}}}if(a==="setter"){const{name:s}=i;return function(c){const _=this[s];t.call(this,c),this.requestUpdate(s,_,e)}}throw Error("Unsupported decorator location: "+a)};function l(e){return(t,i)=>typeof i=="object"?F(e,t,i):((a,n,r)=>{const s=n.hasOwnProperty(r);return n.constructor.createProperty(r,s?{...a,wrapped:!0}:a),s?Object.getOwnPropertyDescriptor(n,r):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(e){return l({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=e=>e===null||typeof e!="object"&&typeof e!="function",G=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},C=e=>(...t)=>({_$litDirective$:e,values:t});let x=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,a){this._$Ct=t,this._$AM=i,this._$Ci=a}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=(e,t)=>{var a;const i=e._$AN;if(i===void 0)return!1;for(const n of i)(a=n._$AO)==null||a.call(n,t,!1),f(n,t);return!0},$=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},z=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),K(t)}};function q(e){this._$AN!==void 0?($(this),this._$AM=e,z(this)):this._$AM=e}function Y(e,t=!1,i=0){const a=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(a))for(let r=i;r<a.length;r++)f(a[r],!1),$(a[r]);else a!=null&&(f(a,!1),$(a));else f(this,e)}const K=e=>{e.type==V.CHILD&&(e._$AP??(e._$AP=Y),e._$AQ??(e._$AQ=q))};class X extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,a){super._$AT(t,i,a),z(this),this.isConnected=t._$AU}_$AO(t,i=!0){var a,n;t!==this.isConnected&&(this.isConnected=t,t?(a=this.reconnected)==null||a.call(this):(n=this.disconnected)==null||n.call(this)),i&&(f(this,t),$(this))}setValue(t){if(G(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Z{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class Q{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=e=>!W(e)&&typeof e.then=="function",D=1073741823;class J extends X{constructor(){super(...arguments),this._$Cwt=D,this._$Cbt=[],this._$CK=new Z(this),this._$CX=new Q}render(...t){return t.find(i=>!I(i))??A}update(t,i){const a=this._$Cbt;let n=a.length;this._$Cbt=i;const r=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<i.length&&!(c>this._$Cwt);c++){const _=i[c];if(!I(_))return this._$Cwt=c,_;c<n&&_===a[c]||(this._$Cwt=D,n=0,Promise.resolve(_).then(async v=>{for(;s.get();)await s.get();const d=r.deref();if(d!==void 0){const T=d._$Cbt.indexOf(_);T>-1&&T<d._$Cwt&&(d._$Cwt=T,d.setValue(v))}}))}return A}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const tt=C(J);class et{constructor(){this.cache=new Map}set(t,i){this.cache.set(t,i)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}}const S=new et,it=P`
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
`;var m=globalThis&&globalThis.__decorate||function(e,t,i,a){var n=arguments.length,r=n<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,a);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const b={add:async()=>(await o(()=>import("./add-2147f98e.js"),["assets/add-2147f98e.js","assets/index-a3470178.js","assets/index-1774331a.css"])).addSvg,allWallets:async()=>(await o(()=>import("./all-wallets-1eb1e8e9.js"),["assets/all-wallets-1eb1e8e9.js","assets/index-a3470178.js","assets/index-1774331a.css"])).allWalletsSvg,arrowBottomCircle:async()=>(await o(()=>import("./arrow-bottom-circle-6310b254.js"),["assets/arrow-bottom-circle-6310b254.js","assets/index-a3470178.js","assets/index-1774331a.css"])).arrowBottomCircleSvg,appStore:async()=>(await o(()=>import("./app-store-76b51114.js"),["assets/app-store-76b51114.js","assets/index-a3470178.js","assets/index-1774331a.css"])).appStoreSvg,apple:async()=>(await o(()=>import("./apple-ce87f206.js"),["assets/apple-ce87f206.js","assets/index-a3470178.js","assets/index-1774331a.css"])).appleSvg,arrowBottom:async()=>(await o(()=>import("./arrow-bottom-7a3b7ea3.js"),["assets/arrow-bottom-7a3b7ea3.js","assets/index-a3470178.js","assets/index-1774331a.css"])).arrowBottomSvg,arrowLeft:async()=>(await o(()=>import("./arrow-left-3423dc58.js"),["assets/arrow-left-3423dc58.js","assets/index-a3470178.js","assets/index-1774331a.css"])).arrowLeftSvg,arrowRight:async()=>(await o(()=>import("./arrow-right-d8b66e5b.js"),["assets/arrow-right-d8b66e5b.js","assets/index-a3470178.js","assets/index-1774331a.css"])).arrowRightSvg,arrowTop:async()=>(await o(()=>import("./arrow-top-9590739c.js"),["assets/arrow-top-9590739c.js","assets/index-a3470178.js","assets/index-1774331a.css"])).arrowTopSvg,bank:async()=>(await o(()=>import("./bank-8f47a44f.js"),["assets/bank-8f47a44f.js","assets/index-a3470178.js","assets/index-1774331a.css"])).bankSvg,browser:async()=>(await o(()=>import("./browser-217ba8b3.js"),["assets/browser-217ba8b3.js","assets/index-a3470178.js","assets/index-1774331a.css"])).browserSvg,card:async()=>(await o(()=>import("./card-d09652fa.js"),["assets/card-d09652fa.js","assets/index-a3470178.js","assets/index-1774331a.css"])).cardSvg,checkmark:async()=>(await o(()=>import("./checkmark-81ce80ac.js"),["assets/checkmark-81ce80ac.js","assets/index-a3470178.js","assets/index-1774331a.css"])).checkmarkSvg,checkmarkBold:async()=>(await o(()=>import("./checkmark-bold-71780349.js"),["assets/checkmark-bold-71780349.js","assets/index-a3470178.js","assets/index-1774331a.css"])).checkmarkBoldSvg,chevronBottom:async()=>(await o(()=>import("./chevron-bottom-b145a385.js"),["assets/chevron-bottom-b145a385.js","assets/index-a3470178.js","assets/index-1774331a.css"])).chevronBottomSvg,chevronLeft:async()=>(await o(()=>import("./chevron-left-95720154.js"),["assets/chevron-left-95720154.js","assets/index-a3470178.js","assets/index-1774331a.css"])).chevronLeftSvg,chevronRight:async()=>(await o(()=>import("./chevron-right-ecc0a60b.js"),["assets/chevron-right-ecc0a60b.js","assets/index-a3470178.js","assets/index-1774331a.css"])).chevronRightSvg,chevronTop:async()=>(await o(()=>import("./chevron-top-2e601947.js"),["assets/chevron-top-2e601947.js","assets/index-a3470178.js","assets/index-1774331a.css"])).chevronTopSvg,chromeStore:async()=>(await o(()=>import("./chrome-store-d3f23aca.js"),["assets/chrome-store-d3f23aca.js","assets/index-a3470178.js","assets/index-1774331a.css"])).chromeStoreSvg,clock:async()=>(await o(()=>import("./clock-3952ff88.js"),["assets/clock-3952ff88.js","assets/index-a3470178.js","assets/index-1774331a.css"])).clockSvg,close:async()=>(await o(()=>import("./close-c026fdc8.js"),["assets/close-c026fdc8.js","assets/index-a3470178.js","assets/index-1774331a.css"])).closeSvg,compass:async()=>(await o(()=>import("./compass-901c64be.js"),["assets/compass-901c64be.js","assets/index-a3470178.js","assets/index-1774331a.css"])).compassSvg,coinPlaceholder:async()=>(await o(()=>import("./coinPlaceholder-5652523d.js"),["assets/coinPlaceholder-5652523d.js","assets/index-a3470178.js","assets/index-1774331a.css"])).coinPlaceholderSvg,copy:async()=>(await o(()=>import("./copy-5b7145ff.js"),["assets/copy-5b7145ff.js","assets/index-a3470178.js","assets/index-1774331a.css"])).copySvg,cursor:async()=>(await o(()=>import("./cursor-1dee4ebb.js"),["assets/cursor-1dee4ebb.js","assets/index-a3470178.js","assets/index-1774331a.css"])).cursorSvg,cursorTransparent:async()=>(await o(()=>import("./cursor-transparent-42f457d0.js"),["assets/cursor-transparent-42f457d0.js","assets/index-a3470178.js","assets/index-1774331a.css"])).cursorTransparentSvg,desktop:async()=>(await o(()=>import("./desktop-cd2e907b.js"),["assets/desktop-cd2e907b.js","assets/index-a3470178.js","assets/index-1774331a.css"])).desktopSvg,disconnect:async()=>(await o(()=>import("./disconnect-0b2e1d7b.js"),["assets/disconnect-0b2e1d7b.js","assets/index-a3470178.js","assets/index-1774331a.css"])).disconnectSvg,discord:async()=>(await o(()=>import("./discord-3caabaa3.js"),["assets/discord-3caabaa3.js","assets/index-a3470178.js","assets/index-1774331a.css"])).discordSvg,etherscan:async()=>(await o(()=>import("./etherscan-d6b893d6.js"),["assets/etherscan-d6b893d6.js","assets/index-a3470178.js","assets/index-1774331a.css"])).etherscanSvg,extension:async()=>(await o(()=>import("./extension-bce04749.js"),["assets/extension-bce04749.js","assets/index-a3470178.js","assets/index-1774331a.css"])).extensionSvg,externalLink:async()=>(await o(()=>import("./external-link-d5399a17.js"),["assets/external-link-d5399a17.js","assets/index-a3470178.js","assets/index-1774331a.css"])).externalLinkSvg,facebook:async()=>(await o(()=>import("./facebook-0be0347d.js"),["assets/facebook-0be0347d.js","assets/index-a3470178.js","assets/index-1774331a.css"])).facebookSvg,farcaster:async()=>(await o(()=>import("./farcaster-6c047254.js"),["assets/farcaster-6c047254.js","assets/index-a3470178.js","assets/index-1774331a.css"])).farcasterSvg,filters:async()=>(await o(()=>import("./filters-9868a44e.js"),["assets/filters-9868a44e.js","assets/index-a3470178.js","assets/index-1774331a.css"])).filtersSvg,github:async()=>(await o(()=>import("./github-c36524dd.js"),["assets/github-c36524dd.js","assets/index-a3470178.js","assets/index-1774331a.css"])).githubSvg,google:async()=>(await o(()=>import("./google-05854206.js"),["assets/google-05854206.js","assets/index-a3470178.js","assets/index-1774331a.css"])).googleSvg,helpCircle:async()=>(await o(()=>import("./help-circle-1e140ea7.js"),["assets/help-circle-1e140ea7.js","assets/index-a3470178.js","assets/index-1774331a.css"])).helpCircleSvg,image:async()=>(await o(()=>import("./image-2a2cfe2b.js"),["assets/image-2a2cfe2b.js","assets/index-a3470178.js","assets/index-1774331a.css"])).imageSvg,id:async()=>(await o(()=>import("./id-4e4e5d73.js"),["assets/id-4e4e5d73.js","assets/index-a3470178.js","assets/index-1774331a.css"])).idSvg,infoCircle:async()=>(await o(()=>import("./info-circle-fe3162b2.js"),["assets/info-circle-fe3162b2.js","assets/index-a3470178.js","assets/index-1774331a.css"])).infoCircleSvg,lightbulb:async()=>(await o(()=>import("./lightbulb-445132a0.js"),["assets/lightbulb-445132a0.js","assets/index-a3470178.js","assets/index-1774331a.css"])).lightbulbSvg,mail:async()=>(await o(()=>import("./mail-982960c5.js"),["assets/mail-982960c5.js","assets/index-a3470178.js","assets/index-1774331a.css"])).mailSvg,mobile:async()=>(await o(()=>import("./mobile-cc849af1.js"),["assets/mobile-cc849af1.js","assets/index-a3470178.js","assets/index-1774331a.css"])).mobileSvg,more:async()=>(await o(()=>import("./more-90fe7310.js"),["assets/more-90fe7310.js","assets/index-a3470178.js","assets/index-1774331a.css"])).moreSvg,networkPlaceholder:async()=>(await o(()=>import("./network-placeholder-616b044a.js"),["assets/network-placeholder-616b044a.js","assets/index-a3470178.js","assets/index-1774331a.css"])).networkPlaceholderSvg,nftPlaceholder:async()=>(await o(()=>import("./nftPlaceholder-11b43dee.js"),["assets/nftPlaceholder-11b43dee.js","assets/index-a3470178.js","assets/index-1774331a.css"])).nftPlaceholderSvg,off:async()=>(await o(()=>import("./off-a42dc6be.js"),["assets/off-a42dc6be.js","assets/index-a3470178.js","assets/index-1774331a.css"])).offSvg,playStore:async()=>(await o(()=>import("./play-store-b07666ba.js"),["assets/play-store-b07666ba.js","assets/index-a3470178.js","assets/index-1774331a.css"])).playStoreSvg,plus:async()=>(await o(()=>import("./plus-4448ff99.js"),["assets/plus-4448ff99.js","assets/index-a3470178.js","assets/index-1774331a.css"])).plusSvg,qrCode:async()=>(await o(()=>import("./qr-code-f2489b07.js"),["assets/qr-code-f2489b07.js","assets/index-a3470178.js","assets/index-1774331a.css"])).qrCodeIcon,recycleHorizontal:async()=>(await o(()=>import("./recycle-horizontal-bc5f6e0c.js"),["assets/recycle-horizontal-bc5f6e0c.js","assets/index-a3470178.js","assets/index-1774331a.css"])).recycleHorizontalSvg,refresh:async()=>(await o(()=>import("./refresh-9c9f223d.js"),["assets/refresh-9c9f223d.js","assets/index-a3470178.js","assets/index-1774331a.css"])).refreshSvg,search:async()=>(await o(()=>import("./search-847ee84e.js"),["assets/search-847ee84e.js","assets/index-a3470178.js","assets/index-1774331a.css"])).searchSvg,send:async()=>(await o(()=>import("./send-3031901b.js"),["assets/send-3031901b.js","assets/index-a3470178.js","assets/index-1774331a.css"])).sendSvg,swapHorizontal:async()=>(await o(()=>import("./swapHorizontal-388da95e.js"),["assets/swapHorizontal-388da95e.js","assets/index-a3470178.js","assets/index-1774331a.css"])).swapHorizontalSvg,swapHorizontalMedium:async()=>(await o(()=>import("./swapHorizontalMedium-7a089635.js"),["assets/swapHorizontalMedium-7a089635.js","assets/index-a3470178.js","assets/index-1774331a.css"])).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await o(()=>import("./swapHorizontalBold-abbd8ea4.js"),["assets/swapHorizontalBold-abbd8ea4.js","assets/index-a3470178.js","assets/index-1774331a.css"])).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await o(()=>import("./swapHorizontalRoundedBold-a74d5e88.js"),["assets/swapHorizontalRoundedBold-a74d5e88.js","assets/index-a3470178.js","assets/index-1774331a.css"])).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await o(()=>import("./swapVertical-8b8a97da.js"),["assets/swapVertical-8b8a97da.js","assets/index-a3470178.js","assets/index-1774331a.css"])).swapVerticalSvg,telegram:async()=>(await o(()=>import("./telegram-717afec9.js"),["assets/telegram-717afec9.js","assets/index-a3470178.js","assets/index-1774331a.css"])).telegramSvg,threeDots:async()=>(await o(()=>import("./three-dots-ba86dec6.js"),["assets/three-dots-ba86dec6.js","assets/index-a3470178.js","assets/index-1774331a.css"])).threeDotsSvg,twitch:async()=>(await o(()=>import("./twitch-7bd0c888.js"),["assets/twitch-7bd0c888.js","assets/index-a3470178.js","assets/index-1774331a.css"])).twitchSvg,twitter:async()=>(await o(()=>import("./x-c4c8698b.js"),["assets/x-c4c8698b.js","assets/index-a3470178.js","assets/index-1774331a.css"])).xSvg,twitterIcon:async()=>(await o(()=>import("./twitterIcon-2a73de3f.js"),["assets/twitterIcon-2a73de3f.js","assets/index-a3470178.js","assets/index-1774331a.css"])).twitterIconSvg,verify:async()=>(await o(()=>import("./verify-c12e5866.js"),["assets/verify-c12e5866.js","assets/index-a3470178.js","assets/index-1774331a.css"])).verifySvg,verifyFilled:async()=>(await o(()=>import("./verify-filled-bfc54572.js"),["assets/verify-filled-bfc54572.js","assets/index-a3470178.js","assets/index-1774331a.css"])).verifyFilledSvg,wallet:async()=>(await o(()=>import("./wallet-f6734e1c.js"),["assets/wallet-f6734e1c.js","assets/index-a3470178.js","assets/index-1774331a.css"])).walletSvg,walletConnect:async()=>(await o(()=>import("./walletconnect-c6908c8e.js"),["assets/walletconnect-c6908c8e.js","assets/index-a3470178.js","assets/index-1774331a.css"])).walletConnectSvg,walletConnectLightBrown:async()=>(await o(()=>import("./walletconnect-c6908c8e.js"),["assets/walletconnect-c6908c8e.js","assets/index-a3470178.js","assets/index-1774331a.css"])).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await o(()=>import("./walletconnect-c6908c8e.js"),["assets/walletconnect-c6908c8e.js","assets/index-a3470178.js","assets/index-1774331a.css"])).walletConnectBrownSvg,walletPlaceholder:async()=>(await o(()=>import("./wallet-placeholder-272d6ad8.js"),["assets/wallet-placeholder-272d6ad8.js","assets/index-a3470178.js","assets/index-1774331a.css"])).walletPlaceholderSvg,warningCircle:async()=>(await o(()=>import("./warning-circle-32f0720d.js"),["assets/warning-circle-32f0720d.js","assets/index-a3470178.js","assets/index-1774331a.css"])).warningCircleSvg,x:async()=>(await o(()=>import("./x-c4c8698b.js"),["assets/x-c4c8698b.js","assets/index-a3470178.js","assets/index-1774331a.css"])).xSvg,info:async()=>(await o(()=>import("./info-6c5e8915.js"),["assets/info-6c5e8915.js","assets/index-a3470178.js","assets/index-1774331a.css"])).infoSvg,exclamationTriangle:async()=>(await o(()=>import("./exclamation-triangle-496797a2.js"),["assets/exclamation-triangle-496797a2.js","assets/index-a3470178.js","assets/index-1774331a.css"])).exclamationTriangleSvg,reown:async()=>(await o(()=>import("./reown-logo-f4f4ad30.js"),["assets/reown-logo-f4f4ad30.js","assets/index-a3470178.js","assets/index-1774331a.css"])).reownSvg};async function ot(e){if(S.has(e))return S.get(e);const i=(b[e]??b.copy)();return S.set(e,i),i}let g=class extends L{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,E`${tt(ot(this.name),E`<div class="fallback"></div>`)}`}};g.styles=[R,M,it];m([l()],g.prototype,"size",void 0);m([l()],g.prototype,"name",void 0);m([l()],g.prototype,"color",void 0);m([l()],g.prototype,"aspectRatio",void 0);g=m([O("wui-icon")],g);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=C(class extends x{constructor(e){var t;if(super(e),e.type!==V.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var a,n;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((a=this.nt)!=null&&a.has(r))&&this.st.add(r);return this.render(t)}const i=e.element.classList;for(const r of this.st)r in t||(i.remove(r),this.st.delete(r));for(const r in t){const s=!!t[r];s===this.st.has(r)||(n=this.nt)!=null&&n.has(r)||(s?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return A}}),at=P`
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
`;var y=globalThis&&globalThis.__decorate||function(e,t,i,a){var n=arguments.length,r=n<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,a);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let w=class extends L{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,E`<slot class=${rt(t)}></slot>`}};w.styles=[R,at];y([l()],w.prototype,"variant",void 0);y([l()],w.prototype,"color",void 0);y([l()],w.prototype,"align",void 0);y([l()],w.prototype,"lineClamp",void 0);w=y([O("wui-text")],w);const nt=P`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var p=globalThis&&globalThis.__decorate||function(e,t,i,a){var n=arguments.length,r=n<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,a);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let u=class extends L{render(){return this.style.cssText=`
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
      padding-top: ${this.padding&&h.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&h.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&h.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&h.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&h.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&h.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&h.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&h.getSpacingStyles(this.margin,3)};
    `,E`<slot></slot>`}};u.styles=[R,nt];p([l()],u.prototype,"flexDirection",void 0);p([l()],u.prototype,"flexWrap",void 0);p([l()],u.prototype,"flexBasis",void 0);p([l()],u.prototype,"flexGrow",void 0);p([l()],u.prototype,"flexShrink",void 0);p([l()],u.prototype,"alignItems",void 0);p([l()],u.prototype,"justifyContent",void 0);p([l()],u.prototype,"columnGap",void 0);p([l()],u.prototype,"rowGap",void 0);p([l()],u.prototype,"gap",void 0);p([l()],u.prototype,"padding",void 0);p([l()],u.prototype,"margin",void 0);u=p([O("wui-flex")],u);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=e=>e??j;export{h as U,C as a,O as c,rt as e,X as f,l as n,dt as o,ct as r};
