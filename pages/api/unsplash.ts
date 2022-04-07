// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import BackendService from 'lib/unsplash/services/backend/index'

type Data = {
  ts: number,
  photo: object
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ts = Date.now()
  const photo = await BackendService.getRandomPhoto()

  res.status(200).json({ ts, photo })
}
