import { z } from 'zod'

export const zBookmarkData = z.object({
    id: z.union([z.string().uuid(), z.coerce.number()]),
    title: z.string().optional(),
    url: z.string().optional()
})

export const zBookmarkDataFull = zBookmarkData.required()

export type BookmarkData = z.infer<typeof zBookmarkData>
export type BookmarkDataFull = z.infer<typeof zBookmarkDataFull>

export class Bookmark implements BookmarkData {
    id: BookmarkData['id']
    title: BookmarkData['title']
    url: BookmarkData['url']

    constructor(title?: BookmarkData['title'], url?: BookmarkData['url'], id?: BookmarkData['id']) {
        id ??= crypto.randomUUID()

        zBookmarkData.parse({ id, title, url })

        if (typeof id === 'number') id = crypto.randomUUID()

        this.id = id

        if (title != null) this.title = title
        if (url != null) this.url = url
    }

    serialize(): BookmarkData {
        return {
            id: this.id,
            title: this.title,
            url: this.url
        }
    }

    static unserialize(data: BookmarkData): Bookmark {
        return new Bookmark(data.title, data.url, data.id)
    }
}

export const zBookmark = z.instanceof(Bookmark)

export type IBookmarks = Bookmark[]
