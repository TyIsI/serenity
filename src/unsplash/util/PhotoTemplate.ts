import { Random } from 'unsplash-js/dist/methods/photos/types'

const PhotoTemplate: Random = {
  id: '',
  urls: {
    full: '',
    raw: '',
    regular: '',
    small: '',
    thumb: ''
  },
  alt_description: null,
  blur_hash: null,
  color: null,
  description: null,
  height: 0,
  likes: 0,
  links: {
    self: '',
    html: '',
    download: '',
    download_location: ''
  },
  promoted_at: null,
  width: 0,
  user: {
    id: '',
    bio: null,
    first_name: '',
    instagram_username: null,
    last_name: null,
    links: {
      followers: '',
      following: '',
      html: '',
      likes: '',
      photos: '',
      portfolio: '',
      self: ''
    },
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
    updated_at: '',
    username: ''
  },
  created_at: '',
  updated_at: '',
  exif: {
    make: null,
    model: null,
    exposure_time: null,
    aperture: null,
    focal_length: null,
    iso: null
  },
  location: {
    city: null,
    country: null,
    name: null,
    position: {
      latitude: null,
      longitude: null
    }
  }
}

export default PhotoTemplate
