import{j as i}from"./index-D9-GaziI.js";import"./core.esm-B4FyPw5J.js";import"./iframe-BN_d-WNz.js";const D={title:"Components/UiChipGroup",tags:["autodocs"],render:e=>i("ui-chip-group",{size:e.size,orientation:e.orientation,multiple:e.multiple,disabled:e.disabled,children:[i("ui-chip",{value:"react",children:"React"}),i("ui-chip",{value:"vue",children:"Vue"}),i("ui-chip",{value:"angular",children:"Angular"}),i("ui-chip",{value:"svelte",children:"Svelte"})]}),argTypes:{size:{control:"select",options:["sm","base","lg"],description:"Size variant"},orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation for keyboard navigation"},multiple:{control:"boolean",description:"Allow multiple selections (default: true for chips)"},disabled:{control:"boolean",description:"Whether the entire group is disabled"}},args:{size:"base",orientation:"horizontal",multiple:!0,disabled:!1}},r={},a={render:()=>i("ui-chip-group",{children:[i("ui-chip",{value:"js",removable:!0,children:"JavaScript"}),i("ui-chip",{value:"ts",removable:!0,children:"TypeScript"}),i("ui-chip",{value:"py",removable:!0,children:"Python"}),i("ui-chip",{value:"go",removable:!0,children:"Go"})]})},c={render:()=>i("ui-chip-group",{children:[i("ui-chip",{value:"default",variant:"default",children:"Default"}),i("ui-chip",{value:"primary",variant:"primary",children:"Primary"}),i("ui-chip",{value:"success",variant:"success",children:"Success"}),i("ui-chip",{value:"warning",variant:"warning",children:"Warning"}),i("ui-chip",{value:"error",variant:"error",children:"Error"})]})},u={render:()=>i("ui-chip-group",{children:[i("ui-chip",{value:"react",variant:"primary",removable:!0,children:[i("i",{slot:"icon-start",class:"fa-brands fa-react"}),"React"]}),i("ui-chip",{value:"vue",variant:"success",removable:!0,children:[i("i",{slot:"icon-start",class:"fa-brands fa-vuejs"}),"Vue"]}),i("ui-chip",{value:"angular",variant:"error",removable:!0,children:[i("i",{slot:"icon-start",class:"fa-brands fa-angular"}),"Angular"]})]})},l={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i("div",{children:[i("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px"},children:"Small"}),i("ui-chip-group",{size:"sm",children:[i("ui-chip",{value:"a",children:"Chip A"}),i("ui-chip",{value:"b",children:"Chip B"}),i("ui-chip",{value:"c",children:"Chip C"})]})]}),i("div",{children:[i("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px"},children:"Base"}),i("ui-chip-group",{size:"base",children:[i("ui-chip",{value:"a",children:"Chip A"}),i("ui-chip",{value:"b",children:"Chip B"}),i("ui-chip",{value:"c",children:"Chip C"})]})]}),i("div",{children:[i("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px"},children:"Large"}),i("ui-chip-group",{size:"lg",children:[i("ui-chip",{value:"a",children:"Chip A"}),i("ui-chip",{value:"b",children:"Chip B"}),i("ui-chip",{value:"c",children:"Chip C"})]})]})]})},p={args:{multiple:!1},render:e=>i("ui-chip-group",{multiple:e.multiple,children:[i("ui-chip",{value:"option1",children:"Option 1"}),i("ui-chip",{value:"option2",children:"Option 2"}),i("ui-chip",{value:"option3",children:"Option 3"})]})};var n,o,t;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var s,h,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <ui-chip-group>
      <ui-chip value="js" removable={true}>JavaScript</ui-chip>
      <ui-chip value="ts" removable={true}>TypeScript</ui-chip>
      <ui-chip value="py" removable={true}>Python</ui-chip>
      <ui-chip value="go" removable={true}>Go</ui-chip>
    </ui-chip-group>
}`,...(d=(h=a.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var v,m,g;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ui-chip-group>
      <ui-chip value="default" variant="default">Default</ui-chip>
      <ui-chip value="primary" variant="primary">Primary</ui-chip>
      <ui-chip value="success" variant="success">Success</ui-chip>
      <ui-chip value="warning" variant="warning">Warning</ui-chip>
      <ui-chip value="error" variant="error">Error</ui-chip>
    </ui-chip-group>
}`,...(g=(m=c.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,f,y;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <ui-chip-group>
      <ui-chip value="react" variant="primary" removable={true}>
        <i slot="icon-start" class="fa-brands fa-react"></i>
        React
      </ui-chip>
      <ui-chip value="vue" variant="success" removable={true}>
        <i slot="icon-start" class="fa-brands fa-vuejs"></i>
        Vue
      </ui-chip>
      <ui-chip value="angular" variant="error" removable={true}>
        <i slot="icon-start" class="fa-brands fa-angular"></i>
        Angular
      </ui-chip>
    </ui-chip-group>
}`,...(y=(f=u.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,S,x;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '14px'
      }}>Small</label>
        <ui-chip-group size="sm">
          <ui-chip value="a">Chip A</ui-chip>
          <ui-chip value="b">Chip B</ui-chip>
          <ui-chip value="c">Chip C</ui-chip>
        </ui-chip-group>
      </div>

      <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '14px'
      }}>Base</label>
        <ui-chip-group size="base">
          <ui-chip value="a">Chip A</ui-chip>
          <ui-chip value="b">Chip B</ui-chip>
          <ui-chip value="c">Chip C</ui-chip>
        </ui-chip-group>
      </div>

      <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '14px'
      }}>Large</label>
        <ui-chip-group size="lg">
          <ui-chip value="a">Chip A</ui-chip>
          <ui-chip value="b">Chip B</ui-chip>
          <ui-chip value="c">Chip C</ui-chip>
        </ui-chip-group>
      </div>
    </div>
}`,...(x=(S=l.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var z,B,A;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    multiple: false
  },
  render: args => <ui-chip-group multiple={args.multiple}>
      <ui-chip value="option1">Option 1</ui-chip>
      <ui-chip value="option2">Option 2</ui-chip>
      <ui-chip value="option3">Option 3</ui-chip>
    </ui-chip-group>
}`,...(A=(B=p.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const w=["Default","RemovableChips","Variants","WithIcons","Sizes","SingleSelection"];export{r as Default,a as RemovableChips,p as SingleSelection,l as Sizes,c as Variants,u as WithIcons,w as __namedExportsOrder,D as default};
