import { render, screen } from "@testing-library/react";
import "../setupTests";
import Graph from "../components/graph";
import "jest-canvas-mock";
import { expectSaga } from "redux-saga-test-plan";
import rootSaga from "../redux/rootSagas";
import dataReducer from "../redux/slices/dataSlices";

describe("Line chart tests", () => {
  test("Line graph", () => {
    const data = [1, 2, 3, 4];
    const labels = ["April", "May", "June", "July"];
    const canvasMock = jest
      .spyOn(window.HTMLCanvasElement.prototype, "getContext")
      .mockReturnValue({
        beginPath: jest.fn(),
        moveTo: jest.fn(),
        lineTo: jest.fn(),
        stroke: jest.fn(),
      });

    render(<Graph data={data} caption="Caption" labels={labels} />);

    expect(canvasMock).toHaveBeenCalled();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

describe("Checking the sagas", () => {
  test("Checking init state", () => {
    return expectSaga(rootSaga)
      .withReducer(dataReducer)
      .run()
      .then((result) => {
        console.log(result.storeState);
        expect(result.storeState).toEqual({
          1: {
            label: [],
            y: [],
          },
        });
      });
  });
});
