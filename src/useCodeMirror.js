import { useState, useCallback, useEffect } from "react";
import {basicSetup, EditorView} from "codemirror"
import {EditorState} from "@codemirror/state"
import { json } from "@codemirror/lang-json"

export default function useCodeMirror() {
    const [element, setElement] = useState(null)
  
    const ref = useCallback((node) => {
      if (!node) return;
  
      setElement(node);
    }, []);
  
    useEffect(() => {
      if (!element) return;
  
      const view = new EditorView({
        state: EditorState.create({
          extensions: [
            basicSetup,
            json()
          ]
        }),
        parent: element
      });
  
      return () => view?.destroy();
    }, [element]);
  
    return { ref };
  }