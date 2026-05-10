import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{I as j}from"./Input-BsyldzLz.js";import"./index-yBjzXJbu.js";import"./index-BO-NyGGJ.js";import"./utils-BLSKlp9E.js";const L={title:"Atoms/Input",component:j,parameters:{layout:"padded"},decorators:[N=>l.jsx("div",{className:"w-[400px] p-4",children:l.jsx(N,{})})],tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","number","formatted-number","integer"]},size:{control:"select",options:["sm","default","lg"]},disabled:{control:"boolean"},type:{control:"select",options:["text","email","password","number"]}}},e={args:{placeholder:"Enter text here"}},r={args:{label:"Email",placeholder:"Enter your email",type:"email"}},a={args:{label:"Password",type:"password",error:"Password must be at least 8 characters",placeholder:"Enter your password"}},s={args:{label:"Username",placeholder:"Enter your username",disabled:!0}},o={args:{label:"Full Name",placeholder:"Enter your full name",fullWidth:!0},parameters:{layout:"padded"}},t={args:{label:"Name",value:"John Doe",placeholder:"Enter your name"}};var n,c,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here'
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var i,h,b;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    error: 'Password must be at least 8 characters',
    placeholder: 'Enter your password'
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,y,E;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    disabled: true
  }
}`,...(E=(y=s.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var f,x,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var W,D,S;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    value: 'John Doe',
    placeholder: 'Enter your name'
  }
}`,...(S=(D=t.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const U=["Default","WithLabel","WithError","Disabled","FullWidth","WithValue"];export{e as Default,s as Disabled,o as FullWidth,a as WithError,r as WithLabel,t as WithValue,U as __namedExportsOrder,L as default};
