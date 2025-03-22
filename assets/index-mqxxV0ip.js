import{n as u,c as p,U as O,r as x,x as l,b as v,a as c,i as R,T as Cn}from"./index-n_ZehpUP.js";import{o as h}from"./if-defined-7r6laPMd.js";import{e as I,r as T,m as E,f as A,x as g,p as d,w as S,O as $,J as fe,A as m,j as f,M as N,k,t as ge,a as b,h as _,R as w,d as z,l as L,W as F,q as y,v as $n,s as kn,B as Xi,K as Sn,L as ci,D as W,P as Oe,Q as ki,V as _n,T as Yt,X as Si}from"./index-tLyCCnDv.js";import{o as Re}from"./if-defined-CqFZ3rMD.js";import"./index-amhbIFfC.js";import"./index-B426Rwk8.js";import"./index-Bv4gaPM0.js";import"./index-Cq5ArIrS.js";import{W as Ss}from"./index-DDTs4T5O.js";import"./index-B4DzWECY.js";import"./index-CBA9vUjO.js";import{e as Yi,n as Qi}from"./index-D9AsQ2Ps.js";import{r as Ji}from"./state-CFpka3Fi.js";import"./index-Be7GexJ2.js";import"./index-C5WfdMvO.js";import{M as _i}from"./index-DZDwZh2i.js";import"./index-BEQt3E5J.js";import"./index-C-VVRuU6.js";import"./index-Br3p1NQg.js";import{a as In,i as Tn,t as An,e as Rn,n as Wn}from"./ref-BQEoHyCo.js";import"./index-K3rLglmn.js";import"./index-DLAOgAml.js";import{S as En}from"./index-CTigwO3t.js";import{N as Nn}from"./index-CTjQ8MSE.js";import"./index-5iCmcGKE.js";import"./index-BDvr1C6T.js";import"./index-Dl-nto0A.js";const On=I`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var te=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let G=class extends A{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return g`
      <button
        ?disabled=${this.disabled}
        class=${Re(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?O.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return g` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?g`<wui-image src=${this.networkSrc}></wui-image>`:g`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,i=this.loading?g`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:g`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return g`${e} ${i}`}return null}};G.styles=[T,E,On];te([u()],G.prototype,"networkSrc",void 0);te([u()],G.prototype,"avatarSrc",void 0);te([u()],G.prototype,"balance",void 0);te([u({type:Boolean})],G.prototype,"isUnsupportedChain",void 0);te([u({type:Boolean})],G.prototype,"disabled",void 0);te([u({type:Boolean})],G.prototype,"loading",void 0);te([u()],G.prototype,"address",void 0);te([u()],G.prototype,"profileName",void 0);te([u()],G.prototype,"charsStart",void 0);te([u()],G.prototype,"charsEnd",void 0);G=te([p("wui-account-button")],G);var V=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};class M extends x{constructor(){var e,i,n,o,t,r;super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=(e=d.getAccountData(this.namespace))==null?void 0:e.caipAddress,this.balanceVal=(i=d.getAccountData(this.namespace))==null?void 0:i.balance,this.balanceSymbol=(n=d.getAccountData(this.namespace))==null?void 0:n.balanceSymbol,this.profileName=(o=d.getAccountData(this.namespace))==null?void 0:o.profileName,this.profileImage=(t=d.getAccountData(this.namespace))==null?void 0:t.profileImage,this.network=(r=d.getNetworkData(this.namespace))==null?void 0:r.caipNetwork,this.networkImage=S.getNetworkImage(this.network),this.isSupported=$.state.allowUnsupportedChain?!0:d.state.activeChain?d.checkIfSupportedNetwork(d.state.activeChain):!0}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(d.subscribeChainProp("accountState",i=>{this.caipAddress=i==null?void 0:i.caipAddress,this.balanceVal=i==null?void 0:i.balance,this.balanceSymbol=i==null?void 0:i.balanceSymbol,this.profileName=i==null?void 0:i.profileName,this.profileImage=i==null?void 0:i.profileImage},e),d.subscribeChainProp("networkState",i=>{this.network=i==null?void 0:i.caipNetwork,this.isSupported=d.checkIfSupportedNetwork(e,i==null?void 0:i.caipNetwork),this.networkImage=S.getNetworkImage(i==null?void 0:i.caipNetwork)},e)):this.unsubscribe.push(fe.subscribeNetworkImages(()=>{this.networkImage=S.getNetworkImage(this.network)}),d.subscribeKey("activeCaipAddress",i=>{this.caipAddress=i}),m.subscribeKey("balance",i=>this.balanceVal=i),m.subscribeKey("balanceSymbol",i=>this.balanceSymbol=i),m.subscribeKey("profileName",i=>this.profileName=i),m.subscribeKey("profileImage",i=>this.profileImage=i),d.subscribeKey("activeCaipNetwork",i=>{this.network=i,this.networkImage=S.getNetworkImage(i),this.isSupported=i!=null&&i.chainNamespace?d.checkIfSupportedNetwork(i==null?void 0:i.chainNamespace):!0,this.fetchNetworkImage(i)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!d.state.activeChain)return null;const e=this.balance==="show",i=typeof this.balanceVal!="string";return l`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${$.state.allowUnsupportedChain?!1:!this.isSupported}
        address=${h(f.getPlainAddress(this.caipAddress))}
        profileName=${h(this.profileName)}
        networkSrc=${h(this.networkImage)}
        avatarSrc=${h(this.profileImage)}
        balance=${e?f.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${i}
      >
      </wui-account-button>
    `}async onClick(){await d.switchActiveNamespace(this.namespace),this.isSupported||$.state.allowUnsupportedChain?N.open():N.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){var i,n;(i=e==null?void 0:e.assets)!=null&&i.imageId&&(this.networkImage=await S.fetchNetworkImage((n=e==null?void 0:e.assets)==null?void 0:n.imageId))}}V([v({type:Boolean})],M.prototype,"disabled",void 0);V([v()],M.prototype,"balance",void 0);V([v()],M.prototype,"charsStart",void 0);V([v()],M.prototype,"charsEnd",void 0);V([v()],M.prototype,"namespace",void 0);V([c()],M.prototype,"caipAddress",void 0);V([c()],M.prototype,"balanceVal",void 0);V([c()],M.prototype,"balanceSymbol",void 0);V([c()],M.prototype,"profileName",void 0);V([c()],M.prototype,"profileImage",void 0);V([c()],M.prototype,"network",void 0);V([c()],M.prototype,"networkImage",void 0);V([c()],M.prototype,"isSupported",void 0);let Ii=class extends M{};Ii=V([p("w3m-account-button")],Ii);let Ti=class extends M{};Ti=V([p("appkit-account-button")],Ti);const jn=R`
  :host {
    display: block;
    width: max-content;
  }
`;var ie=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};class Q extends x{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=d.state.activeCaipAddress}firstUpdated(){this.namespace?this.unsubscribe.push(d.subscribeChainProp("accountState",e=>{this.caipAddress=e==null?void 0:e.caipAddress},this.namespace)):this.unsubscribe.push(d.subscribeKey("activeCaipAddress",e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?l`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${h(this.balance)}
            .charsStart=${h(this.charsStart)}
            .charsEnd=${h(this.charsEnd)}
            namespace=${h(this.namespace)}
          >
          </appkit-account-button>
        `:l`
          <appkit-connect-button
            size=${h(this.size)}
            label=${h(this.label)}
            loadingLabel=${h(this.loadingLabel)}
            namespace=${h(this.namespace)}
          ></appkit-connect-button>
        `}}Q.styles=jn;ie([v({type:Boolean})],Q.prototype,"disabled",void 0);ie([v()],Q.prototype,"balance",void 0);ie([v()],Q.prototype,"size",void 0);ie([v()],Q.prototype,"label",void 0);ie([v()],Q.prototype,"loadingLabel",void 0);ie([v()],Q.prototype,"charsStart",void 0);ie([v()],Q.prototype,"charsEnd",void 0);ie([v()],Q.prototype,"namespace",void 0);ie([c()],Q.prototype,"caipAddress",void 0);let Ai=class extends Q{};Ai=ie([p("w3m-button")],Ai);let Ri=class extends Q{};Ri=ie([p("appkit-button")],Ri);const Pn=I`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var ui=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Xe=class extends A{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return g`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?g`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Xe.styles=[T,E,Pn];ui([u()],Xe.prototype,"size",void 0);ui([u({type:Boolean})],Xe.prototype,"loading",void 0);Xe=ui([p("wui-connect-button")],Xe);var ye=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};class Ce extends x{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=N.state.open,this.loading=this.namespace?N.state.loadingNamespaceMap.get(this.namespace):N.state.loading,this.unsubscribe.push(N.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-connect-button
        size=${h(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?N.close():this.loading||N.open({view:"Connect",namespace:this.namespace})}}ye([v()],Ce.prototype,"size",void 0);ye([v()],Ce.prototype,"label",void 0);ye([v()],Ce.prototype,"loadingLabel",void 0);ye([v()],Ce.prototype,"namespace",void 0);ye([c()],Ce.prototype,"open",void 0);ye([c()],Ce.prototype,"loading",void 0);let Wi=class extends Ce{};Wi=ye([p("w3m-connect-button")],Wi);let Ei=class extends Ce{};Ei=ye([p("appkit-connect-button")],Ei);const Dn=I`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var Ot=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let je=class extends A{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return g`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?g`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?g`<wui-image src=${this.imageSrc}></wui-image>`:g`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};je.styles=[T,E,Dn];Ot([u()],je.prototype,"imageSrc",void 0);Ot([u({type:Boolean})],je.prototype,"isUnsupportedChain",void 0);Ot([u({type:Boolean})],je.prototype,"disabled",void 0);je=Ot([p("wui-network-button")],je);const Ln=R`
  :host {
    display: block;
    width: max-content;
  }
`;var he=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};class ae extends x{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=d.state.activeCaipNetwork,this.networkImage=S.getNetworkImage(this.network),this.caipAddress=d.state.activeCaipAddress,this.loading=N.state.loading,this.isSupported=$.state.allowUnsupportedChain?!0:d.state.activeChain?d.checkIfSupportedNetwork(d.state.activeChain):!0,this.unsubscribe.push(fe.subscribeNetworkImages(()=>{this.networkImage=S.getNetworkImage(this.network)}),d.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),d.subscribeKey("activeCaipNetwork",e=>{var i;this.network=e,this.networkImage=S.getNetworkImage(e),this.isSupported=e!=null&&e.chainNamespace?d.checkIfSupportedNetwork(e.chainNamespace):!0,S.fetchNetworkImage((i=e==null?void 0:e.assets)==null?void 0:i.imageId)}),N.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){var e,i;S.fetchNetworkImage((i=(e=this.network)==null?void 0:e.assets)==null?void 0:i.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.network?d.checkIfSupportedNetwork(this.network.chainNamespace):!0;return l`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${$.state.allowUnsupportedChain?!1:!e}
        imageSrc=${h(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?!this.isSupported&&!$.state.allowUnsupportedChain?"Switch Network":this.network.name:this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(k.sendEvent({type:"track",event:"CLICK_NETWORKS"}),N.open({view:"Networks"}))}}ae.styles=Ln;he([v({type:Boolean})],ae.prototype,"disabled",void 0);he([v({type:String})],ae.prototype,"label",void 0);he([c()],ae.prototype,"network",void 0);he([c()],ae.prototype,"networkImage",void 0);he([c()],ae.prototype,"caipAddress",void 0);he([c()],ae.prototype,"loading",void 0);he([c()],ae.prototype,"isSupported",void 0);let Ni=class extends ae{};Ni=he([p("w3m-network-button")],Ni);let Oi=class extends ae{};Oi=he([p("appkit-network-button")],Oi);const Un=I`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var jt=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Pe=class extends A{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return g`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Pe.styles=[T,E,Un];jt([u()],Pe.prototype,"label",void 0);jt([u()],Pe.prototype,"description",void 0);jt([u()],Pe.prototype,"icon",void 0);Pe=jt([p("wui-notice-card")],Pe);var Zi=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Qt=class extends x{constructor(){super(),this.unsubscribe=[],this.socialProvider=ge.getConnectedSocialProvider(),this.socialUsername=ge.getConnectedSocialUsername(),this.namespace=d.state.activeChain,this.unsubscribe.push(d.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=b.getConnectorId(this.namespace),i=b.getAuthConnector();if(!i||e!==_.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const n=i.provider.getEmail()??"";return!n&&!this.socialUsername?(this.style.cssText="display: none",null):l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(n,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(n)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,i){i||w.push("UpdateEmailWallet",{email:e})}getAuthName(e){return this.socialUsername?this.socialProvider==="discord"&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};Zi([c()],Qt.prototype,"namespace",void 0);Qt=Zi([p("w3m-account-auth-button")],Qt);var se=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ee=class extends x{constructor(){super(),this.usubscribe=[],this.networkImages=fe.state.networkImages,this.address=m.state.address,this.profileImage=m.state.profileImage,this.profileName=m.state.profileName,this.network=d.state.activeCaipNetwork,this.preferredAccountType=m.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(m.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):N.close()}),m.subscribeKey("preferredAccountType",e=>this.preferredAccountType=e),d.subscribeKey("activeCaipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var i,n,o;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[((n=(i=this.network)==null?void 0:i.assets)==null?void 0:n.imageId)??""];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${h(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${O.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${h(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((o=this.network)==null?void 0:o.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){var t;const e=(t=this.network)==null?void 0:t.chainNamespace,i=b.getConnectorId(e),n=b.getAuthConnector();return!d.checkIfNamesSupported()||!n||i!==_.CONNECTOR_ID.AUTH||this.profileName?null:l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){var t;const e=(t=this.network)==null?void 0:t.chainNamespace,i=b.getConnectorId(e),n=b.getAuthConnector(),{origin:o}=location;return!n||i!==_.CONNECTOR_ID.AUTH||o.includes(z.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=d.getAllRequestedCaipNetworks(),i=e?e.length>1:!1,n=e==null?void 0:e.find(({id:o})=>{var t;return o===((t=this.network)==null?void 0:t.id)});return i||!n}onCopyAddress(){try{this.address&&(f.copyToClopboard(this.address),L.showSuccess("Address copied"))}catch{L.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){var t;const e=(t=this.network)==null?void 0:t.chainNamespace,i=d.checkIfSmartAccountEnabled(),n=b.getConnectorId(e);return!b.getAuthConnector()||n!==_.CONNECTOR_ID.AUTH||!i?null:(this.switched||(this.text=this.preferredAccountType===F.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `)}onChooseName(){w.push("ChooseAccountName")}async changePreferredAccountType(){const e=d.checkIfSmartAccountEnabled(),i=this.preferredAccountType===F.ACCOUNT_TYPES.SMART_ACCOUNT||!e?F.ACCOUNT_TYPES.EOA:F.ACCOUNT_TYPES.SMART_ACCOUNT;b.getAuthConnector()&&(this.loading=!0,await y.setPreferredAccountType(i),this.text=i===F.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,$n.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&w.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await y.disconnect(),k.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),N.close()}catch{k.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),L.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){k.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),w.push("UpgradeEmailWallet")}};se([c()],ee.prototype,"address",void 0);se([c()],ee.prototype,"profileImage",void 0);se([c()],ee.prototype,"profileName",void 0);se([c()],ee.prototype,"network",void 0);se([c()],ee.prototype,"preferredAccountType",void 0);se([c()],ee.prototype,"disconnecting",void 0);se([c()],ee.prototype,"loading",void 0);se([c()],ee.prototype,"switched",void 0);se([c()],ee.prototype,"text",void 0);ee=se([p("w3m-account-settings-view")],ee);const Bn=I`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var We=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ue=class extends A{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail"}render(){const e=d.state.activeChain,n=b.getConnectorId(e)===_.CONNECTOR_ID.AUTH;return g`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${n?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${O.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){var i,n;if(e.target instanceof HTMLElement&&e.target.id==="copy-address"){(i=this.onCopyClick)==null||i.call(this,e);return}(n=this.onProfileClick)==null||n.call(this,e)}getIconTemplate(e){return g`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};ue.styles=[T,E,Bn];We([u()],ue.prototype,"avatarSrc",void 0);We([u()],ue.prototype,"profileName",void 0);We([u()],ue.prototype,"address",void 0);We([u()],ue.prototype,"icon",void 0);We([u()],ue.prototype,"onProfileClick",void 0);We([u()],ue.prototype,"onCopyClick",void 0);ue=We([p("wui-profile-button-v2")],ue);const zn=I`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var $e=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let oe=class extends A{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,i)=>{var o;const n=i===this.activeTab;return g`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(i)}
          data-active=${n}
          data-testid="tab-${(o=e.label)==null?void 0:o.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?g`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,i){const n=this.buttons[this.activeTab],o=this.buttons[e],t=n==null?void 0:n.querySelector("wui-text"),r=o==null?void 0:o.querySelector("wui-text"),s=o==null?void 0:o.getBoundingClientRect(),C=r==null?void 0:r.getBoundingClientRect();n&&t&&!i&&e!==this.activeTab&&(t.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),n.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&s&&C&&r&&(e!==this.activeTab||i)&&(this.localTabWidth=`${Math.round(s.width+C.width)+6}px`,o.animate([{width:`${s.width+C.width}px`}],{duration:i?0:500,fill:"forwards",easing:"ease"}),r.animate([{opacity:1}],{duration:i?0:125,delay:i?0:200,fill:"forwards",easing:"ease"}))}};oe.styles=[T,E,zn];$e([u({type:Array})],oe.prototype,"tabs",void 0);$e([u()],oe.prototype,"onTabChange",void 0);$e([u({type:Array})],oe.prototype,"buttons",void 0);$e([u({type:Boolean})],oe.prototype,"disabled",void 0);$e([u()],oe.prototype,"localTabWidth",void 0);$e([Ji()],oe.prototype,"activeTab",void 0);$e([Ji()],oe.prototype,"isDense",void 0);oe=$e([p("wui-tabs")],oe);const Vn=R`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var J=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let H=class extends x{constructor(){var e;super(),this.unsubscribe=[],this.caipAddress=m.state.caipAddress,this.address=f.getPlainAddress(m.state.caipAddress),this.allAccounts=m.state.allAccounts,this.profileImage=m.state.profileImage,this.profileName=m.state.profileName,this.disconnecting=!1,this.balance=m.state.balance,this.balanceSymbol=m.state.balanceSymbol,this.features=$.state.features,this.namespace=d.state.activeChain,this.chainId=(e=d.state.activeCaipNetwork)==null?void 0:e.id,this.unsubscribe.push(m.subscribeKey("caipAddress",i=>{this.address=f.getPlainAddress(i),this.caipAddress=i}),m.subscribeKey("balance",i=>this.balance=i),m.subscribeKey("balanceSymbol",i=>this.balanceSymbol=i),m.subscribeKey("profileName",i=>this.profileName=i),m.subscribeKey("profileImage",i=>this.profileImage=i),$.subscribeKey("features",i=>this.features=i),m.subscribeKey("allAccounts",i=>{this.allAccounts=i}),d.subscribeKey("activeChain",i=>this.namespace=i),d.subscribeKey("activeCaipNetwork",i=>{var n;if(i){const[o,t]=((n=i==null?void 0:i.caipNetworkId)==null?void 0:n.split(":"))||[];o&&t&&(this.namespace=o,this.chainId=t)}}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress)return null;const e=d.state.activeChain!==_.CHAIN.SOLANA&&this.allAccounts.length>1;return l`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${e?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${f.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){var n;if(!this.namespace)return null;const e=(n=this.features)==null?void 0:n.onramp,i=z.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);return!e||!i?null:l`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){var i;return(((i=this.features)==null?void 0:i.walletFeaturesOrder)||z.DEFAULT_FEATURES.walletFeaturesOrder).map(n=>{switch(n){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){var n;if(!this.namespace)return null;const e=d.state.activeChain===_.CHAIN.SOLANA;return((n=this.features)==null?void 0:n.history)&&z.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?l` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!e}
          ?disabled=${e}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100" ?disabled=${e}>
            Activity
          </wui-text>
          ${e?l`<wui-tag variant="main">Coming soon</wui-tag>`:""}
        </wui-list-item>`:null}swapsTemplate(){var n;const e=(n=this.features)==null?void 0:n.swaps,i=d.state.activeChain===_.CHAIN.EVM;return!e||!i?null:l`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){var n;const e=(n=this.features)==null?void 0:n.send,i=d.state.activeChain===_.CHAIN.EVM;return!e||!i?null:l`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=d.state.activeChain,i=b.getConnectorId(e),n=b.getAuthConnector(),{origin:o}=location;return!n||i!==_.CONNECTOR_ID.AUTH||o.includes(z.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){w.push("SwitchAddress")}handleClickPay(){w.push("OnRampProviders")}handleClickSwap(){w.push("Swap")}handleClickSend(){w.push("WalletSend")}explorerBtnTemplate(){return m.state.addressExplorerUrl?l`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return l`
      <wui-avatar
        alt=${h(this.caipAddress)}
        address=${h(f.getPlainAddress(this.caipAddress))}
        imageSrc=${h(this.profileImage===null?void 0:this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?O.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):O.getTruncateString({string:this.address||"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.allAccounts.find(n=>n.address===this.address),i=m.state.addressLabels.get(this.address);return this.namespace==="bip122"?this.btcAccountsTemplate():l`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${h(this.address)}
        icon="${(e==null?void 0:e.type)===F.ACCOUNT_TYPES.SMART_ACCOUNT&&d.state.activeChain===_.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${h(this.profileImage?this.profileImage:void 0)}
        profileName=${h(i||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}btcAccountsTemplate(){return l`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${h(this.profileImage?this.profileImage:void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{label:"Payment"},{label:"Ordinals"}]}
        .onTabChange=${e=>{var i;return m.setCaipAddress(`bip122:${this.chainId}:${((i=this.allAccounts[e])==null?void 0:i.address)||""}`,this.namespace)}}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${O.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`}onCopyAddress(){try{this.address&&(f.copyToClopboard(this.address),L.showSuccess("Address copied"))}catch{L.showError("Failed to copy")}}onTransactions(){k.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:m.state.preferredAccountType===F.ACCOUNT_TYPES.SMART_ACCOUNT}}),w.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await y.disconnect(),k.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),N.close()}catch{k.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),L.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=m.state.addressExplorerUrl;e&&f.openHref(e,"_blank")}onGoToUpgradeView(){k.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),w.push("UpgradeEmailWallet")}};H.styles=Vn;J([c()],H.prototype,"caipAddress",void 0);J([c()],H.prototype,"address",void 0);J([c()],H.prototype,"allAccounts",void 0);J([c()],H.prototype,"profileImage",void 0);J([c()],H.prototype,"profileName",void 0);J([c()],H.prototype,"disconnecting",void 0);J([c()],H.prototype,"balance",void 0);J([c()],H.prototype,"balanceSymbol",void 0);J([c()],H.prototype,"features",void 0);J([c()],H.prototype,"namespace",void 0);J([c()],H.prototype,"chainId",void 0);H=J([p("w3m-account-default-widget")],H);const Mn=I`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var di=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ye=class extends A{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return g`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Ye.styles=[T,Mn];di([u()],Ye.prototype,"dollars",void 0);di([u()],Ye.prototype,"pennies",void 0);Ye=di([p("wui-balance")],Ye);const Hn=I`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var pi=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Qe=class extends A{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return g`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};Qe.styles=[T,E,Hn];pi([u()],Qe.prototype,"text",void 0);pi([u()],Qe.prototype,"icon",void 0);Qe=pi([p("wui-icon-button")],Qe);const Kn=I`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Ke=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let me=class extends A{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return g`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${O.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?g`<wui-image src=${this.networkSrc}></wui-image>`:g`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};me.styles=[T,E,Kn];Ke([u()],me.prototype,"networkSrc",void 0);Ke([u()],me.prototype,"avatarSrc",void 0);Ke([u()],me.prototype,"profileName",void 0);Ke([u()],me.prototype,"address",void 0);Ke([u()],me.prototype,"icon",void 0);me=Ke([p("wui-profile-button")],me);const qn=I`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Pt=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let De=class extends A{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,g`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};De.styles=[T,E,qn];Pt([u()],De.prototype,"placement",void 0);Pt([u()],De.prototype,"variant",void 0);Pt([u()],De.prototype,"message",void 0);De=Pt([p("wui-tooltip")],De);const Fn=R`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var Gn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Jt=class extends x{render(){return l`<w3m-activity-list page="account"></w3m-activity-list>`}};Jt.styles=Fn;Jt=Gn([p("w3m-account-activity-widget")],Jt);const Xn=R`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Yn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Zt=class extends x{render(){return l`${this.nftTemplate()}`}nftTemplate(){return l` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){w.push("WalletReceive")}};Zt.styles=Xn;Zt=Yn([p("w3m-account-nfts-widget")],Zt);const Qn=I`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var ke=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let re=class extends A{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return g`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?g` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:g`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};re.styles=[T,E,Qn];ke([u()],re.prototype,"icon",void 0);ke([u()],re.prototype,"text",void 0);ke([u()],re.prototype,"description",void 0);ke([u()],re.prototype,"tag",void 0);ke([u()],re.prototype,"iconBackgroundColor",void 0);ke([u()],re.prototype,"iconColor",void 0);ke([u({type:Boolean})],re.prototype,"disabled",void 0);re=ke([p("wui-list-description")],re);const Jn=R`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var en=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ft=class extends x{constructor(){super(),this.unsubscribe=[],this.tokenBalance=m.state.tokenBalance,this.unsubscribe.push(m.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>0?l`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:l` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){var e;return(e=this.tokenBalance)==null?void 0:e.map(i=>l`<wui-list-token
          tokenName=${i.name}
          tokenImageUrl=${i.iconUrl}
          tokenAmount=${i.quantity.numeric}
          tokenValue=${i.value}
          tokenCurrency=${i.symbol}
        ></wui-list-token>`)}onReceiveClick(){w.push("WalletReceive")}onBuyClick(){k.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:m.state.preferredAccountType===F.ACCOUNT_TYPES.SMART_ACCOUNT}}),w.push("OnRampProviders")}};ft.styles=Jn;en([c()],ft.prototype,"tokenBalance",void 0);ft=en([p("w3m-account-tokens-widget")],ft);const Zn=R`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var le=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const eo=3,to=48,io=430;let Y=class extends x{constructor(){super(),this.unsubscribe=[],this.address=m.state.address,this.profileImage=m.state.profileImage,this.profileName=m.state.profileName,this.network=d.state.activeCaipNetwork,this.currentTab=m.state.currentTab,this.tokenBalance=m.state.tokenBalance,this.features=$.state.features,this.networkImage=S.getNetworkImage(this.network),this.unsubscribe.push(fe.subscribeNetworkImages(()=>{this.networkImage=S.getNetworkImage(this.network)}),m.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):N.close()}),d.subscribeKey("activeCaipNetwork",e=>this.network=e),$.subscribeKey("features",e=>this.features=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){m.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");return l`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${h(this.address)}
        networkSrc=${h(this.networkImage)}
        icon="chevronBottom"
        avatarSrc=${h(this.profileImage?this.profileImage:void 0)}
        profileName=${h(this.profileName??void 0)}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()}

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${f.isMobile()&&window.innerWidth<io?`${(window.innerWidth-to)/eo}px`:"104px"}
        .tabs=${kn.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){var n;const e=((n=this.features)==null?void 0:n.walletFeaturesOrder)||z.DEFAULT_FEATURES.walletFeaturesOrder;return e.every(o=>{var t;return!((t=this.features)!=null&&t[o])})?null:l`<wui-flex gap="s">
      ${e.map(o=>{switch(o){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"receive":return this.receiveTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}onrampTemplate(){var i;return((i=this.features)==null?void 0:i.onramp)?l`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){var n;const e=(n=this.features)==null?void 0:n.swaps,i=d.state.activeChain===_.CHAIN.EVM;return!e||!i?null:l`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `}receiveTemplate(){var i;return((i=this.features)==null?void 0:i.receive)?l`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){var n;const e=(n=this.features)==null?void 0:n.send,i=d.state.activeChain===_.CHAIN.EVM;return!e||!i?null:l`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval(()=>m.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===_.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return this.currentTab===0?l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?l`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?l`<w3m-account-activity-widget></w3m-account-activity-widget>`:l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>=0){const i=f.calculateBalance(this.tokenBalance),{dollars:n="0",pennies:o="00"}=f.formatTokenBalance(i);return l`<wui-balance dollars=${n} pennies=${o}></wui-balance>`}return l`<wui-balance dollars="0" pennies="00"></wui-balance>`}onTabChange(e){m.setCurrentTab(e)}onProfileButtonClick(){const{allAccounts:e}=m.state;e.length>1?w.push("Profile"):w.push("AccountSettings")}onBuyClick(){w.push("OnRampProviders")}onSwapClick(){var e,i,n;(e=this.network)!=null&&e.caipNetworkId&&!z.SWAP_SUPPORTED_NETWORKS.includes((i=this.network)==null?void 0:i.caipNetworkId)?w.push("UnsupportedChain",{swapUnsupportedChain:!0}):(k.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:((n=this.network)==null?void 0:n.caipNetworkId)||"",isSmartAccount:m.state.preferredAccountType===F.ACCOUNT_TYPES.SMART_ACCOUNT}}),w.push("Swap"))}onReceiveClick(){w.push("WalletReceive")}onSendClick(){var e;k.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:((e=this.network)==null?void 0:e.caipNetworkId)||"",isSmartAccount:m.state.preferredAccountType===F.ACCOUNT_TYPES.SMART_ACCOUNT}}),w.push("WalletSend")}};Y.styles=Zn;le([c()],Y.prototype,"watchTokenBalance",void 0);le([c()],Y.prototype,"address",void 0);le([c()],Y.prototype,"profileImage",void 0);le([c()],Y.prototype,"profileName",void 0);le([c()],Y.prototype,"network",void 0);le([c()],Y.prototype,"currentTab",void 0);le([c()],Y.prototype,"tokenBalance",void 0);le([c()],Y.prototype,"features",void 0);le([c()],Y.prototype,"networkImage",void 0);Y=le([p("w3m-account-wallet-features-widget")],Y);var tn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ei=class extends x{constructor(){super(),this.unsubscribe=[],this.namespace=d.state.activeChain,this.unsubscribe.push(d.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;const e=b.getConnectorId(this.namespace),i=b.getAuthConnector();return l`
      ${i&&e===_.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return l`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return l`<w3m-account-default-widget></w3m-account-default-widget>`}};tn([c()],ei.prototype,"namespace",void 0);ei=tn([p("w3m-account-view")],ei);const no=I`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var ct=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Se=class extends A{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.labels=m.state.addressLabels,this.caipNetwork=d.state.activeCaipNetwork,this.socialProvider=ge.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){var e;super.connectedCallback(),Xi.getBalance(this.accountAddress,(e=this.caipNetwork)==null?void 0:e.caipNetworkId).then(i=>{let n=this.balance;i.balances.length>0&&(n=i.balances.reduce((o,t)=>o+((t==null?void 0:t.value)||0),0)),this.balance=n,this.fetchingBalance=!1,this.requestUpdate()}).catch(()=>{this.fetchingBalance=!1,this.requestUpdate()})}render(){const e=this.getLabel(),i=d.state.activeChain,n=b.getConnectorId(i);return this.shouldShowIcon=n===_.CONNECTOR_ID.AUTH,g`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?g`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===F.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:g`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${O.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance?g`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:g` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `}getLabel(){var o;let e=(o=this.labels)==null?void 0:o.get(this.accountAddress);const i=d.state.activeChain,n=b.getConnectorId(i);return!e&&n===_.CONNECTOR_ID.AUTH?e=`${this.accountType==="eoa"?this.socialProvider??"Email":"Smart"} Account`:e||(e="EOA"),e}};Se.styles=[T,E,no];ct([u()],Se.prototype,"accountAddress",void 0);ct([u()],Se.prototype,"accountType",void 0);ct([u({type:Boolean})],Se.prototype,"selected",void 0);ct([u({type:Function})],Se.prototype,"onSelect",void 0);Se=ct([p("wui-list-account")],Se);const oo=R`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;var qe=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let be=class extends x{constructor(){super(),this.usubscribe=[],this.address=m.state.address,this.profileImage=m.state.profileImage,this.profileName=m.state.profileName,this.accounts=m.state.allAccounts,this.loading=!1,this.usubscribe.push(m.subscribeKey("address",e=>{e?this.address=e:N.close()})),this.usubscribe.push(m.subscribeKey("profileImage",e=>{this.profileImage=e})),this.usubscribe.push(m.subscribeKey("profileName",e=>{this.profileName=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-profile-view: No account provided");return l`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${h(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName?O.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):O.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>w.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return l`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map(e=>this.accountTemplate(e))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){if(this.loading=!0,b.getAuthConnector()){const n=e.type;await y.setPreferredAccountType(n)}m.setShouldUpdateToAddress(e.address,d.state.activeChain),this.loading=!1}accountTemplate(e){return l`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":l`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            .loading=${this.loading}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.address&&(f.copyToClopboard(this.address),L.showSuccess("Address copied"))}catch{L.showError("Failed to copy")}}};be.styles=oo;qe([c()],be.prototype,"address",void 0);qe([c()],be.prototype,"profileImage",void 0);qe([c()],be.prototype,"profileName",void 0);qe([c()],be.prototype,"accounts",void 0);qe([c()],be.prototype,"loading",void 0);be=qe([p("w3m-profile-view")],be);const ro=I`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var Dt=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Le=class extends A{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return g`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Le.styles=[T,E,ro];Dt([u()],Le.prototype,"imageSrc",void 0);Dt([u()],Le.prototype,"text",void 0);Dt([u()],Le.prototype,"size",void 0);Le=Dt([p("wui-banner-img")],Le);const ao=R`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var hi=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Je=class extends x{constructor(){super(),this.metadata=$.state.metadata,this.allAccounts=m.state.allAccounts||[],this.balances={},this.labels=m.state.addressLabels,this.currentAddress=m.state.address||"",this.caipNetwork=d.state.activeCaipNetwork,m.subscribeKey("allAccounts",e=>{this.allAccounts=e})}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach(e=>{var i;Xi.getBalance(e.address,(i=this.caipNetwork)==null?void 0:i.caipNetworkId).then(n=>{let o=this.balances[e.address]||0;n.balances.length>0&&(o=n.balances.reduce((t,r)=>t+((r==null?void 0:r.value)||0),0)),this.balances[e.address]=o,this.requestUpdate()})})}getAddressIcon(e){return e==="smartAccount"?"lightbulb":"mail"}render(){var e,i;return l`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${h((e=this.metadata)==null?void 0:e.icons[0])}
          text=${h((i=this.metadata)==null?void 0:i.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map((n,o)=>this.getAddressTemplate(n,o))}
      </wui-flex>
    `}getAddressTemplate(e,i){var s,C,D,P;const n=(s=this.labels)==null?void 0:s.get(e.address),o=d.state.activeChain,r=b.getConnectorId(o)===_.CONNECTOR_ID.AUTH;return l`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${r?l`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:l`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${n||O.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${typeof this.balances[e.address]=="number"?`$${(C=this.balances[e.address])==null?void 0:C.toFixed(2)}`:l`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${((D=e.address)==null?void 0:D.toLowerCase())===((P=this.currentAddress)==null?void 0:P.toLowerCase())?"":l`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${i}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){const i=d.state.activeCaipNetwork,n=i==null?void 0:i.chainNamespace,o=`${n}:${i==null?void 0:i.id}:${e}`;m.setCaipAddress(o,n),N.close()}};Je.styles=ao;hi([c()],Je.prototype,"allAccounts",void 0);hi([c()],Je.prototype,"balances",void 0);Je=hi([p("w3m-switch-address-view")],Je);const so=I`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var nn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let gt=class extends A{constructor(){super(...arguments),this.inputElementRef=Yi(),this.checked=void 0}render(){return g`
      <label>
        <input
          ${Qi(this.inputElementRef)}
          type="checkbox"
          ?checked=${Re(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("switchChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.checked,bubbles:!0,composed:!0}))}};gt.styles=[T,E,Sn,so];nn([u({type:Boolean})],gt.prototype,"checked",void 0);gt=nn([p("wui-switch")],gt);const lo=I`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var on=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let mt=class extends A{constructor(){super(...arguments),this.checked=void 0}render(){return g`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${Re(this.checked)}></wui-switch>
      </button>
    `}};mt.styles=[T,E,lo];on([u({type:Boolean})],mt.prototype,"checked",void 0);mt=on([p("wui-certified-switch")],mt);const co=I`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var rn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let bt=class extends A{constructor(){super(...arguments),this.icon="copy"}render(){return g`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};bt.styles=[T,E,co];rn([u()],bt.prototype,"icon",void 0);bt=rn([p("wui-input-element")],bt);const uo=I`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var po=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ti=class extends A{constructor(){super(...arguments),this.inputComponentRef=Yi()}render(){return g`
      <wui-input-text
        ${Qi(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,i=e==null?void 0:e.inputElementRef.value;i&&(i.value="",i.focus(),i.dispatchEvent(new Event("input")))}};ti.styles=[T,uo];ti=po([p("wui-search-bar")],ti);const an=ci`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,ho=I`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var sn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let xt=class extends A{constructor(){super(...arguments),this.type="wallet"}render(){return g`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?g` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${an}`:g`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};xt.styles=[T,E,ho];sn([u()],xt.prototype,"type",void 0);xt=sn([p("wui-card-select-loader")],xt);const wo=I`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Z=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let K=class extends A{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&O.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&O.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&O.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&O.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&O.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&O.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&O.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&O.getSpacingStyles(this.margin,3)};
    `,g`<slot></slot>`}};K.styles=[T,wo];Z([u()],K.prototype,"gridTemplateRows",void 0);Z([u()],K.prototype,"gridTemplateColumns",void 0);Z([u()],K.prototype,"justifyItems",void 0);Z([u()],K.prototype,"alignItems",void 0);Z([u()],K.prototype,"justifyContent",void 0);Z([u()],K.prototype,"alignContent",void 0);Z([u()],K.prototype,"columnGap",void 0);Z([u()],K.prototype,"rowGap",void 0);Z([u()],K.prototype,"gap",void 0);Z([u()],K.prototype,"padding",void 0);Z([u()],K.prototype,"margin",void 0);K=Z([p("wui-grid")],K);const fo=I`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var Ee=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let de=class extends A{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),g`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?g`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?g`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:g`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};de.styles=[E,T,fo];Ee([u()],de.prototype,"size",void 0);Ee([u()],de.prototype,"name",void 0);Ee([u()],de.prototype,"imageSrc",void 0);Ee([u()],de.prototype,"walletIcon",void 0);Ee([u({type:Boolean})],de.prototype,"installed",void 0);Ee([u()],de.prototype,"badgeSize",void 0);de=Ee([p("wui-wallet-image")],de);const go=R`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var ut=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let _e=class extends x{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var i,n;const e=((i=this.wallet)==null?void 0:i.badge_type)==="certified";return l`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${h(e?"certified":void 0)}
            >${(n=this.wallet)==null?void 0:n.name}</wui-text
          >
          ${e?l`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var e,i;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():l`
      <wui-wallet-image
        size="md"
        imageSrc=${h(this.imageSrc)}
        name=${(e=this.wallet)==null?void 0:e.name}
        .installed=${(i=this.wallet)==null?void 0:i.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=S.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await S.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};_e.styles=go;ut([c()],_e.prototype,"visible",void 0);ut([c()],_e.prototype,"imageSrc",void 0);ut([c()],_e.prototype,"imageLoading",void 0);ut([v()],_e.prototype,"wallet",void 0);_e=ut([p("w3m-all-wallets-list-item")],_e);const mo=R`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var dt=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const ji="local-paginator";let Ie=class extends x{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!W.state.wallets.length,this.wallets=W.state.wallets,this.recommended=W.state.recommended,this.featured=W.state.featured,this.unsubscribe.push(W.subscribeKey("wallets",e=>this.wallets=e),W.subscribeKey("recommended",e=>this.recommended=e),W.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(i=>i()),(e=this.paginationObserver)==null||e.disconnect()}render(){return l`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var i;this.loading=!0;const e=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-grid");e&&(await W.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,i){return[...Array(e)].map(()=>l`
        <wui-card-select-loader type="wallet" id=${h(i)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=f.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return Oe.markWalletsAsInstalled(e).map(n=>l`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(n)}
          .wallet=${n}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:i,featured:n,count:o}=W.state,t=window.innerWidth<352?3:4,r=e.length+i.length;let C=Math.ceil(r/t)*t-r+t;return C-=e.length?n.length%t:0,o===0&&n.length>0?null:o===0||[...n,...e,...i].length<o?this.shimmerTemplate(C,ji):null}createPaginationObserver(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(`#${ji}`);e&&(this.paginationObserver=new IntersectionObserver(([n])=>{if(n!=null&&n.isIntersecting&&!this.loading){const{page:o,count:t,wallets:r}=W.state;r.length<t&&W.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){b.selectWalletConnector(e)}};Ie.styles=mo;dt([c()],Ie.prototype,"loading",void 0);dt([c()],Ie.prototype,"wallets",void 0);dt([c()],Ie.prototype,"recommended",void 0);dt([c()],Ie.prototype,"featured",void 0);Ie=dt([p("w3m-all-wallets-list")],Ie);const bo=R`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Lt=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ue=class extends x{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?l`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await W.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=W.state,i=Oe.markWalletsAsInstalled(e);return e.length?l`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${i.map(n=>l`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(n)}
              .wallet=${n}
              data-testid="wallet-search-item-${n.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:l`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){b.selectWalletConnector(e)}};Ue.styles=bo;Lt([c()],Ue.prototype,"loading",void 0);Lt([v()],Ue.prototype,"query",void 0);Lt([v()],Ue.prototype,"badge",void 0);Ue=Lt([p("w3m-all-wallets-search")],Ue);var wi=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let vt=class extends x{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=f.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return l`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?l`<w3m-all-wallets-search
            query=${this.search}
            badge=${h(this.badge)}
          ></w3m-all-wallets-search>`:l`<w3m-all-wallets-list badge=${h(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",L.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return f.isMobile()?l`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){w.push("ConnectingWalletConnect")}};wi([c()],vt.prototype,"search",void 0);wi([c()],vt.prototype,"badge",void 0);vt=wi([p("w3m-all-wallets-view")],vt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=In(class extends Tn{constructor(a){var e;if(super(a),a.type!==An.ATTRIBUTE||a.name!=="class"||((e=a.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(a){return" "+Object.keys(a).filter(e=>a[e]).join(" ")+" "}update(a,[e]){var n,o;if(this.st===void 0){this.st=new Set,a.strings!==void 0&&(this.nt=new Set(a.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(const t in e)e[t]&&!((n=this.nt)!=null&&n.has(t))&&this.st.add(t);return this.render(e)}const i=a.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||(o=this.nt)!=null&&o.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return Cn}}),xo=I`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Ut=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Be=class extends A{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return g`
      <button ?disabled=${this.disabled} tabindex=${Re(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};Be.styles=[T,E,xo];Ut([u()],Be.prototype,"text",void 0);Ut([u({type:Boolean})],Be.prototype,"disabled",void 0);Ut([u()],Be.prototype,"tabIdx",void 0);Be=Ut([p("wui-list-button")],Be);const vo=R`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var pt=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Te=class extends x{constructor(){super(...arguments),this.unsubscribe=[],this.formRef=Rn(),this.email="",this.loading=!1,this.error=""}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",i=>{i.key==="Enter"&&this.onSubmitEmail(i)})}render(){return l`
      <form ${Wn(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${h(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?l`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(!_.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(n=>n===d.state.activeChain)){const n=d.getFirstCaipNetworkSupportsAuthConnector();if(n){w.push("SwitchNetwork",{network:n});return}}try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=b.getAuthConnector();if(!n)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:o}=await n.provider.connectEmail({email:this.email});k.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),o==="VERIFY_OTP"?(k.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),w.push("EmailVerifyOtp",{email:this.email})):o==="VERIFY_DEVICE"?w.push("EmailVerifyDevice",{email:this.email}):o==="CONNECT"&&(await y.connectExternal(n,d.state.activeChain),w.replace("Account"))}catch(n){const o=f.parseError(n);o!=null&&o.includes("Invalid email")?this.error="Invalid email. Try again.":L.showError(n)}finally{this.loading=!1}}onFocusEvent(){k.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};Te.styles=vo;pt([v()],Te.prototype,"tabIdx",void 0);pt([c()],Te.prototype,"email",void 0);pt([c()],Te.prototype,"loading",void 0);pt([c()],Te.prototype,"error",void 0);Te=pt([p("w3m-email-login-widget")],Te);const yo=I`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Bt=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ze=class extends A{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return g`
      <button ?disabled=${this.disabled} tabindex=${Re(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};ze.styles=[T,E,yo];Bt([u()],ze.prototype,"logo",void 0);Bt([u({type:Boolean})],ze.prototype,"disabled",void 0);Bt([u()],ze.prototype,"tabIdx",void 0);ze=Bt([p("wui-logo-select")],ze);const Co=R`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Fe=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const Di=2,Li=6;let xe=class extends x{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=b.state.connectors,this.features=$.state.features,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.unsubscribe.push(b.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(i=>i.type==="AUTH")}),$.subscribeKey("features",e=>this.features=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){var n;const e=this.walletGuide==="explore";let i=(n=this.features)==null?void 0:n.socials;return!i&&e?(i=z.DEFAULT_FEATURES.socials,this.renderTopViewContent(i)):i?this.renderTopViewContent(i):null}renderTopViewContent(e){return e.length===2?l` <wui-flex gap="xs">
        ${e.slice(0,Di).map(i=>l`<wui-logo-select
              data-testid=${`social-selector-${i}`}
              @click=${()=>{this.onSocialClick(i)}}
              logo=${i}
              tabIdx=${h(this.tabIdx)}
            ></wui-logo-select>`)}
      </wui-flex>`:l` <wui-list-social
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      logo=${h(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${h(this.tabIdx)}
    ></wui-list-social>`}bottomViewTemplate(){var o;let e=(o=this.features)==null?void 0:o.socials;const i=this.walletGuide==="explore";return(!this.authConnector||!e||!(e!=null&&e.length))&&i&&(e=z.DEFAULT_FEATURES.socials),!e||e.length<=Di?null:e&&e.length>Li?l`<wui-flex gap="xs">
        ${e.slice(1,Li-1).map(t=>l`<wui-logo-select
              data-testid=${`social-selector-${t}`}
              @click=${()=>{this.onSocialClick(t)}}
              logo=${t}
              tabIdx=${h(this.tabIdx)}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${h(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
        ></wui-logo-select>
      </wui-flex>`:e?l`<wui-flex gap="xs">
      ${e.slice(1,e.length).map(t=>l`<wui-logo-select
            data-testid=${`social-selector-${t}`}
            @click=${()=>{this.onSocialClick(t)}}
            logo=${t}
            tabIdx=${h(this.tabIdx)}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){w.push("ConnectSocials")}async onSocialClick(e){var n,o;if(!_.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(t=>t===d.state.activeChain)){const t=d.getFirstCaipNetworkSupportsAuthConnector();if(t){w.push("SwitchNetwork",{network:t});return}}if(e&&(m.setSocialProvider(e,d.state.activeChain),k.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===En.Farcaster){w.push("ConnectingFarcaster");const t=b.getAuthConnector();if(t&&!m.state.farcasterUrl)try{const{url:r}=await t.provider.getFarcasterUri();m.setFarcasterUrl(r,d.state.activeChain)}catch(r){w.goBack(),L.showError(r)}}else{w.push("ConnectingSocial");const t=b.getAuthConnector();try{if(t&&e){if(f.isTelegram()||(this.popupWindow=f.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes")),this.popupWindow)m.setSocialWindow(this.popupWindow,d.state.activeChain);else if(!f.isTelegram())throw new Error("Something went wrong");const{uri:r}=await t.provider.getSocialRedirectUri({provider:e});if(!r)throw(n=this.popupWindow)==null||n.close(),new Error("Something went wrong");if(this.popupWindow&&(this.popupWindow.location.href=r),f.isTelegram()){ge.setTelegramSocialProvider(e);const s=f.formatTelegramSocialLoginUrl(r);return f.openHref(s,"_top")}}}catch{(o=this.popupWindow)==null||o.close(),L.showError("Something went wrong")}}}};xe.styles=Co;Fe([v()],xe.prototype,"walletGuide",void 0);Fe([v()],xe.prototype,"tabIdx",void 0);Fe([c()],xe.prototype,"connectors",void 0);Fe([c()],xe.prototype,"features",void 0);Fe([c()],xe.prototype,"authConnector",void 0);xe=Fe([p("w3m-social-login-widget")],xe);const $o=R`
  :host {
    padding-bottom: var(--wui-spacing-s);
  }
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var fi=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ze=class extends x{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return this.walletGuide==="explore"?l`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:l`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s","0","s","0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${h(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){w.push("Create")}};Ze.styles=$o;fi([v()],Ze.prototype,"tabIdx",void 0);fi([v()],Ze.prototype,"walletGuide",void 0);Ze=fi([p("w3m-wallet-guide")],Ze);const ko=I`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var ln=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const Xt=4;let yt=class extends A{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<Xt;return g`${this.walletImages.slice(0,Xt).map(({src:i,walletName:n})=>g`
            <wui-wallet-image
              size="inherit"
              imageSrc=${i}
              name=${Re(n)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(Xt-this.walletImages.length)].map(()=>g` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};yt.styles=[T,ko];ln([u({type:Array})],yt.prototype,"walletImages",void 0);yt=ln([p("wui-all-wallets-image")],yt);const So=I`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var q=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let B=class extends A{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return g`
      <button ?disabled=${this.disabled} tabindex=${Re(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?g` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?g` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?g`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?g`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?g`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?g`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?g`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};B.styles=[T,E,So];q([u({type:Array})],B.prototype,"walletImages",void 0);q([u()],B.prototype,"imageSrc",void 0);q([u()],B.prototype,"name",void 0);q([u()],B.prototype,"tagLabel",void 0);q([u()],B.prototype,"tagVariant",void 0);q([u()],B.prototype,"icon",void 0);q([u()],B.prototype,"walletIcon",void 0);q([u()],B.prototype,"tabIdx",void 0);q([u({type:Boolean})],B.prototype,"installed",void 0);q([u({type:Boolean})],B.prototype,"disabled",void 0);q([u({type:Boolean})],B.prototype,"showAllWallets",void 0);q([u({type:Boolean})],B.prototype,"loading",void 0);q([u({type:String})],B.prototype,"loadingSpinnerColor",void 0);B=q([p("wui-list-wallet")],B);var ht=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ve=class extends x{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.count=W.state.count,this.isFetchingRecommendedWallets=W.state.isFetchingRecommendedWallets,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e),W.subscribeKey("count",e=>this.count=e),W.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(s=>s.id==="walletConnect"),{allWallets:i}=$.state;if(!e||i==="HIDE"||i==="ONLY_MOBILE"&&!f.isMobile())return null;const n=W.state.featured.length,o=this.count+n,t=o<10?o:Math.floor(o/10)*10,r=t<o?`${t}+`:`${t}`;return l`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${r}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${h(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){k.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),w.push("AllWallets")}};ht([v()],Ve.prototype,"tabIdx",void 0);ht([c()],Ve.prototype,"connectors",void 0);ht([c()],Ve.prototype,"count",void 0);ht([c()],Ve.prototype,"isFetchingRecommendedWallets",void 0);Ve=ht([p("w3m-all-wallets-widget")],Ve);var gi=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ct=class extends x{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(i=>i.type==="ANNOUNCED");return e!=null&&e.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(i=>{var n,o;return(n=i.info)!=null&&n.rdns&&W.state.excludedRDNS&&W.state.excludedRDNS.includes((o=i==null?void 0:i.info)==null?void 0:o.rdns)?null:l`
            <wui-list-wallet
              imageSrc=${h(S.getConnectorImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnector(i)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${i.id}`}
              .installed=${!0}
              tabIdx=${h(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.id==="walletConnect"?f.isMobile()?w.push("AllWallets"):w.push("ConnectingWalletConnect"):w.push("ConnectingExternal",{connector:e})}};gi([v()],Ct.prototype,"tabIdx",void 0);gi([c()],Ct.prototype,"connectors",void 0);Ct=gi([p("w3m-connect-announced-widget")],Ct);var zt=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let et=class extends x{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.loading=!1,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e)),f.isTelegram()&&f.isIos()&&(this.loading=!y.state.wcUri,this.unsubscribe.push(y.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=$.state;if(!(e!=null&&e.length))return this.style.cssText="display: none",null;const i=this.filterOutDuplicateWallets(e);return l`<wui-flex flexDirection="column" gap="xs">
      ${i.map(n=>l`
          <wui-list-wallet
            imageSrc=${h(S.getWalletImage(n))}
            name=${n.name??"Unknown"}
            @click=${()=>this.onConnectWallet(n)}
            data-testid=${`wallet-selector-${n.id}`}
            tabIdx=${h(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const i=ge.getRecentWallets(),n=this.connectors.map(s=>{var C;return(C=s.info)==null?void 0:C.rdns}).filter(Boolean),o=i.map(s=>s.rdns).filter(Boolean),t=n.concat(o);if(t.includes("io.metamask.mobile")&&f.isMobile()){const s=t.indexOf("io.metamask.mobile");t[s]="io.metamask"}return e.filter(s=>!t.includes(String(s==null?void 0:s.rdns)))}onConnectWallet(e){this.loading||w.push("ConnectingWalletConnect",{wallet:e})}};zt([v()],et.prototype,"tabIdx",void 0);zt([c()],et.prototype,"connectors",void 0);zt([c()],et.prototype,"loading",void 0);et=zt([p("w3m-connect-custom-widget")],et);var mi=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let $t=class extends x{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const i=this.connectors.filter(n=>n.type==="EXTERNAL").filter(n=>n.id!==_.CONNECTOR_ID.COINBASE_SDK);return i!=null&&i.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map(n=>l`
            <wui-list-wallet
              imageSrc=${h(S.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name??"Unknown"}
              data-testid=${`wallet-selector-external-${n.id}`}
              @click=${()=>this.onConnector(n)}
              tabIdx=${h(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){w.push("ConnectingExternal",{connector:e})}};mi([v()],$t.prototype,"tabIdx",void 0);mi([c()],$t.prototype,"connectors",void 0);$t=mi([p("w3m-connect-external-widget")],$t);var cn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ii=class extends x{constructor(){super(...arguments),this.unsubscribe=[],this.tabIdx=void 0}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{featured:e}=W.state;if(!e.length)return this.style.cssText="display: none",null;const i=Oe.filterOutDuplicateWallets(e);return l`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map(n=>l`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${n.id}`}
              imageSrc=${h(S.getWalletImage(n))}
              name=${n.name??"Unknown"}
              @click=${()=>this.onConnectWallet(n)}
              tabIdx=${h(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){b.selectWalletConnector(e)}};cn([v()],ii.prototype,"tabIdx",void 0);ii=cn([p("w3m-connect-featured-widget")],ii);var bi=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let kt=class extends x{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var i;const e=this.connectors.filter(n=>n.type==="INJECTED");return!(e!=null&&e.length)||e.length===1&&((i=e[0])==null?void 0:i.name)==="Browser Wallet"&&!f.isMobile()?(this.style.cssText="display: none",null):l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(n=>{var t;if(!f.isMobile()&&n.name==="Browser Wallet")return null;const o=(t=n.info)==null?void 0:t.rdns;return!o&&!y.checkInstalled(void 0)?(this.style.cssText="display: none",null):o&&W.state.excludedRDNS&&W.state.excludedRDNS.includes(o)?null:l`
            <wui-list-wallet
              imageSrc=${h(S.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${n.id}`}
              @click=${()=>this.onConnector(n)}
              tabIdx=${h(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){b.setActiveConnector(e),w.push("ConnectingExternal",{connector:e})}};bi([v()],kt.prototype,"tabIdx",void 0);bi([c()],kt.prototype,"connectors",void 0);kt=bi([p("w3m-connect-injected-widget")],kt);var xi=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let St=class extends x{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(i=>i.type==="MULTI_CHAIN"&&i.name!=="WalletConnect");return e!=null&&e.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(i=>l`
            <wui-list-wallet
              imageSrc=${h(S.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${()=>this.onConnector(i)}
              tabIdx=${h(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){b.setActiveConnector(e),w.push("ConnectingMultiChain")}};xi([v()],St.prototype,"tabIdx",void 0);xi([c()],St.prototype,"connectors",void 0);St=xi([p("w3m-connect-multi-chain-widget")],St);var Vt=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let tt=class extends x{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.loading=!1,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e)),f.isTelegram()&&f.isIos()&&(this.loading=!y.state.wcUri,this.unsubscribe.push(y.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const i=ge.getRecentWallets().filter(n=>!this.connectors.some(o=>o.id===n.id||o.name===n.name));return i.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map(n=>l`
            <wui-list-wallet
              imageSrc=${h(S.getWalletImage(n))}
              name=${n.name??"Unknown"}
              @click=${()=>this.onConnectWallet(n)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${h(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){this.loading||b.selectWalletConnector(e)}};Vt([v()],tt.prototype,"tabIdx",void 0);Vt([c()],tt.prototype,"connectors",void 0);Vt([c()],tt.prototype,"loading",void 0);tt=Vt([p("w3m-connect-recent-widget")],tt);var Mt=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let it=class extends x{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.loading=!1,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e)),f.isTelegram()&&f.isIos()&&(this.loading=!y.state.wcUri,this.unsubscribe.push(y.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.connectors.find(j=>j.id==="walletConnect"))return null;const{recommended:i}=W.state,{customWallets:n,featuredWalletIds:o}=$.state,{connectors:t}=b.state,r=ge.getRecentWallets(),C=t.filter(j=>j.type==="INJECTED"||j.type==="ANNOUNCED"||j.type==="MULTI_CHAIN").filter(j=>j.name!=="Browser Wallet");if(o||n||!i.length)return this.style.cssText="display: none",null;const D=C.length+r.length,P=Math.max(0,2-D),we=Oe.filterOutDuplicateWallets(i).slice(0,P);return we.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${we.map(j=>l`
            <wui-list-wallet
              imageSrc=${h(S.getWalletImage(j))}
              name=${(j==null?void 0:j.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(j)}
              tabIdx=${h(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){if(this.loading)return;const i=b.getConnector(e.id,e.rdns);i?w.push("ConnectingExternal",{connector:i}):w.push("ConnectingWalletConnect",{wallet:e})}};Mt([v()],it.prototype,"tabIdx",void 0);Mt([c()],it.prototype,"connectors",void 0);Mt([c()],it.prototype,"loading",void 0);it=Mt([p("w3m-connect-recommended-widget")],it);var Ht=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let nt=class extends x{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.connectorImages=fe.state.connectorImages,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e),fe.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(f.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(n=>n.id==="walletConnect");if(!e)return this.style.cssText="display: none",null;const i=e.imageUrl||this.connectorImages[(e==null?void 0:e.imageId)??""];return l`
      <wui-list-wallet
        imageSrc=${h(i)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${h(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(e){b.setActiveConnector(e),w.push("ConnectingWalletConnect")}};Ht([v()],nt.prototype,"tabIdx",void 0);Ht([c()],nt.prototype,"connectors",void 0);Ht([c()],nt.prototype,"connectorImages",void 0);nt=Ht([p("w3m-connect-walletconnect-widget")],nt);const _o=R`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var vi=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ot=class extends x{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{custom:e,recent:i,announced:n,injected:o,multiChain:t,recommended:r,featured:s,external:C}=ki.getConnectorsByType(this.connectors),D=ki.getIsConnectedWithWC(),P=$.state.enableWalletConnect;return l`
      <wui-flex flexDirection="column" gap="xs">
        ${P&&!D?l`<w3m-connect-walletconnect-widget
              tabIdx=${h(this.tabIdx)}
            ></w3m-connect-walletconnect-widget>`:null}
        ${i.length?l`<w3m-connect-recent-widget
              tabIdx=${h(this.tabIdx)}
            ></w3m-connect-recent-widget>`:null}
        ${t.length?l`<w3m-connect-multi-chain-widget
              tabIdx=${h(this.tabIdx)}
            ></w3m-connect-multi-chain-widget>`:null}
        ${n.length?l`<w3m-connect-announced-widget
              tabIdx=${h(this.tabIdx)}
            ></w3m-connect-announced-widget>`:null}
        ${o.length?l`<w3m-connect-injected-widget
              tabIdx=${h(this.tabIdx)}
            ></w3m-connect-injected-widget>`:null}
        ${s.length?l`<w3m-connect-featured-widget
              tabIdx=${h(this.tabIdx)}
            ></w3m-connect-featured-widget>`:null}
        ${e!=null&&e.length?l`<w3m-connect-custom-widget
              tabIdx=${h(this.tabIdx)}
            ></w3m-connect-custom-widget>`:null}
        ${C.length?l`<w3m-connect-external-widget
              tabIdx=${h(this.tabIdx)}
            ></w3m-connect-external-widget>`:null}
        ${r.length?l`<w3m-connect-recommended-widget
              tabIdx=${h(this.tabIdx)}
            ></w3m-connect-recommended-widget>`:null}
      </wui-flex>
    `}};ot.styles=_o;vi([v()],ot.prototype,"tabIdx",void 0);vi([c()],ot.prototype,"connectors",void 0);ot=vi([p("w3m-connector-list")],ot);var un=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ni=class extends x{constructor(){super(...arguments),this.tabIdx=void 0}render(){return l`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${h(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${h(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};un([v()],ni.prototype,"tabIdx",void 0);ni=un([p("w3m-wallet-login-list")],ni);const Io=R`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var ne=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const To=470;let X=class extends x{constructor(){var e,i;super(),this.unsubscribe=[],this.connectors=b.state.connectors,this.authConnector=this.connectors.find(n=>n.type==="AUTH"),this.features=$.state.features,this.enableWallets=$.state.enableWallets,this.noAdapters=d.state.noAdapters,this.walletGuide="get-started",this.checked=!1,this.isEmailEnabled=((e=this.features)==null?void 0:e.email)&&!d.state.noAdapters,this.isSocialEnabled=((i=this.features)==null?void 0:i.socials)&&this.features.socials.length>0&&!d.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(b.subscribeKey("connectors",n=>{this.connectors=n,this.authConnector=this.connectors.find(o=>o.type==="AUTH"),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),$.subscribeKey("features",n=>this.setEmailAndSocialEnableCheck(n,this.noAdapters)),$.subscribeKey("enableWallets",n=>this.enableWallets=n),d.subscribeKey("noAdapters",n=>this.setEmailAndSocialEnableCheck(this.features,n)))}disconnectedCallback(){var i,n;this.unsubscribe.forEach(o=>o()),(i=this.resizeObserver)==null||i.disconnect();const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".connect");e==null||e.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){var i,n;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e==null||e.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),(n=this.resizeObserver)==null||n.observe(e),this.handleConnectListScroll())}render(){var j;const{termsConditionsUrl:e,privacyPolicyUrl:i}=$.state,n=(j=$.state.features)==null?void 0:j.legalCheckbox,r=!!(e||i)&&!!n&&this.walletGuide==="get-started"&&!this.checked,s={connect:!0,disabled:r},C=$.state.enableWalletGuide,D=this.enableWallets,P=this.isSocialEnabled||this.authConnector,we=r?-1:void 0;return l`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${Pi(s)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${P&&D&&C&&this.walletGuide==="get-started"?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(we)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(r)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}setEmailAndSocialEnableCheck(e,i){this.isEmailEnabled=(e==null?void 0:e.email)&&!i,this.isSocialEnabled=(e==null?void 0:e.socials)&&e.socials.length>0&&!i,this.features=e,this.noAdapters=i}checkIfAuthEnabled(e){const i=e.filter(o=>o.type===_n.CONNECTOR_TYPE_AUTH).map(o=>o.chain);return _.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(o=>i.includes(o))}renderConnectMethod(e){const i=Oe.getConnectOrderMethod(this.features,this.connectors);return l`${i.map((n,o)=>{switch(n){case"email":return l`${this.emailTemplate(e)} ${this.separatorTemplate(o,"email")}`;case"social":return l`${this.socialListTemplate(e)}
          ${this.separatorTemplate(o,"social")}`;case"wallet":return l`${this.walletListTemplate(e)}
          ${this.separatorTemplate(o,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const n=Oe.getConnectOrderMethod(this.features,this.connectors)[e+1];return n?this.checkMethodEnabled(n)?n:this.checkIsThereNextMethod(e+1):void 0}separatorTemplate(e,i){const n=this.checkIsThereNextMethod(e),o=this.walletGuide==="explore";switch(i){case"wallet":return this.enableWallets&&n&&!o?l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const t=n==="social";return this.isAuthEnabled&&this.isEmailEnabled&&!t&&n?l`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const t=n==="email";return this.isAuthEnabled&&this.isSocialEnabled&&!t&&n?l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return!this.isEmailEnabled||!this.isAuthEnabled?null:l`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${h(e)}
    ></w3m-email-login-widget>`}socialListTemplate(e){return!this.isSocialEnabled||!this.isAuthEnabled?null:l`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${h(e)}
    ></w3m-social-login-widget>`}walletListTemplate(e){var s,C;const i=this.enableWallets,n=((s=this.features)==null?void 0:s.emailShowWallets)===!1,o=(C=this.features)==null?void 0:C.collapseWallets,t=n||o;return!i||((f.isTelegram()||f.isSafari())&&f.isIos()&&y.connectWalletConnect().catch(D=>({})),this.walletGuide==="explore")?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&t?l`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${h(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:l`<w3m-wallet-login-list tabIdx=${h(e)}></w3m-wallet-login-list>`}guideTemplate(e=!1){if(!$.state.enableWalletGuide)return null;const n={guide:!0,disabled:e},o=e?-1:void 0;return!this.authConnector&&!this.isSocialEnabled?null:l`
      ${this.walletGuide==="explore"&&!d.state.noAdapters?l`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`:null}
      <wui-flex flexDirection="column" .padding=${["l","0","0","0"]} class=${Pi(n)}>
        <w3m-wallet-guide
          tabIdx=${h(o)}
          walletGuide=${this.walletGuide}
        ></w3m-wallet-guide>
      </wui-flex>
    `}legalCheckboxTemplate(){return this.walletGuide==="explore"?null:l`<w3m-legal-checkbox
      @checkboxChange=${this.onCheckboxChange.bind(this)}
      data-testid="w3m-legal-checkbox"
    ></w3m-legal-checkbox>`}handleConnectListScroll(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".connect");if(!e)return;e.scrollHeight>To?(e.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 40px,
          black calc(100% - 40px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--connect-scroll--top-opacity",_i.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",_i.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){w.push("ConnectWallets")}onCheckboxChange(e){this.checked=!!e.detail}};X.styles=Io;ne([c()],X.prototype,"connectors",void 0);ne([c()],X.prototype,"authConnector",void 0);ne([c()],X.prototype,"features",void 0);ne([c()],X.prototype,"enableWallets",void 0);ne([c()],X.prototype,"noAdapters",void 0);ne([v()],X.prototype,"walletGuide",void 0);ne([c()],X.prototype,"checked",void 0);ne([c()],X.prototype,"isEmailEnabled",void 0);ne([c()],X.prototype,"isSocialEnabled",void 0);ne([c()],X.prototype,"isAuthEnabled",void 0);X=ne([p("w3m-connect-view")],X);const Ao=I`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Kt=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Me=class extends A{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return g`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Me.styles=[T,E,Ao];Kt([u({type:Boolean})],Me.prototype,"disabled",void 0);Kt([u()],Me.prototype,"label",void 0);Kt([u()],Me.prototype,"buttonLabel",void 0);Me=Kt([p("wui-cta-button")],Me);const Ro=R`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var dn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let _t=class extends x{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:i,play_store:n,chrome_store:o,homepage:t}=this.wallet,r=f.isMobile(),s=f.isIos(),C=f.isAndroid(),D=[i,n,t,o].filter(Boolean).length>1,P=O.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return D&&!r?l`
        <wui-cta-button
          label=${`Don't have ${P}?`}
          buttonLabel="Get"
          @click=${()=>w.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!D&&t?l`
        <wui-cta-button
          label=${`Don't have ${P}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&s?l`
        <wui-cta-button
          label=${`Don't have ${P}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&C?l`
        <wui-cta-button
          label=${`Don't have ${P}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&f.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&f.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&f.openHref(this.wallet.homepage,"_blank")}};_t.styles=[Ro];dn([v({type:Object})],_t.prototype,"wallet",void 0);_t=dn([p("w3m-mobile-download-links")],_t);const Wo=R`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var ce=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};class U extends x{constructor(){var e,i,n,o,t;super(),this.wallet=(e=w.state.data)==null?void 0:e.wallet,this.connector=(i=w.state.data)==null?void 0:i.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=S.getWalletImage(this.wallet)??S.getConnectorImage(this.connector),this.name=((n=this.wallet)==null?void 0:n.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=y.state.wcUri,this.error=y.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(y.subscribeKey("wcUri",r=>{var s;this.uri=r,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),y.subscribeKey("wcError",r=>this.error=r),y.subscribeKey("buffering",r=>this.buffering=r)),(f.isTelegram()||f.isSafari())&&f.isIos()&&y.state.wcUri&&((t=this.onConnect)==null||t.call(this))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var n;(n=this.onRender)==null||n.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i=`Continue in ${this.name}`;return this.buffering&&(i="Connecting..."),this.error&&(i="Connection declined"),l`
      <wui-flex
        data-error=${h(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${h(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?l`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?l`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,i;this.buffering||(y.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(i=this.onConnect)==null||i.call(this))}loaderTemplate(){const e=Yt.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(f.copyToClopboard(this.uri),L.showSuccess("Link copied"))}catch{L.showError("Failed to copy")}}}U.styles=Wo;ce([c()],U.prototype,"isRetrying",void 0);ce([c()],U.prototype,"uri",void 0);ce([c()],U.prototype,"error",void 0);ce([c()],U.prototype,"ready",void 0);ce([c()],U.prototype,"showRetry",void 0);ce([c()],U.prototype,"secondaryBtnLabel",void 0);ce([c()],U.prototype,"secondaryLabel",void 0);ce([c()],U.prototype,"buffering",void 0);ce([v({type:Boolean})],U.prototype,"isMobile",void 0);ce([v()],U.prototype,"onRetry",void 0);var Eo=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ui=class extends U{constructor(){if(super(),this.externalViewUnsubscribe=[],!this.connector)throw new Error("w3m-connecting-view: No connector provided");k.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(d.subscribeKey("activeCaipAddress",e=>{e&&N.close()}))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id!==_.CONNECTOR_ID.COINBASE_SDK||!this.error)&&(await y.connectExternal(this.connector,this.connector.chain),k.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){k.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};Ui=Eo([p("w3m-connecting-external-view")],Ui);const No=R`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var pn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let It=class extends x{constructor(){super(),this.unsubscribe=[],this.activeConnector=b.state.activeConnector,this.unsubscribe.push(b.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${h(S.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${(e=this.activeConnector)==null?void 0:e.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){var e,i;return(i=(e=this.activeConnector)==null?void 0:e.connectors)==null?void 0:i.map(n=>n.name?l`
            <wui-list-wallet
              imageSrc=${h(S.getChainImage(n.chain))}
              name=${_.CHAIN_NAME_MAP[n.chain]}
              @click=${()=>this.onConnector(n)}
              data-testid="wui-list-chain-${n.chain}"
            ></wui-list-wallet>
          `:null)}onConnector(e){var n,o;const i=(o=(n=this.activeConnector)==null?void 0:n.connectors)==null?void 0:o.find(t=>t.chain===e.chain);if(!i){L.showError("Failed to find connector");return}i.id==="walletConnect"?f.isMobile()?w.push("AllWallets"):w.push("ConnectingWalletConnect"):w.push("ConnectingExternal",{connector:i})}};It.styles=No;pn([c()],It.prototype,"activeConnector",void 0);It=pn([p("w3m-connecting-multi-chain-view")],It);var qt=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let rt=class extends x{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(y.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return l`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:i})=>i),e}onTabChange(e){var n;const i=this.platformTabs[e];i&&((n=this.onSelectPlatfrom)==null||n.call(this,i))}};qt([v({type:Array})],rt.prototype,"platforms",void 0);qt([v()],rt.prototype,"onSelectPlatfrom",void 0);qt([c()],rt.prototype,"buffering",void 0);rt=qt([p("w3m-connecting-header")],rt);var Oo=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Bi=class extends U{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),k.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var e;try{this.error=!1;const{connectors:i}=b.state,n=i.find(o=>{var t,r,s;return o.type==="ANNOUNCED"&&((t=o.info)==null?void 0:t.rdns)===((r=this.wallet)==null?void 0:r.rdns)||o.type==="INJECTED"||o.name===((s=this.wallet)==null?void 0:s.name)});if(n)await y.connectExternal(n,n.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");N.close(),k.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((e=this.wallet)==null?void 0:e.name)||"Unknown"}})}catch(i){k.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(i==null?void 0:i.message)??"Unknown"}}),this.error=!0}}};Bi=Oo([p("w3m-connecting-wc-browser")],Bi);var jo=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let zi=class extends U{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),k.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:i,name:n}=this.wallet,{redirect:o,href:t}=f.formatNativeUrl(i,this.uri);y.setWcLinking({name:n,href:t}),y.setRecentWallet(this.wallet),f.openHref(o,"_blank")}catch{this.error=!0}}};zi=jo([p("w3m-connecting-wc-desktop")],zi);var Po=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Vi=class extends U{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,this.onRender=()=>{var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))},this.onConnect=()=>{var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:i,name:n}=this.wallet,{redirect:o,href:t}=f.formatNativeUrl(i,this.uri);y.setWcLinking({name:n,href:t}),y.setRecentWallet(this.wallet);const r=f.isIframe()?"_top":"_self";f.openHref(o,r),clearTimeout(this.labelTimeout),this.secondaryLabel=z.CONNECT_LABELS.MOBILE}catch(i){k.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:i instanceof Error?i.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel=void 0,this.secondaryLabel=z.CONNECT_LABELS.MOBILE,document.addEventListener("visibilitychange",this.onBuffering.bind(this)),k.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}}),this.btnLabelTimeout=setTimeout(()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=z.CONNECT_LABELS.MOBILE},z.FIVE_SEC_MS),this.labelTimeout=setTimeout(()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"},z.THREE_SEC_MS)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}onBuffering(){const e=f.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(y.setBuffering(!0),setTimeout(()=>{y.setBuffering(!1)},5e3))}onTryAgain(){this.buffering||(y.setWcError(!1),this.onConnect())}};Vi=Po([p("w3m-connecting-wc-mobile")],Vi);const Do=R`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var Lo=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let oi=class extends U{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),k.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.forEach(i=>i()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,i=this.wallet?this.wallet.name:void 0;return y.setWcLinking(void 0),y.setRecentWallet(this.wallet),l` <wui-qr-code
      size=${e}
      theme=${Yt.state.themeMode}
      uri=${this.uri}
      imageSrc=${h(S.getWalletImage(this.wallet))}
      color=${h(Yt.state.themeVariables["--w3m-qr-color"])}
      alt=${h(i)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};oi.styles=Do;oi=Lo([p("w3m-connecting-wc-qrcode")],oi);var Uo=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Mi=class extends x{constructor(){var e;if(super(),this.wallet=(e=w.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");k.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${h(S.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Mi=Uo([p("w3m-connecting-wc-unsupported")],Mi);var Bo=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Hi=class extends U{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",k.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:i,name:n}=this.wallet,{redirect:o,href:t}=f.formatUniversalUrl(i,this.uri);y.setWcLinking({name:n,href:t}),y.setRecentWallet(this.wallet),f.openHref(o,"_blank")}catch{this.error=!0}}};Hi=Bo([p("w3m-connecting-wc-web")],Hi);var Ft=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let at=class extends x{constructor(){var e;super(),this.wallet=(e=w.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!$.state.siwx,this.determinePlatforms(),this.initializeConnection()}render(){return l`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `}async initializeConnection(e=!1){if(!(this.platform==="browser"||$.state.manualWCControl&&!e))try{const{wcPairingExpiry:i,status:n}=y.state;(e||f.isPairingExpired(i)||n==="connecting")&&(await y.connectWalletConnect(),this.isSiwxEnabled||N.close())}catch(i){k.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(i==null?void 0:i.message)??"Unknown"}}),y.setWcError(!0),L.showError(i.message??"Connection error"),y.resetWcConnection(),w.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:e,desktop_link:i,webapp_link:n,injected:o,rdns:t}=this.wallet,r=o==null?void 0:o.map(({injected_id:yn})=>yn).filter(Boolean),s=[...t?[t]:r??[]],C=$.state.isUniversalProvider?!1:s.length,D=e,P=n,we=y.checkInstalled(s),j=C&&we,vn=i&&!f.isMobile();j&&!d.state.noAdapters&&this.platforms.push("browser"),D&&this.platforms.push(f.isMobile()?"mobile":"qrcode"),P&&this.platforms.push("web"),vn&&this.platforms.push("desktop"),!j&&C&&!d.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return l`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return l`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return l`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var n;const i=(n=this.shadowRoot)==null?void 0:n.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Ft([c()],at.prototype,"platform",void 0);Ft([c()],at.prototype,"platforms",void 0);Ft([c()],at.prototype,"isSiwxEnabled",void 0);at=Ft([p("w3m-connecting-wc-view")],at);var hn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ri=class extends x{constructor(){super(...arguments),this.isMobile=f.isMobile()}render(){if(this.isMobile){const{featured:e,recommended:i}=W.state,{customWallets:n}=$.state,o=ge.getRecentWallets(),t=e.length||i.length||(n==null?void 0:n.length)||o.length;return l`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${t?l`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return l`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};hn([c()],ri.prototype,"isMobile",void 0);ri=hn([p("w3m-connecting-wc-basic-view")],ri);const zo=R`
  .continue-button-container {
    width: 100%;
  }
`;var wn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Tt=class extends x{constructor(){super(...arguments),this.loading=!1}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{f.openHref(Nn.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){w.push("RegisterAccountName"),k.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:m.state.preferredAccountType===F.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Tt.styles=zo;wn([c()],Tt.prototype,"loading",void 0);Tt=wn([p("w3m-choose-account-name-view")],Tt);var Vo=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ki=class extends x{constructor(){var e;super(...arguments),this.wallet=(e=w.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return l`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&f.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&f.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&f.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&f.openHref(this.wallet.homepage,"_blank")}};Ki=Vo([p("w3m-downloads-view")],Ki);var Mo=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const Ho="https://walletconnect.com/explorer";let qi=class extends x{render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{f.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:i}=W.state,{customWallets:n}=$.state;return[...i,...n??[],...e].slice(0,4).map(t=>l`
        <wui-list-wallet
          name=${t.name??"Unknown"}
          tagVariant="main"
          imageSrc=${h(S.getWalletImage(t))}
          @click=${()=>{f.openHref(t.homepage??Ho,"_blank")}}
        ></wui-list-wallet>
      `)}};qi=Mo([p("w3m-get-wallet-view")],qi);var fn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ai=class extends x{constructor(){super(...arguments),this.data=[]}render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>l`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(i=>l`<wui-visual name=${i}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};fn([v({type:Array})],ai.prototype,"data",void 0);ai=fn([p("w3m-help-widget")],ai);var Ko=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const qo=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Fi=class extends x{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${qo}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){k.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),w.push("GetWallet")}};Fi=Ko([p("w3m-what-is-a-wallet-view")],Fi);const Fo=R`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var gn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let At=class extends x{constructor(){super(...arguments),this.checked=!1}render(){var C;const{termsConditionsUrl:e,privacyPolicyUrl:i}=$.state,n=(C=$.state.features)==null?void 0:C.legalCheckbox,t=!!(e||i)&&!!n,r=t&&!this.checked,s=r?-1:void 0;return l`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${t?["0","s","s","s"]:"s"}
        gap="xs"
        class=${h(r?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${h(s)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}onCheckboxChange(e){this.checked=!!e.detail}};At.styles=Fo;gn([c()],At.prototype,"checked",void 0);At=gn([p("w3m-connect-wallets-view")],At);const Go=I`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Xo=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let si=class extends A{render(){return g`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};si.styles=[T,Go];si=Xo([p("wui-loading-hexagon")],si);const Yo=ci`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Qo=ci`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,Jo=I`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Ne=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let pe=class extends A{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:Qo,md:an,lg:Yo},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `):this.style.cssText=`

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,g`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?g`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:g`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};pe.styles=[T,Jo];Ne([u()],pe.prototype,"size",void 0);Ne([u()],pe.prototype,"name",void 0);Ne([u({type:Object})],pe.prototype,"networkImagesBySize",void 0);Ne([u()],pe.prototype,"imageSrc",void 0);Ne([u({type:Boolean})],pe.prototype,"selected",void 0);Ne([u({type:Boolean})],pe.prototype,"round",void 0);pe=Ne([p("wui-network-image")],pe);const Zo=R`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var yi=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let st=class extends x{constructor(){var e;super(),this.network=(e=w.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),i=this.getSubLabel();return l`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${h(S.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:l`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${i}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=d.state.activeChain,i=b.getConnectorId(e);return b.getAuthConnector()&&i===_.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var o;const e=d.state.activeChain,i=b.getConnectorId(e);return b.getAuthConnector()&&i===_.CONNECTOR_ID.AUTH?`Switching to ${((o=this.network)==null?void 0:o.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&await d.switchActiveNetwork(this.network)}catch{this.error=!0}}};st.styles=Zo;yi([c()],st.prototype,"showRetry",void 0);yi([c()],st.prototype,"error",void 0);st=yi([p("w3m-network-switch-view")],st);const er=I`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Ge=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ve=class extends A{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return g`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?g`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?g`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:g`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};ve.styles=[T,E,er];Ge([u()],ve.prototype,"imageSrc",void 0);Ge([u()],ve.prototype,"name",void 0);Ge([u({type:Boolean})],ve.prototype,"disabled",void 0);Ge([u({type:Boolean})],ve.prototype,"selected",void 0);Ge([u({type:Boolean})],ve.prototype,"transparent",void 0);ve=Ge([p("wui-list-network")],ve);const tr=R`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var wt=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ae=class extends x{constructor(){super(),this.unsubscribe=[],this.network=d.state.activeCaipNetwork,this.requestedCaipNetworks=d.getAllRequestedCaipNetworks(),this.search="",this.onDebouncedSearch=f.debounce(e=>{this.search=e},100),this.unsubscribe.push(fe.subscribeNetworkImages(()=>this.requestUpdate()),d.subscribeKey("activeCaipNetwork",e=>this.network=e),d.subscribeKey("chains",()=>this.requestedCaipNetworks=d.getAllRequestedCaipNetworks()))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return l`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){k.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),w.push("WhatIsANetwork")}networksTemplate(){var o;const e=d.getAllRequestedCaipNetworks(),i=d.getAllApprovedCaipNetworkIds(),n=f.sortRequestedNetworks(i,e);return this.search?this.filteredNetworks=n==null?void 0:n.filter(t=>{var r;return(r=t==null?void 0:t.name)==null?void 0:r.toLowerCase().includes(this.search.toLowerCase())}):this.filteredNetworks=n,(o=this.filteredNetworks)==null?void 0:o.map(t=>{var r;return l`
        <wui-list-network
          .selected=${((r=this.network)==null?void 0:r.id)===t.id}
          imageSrc=${h(S.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${this.getNetworkDisabled(t)}
          data-testid=${`w3m-network-switch-${t.name??t.id}`}
        ></wui-list-network>
      `})}getNetworkDisabled(e){const i=e.chainNamespace,n=m.getCaipAddress(i),o=d.getAllApprovedCaipNetworkIds(),t=d.getNetworkProp("supportsAllNetworks",i)!==!1,r=b.getConnectorId(i),s=b.getAuthConnector(),C=r===_.CONNECTOR_ID.AUTH&&s;return!n||t||C?!1:!(o!=null&&o.includes(e.caipNetworkId))}onSwitchNetwork(e){var P;const i=w.state.data;if(e.id===((P=this.network)==null?void 0:P.id))return;const o=e.chainNamespace!==d.state.activeChain,t=m.state.caipAddress,r=m.getCaipAddress(e.chainNamespace),C=b.getConnectorId(d.state.activeChain)===_.CONNECTOR_ID.AUTH,D=_.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(we=>we===e.chainNamespace);t?C&&D?w.push("SwitchNetwork",{...i,network:e}):C&&!D||o&&!r?w.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):w.push("SwitchNetwork",{...i,network:e}):w.push("SwitchNetwork",{...i,network:e})}};Ae.styles=tr;wt([c()],Ae.prototype,"network",void 0);wt([c()],Ae.prototype,"requestedCaipNetworks",void 0);wt([c()],Ae.prototype,"filteredNetworks",void 0);wt([c()],Ae.prototype,"search",void 0);Ae=wt([p("w3m-networks-view")],Ae);const ir=R`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var mn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Rt=class extends x{constructor(){var e,i,n,o;super(...arguments),this.unsubscribe=[],this.switchToChain=(e=w.state.data)==null?void 0:e.switchToChain,this.navigateTo=(i=w.state.data)==null?void 0:i.navigateTo,this.navigateWithReplace=(n=w.state.data)==null?void 0:n.navigateWithReplace,this.caipNetwork=(o=w.state.data)==null?void 0:o.network,this.activeChain=d.state.activeChain}firstUpdated(){this.unsubscribe.push(d.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.switchToChain?_.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const i=this.switchToChain==="eip155"?"Ethereum":this.switchToChain;return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual
            name=${this.switchToChain==="eip155"?"eth":this.switchToChain}
          ></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${i}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${i}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(d.setIsSwitchingNamespace(!0),b.setFilterByNamespace(this.switchToChain),this.caipNetwork?await d.switchActiveNetwork(this.caipNetwork):d.setActiveNamespace(this.switchToChain),w.reset("Connect"))}};Rt.styles=ir;mn([v()],Rt.prototype,"activeChain",void 0);Rt=mn([p("w3m-switch-active-chain-view")],Rt);var nr=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const or=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Gi=class extends x{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${or}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{f.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Gi=nr([p("w3m-what-is-a-network-view")],Gi);const rr=R`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var bn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Wt=class extends x{constructor(){var e;super(),this.swapUnsupportedChain=(e=w.state.data)==null?void 0:e.swapUnsupportedChain,this.unsubscribe=[],this.disconecting=!1,this.unsubscribe.push(fe.subscribeNetworkImages(()=>this.requestUpdate()))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?l`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:l`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=d.getAllRequestedCaipNetworks(),i=d.getAllApprovedCaipNetworkIds(),n=f.sortRequestedNetworks(i,e);return(this.swapUnsupportedChain?n.filter(t=>z.SWAP_SUPPORTED_NETWORKS.includes(t.caipNetworkId)):n).map(t=>l`
        <wui-list-network
          imageSrc=${h(S.getNetworkImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(t)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await y.disconnect(),k.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),N.close()}catch{k.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),L.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const i=m.state.caipAddress,n=d.getAllApprovedCaipNetworkIds(),o=d.getNetworkProp("supportsAllNetworks",e.chainNamespace),t=w.state.data;i?n!=null&&n.includes(e.caipNetworkId)?await d.switchActiveNetwork(e):o?w.push("SwitchNetwork",{...t,network:e}):w.push("SwitchNetwork",{...t,network:e}):i||(d.setActiveCaipNetwork(e),w.push("Connect"))}};Wt.styles=rr;bn([c()],Wt.prototype,"disconecting",void 0);Wt=bn([p("w3m-unsupported-chain-view")],Wt);const ar=I`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var Ci=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let lt=class extends A{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return g`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};lt.styles=[T,E,ar];Ci([u()],lt.prototype,"icon",void 0);Ci([u()],lt.prototype,"text",void 0);lt=Ci([p("wui-banner")],lt);const sr=R`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var xn=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Et=class extends x{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=m.state.preferredAccountType,this.unsubscribe.push(m.subscribeKey("preferredAccountType",e=>{this.preferredAccountType=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=d.getAllRequestedCaipNetworks(),i=d.getAllApprovedCaipNetworkIds(),n=d.state.activeCaipNetwork,o=d.checkIfSmartAccountEnabled();let t=f.sortRequestedNetworks(i,e);if(o&&this.preferredAccountType===F.ACCOUNT_TYPES.SMART_ACCOUNT){if(!n)return null;t=[n]}return t.map(r=>l`
        <wui-list-network
          imageSrc=${h(S.getNetworkImage(r))}
          name=${r.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};Et.styles=sr;xn([c()],Et.prototype,"preferredAccountType",void 0);Et=xn([p("w3m-wallet-compatible-networks-view")],Et);const lr=I`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Gt=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let He=class extends A{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,g`${this.templateVisual()}`}templateVisual(){return this.imageSrc?g`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:g`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};He.styles=[T,lr];Gt([u()],He.prototype,"imageSrc",void 0);Gt([u()],He.prototype,"alt",void 0);Gt([u({type:Boolean})],He.prototype,"borderRadiusFull",void 0);He=Gt([p("wui-visual-thumbnail")],He);const cr=R`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var ur=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let li=class extends x{constructor(){var e,i;super(...arguments),this.dappImageUrl=(e=$.state.metadata)==null?void 0:e.icons,this.walletImageUrl=(i=m.state.connectedWalletInfo)==null?void 0:i.icon}firstUpdated(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return l`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,i){e.animate([{transform:"translateX(0px)"},{transform:i}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};li.styles=cr;li=ur([p("w3m-siwx-sign-message-thumbnails")],li);var $i=function(a,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,i,n);else for(var s=a.length-1;s>=0;s--)(r=a[s])&&(t=(o<3?r(t):o>3?r(e,i,t):r(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Nt=class extends x{constructor(){var e;super(...arguments),this.dappName=(e=$.state.metadata)==null?void 0:e.name,this.isCancelling=!1,this.isSigning=!1}render(){return l`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,await Si.requestSignMessage().finally(()=>this.isSigning=!1)}async onCancel(){this.isCancelling=!0,await Si.cancelSignMessage().finally(()=>this.isCancelling=!1)}};$i([c()],Nt.prototype,"isCancelling",void 0);$i([c()],Nt.prototype,"isSigning",void 0);Nt=$i([p("w3m-siwx-sign-message-view")],Nt);export{Ti as AppKitAccountButton,Ri as AppKitButton,Ei as AppKitConnectButton,Oi as AppKitNetworkButton,Ii as W3mAccountButton,ee as W3mAccountSettingsView,ei as W3mAccountView,vt as W3mAllWalletsView,Ai as W3mButton,Tt as W3mChooseAccountNameView,Wi as W3mConnectButton,X as W3mConnectView,At as W3mConnectWalletsView,Ui as W3mConnectingExternalView,It as W3mConnectingMultiChainView,ri as W3mConnectingWcBasicView,at as W3mConnectingWcView,Ki as W3mDownloadsView,qi as W3mGetWalletView,Ni as W3mNetworkButton,st as W3mNetworkSwitchView,Ae as W3mNetworksView,be as W3mProfileView,Ss as W3mRouter,Nt as W3mSIWXSignMessageView,Rt as W3mSwitchActiveChainView,Je as W3mSwitchAddressView,Wt as W3mUnsupportedChainView,Et as W3mWalletCompatibleNetworksView,Gi as W3mWhatIsANetworkView,Fi as W3mWhatIsAWalletView};
