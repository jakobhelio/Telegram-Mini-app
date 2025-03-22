import{l as h,t as g,B as p,r as v,x}from"./index-a3470178.js";import{n as l,c as y}from"./if-defined-122c0166.js";const f=h`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var i=globalThis&&globalThis.__decorate||function(b,e,t,n){var a=arguments.length,r=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(b,e,t,n);else for(var s=b.length-1;s>=0;s--)(c=b[s])&&(r=(a<3?c(r):a>3?c(e,t,r):c(e,t))||r);return a>3&&r&&Object.defineProperty(e,t,r),r};let o=class extends v{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t=this.size==="lg",n=this.size==="xl",a=t?"12%":"16%",r=t?"xxs":n?"s":"3xl",c=this.background==="gray",s=this.background==="opaque",u=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let d=`var(--wui-color-${this.backgroundColor})`;return u?d=`var(--wui-icon-box-bg-${this.backgroundColor})`:c&&(d=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${d};
       --local-bg-mix: ${u||c?"100%":a};
       --local-border-radius: var(--wui-border-radius-${r});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,x` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};o.styles=[g,p,f];i([l()],o.prototype,"size",void 0);i([l()],o.prototype,"backgroundColor",void 0);i([l()],o.prototype,"iconColor",void 0);i([l()],o.prototype,"iconSize",void 0);i([l()],o.prototype,"background",void 0);i([l({type:Boolean})],o.prototype,"border",void 0);i([l()],o.prototype,"borderColor",void 0);i([l()],o.prototype,"icon",void 0);o=i([y("wui-icon-box")],o);
