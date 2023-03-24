import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import KeyValuePair from './KeyValuePairs';
import ResponseContainer from './ResponseContainer';
import CodeMirror from './CodeMirror';


const callEndpoint = event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  let queryParams = {}
  let requestHeaders = {}

  let count = 0;
  while (true) {
    const queryKey = "query_key_" + count;
    const queryVal = "query_val_" + count;
    const headerKey = "header_key_" + count;
    const headerVal = "header_val_" + count; 
    if (formData.has(queryKey)) {
      queryParams = {...queryParams, [formData.get(queryKey)] : formData.get(queryVal)}
    }
    if (formData.has(headerKey)) {
      requestHeaders = {...requestHeaders, [formData.get(headerKey)] : formData.get(headerVal)}
    }
    if (!formData.has(headerKey) && !formData.has(queryKey)) {
      break;
    }
    count += 1;
  }

  axios({
    url: formData.get("endpoint"),
    method: formData.get("httpMethod"),
    params: queryParams,
    headers: requestHeaders
  }).then(response => {
    console.log(response)
  }).catch(e => e)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='p-4'>
      <form onSubmit={callEndpoint}>
        <div className='input-group mb-4'>
          <select className='form-select flex-grow-0 w-auto' name='httpMethod'>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
          <input type="url" placeholder='http://example.com' name='endpoint' className='form-control' required />
          <button type='submit' className='btn btn-primary'>Send</button>
        </div>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active"
              id="query-params-tab"
              data-bs-toggle="tab"
              data-bs-target="#query-params"
              type="button"
              role="tab"
              aria-controls="query-params"
              aria-selected="true">Query Params</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link"
              id="request-headers-tab"
              data-bs-toggle="tab"
              data-bs-target="#request-headers"
              type="button"
              role="tab"
              aria-controls="request-headers"
              aria-selected="false">Request Headers</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link"
              id="body-tab"
              data-bs-toggle="tab"
              data-bs-target="#body"
              type="button"
              role="tab"
              aria-controls="body"
              aria-selected="false">Body</button>
          </li>
        </ul>
        <div className="tab-content p-3 border-top-0 border">
          <div className="tab-pane fade show active"
            id="query-params"
            role="tabpanel"
            aria-labelledby="query-params-tab">
            <KeyValuePair prefix="query"/>
          </div>
          <div className="tab-pane fade"
            id="request-headers"
            role="tabpanel"
            aria-labelledby="request-headers-tab">
            <KeyValuePair prefix="header"/>
          </div>
          <div className="tab-pane fade"
            id="body"
            role="tabpanel"
            aria-labelledby="body-tab">
              <div className='overflow-auto' style={{maxHeight: 200}}><CodeMirror /></div>      
          </div>
          </div>
      </form>

      <ResponseContainer status="Okay" time="2s" size="250k"/>
    </div>
  </React.StrictMode>
);