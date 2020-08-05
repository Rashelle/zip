const { jobPositions } = require("./data/jobPositions");

function index(req, res) {
  return res.status(200).send({ jobPositions });
}

module.exports = { index };
