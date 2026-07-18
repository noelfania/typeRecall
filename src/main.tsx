/* @refresh reload */
import { render } from "solid-js/web";

import App from "./App";
import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("루트[root] 요소를 찾을 수 없습니다.");
}

render(() => <App />, root);
