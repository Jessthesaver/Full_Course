import { render, screen } from "@testing-library/react";
import "../setupTests";
import Graph from "../components/graph";
import "jest-canvas-mock";
import { expectSaga } from "redux-saga-test-plan";
import rootSaga from "../redux/rootSagas";
import dataReducer from "../redux/slices/dataSlices";

describe("Line chart tests", () => {
  test("Should have the line graph be rendered correctly and the canvas mock should be succesfully called", () => {
    const data = [1, 2, 3, 4];
    const labels = ["April", "May", "June", "July"];
    const canvasMock = jest
      .spyOn(window.HTMLCanvasElement.prototype, "getContext")
      .mockReturnValue({
        beginPath: jest.fn(),
        moveTo: jest.fn(),
        lineTo: jest.fn(),
        stroke: jest.fn(),
      } as any);

    render(<Graph data={data} caption="Caption" labels={labels} />);

    expect(canvasMock).toHaveBeenCalled();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

describe("Check the sagas behavior of the reducer", () => {
  test("Check the initial state to start empty", () => {
    return expectSaga(rootSaga)
      .withReducer(dataReducer)
      .run()
      .then((result) => {
        expect(result.storeState).toEqual({
          1: {
            label: [],
            y: [],
          },
        });
      });
  });
});
