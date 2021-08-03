import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Components/Collapse',
  parameters: {
    docs: {
      description: {
        component:
          'The ***Collapse*** element shows and hides content with a built-in slide in/out animation. You might use this to create a panel of settings for your application, with sub-sections that can be expanded and collapsed.',
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
      control: 'text',
    },
    isOpen: {
      description: 'Whether the component is open or closed.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    keepChildrenMounted: {
      description:
        'Whether the child components will remain mounted when the <b>Collapse</b> is closed. Setting to true may improve performance by avoiding re-mounting children.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    transitionDuration: {
      description:
        "The length of time the transition takes, in milliseconds. This must match the duration of the animation in CSS. Only set this prop if you override Blueprint's default transitions with new transitions of a different length.",
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 300,
        },
      },
      control: { type: 'number', min: 0 },
    },
  },
};

const Template = (args) => ({
  template: hbs`<Button
      @onClick={{this.onClickButton}}
  >
      {{#if isOpen}} Hide{{else}} Show{{/if}} build logs
  </Button>
  {{this.isOpen}}
  <Collapse
      @isOpen={{this.isOpen}}
      @keepChildrenMounted={{this.keepChildrenMounted}}
      @transitionDuration={{this.transitionDuration}}
    >
        <pre class="bp3-code-block">
          [11:53:30] Finished 'typescript-bundle-blueprint' after 769 ms<br>
          [11:53:30] Starting 'typescript-typings-blueprint'...<br>
          [11:53:30] Finished 'typescript-typings-blueprint' after 198 ms<br>
          [11:53:30] write ./blueprint.css<br>
          [11:53:30] Finished 'sass-compile-blueprint' after 2.84 s
        </pre>
    </Collapse>`,
  context: args,
});

export const InteractiveCollapse = Template.bind({});
InteractiveCollapse.args = {
  onClickButton: (args) => action(console.log('args : ', args.isOpen))(),
};
