import Bookmark from '../../classes/Bookmark.class'

export interface BookmarkFormProps {
  bookmark: Bookmark;
  inlineSubmitButton?: boolean;
  submitButtonText?: string;
  onCancel?: () => void;
  onDelete?: (bookmark: Bookmark) => void;
  onSubmit: (bookmark: Bookmark) => void;
}

export interface BookmarkFormState {
  bookmark: Bookmark;
  title: string;
  url: string;
  inlineSubmitButton: boolean;
  submitButtonText: string;
  [key: string]: any;
}
