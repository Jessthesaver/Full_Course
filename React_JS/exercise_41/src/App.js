import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Suspense } from "react";
import Data from "./components/data";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback="loading">
        <Data dataSet="1" caption={"Data set 1"} />
      </Suspense>
    </Provider>
  );
}

export default App;
