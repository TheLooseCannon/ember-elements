import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Form Inputs/Tag Input',
  parameters: {
    docs: {
      description: {
        component:
          'Tag inputs render `Tags` inside an input, followed by an actual text input. The container is merely styled to look like a Blueprint input; the actual editable element appears after the last tag. Clicking anywhere on the container will focus the text input for seamless interaction.<br><br>Props<br>`TagInput` **must be controlled**, meaning the `values` prop is required and event handlers are strongly suggested. Typing in the input and pressing `enter` will **add new items** by invoking callbacks. If `addOnBlur` is set to true, clicking out of the component will also trigger the callback to add new items. A `separator` prop is supported to allow multiple items to be added at once; the default splits on commas and newlines.<br><br>**Tags can be removed** by clicking their  buttons, or by pressing `backspace` repeatedly. Arrow keys can also be used to focus on a particular tag before removing it. The cursor must be at the beginning of the text input for these interactions.<br><br>`Tag` **appearance can be customized** with `tagProps`: supply an object to apply the same props to every tag. Tag values must be an array of strings so you may need a transformation step between your state and these props.<br><br>`TagInput` provides granular `onAdd` and `onRemove` **event props**, which are passed the added or removed items in response to the user interactions above. It also provides `onChange`, which combines both events and is passed the updated `values` array, with new items appended to the end and removed items filtered away. <br><br>The `<input>` element can be controlled directly via the `inputValue` and `onInputChange` props. Additional properties (such as custom event handlers) can be applied to the input via `inputProps`.',
      },
    },
  },
  argTypes: {
    addOnBlur: {
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      description:
        'If true, **onAdd** will be invoked when the input loses focus. Otherwise, **onAdd** is only invoked when **enter** is pressed.',
      control: 'boolean',
    },
    addOnPaste: {
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
      },
      description:
        'If true, **onAdd** will be invoked when the user pastes text containing the **separator** into the input. Otherwise, pasted text will remain in the input.<br>**Note**: For example, if **addOnPaste=true** and **separator="\\n"** (new line), then:<br> - Pasting **"hello"** will not invoke **onAdd**<br> - Pasting **"hello\\n"** will invoke onAdd with **["hello"]**<br> - Pasting **"hello\\nworld"** will invoke onAdd with **["hello", "world"]**>',
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
    disabled: {
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      description:
        "Whether the component is non-interactive. Note that you'll also need to disable the component's yield, if appropriate.",
      control: 'boolean',
    },
    fill: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description: 'Whether the tag input should take up the full width of its container.',
      control: 'boolean',
    },
    inputProps: {
      description: 'React props to pass to the **<input>** element.',
      control: 'text',
      table: {
        type: {
          summary: 'HTMLInputProps',
        },
      },
    },
    inputValue: {
      description: 'Controlled value of the **<input>** element.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
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
      description:
        'If set to **true** , the input will display with larger styling. This is equivalent to setting **Classes.LARGE** via className on the parent control group and on the child input group.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: 'boolean',
    },
    leftIcon: {
      description:
        'Name of a Blueprint UI icon (or an icon element) to render on the left side of input..<br><a href="https://dunkinbase.github.io/ember-elements/docs/icon/icons" >IconName</a>',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'none' },
      },
    },
    onAdd: {
      table: {
        type: {
          summary: '(values: string[], method: TagInputAddMethod) => boolean | void',
        },
      },
      description:
        'Callback invoked when new tags are added by the user pressing **enter** on the input. Receives the current value of the input field split by **separator** into an array. New tags are expected to be appended to the list.<br>The input will be cleared after **onAdd** is invoked unless the callback explicitly returns **false**. This is useful if the provided **value** is somehow invalid and should not be added as a tag',
    },
    onChange: {
      table: {
        type: {
          summary: '(values: Array) => boolean | void',
        },
      },
      description:
        'Callback invoked when new tags are added or removed. Receives the updated list of **values**: new tags are appended to the end of the list, removed tags are removed at their index.<br>Like **onAdd**, the input will be cleared after this handler is invoked unless the callback explicitly returns **false**.<br>This callback essentially implements basic **onAdd** and **onRemove** functionality and merges the two handlers into one to simplify controlled usage.',
    },
    onKeyDown: {
      table: {
        type: {
          summary: '(values: Array) => boolean | void',
        },
      },
      description:
        'Callback invoked when the user depresses a keyboard key. Receives the event and the index of the active tag (or **undefined** if focused in the input).',
    },
    onKeyUp: {
      table: {
        type: {
          summary: '(values: Array) => boolean | void',
        },
      },
      description:
        'Callback invoked when the user releases a keyboard key. Receives the event and the index of the active tag (or **undefined** if focused in the input).',
    },
    onRemove: {
      table: {
        type: {
          summary: '(value: string, index: number) => void',
        },
      },
      description:
        'Callback invoked when the user clicks the X button on a tag. Receives value and index of removed tag.',
    },
    placeholder: {
      description:
        'Input placeholder text which will not appear if **values** contains any items (consistent with default HTML input behavior). Use **inputProps.placeholder** if you want the placeholder text to ***always*** appear.<br>If you define both **placeholder** and **inputProps.placeholder**, then the former will appear when **values** is empty and the latter at all other times.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: 'text',
    },
    separator: {
      description:
        'Separator pattern used to split input text into multiple values. Default value splits on commas and newlines. Explicit **false** value disables splitting (note that **onAdd** will still receive an array of length 1).',
      table: {
        type: {
          summary: 'string | RegExp | false',
        },
        defaultValue: { summary: '/[,\\n\\r]/' },
      },
      control: 'text',
    },
    tagProps: {
      description: 'It support all properties of **Tag** component.',
      table: {
        type: {
          summary: 'tagProps',
        },
      },
    },
    values: {
      description:
        'Controlled tag values. Each value will be rendered inside a **Tag**, which can be customized using **tagProps**. Therefore, any valid htmlElement can be used as a **TagInput** value; falsy values will not be rendered.',
      table: {
        type: {
          summary: 'Array',
        },
      },
      control: 'text',
      type: { required: true },
    },
  },
};

const Template = (args) => ({
  template: hbs`<TagInput
 @large={{large}}
 @disabled={{disabled}}
 @leftIcon={{if leftIcon "user" undefined }}
 @addOnBlur={{addOnBlur}}
 @addOnPaste={{addOnPaste}}
 @fill={{fill}}
 @intent={{intent}}
 @placeholder="Separate values with commas..."
 @tagProps={{getTagProps}}
 @values={{values}}
 @onChange={{action (mut this.values)}}
>
<Button
   @disabled={{disabled}}
   @icon={{if (gt values.length  1) "cross" "refresh"}}
   @minimal={{true}}
   @onClick={{action "handleClear"}}
>
</Button>
</TagInput>`,
  context: args,
});

export const TagInput = Template.bind({});
TagInput.args = {
  addOnBlur: false,
  addOnPaste: true,
  disabled: false,
  fill: false,
  inputValue: '',
  intent: 'primary',
  large: false,
  leftIcon: '',
  placeholder: 'place holder ...',
  separator: '/[,\\n\\r]/',
  values: ['hello', 'world'],
};
