import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const KeyValueTemplate = props => {
    const removeKeyValuePair = event => {
        event.target.closest(`div`).remove()
    }
    return (
        <div className="input-group my-2">
            <input type="text"
                className="form-control"
                placeholder="Key" />
            <input type="text"
                className="form-control"
                placeholder="Value" />
            <button type="button"
                className="btn btn-outline-danger"
                onClick={removeKeyValuePair}>Remove</button>
        </div>
    )
}

export default function KeyValuePair(props) {
    const [keyValuePairs, setKeyValuePairs] = useState([])

    const onAddBtnClick = () => {
        setKeyValuePairs(keyValuePairs.concat(<KeyValueTemplate key={uuidv4()} />));
    }

    return (
        <div>
            <div>{keyValuePairs}</div>
            <button
                className='mt-2 btn btn-outline-success'
                type='button'
                onClick={onAddBtnClick}>Add</button>
        </div>
    );
}