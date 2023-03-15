import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import KeyValuePair from './KeyValuePairs';

const callEndpoint = event => {
  event.preventDefault();
  axios({
    url: event.target.endpoint.value,
    method: event.target.httpMethod.value
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
            <KeyValuePair />
          </div>
          <div className="tab-pane fade"
            id="request-headers"
            role="tabpanel"
            aria-labelledby="request-headers-tab">
            <KeyValuePair />
          </div>
          <div className="tab-pane fade"
            id="body"
            role="tabpanel"
            aria-labelledby="body-tab">
            Contact
          </div>
        </div>

      </form>
    </div>
  </React.StrictMode>
);