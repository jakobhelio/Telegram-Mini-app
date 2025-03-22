import{c as v,n as p,i as _,a as l,r as B,x as d,U as ie,b as ne}from"./index-n_ZehpUP.js";import{o as Y}from"./if-defined-7r6laPMd.js";import{e as P,r as j,f as U,x as f,$ as W,m as ae,K as se,R as c,p as w,w as L,J as re,s as K,q as ce,k as J,X as M,M as h,O as E,a as V,A as Q,l as S,D as z,T as le,a0 as de,j as ue,h as pe}from"./index-tLyCCnDv.js";import"./index-B4DzWECY.js";import"./index-amhbIFfC.js";import"./index-Cq5ArIrS.js";import"./index-B426Rwk8.js";import"./index-BEQt3E5J.js";import"./index-DDTs4T5O.js";const he=P`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;var we=function(s,e,t,i){var n=arguments.length,o=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,i);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(o=(n<3?a(o):n>3?a(e,t,o):a(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};let X=class extends U{render(){return f`<slot></slot>`}};X.styles=[j,he];X=we([v("wui-card")],X);const me=P`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var $=function(s,e,t,i){var n=arguments.length,o=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,i);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(o=(n<3?a(o):n>3?a(e,t,o):a(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};let C=class extends U{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,f`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){W.close()}};C.styles=[j,me];$([p()],C.prototype,"message",void 0);$([p()],C.prototype,"backgroundColor",void 0);$([p()],C.prototype,"iconColor",void 0);$([p()],C.prototype,"icon",void 0);C=$([v("wui-alertbar")],C);const fe=_`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var ee=function(s,e,t,i){var n=arguments.length,o=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,i);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(o=(n<3?a(o):n>3?a(e,t,o):a(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};const be={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let O=class extends B{constructor(){super(),this.unsubscribe=[],this.open=W.state.open,this.onOpen(!0),this.unsubscribe.push(W.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=W.state,i=be[t];return d`
      <wui-alertbar
        message=${e}
        backgroundColor=${i==null?void 0:i.backgroundColor}
        iconColor=${i==null?void 0:i.iconColor}
        icon=${i==null?void 0:i.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};O.styles=fe;ee([l()],O.prototype,"open",void 0);O=ee([v("w3m-alertbar")],O);const ge=P`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var te=function(s,e,t,i){var n=arguments.length,o=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,i);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(o=(n<3?a(o):n>3?a(e,t,o):a(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};let R=class extends U{constructor(){super(...arguments),this.imageSrc=""}render(){return f`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?f`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:f`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};R.styles=[j,ae,se,ge];te([p()],R.prototype,"imageSrc",void 0);R=te([v("wui-select")],R);const ve=_`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var m=function(s,e,t,i){var n=arguments.length,o=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,i);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(o=(n<3?a(o):n>3?a(e,t,o):a(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};const ye=["SmartSessionList"];function H(){var a,r,y,T,A,D,N;const s=(r=(a=c.state.data)==null?void 0:a.connector)==null?void 0:r.name,e=(T=(y=c.state.data)==null?void 0:y.wallet)==null?void 0:T.name,t=(D=(A=c.state.data)==null?void 0:A.network)==null?void 0:D.name,i=e??s,n=V.getConnectors();return{Connect:`Connect ${n.length===1&&((N=n[0])==null?void 0:N.id)==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:i?`Get ${i}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SwitchNetwork:t??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:Q.state.socialProvider?Q.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In"}}let u=class extends B{constructor(){super(),this.unsubscribe=[],this.heading=H()[c.state.view],this.network=w.state.activeCaipNetwork,this.networkImage=L.getNetworkImage(this.network),this.buffering=!1,this.showBack=!1,this.prevHistoryLength=1,this.view=c.state.view,this.viewDirection="",this.headerText=H()[c.state.view],this.unsubscribe.push(re.subscribeNetworkImages(()=>{this.networkImage=L.getNetworkImage(this.network)}),c.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=H()[e]},K.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),ce.subscribeKey("buffering",e=>this.buffering=e),w.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=L.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return d`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){J.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),c.push("WhatIsAWallet")}async onClose(){c.state.view==="UnsupportedChain"||await M.isSIWXCloseDisabled()?h.shake():h.close()}rightHeaderTemplate(){var t,i,n;const e=(n=(i=(t=E)==null?void 0:t.state)==null?void 0:i.features)==null?void 0:n.smartSessions;return c.state.view!=="Account"||!e?this.closeButtonTemplate():d`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>c.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return d`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=ye.includes(this.view);return d`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?d`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var y;const{view:e}=c.state,t=e==="Connect",i=E.state.enableEmbedded,n=e==="ApproveTransaction",o=e==="ConnectingSiwe",a=e==="Account",r=n||o||t&&i;return a?d`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${Y((y=this.network)==null?void 0:y.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${Y(this.networkImage)}
      ></wui-select>`:this.showBack&&!r?d`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:d`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(J.sendEvent({type:"track",event:"CLICK_NETWORKS"}),c.push("Networks"))}isAllowedNetworkSwitch(){const e=w.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,i=e==null?void 0:e.find(({id:n})=>{var o;return n===((o=this.network)==null?void 0:o.id)});return t||!i}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=c.state;let t=K.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=K.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var i;const{history:e}=c.state,t=(i=this.shadowRoot)==null?void 0:i.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){c.goBack()}};u.styles=ve;m([l()],u.prototype,"heading",void 0);m([l()],u.prototype,"network",void 0);m([l()],u.prototype,"networkImage",void 0);m([l()],u.prototype,"buffering",void 0);m([l()],u.prototype,"showBack",void 0);m([l()],u.prototype,"prevHistoryLength",void 0);m([l()],u.prototype,"view",void 0);m([l()],u.prototype,"viewDirection",void 0);m([l()],u.prototype,"headerText",void 0);u=m([v("w3m-header")],u);const Ce=P`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var x=function(s,e,t,i){var n=arguments.length,o=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,i);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(o=(n<3?a(o):n>3?a(e,t,o):a(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};let b=class extends U{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return f`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?f`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:this.iconType==="default"?f`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:f`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};b.styles=[j,Ce];x([p()],b.prototype,"backgroundColor",void 0);x([p()],b.prototype,"iconColor",void 0);x([p()],b.prototype,"icon",void 0);x([p()],b.prototype,"message",void 0);x([p()],b.prototype,"loading",void 0);x([p()],b.prototype,"iconType",void 0);b=x([v("wui-snackbar")],b);const xe=_`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var oe=function(s,e,t,i){var n=arguments.length,o=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,i);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(o=(n<3?a(o):n>3?a(e,t,o):a(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};const ke={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let I=class extends B{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=S.state.open,this.unsubscribe.push(S.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t,svg:i}=S.state,n=ke[t],{icon:o,iconColor:a}=i??n??{};return d`
      <wui-snackbar
        message=${e}
        backgroundColor=${n==null?void 0:n.backgroundColor}
        iconColor=${a}
        icon=${o}
        .loading=${t==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),S.state.autoClose&&(this.timeout=setTimeout(()=>S.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};I.styles=xe;oe([l()],I.prototype,"open",void 0);I=oe([v("w3m-snackbar")],I);const Se=_`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var k=function(s,e,t,i){var n=arguments.length,o=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,i);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(o=(n<3?a(o):n>3?a(e,t,o):a(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};const Z="scroll-lock";let g=class extends B{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=E.state.enableEmbedded,this.open=h.state.open,this.caipAddress=w.state.activeCaipAddress,this.caipNetwork=w.state.activeCaipNetwork,this.shake=h.state.shake,this.filterByNamespace=V.state.filterByNamespace,this.initializeTheming(),z.prefetchAnalyticsConfig(),this.unsubscribe.push(h.subscribeKey("open",e=>e?this.onOpen():this.onClose()),h.subscribeKey("shake",e=>this.shake=e),w.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),w.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),E.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),V.subscribeKey("filterByNamespace",e=>{this.filterByNamespace!==e&&(z.fetchRecommendedWallets(),this.filterByNamespace=e)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){h.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?d`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?d`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return d` <wui-card
      shake="${this.shake}"
      data-embedded="${Y(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){c.state.view==="UnsupportedChain"||await M.isSIWXCloseDisabled()?h.shake():h.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=le.state,i=ie.getColorTheme(t);de(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),S.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Z,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Z}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",i=>{if(i.key==="Escape")this.handleClose();else if(i.key==="Tab"){const{tagName:n}=i.target;n&&!n.includes("W3M-")&&!n.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=w.state.isSwitchingNamespace,i=ue.getPlainAddress(e);!i&&!t?h.close():t&&i&&c.goBack(),await M.initializeIfEnabled(),this.caipAddress=e,w.setIsSwitchingNamespace(!1)}onNewNetwork(e){var N,G,q,F;const t=(G=(N=this.caipNetwork)==null?void 0:N.caipNetworkId)==null?void 0:G.toString(),i=(q=e==null?void 0:e.caipNetworkId)==null?void 0:q.toString(),n=t&&i&&t!==i,o=w.state.isSwitchingNamespace,a=((F=this.caipNetwork)==null?void 0:F.name)===pe.UNSUPPORTED_NETWORK_NAME,r=c.state.view==="ConnectingExternal",y=!this.caipAddress,T=n&&!a&&!o,A=c.state.view==="UnsupportedChain";!r&&(y||A||T)&&c.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(this.hasPrefetched=!0,z.prefetch())}};g.styles=Se;k([ne({type:Boolean})],g.prototype,"enableEmbedded",void 0);k([l()],g.prototype,"open",void 0);k([l()],g.prototype,"caipAddress",void 0);k([l()],g.prototype,"caipNetwork",void 0);k([l()],g.prototype,"shake",void 0);k([l()],g.prototype,"filterByNamespace",void 0);g=k([v("w3m-modal")],g);export{g as W3mModal};
