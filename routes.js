'use strict';

const express = require('express');
const router = express.Router();

const welcome = require('./controllers/welcome');
const bookmarkDB = require('./controllers/bookmarkDB.js');
const about = require('./controllers/about.js');
const bookmarkList = require('./controllers/bookmarkList.js');


router.get('/', welcome.index);
router.get('/bookmarkDB', bookmarkDB.index);
router.get('/about', about.index);
router.get('/bookmarkList/:id', bookmarkList.index);
router.get('/bookmarkList/:id/deletebookmark/:bookmarkid', bookmarkList.deleteBookmark);

module.exports = router;
