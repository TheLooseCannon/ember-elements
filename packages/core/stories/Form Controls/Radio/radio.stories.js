import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Form Controls/Radio',
  parameters: {
    docs: {
      description: {
        component:
          'A radio button typically represents a single option in a mutually exclusive list (where only one item can be selected at a time). Ember-elements provides `Radio` and `RadioGroup` components for these two layers.<br><br>Props<br>Typically, radio buttons are used in a group to choose one option from several, similar to how a `<select>` tag contains several `<option>` tags. As such, you can use the `RadioGroup` component with a series of Radio children. `RadioGroup` is responsible for managing state and interaction.',
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
    value: {
      type: {
        required: true
      },
      description:
        'Value of this option.',
      control: 'string',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
  },
};

const Template = (args) => ({
  template: hbs`<RadioGroup
  @label="Determine lunch"
  @name="group"
  @inline={{inline}}
  @selectedValue={{value}}
  @disabled={{disabled}}
  @onChange={{action "handleRadioChange"}} as |R|
>
  <R.Radio
    @value="one"
    @large={{large}}
    @alignIndicator={{alignIndicator}}
  >
  Soup
   </R.Radio>
  <R.Radio
    @value="two"
    @large={{large}}
    @alignIndicator={{alignIndicator}}
   >
   Salad
   </R.Radio>
  <R.Radio
    @value="three"
    @large={{large}}
    @alignIndicator={{alignIndicator}}
   >
   Sandwich
   </R.Radio>
</RadioGroup>`,
  context: args,
});

export const Radio = Template.bind({});
Radio.args = {
  alignIndicator: 'left',
  checked: false,
  defaultChecked: false,
  disabled: false,
  inline: false,
  label: 'Text label for the control.',
  large: false,
  value: 'string',
};
