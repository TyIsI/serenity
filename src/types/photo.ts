import { z } from 'zod'

export const zUrls = z.object({
    raw: z.string(),
    full: z.string(),
    regular: z.string(),
    small: z.string(),
    thumb: z.string(),
    small_s3: z.string()
})

export const zLinks = z.object({
    self: z.string(),
    html: z.string(),
    download: z.string(),
    download_location: z.string()
})

export const zTopicSubmissions = z.record(z.string(), z.unknown())

export const zUserLinks = z.object({
    self: z.string(),
    html: z.string(),
    photos: z.string(),
    likes: z.string(),
    portfolio: z.string(),
    following: z.string(),
    followers: z.string()
})

export const zProfileImage = z.object({
    small: z.string(),
    medium: z.string(),
    large: z.string()
})

export const zSocial = z.object({
    instagram_username: z.string(),
    portfolio_url: z.string(),
    twitter_username: z.unknown().optional(),
    paypal_email: z.unknown().optional()
})

export const zUser = z.object({
    id: z.string(),
    updated_at: z.date(),
    username: z.string(),
    name: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    twitter_username: z.unknown().optional(),
    portfolio_url: z.string(),
    bio: z.unknown().optional(),
    location: z.string(),
    links: zUserLinks,
    profile_image: zProfileImage,
    instagram_username: z.string(),
    total_collections: z.number(),
    total_likes: z.number(),
    total_photos: z.number(),
    accepted_tos: z.boolean(),
    for_hire: z.boolean(),
    social: zSocial
})

export const zExif = z.object({
    make: z.string(),
    model: z.string(),
    name: z.string(),
    exposure_time: z.string(),
    aperture: z.string(),
    focal_length: z.string(),
    iso: z.number()
})

export const zPosition = z.object({
    latitude: z.number(),
    longitude: z.number()
})

export const zLocation = z.object({
    title: z.string(),
    name: z.string(),
    city: z.unknown().optional(),
    country: z.string(),
    position: zPosition
})

export const zIPhotoData = z.object({
    id: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
    promoted_at: z.date(),
    width: z.number(),
    height: z.number(),
    color: z.string(),
    blur_hash: z.string(),
    description: z.string(),
    alt_description: z.string(),
    urls: zUrls,
    links: zLinks,
    categories: z.array(z.unknown()),
    likes: z.number(),
    liked_by_user: z.boolean(),
    current_user_collections: z.array(z.unknown()),
    sponsorship: z.unknown().optional(),
    topic_submissions: zTopicSubmissions,
    user: zUser,
    exif: zExif,
    location: zLocation,
    views: z.number(),
    downloads: z.number()
})

export const zIPhotoResult = z.object({
    type: z.string().optional(),
    status: z.number(),
    response: z.array(zIPhotoData).optional(),
    originalResponse: z.unknown()
})

export type Urls = z.infer<typeof zUrls>
export type Links = z.infer<typeof zLinks>
export type TopicSubmissions = z.infer<typeof zTopicSubmissions>
export type UserLinks = z.infer<typeof zUserLinks>
export type ProfileImage = z.infer<typeof zProfileImage>
export type Social = z.infer<typeof zSocial>
export type User = z.infer<typeof zUser>
export type Exif = z.infer<typeof zExif>
export type Position = z.infer<typeof zPosition>
export type Location = z.infer<typeof zLocation>
export type IPhotoData = z.infer<typeof zIPhotoData>
export type IPhotoResult = z.infer<typeof zIPhotoResult>
