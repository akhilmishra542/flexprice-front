import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const m=({title:p="Pricing Tiers",tiers:d})=>e.jsxs("div",{className:"border rounded-xl overflow-hidden bg-white w-full max-w-2xl",children:[e.jsx("div",{className:"p-4 border-b",children:e.jsx("h2",{className:"text-xl font-semibold",children:p})}),e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-100",children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left p-4",children:"Usage Range"}),e.jsx("th",{className:"text-left p-4",children:"Price"})]})}),e.jsx("tbody",{children:d.map((t,u)=>e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-4",children:t.upto}),e.jsx("td",{className:"p-4 font-medium",children:t.price})]},u))})]})]}),h={title:"Organisms/PricingTierTable",component:m,tags:["autodocs"]},r={args:{title:"API Usage Pricing",tiers:[{upto:"0 - 1,000 requests",price:"$0.10 / request"},{upto:"1,001 - 10,000 requests",price:"$0.08 / request"},{upto:"10,001+ requests",price:"$0.05 / request"}]}},s={args:{title:"Graduated Pricing",tiers:[{upto:"First 100 GB",price:"$0.12 / GB"},{upto:"Next 400 GB",price:"$0.09 / GB"},{upto:"500+ GB",price:"$0.05 / GB"}]}};var a,i,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'API Usage Pricing',
    tiers: [{
      upto: '0 - 1,000 requests',
      price: '$0.10 / request'
    }, {
      upto: '1,001 - 10,000 requests',
      price: '$0.08 / request'
    }, {
      upto: '10,001+ requests',
      price: '$0.05 / request'
    }]
  }
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var c,o,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Graduated Pricing',
    tiers: [{
      upto: 'First 100 GB',
      price: '$0.12 / GB'
    }, {
      upto: 'Next 400 GB',
      price: '$0.09 / GB'
    }, {
      upto: '500+ GB',
      price: '$0.05 / GB'
    }]
  }
}`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const G=["Default","GraduatedPricing"];export{r as Default,s as GraduatedPricing,G as __namedExportsOrder,h as default};
