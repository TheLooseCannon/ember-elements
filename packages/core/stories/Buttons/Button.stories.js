import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Button',
  argTypes: {
    label: {
      description: 'Text to be shown inside the button',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none'
        }
      },
    },
    active: {
      control: 'text',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false
        }
      },
      description: 'If set to true, The button will display in an active state. This is equivalent to setting className=\'bp3- active\'.', control: 'boolean', table: { defaultValue: { summary: false } }
    },
    alignText: {
      description: 'Text alignment within button. By default, icons and text will be centered within the button. Passing "left" or "right" will align the button text to that side and push icon and rightIcon to either edge. Passing "center" will center the text and icons together.',
      table: {
        type: {
          summary: 'enum',
          detail: 'possible values: left, right, center'
        },
        defaultValue: {
          summary: false
        }
      },
      control: {
        type: 'select',
        options: {
          Left: 'left',
          Right: 'right',
          Center: 'center',
        }
      }
    },
    class: {
      description: 'A space-delimited list of class names to pass along to a child element.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none'
        }
      },
      control: 'text',
    },
    style: {
      description: 'Inline html style to parent element.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none'
        }
      },
      control: 'text',
    },
    disabled: {
      description: 'Whether this action is non-interactive.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false }
      },
      control: 'boolean'
    },
    intent: {
      description: 'Visual intent color to apply to element. Options are primary,success,warning,danger,none.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false }
      },
      control: {
        type: 'select',
        options: {
          Primary: 'primary',
          Success: 'success',
          Warning: 'warning',
          Danger: 'danger',
          None: 'none',
        }
      }
    },
    fill: {
      description: 'Whether this button should expand to fill its container.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false }
      },
      control: 'boolean'
    },
    icon: {
      description: 'Name of a Blueprint UI icon to render before the text.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
          detail: '<a href="https://dunkinbase.github.io/ember-elements/docs/icon/icons" >IconName</a>',
        },
        defaultValue: { summary: 'none' }
      },
    },
    iconSize: {
      description: 'Size of icon',
      control: 'number',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 16 }
      },
    },
    large: {
      control: 'boolean',
      description: 'Whether this button should use large styles.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false
        }
      },
    },
    minimal: {
      control: 'boolean',
      description: 'Whether this button should use minimal styles.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false
        }
      }
    },
    rightIcon: {
      description: 'Name of a Blueprint UI icon to render after the text.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
          detail: '<a href="https://dunkinbase.github.io/ember-elements/docs/icon/icons" >IconName</a>',
        },
        defaultValue: { summary: 'none' }
      },
    },
    small: {
      control: 'boolean',
      description: 'Whether this button should use small styles.',
      table: {
        type: {
          summary: 'boolean',
        }
      },
      defaultValue: {
        summary: false
      }
    },
    type: {
      control: 'string',
      description: 'The type property specifies the type of button.',
      table: {
        type: {
          summary: 'string',
        }
      },
      defaultValue: {
        summary: 'none'
      }
    },
  },
};

const Template = (args) => ({
  template: hbs`<Button
      @intent={{this.intent}}
      @active={{this.active}}
      @alignText={{this.alignText}}
      @class={{this.class}}
      @style={{this.style}}
      @disabled={{this.disabled}}
      @intent={{this.intent}}
      @fill={{this.fill}}
      @icon={{this.icon}}
      @iconSize={{this.iconSize}}
      @large={{this.large}}
      @minimal={{this.minimal}}
      @rightIcon={{this.rightIcon}}
      @small={{this.small}}
      @text={{this.text}}
      @type={{this.type}}
    >
      {{this.label}}
    </Button>`,
  context: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Sample Button',
  active: false,
  alignText: 'center',
  class: '',
  style: '',
  disabled: false,
  intent: 'primary',
  fill: false,
  icon: 'lock',
  iconSize: 16,
  large: false,
  minimal: false,
  rightIcon: 'share',
  small: false,
  text: '',
  type: ''
};

export const Success = Template.bind({});
Success.args = {
  label: 'Sample Success Button',
  active: false,
  alignText: 'center',
  class: '',
  style: '',
  disabled: false,
  intent: 'success',
  fill: false,
  icon: '',
  iconSize: 16,
  large: false,
  minimal: false,
  rightIcon: '',
  small: false,
  text: '',
  type: ''
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Sample Warning Button',
  active: false,
  alignText: 'center',
  class: '',
  style: '',
  disabled: false,
  intent: 'warning',
  fill: false,
  icon: '',
  iconSize: 16,
  large: false,
  minimal: false,
  rightIcon: '',
  small: false,
  text: '',
  type: ''
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Sample Danger Button',
  active: false,
  alignText: 'center',
  class: '',
  style: '',
  disabled: false,
  intent: 'danger',
  fill: false,
  icon: '',
  iconSize: 16,
  large: false,
  minimal: false,
  rightIcon: '',
  small: false,
  text: '',
  type: ''
};

export const ActiveButton = Template.bind({});
ActiveButton.storyName = 'Active Button';
ActiveButton.args = {
  label: 'Sample Active Button',
  active: true,
  alignText: 'center',
  class: '',
  style: '',
  disabled: false,
  intent: 'primary',
  fill: false,
  icon: '',
  iconSize: 16,
  large: false,
  minimal: false,
  rightIcon: '',
  small: false,
  text: '',
  type: ''
};

export const DisabledButton = Template.bind({});
DisabledButton.storyName = 'Disabled Button';
DisabledButton.args = {
  label: 'Sample Disabled Button',
  active: false,
  alignText: 'center',
  class: '',
  style: '',
  disabled: true,
  intent: 'primary',
  fill: false,
  icon: '',
  iconSize: 16,
  large: false,
  minimal: false,
  rightIcon: '',
  small: false,
  text: '',
  type: ''
};

export const LargeButton = Template.bind({});
LargeButton.storyName = 'Large Button';
LargeButton.args = {
  label: 'Large Button',
  active: false,
  alignText: 'center',
  class: '',
  style: '',
  disabled: false,
  intent: 'primary',
  fill: false,
  icon: '',
  iconSize: 16,
  large: true,
  minimal: false,
  rightIcon: '',
  small: false,
  text: '',
  type: ''
};

export const MinimalButton = Template.bind({});
MinimalButton.storyName = 'Minimal Button';
MinimalButton.args = {
  label: 'Minimal Button',
  active: false,
  alignText: 'center',
  class: '',
  style: '',
  disabled: false,
  intent: 'primary',
  fill: false,
  icon: '',
  iconSize: 16,
  large: false,
  minimal: true,
  rightIcon: '',
  small: false,
  text: '',
  type: ''
};

export const SmallButton = Template.bind({});
SmallButton.storyName = 'Small Button';
SmallButton.args = {
  label: 'Large Button',
  active: false,
  alignText: 'center',
  class: '',
  style: '',
  disabled: false,
  intent: 'primary',
  fill: false,
  icon: '',
  iconSize: 16,
  large: false,
  minimal: false,
  rightIcon: '',
  small: true,
  text: '',
  type: ''
};
// TextWithAction.parameters = { notes: 'My notes on a button with emojis' };

// export const ActiveButton = () => ({
//   template: hbs`
//     <button {{action onClick}}>
//       Trigger Action
//     </button>
//   `,
//   context: {
//     onClick: () => action('This was clicked')(),
//   },
// });
export const ButtonWithLinkToAnotherStory = () => ({
  template: hbs`
    <button {{action onClick}}>
      Go to Welcome Story
    </button>
  `,
  context: {
    onClick: linkTo('example-introduction--page'),
  },
});

ButtonWithLinkToAnotherStory.storyName = 'button with link to another story';
