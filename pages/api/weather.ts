/* eslint-disable camelcase */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import BackendService from 'src/weather/backend/services/backend'
import { WeatherCacheEntry } from 'src/weather/types/weather'

type Data = WeatherCacheEntry

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { ts, weather, expiry_time } = await BackendService.getWeather(req.body.coords)

  res.status(200).json({ ts, weather, expiry_time })
}
