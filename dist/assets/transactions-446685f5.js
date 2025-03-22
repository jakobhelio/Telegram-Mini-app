import{l as a,r as f,x as m}from"./index-a3470178.js";import{c as p}from"./if-defined-122c0166.js";import"./index-a7c9a585.js";import"./index-59041964.js";import"./index-80b43f45.js";import"./index-21ede41c.js";import"./index-64e916b6.js";import"./index-0aaaa7d9.js";const w=a`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=globalThis&&globalThis.__decorate||function(o,e,i,r){var l=arguments.length,t=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var s=o.length-1;s>=0;s--)(n=o[s])&&(t=(l<3?n(t):l>3?n(e,i,t):n(e,i))||t);return l>3&&t&&Object.defineProperty(e,i,t),t};let c=class extends f{render(){return m`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=w;c=u([p("w3m-transactions-view")],c);export{c as W3mTransactionsView};
