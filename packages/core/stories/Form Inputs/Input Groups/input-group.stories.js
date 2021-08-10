import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Form Inputs/Input Group',
  parameters: {
    docs: {
      description: {
        component:
          'An `InputGroup` component allows you to add icons and buttons within a text input to expand its functionality. For example, you might use an input group to build a visibility toggle for a password field. The `Input` tag specifies an input field where the user can enter data.<br<br>## Props<br>The `InputGroup` component supports one non-interactive icon on the left side and one arbitrary element on the right side. Unlike the CSS approach, `InputGroup` supports content of any length on the right side (not just icon buttons) because it is able to measure the content and ensure there is always space for it. <br>`InputGroup` can be used just like a standard `input` element, in a controlled or uncontrolled fashion. In addition to its own props, it supports all valid props for HTML `<input>` elements and proxies them to that element in the DOM; the most common ones are detailed below.',
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
    style: {
      description: 'Inline html style to parent element.',
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
        'Whether the input is non-interactive. Note that **rightElement** must be disabled separately; this prop will not affect it.',
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
    large: {
      description: 'Whether this input should use large styles.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: 'boolean',
    },
    leftIcon: {
      description:
        'Name of a Blueprint UI icon to left side of input.<br><a href="https://dunkinbase.github.io/ember-elements/docs/icon/icons" >IconName</a>',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'none' },
      },
    },
    iconSize: {
      description: 'Assign Icon size.',
      control: 'number',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 16 },
      },
    },
    large: {
      control: 'boolean',
      description: 'Whether this input should use large styles.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    round: {
      control: 'boolean',
      description: 'Whether this input should use round styles.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    rightIcon: {
      description:
        'Name of a Blueprint UI icon to render after the text.<br><a href="https://dunkinbase.github.io/ember-elements/docs/icon/icons" >IconName</a>',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'none' },
      },
    },
    value: {
      description: 'Input text.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: 'text',
    },
    small: {
      control: 'boolean',
      description: 'Whether this input should use small styles.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    onChange: {
      description: 'Change event handler. Use **event.target.value** for new value.',
      table: {
        type: {
          summary: '(HTMLElement, string | number | integer)=> void',
        },
      },
    },
    onClick: {
      description: 'Click event handler',
      table: {
        type: {
          summary: '(data:string, event: MouseEvent<HTMLElement>) => void',
        },
      },
    },
    onDoubleClick: {
      description: 'When mouse button double-clicked.',
      table: {
        type: {
          summary: '(data:string, event: MouseEvent<HTMLElement>) => void',
        },
      },
    },
    onKeyUp: {
      description: 'When user release a key from input.',
      table: {
        type: {
          summary: '(data:string, event: MouseEvent<HTMLElement>) => void',
        },
      },
    },
    onBlur: {
      description: 'When a user leaves an input field.',
      table: {
        type: {
          summary: '(data:string, event: MouseEvent<HTMLElement>) => void',
        },
      },
    },
    onKeyDown: {
      description: 'When a user is pressing/holding down a key.',
      table: {
        type: {
          summary: '(data:string, event: MouseEvent<HTMLElement>) => void',
        },
      },
    },
    leftIconClick: {
      description: 'Left icon clicked.',
      table: {
        type: {
          summary: '(data:string, event: MouseEvent<HTMLElement>) => void',
        },
      },
    },
    rightIconClick: {
      description: 'Right icon clicked.',
      table: {
        type: {
          summary: '(data:string, event: MouseEvent<HTMLElement>) => void',
        },
      },
    },
  },
};

const Template = (args) => ({
  template: hbs`<InputGroup
  @leftIcon='filter'
  @placeholder='Any text....'
  @disabled={{isDisabled}}
  @large={{isLarge}}
  @small={{isSmall}}
  @intent={{intent}}
>
</InputGroup>
<InputGroup
  @type={{type}}
  @placeholder='Enter your password...'
  @disabled={{isDisabled}}
  @large={{isLarge}}
  @small={{isSmall}}
  @intent={{intent}} >
  <Tooltip @content={{"what is this?"}} @disabled={{isDisabled}} >
    <Button @icon={{icon}} @disabled={{isDisabled}}
    @intent={{'success'}} @minimal=true @onClick={{this.OnClick}} />
  </Tooltip>
</InputGroup>
<InputGroup
  @leftIcon='tag'
  @placeholder='Find tags'
  @disabled={{isDisabled}}
  @large={{isLarge}}
  @small={{isSmall}}
  @intent={{intent}}
  @onkeyDown={{this.onkeyDown}}>
  <Tag @minimal=true @value={{tagValueChange}}></Tag>
</InputGroup>
<InputGroup
  @placeholder='Add people or groups...'
  @disabled={{isDisabled}}
  @large={{isLarge}}
  @small={{isSmall}}
  @intent={{intent}}
  >
  <Select @data={{data}} @type='button'
   @selected={{selected}}
   @minimal={{false}}
   @ButtonProps={{ButtonProps}}
   @onSelect={{this.optionSelected}}>
  </Select>
  </InputGroup>`,
  context: args,
});

export const InputGroup = Template.bind({});
InputGroup.args = {
  disabled: false,
  fill: false,
  hasSelection: false,
  large: false,
  text: 'HtmlElement',
  defaultValue: '"Choose file..."',
};
