import{l as I,r as P,o as m,O as C,m as h,q as W,x as c,A as l,F as x,y as d,z as g,v as E,H as A,I as R,G as L,M as k,T as $}from"./index-a3470178.js";import{n as D,r as u,c as _,o as v}from"./if-defined-122c0166.js";import"./index-6a6b1de2.js";import{S as j}from"./index-673a61cb.js";import"./index-21ede41c.js";import"./index-fa796e28.js";import"./index-64e916b6.js";import"./index-bb727798.js";import"./index-80b43f45.js";import"./index-481f0bfe.js";import"./index-0aaaa7d9.js";import"./browser-e933942f.js";const q=I`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var y=globalThis&&globalThis.__decorate||function(s,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(i=(r<3?n(i):r>3?n(e,t,i):n(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};let w=class extends P{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.state.connectors,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.features=C.state.features,this.unsubscribe.push(m.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(t=>t.type==="AUTH")}),C.subscribeKey("features",e=>this.features=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var i;let e=((i=this.features)==null?void 0:i.socials)||[];const t=!!this.authConnector,o=e==null?void 0:e.length,r=h.state.view==="ConnectSocials";return(!t||!o)&&!r?null:(r&&!o&&(e=W.DEFAULT_FEATURES.socials),c` <wui-flex flexDirection="column" gap="xs">
      ${e.map(n=>c`<wui-list-social
            @click=${()=>{this.onSocialClick(n)}}
            name=${n}
            logo=${n}
            tabIdx=${v(this.tabIdx)}
          ></wui-list-social>`)}
    </wui-flex>`)}async onSocialClick(e){var t,o;if(e&&(l.setSocialProvider(e,x.state.activeChain),d.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===j.Farcaster){h.push("ConnectingFarcaster");const r=m.getAuthConnector();if(r&&!l.state.farcasterUrl)try{const{url:i}=await r.provider.getFarcasterUri();l.setFarcasterUrl(i,x.state.activeChain)}catch(i){h.goBack(),g.showError(i)}}else{h.push("ConnectingSocial");const r=m.getAuthConnector();this.popupWindow=E.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(r&&e){const{uri:i}=await r.provider.getSocialRedirectUri({provider:e});if(this.popupWindow&&i)l.setSocialWindow(this.popupWindow,x.state.activeChain),this.popupWindow.location.href=i;else throw(t=this.popupWindow)==null||t.close(),new Error("Something went wrong")}}catch{(o=this.popupWindow)==null||o.close(),g.showError("Something went wrong")}}}};w.styles=q;y([D()],w.prototype,"tabIdx",void 0);y([u()],w.prototype,"connectors",void 0);y([u()],w.prototype,"authConnector",void 0);y([u()],w.prototype,"features",void 0);w=y([_("w3m-social-login-list")],w);const z=I`
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
`;var U=globalThis&&globalThis.__decorate||function(s,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(i=(r<3?n(i):r>3?n(e,t,i):n(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};let T=class extends P{constructor(){super(...arguments),this.checked=!1}render(){var O;const{termsConditionsUrl:e,privacyPolicyUrl:t}=C.state,o=(O=C.state.features)==null?void 0:O.legalCheckbox,i=!!(e||t)&&!!o,n=i&&!this.checked,a=n?-1:void 0;return c`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?["0","s","s","s"]:"s"}
        gap="xs"
        class=${v(n?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${v(a)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}onCheckboxChange(e){this.checked=!!e.detail}};T.styles=z;U([u()],T.prototype,"checked",void 0);T=U([_("w3m-connect-socials-view")],T);const F=I`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
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
  .capitalize {
    text-transform: capitalize;
  }
`;var b=globalThis&&globalThis.__decorate||function(s,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(i=(r<3?n(i):r>3?n(e,t,i):n(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};let p=class extends P{constructor(){super(),this.unsubscribe=[],this.socialProvider=l.state.socialProvider,this.socialWindow=l.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=m.getAuthConnector(),this.handleSocialConnection=async e=>{var t;if((t=e.data)!=null&&t.resultUri)if(e.origin===A.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),l.setSocialWindow(void 0,x.state.activeChain)),this.connecting=!0,this.updateMessage();const o=e.data.resultUri;this.socialProvider&&d.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await this.authConnector.provider.connectSocial(o),this.socialProvider&&(R.setConnectedSocialProvider(this.socialProvider),await L.connectExternal(this.authConnector,this.authConnector.chain),d.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch{this.error=!0,this.updateMessage(),this.socialProvider&&d.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else h.goBack(),g.showError("Untrusted Origin"),this.socialProvider&&d.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},this.unsubscribe.push(l.subscribe(e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&(k.state.open||C.state.enableEmbedded)&&k.close()})),this.authConnector&&this.connectSocial()}disconnectedCallback(){var e;this.unsubscribe.forEach(t=>t()),window.removeEventListener("message",this.handleSocialConnection,!1),(e=this.socialWindow)==null||e.close(),l.setSocialWindow(void 0,x.state.activeChain)}render(){return c`
      <wui-flex
        data-error=${v(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${v(this.socialProvider)}></wui-logo>
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
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=$.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}connectSocial(){const e=setInterval(()=>{var t;(t=this.socialWindow)!=null&&t.closed&&(!this.connecting&&h.state.view==="ConnectingSocial"&&(this.socialProvider&&d.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),h.goBack()),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};p.styles=F;b([u()],p.prototype,"socialProvider",void 0);b([u()],p.prototype,"socialWindow",void 0);b([u()],p.prototype,"error",void 0);b([u()],p.prototype,"connecting",void 0);b([u()],p.prototype,"message",void 0);p=b([_("w3m-connecting-social-view")],p);const G=I`
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

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;var S=globalThis&&globalThis.__decorate||function(s,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(i=(r<3?n(i):r>3?n(e,t,i):n(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};let f=class extends P{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=l.state.socialProvider,this.uri=l.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=m.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(l.subscribeKey("farcasterUrl",e=>{e&&(this.uri=e,this.connectFarcaster())}),l.subscribeKey("socialProvider",e=>{e&&(this.socialProvider=e)})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),c`${this.platformTemplate()}`}platformTemplate(){return E.isMobile()?c`${this.mobileTemplate()}`:c`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?c`${this.loadingTemplate()}`:c`${this.qrTemplate()}`}qrTemplate(){return c` <wui-flex
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
    </wui-flex>`}loadingTemplate(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
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
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return c` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
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
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=$.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}async connectFarcaster(){var e;if(this.authConnector)try{await((e=this.authConnector)==null?void 0:e.provider.connectFarcaster()),this.socialProvider&&(R.setConnectedSocialProvider(this.socialProvider),d.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0,await L.connectExternal(this.authConnector,this.authConnector.chain),this.socialProvider&&d.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,k.close()}catch(t){this.socialProvider&&d.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}}),h.goBack(),g.showError(t)}}mobileLinkTemplate(){return c`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&E.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40;return c` <wui-qr-code
      size=${e}
      theme=${$.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${v($.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return c`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(E.copyToClopboard(this.uri),g.showSuccess("Link copied"))}catch{g.showError("Failed to copy")}}};f.styles=G;S([u()],f.prototype,"socialProvider",void 0);S([u()],f.prototype,"uri",void 0);S([u()],f.prototype,"ready",void 0);S([u()],f.prototype,"loading",void 0);f=S([_("w3m-connecting-farcaster-view")],f);export{T as W3mConnectSocialsView,f as W3mConnectingFarcasterView,p as W3mConnectingSocialView};
