import{Q as re,V as ie,X as se,F as U,u as oe,A as I,Y as ae,Z as Y,$ as K,a0 as Z,l as R,r as g,x as c,a1 as N,a2 as C,O as D,M as $,L as ne,y as J,W as ee,m as E,v as q,q as V,G as ce,z as M,T as le}from"./index-a3470178.js";import{n as d,c as y,o as m,r as p}from"./if-defined-122c0166.js";import{D as ue,T as pe}from"./index-59041964.js";import"./index-21ede41c.js";import"./index-0aaaa7d9.js";import"./index-481f0bfe.js";import"./index-54b3f9de.js";import"./index-6a6b1de2.js";import"./index-64e916b6.js";import"./index-fa796e28.js";import"./index-97f27cbe.js";import"./index-80b43f45.js";const B={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},F={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},de={providers:Z,selectedProvider:null,error:null,purchaseCurrency:B,paymentCurrency:F,purchaseCurrencies:[B],paymentCurrencies:[],quotesLoading:!1},l=re(de),u={state:l,subscribe(s){return ie(l,()=>s(l))},subscribeKey(s,e){return se(l,s,e)},setSelectedProvider(s){if(s&&s.name==="meld"){const e=U.state.activeChain===oe.CHAIN.SOLANA?"SOL":"USDC",t=I.state.address??"",i=new URL(s.url);i.searchParams.append("publicKey",ae),i.searchParams.append("destinationCurrencyCode",e),i.searchParams.append("walletAddress",t),s.url=i.toString()}l.selectedProvider=s},setPurchaseCurrency(s){l.purchaseCurrency=s},setPaymentCurrency(s){l.paymentCurrency=s},setPurchaseAmount(s){this.state.purchaseAmount=s},setPaymentAmount(s){this.state.paymentAmount=s},async getAvailableCurrencies(){const s=await Y.getOnrampOptions();l.purchaseCurrencies=s.purchaseCurrencies,l.paymentCurrencies=s.paymentCurrencies,l.paymentCurrency=s.paymentCurrencies[0]||F,l.purchaseCurrency=s.purchaseCurrencies[0]||B,await K.fetchCurrencyImages(s.paymentCurrencies.map(e=>e.id)),await K.fetchTokenImages(s.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){var s,e;l.quotesLoading=!0;try{const t=await Y.getOnrampQuote({purchaseCurrency:l.purchaseCurrency,paymentCurrency:l.paymentCurrency,amount:((s=l.paymentAmount)==null?void 0:s.toString())||"0",network:(e=l.purchaseCurrency)==null?void 0:e.symbol});return l.quotesLoading=!1,l.purchaseAmount=Number(t==null?void 0:t.purchaseAmount.amount),t}catch(t){return l.error=t.message,l.quotesLoading=!1,null}finally{l.quotesLoading=!1}},resetState(){l.providers=Z,l.selectedProvider=null,l.error=null,l.purchaseCurrency=B,l.paymentCurrency=F,l.purchaseCurrencies=[B],l.paymentCurrencies=[],l.paymentAmount=void 0,l.purchaseAmount=void 0,l.quotesLoading=!1}},he=R`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var f=globalThis&&globalThis.__decorate||function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var n=s.length-1;n>=0;n--)(a=s[n])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let h=class extends g{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return c`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?c`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:c`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await K._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return c`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return c`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return c`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};h.styles=[he];f([d({type:Boolean})],h.prototype,"disabled",void 0);f([d()],h.prototype,"color",void 0);f([d()],h.prototype,"label",void 0);f([d()],h.prototype,"purchaseValue",void 0);f([d()],h.prototype,"purchaseCurrency",void 0);f([d()],h.prototype,"date",void 0);f([d({type:Boolean})],h.prototype,"completed",void 0);f([d({type:Boolean})],h.prototype,"inProgress",void 0);f([d({type:Boolean})],h.prototype,"failed",void 0);f([d()],h.prototype,"onClick",void 0);f([d()],h.prototype,"symbol",void 0);f([d()],h.prototype,"icon",void 0);h=f([y("w3m-onramp-activity-item")],h);const me=R`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var L=globalThis&&globalThis.__decorate||function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var n=s.length-1;n>=0;n--)(a=s[n])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const we=7;let _=class extends g{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=u.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=N.state.coinbaseTransactions,this.tokenImages=C.state.tokenImages,this.unsubscribe.push(u.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),C.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},N.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),N.clearCursor(),this.fetchTransactions()}render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e==null?void 0:e.map(t=>{var n,j,Q;const i=ue.formatDate((n=t==null?void 0:t.metadata)==null?void 0:n.minedAt),o=t.transfers[0],r=o==null?void 0:o.fungible_info;if(!r)return null;const a=((j=r==null?void 0:r.icon)==null?void 0:j.url)||((Q=this.tokenImages)==null?void 0:Q[r.symbol||""]);return c`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${m(r.symbol)}
          purchaseValue=${o.quantity.numeric}
          date=${i}
          icon=${m(a)}
          symbol=${m(r.symbol)}
        ></w3m-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(t=>{const i=parseInt(t,10);return new Array(12).fill(null).map((r,a)=>a).reverse().map(r=>{var j;const a=pe.getTransactionGroupTitle(i,r),n=(j=this.coinbaseTransactions[i])==null?void 0:j[r];return n?c`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${a}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(n)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=I.state.address,t=D.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await N.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){var o;const e=new Date;if((((o=this.coinbaseTransactions[e.getFullYear()])==null?void 0:o[e.getMonth()])||[]).filter(r=>r.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{const r=I.state.address;await N.fetchTransactions(r,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(we).fill(c` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};_.styles=me;L([p()],_.prototype,"selectedOnRampProvider",void 0);L([p()],_.prototype,"loading",void 0);L([p()],_.prototype,"coinbaseTransactions",void 0);L([p()],_.prototype,"tokenImages",void 0);_=L([y("w3m-onramp-activity-view")],_);const fe=R`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var W=globalThis&&globalThis.__decorate||function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var n=s.length-1;n>=0;n--)(a=s[n])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let O=class extends g{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=u.state.paymentCurrency,this.currencies=u.state.paymentCurrencies,this.currencyImages=C.state.currencyImages,this.checked=!1,this.unsubscribe.push(u.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),C.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var n;const{termsConditionsUrl:e,privacyPolicyUrl:t}=D.state,i=(n=D.state.features)==null?void 0:n.legalCheckbox,a=!!(e||t)&&!!i&&!this.checked;return c`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${m(a?"disabled":void 0)}
      >
        ${this.currenciesTemplate(a)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.currencies.map(t=>{var i;return c`
        <wui-list-item
          imageSrc=${m((i=this.currencyImages)==null?void 0:i[t.id])}
          @click=${()=>this.selectCurrency(t)}
          variant="image"
          tabIdx=${m(e?-1:void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${t.id}</wui-text>
        </wui-list-item>
      `})}selectCurrency(e){e&&(u.setPaymentCurrency(e),$.close())}onCheckboxChange(e){this.checked=!!e.detail}};O.styles=fe;W([p()],O.prototype,"selectedCurrency",void 0);W([p()],O.prototype,"currencies",void 0);W([p()],O.prototype,"currencyImages",void 0);W([p()],O.prototype,"checked",void 0);O=W([y("w3m-onramp-fiat-select-view")],O);const ge=R`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var A=globalThis&&globalThis.__decorate||function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var n=s.length-1;n>=0;n--)(a=s[n])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let v=class extends g{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return c`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${m(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?c`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:c`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){var i;const e=U.getAllRequestedCaipNetworks(),t=(i=e==null?void 0:e.filter(o=>{var r;return(r=o==null?void 0:o.assets)==null?void 0:r.imageId}))==null?void 0:i.slice(0,5);return c`
      <wui-flex class="networks">
        ${t==null?void 0:t.map(o=>c`
            <wui-flex class="network-icon">
              <wui-image src=${m(ne.getNetworkImage(o))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};v.styles=[ge];A([d({type:Boolean})],v.prototype,"disabled",void 0);A([d()],v.prototype,"color",void 0);A([d()],v.prototype,"name",void 0);A([d()],v.prototype,"label",void 0);A([d()],v.prototype,"feeRange",void 0);A([d({type:Boolean})],v.prototype,"loading",void 0);A([d()],v.prototype,"onClick",void 0);v=A([y("w3m-onramp-provider-item")],v);const ye=R`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var be=globalThis&&globalThis.__decorate||function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var n=s.length-1;n>=0;n--)(a=s[n])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let G=class extends g{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=D.state;return!e&&!t?null:c`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return c` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){J.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:I.state.preferredAccountType===ee.ACCOUNT_TYPES.SMART_ACCOUNT}}),E.push("WhatIsABuy")}};G.styles=[ye];G=be([y("w3m-onramp-providers-footer")],G);var te=globalThis&&globalThis.__decorate||function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var n=s.length-1;n>=0;n--)(a=s[n])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let H=class extends g{constructor(){super(),this.unsubscribe=[],this.providers=u.state.providers,this.unsubscribe.push(u.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){const e=this.providers.map(async t=>t.name==="coinbase"?await this.getCoinbaseOnRampURL():Promise.resolve(t==null?void 0:t.url));Promise.all(e).then(t=>{this.providers=this.providers.map((i,o)=>({...i,url:t[o]||""}))})}render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter(e=>e.supportedChains.includes(U.state.activeChain??"eip155")).map(e=>c`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(e){u.setSelectedProvider(e),E.push("BuyInProgress"),q.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),J.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:I.state.preferredAccountType===ee.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){const e=I.state.address,t=U.state.activeCaipNetwork;if(!e)throw new Error("No address found");if(!(t!=null&&t.name))throw new Error("No network found");const i=V.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??V.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,o=u.state.purchaseCurrency,r=o?[o.symbol]:u.state.purchaseCurrencies.map(a=>a.symbol);return await Y.generateOnRampURL({defaultNetwork:i,destinationWallets:[{address:e,blockchains:V.WC_COINBASE_PAY_SDK_CHAINS,assets:r}],partnerUserId:e,purchaseAmount:u.state.purchaseAmount})}};te([p()],H.prototype,"providers",void 0);H=te([y("w3m-onramp-providers-view")],H);const ve=R`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var z=globalThis&&globalThis.__decorate||function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var n=s.length-1;n>=0;n--)(a=s[n])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let k=class extends g{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=u.state.purchaseCurrencies,this.tokens=u.state.purchaseCurrencies,this.tokenImages=C.state.tokenImages,this.checked=!1,this.unsubscribe.push(u.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),C.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var n;const{termsConditionsUrl:e,privacyPolicyUrl:t}=D.state,i=(n=D.state.features)==null?void 0:n.legalCheckbox,a=!!(e||t)&&!!i&&!this.checked;return c`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${m(a?"disabled":void 0)}
      >
        ${this.currenciesTemplate(a)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.tokens.map(t=>{var i;return c`
        <wui-list-item
          imageSrc=${m((i=this.tokenImages)==null?void 0:i[t.symbol])}
          @click=${()=>this.selectToken(t)}
          variant="image"
          tabIdx=${m(e?-1:void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${t.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `})}selectToken(e){e&&(u.setPurchaseCurrency(e),$.close())}onCheckboxChange(e){this.checked=!!e.detail}};k.styles=ve;z([p()],k.prototype,"selectedCurrency",void 0);z([p()],k.prototype,"tokens",void 0);z([p()],k.prototype,"tokenImages",void 0);z([p()],k.prototype,"checked",void 0);k=z([y("w3m-onramp-token-select-view")],k);const xe=R`
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
`;var b=globalThis&&globalThis.__decorate||function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var n=s.length-1;n>=0;n--)(a=s[n])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let w=class extends g{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=u.state.selectedProvider,this.uri=ce.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(u.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var i,o;let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${(i=this.selectedOnRampProvider)==null?void 0:i.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return c`
      <wui-flex
        data-error=${m(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${m((o=this.selectedOnRampProvider)==null?void 0:o.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

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
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now(),this.initializeCoinbaseTransactions();break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{const e=I.state.address;if(!e)throw new Error("No address found");(await Y.fetchTransactions({account:e,onramp:"coinbase"})).data.filter(o=>new Date(o.metadata.minedAt)>new Date(this.startTime)||o.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length?(clearInterval(this.intervalId),E.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){M.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,q.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){var e;return(e=this.selectedOnRampProvider)!=null&&e.url?c`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=le.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){var e;if(!((e=this.selectedOnRampProvider)!=null&&e.url)){M.showError("No link found"),E.goBack();return}try{q.copyToClopboard(this.selectedOnRampProvider.url),M.showSuccess("Link copied")}catch{M.showError("Failed to copy")}}};w.styles=xe;b([p()],w.prototype,"intervalId",void 0);b([p()],w.prototype,"selectedOnRampProvider",void 0);b([p()],w.prototype,"uri",void 0);b([p()],w.prototype,"ready",void 0);b([p()],w.prototype,"showRetry",void 0);b([p()],w.prototype,"buffering",void 0);b([p()],w.prototype,"error",void 0);b([p()],w.prototype,"startTime",void 0);b([d({type:Boolean})],w.prototype,"isMobile",void 0);b([d()],w.prototype,"onRetry",void 0);w=b([y("w3m-buy-in-progress-view")],w);var Ce=globalThis&&globalThis.__decorate||function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var n=s.length-1;n>=0;n--)(a=s[n])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let X=class extends g{render(){return c`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${E.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};X=Ce([y("w3m-what-is-a-buy-view")],X);const Te=R`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var S=globalThis&&globalThis.__decorate||function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var n=s.length-1;n>=0;n--)(a=s[n])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let T=class extends g{constructor(){var e;super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=(e=this.currencies)==null?void 0:e[0],this.currencyImages=C.state.currencyImages,this.tokenImages=C.state.tokenImages,this.unsubscribe.push(u.subscribeKey("purchaseCurrency",t=>{!t||this.type==="Fiat"||(this.selectedCurrency=this.formatPurchaseCurrency(t))}),u.subscribeKey("paymentCurrency",t=>{!t||this.type==="Token"||(this.selectedCurrency=this.formatPaymentCurrency(t))}),u.subscribe(t=>{this.type==="Fiat"?this.currencies=t.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=t.paymentCurrencies.map(this.formatPaymentCurrency)}),C.subscribe(t=>{this.currencyImages={...t.currencyImages},this.tokenImages={...t.tokenImages}}))}firstUpdated(){u.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var i;const e=((i=this.selectedCurrency)==null?void 0:i.symbol)||"",t=this.currencyImages[e]||this.tokenImages[e];return c`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?c` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>$.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${m(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:c`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};T.styles=Te;S([d({type:String})],T.prototype,"type",void 0);S([d({type:Number})],T.prototype,"value",void 0);S([p()],T.prototype,"currencies",void 0);S([p()],T.prototype,"selectedCurrency",void 0);S([p()],T.prototype,"currencyImages",void 0);S([p()],T.prototype,"tokenImages",void 0);T=S([y("w3m-onramp-input")],T);const Re=R`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var P=globalThis&&globalThis.__decorate||function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var n=s.length-1;n>=0;n--)(a=s[n])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const Ae={USD:"$",EUR:"€",GBP:"£"},Pe=[100,250,500,1e3];let x=class extends g{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=U.state.activeCaipAddress,this.loading=$.state.loading,this.paymentCurrency=u.state.paymentCurrency,this.paymentAmount=u.state.paymentAmount,this.purchaseAmount=u.state.purchaseAmount,this.quoteLoading=u.state.quotesLoading,this.unsubscribe.push(U.subscribeKey("activeCaipAddress",e=>this.caipAddress=e),$.subscribeKey("loading",e=>{this.loading=e}),u.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${Pe.map(e=>{var t;return c`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${Ae[((t=this.paymentCurrency)==null?void 0:t.id)||"USD"]} ${e}`}</wui-button
                >`})}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?c`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:c`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||$.open({view:"OnRampProviders"})}openModal(){$.open({view:"Connect"})}async onPaymentAmountChange(e){u.setPaymentAmount(Number(e.detail)),await u.getQuote()}async selectPresetAmount(e){u.setPaymentAmount(e),await u.getQuote()}};x.styles=Re;P([d({type:Boolean})],x.prototype,"disabled",void 0);P([p()],x.prototype,"caipAddress",void 0);P([p()],x.prototype,"loading",void 0);P([p()],x.prototype,"paymentCurrency",void 0);P([p()],x.prototype,"paymentAmount",void 0);P([p()],x.prototype,"purchaseAmount",void 0);P([p()],x.prototype,"quoteLoading",void 0);x=P([y("w3m-onramp-widget")],x);export{w as W3mBuyInProgressView,_ as W3mOnRampActivityView,H as W3mOnRampProvidersView,O as W3mOnrampFiatSelectView,k as W3mOnrampTokensView,x as W3mOnrampWidget,X as W3mWhatIsABuyView};
