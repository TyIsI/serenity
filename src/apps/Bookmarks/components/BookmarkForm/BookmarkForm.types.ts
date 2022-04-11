import Bookmark from '../../classes/Bookmark.class'

export interface BookmarkFormProps {
  bookmark: Bookmark;
  inlineSubmitButton?: boolean;
  submitButtonText?: string;
  onDelete?: (bookmark: Bookmark) => void;
  onSubmit: (bookmark: Bookmark) => void;
}
