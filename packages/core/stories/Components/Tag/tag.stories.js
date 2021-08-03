import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Components/Tag',
  parameters: {
    docs: {
      description: {
        component: 'Tags are great for lists of strings.',
      },
    },
  },
  description: 'Storybook helps you build UI components in isolation from your app',
  argTypes: {
    active: {
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
      description: 'Whether the tag should appear in an active state.',
      control: 'boolean',
    },

    fill: {
      description: 'Whether the tag should take up the full width of its container.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    icon: {
      description:
        'Name of a Blueprint UI icon to render before the text.<br><a href="https://dunkinbase.github.io/ember-elements/docs/icon/icons" >IconName</a>',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'none' },
      },
    },
    iconSize: {
      description: 'Size of icon',
      control: 'number',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 16 },
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
    interactive: {
      description:
        'Whether the tag should visually respond to user interactions. If set to <b>true</b>, hovering over the tag will change its color and mouse cursor.<br><br>Recommended when <b>onClick</b> is also defined.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    large: {
      control: 'boolean',
      description: 'Whether this tag should use large styles.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    minimal: {
      control: 'boolean',
      description: 'Whether this tag should use minimal styles.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
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
    round: {
      control: 'boolean',
      description: 'Whether this tag should have rounded ends.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      defaultValue: {
        summary: false,
      },
    },
    removable: {
      control: 'boolean',
      description: 'Whether this tag should have a close icon on the right',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      defaultValue: {
        summary: false,
      },
    },
    style: {
      description: 'Inline html style to parent element.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      control: 'text',
    },
    value: {
      control: 'text',
      description: 'Action Text',
      table: {
        type: {
          summary: 'string',
        },
      },
      defaultValue: {
        summary: 'none',
      },
    },
  },
};

const Template = (args) => ({
  template: hbs`<Tag
      @fill={{this.fill}}
      @large={{this.large}}
      @minimal={{this.minimal}}
      @active={{this.active}}
      @interactive={{this.interactive}}
      @round={{this.round}}
      @icon={{this.icon}}
      @rightIcon={{this.rightIcon}}
      @intent={{this.intent}}
      @value={{this.value}}
      @removable={{this.removable}}
    >
    {{this.value}}
    </Tag>`,
  // @onRemove={{action 'onRemove'}}
  context: args,
});

export const PrimaryTag = Template.bind({});
PrimaryTag.args = {
  fill: false,
  large: false,
  minimal: false,
  active: false,
  interactive: false,
  round: false,
  icon: '',
  rightIcon: '',
  intent: 'primary',
  value: 'Sample Tag',
  removable: false,
};

export const SuccessTag = Template.bind({});
SuccessTag.args = {
  fill: false,
  large: false,
  minimal: false,
  active: false,
  interactive: false,
  round: false,
  icon: '',
  rightIcon: '',
  intent: 'success',
  value: 'Sample Tag',
  removable: false,
};

export const WarningTag = Template.bind({});
WarningTag.args = {
  fill: false,
  large: false,
  minimal: false,
  active: false,
  interactive: false,
  round: false,
  icon: '',
  rightIcon: '',
  intent: 'warning',
  value: 'Sample Tag',
  removable: false,
};

export const DangerTag = Template.bind({});
DangerTag.args = {
  fill: false,
  large: false,
  minimal: false,
  active: false,
  interactive: false,
  round: false,
  icon: '',
  rightIcon: '',
  intent: 'danger',
  value: 'Sample Tag',
  removable: false,
};

export const LargeTag = Template.bind({});
LargeTag.args = {
  fill: false,
  large: true,
  minimal: false,
  active: false,
  interactive: false,
  round: false,
  icon: '',
  rightIcon: '',
  intent: 'primary',
  value: 'Sample Tag',
  removable: false,
};

export const MinimalTag = Template.bind({});
MinimalTag.args = {
  fill: false,
  large: false,
  minimal: true,
  active: false,
  interactive: false,
  round: false,
  icon: '',
  rightIcon: '',
  intent: 'primary',
  value: 'Sample Tag',
  removable: false,
};

export const ActiveTag = Template.bind({});
ActiveTag.args = {
  fill: false,
  large: false,
  minimal: false,
  active: true,
  interactive: false,
  round: false,
  icon: '',
  rightIcon: '',
  intent: 'primary',
  value: 'Sample Tag',
  removable: false,
};

export const InteractiveTag = Template.bind({});
InteractiveTag.args = {
  fill: false,
  large: false,
  minimal: false,
  active: false,
  interactive: true,
  round: false,
  icon: '',
  rightIcon: '',
  intent: 'primary',
  value: 'Sample Tag',
  removable: false,
};

export const RoundTag = Template.bind({});
RoundTag.args = {
  fill: false,
  large: false,
  minimal: false,
  active: false,
  interactive: false,
  round: true,
  icon: '',
  rightIcon: '',
  intent: 'primary',
  value: 'Sample Tag',
  removable: false,
};

export const TagWithIcon = Template.bind({});
TagWithIcon.args = {
  fill: false,
  large: false,
  minimal: false,
  active: false,
  interactive: false,
  round: false,
  icon: 'share',
  rightIcon: 'lock',
  intent: 'primary',
  value: 'Sample Tag',
  removable: false,
};
