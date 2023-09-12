const express = require("express");
const endpoint_task1 = require("./endpointTask");

const app = express();

let port = 3000;

// this route takes two queries
app.get("/api", endpoint_task1);

app.listen(port, () => {
  console.log(`server is runnning on ${port}`);
});
