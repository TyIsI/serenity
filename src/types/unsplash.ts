import { z } from 'zod'

export const zUnsplashEntity = z.object({
    id: z.string()
})

export const zUnsplashPhotoStatValue = z.object({
    value: z.number(),
    date: z.string()
})

export const zUnsplashPhotoStat = z.object({
    total: z.number(),
    historical: z.object({
        change: z.number(),
        quantity: z.number(),
        resolution: z.string(),
        values: z.array(zUnsplashPhotoStatValue)
    })
})

export const zUnsplashPhotoStats = zUnsplashEntity.extend({
    views: zUnsplashPhotoStat,
    downloads: zUnsplashPhotoStat
})

export const zUnsplashPhotoVeryBasic = zUnsplashEntity.extend({
    created_at: z.string(),
    updated_at: z.string(),
    urls: z.object({
        full: z.string(),
        raw: z.string(),
        regular: z.string(),
        small: z.string(),
        thumb: z.string()
    })
})

export const zUnsplashUserBasic = zUnsplashEntity.extend({
    bio: z.string().nullable(),
    first_name: z.string(),
    instagram_username: z.string().nullable(),
    last_name: z.string().nullable(),
    links: z.object({
        followers: z.string(),
        following: z.string(),
        html: z.string(),
        likes: z.string(),
        photos: z.string(),
        portfolio: z.string(),
        self: z.string()
    }),
    location: z.string().nullable(),
    name: z.string(),
    portfolio_url: z.string().nullable(),
    profile_image: z.object({
        small: z.string(),
        medium: z.string(),
        large: z.string()
    }),
    total_collections: z.number(),
    total_likes: z.number(),
    total_photos: z.number(),
    twitter_username: z.string().nullable(),
    updated_at: z.string(),
    username: z.string()
})

export const zUnsplashUserMedium = zUnsplashUserBasic.extend({
    photos: z.array(zUnsplashPhotoVeryBasic)
})

export const zUnsplashUserFull = zUnsplashUserMedium.extend({
    downloads: z.number(),
    followers_count: z.number(),
    following_count: z.number()
})

export const zUnsplashPhotoBasic = zUnsplashPhotoVeryBasic.extend({
    alt_description: z.string().nullable(),
    blur_hash: z.string().nullable(),
    color: z.string().nullable(),
    description: z.string().nullable(),
    height: z.number(),
    likes: z.number(),
    links: z.object({
        self: z.string(),
        html: z.string(),
        download: z.string(),
        download_location: z.string()
    }),
    promoted_at: z.string().nullable(),
    width: z.number(),
    user: zUnsplashUserBasic
})

export const zUnsplashPhotoExifAndLocation = z.object({
    exif: z.object({
        make: z.string().nullable(),
        model: z.string().nullable(),
        exposure_time: z.string().nullable(),
        aperture: z.string().nullable(),
        focal_length: z.string().nullable(),
        iso: z.number().nullable()
    }),
    location: z.object({
        city: z.string().nullable(),
        country: z.string().nullable(),
        /** full string representation of the location, including `city` and `country` if they exist. */
        name: z.string().nullable(),
        position: z.object({
            latitude: z.number().nullable(),
            longitude: z.number().nullable()
        })
    })
})

export const zUnsplashPhotoRandom = zUnsplashPhotoBasic.merge(zUnsplashPhotoExifAndLocation)

export const zUnsplashCollectionUser = z.object({})

export const zUnsplashCollectionVeryBasic = zUnsplashEntity.extend({
    title: z.string(),
    published_at: z.string(),
    last_collected_at: z.string(),
    updated_at: z.string(),
    cover_photo: zUnsplashPhotoBasic.nullable(),
    user: zUnsplashUserBasic.nullable()
})

export const zUnsplashCollectionBasic = zUnsplashCollectionVeryBasic.extend({
    description: z.string().nullable(),
    featured: z.boolean(),
    /**
     * This is different from `updated_at` because that may also change when a photo inside changes or
     * is deleted.
     */
    links: z.object({
        self: z.string(),
        html: z.string(),
        photos: z.string(),
        download: z.string().optional(),
        related: z.string().optional()
    }),
    preview_photos: z.array(zUnsplashPhotoVeryBasic).nullable(),
    total_photos: z.number()
})

export const zUnsplashCollectionPhoto = zUnsplashPhotoBasic.extend({
    current_user_collections: z.array(zUnsplashCollectionVeryBasic)
})

export const zUnsplashCollectionPhotos = z.array(zUnsplashCollectionPhoto)

export const zUnsplashCollectionPhotosResult = z.object({
    results: z.array(zUnsplashCollectionPhoto),
    total: z.number()
})

export const zUnsplashPhotoRelatedCollectionsType = z.union([z.literal('related'), z.literal('collected')])

export const zUnsplashPhotoFull = zUnsplashPhotoBasic.merge(zUnsplashPhotoExifAndLocation).extend({
    related_collections: z.object({
        type: zUnsplashPhotoRelatedCollectionsType,
        results: z.array(zUnsplashCollectionBasic),
        total: z.number()
    })
})

export type UnsplashEntity = z.infer<typeof zUnsplashEntity>
export type UnsplashPhotoStatValue = z.infer<typeof zUnsplashPhotoStatValue>
export type UnsplashPhotoStat = z.infer<typeof zUnsplashPhotoStat>
export type UnsplashPhotoStats = z.infer<typeof zUnsplashPhotoStats>
export type UnsplashPhotoVeryBasic = z.infer<typeof zUnsplashPhotoVeryBasic>
export type UnsplashUserBasic = z.infer<typeof zUnsplashUserBasic>
export type UnsplashUserMedium = z.infer<typeof zUnsplashUserMedium>
export type UnsplashUserFull = z.infer<typeof zUnsplashUserFull>
export type UnsplashPhotoBasic = z.infer<typeof zUnsplashPhotoBasic>
export type UnsplashPhotoExifAndLocation = z.infer<typeof zUnsplashPhotoExifAndLocation>
export type UnsplashPhotoRandom = z.infer<typeof zUnsplashPhotoRandom>
export type UnsplashCollectionVeryBasic = z.infer<typeof zUnsplashCollectionVeryBasic>
export type UnsplashCollectionBasic = z.infer<typeof zUnsplashCollectionBasic>
export type UnsplashCollectionPhoto = z.infer<typeof zUnsplashCollectionPhoto>
export type UnsplashCollectionPhotos = z.infer<typeof zUnsplashCollectionPhotos>
export type UnsplashCollectionPhotosResult = z.infer<typeof zUnsplashCollectionPhotosResult>
export type UnsplashPhotoRelatedCollectionsType = z.infer<typeof zUnsplashPhotoRelatedCollectionsType>
export type UnsplashPhotoFull = z.infer<typeof zUnsplashPhotoFull>
