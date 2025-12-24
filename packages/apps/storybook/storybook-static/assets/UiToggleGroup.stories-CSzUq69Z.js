import{j as e}from"./index-D9-GaziI.js";import"./core.esm-B4FyPw5J.js";import"./iframe-BN_d-WNz.js";const V={title:"Components/UiToggleGroup",tags:["autodocs"],render:i=>e("ui-toggle-group",{value:i.value,size:i.size,variant:i.variant,orientation:i.orientation,multiple:i.multiple,disabled:i.disabled,children:[e("ui-toggle",{value:"left",children:e("i",{class:"fa-solid fa-align-left"})}),e("ui-toggle",{value:"center",children:e("i",{class:"fa-solid fa-align-center"})}),e("ui-toggle",{value:"right",children:e("i",{class:"fa-solid fa-align-right"})}),e("ui-toggle",{value:"justify",children:e("i",{class:"fa-solid fa-align-justify"})})]}),argTypes:{value:{control:"text",description:"Selected value(s)"},size:{control:"select",options:["sm","base","lg"],description:"Size variant"},variant:{control:"select",options:["default","outline"],description:"Visual variant"},orientation:{control:"select",options:["horizontal","vertical"],description:"Layout orientation"},multiple:{control:"boolean",description:"Allow multiple selections"},disabled:{control:"boolean",description:"Whether the group is disabled"}},args:{value:"left",size:"base",variant:"default",orientation:"horizontal",multiple:!1,disabled:!1}},l={},a={args:{multiple:!0},render:i=>e("ui-toggle-group",{multiple:i.multiple,children:[e("ui-toggle",{value:"bold",children:e("i",{class:"fa-solid fa-bold"})}),e("ui-toggle",{value:"italic",children:e("i",{class:"fa-solid fa-italic"})}),e("ui-toggle",{value:"underline",children:e("i",{class:"fa-solid fa-underline"})}),e("ui-toggle",{value:"strikethrough",children:e("i",{class:"fa-solid fa-strikethrough"})})]})},o={args:{variant:"outline",value:"grid"},render:i=>e("ui-toggle-group",{value:i.value,variant:i.variant,children:[e("ui-toggle",{value:"list",children:[e("i",{class:"fa-solid fa-list"})," List"]}),e("ui-toggle",{value:"grid",children:[e("i",{class:"fa-solid fa-grip"})," Grid"]}),e("ui-toggle",{value:"columns",children:[e("i",{class:"fa-solid fa-columns"})," Columns"]})]})},t={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e("div",{children:[e("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px"},children:"Small"}),e("ui-toggle-group",{size:"sm",value:"a",children:[e("ui-toggle",{value:"a",children:"Option A"}),e("ui-toggle",{value:"b",children:"Option B"})]})]}),e("div",{children:[e("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px"},children:"Base"}),e("ui-toggle-group",{size:"base",value:"a",children:[e("ui-toggle",{value:"a",children:"Option A"}),e("ui-toggle",{value:"b",children:"Option B"})]})]}),e("div",{children:[e("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px"},children:"Large"}),e("ui-toggle-group",{size:"lg",value:"a",children:[e("ui-toggle",{value:"a",children:"Option A"}),e("ui-toggle",{value:"b",children:"Option B"})]})]})]})},r={args:{orientation:"vertical",value:"option1"},render:i=>e("ui-toggle-group",{orientation:i.orientation,value:i.value,children:[e("ui-toggle",{value:"option1",children:"Option 1"}),e("ui-toggle",{value:"option2",children:"Option 2"}),e("ui-toggle",{value:"option3",children:"Option 3"})]})},s={args:{disabled:!0,value:"center"}};var u,g,n;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(n=(g=l.parameters)==null?void 0:g.docs)==null?void 0:n.source}}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: args => <ui-toggle-group multiple={args.multiple}>
      <ui-toggle value="bold"><i class="fa-solid fa-bold"></i></ui-toggle>
      <ui-toggle value="italic"><i class="fa-solid fa-italic"></i></ui-toggle>
      <ui-toggle value="underline"><i class="fa-solid fa-underline"></i></ui-toggle>
      <ui-toggle value="strikethrough"><i class="fa-solid fa-strikethrough"></i></ui-toggle>
    </ui-toggle-group>
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var v,m,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    value: 'grid'
  },
  render: args => <ui-toggle-group value={args.value as string} variant={args.variant}>
      <ui-toggle value="list"><i class="fa-solid fa-list"></i> List</ui-toggle>
      <ui-toggle value="grid"><i class="fa-solid fa-grip"></i> Grid</ui-toggle>
      <ui-toggle value="columns"><i class="fa-solid fa-columns"></i> Columns</ui-toggle>
    </ui-toggle-group>
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,b,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '14px'
      }}>Small</label>
        <ui-toggle-group size="sm" value="a">
          <ui-toggle value="a">Option A</ui-toggle>
          <ui-toggle value="b">Option B</ui-toggle>
        </ui-toggle-group>
      </div>

      <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '14px'
      }}>Base</label>
        <ui-toggle-group size="base" value="a">
          <ui-toggle value="a">Option A</ui-toggle>
          <ui-toggle value="b">Option B</ui-toggle>
        </ui-toggle-group>
      </div>

      <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '14px'
      }}>Large</label>
        <ui-toggle-group size="lg" value="a">
          <ui-toggle value="a">Option A</ui-toggle>
          <ui-toggle value="b">Option B</ui-toggle>
        </ui-toggle-group>
      </div>
    </div>
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var z,O,y;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    value: 'option1'
  },
  render: args => <ui-toggle-group orientation={args.orientation} value={args.value as string}>
      <ui-toggle value="option1">Option 1</ui-toggle>
      <ui-toggle value="option2">Option 2</ui-toggle>
      <ui-toggle value="option3">Option 3</ui-toggle>
    </ui-toggle-group>
}`,...(y=(O=r.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var S,B,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'center'
  }
}`,...(k=(B=s.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const j=["Default","MultipleSelection","OutlineVariant","Sizes","Vertical","Disabled"];export{l as Default,s as Disabled,a as MultipleSelection,o as OutlineVariant,t as Sizes,r as Vertical,j as __namedExportsOrder,V as default};
