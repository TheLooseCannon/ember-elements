import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Components/Navigation Bar',
  argTypes: {
    class: {
      description: 'A space-delimited list of class names to pass along to a child element.',
      table: {
        category: 'Navigation Bar Props',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none'
        }
      },
      control: 'text',
    },
    fixedToTop: {
      table: {
        category: 'Navigation Bar Props',
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false
        }
      },
      description: 'Whether this navbar should be fixed to the top of the viewport (using CSS <b>position: fixed</b>).',
      control: 'boolean',
    },
    style: {
      description: 'Inline html style to parent element.',
      table: {
        category: 'Navigation Bar Props',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none'
        }
      },
      control: 'text',
    },
    align: {
      table: {
        category: 'Navigation Bar Group Props',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'left'
        }
      },
      description: 'The side of the navbar on which the group should appear. The <b>Alignment<b> enum provides constants for these values.("left","right","center")',
      control: 'string',
    },
    class: {
      description: 'A space-delimited list of class names to pass along to a child element.',
      table: {
        category: 'Navigation Bar Group Props',
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
        category: 'Navigation Bar Group Props',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none'
        }
      },
      control: 'text',
    },
    class: {
      description: 'A space-delimited list of class names to pass along to a child element.',
      table: {
        category: 'Navigation Bar Divider Props',
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
        category: 'Navigation Bar Divider Props',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none'
        }
      },
      control: 'text',
    },
  }
};

const Template = (args) => ({
  template: hbs`<NavBar>
    <NavBar::Group
      @align={{this.align}}
    >
        <NavBar::Heading> ember-elements </NavBar::Heading>
        <NavBar::Divider />
        <Button
            @class="bp3-minimal"
            @icon="home"
        >
            Home
        </Button>
        <Button
            @class="bp3-minimal"
            @icon="document"
        >
            Document
        </Button>
    </NavBar::Group>
</NavBar>`,
  context: args,
});

export const LeftAlignNavBar = Template.bind({});
LeftAlignNavBar.args = {
  align: 'left',
  fixedToTop: false
};
