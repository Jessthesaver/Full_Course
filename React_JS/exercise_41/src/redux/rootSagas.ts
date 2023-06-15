import { call, put, select, take } from "redux-saga/effects";
import { initData, setData } from "./slices/dataSlices";
import subscriber from "../components/utils/subscriber";

export default function* rootSaga(): Generator<any> {
  const dataSet = "1";
  let counter = 1;

  const channel: any = yield call(subscriber);

  yield put(initData({ dataSet }));

  while (true) {
    const incomingData = yield take(channel);
    let newLabel: string;

    newLabel = `${counter}`;

    const oldData: any = yield select((state) => state.data[dataSet]);

    let newData = {
      label: [...oldData.label, newLabel],
      y: [...oldData.y, incomingData],
    };

    if (oldData.label.length >= 100) {
      newData = {
        label: [...oldData.label.slice(1), newLabel],
        y: [...oldData.y.slice(1), incomingData],
      };
    }

    counter++;

    yield put(setData({ dataSet, data: newData }));
  }
}
