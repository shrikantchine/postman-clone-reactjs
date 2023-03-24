import useCodeMirror from "./useCodeMirror";

const CodeMirror = () => {
  const { ref } = useCodeMirror();

  return <div ref={ref} />;
};

export default CodeMirror;
