import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{S}from"./search-Cls85VhU.js";import{X as g}from"./x-D9-VSKan.js";import"./index-yBjzXJbu.js";import"./createLucideIcon-DbYa1qKA.js";import"./index-BO-NyGGJ.js";const j=({value:o="",placeholder:b="Search...",disabled:f,onChange:e})=>r.jsxs("div",{className:"flex w-full items-center rounded-lg border px-3 py-2 bg-background",children:[r.jsx(S,{className:"h-4 w-4 text-muted-foreground mr-2"}),r.jsx("input",{value:o,disabled:f,placeholder:b,onChange:h=>e==null?void 0:e(h.target.value),className:"flex-1 bg-transparent outline-none text-sm"}),o&&r.jsx("button",{onClick:()=>e==null?void 0:e(""),children:r.jsx(g,{className:"h-4 w-4 text-muted-foreground"})})]}),B={title:"Molecules/SearchBar",component:j,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{placeholder:"Search customers..."}},a={args:{value:"FlexPrice"}},t={args:{disabled:!0,placeholder:"Disabled search..."}};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search customers...'
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,u,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 'FlexPrice'
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var p,n,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled search...'
  }
}`,...(x=(n=t.parameters)==null?void 0:n.docs)==null?void 0:x.source}}};const E=["Default","WithText","Disabled"];export{s as Default,t as Disabled,a as WithText,E as __namedExportsOrder,B as default};
