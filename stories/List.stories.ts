import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ListComponent, ListItem, ListModule } from "projects/core/src/public-api";

export default {
  title: 'Organisms/List',
  component: ListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ListModule
      ]
    })
  ]
} as Meta;

const Template: Story<ListComponent> = (args: ListComponent) => ({
  props: args,
});

export const WithItems = Template.bind({});
WithItems.args = {
  listItems: [
    { title: "Title 1", textLeft: "Something left", textRight: "Right" },
    { title: "Title 2", textLeft: "Something left", textRight: "Right" },
    { title: "Title 3", textLeft: "Something left 123456789",  textRight: "Right"}
  ] as ListItem[]
};

export const Empty = Template.bind({});
Empty.args = {
};
