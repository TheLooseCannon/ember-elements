import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Components/Tabs',
  parameters: {
    docs: {
      description: {
        component:
          'Tabs is the top-level component responsible for rendering the tab list and coordinating selection. It can be used in controlled mode by providing **selectedTabIndex** and **onChange** props, or in uncontrolled mode by optionally providing default **SelectedTabIndex** and **onChange**.<br><br>The **Tabs** rendered in order in the tab list, which is a flex container. **Tab** sub components are managed by the main component (**Tabs**); clicking one will change selection. Arbitrary other children are simply rendered in order; interactions are your responsibility. Here we avoid manual **ID** generation of each **tab**. We know that ember component is generating unique **ID**.<br>The **panel** prop is removed from **Tab** and replaced with **yield** option for component manipulation. You are able to render **Tab** contents with help of **yield**<br>Removed **children** option from **Tab** . (children: rendered in a list above the active panel. Can also be set via the title prop.). The **yield** option is already occupied for **panel** prop. So we requesting you to use **@title** prop instead of **children**. The **title** supports **text** along with **htmlElments** in the form of string.',
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
    defaultSelectedTabIndex: {
      description:
        'Initial selected tab <b>index</b>, for uncontrolled usage. Note that this prop refers only to <b>&lt;Tab&gt;</b> children; other types of elements are ignored. It accept numeric value from 1 to ..n tab',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 1,
        },
      },
      control: 'number',
    },
    large: {
      description:
        'If set to <b>true</b>, the tab titles will display with larger styling. This will apply large styles only to the tabs at this level, not to nested tabs.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
      control: 'boolean',
    },
    renderActiveTabPanelOnly: {
      description:
        'Whether inactive tab panels contents should be removed from the DOM and unmounted . This can be a performance enhancement when rendering many complex panels, but requires careful support for unmounting and remounting.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
    },
    selectedTabIndex: {
      description:
        'Selected tab <b>index</b>, for controlled usage. Providing this prop will put the component in controlled mode. Unknown index will result in first tab selection (no errors).',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    vertical: {
      description:
        'A value between 0 and 1 (inclusive) representing how far along the operation is. Values below 0 or above 1 will be interpreted as 0 or 1, respectively. Omitting this prop will result in an "indeterminate" progress meter that fills the entire bar.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
      control: { type: 'range', min: 0, max: 1, step: 10 },
    },
  },
};

const Template = (args) => ({
  template: hbs`<Tabs
      @animate={{this.animate}}
      @vertical={{this.vertical}}
      @renderActiveTabPanelOnly={{this.renderActiveTabPanelOnly}} as |T|>
         <T.tab @title="Ember">
             <div>
                 <h3 class="bp3-heading">Example panel: Ember</h3>
                 <p class="bp3-running-text">Ember.js is an open-source JavaScript application framework, based on the
                     model-view-controller (MVC) pattern. It allows developers to create scalable single-page web applications by
                     incorporating common idioms and best practices into the framework. What is your favorite JS framework?</p><input
                     class="bp3-input" type="text">
             </div>
         </T.tab>
         <T.tab @title="Angular">
         <div>
             <h3 class="bp3-heading">Example panel: Angular</h3>
             <p class="bp3-running-text">HTML is great for declaring static documents, but it falters when we try to use it for
                 declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application.
                 The resulting environment is extraordinarily expressive, readable, and quick to develop.</p>
         </div>
         </T.tab>
         <T.tab @title="React">
         <div>
             <h3 class="bp3-heading">Example panel: React</h3>
             <p class="bp3-running-text">Lots of people use React as the V in MVC. Since React makes no assumptions about the
                 rest of your technology stack, it's easy to try it out on a small feature in an existing project.</p>
         </div>
         </T.tab>
         <T.tab @title="Backbone" @disabled=true>
             Backbone
         </T.tab>
         <T.expander></T.expander>
         <T.content>
          <InputGroup @fill=true @type="text" @placeholder="Search..." ></InputGroup>
         </T.content>
      </Tabs>`,
  context: args,
});

export const Tabs = Template.bind({});
Tabs.args = {
  intent: 'primary',
  animate: true,
  value: 0.4,
};
