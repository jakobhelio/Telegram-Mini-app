import{l as v,t as F,B as N,r as b,x as c,D as T,m as s,o as E,v as x,z as f,y as u,F as S,G as j,O as W,M as k}from"./index-a3470178.js";import{n as I,c as h,r as d,U as A}from"./if-defined-122c0166.js";import"./index-64e916b6.js";import"./index-481f0bfe.js";import"./index-21ede41c.js";import{e as U,n as z}from"./index-fa796e28.js";import"./index-6882b474.js";import"./index-97f27cbe.js";const M=v`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
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

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var _=globalThis&&globalThis.__decorate||function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var l=a.length-1;l>=0;l--)(r=a[l])&&(i=(o<3?r(i):o>3?r(e,t,i):r(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let w=class extends b{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return c`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};w.styles=[F,N,M];_([I({type:Boolean})],w.prototype,"disabled",void 0);_([I({type:String})],w.prototype,"value",void 0);w=_([h("wui-input-numeric")],w);const B=v`
  :host {
    position: relative;
    display: block;
  }
`;var C=globalThis&&globalThis.__decorate||function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var l=a.length-1;l>=0;l--)(r=a[l])&&(i=(o<3?r(i):o>3?r(e,t,i):r(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let m=class extends b{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(n=>n!==""),this.handleKeyDown=(e,t)=>{const n=e.target,o=this.getInputElement(n),i=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;i.includes(e.key)&&e.preventDefault();const r=o.selectionStart;switch(e.key){case"ArrowLeft":r&&o.setSelectionRange(r+1,r+1),this.focusInputField("prev",t);break;case"ArrowRight":this.focusInputField("next",t);break;case"Shift":this.focusInputField("next",t);break;case"Delete":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break;case"Backspace":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break}},this.focusInputField=(e,t)=>{if(e==="next"){const n=t+1;if(!this.shouldInputBeEnabled(n))return;const o=this.numerics[n<this.length?n:t],i=o?this.getInputElement(o):void 0;i&&(i.disabled=!1,i.focus())}if(e==="prev"){const n=t-1,o=this.numerics[n>-1?n:t],i=o?this.getInputElement(o):void 0;i&&i.focus()}}}firstUpdated(){var t,n;this.otp&&(this.values=this.otp.split(""));const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(n=this.numerics[0])==null||n.focus()}render(){return c`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>c`
            <wui-input-numeric
              @input=${n=>this.handleInput(n,t)}
              @click=${n=>this.selectInput(n)}
              @keydown=${n=>this.handleKeyDown(n,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,n){const o=this.numerics[t],i=e||(o?this.getInputElement(o):void 0);i&&(i.value=n,this.values=this.values.map((r,l)=>l===t?n:r))}selectInput(e){const t=e.target;if(t){const n=this.getInputElement(t);n==null||n.select()}}handleInput(e,t){const n=e.target,o=this.getInputElement(n);if(o){const i=o.value;e.inputType==="insertFromPaste"?this.handlePaste(o,i,t):A.isNumber(i)&&e.data?(this.updateInput(o,t,e.data),this.focusInputField("next",t)):this.updateInput(o,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,n){const o=t[0];if(o&&A.isNumber(o)){this.updateInput(e,n,o);const r=t.substring(1);if(n+1<this.length&&r.length){const l=this.numerics[n+1],$=l?this.getInputElement(l):void 0;$&&this.handlePaste($,r,n+1)}else this.focusInputField("next",n)}else this.updateInput(e,n,"")}getInputElement(e){var t;return(t=e.shadowRoot)!=null&&t.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};m.styles=[F,B];C([I({type:Number})],m.prototype,"length",void 0);C([I({type:String})],m.prototype,"otp",void 0);C([d()],m.prototype,"values",void 0);m=C([h("wui-otp")],m);const q=v`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var O=globalThis&&globalThis.__decorate||function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var l=a.length-1;l>=0;l--)(r=a[l])&&(i=(o<3?r(i):o>3?r(e,t,i):r(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const H=6;let p=class extends b{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=T.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=(e=s.state.data)==null?void 0:e.email,this.authConnector=E.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?c`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:c` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?c`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=T.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=T.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){var t;try{this.loading||(this.otp=e.detail,this.authConnector&&this.otp.length===H&&(this.loading=!0,await((t=this.onOtpSubmit)==null?void 0:t.call(this,this.otp))))}catch(n){this.error=x.parseError(n),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!E.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),f.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){f.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};p.styles=q;O([d()],p.prototype,"loading",void 0);O([d()],p.prototype,"timeoutTimeLeft",void 0);O([d()],p.prototype,"error",void 0);p=O([h("w3m-email-otp-widget")],p);var G=globalThis&&globalThis.__decorate||function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var l=a.length-1;l>=0;l--)(r=a[l])&&(i=(o<3?r(i):o>3?r(e,t,i):r(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let D=class extends p{constructor(){super(...arguments),this.onOtpSubmit=async e=>{try{if(this.authConnector){if(await this.authConnector.provider.connectOtp({otp:e}),u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),S.state.activeChain)await j.connectExternal(this.authConnector,S.state.activeChain);else throw new Error("Active chain is not set on ChainControll");u.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),W.state.siwx||k.close()}}catch(t){throw u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:x.parseError(t)}}),t}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};D=G([h("w3m-email-verify-otp-view")],D);const K=v`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var V=globalThis&&globalThis.__decorate||function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var l=a.length-1;l>=0;l--)(r=a[l])&&(i=(o<3?r(i):o>3?r(e,t,i):r(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let y=class extends b{constructor(){var e;super(),this.email=(e=s.state.data)==null?void 0:e.email,this.authConnector=E.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),u.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),s.replace("EmailVerifyOtp",{email:this.email})}catch{s.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),f.showSuccess("Code email resent")}}catch(e){f.showError(e)}finally{this.loading=!1}}};y.styles=K;V([d()],y.prototype,"loading",void 0);y=V([h("w3m-email-verify-device-view")],y);const Y=v`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var R=globalThis&&globalThis.__decorate||function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var l=a.length-1;l>=0;l--)(r=a[l])&&(i=(o<3?r(i):o>3?r(e,t,i):r(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let g=class extends b{constructor(){var e;super(...arguments),this.formRef=U(),this.initialEmail=((e=s.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return c`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${z(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${s.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=E.getAuthConnector();if(!t)throw new Error("w3m-update-email-wallet: Auth connector not found");const n=await t.provider.updateEmail({email:this.email});u.sendEvent({type:"track",event:"EMAIL_EDIT"}),n.action==="VERIFY_SECONDARY_OTP"?s.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):s.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(t){f.showError(t),this.loading=!1}}};g.styles=Y;R([d()],g.prototype,"email",void 0);R([d()],g.prototype,"loading",void 0);g=R([h("w3m-update-email-wallet-view")],g);var J=globalThis&&globalThis.__decorate||function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var l=a.length-1;l>=0;l--)(r=a[l])&&(i=(o<3?r(i):o>3?r(e,t,i):r(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let P=class extends p{constructor(){var e;super(),this.email=(e=s.state.data)==null?void 0:e.email,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:t}),u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),s.replace("UpdateEmailSecondaryOtp",s.state.data))}catch(n){throw u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:x.parseError(n)}}),n}},this.onStartOver=()=>{s.replace("UpdateEmailWallet",s.state.data)}}};P=J([h("w3m-update-email-primary-otp-view")],P);var Q=globalThis&&globalThis.__decorate||function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var l=a.length-1;l>=0;l--)(r=a[l])&&(i=(o<3?r(i):o>3?r(e,t,i):r(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let L=class extends p{constructor(){var e;super(),this.email=(e=s.state.data)==null?void 0:e.newEmail,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:t}),u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),s.reset("Account"))}catch(n){throw u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:x.parseError(n)}}),n}},this.onStartOver=()=>{s.replace("UpdateEmailWallet",s.state.data)}}};L=Q([h("w3m-update-email-secondary-otp-view")],L);export{y as W3mEmailVerifyDeviceView,D as W3mEmailVerifyOtpView,P as W3mUpdateEmailPrimaryOtpView,L as W3mUpdateEmailSecondaryOtpView,g as W3mUpdateEmailWalletView};
