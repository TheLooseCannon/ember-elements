import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Overlays/Drawer',
  parameters: {
    docs: {
      description: {
        component:
          'Drawers overlay content over existing parts of the UI and are anchored to the edge of the screen.<br><br>Props<br>Use the `size` prop to set the size of the `Drawer`. This prop sets CSS `width` if `vertical={false}` (default) and `height` otherwise. Constants are available for common sizes:<ul><li>`Drawer.SIZE_SMALL = 360px`</li><li>`Drawer.SIZE_STANDARD = 50%`(default)</li><li>`Drawer.SIZE_LARGE = 90%`</li>',
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
    size: {
      description:
        'CSS size of the drawer. This sets **width** if **vertical={false}&& (default) and **height** otherwise.<br>Constants are available for common sizes:<ul><li><b>SIZE_SMALL = 360px</b></li><li><b>SIZE_STANDARD = 50%</b></li><li><b>SIZE_LARGE = 90%</b></li></ul>',
      table: {
        type: {
          summary: 'number | string',
        },
        defaultValue: {
          summary: '50%',
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
    vertical: {
      description: 'Whether the drawer should appear with vertical styling.',
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
    isLeft: {
      description: 'Whether the drawer should place position at left side of the screen.',
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
    parameters: { actions: { argTypesRegex: '^on.*' } },
  },
};

const Template = (args) => ({
  template: hbs`<Button @onClick={{action 'openDrawerComponent'}} @primary=true
>Show Drawer</Button>
<DbDrawer @isOpen={{isOpenDrawer}} @size={{size}}
@vertical={{vertical}} @autoFocus={{autoFocus}} @enforceFocus={{enforceFocus}}
@hasBackdrop={{hasBackdrop}} @usePortal={{usePortal}}
@canOutsideClickClose={{canOutsideClickClose}}
@canEscapeKeyClose={{canEscapeKeyClose}} @isLeft={{isLeft}}>
{{#db-drawer/header}}
  <Icon @icon="info-sign"></Icon>
    <h4 class="bp3-heading">Palantir Foundry</h4>
    <Button @icon='small-cross' @minimal=true></Button>
{{/db-drawer/header}}
{{#db-drawer/body}}
    <p><strong>Data integration is the seminal problem of the digital age. For over ten years, we’ve
       helped the world’s premier organizations rise to the challenge.</strong></p>
    <p>Palantir Foundry radically reimagines the way enterprises interact with data by amplifying and
       extending the power of data integration. With Foundry, anyone can source, fuse, and transform
       data into any shape they desire. Business analysts become data engineers — and leaders in their
       organization’s data revolution.
    </p>
    <p>Foundry’s back end includes a suite of best-in-class data integration capabilities: data
       provenance, git-style versioning semantics, granular access controls, branching, transformation
       authoring, and more. But these powers are not limited to the back-end IT shop.
    </p>
    <p>In Foundry, tables, applications, reports, presentations, and spreadsheets operate as data
       integrations in their own right. Access controls, transformation logic, and data quality flow
       from original data source to intermediate analysis to presentation in real time. Every end
       product created in Foundry becomes a new data source that other users can build upon. And the
       enterprise data foundation goes where the business drives it.
    </p>
    <p>Start the revolution. Unleash the power of data integration with Palantir Foundry.</p>
 {{/db-drawer/body}}
 {{#db-drawer/footer}}
   Footer
 {{/db-drawer/footer}}
</DbDrawer>`,
  context: args,
});

export const Drawer = Template.bind({});
Drawer.args = {
  autoFocus: true,
  canEscapeKeyClose: true,
  canOutsideClickClose: true,
  enforceFocus: true,
  hasBackdrop: true,
  isOpen: true,
  size: '50%',
  usePortal: false,
  vertical: true,
  isLeft: false,
};
