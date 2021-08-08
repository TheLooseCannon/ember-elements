import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Form Controls/Switch',
  parameters: {
    docs: {
      description: {
        component:
          'A switch is simply an alternate appearance for a `checkbox` that simulates on/off instead of checked/unchecked.',
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
    inline: {
      control: 'boolean',
      description: 'Whether the control should appear as an inline element.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    innerLabel: {
      description:
        'Text to display inside the switch indicator when unchecked.',
      control: 'string',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    innerLabelChecked: {
      description:
        'Text to display inside the switch indicator when checked. If innerLabel is provided and this prop is omitted, then innerLabel will be used for both states.',
      control: 'string',
      table: {
        type: {
          summary: 'string',
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
        'Html Element for switch instead of label',
      control: 'string',
      table: {
        type: {
          summary: 'string | HtmlElement',
        },
      },
    },
    large: {
      onChange: {
        description: 'Event handler invoked when input value is changed.',
        table: {
          type: {
            summary: 'HTMLInputElement',
          },
        },
      },
    },
  }
};

const Template = (args) => ({
  template: hbs`<Switch
  @disabled={{disabled}}
  @inline={{inline}}
  @large={{large}}
  @alignIndicator={{alignIndicator}}
  @labelElement="<strong>Enabled</strong>"
 ></Switch>
<Switch
  @disabled={{disabled}}
  @inline={{inline}}
  @large={{large}}
  @alignIndicator={{alignIndicator}}
  @labelElement="<u>Cooperative</u>"
  @defaultChecked="true"
 ></Switch>
<Switch
  @disabled={{disabled}}
  @inline={{inline}}
  @large={{large}}
  @alignIndicator={{alignIndicator}}
  @labelElement="Containing Text"
  @innerLabelChecked="on"
  @innerLabel="off"
 ></Switch>`,
  context: args,
});

export const Switch = Template.bind({});
Switch.args = {
  alignIndicator: 'left',
  checked: false,
  defaultChecked: false,
  disabled: false,
  inline: false,
  innerLabel: 'Text to display inside the switch indicator when unchecked.',
  innerLabelChecked: 'innerLabel Checked',
  label: 'Text label for the control.',
  large: false
};
