import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { RequestTabs } from "./components/RequestTabs";
import axios from "axios";
import { extractQueryAndHeaders } from "./helpers/extractQueryAndHeaders";
import { isValidJson } from "./helpers/isValidJson";
import prettyBytes from "pretty-bytes";
import { Response } from "./components/Response";
import { ResponseHeader } from "./components/ResponseHeader";
import { ResponseTabs } from "./components/ResponseTabs";

function updateEndTime(response) {
  response.customData = response.customData || {};
  response.customData.time =
    new Date().getTime() - response.config.customData.startTime;
  return response;
}

function App() {
  const [requestBody, setRequestBody] = useState(null);
  const [showResponse, setShowResponse] = useState(false);
  const [responseData, setResponseData] = useState({});

  const onChangeRequest = (value, viewUpdate) => {
    if (isValidJson(value)) {
      setRequestBody(JSON.parse(value));
    }
  };

  const toggleResponse = (val) => {
    setShowResponse(val);
  };

  const extractResponse = (res) => {
    setResponseData({
      status: `${res.status} (${res.statusText})`,
      size: prettyBytes(
        JSON.stringify(res.data).length + JSON.stringify(res.headers).length
      ),
      time: res.customData.time,
      data: JSON.stringify(res.data, null, " "),
      headers: res.headers,
    });
  };

  const callEndpoint = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { queryParams, headers } = extractQueryAndHeaders(formData);

    axios.interceptors.request.use((request) => {
      request.customData = request.customData || {};
      request.customData.startTime = new Date().getTime();
      return request;
    });

    axios.interceptors.response.use(updateEndTime, (e) => {
      return Promise.reject(updateEndTime(e.response));
    });

    axios({
      url: formData.get("endpoint"),
      method: formData.get("httpMethod"),
      params: queryParams,
      headers: headers,
      data: requestBody,
    })
      .then((response) => {
        console.log(response);
        toggleResponse(true);
        extractResponse(response);
      })
      .catch((e) => e);
  };

  return (
    <div className="p-4">
      <form onSubmit={callEndpoint}>
        <Header />
        <RequestTabs onChangeEditorRequest={onChangeRequest} />
        {showResponse && (
          <Response>
            <div className="d-flex my-3">
              <ResponseHeader
                headerName="Status"
                headerVal={responseData.status}
              />
              <ResponseHeader headerName="Time" headerVal={responseData.time} />
              <ResponseHeader headerName="Size" headerVal={responseData.size} />
            </div>
            <ResponseTabs
              body={responseData.data}
              headers={responseData.headers}
            />
          </Response>
        )}
      </form>
    </div>
  );
}

export default App;
