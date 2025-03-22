import{i as A,b as v,a as u,c as w,r as I,x as c,n as h,U as g}from"./index-n_ZehpUP.js";import{j as z,q as F,v as a,e as W,r as V,m as H,f as q,x as f,R as b,d as K,N as E,u as L,p as j,w as J}from"./index-tLyCCnDv.js";import{e as Q,n as X}from"./index-D9AsQ2Ps.js";import"./index-Cq5ArIrS.js";import{e as G,n as M}from"./ref-BQEoHyCo.js";import"./index-C5WfdMvO.js";import"./index-CMxdI8o9.js";import"./index-C-VVRuU6.js";import"./index-Bv4gaPM0.js";import"./index-amhbIFfC.js";import{o as Y}from"./if-defined-7r6laPMd.js";import"./index-B426Rwk8.js";import"./if-defined-CqFZ3rMD.js";const Z=A`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var _=function(o,e,i,n){var r=arguments.length,t=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,n);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(t=(r<3?s(t):r>3?s(e,i,t):s(e,i))||t);return r>3&&t&&Object.defineProperty(e,i,t),t};let P=class extends I{constructor(){super(...arguments),this.inputElementRef=G(),this.instructionElementRef=G(),this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=z.debounce(async e=>{const i=await F.getEnsAddress(e);if(a.setLoading(!1),i){a.setReceiverProfileName(e),a.setReceiverAddress(i);const n=await F.getEnsAvatar(e);a.setReceiverProfileImageUrl(n||void 0)}else a.setReceiverAddress(e),a.setReceiverProfileName(void 0),a.setReceiverProfileImageUrl(void 0)})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return c` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${M(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${M(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){var e;this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",(e=this.inputElementRef.value)==null||e.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){var e;this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",(e=this.inputElementRef.value)==null||e.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){!this.value&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.value&&this.instructionHidden&&!this.pasting&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;const e=await navigator.clipboard.readText();a.setReceiverAddress(e),this.focusInput()}onInputChange(e){this.pasting=!1;const i=e.target;i.value&&!this.instructionHidden&&this.focusInput(),a.setLoading(!0),this.onDebouncedSearch(i.value)}};P.styles=Z;_([v()],P.prototype,"value",void 0);_([u()],P.prototype,"instructionHidden",void 0);_([u()],P.prototype,"pasting",void 0);P=_([w("w3m-input-address")],P);const ee=/[.*+?^${}()|[\]\\]/gu,te=/[0-9,.]/u,ie=W`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`;var B=function(o,e,i,n){var r=arguments.length,t=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,n);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(t=(r<3?s(t):r>3?s(e,i,t):s(e,i))||t);return r>3&&t&&Object.defineProperty(e,i,t),t};let T=class extends q{constructor(){super(...arguments),this.inputElementRef=Q(),this.disabled=!1,this.value="",this.placeholder="0"}render(){var e;return(e=this.inputElementRef)!=null&&e.value&&this.value&&(this.inputElementRef.value.value=this.value),f`<input
      ${X(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){var n,r;const i=e.data;if(i&&((n=this.inputElementRef)!=null&&n.value))if(i===","){const t=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=t,this.value=`${this.value}${t}`}else te.test(i)||(this.inputElementRef.value.value=this.value.replace(new RegExp(i.replace(ee,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:(r=this.inputElementRef.value)==null?void 0:r.value,bubbles:!0,composed:!0}))}};T.styles=[V,H,ie];B([h({type:Boolean})],T.prototype,"disabled",void 0);B([h({type:String})],T.prototype,"value",void 0);B([h({type:String})],T.prototype,"placeholder",void 0);T=B([w("wui-input-amount")],T);const ne=A`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var R=function(o,e,i,n){var r=arguments.length,t=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,n);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(t=(r<3?s(t):r>3?s(e,i,t):s(e,i))||t);return r>3&&t&&Object.defineProperty(e,i,t),t};let k=class extends I{render(){return c` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?c`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:c`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){b.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const i=this.token.price*this.sendTokenAmount;return c`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${i?`$${g.formatNumberToLocalString(i,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?c` <wui-text variant="small-400" color="error-100">
          ${g.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:c` <wui-text variant="small-400" color="fg-200">
        ${g.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?c`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:c`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){a.setTokenAmount(e.detail)}onMaxClick(){if(this.token&&typeof this.gasPrice<"u"){const e=this.token.address===void 0||Object.values(K.NATIVE_TOKEN_ADDRESS).some(r=>{var t;return((t=this.token)==null?void 0:t.address)===r}),i=E.bigNumber(this.gasPrice).div(E.bigNumber(10).pow(Number(this.token.quantity.decimals))),n=e?E.bigNumber(this.token.quantity.numeric).minus(i):E.bigNumber(this.token.quantity.numeric);a.setTokenAmount(Number(n.toFixed(20)))}}onBuyClick(){b.push("OnRampProviders")}};k.styles=ne;R([v({type:Object})],k.prototype,"token",void 0);R([v({type:Number})],k.prototype,"sendTokenAmount",void 0);R([v({type:Number})],k.prototype,"gasPriceInUSD",void 0);R([v({type:Number})],k.prototype,"gasPrice",void 0);k=R([w("w3m-input-token")],k);const re=A`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var m=function(o,e,i,n){var r=arguments.length,t=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,n);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(t=(r<3?s(t):r>3?s(e,i,t):s(e,i))||t);return r>3&&t&&Object.defineProperty(e,i,t),t};let d=class extends I{constructor(){super(),this.unsubscribe=[],this.token=a.state.token,this.sendTokenAmount=a.state.sendTokenAmount,this.receiverAddress=a.state.receiverAddress,this.receiverProfileName=a.state.receiverProfileName,this.loading=a.state.loading,this.gasPriceInUSD=a.state.gasPriceInUSD,this.gasPrice=a.state.gasPrice,this.message="Preview Send",this.fetchNetworkPrice(),this.fetchBalances(),this.unsubscribe.push(a.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),c` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
          .gasPrice=${this.gasPrice}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchBalances(){await a.fetchTokenBalance(),a.fetchNetworkBalance()}async fetchNetworkPrice(){await L.getNetworkTokenPrice();const e=await L.getInitialGasPrice();e!=null&&e.gasPrice&&(e!=null&&e.gasPriceInUSD)&&(a.setGasPrice(e.gasPrice),a.setGasPriceInUsd(e.gasPriceInUSD))}onButtonClick(){b.push("WalletSendPreview")}getMessage(){var e;this.message="Preview Send",this.receiverAddress&&!z.isAddress(this.receiverAddress,j.state.activeChain)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),a.hasInsufficientGasFunds()&&(this.message="Insufficient Gas Funds"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&((e=this.token)!=null&&e.price)&&(this.sendTokenAmount*this.token.price||(this.message="Incorrect Value")),this.token||(this.message="Select Token")}};d.styles=re;m([u()],d.prototype,"token",void 0);m([u()],d.prototype,"sendTokenAmount",void 0);m([u()],d.prototype,"receiverAddress",void 0);m([u()],d.prototype,"receiverProfileName",void 0);m([u()],d.prototype,"loading",void 0);m([u()],d.prototype,"gasPriceInUSD",void 0);m([u()],d.prototype,"gasPrice",void 0);m([u()],d.prototype,"message",void 0);d=m([w("w3m-wallet-send-view")],d);const oe=A`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var N=function(o,e,i,n){var r=arguments.length,t=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,n);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(t=(r<3?s(t):r>3?s(e,i,t):s(e,i))||t);return r>3&&t&&Object.defineProperty(e,i,t),t};let y=class extends I{constructor(){super(),this.unsubscribe=[],this.tokenBalances=a.state.tokenBalances,this.search="",this.onDebouncedSearch=z.debounce(e=>{this.search=e}),this.unsubscribe.push(a.subscribe(e=>{this.tokenBalances=e.tokenBalances}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return c`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){var e,i;return this.tokens=(e=this.tokenBalances)==null?void 0:e.filter(n=>{var r;return n.chainId===((r=j.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)}),this.search?this.filteredTokens=(i=this.tokenBalances)==null?void 0:i.filter(n=>n.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,c`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(n=>c`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,n)}
                    ?clickable=${!0}
                    tokenName=${n.name}
                    tokenImageUrl=${n.iconUrl}
                    tokenAmount=${n.quantity.numeric}
                    tokenValue=${n.value}
                    tokenCurrency=${n.symbol}
                  ></wui-list-token>`):c`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
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
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){b.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){a.setToken(e),a.setTokenAmount(void 0),b.goBack()}};y.styles=oe;N([u()],y.prototype,"tokenBalances",void 0);N([u()],y.prototype,"tokens",void 0);N([u()],y.prototype,"filteredTokens",void 0);N([u()],y.prototype,"search",void 0);y=N([w("w3m-wallet-send-select-token-view")],y);const se=W`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;var D=function(o,e,i,n){var r=arguments.length,t=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,n);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(t=(r<3?s(t):r>3?s(e,i,t):s(e,i))||t);return r>3&&t&&Object.defineProperty(e,i,t),t};let $=class extends q{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return f`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?f`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?f`<wui-image src=${this.imageSrc}></wui-image>`:f`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};$.styles=[V,H,se];D([h()],$.prototype,"text",void 0);D([h()],$.prototype,"address",void 0);D([h()],$.prototype,"imageSrc",void 0);D([h({type:Boolean})],$.prototype,"isAddress",void 0);$=D([w("wui-preview-item")],$);const ae=W`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var U=function(o,e,i,n){var r=arguments.length,t=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,n);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(t=(r<3?s(t):r>3?s(e,i,t):s(e,i))||t);return r>3&&t&&Object.defineProperty(e,i,t),t};let C=class extends q{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return f`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?f`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?f` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:f`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};C.styles=[V,H,ae];U([h()],C.prototype,"imageSrc",void 0);U([h()],C.prototype,"textTitle",void 0);U([h()],C.prototype,"textValue",void 0);C=U([w("wui-list-content")],C);const le=A`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`;var O=function(o,e,i,n){var r=arguments.length,t=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,n);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(t=(r<3?s(t):r>3?s(e,i,t):s(e,i))||t);return r>3&&t&&Object.defineProperty(e,i,t),t};let S=class extends I{render(){return c` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${Y(g.formatNumberToLocalString(this.networkFee,2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${g.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){var e;return(e=this.caipNetwork)!=null&&e.name?c` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${Y(J.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&b.push("Networks",{network:e})}};S.styles=le;O([v()],S.prototype,"receiverAddress",void 0);O([v({type:Object})],S.prototype,"caipNetwork",void 0);O([v({type:Number})],S.prototype,"networkFee",void 0);S=O([w("w3m-wallet-send-details")],S);const ue=A`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var x=function(o,e,i,n){var r=arguments.length,t=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,n);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(t=(r<3?s(t):r>3?s(e,i,t):s(e,i))||t);return r>3&&t&&Object.defineProperty(e,i,t),t};let p=class extends I{constructor(){super(),this.unsubscribe=[],this.token=a.state.token,this.sendTokenAmount=a.state.sendTokenAmount,this.receiverAddress=a.state.receiverAddress,this.receiverProfileName=a.state.receiverProfileName,this.receiverProfileImageUrl=a.state.receiverProfileImageUrl,this.gasPriceInUSD=a.state.gasPriceInUSD,this.caipNetwork=j.state.activeCaipNetwork,this.unsubscribe.push(a.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl}),j.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e,i;return c` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?g.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${(e=this.token)==null?void 0:e.symbol}"
            .imageSrc=${(i=this.token)==null?void 0:i.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?g.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):g.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const i=this.token.price*this.sendTokenAmount;return c`<wui-text variant="paragraph-400" color="fg-100"
        >$${i.toFixed(2)}</wui-text
      >`}return null}onSendClick(){a.sendToken()}onCancelClick(){b.goBack()}};p.styles=ue;x([u()],p.prototype,"token",void 0);x([u()],p.prototype,"sendTokenAmount",void 0);x([u()],p.prototype,"receiverAddress",void 0);x([u()],p.prototype,"receiverProfileName",void 0);x([u()],p.prototype,"receiverProfileImageUrl",void 0);x([u()],p.prototype,"gasPriceInUSD",void 0);x([u()],p.prototype,"caipNetwork",void 0);p=x([w("w3m-wallet-send-preview-view")],p);export{y as W3mSendSelectTokenView,p as W3mWalletSendPreviewView,d as W3mWalletSendView};
