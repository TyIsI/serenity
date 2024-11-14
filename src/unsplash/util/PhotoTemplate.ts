import type { UnsplashCollectionPhoto } from '@/types/unsplash'

export const PhotoTemplate: UnsplashCollectionPhoto = {
    id: '',
    created_at: '',
    updated_at: '',
    urls: {
        full: '',
        raw: '',
        regular: '',
        small: '',
        thumb: ''
    },
    links: {
        self: '',
        html: '',
        download: '',
        download_location: ''
    },
    likes: 0,
    alt_description: null,
    blur_hash: null,
    color: null,
    description: null,
    height: 0,
    promoted_at: null,
    width: 0,
    user: {
        id: '',
        updated_at: '',
        links: {
            likes: '',
            self: '',
            html: '',
            followers: '',
            following: '',
            photos: '',
            portfolio: ''
        },
        bio: null,
        first_name: '',
        instagram_username: null,
        last_name: null,
        location: null,
        name: '',
        portfolio_url: null,
        profile_image: {
            small: '',
            medium: '',
            large: ''
        },
        total_collections: 0,
        total_likes: 0,
        total_photos: 0,
        twitter_username: null,
        username: ''
    },
    current_user_collections: []
}

export default PhotoTemplate
