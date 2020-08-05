const express = require('express');
const router = express.Router();
const LOCAL_PORT = 8080

router.unsubscribe('/', express.static('/src/public/'))

express.lister(port, () => { console.log(`listening on port ${ LOCAL_PORT}`)})