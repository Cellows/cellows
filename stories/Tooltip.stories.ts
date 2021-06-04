import { Meta, Story } from "@storybook/angular";
import { TooltipDirective } from "projects/core/src/public-api";


export default {
  title: 'Atoms/Tooltip',
  component: TooltipDirective,
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
} as Meta;

export const PlacementBottom: Story<TooltipDirective> = () => ({
  template: `
    <div style="margin: 20px 100px;">
      <span celTooltip tooltip="This is a tooltip!">Span with a tooltip at the bottom</span>
    </div>
  `
});

export const PlacementRight: Story<TooltipDirective> = () => ({
  template: `
    <div style="margin: 20px 100px;">
      <span celTooltip tooltip="This is a tooltip!" placement="right">Span with a tooltip at the right</span>
    </div>
  `
});

export const PlacementLeft: Story<TooltipDirective> = () => ({
  template: `
    <div style="margin: 20px 100px;">
      <span celTooltip tooltip="This is a tooltip!" placement="left">Span with a tooltip at the left</span>
    </div>
  `
});

export const PlacementTop: Story<TooltipDirective> = () => ({
  template: `
    <div style="margin: 20px 100px;">
      <span celTooltip tooltip="This is a tooltip!" placement="top">Span with a tooltip at the top</span>
    </div>
  `
});

export const Delayed: Story<TooltipDirective> = () => ({
  template: `
    <div style="margin: 20px 100px;">
      <span celTooltip tooltip="This is a tooltip!" delay="5000">Span with a delayed tooltip</span>
    </div>
  `
});

export const Empty: Story<TooltipDirective> = () => ({
  template: `
    <div style="margin: 20px 100px;">
      <span celTooltip>Span with an empty tooltip</span>
    </div>
  `
});
