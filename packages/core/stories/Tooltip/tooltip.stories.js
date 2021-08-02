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
  template: hbs`<div>Inline text can have
    <ToolTip @content={{Content}} class='bp3-tooltip-indicator'>
        this is tool tip
    </ToolTip>
    &nbsp;
</div>
<div>
    Or,
    <ToolTip @content={{lotsOfText}}>
        hover anywhere over this whole line.
    </ToolTip>
</div>
<div>This line's tooltip
    <ToolTip @disabled=true class='bp3-tooltip-indicator'>
        is disabled.
    </ToolTip>
</div>
<div>
    This line's tooltip
    <ToolTip @isOpen={{isOpen}} class='bp3-tooltip-indicator'>
        is controlled by external state.
    </ToolTip>
    <label class="bp3-control bp3-switch" {{action 'onisOpen'}}
        style=" display: inline-block; margin-bottom: 0px; margin-left: 20px;">
        {{#if isOpen}}
        <input type="checkbox" checked>
        {{else}}
        <input type="checkbox">
        {{/if}}
        <span class="bp3-control-indicator"></span>
        Open.
    </label>
</div>
<div>
    <ToolTip @content={{Content}} @placement='left' class='bp3-tooltip-indicator' @intent='primary'>
        Available
    </ToolTip>
    &nbsp;
    <ToolTip @content={{Content}} @placement='top' class='bp3-tooltip-indicator' @intent='success'>
        in the full
    </ToolTip>
    &nbsp;
    <ToolTip @content={{Content}} @placement='bottom' class='bp3-tooltip-indicator' @intent='warning'>
        range of
    </ToolTip>
    &nbsp;
    <ToolTip @content={{Content}} @placement='right' class='bp3-tooltip-indicator' @intent='danger'>
        visual intents!
    </ToolTip>
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
};
