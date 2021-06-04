import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ListComponent, MenuItemListComponent, SidenavComponent, SidenavMenuItem, TooltipDirective } from 'projects/core/src/public-api';
import { MenuItemComponent } from 'projects/core/src/lib/menu-item-list/menu-item/menu-item.component';
import { SubMenuComponent } from 'projects/core/src/lib/sidenav/sub-menu/sub-menu.component';
import { ListItemComponent } from 'projects/core/src/lib/list/list-item/list-item.component';

@Component({
  selector: 'app-assets',
  template: '<h1>Assets page</h1>'
})
export class AssetsComponent {}

export default {
  title: 'Templates/Sidenav',
  component: SidenavComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        SubMenuComponent,
        MenuItemListComponent,
        MenuItemComponent,
        ListComponent,
        ListItemComponent,
        TooltipDirective,
        AssetsComponent
      ],
      imports: [
        CommonModule,
        RouterModule.forRoot([
          { path: '',   redirectTo: '/assets', pathMatch: 'full' },
          { path: "assets", component: AssetsComponent },
        ])
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
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

export const WithMenuSidenav = Template.bind({});
WithMenuSidenav.args = {
  sidenavMenuItems: [{ displayName: 'Assets', routePath: 'assets', showSubMenu: false }] as SidenavMenuItem[]
};

export const WithoutMenuSidenav = Template.bind({});
WithoutMenuSidenav.args = {
  sidenavMenuItems: []
};
