import{i as f,r as m,x as p,c as a}from"./index-n_ZehpUP.js";import"./index-tLyCCnDv.js";import"./index-Be7GexJ2.js";import"./index-Dl-nto0A.js";import"./index-Br3p1NQg.js";import"./index-Cq5ArIrS.js";import"./index-C5WfdMvO.js";import"./if-defined-CqFZ3rMD.js";import"./index-amhbIFfC.js";const d=f`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,t,i,r){var n=arguments.length,e=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(o,t,i,r);else for(var c=o.length-1;c>=0;c--)(l=o[c])&&(e=(n<3?l(e):n>3?l(t,i,e):l(t,i))||e);return n>3&&e&&Object.defineProperty(t,i,e),e};let s=class extends m{render(){return p`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=d;s=u([a("w3m-transactions-view")],s);export{s as W3mTransactionsView};
