import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Overlays/Portal',
  parameters: {
    docs: {
      description: {
        component:
          '**Portal** allows for rendering a block to a DOM element somewhere else on the page. The component retains typical Ember context in terms of bound data and action handling.<br><br>This **Portal** component is particularly useful for cases where you have UI that is the logical child of a component but needs to render as a top-level DOM element, such as a confirmation **Dialog** component<br><br>This component tracks its element\'s child nodes. When inserted into the DOM, it appends its child nodes to a destination element elsewhere. When removed from the DOM, it removes its child nodes. Nothing else changes -- data binding and action bubbling still flow according to the Ember component hierarchy. That includes usages of **yield**, so blocks provided to **Portal** simply appear in another part of the DOM. <br><br>Then "Hello world!" would be rendered inside the **destination** div. If **isPortalEnabled** is false, then the "Hello world!" text will be removed from the **destination** div.<br><br>Render In Place<br>In this example, **renderInPlace** will override **destinationElementId** and cause the Portal content to be rendered in place.',
      },
    },
  },
};

const Template = (args) => ({
  template: hbs`<Button
      @primary="true"
    >
      Show overlay
    </Button>`,
  context: args,
});

export const Portal = Template.bind({});
Portal.args = {};
