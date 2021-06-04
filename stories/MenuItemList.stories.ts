import { RouterModule } from "@angular/router";
import { componentWrapperDecorator, Meta, moduleMetadata, Story } from "@storybook/angular";
import { MenuItem, MenuItemListComponent, MenuItemListModule } from "projects/core/src/public-api";
import { AssetsComponent } from "./components/assets.component";
import { HelpComponent } from "./components/help.component";

export default {
  title: 'Organisms/MenuItemList',
  component: MenuItemListComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        AssetsComponent,
        HelpComponent
      ],
      imports: [
        MenuItemListModule,
        RouterModule.forRoot([
          { path: '', redirectTo: '/help', pathMatch: 'full' },
          { path: "assets", component: AssetsComponent },
          { path: "help", component: HelpComponent }
        ], { useHash: true })
      ]
    }),
    componentWrapperDecorator((story) => `
      <div style="display: flex; height: 400px; align-items: stretch;">
        <div style="background-color: #0B627D">${story}</div>
        <div style="margin-left: 3rem; margin-top: 0; align-self: flex-start;"><router-outlet></router-outlet></div>
      </div>
    `)
  ]
} as Meta;

const Template: Story<MenuItemListComponent> = (args: MenuItemListComponent) => ({
  props: args,
});

export const WithMenuItems = Template.bind({});
WithMenuItems.args = {
  menuItems: [
    { displayName: 'Assets', routePath: 'assets' },
    { displayName: 'Help', routePath: 'help' },
  ] as MenuItem[]
};

export const WithoutMenuItems = Template.bind({});
WithoutMenuItems.args = {
  menuItems: []
};
