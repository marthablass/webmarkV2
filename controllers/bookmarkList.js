'use strict';

const logger = require('../utils/logger');
const bookmarkListStore = require('../models/bookmarkList-store');

const bookmarkList = {
  index(request, response) {
    const bookmarkListId = request.params.id;
    logger.debug('Bookmark id = ', bookmarkListId);
    const viewData = {
      title: 'BookmarkList',
      bookmarkList: bookmarkListStore.getBookmarkList(bookmarkListId),
    };
    response.render('bookmarkList', viewData);
  },
  
  deleteBookmark(request, response) {
    const bookmarkListId = request.params.id;
    const bookmarkId = request.params.bookmarkid;
    logger.debug(`Deleting Bookmark ${bookmarkId} from bookmarkList ${bookmarkListId}`);
    bookmarkListStore.removeBookmark(bookmarkListId, bookmarkId);
    response.redirect('/bookmarkList/' + bookmarkListId);
  },
};

module.exports = bookmarkList;