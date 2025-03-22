import{l as d,t as p,a3 as u,r as m,x as g}from"./index-a3470178.js";import{n,c as f}from"./if-defined-122c0166.js";const b=d`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var c=globalThis&&globalThis.__decorate||function(o,t,r,s){var l=arguments.length,e=l<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,r):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(o,t,r,s);else for(var h=o.length-1;h>=0;h--)(a=o[h])&&(e=(l<3?a(e):l>3?a(t,r,e):a(t,r))||e);return l>3&&e&&Object.defineProperty(t,r,e),e};let i=class extends m{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,g`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};i.styles=[p,u,b];c([n()],i.prototype,"src",void 0);c([n()],i.prototype,"alt",void 0);c([n()],i.prototype,"size",void 0);i=c([f("wui-image")],i);
