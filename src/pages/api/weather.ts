import type { NextApiResponse } from 'next'

import type { RequestError } from '@/types/api'
import { zCoords, type WeatherCacheEntry } from '@/types/weather'

import weatherBackendService from '@/weather/backend/services/backend'

interface RequestData {
    body: {
        coords: { latitude: number; longitude: number }
    }
}

export default async function handler(req: RequestData, res: NextApiResponse<WeatherCacheEntry | RequestError<'Missing or invalid coords'>>): Promise<void> {
    if (!zCoords.safeParse(req.body.coords).success) {
        res.status(400).json({ result: 'ERROR', message: 'Missing or invalid coords' })
    } else {
        const { ts, weather, expiryTime } = await weatherBackendService.getWeather(req.body.coords)

        res.status(200).json({ ts, weather, expiryTime, instanceId: weatherBackendService.instanceId })
    }
}
