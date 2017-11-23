import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "normalize.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
