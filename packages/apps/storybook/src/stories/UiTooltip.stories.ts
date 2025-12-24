import type { Meta, StoryObj } from '@storybook/web-components';
import type { Components } from '@components/core';
import { html } from 'lit';

type UiTooltipProps = Components.UiTooltip;

const meta: Meta<UiTooltipProps> = {
  title: 'Components/UiTooltip',
  tags: ['autodocs'],
  render: (args) => html`
    <ui-tooltip
      content=${args.content}
      placement=${args.placement}
      .disabled=${args.disabled}
      .showDelay=${args.showDelay}
      .hideDelay=${args.hideDelay}
      .offsetDistance=${args.offsetDistance}
    >
      <button style="padding: 8px 16px; cursor: pointer;">Hover me</button>
    </ui-tooltip>
  `,
  argTypes: {
    content: {
      control: 'text',
      description: 'The content to display in the tooltip',
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
      description: 'Placement of the tooltip relative to the trigger',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tooltip is disabled',
    },
    showDelay: {
      control: 'number',
      description: 'Delay before showing the tooltip (in ms)',
    },
    hideDelay: {
      control: 'number',
      description: 'Delay before hiding the tooltip (in ms)',
    },
    offsetDistance: {
      control: 'number',
      description: 'Offset from the trigger element (in px)',
    },
  },
  args: {
    content: 'This is a tooltip',
    placement: 'top',
    disabled: false,
    showDelay: 0,
    hideDelay: 0,
    offsetDistance: 8,
  },
};

export default meta;
type Story = StoryObj<UiTooltipProps>;

export const Default: Story = {};

export const Placements: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; padding: 60px;">
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
  `,
};

export const WithDelay: Story = {
  args: {
    content: 'Appears after 500ms',
    showDelay: 500,
    hideDelay: 200,
  },
};

export const Disabled: Story = {
  args: {
    content: 'You will not see this',
    disabled: true,
  },
};
