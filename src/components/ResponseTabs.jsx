import Editor from "./Editor";

function ResponseTabs(props) {
  const headers = Object.entries(props.headers).map(([key, val]) => {
    return (
      <div className="row">
        <div className="col-1">{key}</div>
        <div className="col">{val}</div>
      </div>
    );
  });

  console.log(headers);
  return (
    <>
      <ul className="nav nav-tabs" id="responseTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="respose-body-tab"
            data-bs-toggle="tab"
            data-bs-target="#response-body"
            type="button"
            role="tab"
            aria-controls="response-body"
            aria-selected="true"
          >
            Body
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="respose-headers-tab"
            data-bs-toggle="tab"
            data-bs-target="#response-headers"
            type="button"
            role="tab"
            aria-controls="response-headers"
            aria-selected="false"
          >
            Headers
          </button>
        </li>
      </ul>

      <div className="tab-content p-3 border-top-0 border">
        <div
          className="tab-pane fade show active"
          id="response-body"
          role="tabpanel"
          aria-labelledby="response-body-tab"
        >
          <Editor body={props.body} />
        </div>
        <div
          className="tab-pane fade"
          id="response-headers"
          role="tabpanel"
          aria-labelledby="response-headers-tab"
        >
          {headers}
        </div>
      </div>
    </>
  );
}

export { ResponseTabs };
