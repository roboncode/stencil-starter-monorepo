import type { Meta, StoryObj } from '@storybook/web-components';
import type { Components } from '@components/core';
import { html } from 'lit';

type UiToggleGroupProps = Components.UiToggleGroup;

const meta: Meta<UiToggleGroupProps> = {
  title: 'Components/UiToggleGroup',
  tags: ['autodocs'],
  render: (args) => html`
    <ui-toggle-group
      value=${args.value}
      size=${args.size}
      variant=${args.variant}
      orientation=${args.orientation}
      .multiple=${args.multiple}
      .disabled=${args.disabled}
    >
      <ui-toggle value="left"><i class="fa-solid fa-align-left"></i></ui-toggle>
      <ui-toggle value="center"><i class="fa-solid fa-align-center"></i></ui-toggle>
      <ui-toggle value="right"><i class="fa-solid fa-align-right"></i></ui-toggle>
      <ui-toggle value="justify"><i class="fa-solid fa-align-justify"></i></ui-toggle>
    </ui-toggle-group>
  `,
  argTypes: {
    value: {
      control: 'text',
      description: 'Selected value(s)',
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
      description: 'Size variant',
    },
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'Visual variant',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple selections',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the group is disabled',
    },
  },
  args: {
    value: 'left',
    size: 'base',
    variant: 'default',
    orientation: 'horizontal',
    multiple: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<UiToggleGroupProps>;

export const Default: Story = {};

export const MultipleSelection: Story = {
  args: {
    multiple: true,
  },
  render: (args) => html`
    <ui-toggle-group .multiple=${args.multiple}>
      <ui-toggle value="bold"><i class="fa-solid fa-bold"></i></ui-toggle>
      <ui-toggle value="italic"><i class="fa-solid fa-italic"></i></ui-toggle>
      <ui-toggle value="underline"><i class="fa-solid fa-underline"></i></ui-toggle>
      <ui-toggle value="strikethrough"><i class="fa-solid fa-strikethrough"></i></ui-toggle>
    </ui-toggle-group>
  `,
};

export const OutlineVariant: Story = {
  args: {
    variant: 'outline',
    value: 'grid',
  },
  render: (args) => html`
    <ui-toggle-group value=${args.value} variant=${args.variant}>
      <ui-toggle value="list"><i class="fa-solid fa-list"></i> List</ui-toggle>
      <ui-toggle value="grid"><i class="fa-solid fa-grip"></i> Grid</ui-toggle>
      <ui-toggle value="columns"><i class="fa-solid fa-columns"></i> Columns</ui-toggle>
    </ui-toggle-group>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
      <div>
        <label style="display: block; margin-bottom: 8px; font-size: 14px;">Small</label>
        <ui-toggle-group size="sm" value="a">
          <ui-toggle value="a">Option A</ui-toggle>
          <ui-toggle value="b">Option B</ui-toggle>
        </ui-toggle-group>
      </div>

      <div>
        <label style="display: block; margin-bottom: 8px; font-size: 14px;">Base</label>
        <ui-toggle-group size="base" value="a">
          <ui-toggle value="a">Option A</ui-toggle>
          <ui-toggle value="b">Option B</ui-toggle>
        </ui-toggle-group>
      </div>

      <div>
        <label style="display: block; margin-bottom: 8px; font-size: 14px;">Large</label>
        <ui-toggle-group size="lg" value="a">
          <ui-toggle value="a">Option A</ui-toggle>
          <ui-toggle value="b">Option B</ui-toggle>
        </ui-toggle-group>
      </div>
    </div>
  `,
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    value: 'option1',
  },
  render: (args) => html`
    <ui-toggle-group orientation=${args.orientation} value=${args.value}>
      <ui-toggle value="option1">Option 1</ui-toggle>
      <ui-toggle value="option2">Option 2</ui-toggle>
      <ui-toggle value="option3">Option 3</ui-toggle>
    </ui-toggle-group>
  `,
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'center',
  },
};
