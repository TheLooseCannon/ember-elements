import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Form Inputs/Numeric Input',
  parameters: {
    docs: {
      description: {
        component:
          'The `NumericInput` component provides controls for easily inputting, incrementing, and decrementing numeric values.<br><br>## Interactions<br>Values in numeric inputs can be incremented or decremented using both keyboard and mouse interactions.<br><br>**Keyboard interactions**<br> -`↑/↓` - change the value by one step (default: `±1`)<br> - `Shift + ↑/↓` - change the value by one major step (default: `±10`)<br> - `Alt + ↑/↓` - change the value by one minor step (default: `±0.1`)<br><br>Mouse Interactions<br> - `Click ⌃/⌄` - change the value by one step (default: `±1`) <br> - `Shift + Click ⌃/⌄` - change the value by one major step (default: `±10`)<br> - `Alt + Click ⌃/⌄` - change the value by one minor step (default: `±0.1`)<br><br>**Extended Example**<br>This example shows how `NumericInput` can be extended beyond its core functionality. It supports the basic interactions above as well as each of the following types of input:<br> - **Number abbreviations** (e.g. `2.1k`, `-0.3m`)<br> - **Scientific notation** (e.g. `2.1e3`, `-0.3e6`)<br> - **Addition and subtraction expressions** (e.g. `3+2`, `0.1m - 5k + 1`)<br>These special-case inputs are evaluated when `Enter` is pressed (via a custom `onKeyDown` callback) and when the field loses focus (via a custom `onBlur` callback). If the input is invalid when either of these callbacks is trigged, the field will be cleared.',
      },
    },
  },
  argTypes: {
    allowNumericCharactersOnly: {
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
      },
      description:
        'Whether to allow only floating-point number characters in the field, mimicking the native **input[type="number"]**',
      control: 'boolean',
    },
    buttonPosition: {
      description: 'The position of the buttons with respect to the input field.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'right' },
      },
      control: {
        type: 'select',
        options: {
          left: 'left',
          right: 'right',
          none: 'none',
        },
      },
    },
    clampValueOnBlur: {
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      description:
        'Whether the value should be clamped to **[min, max]** on blur. The value will be clamped to each bound only if the bound is defined. Note that native **input[type="number"]** controls do NOT clamp on blur.',
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
      description: 'Whether the input is non-interactive.',
      control: 'boolean',
    },
    fill: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description: 'Whether the numeric input should take up the full width of its container.',
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
    majorStepSize: {
      description:
        'The increment between successive values when shift is held. Pass explicit **null** value to disable this interaction.',
      control: 'number',
      table: {
        type: {
          summary: 'number | null',
        },
        defaultValue: { summary: 10 },
      },
    },
    max: {
      description: 'The maximum value of the input.',
      control: 'number',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    min: {
      description: 'The minimum value of the input.',
      control: 'number',
      table: {
        type: {
          summary: 'number | null',
        },
      },
    },
    minorStepSize: {
      description:
        'The increment between successive values when `alt` is held. Pass explicit **null** value to disable this interaction.',
      control: 'number',
      table: {
        type: {
          summary: 'number | null',
        },
        defaultValue: { summary: 0.1 },
      },
    },
    onButtonClick: {
      description: 'The callback invoked when the value changes due to a button click.',
      table: {
        type: {
          summary: '(valueAsNumber: number, valueAsString: string) => void',
        },
      },
    },
    onValueChange: {
      description: 'The callback invoked when the value changes due to typing, arrow keys, or button clicks.',
      table: {
        type: {
          summary: '(valueAsNumber: number, valueAsString: string) => void',
        },
      },
    },
    placeholder: {
      description: 'The placeholder text in the absence of any value.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: 'text',
    },
    selectAllOnFocus: {
      description: 'Whether the entire text field should be selected on focus.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    selectAllOnIncrement: {
      description: 'Whether the entire text field should be selected on increment.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    stepSize: {
      description: 'The increment between successive values when no modifier keys are held.',
      control: 'number',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 1 },
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
  },
};

const Template = (args) => ({
  template: hbs`<NumericInput
  @disabled={{disabled}}
  @large={{large}}
  @fill={{fill}}
  @leftIcon={{leftIcon}}
  @allowNumericCharactersOnly={{allowNumericCharactersOnly}}
  @selectAllOnFocus={{selectAllOnFocus}}
  @selectAllOnIncrement={{selectAllOnIncrement}}
  @min={{min}}
  @max={{max}}
  @intent={{intent}}
  @buttonPosition={{buttonPosition}}
 ></NumericInput>`,
  context: args,
});

export const NumericInput = Template.bind({});
NumericInput.args = {
  allowNumericCharactersOnly: true,
  buttonPosition: 'right',
  clampValueOnBlur: false,
  disabled: false,
  fill: false,
  intent: 'primary',
  large: false,
  leftIcon: 'none',
  majorStepSize: 10,
  max: 100,
  min: 0,
  minorStepSize: 0.1,
  placeholder: 'string',
  selectAllOnFocus: false,
  selectAllOnIncrement: false,
  stepSize: 0.1,
  value: 'Input text.',
};
