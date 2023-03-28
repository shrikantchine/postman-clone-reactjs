import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const KeyValueTemplate = (props) => {
  const removeKeyValuePair = (event) => {
    event.target.closest(`div`).remove();
  };
  return (
    <div className="input-group my-2">
      <input
        type="text"
        className="form-control"
        placeholder="Key"
        name={props.prefix + "_key_" + props.counter}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Value"
        name={props.prefix + "_val_" + props.counter}
      />
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={removeKeyValuePair}
      >
        Remove
      </button>
    </div>
  );
};

export default function KeyValuePair(props) {
  const [keyValuePairs, setKeyValuePairs] = useState([]);
  const [counter, setCounter] = useState(0);

  const onAddBtnClick = () => {
    setCounter(counter + 1);
    setKeyValuePairs(
      keyValuePairs.concat(
        <KeyValueTemplate
          key={uuidv4()}
          prefix={props.prefix}
          counter={counter}
        />
      )
    );
  };

  return (
    <div>
      <div>{keyValuePairs}</div>
      <button
        className="mt-2 btn btn-outline-success"
        type="button"
        onClick={onAddBtnClick}
      >
        Add
      </button>
    </div>
  );
}
