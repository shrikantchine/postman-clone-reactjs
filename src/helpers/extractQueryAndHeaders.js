function extractQueryAndHeaders(formData) {
  let queryParams = {};
  let requestHeaders = {};

  let count = 0;
  while (true) {
    const queryKey = "query_key_" + count;
    const queryVal = "query_val_" + count;
    const headerKey = "header_key_" + count;
    const headerVal = "header_val_" + count;
    if (formData.has(queryKey)) {
      queryParams = {
        ...queryParams,
        [formData.get(queryKey)]: formData.get(queryVal),
      };
    }
    if (formData.has(headerKey)) {
      requestHeaders = {
        ...requestHeaders,
        [formData.get(headerKey)]: formData.get(headerVal),
      };
    }
    if (!formData.has(headerKey) && !formData.has(queryKey)) {
      break;
    }
    count += 1;
  }
  return {
    queryParams: queryParams,
    headers: requestHeaders,
  };
}

export { extractQueryAndHeaders };
