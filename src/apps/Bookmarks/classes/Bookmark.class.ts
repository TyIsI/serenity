export interface BookmarkData {
  id: number
  title?: string
  url?: string
}

export default class Bookmark implements BookmarkData {
  id: number
  title?: string
  url?: string

  constructor (title?: string, url?: string, id?: number) {
    this.id = id ?? Date.now()
    if (title != null) this.title = title
    if (url != null) this.url = url
  }

  serialize (): BookmarkData {
    return {
      id: this.id,
      title: this.title,
      url: this.url
    }
  }

  static unserialize (data: BookmarkData) {
    const todo = new Bookmark(data.title, data.url, data.id)

    return todo
  }
}
