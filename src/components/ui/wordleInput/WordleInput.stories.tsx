import type { Meta, StoryObj } from "@storybook/react";

import WordleInput from "./WordleInput";
import { mockWordleInputProps } from "./WordleInput.mocks";

const meta = {
  title: "ui/WordleInput",
  component: WordleInput,
} satisfies Meta<typeof WordleInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockWordleInputProps.base,
  },
};
