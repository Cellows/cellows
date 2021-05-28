import { MenuItem } from "../menu-item-list/menu-item/menu-item";

export type SidenavMenuItem = MenuItem & {
  showSubMenu: boolean;
};
