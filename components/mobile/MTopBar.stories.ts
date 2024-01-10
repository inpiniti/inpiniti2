import MTopBar from "./MTopBar.vue";

import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof MTopBar> = {
  title: "MTopBar",
  component: MTopBar,
  render: (args) => ({
    components: { MTopBar },
    tags: ["autodocs"],
    template: "<MTopBar/>",
  }),
};

export default meta;
type Story = StoryObj<typeof MTopBar>;

export const Component: Story = {};
