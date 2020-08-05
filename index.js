const express = require('express');
const router = express.Router();
const path = require('path');

const LOCAL_PORT = 8080
const PUBLIC_PATH = path.join(__dirname, 'src/public')
app.use("/", express.static(PUBLIC_PATH));

// express.static("/", "src/public");

// router.use('/', express.static('/src/public/'))

// express.listen(LOCAL_PORT, () => {
//   console.log(`listening on port ${LOCAL_PORT}`);
// });