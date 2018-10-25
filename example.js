import React, { useState } from "react";
import { render } from "react-dom";
import useDocumentTitle from "./";

function App() {
  return <NestedComponent />;
}

function NestedComponent() {
  const [value, setValue] = useState("page title");
  useDocumentTitle(value);
  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
}

render(<App />, window.root);
