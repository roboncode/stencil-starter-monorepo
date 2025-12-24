import './App.css';

import {
  MyComponent,
  UiChip,
  UiChipGroup,
  UiInputGroup,
  UiInputGroupAddon,
  UiInputGroupInput,
  UiRadio,
  UiRadioGroup,
  UiTab,
  UiTabList,
  UiTabPanel,
  UiTabs,
  UiToggle,
  UiToggleGroup,
  UiTooltip
} from 'react-components';

import { useState } from 'react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored) {
    return stored;
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const theme = getInitialTheme();
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(v => !v);
  };

  return (
    <div className="container">
      {/* Header with Theme Toggle */}
      <div className="header">
        <h1>React Components Demo</h1>
        <div className="theme-indicator">
          <button
            className={`theme-pill ${currentTheme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}>
            <i className="fa-solid fa-sun"></i> Light
          </button>
          <button
            className={`theme-pill ${currentTheme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}>
            <i className="fa-solid fa-moon"></i> Dark
          </button>
        </div>
      </div>

      {/* My Component */}
      <div className="demo-section">
        <h2>My Component</h2>
        <MyComponent first="Stencil" middle="+" last="React" />
      </div>

      {/* Input Group Examples */}
      <div className="demo-section">
        <h2>Input Group</h2>

        <div className="demo-row">
          <span className="label">Search input with icon and results count</span>
          <UiInputGroup>
            <UiInputGroupAddon>
              <i className="fa-solid fa-magnifying-glass"></i>
            </UiInputGroupAddon>
            <UiInputGroupInput placeholder="Search..." />
            <UiInputGroupAddon align="inline-end" variant="transparent">
              <span className="results-text">12 results</span>
            </UiInputGroupAddon>
          </UiInputGroup>
        </div>

        <div className="demo-row">
          <span className="label">URL input with prefix and info tooltip</span>
          <UiInputGroup>
            <UiInputGroupAddon variant="muted">
              <span>https://</span>
            </UiInputGroupAddon>
            <UiInputGroupInput placeholder="example.com" />
            <UiInputGroupAddon align="inline-end">
              <UiTooltip content="Enter your website URL without the protocol prefix." placement="top">
                <button className="icon-button">
                  <i className="fa-solid fa-circle-info"></i>
                </button>
              </UiTooltip>
            </UiInputGroupAddon>
          </UiInputGroup>
        </div>

        <div className="demo-row">
          <span className="label">Email input with icon</span>
          <UiInputGroup>
            <UiInputGroupAddon>
              <i className="fa-solid fa-envelope"></i>
            </UiInputGroupAddon>
            <UiInputGroupInput type="email" placeholder="you@example.com" />
          </UiInputGroup>
        </div>

        <div className="demo-row">
          <span className="label">Password input with visibility toggle</span>
          <UiInputGroup>
            <UiInputGroupAddon>
              <i className="fa-solid fa-lock"></i>
            </UiInputGroupAddon>
            <UiInputGroupInput
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Enter password"
            />
            <UiInputGroupAddon align="inline-end" clickable={true} onClick={togglePasswordVisibility}>
              <i className={passwordVisible ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}></i>
            </UiInputGroupAddon>
          </UiInputGroup>
        </div>
      </div>

      {/* Input Group Sizes */}
      <div className="demo-section">
        <h2>Input Group Sizes</h2>

        <div className="demo-row">
          <span className="label">Small</span>
          <UiInputGroup size="sm">
            <UiInputGroupAddon>
              <i className="fa-solid fa-user"></i>
            </UiInputGroupAddon>
            <UiInputGroupInput placeholder="Small input" />
          </UiInputGroup>
        </div>

        <div className="demo-row">
          <span className="label">Base (default)</span>
          <UiInputGroup size="base">
            <UiInputGroupAddon>
              <i className="fa-solid fa-user"></i>
            </UiInputGroupAddon>
            <UiInputGroupInput placeholder="Base input" />
          </UiInputGroup>
        </div>

        <div className="demo-row">
          <span className="label">Large</span>
          <UiInputGroup size="lg">
            <UiInputGroupAddon>
              <i className="fa-solid fa-user"></i>
            </UiInputGroupAddon>
            <UiInputGroupInput placeholder="Large input" />
          </UiInputGroup>
        </div>
      </div>

      {/* Tooltip Examples */}
      <div className="demo-section">
        <h2>Tooltip</h2>

        <div className="demo-row tooltip-row">
          <UiTooltip content="Tooltip on top" placement="top">
            <button className="demo-button">Top</button>
          </UiTooltip>

          <UiTooltip content="Tooltip on right" placement="right">
            <button className="demo-button">Right</button>
          </UiTooltip>

          <UiTooltip content="Tooltip on bottom" placement="bottom">
            <button className="demo-button">Bottom</button>
          </UiTooltip>

          <UiTooltip content="Tooltip on left" placement="left">
            <button className="demo-button">Left</button>
          </UiTooltip>
        </div>

        <div className="demo-row">
          <span className="label">Icon with tooltip</span>
          <UiTooltip content="Click to add to favorites" placement="top">
            <button className="icon-button-lg">
              <i className="fa-regular fa-heart"></i>
            </button>
          </UiTooltip>
        </div>
      </div>

      {/* States */}
      <div className="demo-section">
        <h2>States</h2>

        <div className="demo-row">
          <span className="label">Disabled</span>
          <UiInputGroup disabled={true}>
            <UiInputGroupAddon>
              <i className="fa-solid fa-ban"></i>
            </UiInputGroupAddon>
            <UiInputGroupInput placeholder="Disabled input" disabled={true} />
          </UiInputGroup>
        </div>

        <div className="demo-row">
          <span className="label">Error state</span>
          <UiInputGroup error={true}>
            <UiInputGroupAddon>
              <i className="fa-solid fa-triangle-exclamation error-icon"></i>
            </UiInputGroupAddon>
            <UiInputGroupInput placeholder="Invalid input" />
          </UiInputGroup>
          <span className="error-message">This field is required</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="demo-section">
        <h2>Tabs</h2>

        <div className="demo-row">
          <span className="label">Default tabs</span>
          <UiTabs value="tab1">
            <UiTabList>
              <UiTab value="tab1">Overview</UiTab>
              <UiTab value="tab2">Features</UiTab>
              <UiTab value="tab3">Pricing</UiTab>
              <UiTab value="tab4" disabled={true}>Disabled</UiTab>
            </UiTabList>
            <UiTabPanel value="tab1">
              <p>Welcome to the overview panel. This is the first tab content.</p>
            </UiTabPanel>
            <UiTabPanel value="tab2">
              <p>Discover our amazing features in this panel.</p>
            </UiTabPanel>
            <UiTabPanel value="tab3">
              <p>Check out our competitive pricing options.</p>
            </UiTabPanel>
            <UiTabPanel value="tab4">
              <p>This tab is disabled.</p>
            </UiTabPanel>
          </UiTabs>
        </div>

        <div className="demo-row">
          <span className="label">Pills variant</span>
          <UiTabs value="pill1">
            <UiTabList variant="pills">
              <UiTab value="pill1">All</UiTab>
              <UiTab value="pill2">Active</UiTab>
              <UiTab value="pill3">Completed</UiTab>
            </UiTabList>
            <UiTabPanel value="pill1">All items are shown here.</UiTabPanel>
            <UiTabPanel value="pill2">Only active items.</UiTabPanel>
            <UiTabPanel value="pill3">Completed items only.</UiTabPanel>
          </UiTabs>
        </div>

        <div className="demo-row">
          <span className="label">Tabs with icons</span>
          <UiTabs value="icon1">
            <UiTabList>
              <UiTab value="icon1">
                <i slot="icon-start" className="fa-solid fa-house"></i>
                Home
              </UiTab>
              <UiTab value="icon2">
                <i slot="icon-start" className="fa-solid fa-user"></i>
                Profile
              </UiTab>
              <UiTab value="icon3">
                <i slot="icon-start" className="fa-solid fa-gear"></i>
                Settings
              </UiTab>
            </UiTabList>
            <UiTabPanel value="icon1">Home content</UiTabPanel>
            <UiTabPanel value="icon2">Profile content</UiTabPanel>
            <UiTabPanel value="icon3">Settings content</UiTabPanel>
          </UiTabs>
        </div>
      </div>

      {/* Radio Group */}
      <div className="demo-section">
        <h2>Radio Group</h2>

        <div className="demo-row">
          <span className="label">Default (dot indicator)</span>
          <UiRadioGroup value="option1">
            <UiRadio value="option1">Option 1</UiRadio>
            <UiRadio value="option2">Option 2</UiRadio>
            <UiRadio value="option3">Option 3</UiRadio>
          </UiRadioGroup>
        </div>

        <div className="demo-row">
          <span className="label">Check indicator</span>
          <UiRadioGroup value="check1">
            <UiRadio value="check1" indicator="check">Small</UiRadio>
            <UiRadio value="check2" indicator="check">Medium</UiRadio>
            <UiRadio value="check3" indicator="check">Large</UiRadio>
          </UiRadioGroup>
        </div>

        <div className="demo-row">
          <span className="label">Horizontal orientation</span>
          <UiRadioGroup value="h1" orientation="horizontal">
            <UiRadio value="h1" indicator="check">Daily</UiRadio>
            <UiRadio value="h2" indicator="check">Weekly</UiRadio>
            <UiRadio value="h3" indicator="check">Monthly</UiRadio>
          </UiRadioGroup>
        </div>

        <div className="demo-row">
          <span className="label">With descriptions</span>
          <UiRadioGroup value="plan1">
            <UiRadio value="plan1" indicator="check">
              Starter
              <span slot="description">Perfect for individuals and small projects</span>
            </UiRadio>
            <UiRadio value="plan2" indicator="check">
              Pro
              <span slot="description">Best for growing teams and businesses</span>
            </UiRadio>
            <UiRadio value="plan3" indicator="check" disabled={true}>
              Enterprise
              <span slot="description">Custom solutions for large organizations</span>
            </UiRadio>
          </UiRadioGroup>
        </div>
      </div>

      {/* Toggle Group */}
      <div className="demo-section">
        <h2>Toggle Group</h2>

        <div className="demo-row">
          <span className="label">Single selection</span>
          <UiToggleGroup value="left">
            <UiToggle value="left"><i className="fa-solid fa-align-left"></i></UiToggle>
            <UiToggle value="center"><i className="fa-solid fa-align-center"></i></UiToggle>
            <UiToggle value="right"><i className="fa-solid fa-align-right"></i></UiToggle>
            <UiToggle value="justify"><i className="fa-solid fa-align-justify"></i></UiToggle>
          </UiToggleGroup>
        </div>

        <div className="demo-row">
          <span className="label">Multiple selection</span>
          <UiToggleGroup multiple={true}>
            <UiToggle value="bold"><i className="fa-solid fa-bold"></i></UiToggle>
            <UiToggle value="italic"><i className="fa-solid fa-italic"></i></UiToggle>
            <UiToggle value="underline"><i className="fa-solid fa-underline"></i></UiToggle>
            <UiToggle value="strikethrough"><i className="fa-solid fa-strikethrough"></i></UiToggle>
          </UiToggleGroup>
        </div>

        <div className="demo-row">
          <span className="label">Outline variant</span>
          <UiToggleGroup value="grid" variant="outline">
            <UiToggle value="list"><i className="fa-solid fa-list"></i> List</UiToggle>
            <UiToggle value="grid"><i className="fa-solid fa-grip"></i> Grid</UiToggle>
            <UiToggle value="columns"><i className="fa-solid fa-columns"></i> Columns</UiToggle>
          </UiToggleGroup>
        </div>

        <div className="demo-row">
          <span className="label">Size variants</span>
          <div className="size-variants">
            <UiToggleGroup value="a" size="sm">
              <UiToggle value="a">Small</UiToggle>
              <UiToggle value="b">Toggles</UiToggle>
            </UiToggleGroup>
            <UiToggleGroup value="a" size="base">
              <UiToggle value="a">Base</UiToggle>
              <UiToggle value="b">Toggles</UiToggle>
            </UiToggleGroup>
            <UiToggleGroup value="a" size="lg">
              <UiToggle value="a">Large</UiToggle>
              <UiToggle value="b">Toggles</UiToggle>
            </UiToggleGroup>
          </div>
        </div>
      </div>

      {/* Chip Group */}
      <div className="demo-section">
        <h2>Chip Group</h2>

        <div className="demo-row">
          <span className="label">Multi-select chips</span>
          <UiChipGroup>
            <UiChip value="react">React</UiChip>
            <UiChip value="vue">Vue</UiChip>
            <UiChip value="angular">Angular</UiChip>
            <UiChip value="svelte">Svelte</UiChip>
          </UiChipGroup>
        </div>

        <div className="demo-row">
          <span className="label">Removable chips</span>
          <UiChipGroup>
            <UiChip value="tag1" removable={true}>JavaScript</UiChip>
            <UiChip value="tag2" removable={true}>TypeScript</UiChip>
            <UiChip value="tag3" removable={true}>Python</UiChip>
            <UiChip value="tag4" removable={true}>Go</UiChip>
          </UiChipGroup>
        </div>

        <div className="demo-row">
          <span className="label">Chip variants</span>
          <UiChipGroup>
            <UiChip value="default" variant="default">Default</UiChip>
            <UiChip value="primary" variant="primary">Primary</UiChip>
            <UiChip value="success" variant="success">Success</UiChip>
            <UiChip value="warning" variant="warning">Warning</UiChip>
            <UiChip value="error" variant="error">Error</UiChip>
          </UiChipGroup>
        </div>

        <div className="demo-row">
          <span className="label">With icons</span>
          <UiChipGroup>
            <UiChip value="react" variant="primary" removable={true}>
              <i slot="icon-start" className="fa-brands fa-react"></i>
              React
            </UiChip>
            <UiChip value="vue" variant="success" removable={true}>
              <i slot="icon-start" className="fa-brands fa-vuejs"></i>
              Vue
            </UiChip>
            <UiChip value="angular" variant="error" removable={true}>
              <i slot="icon-start" className="fa-brands fa-angular"></i>
              Angular
            </UiChip>
          </UiChipGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
