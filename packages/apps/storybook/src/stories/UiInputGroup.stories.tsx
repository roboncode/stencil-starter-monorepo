import '@components/core';

import type { Meta, StoryObj } from '@storybook/web-components';

import type { Components } from '@components/core';

type UiInputGroupProps = Components.UiInputGroup;

const meta: Meta<UiInputGroupProps> = {
  title: 'Components/UiInputGroup',
  tags: ['autodocs'],
  render: (args) => (
    <ui-input-group size={args.size} disabled={args.disabled} error={args.error}>
      <ui-input-group-addon>
        <i class="fa-solid fa-user"></i>
      </ui-input-group-addon>
      <ui-input-group-input placeholder="Enter text..."></ui-input-group-input>
    </ui-input-group>
  ),
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
      description: 'Size variant of the input group',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input group is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the input group has an error state',
    },
  },
  args: {
    size: 'base',
    disabled: false,
    error: false,
  },
};

export default meta;
type Story = StoryObj<UiInputGroupProps>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
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
  ),
};

export const WithAddons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
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
          <i class="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
        </ui-input-group-addon>
      </ui-input-group>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Normal</label>
        <ui-input-group>
          <ui-input-group-addon>
            <i class="fa-solid fa-user"></i>
          </ui-input-group-addon>
          <ui-input-group-input placeholder="Normal input"></ui-input-group-input>
        </ui-input-group>
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Disabled</label>
        <ui-input-group disabled={true}>
          <ui-input-group-addon>
            <i class="fa-solid fa-ban"></i>
          </ui-input-group-addon>
          <ui-input-group-input placeholder="Disabled input"></ui-input-group-input>
        </ui-input-group>
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Error</label>
        <ui-input-group error={true}>
          <ui-input-group-addon>
            <i class="fa-solid fa-triangle-exclamation"></i>
          </ui-input-group-addon>
          <ui-input-group-input placeholder="Invalid input"></ui-input-group-input>
        </ui-input-group>
        <span style={{ color: 'red', fontSize: '12px' }}>This field is required</span>
      </div>
    </div>
  ),
};
