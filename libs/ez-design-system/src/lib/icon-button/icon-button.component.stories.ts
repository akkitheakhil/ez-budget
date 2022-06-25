import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { IconButtonComponent } from './icon-button.component';

export default {
  title: 'IconButtonComponent',
  component: IconButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
    })
  ],
} as Meta<IconButtonComponent>;

const Template: Story<IconButtonComponent> = (args: IconButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  icon: 'faPlus',
};

export const Secondary = Template.bind({});
Secondary.args = {
  icon: 'faPlus',
};


export const Large = Template.bind({});
Large.args = {
  size: 'large',
  icon: 'faPlus',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  icon: 'faPlus',
};
