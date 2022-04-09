export default class Bookmark {
  id: number
  title: string
  url: string

  constructor (title: string, url: string) {
    this.id = Date.now()
    this.title = title
    this.url = url
  }
}
