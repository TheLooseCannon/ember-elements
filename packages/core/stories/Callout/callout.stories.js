import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Core/Components/Callout',
  argTypes: {
    class: {
      description: 'A space-delimited list of class names to pass along to a child element.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none'
        }
      },
      control: 'text',
    },
    icon: {
      description: 'Name of a UI icon name to render on the left side.\n\nIf this prop is omitted or undefined, the intent prop will determine a default icon. If this prop is explicitly null, no icon will be displayed (regardless of intent).',
      control: 'text',
      table: {
        type: {
          summary: 'string',
          detail: '<a href="https://dunkinbase.github.io/ember-elements/docs/icon/icons" >IconName</a>',
        },
        defaultValue: { summary: 'none' }
      },
    },
    intent: {
      description: 'Visual intent color to apply to background, title, and icon.\n\nDefining this prop also applies a default icon, if the icon prop is omitted.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'none' }
      },
      control: {
        type: 'select',
        options: {
          primary: 'primary',
          success: 'success',
          warning: 'warning',
          danger: 'danger',
          none: 'none',
        }
      }
    },
    title: {
      control: 'text',
      description: 'String content of optional title element.\n\nDue to a conflict with the HTML prop types, to provide html element content simply pass <h4>title content</h4> as first children element instead of using this prop.',
      table: {
        type: {
          summary: 'string',
        }
      },
      defaultValue: {
        summary: 'none'
      }
    },
  },
};

const Template = (args) => ({
  template: hbs`<Callout
      @title={{this.title}}
      @icon={{this.icon}}
      @intent={{this.intent}}
    >
      The component is a simple wrapper around the CSS API
      that provides props for modifiers and optional
      title element. Any additional HTML props will be spread to the rendered
      <code class="bp3-code">&lt;div&gt;</code>
      element.
    </Callout>`,
  context: args,
});

export const IconCallout = Template.bind({});
IconCallout.storyName = 'Callout with Icon';
IconCallout.args = {
  title: 'Visually important content',
  icon: 'lock',
  intent: 'none'
};

export const TitleCallout = Template.bind({});
TitleCallout.storyName = 'Callout with Title';
TitleCallout.args = {
  title: 'Visually important content',
  icon: 'lock',
  intent: 'none'
};

export const PrimaryCallout = Template.bind({});
PrimaryCallout.storyName = 'Callout with Primary intent';
PrimaryCallout.args = {
  title: 'Primary Callout',
  icon: 'lock',
  intent: 'primary'
};

export const SuccessCallout = Template.bind({});
SuccessCallout.storyName = 'Callout with Success intent';
SuccessCallout.args = {
  title: 'Success Callout',
  icon: 'lock',
  intent: 'success'
};

export const WarningCallout = Template.bind({});
WarningCallout.storyName = 'Callout with Warning intent';
WarningCallout.args = {
  title: 'Warning Callout',
  icon: 'lock',
  intent: 'warning'
};

export const DangerCallout = Template.bind({});
DangerCallout.storyName = 'Callout with Danger intent';
DangerCallout.args = {
  title: 'Danger Callout',
  icon: 'lock',
  intent: 'danger'
};


