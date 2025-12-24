import{j as a}from"./index-D9-GaziI.js";import"./core.esm-B4FyPw5J.js";import"./iframe-BN_d-WNz.js";const F={title:"Components/UiTabs",tags:["autodocs"],render:r=>a("ui-tabs",{value:r.value,orientation:r.orientation,"activation-mode":r.activationMode,children:[a("ui-tab-list",{children:[a("ui-tab",{value:"tab1",children:"Overview"}),a("ui-tab",{value:"tab2",children:"Features"}),a("ui-tab",{value:"tab3",children:"Pricing"})]}),a("ui-tab-panel",{value:"tab1",children:a("p",{children:"Welcome to the overview panel. This is the first tab content."})}),a("ui-tab-panel",{value:"tab2",children:a("p",{children:"Discover our amazing features in this panel."})}),a("ui-tab-panel",{value:"tab3",children:a("p",{children:"Check out our competitive pricing options."})})]}),argTypes:{value:{control:"text",description:"Currently selected tab value"},orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation for layout and keyboard navigation"},activationMode:{control:"select",options:["automatic","manual"],description:"Whether tabs activate on focus or require selection"}},args:{value:"tab1",orientation:"horizontal",activationMode:"automatic"}},e={},t={render:()=>a("ui-tabs",{value:"all",children:[a("ui-tab-list",{variant:"pills",children:[a("ui-tab",{value:"all",children:"All"}),a("ui-tab",{value:"active",children:"Active"}),a("ui-tab",{value:"completed",children:"Completed"})]}),a("ui-tab-panel",{value:"all",children:"All items are shown here."}),a("ui-tab-panel",{value:"active",children:"Only active items."}),a("ui-tab-panel",{value:"completed",children:"Completed items only."})]})},i={render:()=>a("ui-tabs",{value:"tab1",children:[a("ui-tab-list",{variant:"underline",children:[a("ui-tab",{value:"tab1",children:"Profile"}),a("ui-tab",{value:"tab2",children:"Settings"}),a("ui-tab",{value:"tab3",children:"Notifications"})]}),a("ui-tab-panel",{value:"tab1",children:"Profile content goes here."}),a("ui-tab-panel",{value:"tab2",children:"Settings content goes here."}),a("ui-tab-panel",{value:"tab3",children:"Notifications content goes here."})]})},n={render:()=>a("ui-tabs",{value:"home",children:[a("ui-tab-list",{children:[a("ui-tab",{value:"home",children:[a("i",{slot:"icon-start",class:"fa-solid fa-house"}),"Home"]}),a("ui-tab",{value:"profile",children:[a("i",{slot:"icon-start",class:"fa-solid fa-user"}),"Profile"]}),a("ui-tab",{value:"settings",children:[a("i",{slot:"icon-start",class:"fa-solid fa-gear"}),"Settings"]})]}),a("ui-tab-panel",{value:"home",children:"Home content"}),a("ui-tab-panel",{value:"profile",children:"Profile content"}),a("ui-tab-panel",{value:"settings",children:"Settings content"})]})},l={render:()=>a("ui-tabs",{value:"tab1",children:[a("ui-tab-list",{children:[a("ui-tab",{value:"tab1",children:"Available"}),a("ui-tab",{value:"tab2",children:"Also Available"}),a("ui-tab",{value:"tab3",disabled:!0,children:"Disabled"})]}),a("ui-tab-panel",{value:"tab1",children:"First panel content."}),a("ui-tab-panel",{value:"tab2",children:"Second panel content."}),a("ui-tab-panel",{value:"tab3",children:"This content is not accessible."})]})},u={render:()=>a("ui-tabs",{value:"tab1",children:[a("ui-tab-list",{stretch:!0,children:[a("ui-tab",{value:"tab1",children:"Tab One"}),a("ui-tab",{value:"tab2",children:"Tab Two"}),a("ui-tab",{value:"tab3",children:"Tab Three"})]}),a("ui-tab-panel",{value:"tab1",children:"First panel"}),a("ui-tab-panel",{value:"tab2",children:"Second panel"}),a("ui-tab-panel",{value:"tab3",children:"Third panel"})]})};var s,o,b;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(b=(o=e.parameters)==null?void 0:o.docs)==null?void 0:b.source}}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <ui-tabs value="all">
      <ui-tab-list variant="pills">
        <ui-tab value="all">All</ui-tab>
        <ui-tab value="active">Active</ui-tab>
        <ui-tab value="completed">Completed</ui-tab>
      </ui-tab-list>
      <ui-tab-panel value="all">All items are shown here.</ui-tab-panel>
      <ui-tab-panel value="active">Only active items.</ui-tab-panel>
      <ui-tab-panel value="completed">Completed items only.</ui-tab-panel>
    </ui-tabs>
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var v,h,m;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ui-tabs value="tab1">
      <ui-tab-list variant="underline">
        <ui-tab value="tab1">Profile</ui-tab>
        <ui-tab value="tab2">Settings</ui-tab>
        <ui-tab value="tab3">Notifications</ui-tab>
      </ui-tab-list>
      <ui-tab-panel value="tab1">Profile content goes here.</ui-tab-panel>
      <ui-tab-panel value="tab2">Settings content goes here.</ui-tab-panel>
      <ui-tab-panel value="tab3">Notifications content goes here.</ui-tab-panel>
    </ui-tabs>
}`,...(m=(h=i.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var f,g,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ui-tabs value="home">
      <ui-tab-list>
        <ui-tab value="home">
          <i slot="icon-start" class="fa-solid fa-house"></i>
          Home
        </ui-tab>
        <ui-tab value="profile">
          <i slot="icon-start" class="fa-solid fa-user"></i>
          Profile
        </ui-tab>
        <ui-tab value="settings">
          <i slot="icon-start" class="fa-solid fa-gear"></i>
          Settings
        </ui-tab>
      </ui-tab-list>
      <ui-tab-panel value="home">Home content</ui-tab-panel>
      <ui-tab-panel value="profile">Profile content</ui-tab-panel>
      <ui-tab-panel value="settings">Settings content</ui-tab-panel>
    </ui-tabs>
}`,...(T=(g=n.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var S,A,P;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ui-tabs value="tab1">
      <ui-tab-list>
        <ui-tab value="tab1">Available</ui-tab>
        <ui-tab value="tab2">Also Available</ui-tab>
        <ui-tab value="tab3" disabled={true}>Disabled</ui-tab>
      </ui-tab-list>
      <ui-tab-panel value="tab1">First panel content.</ui-tab-panel>
      <ui-tab-panel value="tab2">Second panel content.</ui-tab-panel>
      <ui-tab-panel value="tab3">This content is not accessible.</ui-tab-panel>
    </ui-tabs>
}`,...(P=(A=l.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var y,C,D;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <ui-tabs value="tab1">
      <ui-tab-list stretch={true}>
        <ui-tab value="tab1">Tab One</ui-tab>
        <ui-tab value="tab2">Tab Two</ui-tab>
        <ui-tab value="tab3">Tab Three</ui-tab>
      </ui-tab-list>
      <ui-tab-panel value="tab1">First panel</ui-tab-panel>
      <ui-tab-panel value="tab2">Second panel</ui-tab-panel>
      <ui-tab-panel value="tab3">Third panel</ui-tab-panel>
    </ui-tabs>
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const x=["Default","PillsVariant","UnderlineVariant","WithIcons","WithDisabledTab","StretchedTabs"];export{e as Default,t as PillsVariant,u as StretchedTabs,i as UnderlineVariant,l as WithDisabledTab,n as WithIcons,x as __namedExportsOrder,F as default};
