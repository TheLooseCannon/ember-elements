import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Overlays/Dialog',
  parameters: {
    docs: {
      description: {
        component:
          'Dialogs present content overlaid over other parts of the UI.<br><br>Props<br>`Dialog` is a stateless component controlled by the `isOpen` prop.<br>The children you provide to this component are rendered as contents inside the `Classes.DIALOG` element. Typically, you will want to provide a child with `Classes.DIALOG_BODY` that contains the body content and a child with `Classes.DIALOG_FOOTER` that contains the action buttons.',
      },
    },
  },
  argTypes: {
    autoFocus: {
      description: 'Whether the overlay should acquire application focus when it first opens.',
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
    backdropClassName: {
      description: 'CSS class names to apply to backdrop element.',
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
    backdropProps: {
      description: 'HTML props for the backdrop element.',
      control: 'text',
      table: {
        type: {
          summary: 'HTMLProps<HTMLDivElement>',
        },
      },
    },
    canEscapeKeyClose: {
      description: 'Whether pressing the **esc** key should invoke **onClose**.',
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
    canOutsideClickClose: {
      description:
        'Whether clicking outside the overlay element (either on backdrop when present or on document) should invoke **onClose**.',
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
    enforceFocus: {
      description:
        'Whether the overlay should prevent focus from leaving itself. That is, if the user attempts to focus an element outside the overlay and this prop is enabled, then the overlay will immediately bring focus back to itself. If you are nesting overlay components, either disable this prop on the "outermost" overlays or mark the nested ones **usePortal=false**.',
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
    isCloseButtonShown: {
      description:
        "Whether to show the close button in the dialog's header. Note that the header will only be rendered if title is provided.",
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
    lazy: {
      description:
        'If **true** and **usePortal=true**, the **Portal** containing the children is created and attached to the DOM when the overlay is opened for the first time; otherwise this happens when the component mounts. Lazy mounting provides noticeable performance improvements if you have lots of overlays at once, such as on each row of a table.',
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
    onClose: {
      description:
        "A callback that is invoked when user interaction causes the overlay to close, such as clicking on the overlay or pressing the **esc** key (if enabled).<br><br>Receives the event from the user's interaction, if there was an event (generally either a mouse or key event). Note that, since this component is controlled by the **isOpen** prop, it will not actually close itself until that prop becomes **false**.",
      table: {
        type: {
          summary: '(event?: <HTMLElement>) => void',
        },
      },
    },
    portalClassName: {
      description: 'Space-delimited string of class names applied to the **Portal** element if **usePortal=true**.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: 'text',
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
    title: {
      description:
        'Title of the dialog. If provided, an element with **Classes.DIALOG_HEADER** will be rendered inside the dialog before any children elements.',
      table: {
        type: {
          summary: 'HtmlElement',
        },
      },
      control: 'text',
    },
    transitionName: {
      description:
        'Name of the transition for internal **ember-css-transitions**. Providing your own name here will require defining new CSS transition properties.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'Classes.OVERLAY' },
      },
      control: 'text',
    },
    usePortal: {
      description:
        "Whether the overlay should be wrapped in a **Portal**, which renders its contents in a new element attached to **destinationElementId** prop.<br><br>This prop essentially determines which element is covered by the backdrop: if **false**, then only its parent is covered; otherwise, the entire page is covered (because the parent of the **Portal** is the **&lt;div id='destination' /&gt;** itself).",
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    parameters: { actions: { argTypesRegex: '^on.*' } },
  },
};

const Template = (args) => ({
  template: hbs`<Button @onClick={{this.onDialogToggle}}>
  Show dialog
</Button>
<Dialog
  @isOpen={{isOpen}}
  @autoFocus={{autoFocus}}
  @enforceFocus={{enforceFocus}}
  @usePortal={{usePortal}}
  @canEscapeKeyClose={{canEscapeKeyClose}}
  @canOutsideClickClose={{canOutsideClickClose}}
  @onClose={{this.onClose}}
  @icon="info-sign"
  @title="Palantir Foundry"
>
  <div class="bp3-dialog-body">
    <p>
      <strong>
        Data integration is the seminal problem of the digital age. For over ten years,
        we’ve helped the world’s premier organizations rise to the challenge.
      </strong>
    </p>
    <p>
      Palantir Foundry radically reimagines the way enterprises interact with data by amplifying and
      extending the power of data integration. With Foundry, anyone can source, fuse, and transform
      data into any shape they desire. Business analysts become data engineers — and leaders in their
      organization’s data revolution.
    </p>
    <p>
      Foundry’s back end includes a suite of best-in-class data integration capabilities: data
      provenance, git-style versioning semantics, granular access controls, branching, transformation
      authoring, and more. But these powers are not limited to the back-end IT shop.
    </p>
    <p>
      In Foundry, tables, applications, reports, presentations, and spreadsheets operate as data
      integrations in their own right. Access controls, transformation logic, and data quality flow
      from original data source to intermediate analysis to presentation in real time. Every end
      product created in Foundry becomes a new data source that other users can build upon. And the
      enterprise data foundation goes where the business drives it.
    </p>
    <p>
      Start the revolution. Unleash the power of data integration with Palantir Foundry.
    </p>
  </div>
  <div class="bp3-dialog-footer">
    <div class="bp3-dialog-footer-actions">
      <Tooltip
        @content="This button is hooked up to close the dialog."
      >
        <Button @onClick={{this.Close}}>
          Close
        </Button>
      </Tooltip>
    </div>
  </div>
</Dialog>`,
  context: args,
});

export const Dialog = Template.bind({});
Dialog.args = {
  autoFocus: true,
  canEscapeKeyClose: true,
  canOutsideClickClose: true,
  enforceFocus: true,
  isCloseButtonShown: true,
  isOpen: true,
  lazy: true,
  title: '',
  transitionName: '',
  usePortal: true,
};
