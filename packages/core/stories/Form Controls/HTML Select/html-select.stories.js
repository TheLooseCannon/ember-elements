import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Form Controls/HTML Select',
  parameters: {
    docs: {
      description: {
        component:
          '`HTMLSelect` component is similar to normal html `<select>` tags requires a wrapper element to customize the dropdown caret.',
      },
    },
  },
  argTypes: {
    class: {
      description: 'A space-delimited list of class names to pass along to a child element.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    disabled: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description:
        "Whether this element is non-interactive.",
      control: 'boolean',
    },
    fill: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description: 'Whether this element should fill its container.',
      control: 'boolean',
    },
    iconProps: {
      description: 'rops to spread to the **<Icon>** element.',
      table: {
        type: {
          summary: 'object',
        },
      },
    },
    large: {
      description:
        'Whether to use large styles.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: 'boolean',
    },
    minimal: {
      description:
        'Whether to use minimal styles.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: 'boolean',
    },
    multiple: {
      description:
        'Multiple select is not supported.',
      table: {
        type: {
          summary: 'never',
        },
      },
    },
    onChange: {
      table: {
        type: {
          summary: 'HTMLSelectElement',
        },
      },
      description:
        'Change event handler. Use **event.target.value** to access the new value.',
      control: 'boolean',
    },
    options: {
      table: {
        type: {
          summary: 'Array<string | number | IOptionProps>',
        },
      },
      description:
        'Shorthand for supplying options: an array of basic types or { label?, value } objects. If no label is supplied, value will be used as the label.',
    },
  },
};

const Template = (args) => ({
  template: hbs`<HtmlSelect
  @options={{OPTIONS}}
  @disabled={{disabled}}
  @fill={{fill}}
  @large={{large}}
  @minimal={{minimal}}
  @onChange={{action 'onChange'}}
 >
</HtmlSelect>`,
  context: args,
});

export const HTMLSelect = Template.bind({});
HTMLSelect.args = {
  disabled: false,
  fill: false,
  large: false,
  minimal: false,
};
