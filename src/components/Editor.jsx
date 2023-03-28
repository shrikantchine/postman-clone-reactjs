import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";

function Editor(props) {
  const body = props.body || "";
  return (
    <CodeMirror
      value={body}
      height="200px"
      extensions={[json()]}
      onChange={props.onChangeEditor}
    />
  );
}
export default Editor;
