import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Form Controls/CheckBox',
  parameters: {
    docs: {
      description: {
        component:
          'A checkbox allows the user to toggle between checked, unchecked, and (rarely) indeterminate states.',
      },
    },
  },
  argTypes: {
    alignIndicator: {
      description: 'Alignment of the indicator within container. The options are **left**, **center**, **right**.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    checked: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description:
        'Whether the control is checked.',
      control: 'boolean',
    },
    class: {
      description: 'A space-delimited list of class names to pass along to a child element.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    defaultChecked: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description:
        'Whether the control is initially checked (uncontrolled mode).',
      control: 'boolean',
    },
    defaultIndeterminate: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description:
        'Whether this checkbox is initially indeterminate (uncontrolled mode).',
      control: 'boolean',
    },
    disabled: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description:
        'Whether the control is non-interactive.',
      control: 'boolean',
    },
    indeterminate: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description:
        'Whether this checkbox is indeterminate, or "partially checked." The checkbox will appear with a small dash instead of a tick to indicate that the value is not exactly true or false. Note that this prop takes precendence over checked: if a checkbox is marked both checked and indeterminate via props, it will appear as indeterminate in the DOM.',
      control: 'boolean',
    },
    inline: {
      control: 'boolean',
      description: 'Whether the control should appear as an inline element.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    label: {
      description:
        'Text label for the control.',
      control: 'string',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    labelElement: {
      description:
        'Html Element for check box instead of label.',
      control: 'string',
      table: {
        type: {
          summary: 'string | HtmlElement',
        },
      },
    },
    large: {
      control: 'boolean',
      description: 'Whether this control should use large styles.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    onChange: {
      description: 'Event handler invoked when input value is changed.',
      table: {
        type: {
          summary: 'HTMLInputElement',
        },
      },
    },
  },
};

const Template = (args) => ({
  template: hbs`<div>
<label class="bp3-label">Assign responsibility</label>
<CheckBox
  @disabled={{disabled}}
  @inline={{inline}}
  @large={{large}}
  @alignIndicator={{alignIndicator}}
  @defaultIndeterminate={{true}}
 >
 Gilad Gray
 </CheckBox>
<CheckBox
  @disabled={{disabled}}
  @inline={{inline}}
  @large={{large}}
  @alignIndicator={{alignIndicator}}
  >
 Jason Killian
 </CheckBox>
<CheckBox
  @disabled={{disabled}}
  @inline={{inline}}
  @large={{large}}
  @alignIndicator={{alignIndicator}}
 >
 Antoine Llorca
 </CheckBox>
 </div>`,
  context: args,
});

export const CheckedCheckbox = Template.bind({});
CheckedCheckbox.args = {
  alignIndicator: 'left',
  checked: true,
  defaultChecked: false,
  defaultIndeterminate: false,
  disabled: false,
  indeterminate: false,
  inline: false,
  label: 'Text label for the control.',
  large: false
};

export const IndeterminateCheckbox = Template.bind({});
IndeterminateCheckbox.args = {
  alignIndicator: 'left',
  checked: false,
  defaultChecked: false,
  defaultIndeterminate: false,
  disabled: false,
  indeterminate: true,
  inline: false,
  label: 'Text label for the control.',
  large: false
};

export const LargeCheckbox = Template.bind({});
LargeCheckbox.args = {
  alignIndicator: 'left',
  checked: false,
  defaultChecked: false,
  defaultIndeterminate: false,
  disabled: false,
  indeterminate: false,
  inline: false,
  label: 'Text label for the control.',
  large: true
};
