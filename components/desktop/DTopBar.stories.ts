import DTopBar from "./DTopBar.vue";

import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof DTopBar> = {
  title: "DTopBar",
  component: DTopBar,
  render: (args) => ({
    components: { DTopBar },
    tags: ["autodocs"],
    template: "<DTopBar/>",
  }),
};

export default meta;
type Story = StoryObj<typeof DTopBar>;

export const Component: Story = {};
