import DNav from "./DNav.vue";

import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof DNav> = {
  title: "DNav",
  component: DNav,
  render: (args) => ({
    components: { DNav },
    tags: ["autodocs"],
    template: "<DNav/>",
  }),
};

export default meta;
type Story = StoryObj<typeof DNav>;

export const Component: Story = {};
