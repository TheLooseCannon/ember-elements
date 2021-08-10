import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Overlays/Tooltip',
  parameters: {
    docs: {
      description: {
        component: 'A tooltip is a lightweight popover for showing additional infromation on hover.',
      },
    },
  },
  argTypes: {
    content: {
      description: 'The content that will be displayed inside of the tooltip.',
      table: {
        type: {
          summary: 'Element | string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      control: 'string',
      type: {
        required: true,
      },
    },
    defaultIsOpen: {
      description: 'Initial opened state when uncontrolled.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
      control: 'boolean',
    },
    disabled: {
      description: 'Prevents the popover from appearing when **true**.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
      control: 'boolean',
    },
    intent: {
      description: 'Visual intent color to apply to element. Options are <b>primary,success,warning,danger,none</b>.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'none' },
      },
      control: {
        type: 'select',
        options: {
          primary: 'primary',
          success: 'success',
          warning: 'warning',
          danger: 'danger',
          none: 'none',
        },
      },
    },
    placement: {
      description: 'Direction in which the tooltip is to be opened',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'none' },
      },
      control: {
        type: 'select',
        options: {
          left: 'left',
          right: 'right',
          top: 'top',
          bottom: 'bottom',
          none: 'none',
        },
      },
    },
    isOpen: {
      description:
        'Whether the popover is visible. Passing this prop puts the popover in controlled mode, where the only way to change visibility is by updating this property. If **disabled={true}**, this prop will be ignored, and the popover will remain closed.',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    targetClassName: {
      description: 'Space-delimited string of class names applied to the target element.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
    },
    style: {
      description: 'CSS styles to apply to the target.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: 'text',
    },
    parameters: { actions: { argTypesRegex: '^on.*' } },
  },
};

const Template = (args) => ({
  template: hbs`<div>
  Inline text can have {{this.placement}}
    <Tooltip @content={{Content}} class='bp3-tooltip-indicator' @intent={{this.intent}} @placement='right'>
        this is tool tip
    </Tooltip>
</div>`,
  context: args,
});

export const Tooltip = Template.bind({});
Tooltip.args = {
  content: 'none',
  defaultIsOpen: false,
  disabled: false,
  intent: 'none',
  isOpen: false,
  targetClassName: 'none',
  placement: 'none'
};

export const LeftTooltip = Template.bind({});
LeftTooltip.args = {
  content: 'none',
  defaultIsOpen: false,
  disabled: false,
  intent: 'none',
  isOpen: false,
  targetClassName: 'none',
  placement: 'left'
};
export const RightTooltip = Template.bind({});
RightTooltip.args = {
  content: 'none',
  defaultIsOpen: false,
  disabled: false,
  intent: 'none',
  isOpen: false,
  targetClassName: 'none',
  placement: 'right'
};
export const TopTooltip = Template.bind({});
TopTooltip.args = {
  content: 'none',
  defaultIsOpen: false,
  disabled: false,
  intent: 'none',
  isOpen: false,
  targetClassName: 'none',
  placement: 'top'
};
export const BottomTooltip = Template.bind({});
BottomTooltip.args = {
  content: 'none',
  defaultIsOpen: false,
  disabled: false,
  intent: 'none',
  isOpen: false,
  targetClassName: 'none',
  placement: 'bottom'
};
export const PrimaryTooltip = Template.bind({});
PrimaryTooltip.args = {
  content: 'none',
  defaultIsOpen: false,
  disabled: false,
  intent: 'primary',
  isOpen: false,
  targetClassName: 'none',
};
export const SuccessTooltip = Template.bind({});
SuccessTooltip.args = {
  content: 'none',
  defaultIsOpen: false,
  disabled: false,
  intent: 'success',
  isOpen: false,
  targetClassName: 'none',
};

export const WarningTooltip = Template.bind({});
WarningTooltip.args = {
  content: 'none',
  defaultIsOpen: false,
  disabled: false,
  intent: 'warning',
  isOpen: false,
  targetClassName: 'none',
};


export const DangerTooltip = Template.bind({});
DangerTooltip.args = {
  content: 'none',
  defaultIsOpen: false,
  disabled: false,
  intent: 'danger',
  isOpen: false,
  targetClassName: 'none',
};;;
