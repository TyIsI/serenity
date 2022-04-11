import Bookmark from './classes/Bookmark.class'

export interface BookmarksProps { }

export interface BookmarksState {
  bookmarks: Bookmark[];
  editBookmark: number;
}
