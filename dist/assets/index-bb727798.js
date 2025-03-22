import{a4 as x,l as O,t as W,r as I,x as y}from"./index-a3470178.js";import{n as $,c as M}from"./if-defined-122c0166.js";import"./index-0aaaa7d9.js";import{b as N}from"./browser-e933942f.js";const A=.1,k=2.5,w=7;function E(l,r,h){return l===r?!1:(l-r<0?r-l:l-r)<=h+A}function T(l,r){const h=Array.prototype.slice.call(N.create(l,{errorCorrectionLevel:r}).modules.data,0),u=Math.sqrt(h.length);return h.reduce((p,d,f)=>(f%u===0?p.push([d]):p[p.length-1].push(d))&&p,[])}const D={generate({uri:l,size:r,logoSize:h,dotColor:u="#141414"}){const p="transparent",f=[],c=T(l,"Q"),a=r/c.length,z=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];z.forEach(({x:o,y:t})=>{const s=(c.length-w)*a*o,e=(c.length-w)*a*t,n=.45;for(let i=0;i<z.length;i+=1){const m=a*(w-i*2);f.push(x`
            <rect
              fill=${i===2?u:p}
              width=${i===0?m-5:m}
              rx= ${i===0?(m-5)*n:m*n}
              ry= ${i===0?(m-5)*n:m*n}
              stroke=${u}
              stroke-width=${i===0?5:0}
              height=${i===0?m-5:m}
              x= ${i===0?e+a*i+5/2:e+a*i}
              y= ${i===0?s+a*i+5/2:s+a*i}
            />
          `)}});const C=Math.floor((h+25)/a),R=c.length/2-C/2,S=c.length/2+C/2-1,_=[];c.forEach((o,t)=>{o.forEach((s,e)=>{if(c[t][e]&&!(t<w&&e<w||t>c.length-(w+1)&&e<w||t<w&&e>c.length-(w+1))&&!(t>R&&t<S&&e>R&&e<S)){const n=t*a+a/2,i=e*a+a/2;_.push([n,i])}})});const b={};return _.forEach(([o,t])=>{var s;b[o]?(s=b[o])==null||s.push(t):b[o]=[t]}),Object.entries(b).map(([o,t])=>{const s=t.filter(e=>t.every(n=>!E(e,n,a)));return[Number(o),s]}).forEach(([o,t])=>{t.forEach(s=>{f.push(x`<circle cx=${o} cy=${s} fill=${u} r=${a/k} />`)})}),Object.entries(b).filter(([o,t])=>t.length>1).map(([o,t])=>{const s=t.filter(e=>t.some(n=>E(e,n,a)));return[Number(o),s]}).map(([o,t])=>{t.sort((e,n)=>e<n?-1:1);const s=[];for(const e of t){const n=s.find(i=>i.some(m=>E(e,m,a)));n?n.push(e):s.push([e])}return[o,s.map(e=>[e[0],e[e.length-1]])]}).forEach(([o,t])=>{t.forEach(([s,e])=>{f.push(x`
              <line
                x1=${o}
                x2=${o}
                y1=${s}
                y2=${e}
                stroke=${u}
                stroke-width=${a/(k/2)}
                stroke-linecap="round"
              />
            `)})}),f}},Q=O`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var v=globalThis&&globalThis.__decorate||function(l,r,h,u){var p=arguments.length,d=p<3?r:u===null?u=Object.getOwnPropertyDescriptor(r,h):u,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(l,r,h,u);else for(var c=l.length-1;c>=0;c--)(f=l[c])&&(d=(p<3?f(d):p>3?f(r,h,d):f(r,h))||d);return p>3&&d&&Object.defineProperty(r,h,d),d};const q="#3396ff";let g=class extends I{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??q}
    `,y`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const r=this.theme==="light"?this.size:this.size-32;return x`
      <svg height=${r} width=${r}>
        ${D.generate({uri:this.uri,size:r,logoSize:this.arenaClear?0:r/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?y`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?y`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:y`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};g.styles=[W,Q];v([$()],g.prototype,"uri",void 0);v([$({type:Number})],g.prototype,"size",void 0);v([$()],g.prototype,"theme",void 0);v([$()],g.prototype,"imageSrc",void 0);v([$()],g.prototype,"alt",void 0);v([$()],g.prototype,"color",void 0);v([$({type:Boolean})],g.prototype,"arenaClear",void 0);v([$({type:Boolean})],g.prototype,"farcaster",void 0);g=v([M("wui-qr-code")],g);
