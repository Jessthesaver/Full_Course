import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSagas";
import dataReducer from "./slices/dataSlices";
import { setupListeners } from "@reduxjs/toolkit/query";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middlewares);
  },
});

sagaMiddleware.run(rootSaga);

setupListeners(store.dispatch);

export default store;
