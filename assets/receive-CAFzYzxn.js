import{n as y,c as v,i as C,r as $,U as N,x as m,a as w}from"./index-n_ZehpUP.js";import{o as A}from"./if-defined-7r6laPMd.js";import{e as R,r as T,m as I,f as S,x as f,A as d,p as l,l as h,w as g,T as k,W as O,R as _,j as E}from"./index-tLyCCnDv.js";import"./index-5iCmcGKE.js";import"./index-amhbIFfC.js";import"./index-BDvr1C6T.js";const W=R`
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
`;var b=function(n,e,r,i){var a=arguments.length,t=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var s=n.length-1;s>=0;s--)(o=n[s])&&(t=(a<3?o(t):a>3?o(e,r,t):o(e,r))||t);return a>3&&t&&Object.defineProperty(e,r,t),t};let u=class extends S{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return f`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return f` <wui-flex class="networks">
      ${e==null?void 0:e.map(r=>f` <wui-flex class="network-icon"> <wui-image src=${r}></wui-image> </wui-flex>`)}
    </wui-flex>`}};u.styles=[T,I,W];b([y({type:Array})],u.prototype,"networkImages",void 0);b([y()],u.prototype,"text",void 0);u=b([v("wui-compatible-network")],u);const j=C`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var p=function(n,e,r,i){var a=arguments.length,t=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var s=n.length-1;s>=0;s--)(o=n[s])&&(t=(a<3?o(t):a>3?o(e,r,t):o(e,r))||t);return a>3&&t&&Object.defineProperty(e,r,t),t};let c=class extends ${constructor(){super(),this.unsubscribe=[],this.address=d.state.address,this.profileName=d.state.profileName,this.network=l.state.activeCaipNetwork,this.preferredAccountType=d.state.preferredAccountType,this.unsubscribe.push(d.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):h.showError("Account not found")}),l.subscribeKey("activeCaipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=g.getNetworkImage(this.network);return m` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${N.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
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
          color=${A(k.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var o;const e=l.getAllRequestedCaipNetworks(),r=l.checkIfSmartAccountEnabled(),i=l.state.activeCaipNetwork;if(this.preferredAccountType===O.ACCOUNT_TYPES.SMART_ACCOUNT&&r)return i?m`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[g.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;const t=((o=e==null?void 0:e.filter(s=>{var x;return(x=s==null?void 0:s.assets)==null?void 0:x.imageId}))==null?void 0:o.slice(0,5)).map(g.getNetworkImage).filter(Boolean);return m`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${t}
    ></wui-compatible-network>`}onReceiveClick(){_.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(E.copyToClopboard(this.address),h.showSuccess("Address copied"))}catch{h.showError("Failed to copy")}}};c.styles=j;p([w()],c.prototype,"address",void 0);p([w()],c.prototype,"profileName",void 0);p([w()],c.prototype,"network",void 0);p([w()],c.prototype,"preferredAccountType",void 0);c=p([v("w3m-wallet-receive-view")],c);export{c as W3mWalletReceiveView};
