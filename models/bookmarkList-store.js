const _ = require('lodash');
'use strict';

const bookmarkListStore = {

  bookmarkListCollection: require('./bookmarkList-store.json').bookmarkListCollection,

  getAllBookmarkLists() {
    return this.bookmarkListCollection;
  },
  
  removeBookmark(id, bookmarkId) {
    const bookmarkList = this.getBookmarkList(id);
    _.remove(bookmarkList.bookmarks, { id: bookmarkId });
    // remove the song with id songId from the playlist
  },

  getBookmarkList(id) {
    let foundBookmarkList = null;
    for (let bookmarkList of this.bookmarkListCollection) {
      if (id == bookmarkList.id) {
        foundBookmarkList = bookmarkList;
      }
    }
    return foundBookmarkList;
  },
  
  getBookmarkList(id) {
    return _.find(this.bookmarkListCollection, { id: id });
  },
  
  removeBookmarkList(id) {
  _.remove(this.bookmarkListCollection, { id: id });
},
  
};

module.exports = bookmarkListStore;
