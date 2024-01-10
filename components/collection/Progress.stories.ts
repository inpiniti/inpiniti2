import Progress from "./Progress.vue";

import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof Progress> = {
  title: "collection/Progress",
  component: Progress,
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Component: Story = {
  args: {
    title: "secter",
    name: "삼성전자",
    currentIndex: 11,
    totalCount: 86,
  },
};
