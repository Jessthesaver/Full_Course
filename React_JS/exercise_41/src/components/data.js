import { useSelector } from "react-redux";
import Graph from "./graph";

const Data = ({ dataSet, caption }) => {
  const data = useSelector((state) => state.data[dataSet]);

  return (
    <>
      <Graph data={data.y} labels={data.label} caption={caption} />
    </>
  );
};

export default Data;
