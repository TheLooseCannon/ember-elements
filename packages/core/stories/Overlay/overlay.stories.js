import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Overlays/Overlay',
  parameters: {
    docs: {
      description: {
        component:
          '**Overlay** is a generic low-level component for rendering content on top of its siblings, or above the entire application.<br> It combines a ** Portal **, which allows components to be rendered at a different place in the DOM tree, with a <a href="https://www.npmjs.com/package/ember-css-transitions" > ember-css-transitions</a> to support elegant enter and leave transitions.<br> An optional "backdrop" can be rendered behind the overlaid children to provide modal behavior, whereby the overlay prevents interaction with anything behind it.<br>**Overlay** is the backbone of all the components listed in the **Overlays** group in the sidebar. Using **Overlay** directly should be rare in your app; it should only be necessary if no existing component meets your needs.<br><br>## Scroll Support<br>Overlays rely heavily on fixed and absolute positioning. By default, an overlay larger than the viewport will not be scrollable, so any overflowing content will be hidden. Fortunately, making an overlay scrollable is very easy: simply pass **Classes.OVERLAY_SCROLL_CONTAINER** as the Overlay **className**, and we\'ll take care of the rest.<br>The **Dialog** component applies this CSS class automatically.<br><br>## Props<br>**Overlay** is a controlled component that renders its children only when **isOpen=true**. The optional backdrop element will be inserted before the children if **hasBackdrop=true**.<br>The **onClose** callback prop is invoked when user interaction causes the overlay to close, but your application is responsible for updating the state that actually closes the overlay.',
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
    hasBackdrop: {
      description: 'Whether a container-spanning backdrop element should be rendered behind the contents.',
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
        "Whether the overlay should be wrapped in a **Portal**, which renders its contents in a new element attached to **destinationElementId** prop.<br><br>This prop essentially determines which element is covered by the backdrop: if **false**, then only its parent is covered; otherwise, the entire page is covered (because the parent of the **Portal** is the &lt;div id='destination' /&gt; itself).",
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
  template: hbs`<Button
      @primary="true"
    >
      Show overlay
    </Button>
      <Overlay
        @className="bp3-overlay-scroll-container"
        @isOpen={{isOpen}}
        @autoFocus={{autoFocus}}
        @enforceFocus={{enforceFocus}}
        @hasBackdrop={{hasBackdrop}}
        @usePortal={{usePortal}}
        @canEscapeKeyClose={{canEscapeKeyClose}}
        @canOutsideClickClose={{canOutsideClickClose}}
        @containerClassName="bp3-card bp3-elevation-4 docs-overlay-example-transition {{if useTallContent "docs-overlay-example-tall"}}"
        @onClose={{this.onClose}}
      >
  </Overlay>`,
  //   <div>
  //     <h3 class="bp3-heading">
  //       I'm an Overlay!
  //     </h3>
  //     <p>
  //       This is a simple container with some inline styles to position it on the screen. Its CSS
  //           transitions are customized for this example only to demonstrate how easily custom
  //           transitions can be implemented.
  //     </p>
  //     <p>
  //       Click the "Focus button" below to transfer focus to the "Show overlay" trigger button
  //           outside of this overlay. If persistent focus is enabled, focus will be constrained to the
  //           overlay. Use the
  //       <code class="bp3-code">
  //         tab
  //       </code>
  //       key to move to the next focusable element to illustrate
  //           this effect.
  //     </p>
  //     <p>
  //       Click the "Make me scroll" button below to make this overlay's content really tall, which
  //           will make the overlay's container (but not the page) scrollable
  //     </p>
  //     <br />
  //     <div class="bp3-dialog-footer-actions">
  //       <Button @intent="danger" @onClick={{action "handleClose"}}>
  //         Close
  //       </Button>
  //       <Button @onClick={{action "focusButton"}} @class="focus-button">
  //         Focus button
  //       </Button>
  //       <Button
  //         @onClick={{action "toggleScrollButton"}}
  //         @icon="double-chevron-down"
  //         @rightIcon="double-chevron-down"
  //         @active={{useTallContent}}
  //       >
  //         Make me scroll
  //       </Button>
  //     </div>
  //   </div>
  context: args,
});

export const Overlay = Template.bind({});
Overlay.args = {
  autoFocus: true,
  canEscapeKeyClose: true,
  canOutsideClickClose: true,
  enforceFocus: true,
  hasBackdrop: false,
  isOpen: true,
  lazy: true,
};
