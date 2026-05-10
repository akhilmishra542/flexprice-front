import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const h=({used:l,total:o,label:f})=>{const s=Math.min(l/o*100,100),b=s>=90?"bg-red-500":s>=70?"bg-yellow-500":"bg-primary";return e.jsxs("div",{className:"space-y-2 w-full",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("span",{children:f}),e.jsxs("span",{className:"text-muted-foreground",children:[l," / ",o]})]}),e.jsx("div",{className:"h-3 w-full overflow-hidden rounded-full bg-muted",children:e.jsx("div",{className:`h-full transition-all duration-300 ${b}`,style:{width:`${s}%`}})}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:[s.toFixed(0),"% used"]})]})},N={title:"Molecules/UsageBar",component:h,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{label:"API Usage",used:350,total:1e3}},r={args:{label:"Credits",used:920,total:1e3}},t={args:{label:"Storage",used:1e3,total:1e3}};var n,d,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'API Usage',
    used: 350,
    total: 1000
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,i,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Credits',
    used: 920,
    total: 1000
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,g,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Storage',
    used: 1000,
    total: 1000
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const v=["Default","NearlyFull","Full"];export{a as Default,t as Full,r as NearlyFull,v as __namedExportsOrder,N as default};
