const express = require("express");
const app = express();
const path = require("path");

const jobsDataController = require("./jobsDataController");

app.use("/", express.static(path.join(__dirname, "client/public")));
app.get("/jobsData", jobsDataController.index);

const PORT = 80;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
