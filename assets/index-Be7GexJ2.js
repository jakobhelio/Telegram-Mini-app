import{n as c,c as k,i as Y,b as V,a as b,r as z,x as h}from"./index-n_ZehpUP.js";import{e as S,f as B,x as w,r as E,p as C,I as u,j as R,R as W,O as F,k as U,A as G,W as M}from"./index-tLyCCnDv.js";import{T as D,D as K}from"./index-Dl-nto0A.js";import"./index-Cq5ArIrS.js";import"./index-C5WfdMvO.js";import{o as j}from"./if-defined-CqFZ3rMD.js";import"./index-amhbIFfC.js";var N;(function(o){o.approve="approved",o.bought="bought",o.borrow="borrowed",o.burn="burnt",o.cancel="canceled",o.claim="claimed",o.deploy="deployed",o.deposit="deposited",o.execute="executed",o.mint="minted",o.receive="received",o.repay="repaid",o.send="sent",o.sell="sold",o.stake="staked",o.trade="swapped",o.unstake="unstaked",o.withdraw="withdrawn"})(N||(N={}));const P=S`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var x=function(o,t,e,r){var s=arguments.length,i=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(s<3?n(i):s>3?n(t,e,i):n(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};let g=class extends B{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,e]=this.images,r=(t==null?void 0:t.type)==="NFT",s=e!=null&&e.url?e.type==="NFT":r,i=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",n=s?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${n};
    `,w`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,e]=this.images,r=t==null?void 0:t.type;return this.images.length===2&&(t!=null&&t.url||e!=null&&e.url)?w`<div class="swap-images-container">
        ${t!=null&&t.url?w`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${e!=null&&e.url?w`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t!=null&&t.url?w`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:r==="NFT"?w`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:w`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-100",e;return e=this.getIcon(),this.status&&(t=this.getStatusColor()),e?w`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};g.styles=[P];x([c()],g.prototype,"type",void 0);x([c()],g.prototype,"status",void 0);x([c()],g.prototype,"direction",void 0);x([c({type:Boolean})],g.prototype,"onlyDirectionIcon",void 0);x([c({type:Array})],g.prototype,"images",void 0);x([c({type:Object})],g.prototype,"secondImage",void 0);g=x([k("wui-transaction-visual")],g);const H=S`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var f=function(o,t,e,r){var s=arguments.length,i=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(s<3?n(i):s>3?n(t,e,i):n(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};let p=class extends B{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return w`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${j(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${j(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${N[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var e;const t=(e=this.descriptions)==null?void 0:e[0];return t?w`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var e;const t=(e=this.descriptions)==null?void 0:e[1];return t?w`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};p.styles=[E,H];f([c()],p.prototype,"type",void 0);f([c({type:Array})],p.prototype,"descriptions",void 0);f([c()],p.prototype,"date",void 0);f([c({type:Boolean})],p.prototype,"onlyDirectionIcon",void 0);f([c()],p.prototype,"status",void 0);f([c()],p.prototype,"direction",void 0);f([c({type:Array})],p.prototype,"images",void 0);f([c({type:Array})],p.prototype,"price",void 0);f([c({type:Array})],p.prototype,"amount",void 0);f([c({type:Array})],p.prototype,"symbol",void 0);p=f([k("wui-transaction-list-item")],p);const q=Y`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
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

  .emptyContainer {
    height: 100%;
  }
`;var y=function(o,t,e,r){var s=arguments.length,i=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(s<3?n(i):s>3?n(t,e,i):n(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};const I="last-transaction",J=7;let m=class extends z{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=C.state.activeCaipAddress,this.transactionsByYear=u.state.transactionsByYear,this.loading=u.state.loading,this.empty=u.state.empty,this.next=u.state.next,u.clearCursor(),this.unsubscribe.push(C.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(u.resetTransactions(),u.fetchTransactions(t)),this.caipAddress=t}),C.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),u.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return h` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){var r;const t=(r=C.state.activeCaipNetwork)==null?void 0:r.caipNetworkId;u.state.lastNetworkInView!==t&&(u.resetTransactions(),this.caipAddress&&u.fetchTransactions(R.getPlainAddress(this.caipAddress))),u.setLastNetworkInView(t)}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(e=>{const r=parseInt(e,10),s=new Array(12).fill(null).map((i,n)=>{var l;const a=D.getTransactionGroupTitle(r,n),d=(l=this.transactionsByYear[r])==null?void 0:l[n];return{groupTitle:a,transactions:d}}).filter(({transactions:i})=>i).reverse();return s.map(({groupTitle:i,transactions:n},a)=>{const d=a===s.length-1;return n?h`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${d?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200" data-testid="group-title"
                >${i}</wui-text
              >
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(n,d)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,e){const{date:r,descriptions:s,direction:i,isAllNFT:n,images:a,status:d,transfers:l,type:v}=this.getTransactionListItemProps(t),$=(l==null?void 0:l.length)>1;return(l==null?void 0:l.length)===2&&!n?h`
        <wui-transaction-list-item
          date=${r}
          .direction=${i}
          id=${e&&this.next?I:""}
          status=${d}
          type=${v}
          .images=${a}
          .descriptions=${s}
        ></wui-transaction-list-item>
      `:$?l.map((A,_)=>{const T=D.getTransferDescription(A),L=e&&_===l.length-1;return h` <wui-transaction-list-item
          date=${r}
          direction=${A.direction}
          id=${L&&this.next?I:""}
          status=${d}
          type=${v}
          .onlyDirectionIcon=${!0}
          .images=${[a[_]]}
          .descriptions=${[T]}
        ></wui-transaction-list-item>`}):h`
      <wui-transaction-list-item
        date=${r}
        .direction=${i}
        id=${e&&this.next?I:""}
        status=${d}
        type=${v}
        .images=${a}
        .descriptions=${s}
      ></wui-transaction-list-item>
    `}templateTransactions(t,e){return t.map((r,s)=>{const i=e&&s===t.length-1;return h`${this.templateRenderTransaction(r,i)}`})}emptyStateActivity(){return h`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
      data-testid="empty-activity-state"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return h`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
      data-testid="empty-account-state"
    >
      <wui-icon-box
        icon="swapHorizontal"
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
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?h`${this.emptyStateAccount()}`:h`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(J).fill(h` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t):null}onReceiveClick(){W.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=F.state;this.paginationObserver=new IntersectionObserver(([e])=>{e!=null&&e.isIntersecting&&!this.loading&&(u.fetchTransactions(R.getPlainAddress(this.caipAddress)),U.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:R.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:G.state.preferredAccountType===M.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var e,r,s;(e=this.paginationObserver)==null||e.disconnect();const t=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${I}`);t&&((s=this.paginationObserver)==null||s.observe(t))}getTransactionListItemProps(t){var d,l,v,$,O;const e=K.formatDate((d=t==null?void 0:t.metadata)==null?void 0:d.minedAt),r=D.getTransactionDescriptions(t),s=t==null?void 0:t.transfers,i=(l=t==null?void 0:t.transfers)==null?void 0:l[0],n=!!i&&((v=t==null?void 0:t.transfers)==null?void 0:v.every(A=>!!A.nft_info)),a=D.getTransactionImages(s);return{date:e,direction:i==null?void 0:i.direction,descriptions:r,isAllNFT:n,images:a,status:($=t.metadata)==null?void 0:$.status,transfers:s,type:(O=t.metadata)==null?void 0:O.operationType}}};m.styles=q;y([V()],m.prototype,"page",void 0);y([b()],m.prototype,"caipAddress",void 0);y([b()],m.prototype,"transactionsByYear",void 0);y([b()],m.prototype,"loading",void 0);y([b()],m.prototype,"empty",void 0);y([b()],m.prototype,"next",void 0);m=y([k("w3m-activity-list")],m);
