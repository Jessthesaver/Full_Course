const fetch = require("node-fetch");

const beginFetching = (request, opts) => {
  const controller = new AbortController();
  const signal = controller.signal;
  let result = {};

  result = fetch(request, { ...opts, signal });

  result.abort = () => controller.abort();
  return result;
};

module.exports = beginFetching;
