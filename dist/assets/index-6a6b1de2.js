import{l as u,t as m,r as h,x as c,O as s,B as $}from"./index-a3470178.js";import{n as x,c as p,o as T}from"./if-defined-122c0166.js";import{e as k,n as _}from"./index-fa796e28.js";const C=u`
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
`;var v=globalThis&&globalThis.__decorate||function(l,e,r,o){var n=arguments.length,t=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,o);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(n<3?i(t):n>3?i(e,r,t):i(e,r))||t);return n>3&&t&&Object.defineProperty(e,r,t),t};let f=class extends h{constructor(){super(...arguments),this.inputElementRef=k(),this.checked=void 0}render(){return c`
      <label>
        <input
          ${_(this.inputElementRef)}
          ?checked=${T(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("checkboxChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.checked,bubbles:!0,composed:!0}))}};f.styles=[m,C];v([x({type:Boolean})],f.prototype,"checked",void 0);f=v([p("wui-checkbox")],f);const R=u`
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
`;var j=globalThis&&globalThis.__decorate||function(l,e,r,o){var n=arguments.length,t=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,o);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(n<3?i(t):n>3?i(e,r,t):i(e,r))||t);return n>3&&t&&Object.defineProperty(e,r,t),t};let b=class extends h{render(){var n;const{termsConditionsUrl:e,privacyPolicyUrl:r}=s.state,o=(n=s.state.features)==null?void 0:n.legalCheckbox;return!e&&!r||!o?null:c`
      <wui-checkbox data-testid="wui-checkbox">
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=s.state;return e&&r?"and":""}termsTemplate(){const{termsConditionsUrl:e}=s.state;return e?c`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=s.state;return e?c`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}};b.styles=[R];b=j([p("w3m-legal-checkbox")],b);const O=u`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`;var P=globalThis&&globalThis.__decorate||function(l,e,r,o){var n=arguments.length,t=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,o);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(n<3?i(t):n>3?i(e,r,t):i(e,r))||t);return n>3&&t&&Object.defineProperty(e,r,t),t};let g=class extends h{render(){return c`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};g.styles=[m,$,O];g=P([p("wui-ux-by-reown")],g);const U=u`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
    margin-top: var(--wui-spacing-s);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var W=globalThis&&globalThis.__decorate||function(l,e,r,o){var n=arguments.length,t=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,o);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(n<3?i(t):n>3?i(e,r,t):i(e,r))||t);return n>3&&t&&Object.defineProperty(e,r,t),t};let w=class extends h{render(){var n;const{termsConditionsUrl:e,privacyPolicyUrl:r}=s.state,o=(n=s.state.features)==null?void 0:n.legalCheckbox;return!e&&!r||o?null:c`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        <wui-ux-by-reown></wui-ux-by-reown>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=s.state;return e&&r?"and":""}termsTemplate(){const{termsConditionsUrl:e}=s.state;return e?c`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=s.state;return e?c`<a href=${e}>Privacy Policy</a>`:null}};w.styles=[U];w=W([p("w3m-legal-footer")],w);const B=u`
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
`;var y=globalThis&&globalThis.__decorate||function(l,e,r,o){var n=arguments.length,t=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,o);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(t=(n<3?i(t):n>3?i(e,r,t):i(e,r))||t);return n>3&&t&&Object.defineProperty(e,r,t),t};let d=class extends h{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,o=36-e,n=116+o,t=245+o,i=360+o*1.75;return c`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${n} ${t}"
          stroke-dashoffset=${i}
        />
      </svg>
    `}};d.styles=[m,B];y([x({type:Number})],d.prototype,"radius",void 0);d=y([p("wui-loading-thumbnail")],d);
