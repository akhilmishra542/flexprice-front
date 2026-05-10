import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{within as C,expect as i}from"./index-DH-M5T-F.js";import{r as t}from"./index-BO-NyGGJ.js";import{F as n,g as f,A as N,h as A,B as Pa,T as ja}from"./AsyncMultiSearchableSelect-7de0B-vJ.js";import{c as Ca}from"./createLucideIcon-DbYa1qKA.js";import{C as Da}from"./credit-card-CACGtguc.js";import"./index-yBjzXJbu.js";import"./utils-BLSKlp9E.js";import"./index-Bvh1CrgY.js";import"./tooltip-DF5uoWUo.js";import"./index-CSSP-iJI.js";import"./index-B6ujFmsw.js";import"./x-D9-VSKan.js";import"./search-Cls85VhU.js";import"./badge-CCYA7ZLR.js";import"./index-1evVQkiP.js";import"./chevron-right-DRlIQycv.js";import"./chevron-left-DJBCdx6a.js";import"./QueryClientProvider-s4f4cRO4.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=Ca("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=Ca("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),u=[{value:"free",label:"Free",description:"$0 / month"},{value:"starter",label:"Starter",description:"$20 / month"},{value:"pro",label:"Pro",description:"$99 / month"},{value:"enterprise",label:"Enterprise",description:"Custom pricing"}],fa=[{value:"active",label:"Active",prefixIcon:a.jsx("span",{className:"h-2 w-2 rounded-full bg-green-500 inline-block"})},{value:"archived",label:"Archived",prefixIcon:a.jsx("span",{className:"h-2 w-2 rounded-full bg-gray-400 inline-block"})},{value:"draft",label:"Draft",prefixIcon:a.jsx("span",{className:"h-2 w-2 rounded-full bg-yellow-400 inline-block"})}],M=[{value:"paid",label:"Paid"},{value:"pending",label:"Pending"},{value:"draft",label:"Draft"},{value:"void",label:"Void",disabled:!0},{value:"failed",label:"Failed"}],_=[{value:"api_calls",label:"API Calls",description:"Per request metering",prefixIcon:a.jsx(Oa,{className:"h-4 w-4"})},{value:"seats",label:"Seats",description:"Per user metering",prefixIcon:a.jsx(Ea,{className:"h-4 w-4"})},{value:"storage",label:"Storage",description:"GB consumed",prefixIcon:a.jsx(Da,{className:"h-4 w-4"})},{value:"orgs",label:"Orgs",description:"Per org metering",prefixIcon:a.jsx(Pa,{className:"h-4 w-4"})},{value:"events",label:"Events",description:"Event stream metering",prefixIcon:a.jsx(ja,{className:"h-4 w-4"})}],Ia=[{value:"usd",label:"USD",suffixIcon:a.jsx("span",{className:"text-xs text-muted-foreground",children:"$"})},{value:"eur",label:"EUR",suffixIcon:a.jsx("span",{className:"text-xs text-muted-foreground",children:"€"})},{value:"gbp",label:"GBP",suffixIcon:a.jsx("span",{className:"text-xs text-muted-foreground",children:"£"})},{value:"inr",label:"INR",suffixIcon:a.jsx("span",{className:"text-xs text-muted-foreground",children:"₹"})}],Fa=[{id:"c1",name:"Acme Corp",email:"billing@acme.com"},{id:"c2",name:"Stripe Inc",email:"billing@stripe.com"},{id:"c3",name:"Vercel Ltd",email:"billing@vercel.com"},{id:"c4",name:"Linear GmbH",email:"billing@linear.app"},{id:"c5",name:"Notion AI",email:"billing@notion.so"}],l=e=>new Promise(r=>setTimeout(()=>{const s=Fa.filter(o=>!e.trim()||o.name.toLowerCase().includes(e.toLowerCase())||o.email.toLowerCase().includes(e.toLowerCase()));r(s.map(o=>({value:o.id,label:o.name,description:o.email,data:o})))},400)),c={valueExtractor:e=>e.id,labelExtractor:e=>e.name,descriptionExtractor:e=>e.email},Za={title:"Atoms/Select",component:n,parameters:{layout:"padded"},decorators:[e=>a.jsx("div",{className:"w-[320px] p-4",children:a.jsx(e,{})})],tags:["autodocs"],argTypes:{options:{control:!1},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},description:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},isRadio:{control:"boolean"},required:{control:"boolean"},hideSelectedTick:{control:"boolean"}}},d={render:e=>{const[r,s]=t.useState("");return a.jsx(n,{...e,value:r,onChange:s})},args:{options:u,placeholder:"Select a plan",label:"Billing Plan"},play:async({canvasElement:e})=>{const s=C(e).getByRole("combobox");await i(s).toBeInTheDocument(),await i(s).not.toBeDisabled()}},m={render:e=>{const[r,s]=t.useState("");return a.jsx(n,{...e,value:r,onChange:s})},args:{options:u,label:"Billing Plan",description:"Choose the plan to assign this customer.",placeholder:"Select a plan",required:!0}},p={render:e=>{const[r,s]=t.useState("");return a.jsx(n,{...e,value:r,onChange:s})},args:{options:fa,label:"Status",placeholder:"Select status",error:"Please select a status to continue."}},h={render:e=>{const[r,s]=t.useState("pro");return a.jsx(n,{...e,value:r,onChange:s})},args:{options:u,label:"Current Plan",placeholder:"Select a plan"}},S={render:e=>{const[r,s]=t.useState("active");return a.jsx(n,{...e,value:r,onChange:s})},args:{options:fa,label:"Status",disabled:!0},play:async({canvasElement:e})=>{const s=C(e).getByRole("combobox");await i(s).toBeDisabled()}},g={render:e=>{const[r,s]=t.useState("");return a.jsx(n,{...e,value:r,onChange:s})},args:{options:_,label:"Feature",placeholder:"Select a feature"}},v={name:"Pattern — Currency picker",render:e=>{const[r,s]=t.useState("usd");return a.jsx(n,{...e,value:r,onChange:s})},args:{options:Ia,label:"Currency",placeholder:"Select currency"}},x={render:e=>{const[r,s]=t.useState("");return a.jsx(n,{...e,value:r,onChange:s})},args:{options:M,label:"Invoice Status",placeholder:"Filter by status",isRadio:!0}},b={render:e=>{const[r,s]=t.useState("");return a.jsx(n,{...e,value:r,onChange:s})},args:{options:M,label:"Invoice Status",placeholder:"Select status"}},y={render:e=>{const[r,s]=t.useState("");return a.jsx(n,{...e,value:r,onChange:s})},args:{options:[],label:"Customer",placeholder:"No customers yet",noOptionsText:"No customers found."}},V={name:"SearchableSelect / Default",render:e=>{const[r,s]=t.useState("");return a.jsx("div",{className:"w-[320px] p-4",children:a.jsx(f,{...e,value:r,onChange:s})})},args:{options:_,label:"Feature",placeholder:"Select a feature",searchPlaceholder:"Search features...",description:"Choose the metering feature for this plan."}},w={name:"SearchableSelect / With error",render:e=>{const[r,s]=t.useState("");return a.jsx("div",{className:"w-[320px] p-4",children:a.jsx(f,{...e,value:r,onChange:s})})},args:{options:u,label:"Plan",placeholder:"Select a plan",error:"A plan selection is required."}},P={name:"SearchableSelect / Disabled",render:e=>{const[r,s]=t.useState("starter");return a.jsx("div",{className:"w-[320px] p-4",children:a.jsx(f,{...e,value:r,onChange:s})})},args:{options:u,label:"Plan",disabled:!0},play:async({canvasElement:e})=>{const s=C(e).getByRole("button");await i(s).toBeDisabled()}},j={name:"SearchableSelect / Radio style",render:e=>{const[r,s]=t.useState("");return a.jsx("div",{className:"w-[320px] p-4",children:a.jsx(f,{...e,value:r,onChange:s})})},args:{options:M,label:"Invoice Status",placeholder:"Filter by status",isRadio:!0,searchPlaceholder:"Search status..."}},D={name:"AsyncSearchableSelect / Default",render:()=>{const[e,r]=t.useState(void 0);return a.jsxs("div",{className:"w-[320px] p-4",children:[a.jsx(N,{search:{searchFn:l,placeholder:"Search customers..."},extractors:c,display:{label:"Customer",placeholder:"Select a customer",description:"Search by name or email."},value:e,onChange:r}),e&&a.jsxs("p",{className:"mt-2 text-xs text-muted-foreground",children:["Selected: ",a.jsx("strong",{children:e.name})," (",e.email,")"]})]})}},O={name:"AsyncSearchableSelect / With error",render:()=>{const[e,r]=t.useState(void 0);return a.jsx("div",{className:"w-[320px] p-4",children:a.jsx(N,{search:{searchFn:l},extractors:c,display:{label:"Customer",placeholder:"Select a customer",error:"A customer selection is required."},value:e,onChange:r})})}},E={name:"AsyncSearchableSelect / Disabled",render:()=>{const[e]=t.useState({id:"c1",name:"Acme Corp",email:"billing@acme.com"});return a.jsx("div",{className:"w-[320px] p-4",children:a.jsx(N,{search:{searchFn:l},extractors:c,display:{label:"Customer",placeholder:"Select a customer"},value:e,onChange:()=>{},disabled:!0})})},play:async({canvasElement:e})=>{const s=C(e).getByRole("button");await i(s).toBeDisabled()}},I={name:"AsyncSearchableSelect / Radio style",render:()=>{const[e,r]=t.useState(void 0);return a.jsx("div",{className:"w-[320px] p-4",children:a.jsx(N,{search:{searchFn:l},extractors:c,display:{label:"Customer",placeholder:"Select a customer"},options:{isRadio:!0},value:e,onChange:r})})}},F={name:"AsyncMultiSearchableSelect / Default",render:()=>{const[e,r]=t.useState([]);return a.jsxs("div",{className:"w-[400px] p-4",children:[a.jsx(A,{search:{searchFn:l,placeholder:"Search customers..."},extractors:c,display:{label:"Customers",placeholder:"Select customers",description:"Select one or more customers to assign."},value:e,onChange:r}),e.length>0&&a.jsxs("p",{className:"mt-2 text-xs text-muted-foreground",children:[e.length," selected: ",e.map(s=>s.name).join(", ")]})]})}},T={name:"AsyncMultiSearchableSelect / Pre-selected values",render:()=>{const[e,r]=t.useState([{id:"c1",name:"Acme Corp",email:"billing@acme.com"},{id:"c2",name:"Stripe Inc",email:"billing@stripe.com"},{id:"c3",name:"Vercel Ltd",email:"billing@vercel.com"},{id:"c4",name:"Linear GmbH",email:"billing@linear.app"}]);return a.jsxs("div",{className:"w-[400px] p-4",children:[a.jsx(A,{search:{searchFn:l},extractors:c,display:{label:"Customers",placeholder:"Select customers"},options:{maxCount:3},value:e,onChange:r}),a.jsx("p",{className:"mt-2 text-xs text-muted-foreground",children:"4 selected — 3 shown as badges, 1 in +N overflow"})]})}},R={name:"AsyncMultiSearchableSelect / Disabled",render:()=>{const[e]=t.useState([{id:"c1",name:"Acme Corp",email:"billing@acme.com"}]);return a.jsx("div",{className:"w-[400px] p-4",children:a.jsx(A,{search:{searchFn:l},extractors:c,display:{label:"Customers",placeholder:"Select customers"},value:e,onChange:()=>{},disabled:!0})})},play:async({canvasElement:e})=>{const s=C(e).getByRole("button");await i(s).toBeDisabled()}},k={name:"AsyncMultiSearchableSelect / Empty state",render:()=>{const[e,r]=t.useState([]);return a.jsx("div",{className:"w-[400px] p-4",children:a.jsx(A,{search:{searchFn:l},extractors:c,display:{label:"Customers",placeholder:"No customers selected",error:"Select at least one customer."},options:{emptyText:"No customers match your search."},value:e,onChange:r})})}},B={name:"Overview — All Select variants",render:()=>{const[e,r]=t.useState(""),[s,o]=t.useState(""),[Na,Aa]=t.useState(void 0),[Va,wa]=t.useState([]);return a.jsxs("div",{className:"grid grid-cols-2 gap-6 p-4 w-[700px]",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide",children:"Select (Radix)"}),a.jsx(n,{options:u,value:e,onChange:r,label:"Plan",placeholder:"Select a plan"})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide",children:"SearchableSelect"}),a.jsx(f,{options:_,value:s,onChange:o,label:"Feature",placeholder:"Select a feature"})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide",children:"AsyncSearchableSelect"}),a.jsx(N,{search:{searchFn:l},extractors:c,display:{label:"Customer",placeholder:"Search & select"},value:Na,onChange:Aa})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide",children:"AsyncMultiSearchableSelect"}),a.jsx(A,{search:{searchFn:l},extractors:c,display:{label:"Customers",placeholder:"Search & multi-select"},value:Va,onChange:wa})]})]})}};var L,W,U,q,G;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: PLAN_OPTIONS,
    placeholder: 'Select a plan',
    label: 'Billing Plan'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    await expect(trigger).toBeInTheDocument();
    await expect(trigger).not.toBeDisabled();
  }
}`,...(U=(W=d.parameters)==null?void 0:W.docs)==null?void 0:U.source},description:{story:"Default controlled select — the standard FlexPrice dropdown.",...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};var H,$,Y,z,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: PLAN_OPTIONS,
    label: 'Billing Plan',
    description: 'Choose the plan to assign this customer.',
    placeholder: 'Select a plan',
    required: true
  }
}`,...(Y=($=m.parameters)==null?void 0:$.docs)==null?void 0:Y.source},description:{story:"With a description and required indicator — used in forms.",...(K=(z=m.parameters)==null?void 0:z.docs)==null?void 0:K.description}}};var J,Q,X,Z,ee;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: STATUS_OPTIONS,
    label: 'Status',
    placeholder: 'Select status',
    error: 'Please select a status to continue.'
  }
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Error state — shown after failed validation (e.g. form submit).",...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ae,re,se,te,ne;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('pro');
    return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: PLAN_OPTIONS,
    label: 'Current Plan',
    placeholder: 'Select a plan'
  }
}`,...(se=(re=h.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"Pre-selected value — simulates an edit form with existing data.",...(ne=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};var le,ce,oe,ie,ue;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('active');
    return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: STATUS_OPTIONS,
    label: 'Status',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    await expect(trigger).toBeDisabled();
  }
}`,...(oe=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:oe.source},description:{story:"Disabled — read-only view, e.g. locked subscription fields.",...(ue=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ue.description}}};var de,me,pe,he,Se;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: FEATURE_OPTIONS,
    label: 'Feature',
    placeholder: 'Select a feature'
  }
}`,...(pe=(me=g.parameters)==null?void 0:me.docs)==null?void 0:pe.source},description:{story:"Options with icons — used for feature selects and currency pickers.",...(Se=(he=g.parameters)==null?void 0:he.docs)==null?void 0:Se.description}}};var ge,ve,xe,be,ye;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Pattern — Currency picker',
  render: args => {
    const [value, setValue] = useState('usd');
    return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: CURRENCY_OPTIONS,
    label: 'Currency',
    placeholder: 'Select currency'
  }
}`,...(xe=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:xe.source},description:{story:"Currency picker with suffix icons — seen in pricing tier forms.",...(ye=(be=v.parameters)==null?void 0:be.docs)==null?void 0:ye.description}}};var Ce,fe,Ne,Ae,Ve;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: INVOICE_STATUS_OPTIONS,
    label: 'Invoice Status',
    placeholder: 'Filter by status',
    isRadio: true
  }
}`,...(Ne=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:Ne.source},description:{story:"Radio-style indicators — used in filter panels and settings forms.",...(Ve=(Ae=x.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.description}}};var we,Pe,je,De,Oe;b.parameters={...b.parameters,docs:{...(we=b.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: INVOICE_STATUS_OPTIONS,
    label: 'Invoice Status',
    placeholder: 'Select status'
  }
}`,...(je=(Pe=b.parameters)==null?void 0:Pe.docs)==null?void 0:je.source},description:{story:'With a disabled option — e.g. "Void" invoices cannot be re-selected.',...(Oe=(De=b.parameters)==null?void 0:De.docs)==null?void 0:Oe.description}}};var Ee,Ie,Fe,Te,Re;y.parameters={...y.parameters,docs:{...(Ee=y.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: [],
    label: 'Customer',
    placeholder: 'No customers yet',
    noOptionsText: 'No customers found.'
  }
}`,...(Fe=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source},description:{story:"Empty options list — graceful no-data state.",...(Re=(Te=y.parameters)==null?void 0:Te.docs)==null?void 0:Re.description}}};var ke,Be,Me;V.parameters={...V.parameters,docs:{...(ke=V.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'SearchableSelect / Default',
  render: args => {
    const [value, setValue] = useState('');
    return <div className='w-[320px] p-4'>\r
                <SearchableSelect {...args} value={value} onChange={setValue} />\r
            </div>;
  },
  args: {
    options: FEATURE_OPTIONS,
    label: 'Feature',
    placeholder: 'Select a feature',
    searchPlaceholder: 'Search features...',
    description: 'Choose the metering feature for this plan.'
  }
}`,...(Me=(Be=V.parameters)==null?void 0:Be.docs)==null?void 0:Me.source}}};var _e,Le,We;w.parameters={...w.parameters,docs:{...(_e=w.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'SearchableSelect / With error',
  render: args => {
    const [value, setValue] = useState('');
    return <div className='w-[320px] p-4'>\r
                <SearchableSelect {...args} value={value} onChange={setValue} />\r
            </div>;
  },
  args: {
    options: PLAN_OPTIONS,
    label: 'Plan',
    placeholder: 'Select a plan',
    error: 'A plan selection is required.'
  }
}`,...(We=(Le=w.parameters)==null?void 0:Le.docs)==null?void 0:We.source}}};var Ue,qe,Ge;P.parameters={...P.parameters,docs:{...(Ue=P.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: 'SearchableSelect / Disabled',
  render: args => {
    const [value, setValue] = useState('starter');
    return <div className='w-[320px] p-4'>\r
                <SearchableSelect {...args} value={value} onChange={setValue} />\r
            </div>;
  },
  args: {
    options: PLAN_OPTIONS,
    label: 'Plan',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button');
    await expect(trigger).toBeDisabled();
  }
}`,...(Ge=(qe=P.parameters)==null?void 0:qe.docs)==null?void 0:Ge.source}}};var He,$e,Ye;j.parameters={...j.parameters,docs:{...(He=j.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'SearchableSelect / Radio style',
  render: args => {
    const [value, setValue] = useState('');
    return <div className='w-[320px] p-4'>\r
                <SearchableSelect {...args} value={value} onChange={setValue} />\r
            </div>;
  },
  args: {
    options: INVOICE_STATUS_OPTIONS,
    label: 'Invoice Status',
    placeholder: 'Filter by status',
    isRadio: true,
    searchPlaceholder: 'Search status...'
  }
}`,...(Ye=($e=j.parameters)==null?void 0:$e.docs)==null?void 0:Ye.source}}};var ze,Ke,Je;D.parameters={...D.parameters,docs:{...(ze=D.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'AsyncSearchableSelect / Default',
  render: () => {
    const [value, setValue] = useState<CustomerData | undefined>(undefined);
    return <div className='w-[320px] p-4'>\r
                <AsyncSearchableSelect<CustomerData> search={{
        searchFn: mockSearchCustomers,
        placeholder: 'Search customers...'
      }} extractors={customerExtractors} display={{
        label: 'Customer',
        placeholder: 'Select a customer',
        description: 'Search by name or email.'
      }} value={value} onChange={setValue} />\r
                {value && <p className='mt-2 text-xs text-muted-foreground'>\r
                        Selected: <strong>{value.name}</strong> ({value.email})\r
                    </p>}\r
            </div>;
  }
}`,...(Je=(Ke=D.parameters)==null?void 0:Ke.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;O.parameters={...O.parameters,docs:{...(Qe=O.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  name: 'AsyncSearchableSelect / With error',
  render: () => {
    const [value, setValue] = useState<CustomerData | undefined>(undefined);
    return <div className='w-[320px] p-4'>\r
                <AsyncSearchableSelect<CustomerData> search={{
        searchFn: mockSearchCustomers
      }} extractors={customerExtractors} display={{
        label: 'Customer',
        placeholder: 'Select a customer',
        error: 'A customer selection is required.'
      }} value={value} onChange={setValue} />\r
            </div>;
  }
}`,...(Ze=(Xe=O.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var ea,aa,ra;E.parameters={...E.parameters,docs:{...(ea=E.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: 'AsyncSearchableSelect / Disabled',
  render: () => {
    const [value] = useState<CustomerData>({
      id: 'c1',
      name: 'Acme Corp',
      email: 'billing@acme.com'
    });
    return <div className='w-[320px] p-4'>\r
                <AsyncSearchableSelect<CustomerData> search={{
        searchFn: mockSearchCustomers
      }} extractors={customerExtractors} display={{
        label: 'Customer',
        placeholder: 'Select a customer'
      }} value={value} onChange={() => {}} disabled />\r
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button');
    await expect(trigger).toBeDisabled();
  }
}`,...(ra=(aa=E.parameters)==null?void 0:aa.docs)==null?void 0:ra.source}}};var sa,ta,na;I.parameters={...I.parameters,docs:{...(sa=I.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  name: 'AsyncSearchableSelect / Radio style',
  render: () => {
    const [value, setValue] = useState<CustomerData | undefined>(undefined);
    return <div className='w-[320px] p-4'>\r
                <AsyncSearchableSelect<CustomerData> search={{
        searchFn: mockSearchCustomers
      }} extractors={customerExtractors} display={{
        label: 'Customer',
        placeholder: 'Select a customer'
      }} options={{
        isRadio: true
      }} value={value} onChange={setValue} />\r
            </div>;
  }
}`,...(na=(ta=I.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var la,ca,oa;F.parameters={...F.parameters,docs:{...(la=F.parameters)==null?void 0:la.docs,source:{originalSource:`{
  name: 'AsyncMultiSearchableSelect / Default',
  render: () => {
    const [value, setValue] = useState<CustomerData[]>([]);
    return <div className='w-[400px] p-4'>\r
                <AsyncMultiSearchableSelect<CustomerData> search={{
        searchFn: mockSearchCustomers,
        placeholder: 'Search customers...'
      }} extractors={customerExtractors} display={{
        label: 'Customers',
        placeholder: 'Select customers',
        description: 'Select one or more customers to assign.'
      }} value={value} onChange={setValue} />\r
                {value.length > 0 && <p className='mt-2 text-xs text-muted-foreground'>\r
                        {value.length} selected: {value.map(c => c.name).join(', ')}\r
                    </p>}\r
            </div>;
  }
}`,...(oa=(ca=F.parameters)==null?void 0:ca.docs)==null?void 0:oa.source}}};var ia,ua,da;T.parameters={...T.parameters,docs:{...(ia=T.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  name: 'AsyncMultiSearchableSelect / Pre-selected values',
  render: () => {
    const [value, setValue] = useState<CustomerData[]>([{
      id: 'c1',
      name: 'Acme Corp',
      email: 'billing@acme.com'
    }, {
      id: 'c2',
      name: 'Stripe Inc',
      email: 'billing@stripe.com'
    }, {
      id: 'c3',
      name: 'Vercel Ltd',
      email: 'billing@vercel.com'
    }, {
      id: 'c4',
      name: 'Linear GmbH',
      email: 'billing@linear.app'
    }]);
    return <div className='w-[400px] p-4'>\r
                <AsyncMultiSearchableSelect<CustomerData> search={{
        searchFn: mockSearchCustomers
      }} extractors={customerExtractors} display={{
        label: 'Customers',
        placeholder: 'Select customers'
      }} options={{
        maxCount: 3
      }} value={value} onChange={setValue} />\r
                <p className='mt-2 text-xs text-muted-foreground'>4 selected — 3 shown as badges, 1 in +N overflow</p>\r
            </div>;
  }
}`,...(da=(ua=T.parameters)==null?void 0:ua.docs)==null?void 0:da.source}}};var ma,pa,ha;R.parameters={...R.parameters,docs:{...(ma=R.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  name: 'AsyncMultiSearchableSelect / Disabled',
  render: () => {
    const [value] = useState<CustomerData[]>([{
      id: 'c1',
      name: 'Acme Corp',
      email: 'billing@acme.com'
    }]);
    return <div className='w-[400px] p-4'>\r
                <AsyncMultiSearchableSelect<CustomerData> search={{
        searchFn: mockSearchCustomers
      }} extractors={customerExtractors} display={{
        label: 'Customers',
        placeholder: 'Select customers'
      }} value={value} onChange={() => {}} disabled />\r
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button');
    await expect(trigger).toBeDisabled();
  }
}`,...(ha=(pa=R.parameters)==null?void 0:pa.docs)==null?void 0:ha.source}}};var Sa,ga,va;k.parameters={...k.parameters,docs:{...(Sa=k.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  name: 'AsyncMultiSearchableSelect / Empty state',
  render: () => {
    const [value, setValue] = useState<CustomerData[]>([]);
    return <div className='w-[400px] p-4'>\r
                <AsyncMultiSearchableSelect<CustomerData> search={{
        searchFn: mockSearchCustomers
      }} extractors={customerExtractors} display={{
        label: 'Customers',
        placeholder: 'No customers selected',
        error: 'Select at least one customer.'
      }} options={{
        emptyText: 'No customers match your search.'
      }} value={value} onChange={setValue} />\r
            </div>;
  }
}`,...(va=(ga=k.parameters)==null?void 0:ga.docs)==null?void 0:va.source}}};var xa,ba,ya;B.parameters={...B.parameters,docs:{...(xa=B.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  name: 'Overview — All Select variants',
  render: () => {
    const [v1, setV1] = useState('');
    const [v2, setV2] = useState('');
    const [v3, setV3] = useState<CustomerData | undefined>(undefined);
    const [v4, setV4] = useState<CustomerData[]>([]);
    return <div className='grid grid-cols-2 gap-6 p-4 w-[700px]'>\r
                <div>\r
                    <p className='text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide'>Select (Radix)</p>\r
                    <FlexPriceSelect options={PLAN_OPTIONS} value={v1} onChange={setV1} label='Plan' placeholder='Select a plan' />\r
                </div>\r
                <div>\r
                    <p className='text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide'>SearchableSelect</p>\r
                    <SearchableSelect options={FEATURE_OPTIONS} value={v2} onChange={setV2} label='Feature' placeholder='Select a feature' />\r
                </div>\r
                <div>\r
                    <p className='text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide'>AsyncSearchableSelect</p>\r
                    <AsyncSearchableSelect<CustomerData> search={{
          searchFn: mockSearchCustomers
        }} extractors={customerExtractors} display={{
          label: 'Customer',
          placeholder: 'Search & select'
        }} value={v3} onChange={setV3} />\r
                </div>\r
                <div>\r
                    <p className='text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide'>AsyncMultiSearchableSelect</p>\r
                    <AsyncMultiSearchableSelect<CustomerData> search={{
          searchFn: mockSearchCustomers
        }} extractors={customerExtractors} display={{
          label: 'Customers',
          placeholder: 'Search & multi-select'
        }} value={v4} onChange={setV4} />\r
                </div>\r
            </div>;
  }
}`,...(ya=(ba=B.parameters)==null?void 0:ba.docs)==null?void 0:ya.source}}};const er=["Default","WithLabelAndDescription","WithError","WithPreselectedValue","Disabled","WithIcons","CurrencyPicker","RadioStyle","WithDisabledOption","NoOptions","Searchable","SearchableWithError","SearchableDisabled","SearchableRadio","Async","AsyncWithError","AsyncDisabled","AsyncRadio","AsyncMulti","AsyncMultiPreselected","AsyncMultiDisabled","AsyncMultiEmpty","AllVariantsOverview"];export{B as AllVariantsOverview,D as Async,E as AsyncDisabled,F as AsyncMulti,R as AsyncMultiDisabled,k as AsyncMultiEmpty,T as AsyncMultiPreselected,I as AsyncRadio,O as AsyncWithError,v as CurrencyPicker,d as Default,S as Disabled,y as NoOptions,x as RadioStyle,V as Searchable,P as SearchableDisabled,j as SearchableRadio,w as SearchableWithError,b as WithDisabledOption,p as WithError,g as WithIcons,m as WithLabelAndDescription,h as WithPreselectedValue,er as __namedExportsOrder,Za as default};
