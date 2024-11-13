import type { NextApiRequest, NextApiResponse } from 'next'

import type { APIUnsplashResponseData } from '@/types/api'

import BackendService from '@/unsplash/backend/services/backend'

export default async function handler(_req: NextApiRequest, res: NextApiResponse<APIUnsplashResponseData>): Promise<void> {
    const ts = Date.now()
    const photo = await BackendService.getRandomPhoto()

    res.status(200).json({ ts, photo, instanceId: BackendService.instanceId })
}
