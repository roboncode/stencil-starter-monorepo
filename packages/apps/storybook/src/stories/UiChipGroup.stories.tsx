import type { Meta, StoryObj } from '@storybook/web-components';
import type { Components } from '@components/core';

import '@components/core';

type UiChipGroupProps = Components.UiChipGroup;

const meta: Meta<UiChipGroupProps> = {
  title: 'Components/UiChipGroup',
  tags: ['autodocs'],
  render: (args) => (
    <ui-chip-group
      size={args.size}
      orientation={args.orientation}
      multiple={args.multiple}
      disabled={args.disabled}
    >
      <ui-chip value="react">React</ui-chip>
      <ui-chip value="vue">Vue</ui-chip>
      <ui-chip value="angular">Angular</ui-chip>
      <ui-chip value="svelte">Svelte</ui-chip>
    </ui-chip-group>
  ),
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
      description: 'Size variant',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation for keyboard navigation',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple selections (default: true for chips)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire group is disabled',
    },
  },
  args: {
    size: 'base',
    orientation: 'horizontal',
    multiple: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<UiChipGroupProps>;

export const Default: Story = {};

export const RemovableChips: Story = {
  render: () => (
    <ui-chip-group>
      <ui-chip value="js" removable={true}>JavaScript</ui-chip>
      <ui-chip value="ts" removable={true}>TypeScript</ui-chip>
      <ui-chip value="py" removable={true}>Python</ui-chip>
      <ui-chip value="go" removable={true}>Go</ui-chip>
    </ui-chip-group>
  ),
};

export const Variants: Story = {
  render: () => (
    <ui-chip-group>
      <ui-chip value="default" variant="default">Default</ui-chip>
      <ui-chip value="primary" variant="primary">Primary</ui-chip>
      <ui-chip value="success" variant="success">Success</ui-chip>
      <ui-chip value="warning" variant="warning">Warning</ui-chip>
      <ui-chip value="error" variant="error">Error</ui-chip>
    </ui-chip-group>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <ui-chip-group>
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
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Small</label>
        <ui-chip-group size="sm">
          <ui-chip value="a">Chip A</ui-chip>
          <ui-chip value="b">Chip B</ui-chip>
          <ui-chip value="c">Chip C</ui-chip>
        </ui-chip-group>
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Base</label>
        <ui-chip-group size="base">
          <ui-chip value="a">Chip A</ui-chip>
          <ui-chip value="b">Chip B</ui-chip>
          <ui-chip value="c">Chip C</ui-chip>
        </ui-chip-group>
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Large</label>
        <ui-chip-group size="lg">
          <ui-chip value="a">Chip A</ui-chip>
          <ui-chip value="b">Chip B</ui-chip>
          <ui-chip value="c">Chip C</ui-chip>
        </ui-chip-group>
      </div>
    </div>
  ),
};

export const SingleSelection: Story = {
  args: {
    multiple: false,
  },
  render: (args) => (
    <ui-chip-group multiple={args.multiple}>
      <ui-chip value="option1">Option 1</ui-chip>
      <ui-chip value="option2">Option 2</ui-chip>
      <ui-chip value="option3">Option 3</ui-chip>
    </ui-chip-group>
  ),
};
