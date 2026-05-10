import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{within as B,expect as r}from"./index-DH-M5T-F.js";import{S as a}from"./StatusBadge-Ber6pyn3.js";import"./index-yBjzXJbu.js";import"./badge-CCYA7ZLR.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";const va={title:"Atoms/StatusBadge",component:a,parameters:{layout:"centered",docs:{description:{component:"Domain-aware status chip built on top of the shadcn `Badge`. Pass any FlexPrice status string and the correct colour + label renders automatically."}}},decorators:[s=>e.jsx("div",{className:"flex items-center justify-center p-8",children:e.jsx(s,{})})],tags:["autodocs"],argTypes:{status:{description:"Domain status string — drives color and default label.",control:"select",options:["active","archived","draft","paid","pending","void","failed","cancelled","expired","trial","paused","processed"],table:{defaultValue:{summary:"active"}}},showDot:{description:"Show the coloured dot indicator before the label.",control:"boolean",table:{defaultValue:{summary:"true"}}},label:{description:"Override the auto-derived label text.",control:"text"},className:{control:"text"}}},n={args:{status:"active",showDot:!0},play:async({canvasElement:s})=>{const oa=B(s).getByText("Active");await r(oa).toBeInTheDocument()}},o={name:"Plan / Active",args:{status:"active"},play:async({canvasElement:s})=>{const t=B(s);await r(t.getByText("Active")).toBeInTheDocument()}},i={name:"Plan / Archived",args:{status:"archived"}},c={name:"Plan / Draft",args:{status:"draft"}},d={name:"Invoice / Paid",args:{status:"paid"},play:async({canvasElement:s})=>{const t=B(s);await r(t.getByText("Paid")).toBeInTheDocument()}},p={name:"Invoice / Pending",args:{status:"pending"}},u={name:"Invoice / Draft",args:{status:"draft"}},l={name:"Invoice / Void",args:{status:"void"}},m={name:"Invoice / Failed",args:{status:"failed"}},v={name:"Subscription / Active",args:{status:"active"}},g={name:"Subscription / Trial",args:{status:"trial"}},x={name:"Subscription / Paused",args:{status:"paused"}},f={name:"Subscription / Cancelled",args:{status:"cancelled"}},h={name:"Subscription / Expired",args:{status:"expired"}},y={args:{status:"active",showDot:!1}},w={args:{status:"active",label:"Live",showDot:!0},play:async({canvasElement:s})=>{const t=B(s);await r(t.getByText("Live")).toBeInTheDocument(),await r(t.queryByText("Active")).not.toBeInTheDocument()}},S={args:{status:"some-unknown-status"},play:async({canvasElement:s})=>{const t=B(s);await r(t.getByText("Unknown")).toBeInTheDocument()}},b={name:"Overview — All statuses",render:()=>e.jsxs("div",{className:"space-y-4 p-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2",children:"Plan"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{status:"active"}),e.jsx(a,{status:"draft"}),e.jsx(a,{status:"archived"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2",children:"Invoice"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{status:"paid"}),e.jsx(a,{status:"pending"}),e.jsx(a,{status:"draft"}),e.jsx(a,{status:"void"}),e.jsx(a,{status:"failed"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2",children:"Subscription"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{status:"active"}),e.jsx(a,{status:"trial"}),e.jsx(a,{status:"paused"}),e.jsx(a,{status:"cancelled"}),e.jsx(a,{status:"expired"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2",children:"Events"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{status:"processed"}),e.jsx(a,{status:"pending"}),e.jsx(a,{status:"failed"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2",children:"Without dot"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{status:"active",showDot:!1}),e.jsx(a,{status:"paid",showDot:!1}),e.jsx(a,{status:"failed",showDot:!1})]})]})]})};var D,j,P,I,T;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    status: 'active',
    showDot: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText('Active');
    await expect(badge).toBeInTheDocument();
  }
}`,...(P=(j=n.parameters)==null?void 0:j.docs)==null?void 0:P.source},description:{story:"Fully interactive playground — tweak every prop in the Controls panel.",...(T=(I=n.parameters)==null?void 0:I.docs)==null?void 0:T.description}}};var A,N,k,E,C;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Plan / Active',
  args: {
    status: 'active'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Active')).toBeInTheDocument();
  }
}`,...(k=(N=o.parameters)==null?void 0:N.docs)==null?void 0:k.source},description:{story:"Active plan — green. The most common state in the Plans table.",...(C=(E=o.parameters)==null?void 0:E.docs)==null?void 0:C.description}}};var F,U,V,L,O;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Plan / Archived',
  args: {
    status: 'archived'
  }
}`,...(V=(U=i.parameters)==null?void 0:U.docs)==null?void 0:V.source},description:{story:"Archived plan — gray. Shown when a plan is removed from the catalog.",...(O=(L=i.parameters)==null?void 0:L.docs)==null?void 0:O.description}}};var q,W,_,z,R;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Plan / Draft',
  args: {
    status: 'draft'
  }
}`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source},description:{story:"Draft plan — yellow. Plan created but not yet published.",...(R=(z=c.parameters)==null?void 0:z.docs)==null?void 0:R.description}}};var G,H,J,K,M;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Invoice / Paid',
  args: {
    status: 'paid'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Paid')).toBeInTheDocument();
  }
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source},description:{story:"Paid invoice — green. Payment confirmed.",...(M=(K=d.parameters)==null?void 0:K.docs)==null?void 0:M.description}}};var Q,X,Y,Z,$;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Invoice / Pending',
  args: {
    status: 'pending'
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Pending invoice — orange. Awaiting payment collection.",...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,ae,se,te,re;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Invoice / Draft',
  args: {
    status: 'draft'
  }
}`,...(se=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:"Draft invoice — yellow. Not yet finalized or sent.",...(re=(te=u.parameters)==null?void 0:te.docs)==null?void 0:re.description}}};var ne,oe,ie,ce,de;l.parameters={...l.parameters,docs:{...(ne=l.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Invoice / Void',
  args: {
    status: 'void'
  }
}`,...(ie=(oe=l.parameters)==null?void 0:oe.docs)==null?void 0:ie.source},description:{story:"Void invoice — gray. Cancelled before payment.",...(de=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var pe,ue,le,me,ve;m.parameters={...m.parameters,docs:{...(pe=m.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Invoice / Failed',
  args: {
    status: 'failed'
  }
}`,...(le=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:le.source},description:{story:"Failed invoice — red. Payment attempt failed.",...(ve=(me=m.parameters)==null?void 0:me.docs)==null?void 0:ve.description}}};var ge,xe,fe,he,ye;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Subscription / Active',
  args: {
    status: 'active'
  }
}`,...(fe=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:fe.source},description:{story:"Active subscription — green.",...(ye=(he=v.parameters)==null?void 0:he.docs)==null?void 0:ye.description}}};var we,Se,be,Be,De;g.parameters={...g.parameters,docs:{...(we=g.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Subscription / Trial',
  args: {
    status: 'trial'
  }
}`,...(be=(Se=g.parameters)==null?void 0:Se.docs)==null?void 0:be.source},description:{story:"Trial subscription — blue. Customer in a free trial period.",...(De=(Be=g.parameters)==null?void 0:Be.docs)==null?void 0:De.description}}};var je,Pe,Ie,Te,Ae;x.parameters={...x.parameters,docs:{...(je=x.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Subscription / Paused',
  args: {
    status: 'paused'
  }
}`,...(Ie=(Pe=x.parameters)==null?void 0:Pe.docs)==null?void 0:Ie.source},description:{story:"Paused subscription — yellow. Billing temporarily halted.",...(Ae=(Te=x.parameters)==null?void 0:Te.docs)==null?void 0:Ae.description}}};var Ne,ke,Ee,Ce,Fe;f.parameters={...f.parameters,docs:{...(Ne=f.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Subscription / Cancelled',
  args: {
    status: 'cancelled'
  }
}`,...(Ee=(ke=f.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source},description:{story:"Cancelled subscription — red.",...(Fe=(Ce=f.parameters)==null?void 0:Ce.docs)==null?void 0:Fe.description}}};var Ue,Ve,Le,Oe,qe;h.parameters={...h.parameters,docs:{...(Ue=h.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: 'Subscription / Expired',
  args: {
    status: 'expired'
  }
}`,...(Le=(Ve=h.parameters)==null?void 0:Ve.docs)==null?void 0:Le.source},description:{story:"Expired subscription — gray. Past end date with no renewal.",...(qe=(Oe=h.parameters)==null?void 0:Oe.docs)==null?void 0:qe.description}}};var We,_e,ze,Re,Ge;y.parameters={...y.parameters,docs:{...(We=y.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    status: 'active',
    showDot: false
  }
}`,...(ze=(_e=y.parameters)==null?void 0:_e.docs)==null?void 0:ze.source},description:{story:"No dot — for compact UIs where the color alone is sufficient.",...(Ge=(Re=y.parameters)==null?void 0:Re.docs)==null?void 0:Ge.description}}};var He,Je,Ke,Me,Qe;w.parameters={...w.parameters,docs:{...(He=w.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    status: 'active',
    label: 'Live',
    showDot: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Should show the custom label, not the default "Active"
    await expect(canvas.getByText('Live')).toBeInTheDocument();
    await expect(canvas.queryByText('Active')).not.toBeInTheDocument();
  }
}`,...(Ke=(Je=w.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source},description:{story:"Custom label override — useful when the API returns a different string.",...(Qe=(Me=w.parameters)==null?void 0:Me.docs)==null?void 0:Qe.description}}};var Xe,Ye,Ze,$e,ea;S.parameters={...S.parameters,docs:{...(Xe=S.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    status: 'some-unknown-status' as StatusType
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Unknown')).toBeInTheDocument();
  }
}`,...(Ze=(Ye=S.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source},description:{story:'Unknown status — falls back to a neutral gray "Unknown" chip.',...(ea=($e=S.parameters)==null?void 0:$e.docs)==null?void 0:ea.description}}};var aa,sa,ta,ra,na;b.parameters={...b.parameters,docs:{...(aa=b.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: 'Overview — All statuses',
  render: () => <div className="space-y-4 p-4">\r
            <div>\r
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">\r
                    Plan\r
                </p>\r
                <div className="flex flex-wrap gap-2">\r
                    <StatusBadge status="active" />\r
                    <StatusBadge status="draft" />\r
                    <StatusBadge status="archived" />\r
                </div>\r
            </div>\r
\r
            <div>\r
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">\r
                    Invoice\r
                </p>\r
                <div className="flex flex-wrap gap-2">\r
                    <StatusBadge status="paid" />\r
                    <StatusBadge status="pending" />\r
                    <StatusBadge status="draft" />\r
                    <StatusBadge status="void" />\r
                    <StatusBadge status="failed" />\r
                </div>\r
            </div>\r
\r
            <div>\r
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">\r
                    Subscription\r
                </p>\r
                <div className="flex flex-wrap gap-2">\r
                    <StatusBadge status="active" />\r
                    <StatusBadge status="trial" />\r
                    <StatusBadge status="paused" />\r
                    <StatusBadge status="cancelled" />\r
                    <StatusBadge status="expired" />\r
                </div>\r
            </div>\r
\r
            <div>\r
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">\r
                    Events\r
                </p>\r
                <div className="flex flex-wrap gap-2">\r
                    <StatusBadge status="processed" />\r
                    <StatusBadge status="pending" />\r
                    <StatusBadge status="failed" />\r
                </div>\r
            </div>\r
\r
            <div>\r
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">\r
                    Without dot\r
                </p>\r
                <div className="flex flex-wrap gap-2">\r
                    <StatusBadge status="active" showDot={false} />\r
                    <StatusBadge status="paid" showDot={false} />\r
                    <StatusBadge status="failed" showDot={false} />\r
                </div>\r
            </div>\r
        </div>
}`,...(ta=(sa=b.parameters)==null?void 0:sa.docs)==null?void 0:ta.source},description:{story:"All statuses side by side — the full FlexPrice status vocabulary.",...(na=(ra=b.parameters)==null?void 0:ra.docs)==null?void 0:na.description}}};const ga=["Default","PlanActive","PlanArchived","PlanDraft","InvoicePaid","InvoicePending","InvoiceDraft","InvoiceVoid","InvoiceFailed","SubscriptionActive","SubscriptionTrial","SubscriptionPaused","SubscriptionCancelled","SubscriptionExpired","NoDot","CustomLabel","UnknownStatus","AllStatuses"];export{b as AllStatuses,w as CustomLabel,n as Default,u as InvoiceDraft,m as InvoiceFailed,d as InvoicePaid,p as InvoicePending,l as InvoiceVoid,y as NoDot,o as PlanActive,i as PlanArchived,c as PlanDraft,v as SubscriptionActive,f as SubscriptionCancelled,h as SubscriptionExpired,x as SubscriptionPaused,g as SubscriptionTrial,S as UnknownStatus,ga as __namedExportsOrder,va as default};
