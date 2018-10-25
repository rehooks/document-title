import React from "react";
import { render } from "react-dom";
import useDocumentTitle from "./";

function App() {
  useDocumentTitle("page Title");
  return <div />;
}

render(<App />, window.root);
