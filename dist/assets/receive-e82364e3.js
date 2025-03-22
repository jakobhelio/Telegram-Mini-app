import{l as v,t as N,B as T,r as y,x as l,A as w,F as u,z as h,L as f,T as k,W as $,m as A,v as R}from"./index-a3470178.js";import{n as x,c as C,U as I,o as S,r as m}from"./if-defined-122c0166.js";import"./index-2c0780a3.js";import"./index-0aaaa7d9.js";import"./index-bb727798.js";import"./browser-e933942f.js";const O=v`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var g=globalThis&&globalThis.__decorate||function(c,e,r,i){var a=arguments.length,t=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(c,e,r,i);else for(var s=c.length-1;s>=0;s--)(o=c[s])&&(t=(a<3?o(t):a>3?o(e,r,t):o(e,r))||t);return a>3&&t&&Object.defineProperty(e,r,t),t};let p=class extends y{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return l`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return l` <wui-flex class="networks">
      ${e==null?void 0:e.map(r=>l` <wui-flex class="network-icon"> <wui-image src=${r}></wui-image> </wui-flex>`)}
    </wui-flex>`}};p.styles=[N,T,O];g([x({type:Array})],p.prototype,"networkImages",void 0);g([x()],p.prototype,"text",void 0);p=g([C("wui-compatible-network")],p);const _=v`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var d=globalThis&&globalThis.__decorate||function(c,e,r,i){var a=arguments.length,t=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(c,e,r,i);else for(var s=c.length-1;s>=0;s--)(o=c[s])&&(t=(a<3?o(t):a>3?o(e,r,t):o(e,r))||t);return a>3&&t&&Object.defineProperty(e,r,t),t};let n=class extends y{constructor(){super(),this.unsubscribe=[],this.address=w.state.address,this.profileName=w.state.profileName,this.network=u.state.activeCaipNetwork,this.preferredAccountType=w.state.preferredAccountType,this.unsubscribe.push(w.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):h.showError("Account not found")}),u.subscribeKey("activeCaipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=f.getNetworkImage(this.network);return l` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${I.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${k.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${S(k.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var o;const e=u.getAllRequestedCaipNetworks(),r=u.checkIfSmartAccountEnabled(),i=u.state.activeCaipNetwork;if(this.preferredAccountType===$.ACCOUNT_TYPES.SMART_ACCOUNT&&r)return i?l`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[f.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;const t=((o=e==null?void 0:e.filter(s=>{var b;return(b=s==null?void 0:s.assets)==null?void 0:b.imageId}))==null?void 0:o.slice(0,5)).map(f.getNetworkImage).filter(Boolean);return l`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${t}
    ></wui-compatible-network>`}onReceiveClick(){A.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(R.copyToClopboard(this.address),h.showSuccess("Address copied"))}catch{h.showError("Failed to copy")}}};n.styles=_;d([m()],n.prototype,"address",void 0);d([m()],n.prototype,"profileName",void 0);d([m()],n.prototype,"network",void 0);d([m()],n.prototype,"preferredAccountType",void 0);n=d([C("w3m-wallet-receive-view")],n);export{n as W3mWalletReceiveView};
