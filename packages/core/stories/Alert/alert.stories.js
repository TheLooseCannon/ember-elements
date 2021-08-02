import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Overlays/Alert',
  parameters: {
    docs: {
      description: {
        component:
          'Alerts notify users of important information and force them to acknowledge the alert content before continuing.<br>Although similar to dialogs, alerts are more restrictive and should only be used for important information. By default, the user can only exit the alert by clicking one of the confirmation buttons—clicking the overlay or pressing the **esc** key will not close the alert. These interactions can be enabled via props. <br><br>Props<br>**Alert** only supports controlled usage through the isOpen prop. Use the **onConfirm** and **onCancel** props to respond to those interactions separately, or use **onClose** to handle both at the same time.',
      },
    },
  },
  argTypes: {
    cancelButtonText: {
      description:
        'The text for the cancel button. If this prop is defined, then either onCancel or onClose must also be defined.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    canEscapeKeyCancel: {
      description:
        'Whether pressing **escape** when focused on the Alert should cancel the alert. If this prop is enabled, then either **onCancel** or **onClose** must also be defined.',
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
    canOutsideClickCancel: {
      description:
        'Whether clicking outside the Alert should cancel the alert. If this prop is enabled, then either **onCancel** or **onClose** must also be defined.',
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
    className: {
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
    confirmButtonText: {
      description:
        'The text for the confirm (right-most) button. This button will always appear, and uses the value of the **intent** prop below.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'OK',
        },
      },
    },
    icon: {
      description: 'Name of a Blueprint UI icon (or an icon element) to display on the left side.',
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
    intent: {
      description: 'The intent to be applied to the confirm (right-most) button.',
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
    isOpen: {
      description:
        'Toggles the visibility of the overlay and its children. This prop is required because the component is controlled.',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
      type: {
        required: true,
      },
    },
    onCancel: {
      description:
        'Handler invoked when the alert is canceled. Alerts can be canceled in the following ways:<ul><li>clicking the cancel button (if **cancelButtonText** is defined)</li><li>pressing the escape key (if **canEscapeKeyCancel** is enabled)</li><li>clicking on the overlay backdrop (if **canOutsideClickCancel** is enabled)</li></ul>If any of the cancel props are defined, then either **onCancel** or **onClose** must be defined.',
      table: {
        type: {
          summary: '(event?: <HTMLElement>) => void',
        },
      },
    },
    onClose: {
      description:
        'Handler invoked when the Alert is confirmed or canceled; see **onConfirm** and **onCancel** for more details. First argument is true if confirmed, false otherwise. This is an alternative to defining separate **onConfirm** and **onCancel** handlers.',
      table: {
        type: {
          summary: '(confirmed: boolean, evt?: <HTMLElement>) => void',
        },
      },
    },
    onConfirm: {
      description:
        'Handler invoked when the confirm button is clicked. Alerts can be **confirmed** in the following ways:<ul><li>clicking the confirm button</li><li>focusing on the confirm button and pressing **enter** or **space**</li></ul>',
      table: {
        type: {
          summary: '(evt?: <HTMLElement>) => void',
        },
      },
    },
    style: {
      description: 'CSS styles to apply to the dialog.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: 'text',
    },
    parameters: { actions: { argTypesRegex: '^on.*' } },
  },
};

const Template = (args) => ({
  template: hbs`<Button
      @onClick={{action "handleErrorOpen"}}
  >
    Open file error alert
  </Button>
<Alert
 @confirmButtonText="Okay"
 @isOpen={{isOpenError}}
 @canOutsideClickCancel={{canOutsideClickCancel}}
 @canEscapeKeyCancel={{canEscapeKeyCancel}}
 @onClose={{action "handleErrorClose"}}
>
  <p>Couldn't create the file because the containing folder doesn't exist anymore. You will be
    redirected to your user folder.
  </p>
</Alert>
<Button @onClick={{action "handleMoveOpen"}}>
    Open file deletion alert
</Button>
<Alert
 @cancelButtonText="Cancel"
 @confirmButtonText="Move to Trash"
 @icon="trash"
 @intent="danger"
 @isOpen={{isOpen}}
 @canEscapeKeyCancel={{canEscapeKeyCancel}}
 @canOutsideClickCancel={{canOutsideClickCancel}}
 @onCancel={{action "handleMoveCancel"}}
 @onConfirm={{action "handleMoveConfirm"}}
>
    <p>Are you sure you want to move <b>filename</b> to Trash? You will be able to restore it later,
    but it will become private to you.
    </p>
</Alert>`,
  context: args,
});

export const Alert = Template.bind({});
Alert.args = {
  cancelButtonText: '',
  canEscapeKeyCancel: false,
  canOutsideClickCancel: false,
  className: '',
  confirmButtonText: 'OK',
  icon: '',
  intent: '',
  isOpen: true,
  style: '',
};
