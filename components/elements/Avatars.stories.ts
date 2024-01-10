import Avatars from "./Avatars.vue";

import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof Avatars> = {
  title: "elements/Avatars",
  component: Avatars,
  argTypes: {
    size: {
      options: ["xs", "sm", "lg", "xl"],
      control: {
        type: "radio",
      },
    },
    type: {
      options: ["solid", "regular"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatars>;

export const Component: Story = {
  args: {
    icon: "download",
    size: "xs",
    type: "solid",
  },
};
