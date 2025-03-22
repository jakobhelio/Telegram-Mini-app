import{n as v,c as u,i as y,r as $,x as c}from"./index-n_ZehpUP.js";import{e as m,r as b,f as g,x,O as s,m as C}from"./index-tLyCCnDv.js";import{o as R}from"./if-defined-CqFZ3rMD.js";import{e as j,n as O}from"./index-D9AsQ2Ps.js";const P=m`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var k=function(l,e,r,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,n);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(o<3?i(t):o>3?i(e,r,t):i(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t};let d=class extends g{constructor(){super(...arguments),this.inputElementRef=j(),this.checked=void 0}render(){return x`
      <label>
        <input
          ${O(this.inputElementRef)}
          ?checked=${R(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("checkboxChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.checked,bubbles:!0,composed:!0}))}};d.styles=[b,P];k([v({type:Boolean})],d.prototype,"checked",void 0);d=k([u("wui-checkbox")],d);const T=y`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;var U=function(l,e,r,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,n);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(o<3?i(t):o>3?i(e,r,t):i(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t};let p=class extends ${render(){var o;const{termsConditionsUrl:e,privacyPolicyUrl:r}=s.state,n=(o=s.state.features)==null?void 0:o.legalCheckbox;return!e&&!r||!n?null:c`
      <wui-checkbox data-testid="wui-checkbox">
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=s.state;return e&&r?"and":""}termsTemplate(){const{termsConditionsUrl:e}=s.state;return e?c`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=s.state;return e?c`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}};p.styles=[T];p=U([u("w3m-legal-checkbox")],p);const W=m`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`;var E=function(l,e,r,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,n);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(o<3?i(t):o>3?i(e,r,t):i(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t};let h=class extends g{render(){return x`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};h.styles=[b,C,W];h=E([u("wui-ux-by-reown")],h);const B=y`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
    margin-top: var(--wui-spacing-s);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var L=function(l,e,r,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,n);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(o<3?i(t):o>3?i(e,r,t):i(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t};let w=class extends ${render(){var o;const{termsConditionsUrl:e,privacyPolicyUrl:r}=s.state,n=(o=s.state.features)==null?void 0:o.legalCheckbox;return!e&&!r||n?null:c`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        <wui-ux-by-reown></wui-ux-by-reown>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=s.state;return e&&r?"and":""}termsTemplate(){const{termsConditionsUrl:e}=s.state;return e?c`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=s.state;return e?c`<a href=${e}>Privacy Policy</a>`:null}};w.styles=[B];w=L([u("w3m-legal-footer")],w);const z=m`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var _=function(l,e,r,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,n);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(o<3?i(t):o>3?i(e,r,t):i(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t};let f=class extends g{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,n=36-e,o=116+n,t=245+n,i=360+n*1.75;return x`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${t}"
          stroke-dashoffset=${i}
        />
      </svg>
    `}};f.styles=[b,z];_([v({type:Number})],f.prototype,"radius",void 0);f=_([u("wui-loading-thumbnail")],f);
