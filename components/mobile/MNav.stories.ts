import MNav from "./MNav.vue";

import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof MNav> = {
  title: "MNav",
  tags: ["autodocs"],
  component: MNav,
  render: (args) => ({
    components: { MNav },
    tags: ["autodocs"],
    template: "<MNav/>",
  }),
};

export default meta;
type Story = StoryObj<typeof MNav>;

export const Component: Story = {};
