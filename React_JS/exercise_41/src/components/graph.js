import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

const Graph = ({ data, caption, labels }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const min = -1000;
  const max = 1000;
  const bcolor = "rgb(255, 99, 132)";
  const bgcolor = "rgba(255, 99, 132, 0.5)";

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: true,
    },
    scales: {
      y: {
        min,
        max,
        type: "linear",
        display: true,
        position: "left",
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const dataInfo = {
    labels: labels,
    datasets: [
      {
        label: caption,
        data,
        borderColor: bcolor,
        backgroundColor: bgcolor,
      },
    ],
  };

  return (
    <>
      <Line options={options} data={dataInfo} />
    </>
  );
};

Graph.propTypes = {
  caption: PropTypes.string,
  data: PropTypes.array,
  labels: PropTypes.array,
};

export default Graph;
