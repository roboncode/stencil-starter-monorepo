import{j as t}from"./index-D9-GaziI.js";import"./core.esm-B4FyPw5J.js";import"./iframe-BN_d-WNz.js";const w={title:"Components/UiTooltip",tags:["autodocs"],render:e=>t("ui-tooltip",{content:e.content,placement:e.placement,disabled:e.disabled,"show-delay":e.showDelay,"hide-delay":e.hideDelay,"offset-distance":e.offsetDistance,children:t("button",{style:{padding:"8px 16px",cursor:"pointer"},children:"Hover me"})}),argTypes:{content:{control:"text",description:"The content to display in the tooltip"},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],description:"Placement of the tooltip relative to the trigger"},disabled:{control:"boolean",description:"Whether the tooltip is disabled"},showDelay:{control:"number",description:"Delay before showing the tooltip (in ms)"},hideDelay:{control:"number",description:"Delay before hiding the tooltip (in ms)"},offsetDistance:{control:"number",description:"Offset from the trigger element (in px)"}},args:{content:"This is a tooltip",placement:"top",disabled:!1,showDelay:0,hideDelay:0,offsetDistance:8}},o={},n={render:()=>t("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",padding:"60px"},children:[t("ui-tooltip",{content:"Top tooltip",placement:"top",children:t("button",{children:"Top"})}),t("ui-tooltip",{content:"Right tooltip",placement:"right",children:t("button",{children:"Right"})}),t("ui-tooltip",{content:"Bottom tooltip",placement:"bottom",children:t("button",{children:"Bottom"})}),t("ui-tooltip",{content:"Left tooltip",placement:"left",children:t("button",{children:"Left"})})]})},i={args:{content:"Appears after 500ms",showDelay:500,hideDelay:200}},r={args:{content:"You will not see this",disabled:!0}};var l,a,s;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var p,c,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    padding: '60px'
  }}>
      <ui-tooltip content="Top tooltip" placement="top">
        <button>Top</button>
      </ui-tooltip>
      <ui-tooltip content="Right tooltip" placement="right">
        <button>Right</button>
      </ui-tooltip>
      <ui-tooltip content="Bottom tooltip" placement="bottom">
        <button>Bottom</button>
      </ui-tooltip>
      <ui-tooltip content="Left tooltip" placement="left">
        <button>Left</button>
      </ui-tooltip>
    </div>
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    content: 'Appears after 500ms',
    showDelay: 500,
    hideDelay: 200
  }
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,b,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    content: 'You will not see this',
    disabled: true
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const T=["Default","Placements","WithDelay","Disabled"];export{o as Default,r as Disabled,n as Placements,i as WithDelay,T as __namedExportsOrder,w as default};
