import{j as i}from"./index-D9-GaziI.js";import"./core.esm-B4FyPw5J.js";import"./iframe-BN_d-WNz.js";const z={title:"Components/UiInputGroup",tags:["autodocs"],render:o=>i("ui-input-group",{size:o.size,disabled:o.disabled,error:o.error,children:[i("ui-input-group-addon",{children:i("i",{class:"fa-solid fa-user"})}),i("ui-input-group-input",{placeholder:"Enter text..."})]}),argTypes:{size:{control:"select",options:["sm","base","lg"],description:"Size variant of the input group"},disabled:{control:"boolean",description:"Whether the input group is disabled"},error:{control:"boolean",description:"Whether the input group has an error state"}},args:{size:"base",disabled:!1,error:!1}},u={},p={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[i("ui-input-group",{size:"sm",children:[i("ui-input-group-addon",{children:i("i",{class:"fa-solid fa-user"})}),i("ui-input-group-input",{placeholder:"Small"})]}),i("ui-input-group",{size:"base",children:[i("ui-input-group-addon",{children:i("i",{class:"fa-solid fa-user"})}),i("ui-input-group-input",{placeholder:"Base (default)"})]}),i("ui-input-group",{size:"lg",children:[i("ui-input-group-addon",{children:i("i",{class:"fa-solid fa-user"})}),i("ui-input-group-input",{placeholder:"Large"})]})]})},e={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[i("ui-input-group",{children:[i("ui-input-group-addon",{children:i("i",{class:"fa-solid fa-magnifying-glass"})}),i("ui-input-group-input",{placeholder:"Search..."})]}),i("ui-input-group",{children:[i("ui-input-group-addon",{variant:"muted",children:"https://"}),i("ui-input-group-input",{placeholder:"example.com"})]}),i("ui-input-group",{children:[i("ui-input-group-addon",{children:i("i",{class:"fa-solid fa-envelope"})}),i("ui-input-group-input",{type:"email",placeholder:"you@example.com"}),i("ui-input-group-addon",{align:"inline-end",variant:"transparent",children:i("i",{class:"fa-solid fa-circle-check",style:{color:"green"}})})]})]})},r={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[i("div",{children:[i("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px"},children:"Normal"}),i("ui-input-group",{children:[i("ui-input-group-addon",{children:i("i",{class:"fa-solid fa-user"})}),i("ui-input-group-input",{placeholder:"Normal input"})]})]}),i("div",{children:[i("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px"},children:"Disabled"}),i("ui-input-group",{disabled:!0,children:[i("ui-input-group-addon",{children:i("i",{class:"fa-solid fa-ban"})}),i("ui-input-group-input",{placeholder:"Disabled input"})]})]}),i("div",{children:[i("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px"},children:"Error"}),i("ui-input-group",{error:!0,children:[i("ui-input-group-addon",{children:i("i",{class:"fa-solid fa-triangle-exclamation"})}),i("ui-input-group-input",{placeholder:"Invalid input"})]}),i("span",{style:{color:"red",fontSize:"12px"},children:"This field is required"})]})]})};var n,a,t;u.parameters={...u.parameters,docs:{...(n=u.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(t=(a=u.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var l,d,s;p.parameters={...p.parameters,docs:{...(l=p.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px'
  }}>
      <ui-input-group size="sm">
        <ui-input-group-addon>
          <i class="fa-solid fa-user"></i>
        </ui-input-group-addon>
        <ui-input-group-input placeholder="Small"></ui-input-group-input>
      </ui-input-group>

      <ui-input-group size="base">
        <ui-input-group-addon>
          <i class="fa-solid fa-user"></i>
        </ui-input-group-addon>
        <ui-input-group-input placeholder="Base (default)"></ui-input-group-input>
      </ui-input-group>

      <ui-input-group size="lg">
        <ui-input-group-addon>
          <i class="fa-solid fa-user"></i>
        </ui-input-group-addon>
        <ui-input-group-input placeholder="Large"></ui-input-group-input>
      </ui-input-group>
    </div>
}`,...(s=(d=p.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var c,g,h;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px'
  }}>
      <ui-input-group>
        <ui-input-group-addon>
          <i class="fa-solid fa-magnifying-glass"></i>
        </ui-input-group-addon>
        <ui-input-group-input placeholder="Search..."></ui-input-group-input>
      </ui-input-group>

      <ui-input-group>
        <ui-input-group-addon variant="muted">https://</ui-input-group-addon>
        <ui-input-group-input placeholder="example.com"></ui-input-group-input>
      </ui-input-group>

      <ui-input-group>
        <ui-input-group-addon>
          <i class="fa-solid fa-envelope"></i>
        </ui-input-group-addon>
        <ui-input-group-input type="email" placeholder="you@example.com"></ui-input-group-input>
        <ui-input-group-addon align="inline-end" variant="transparent">
          <i class="fa-solid fa-circle-check" style={{
          color: 'green'
        }}></i>
        </ui-input-group-addon>
      </ui-input-group>
    </div>
}`,...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var m,f,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px'
  }}>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '4px',
        fontSize: '14px'
      }}>Normal</label>
        <ui-input-group>
          <ui-input-group-addon>
            <i class="fa-solid fa-user"></i>
          </ui-input-group-addon>
          <ui-input-group-input placeholder="Normal input"></ui-input-group-input>
        </ui-input-group>
      </div>

      <div>
        <label style={{
        display: 'block',
        marginBottom: '4px',
        fontSize: '14px'
      }}>Disabled</label>
        <ui-input-group disabled={true}>
          <ui-input-group-addon>
            <i class="fa-solid fa-ban"></i>
          </ui-input-group-addon>
          <ui-input-group-input placeholder="Disabled input"></ui-input-group-input>
        </ui-input-group>
      </div>

      <div>
        <label style={{
        display: 'block',
        marginBottom: '4px',
        fontSize: '14px'
      }}>Error</label>
        <ui-input-group error={true}>
          <ui-input-group-addon>
            <i class="fa-solid fa-triangle-exclamation"></i>
          </ui-input-group-addon>
          <ui-input-group-input placeholder="Invalid input"></ui-input-group-input>
        </ui-input-group>
        <span style={{
        color: 'red',
        fontSize: '12px'
      }}>This field is required</span>
      </div>
    </div>
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const S=["Default","Sizes","WithAddons","States"];export{u as Default,p as Sizes,r as States,e as WithAddons,S as __namedExportsOrder,z as default};
