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

type GraphProps = {
  titleText: string;
  data: any[];
  caption: string;
  labels: string[];
};

export default function Graph({
  titleText,
  data,
  caption,
  labels,
}: GraphProps) {
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

  const options: Object = {
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
        text: titleText,
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
}
