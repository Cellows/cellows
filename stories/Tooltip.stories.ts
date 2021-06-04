import { Meta } from "@storybook/angular";
import { TooltipDirective } from "projects/core/src/public-api";


export default {
  title: 'Atoms/Tooltip',
  component: TooltipDirective
} as Meta;


export const Default = () => ({
  template: `
    <div style="margin: 20px 100px;">
      <span celTooltip tooltip="This is a tooltip!">Span with a tooltip at the bottom</span>
    </div>
  `
});
Default.storyName = "Placement Bottom";

export const PlacementRight = () => ({
  template: `
    <div style="margin: 20px 100px;">
      <span celTooltip tooltip="This is a tooltip!" placement="right">Span with a tooltip at the right</span>
    </div>
  `,
});

export const PlacementLeft = () => ({
  template: `
    <div style="margin: 20px 100px;">
      <span celTooltip tooltip="This is a tooltip!" placement="left">Span with a tooltip at the left</span>
    </div>
  `,
});

export const PlacementTop = () => ({
  template: `
    <div style="margin: 20px 100px;">
      <span celTooltip tooltip="This is a tooltip!" placement="top">Span with a tooltip at the top</span>
    </div>
  `,
});

export const Delayed = () => ({
  template: `
    <div style="margin: 20px 100px;">
      <span celTooltip tooltip="This is a tooltip!" delay="5000">Span with a delayed tooltip</span>
    </div>
  `,
});

export const Empty = () => ({
  template: `
    <div style="margin: 20px 100px;">
      <span celTooltip>Span with an empty tooltip</span>
    </div>
  `,
});
