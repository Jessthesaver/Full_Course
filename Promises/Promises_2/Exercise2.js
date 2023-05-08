function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function retryCall(req, retries, delayTime, increment, attempt = 0) {
  for (let i = 0; i < retries; i++) {
    try {
      result = await req();
      console.log(result);
      return result;
    } catch (err) {
      if (increment) {
        delayTime += delayTime;
      }
      await delay(delayTime);
    }
  }
  throw new Error("Query retries exceeded");
}

module.exports = retryCall;
