import { useSelector } from "react-redux";
import Graph from "./graph";

type DataProps = {
  dataSet: string;
  caption: string;
};

export default function Data({ dataSet, caption }: DataProps) {
  const data = useSelector((state: any) => state.data[dataSet]);

  return (
    <>
      <Graph data={data.y} labels={data.label} caption={caption} />
    </>
  );
}
