import type { Meta, StoryObj } from '@storybook/web-components';
import type { Components } from '@components/core';

import '@components/core';

type UiTabsProps = Components.UiTabs;

const meta: Meta<UiTabsProps> = {
  title: 'Components/UiTabs',
  tags: ['autodocs'],
  render: (args) => (
    <ui-tabs value={args.value} orientation={args.orientation} activation-mode={args.activationMode}>
      <ui-tab-list>
        <ui-tab value="tab1">Overview</ui-tab>
        <ui-tab value="tab2">Features</ui-tab>
        <ui-tab value="tab3">Pricing</ui-tab>
      </ui-tab-list>
      <ui-tab-panel value="tab1">
        <p>Welcome to the overview panel. This is the first tab content.</p>
      </ui-tab-panel>
      <ui-tab-panel value="tab2">
        <p>Discover our amazing features in this panel.</p>
      </ui-tab-panel>
      <ui-tab-panel value="tab3">
        <p>Check out our competitive pricing options.</p>
      </ui-tab-panel>
    </ui-tabs>
  ),
  argTypes: {
    value: {
      control: 'text',
      description: 'Currently selected tab value',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation for layout and keyboard navigation',
    },
    activationMode: {
      control: 'select',
      options: ['automatic', 'manual'],
      description: 'Whether tabs activate on focus or require selection',
    },
  },
  args: {
    value: 'tab1',
    orientation: 'horizontal',
    activationMode: 'automatic',
  },
};

export default meta;
type Story = StoryObj<UiTabsProps>;

export const Default: Story = {};

export const PillsVariant: Story = {
  render: () => (
    <ui-tabs value="all">
      <ui-tab-list variant="pills">
        <ui-tab value="all">All</ui-tab>
        <ui-tab value="active">Active</ui-tab>
        <ui-tab value="completed">Completed</ui-tab>
      </ui-tab-list>
      <ui-tab-panel value="all">All items are shown here.</ui-tab-panel>
      <ui-tab-panel value="active">Only active items.</ui-tab-panel>
      <ui-tab-panel value="completed">Completed items only.</ui-tab-panel>
    </ui-tabs>
  ),
};

export const UnderlineVariant: Story = {
  render: () => (
    <ui-tabs value="tab1">
      <ui-tab-list variant="underline">
        <ui-tab value="tab1">Profile</ui-tab>
        <ui-tab value="tab2">Settings</ui-tab>
        <ui-tab value="tab3">Notifications</ui-tab>
      </ui-tab-list>
      <ui-tab-panel value="tab1">Profile content goes here.</ui-tab-panel>
      <ui-tab-panel value="tab2">Settings content goes here.</ui-tab-panel>
      <ui-tab-panel value="tab3">Notifications content goes here.</ui-tab-panel>
    </ui-tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <ui-tabs value="home">
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
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <ui-tabs value="tab1">
      <ui-tab-list>
        <ui-tab value="tab1">Available</ui-tab>
        <ui-tab value="tab2">Also Available</ui-tab>
        <ui-tab value="tab3" disabled={true}>Disabled</ui-tab>
      </ui-tab-list>
      <ui-tab-panel value="tab1">First panel content.</ui-tab-panel>
      <ui-tab-panel value="tab2">Second panel content.</ui-tab-panel>
      <ui-tab-panel value="tab3">This content is not accessible.</ui-tab-panel>
    </ui-tabs>
  ),
};

export const StretchedTabs: Story = {
  render: () => (
    <ui-tabs value="tab1">
      <ui-tab-list stretch={true}>
        <ui-tab value="tab1">Tab One</ui-tab>
        <ui-tab value="tab2">Tab Two</ui-tab>
        <ui-tab value="tab3">Tab Three</ui-tab>
      </ui-tab-list>
      <ui-tab-panel value="tab1">First panel</ui-tab-panel>
      <ui-tab-panel value="tab2">Second panel</ui-tab-panel>
      <ui-tab-panel value="tab3">Third panel</ui-tab-panel>
    </ui-tabs>
  ),
};
