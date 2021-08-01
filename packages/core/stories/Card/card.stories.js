import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Components/Card',
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
      control: 'text',
    },
    elevation: {
      description:
        'Controls the intensity of the drop shadow beneath the card <b>Range = 0-4</b>: the higher the elevation, the higher the drop shadow. At elevation <b>0</b>, no drop shadow is applied.',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 0,
        },
      },
      control: { type: 'number', max: 4, min: 0 },
    },
    interactive: {
      description:
        "Whether the card should respond to user interactions. If set to <b>true</b>, hovering over the card will increase the card's elevation and change the mouse cursor to a pointer.<br><br>Recommended when <b>onClick</b> is also defined.",
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    onClick: {
      description: 'Callback invoked when the card is clicked. Recommended when <b>interactive</b> is <b>true</b>.',
      table: {
        type: {
          summary: 'action',
          detail: '<b>(e: MouseEvent<HTMLDivElement>) => void</b>',
        },
        defaultValue: { summary: 'none' },
      },
    },
  },
};

const Template = (args) => ({
  template: hbs`<Card
      @interactive={{this.isInteractive}}
      @elevation={{this.elevation}}
    >
      <h5 class="bp3-heading">
          <a href="#">Analytical applications</a>
      </h5>
      <p>
        User interfaces that enable people to interact smoothly with data,
        ask better questions, and make better decisions.
      </p>
      <Button>Explore products</Button>
    </Card>`,
  context: args,
});

export const Interactive = Template.bind({});
Interactive.args = {
  interactive: true,
  elevation: 2,
};

export const Elevated = Template.bind({});
Elevated.args = {
  interactive: false,
  elevation: 4,
};
