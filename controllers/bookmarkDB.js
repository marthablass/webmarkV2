'use strict';

const logger = require('../utils/logger');
const bookmarkListStore = require('../models/bookmarkList-store.js');

const bookmarkDB = {
  index(request, response) {
    logger.info('bookmarkDB rendering');
    const viewData = {
      title: 'Bookmark List Dashboard',
      bookmarks: bookmarkListStore.getAllBookmarkLists(),
    };
    logger.info('about to render', bookmarkListStore.getAllBookmarkLists());
    response.render('bookmarkDB', viewData);
  },
};

module.exports = bookmarkDB;
