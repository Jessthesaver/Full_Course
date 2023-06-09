import Graph from "../../components/graph";

export default {
  title: "Graph",
  component: Graph,
};

export const GraphTemplate = {
  args: {
    caption: "",
    data: [],
    labels: [],
  },
};

export const SimpleLineChart = {
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

export const FullPoints = {
  ...GraphTemplate,
  args: {
    caption: "Full random data",
    data: randomData,
    labels: label,
  },
};
