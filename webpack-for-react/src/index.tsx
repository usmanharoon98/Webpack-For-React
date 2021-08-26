// @ts-nocheck
import { hot } from "react-hot-loader/root";
import React from "react";
import {render} from "react-dom";
import App from "./components/App";

const Render = (Component: any) =>
  render(<Component />, document.getElementById("root"));

Render(hot(App));