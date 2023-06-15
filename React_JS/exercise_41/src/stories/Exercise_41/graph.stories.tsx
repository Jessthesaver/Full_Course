import Graph from "../../components/graph";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Graph",
  component: Graph,
} as Meta<typeof Graph>;

type Story = StoryObj<typeof Graph>;

export const GraphTemplate: Story = {
  args: {
    caption: "",
    data: [],
    labels: [],
  },
};

export const SimpleLineChart: Story = {
  ...GraphTemplate,
  args: {
    caption: "Simple data",
    data: [250, 600, -100, 300, -500],
    labels: ["April", "May", "June", "July", "August"],
  },
};

const randomData = Array.from({ length: 100 }, () =>
  Math.floor((Math.random() - 0.5) * 2 * 500)
);
const label = randomData.map((_, index) => String(index + 1));

export const FullPoints: Story = {
  ...GraphTemplate,
  args: {
    caption: "Full random data",
    data: randomData,
    labels: label,
  },
};
