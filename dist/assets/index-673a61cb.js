import{l as f,t as h,r as b,x as p,B as y}from"./index-a3470178.js";import{n as c,c as w,o as v}from"./if-defined-122c0166.js";var d;(function(t){t.Google="google",t.Github="github",t.Apple="apple",t.Facebook="facebook",t.X="x",t.Discord="discord",t.Farcaster="farcaster"})(d||(d={}));const m=f`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var x=globalThis&&globalThis.__decorate||function(t,o,i,l){var r=arguments.length,e=r<3?o:l===null?l=Object.getOwnPropertyDescriptor(o,i):l,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,o,i,l);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(e=(r<3?a(e):r>3?a(o,i,e):a(o,i))||e);return r>3&&e&&Object.defineProperty(o,i,e),e};let g=class extends b{constructor(){super(...arguments),this.logo="google"}render(){return p`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};g.styles=[h,m];x([c()],g.prototype,"logo",void 0);g=x([w("wui-logo")],g);const $=f`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var u=globalThis&&globalThis.__decorate||function(t,o,i,l){var r=arguments.length,e=r<3?o:l===null?l=Object.getOwnPropertyDescriptor(o,i):l,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,o,i,l);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(e=(r<3?a(e):r>3?a(o,i,e):a(o,i))||e);return r>3&&e&&Object.defineProperty(o,i,e),e};let s=class extends b{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return p`
      <button ?disabled=${this.disabled} tabindex=${v(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return this.align==="center"?p` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};s.styles=[h,y,$];u([c()],s.prototype,"logo",void 0);u([c()],s.prototype,"name",void 0);u([c()],s.prototype,"align",void 0);u([c()],s.prototype,"tabIdx",void 0);u([c({type:Boolean})],s.prototype,"disabled",void 0);s=u([w("wui-list-social")],s);export{d as S};
