import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import Counters from "./components/counters";

ReactDOM.render(<Counters />, document.getElementById("root"));
//registerServiceWorker();

const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <Counter />
//   </React.StrictMode>,
//   rootElement
// );
