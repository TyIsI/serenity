import type { NextApiRequest, NextApiResponse } from 'next'

import BackendService from 'unsplash/backend/services/backend'

type Data = {
  ts: number,
  photo: object,
  instanceId: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ts = Date.now()
  const photo = await BackendService.getRandomPhoto()

  res.status(200).json({ ts, photo, instanceId: BackendService.instanceId })
}
