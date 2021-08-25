import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const Num = 5;

const render = (Component) =>
  ReactDOM.render(<Component />, document.getElementById("root"));

render(hot(App));