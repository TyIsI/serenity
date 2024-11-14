import type { NextApiResponse } from 'next'

export default async function handler(request: Request, res: NextApiResponse): Promise<void> {
    const result = {
        hasHeaders: 'headers' in request,
        headers: request.headers
    }

    res.status(200).json(result)
}
