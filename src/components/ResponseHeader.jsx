function ResponseHeader(prop) {
  return <div className="me-3">{`${prop.headerName}: ${prop.headerVal}`}</div>;
}

export { ResponseHeader };
