import CollectionCard from "./CollectionCard.vue";

import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof CollectionCard> = {
  title: "collection/CollectionCard",
  component: CollectionCard,
};

export default meta;
type Story = StoryObj<typeof CollectionCard>;

export const Component: Story = {
  args: {},
};
