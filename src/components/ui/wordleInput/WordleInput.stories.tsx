import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import WordleInput from "./WordleInput";
import { mockWordleInputProps } from "./WordleInput.mocks";

const meta = {
  title: "ui/WordleInput",
  component: WordleInput,
} satisfies Meta<typeof WordleInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockWordleInputProps.base,
  },
};

export const FilledFormValid: Story = {
  args: {
    ...mockWordleInputProps.base,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs = await canvas.findAllByTestId("wordles");

    for (const element of inputs) {
      await userEvent.type(element, `${1}`);
    }
  },
};

export const FilledFormValidSubmit: Story = {
  args: {
    ...mockWordleInputProps.base,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs: HTMLInputElement[] = await canvas.findAllByTestId("wordles");

    for (const element of inputs) {
      await userEvent.type(element, `${1}`);
    }

    for (const element of inputs) {
      element.disabled = true;
    }
  },
};
