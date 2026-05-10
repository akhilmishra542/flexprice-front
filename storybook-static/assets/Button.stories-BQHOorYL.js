import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{within as o,expect as s,userEvent as T}from"./index-DH-M5T-F.js";import{B as t}from"./Button-Cs9WtX7G.js";import{P as i,T as Hn}from"./trash-2-BS1KAH1E.js";import"./index-yBjzXJbu.js";import"./index-BO-NyGGJ.js";import"./index-Bvh1CrgY.js";import"./createLucideIcon-DbYa1qKA.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";const aa={title:"Atoms/Button",component:t,parameters:{layout:"centered",docs:{description:{component:"Core button component supporting 7 variants, 5 sizes, loading state, and prefix/suffix icons. Built on top of `class-variance-authority` and Radix `Slot`."}}},decorators:[a=>e.jsx("div",{className:"flex items-center justify-center p-6",children:e.jsx(a,{})})],tags:["autodocs"],argTypes:{variant:{description:"Visual style of the button.",control:"select",options:["default","black","destructive","outline","secondary","ghost","link"],table:{defaultValue:{summary:"default"}}},size:{description:"Size of the button.",control:"select",options:["default","sm","lg","icon","xs"],table:{defaultValue:{summary:"default"}}},isLoading:{description:"When true, shows a spinner and disables interaction.",control:"boolean",table:{defaultValue:{summary:"false"}}},disabled:{description:"Disables the button without showing a spinner.",control:"boolean",table:{defaultValue:{summary:"false"}}},children:{description:"Button label content.",control:"text"},asChild:{description:"Renders as a child element via Radix Slot (e.g. wrapping a `<Link>`).",control:"boolean",table:{defaultValue:{summary:"false"}}},onClick:{description:"Click handler.",action:"clicked"}}},l={args:{children:"Click Me",variant:"default",size:"default",isLoading:!1,disabled:!1},play:async({canvasElement:a,args:r})=>{const c=o(a).getByRole("button");await s(c).toBeInTheDocument(),await s(c).not.toBeDisabled(),await T.click(c),await s(r.onClick).toHaveBeenCalledTimes(1)}},j={args:{children:"Click Me"},play:async({canvasElement:a})=>{const n=o(a).getByRole("button");await T.click(n),await s(n).toBeInTheDocument()}},d={args:{children:"Create Plan",variant:"default"}},u={args:{children:"Cancel",variant:"secondary"}},p={args:{children:"View Details",variant:"ghost"}},m={args:{children:"Export CSV",variant:"outline"}},h={args:{children:"Delete Customer",variant:"destructive",prefixIcon:e.jsx(Hn,{})},play:async({canvasElement:a})=>{const n=o(a).getByRole("button",{name:/delete customer/i});await s(n).toBeInTheDocument(),await s(n).not.toBeDisabled()}},v={args:{children:"Publish",variant:"black"}},g={args:{children:"Learn more",variant:"link"}},b={args:{children:"Add",size:"xs"}},y={args:{children:"Filter",size:"sm"}},f={args:{children:"Save Changes",size:"default"}},x={args:{children:"Upgrade to Pro",size:"lg"}},B={args:{size:"icon",children:e.jsx(i,{}),"aria-label":"Add item"},play:async({canvasElement:a})=>{const n=o(a).getByRole("button",{name:/add item/i});await s(n).toBeInTheDocument()}},w={args:{children:"Save Changes",variant:"default",isLoading:!0},play:async({canvasElement:a})=>{const r=o(a),n=r.getByRole("button");await s(n).toBeDisabled();const c=n.querySelector("svg");await s(c).toBeInTheDocument(),await s(r.queryByText("Save Changes")).not.toBeInTheDocument()}},S={args:{children:"Submit",disabled:!0},play:async({canvasElement:a})=>{const n=o(a).getByRole("button");await s(n).toBeDisabled(),await T.click(n,{pointerEventsCheck:0})}},k={args:{children:"Add Customer",variant:"default",prefixIcon:e.jsx(i,{})}},D={args:{children:"Next Step",variant:"outline",suffixIcon:e.jsx(i,{})}},I={args:{children:"Add & Continue",variant:"default",prefixIcon:e.jsx(i,{}),suffixIcon:e.jsx(i,{})}},C={name:"Pattern — Add item",args:{children:"Add Plan",variant:"default",size:"default",prefixIcon:e.jsx(i,{})},play:async({canvasElement:a})=>{const n=o(a).getByRole("button",{name:/add plan/i});await s(n).toBeInTheDocument(),await T.click(n)}},A={name:"Pattern — Delete with loading",args:{children:"Deleting...",variant:"destructive",isLoading:!0},play:async({canvasElement:a})=>{const n=o(a).getByRole("button");await s(n).toBeDisabled()}},z={name:"Overview — All variants",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(t,{variant:"default",children:"Default"}),e.jsx(t,{variant:"black",children:"Black"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"outline",children:"Outline"}),e.jsx(t,{variant:"ghost",children:"Ghost"}),e.jsx(t,{variant:"destructive",children:"Destructive"}),e.jsx(t,{variant:"link",children:"Link"})]})},E={name:"Overview — All sizes",render:()=>e.jsxs("div",{className:"flex flex-wrap items-end gap-3",children:[e.jsx(t,{size:"xs",children:"Extra Small"}),e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"default",children:"Default"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"icon","aria-label":"Add item",children:e.jsx(i,{})})]})},L={name:"Overview — All states",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(t,{children:"Normal"}),e.jsx(t,{isLoading:!0,children:"Loading"}),e.jsx(t,{disabled:!0,children:"Disabled"})]})};var P,R,O,V,N;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    variant: 'default',
    size: 'default',
    isLoading: false,
    disabled: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // Button should be present and enabled
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();

    // Click and verify the onClick handler fires
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(O=(R=l.parameters)==null?void 0:R.docs)==null?void 0:O.source},description:{story:`The fully interactive playground story. Use the Controls panel to tweak\r
every prop and see the result live.`,...(N=(V=l.parameters)==null?void 0:V.docs)==null?void 0:N.description}}};var W,U,G;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Click Me'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
  }
}`,...(G=(U=j.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var M,q,F,H,_;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: 'Create Plan',
    variant: 'default'
  }
}`,...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.source},description:{story:"The primary action button. Used for the main CTA on every page.",...(_=(H=d.parameters)==null?void 0:H.docs)==null?void 0:_.description}}};var J,K,Q,X,Y;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: 'Cancel',
    variant: 'secondary'
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"For secondary actions that sit alongside a primary button.",...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,$,ee,ne,ae;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: 'View Details',
    variant: 'ghost'
  }
}`,...(ee=($=p.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Ghost buttons blend into the background — used in tables and toolbars.",...(ae=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:ae.description}}};var te,se,re,oe,ie;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    children: 'Export CSV',
    variant: 'outline'
  }
}`,...(re=(se=m.parameters)==null?void 0:se.docs)==null?void 0:re.source},description:{story:"Outline adds a visible border without a fill — good for neutral actions.",...(ie=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:ie.description}}};var ce,le,de,ue,pe;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    children: 'Delete Customer',
    variant: 'destructive',
    prefixIcon: <Trash2 />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /delete customer/i
    });
    await expect(button).toBeInTheDocument();
    // Verify destructive styling is applied (button should be clickable)
    await expect(button).not.toBeDisabled();
  }
}`,...(de=(le=h.parameters)==null?void 0:le.docs)==null?void 0:de.source},description:{story:`Destructive buttons signal irreversible actions like deletions.\r
Always pair with a confirmation dialog in production.`,...(pe=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:pe.description}}};var me,he,ve,ge,be;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    children: 'Publish',
    variant: 'black'
  }
}`,...(ve=(he=v.parameters)==null?void 0:he.docs)==null?void 0:ve.source},description:{story:"Black variant — high contrast, used for emphasis actions.",...(be=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:be.description}}};var ye,fe,xe,Be,we;g.parameters={...g.parameters,docs:{...(ye=g.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    children: 'Learn more',
    variant: 'link'
  }
}`,...(xe=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:xe.source},description:{story:"Link variant renders as a styled anchor-like button.",...(we=(Be=g.parameters)==null?void 0:Be.docs)==null?void 0:we.description}}};var Se,ke,De,Ie,Ce;b.parameters={...b.parameters,docs:{...(Se=b.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    children: 'Add',
    size: 'xs'
  }
}`,...(De=(ke=b.parameters)==null?void 0:ke.docs)==null?void 0:De.source},description:{story:"Extra small — used in dense tables and inline actions.",...(Ce=(Ie=b.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.description}}};var Ae,ze,Ee,Le,je;y.parameters={...y.parameters,docs:{...(Ae=y.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    children: 'Filter',
    size: 'sm'
  }
}`,...(Ee=(ze=y.parameters)==null?void 0:ze.docs)==null?void 0:Ee.source},description:{story:"Small — used in cards and secondary toolbars.",...(je=(Le=y.parameters)==null?void 0:Le.docs)==null?void 0:je.description}}};var Te,Pe,Re,Oe,Ve;f.parameters={...f.parameters,docs:{...(Te=f.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    children: 'Save Changes',
    size: 'default'
  }
}`,...(Re=(Pe=f.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source},description:{story:"Default size — the standard button used across most surfaces.",...(Ve=(Oe=f.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.description}}};var Ne,We,Ue,Ge,Me;x.parameters={...x.parameters,docs:{...(Ne=x.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    children: 'Upgrade to Pro',
    size: 'lg'
  }
}`,...(Ue=(We=x.parameters)==null?void 0:We.docs)==null?void 0:Ue.source},description:{story:"Large — used for prominent CTAs like plan upgrade prompts.",...(Me=(Ge=x.parameters)==null?void 0:Ge.docs)==null?void 0:Me.description}}};var qe,Fe,He,_e,Je;B.parameters={...B.parameters,docs:{...(qe=B.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    size: 'icon',
    children: <Plus />,
    'aria-label': 'Add item'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Icon-only button should be accessible via aria-label
    const button = canvas.getByRole('button', {
      name: /add item/i
    });
    await expect(button).toBeInTheDocument();
  }
}`,...(He=(Fe=B.parameters)==null?void 0:Fe.docs)==null?void 0:He.source},description:{story:"Icon-only button. Always set an `aria-label` in production for accessibility.",...(Je=(_e=B.parameters)==null?void 0:_e.docs)==null?void 0:Je.description}}};var Ke,Qe,Xe,Ye,Ze;w.parameters={...w.parameters,docs:{...(Ke=w.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    children: 'Save Changes',
    variant: 'default',
    isLoading: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // Button must be disabled while loading
    await expect(button).toBeDisabled();

    // Spinner SVG should be visible — Button renders LoaderCircleIcon when isLoading
    const spinner = button.querySelector('svg');
    await expect(spinner).toBeInTheDocument();

    // Label text should NOT be visible when loading
    await expect(canvas.queryByText('Save Changes')).not.toBeInTheDocument();
  }
}`,...(Xe=(Qe=w.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source},description:{story:"The `isLoading` prop replaces children with a spinner and prevents clicks.\r\nUse this while awaiting an async action (API call, form submit).",...(Ze=(Ye=w.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.description}}};var $e,en,nn,an,tn;S.parameters={...S.parameters,docs:{...($e=S.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    children: 'Submit',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeDisabled();
    // Clicking a disabled button should not fire onClick
    await userEvent.click(button, {
      pointerEventsCheck: 0
    });
  }
}`,...(nn=(en=S.parameters)==null?void 0:en.docs)==null?void 0:nn.source},description:{story:"Disabled state — prevents interaction without a loading indicator.",...(tn=(an=S.parameters)==null?void 0:an.docs)==null?void 0:tn.description}}};var sn,rn,on,cn,ln;k.parameters={...k.parameters,docs:{...(sn=k.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  args: {
    children: 'Add Customer',
    variant: 'default',
    prefixIcon: <Plus />
  }
}`,...(on=(rn=k.parameters)==null?void 0:rn.docs)==null?void 0:on.source},description:{story:"Use `prefixIcon` for icons that appear before the label.",...(ln=(cn=k.parameters)==null?void 0:cn.docs)==null?void 0:ln.description}}};var dn,un,pn,mn,hn;D.parameters={...D.parameters,docs:{...(dn=D.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  args: {
    children: 'Next Step',
    variant: 'outline',
    suffixIcon: <Plus />
  }
}`,...(pn=(un=D.parameters)==null?void 0:un.docs)==null?void 0:pn.source},description:{story:"Use `suffixIcon` for icons that appear after the label (e.g. arrows, chevrons).",...(hn=(mn=D.parameters)==null?void 0:mn.docs)==null?void 0:hn.description}}};var vn,gn,bn,yn,fn;I.parameters={...I.parameters,docs:{...(vn=I.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  args: {
    children: 'Add & Continue',
    variant: 'default',
    prefixIcon: <Plus />,
    suffixIcon: <Plus />
  }
}`,...(bn=(gn=I.parameters)==null?void 0:gn.docs)==null?void 0:bn.source},description:{story:"Both prefix and suffix icons together.",...(fn=(yn=I.parameters)==null?void 0:yn.docs)==null?void 0:fn.description}}};var xn,Bn,wn,Sn,kn;C.parameters={...C.parameters,docs:{...(xn=C.parameters)==null?void 0:xn.docs,source:{originalSource:`{
  name: 'Pattern — Add item',
  args: {
    children: 'Add Plan',
    variant: 'default',
    size: 'default',
    prefixIcon: <Plus />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /add plan/i
    });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
  }
}`,...(wn=(Bn=C.parameters)==null?void 0:Bn.docs)==null?void 0:wn.source},description:{story:'The standard "Add" button used across FlexPrice tables and empty states.',...(kn=(Sn=C.parameters)==null?void 0:Sn.docs)==null?void 0:kn.description}}};var Dn,In,Cn,An,zn;A.parameters={...A.parameters,docs:{...(Dn=A.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
  name: 'Pattern — Delete with loading',
  args: {
    children: 'Deleting...',
    variant: 'destructive',
    isLoading: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeDisabled();
  }
}`,...(Cn=(In=A.parameters)==null?void 0:In.docs)==null?void 0:Cn.source},description:{story:"Destructive action with loading feedback — common pattern for delete confirmations.",...(zn=(An=A.parameters)==null?void 0:An.docs)==null?void 0:zn.description}}};var En,Ln,jn,Tn,Pn;z.parameters={...z.parameters,docs:{...(En=z.parameters)==null?void 0:En.docs,source:{originalSource:`{
  name: 'Overview — All variants',
  render: () => <div className='flex flex-wrap items-center gap-3'>\r
            <Button variant='default'>Default</Button>\r
            <Button variant='black'>Black</Button>\r
            <Button variant='secondary'>Secondary</Button>\r
            <Button variant='outline'>Outline</Button>\r
            <Button variant='ghost'>Ghost</Button>\r
            <Button variant='destructive'>Destructive</Button>\r
            <Button variant='link'>Link</Button>\r
        </div>
}`,...(jn=(Ln=z.parameters)==null?void 0:Ln.docs)==null?void 0:jn.source},description:{story:"All variants shown side-by-side for a visual overview.",...(Pn=(Tn=z.parameters)==null?void 0:Tn.docs)==null?void 0:Pn.description}}};var Rn,On,Vn,Nn,Wn;E.parameters={...E.parameters,docs:{...(Rn=E.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
  name: 'Overview — All sizes',
  render: () => <div className='flex flex-wrap items-end gap-3'>\r
            <Button size='xs'>Extra Small</Button>\r
            <Button size='sm'>Small</Button>\r
            <Button size='default'>Default</Button>\r
            <Button size='lg'>Large</Button>\r
            <Button size='icon' aria-label='Add item'>\r
                <Plus />\r
            </Button>\r
        </div>
}`,...(Vn=(On=E.parameters)==null?void 0:On.docs)==null?void 0:Vn.source},description:{story:"All sizes shown side-by-side.",...(Wn=(Nn=E.parameters)==null?void 0:Nn.docs)==null?void 0:Wn.description}}};var Un,Gn,Mn,qn,Fn;L.parameters={...L.parameters,docs:{...(Un=L.parameters)==null?void 0:Un.docs,source:{originalSource:`{
  name: 'Overview — All states',
  render: () => <div className='flex flex-wrap items-center gap-3'>\r
            <Button>Normal</Button>\r
            <Button isLoading>Loading</Button>\r
            <Button disabled>Disabled</Button>\r
        </div>
}`,...(Mn=(Gn=L.parameters)==null?void 0:Gn.docs)==null?void 0:Mn.source},description:{story:"All interactive states in a single view.",...(Fn=(qn=L.parameters)==null?void 0:qn.docs)==null?void 0:Fn.description}}};const ta=["Default","ClickInteraction","Primary","Secondary","Ghost","Outline","Destructive","Black","Link","ExtraSmall","Small","Medium","Large","IconOnly","Loading","Disabled","WithPrefixIcon","WithSuffixIcon","WithBothIcons","AddItem","DeleteWithLoading","AllVariants","AllSizes","AllStates"];export{C as AddItem,E as AllSizes,L as AllStates,z as AllVariants,v as Black,j as ClickInteraction,l as Default,A as DeleteWithLoading,h as Destructive,S as Disabled,b as ExtraSmall,p as Ghost,B as IconOnly,x as Large,g as Link,w as Loading,f as Medium,m as Outline,d as Primary,u as Secondary,y as Small,I as WithBothIcons,k as WithPrefixIcon,D as WithSuffixIcon,ta as __namedExportsOrder,aa as default};
