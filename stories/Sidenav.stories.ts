import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { RouterModule } from '@angular/router';
import { SidenavComponent, SidenavMenuItem, SidenavModule } from 'projects/core/src/public-api';
import { AssetsComponent } from './components/assets.component';
import { HelpComponent } from './components/help.component';

export default {
  title: 'Templates/Sidenav',
  component: SidenavComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        AssetsComponent,
        HelpComponent
      ],
      imports: [
        SidenavModule,
        RouterModule.forRoot([
          { path: '', redirectTo: '/help', pathMatch: 'full' },
          { path: "assets", component: AssetsComponent },
          { path: "help", component: HelpComponent }
        ], { useHash: true })
      ]
    }),
    componentWrapperDecorator((story) => `
      <div style="display: flex; height: 400px; align-items: stretch;">
        ${story}
        <div style="margin-left: 3rem; margin-top: 0; align-self: flex-start;"><router-outlet></router-outlet></div>
      </div>
    `)
  ]
} as Meta;

const Template: Story<SidenavComponent> = (args: SidenavComponent) => ({
  props: args,
});

export const WithMenuItems = Template.bind({});
WithMenuItems.args = {
  sidenavMenuItems: [
    { displayName: 'Assets', routePath: 'assets', showSubMenu: true },
    { displayName: 'Help', routePath: 'help', showSubMenu: false },
  ] as SidenavMenuItem[]
};

export const WithoutMenuItems = Template.bind({});
WithoutMenuItems.args = {
  sidenavMenuItems: []
};
