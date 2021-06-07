import { Meta, Story } from "@storybook/angular";
import { PageHeaderComponent } from "projects/core/src/public-api";

export default {
  title: 'Organisms/PageHeader',
  component: PageHeaderComponent
} as Meta;

const Template: Story<PageHeaderComponent> = (args: PageHeaderComponent) => ({
  props: args,
});

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: "A beautiful title"
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
};
