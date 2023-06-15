import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSagas";
import dataReducer from "./slices/dataSlices";
import { setupListeners } from "@reduxjs/toolkit/query";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middlewares);
  },
});

sagaMiddleware.run(rootSaga);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
