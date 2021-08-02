import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Overlays/Popover',
  parameters: {
    docs: {
      description: {
        component:
          'Popover display floating content next to a target button element. Here there is a default button for popover, Popovers will render based button click. `PopOver` is built on top of the <b><a href="https://popper.js.org/" >Popper.js</a></b>',
      },
    },
  },
  argTypes: {
    class: {
      description: 'A space-delimited list of class names to pass along to a child element.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      control: 'string',
    },
    style: {
      description: 'Inline html style to parent element.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: 'text',
    },
    btnTitle: {
      description: 'Button text of popover',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: 'text',
    },
    minimal: {
      description: 'Whether this popover button should use minimal styles.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: 'boolean',
    },
    active: {
      description:
        "If set to **true**, the button will display in an active state. This is equivalent to setting **className='bp3-active'**.",
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
    icon: {
      description:
        '<a href="https://dunkinbase.github.io/ember-elements/docs/icon/icons" >IconName</a><br>Name of a Blueprint UI icon to render after the text.',
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
    iconSize: {
      description: 'Size of the icon.',
      control: 'number',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 16,
        },
      },
    },
    placement: {
      description: 'The position (relative to the target) at which the popover should appear',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'bottom',
        },
      },
    },
    popOpenClickFun: {
      description: 'It invoked when popover button click action occurred.',
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
    arrow: {
      description: 'Popover arrow indicator',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    open: {
      description: 'External function to close popover',
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
    canEscapeKeyClose: {
      description: 'Esc Key to close popover',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    isOutClickClose: {
      description: 'Out side click to close popover',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    parameters: { actions: { argTypesRegex: '^on.*' } },
  },
};

const Template = (args) => ({
  template: hbs`<PopOver @btnTitle='Open popover' @open={{open}}
 @intent="primary" @icon='code'
 @isOutClickClose={{canOutsideClickClose}} @placement={{placement}}
 @arrow={{arrow}} @canEscapeKeyClose={{canEscapeKeyClose}}>
  <div>
    <h5 class="bp3-heading">Confirm deletion</h5>
    <p>Are you sure you want to delete these items? You won't be able to recover them.</p>
    <div style="display: flex; justify-content: flex-end; margin-top: 15px;">
      <Button  onClick={{action 'onClose'}} @style="margin-right: 10px;">Cancel</Button>
      <Button  onClick={{action 'onClose'}} @intent="danger">Delete</Button>
    </div>
   </div>
</PopOver>`,
  context: args,
});

export const Popover = Template.bind({});
Popover.args = {
  btnTitle: 'btnTitle',
  minimal: false,
  active: false,
  iconSize: 16,
  placement: 'bottom',
  arrow: true,
  open: false,
  canEscapeKeyClose: true,
  isOutClickClose: true,
};
