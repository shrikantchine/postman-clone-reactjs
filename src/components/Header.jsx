export function Header() {
  return (
    <div className="input-group mb-4">
      <select className="form-select flex-grow-0 w-auto" name="httpMethod">
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input
        type="url"
        placeholder="http://example.com"
        name="endpoint"
        className="form-control"
        required
      />
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </div>
  );
}
