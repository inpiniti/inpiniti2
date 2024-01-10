import Carousel from "./Carousel.vue";

import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof Carousel> = {
  title: "collection/Carousel",
  component: Carousel,
  render: (args) => ({
    components: { Carousel },
    template: "<Carousel/>",
  }),
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Component: Story = {};
