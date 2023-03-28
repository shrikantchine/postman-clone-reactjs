import Editor from "./Editor";
import KeyValuePair from "./KeyValuePairs";

export function RequestTabs(props) {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="query-params-tab"
            data-bs-toggle="tab"
            data-bs-target="#query-params"
            type="button"
            role="tab"
            aria-controls="query-params"
            aria-selected="true"
          >
            Query Params
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="request-headers-tab"
            data-bs-toggle="tab"
            data-bs-target="#request-headers"
            type="button"
            role="tab"
            aria-controls="request-headers"
            aria-selected="false"
          >
            Request Headers
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="body-tab"
            data-bs-toggle="tab"
            data-bs-target="#body"
            type="button"
            role="tab"
            aria-controls="body"
            aria-selected="false"
          >
            Body
          </button>
        </li>
      </ul>
      <div className="tab-content p-3 border-top-0 border">
        <div
          className="tab-pane fade show active"
          id="query-params"
          role="tabpanel"
          aria-labelledby="query-params-tab"
        >
          <KeyValuePair prefix="query" />
        </div>
        <div
          className="tab-pane fade"
          id="request-headers"
          role="tabpanel"
          aria-labelledby="request-headers-tab"
        >
          <KeyValuePair prefix="header" />
        </div>
        <div
          className="tab-pane fade"
          id="body"
          role="tabpanel"
          aria-labelledby="body-tab"
        >
          <div className="overflow-auto" style={{ maxHeight: 200 }}>
            <Editor onChangeEditor={props.onChangeEditorRequest} />
          </div>
        </div>
      </div>
    </>
  );
}
