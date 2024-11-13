export const fetcher = async (resource: string, init?: RequestInit): Promise<unknown> => {
    return await fetch(resource, init).then(async (res): Promise<unknown> => await res.json())
}

export const fetcherBlob = async (resource: string, init?: RequestInit): Promise<unknown> => {
    return await fetch(resource, init).then(async (res): Promise<unknown> => await res.blob())
}

export const weatherFetcher = async (coords: GeolocationCoordinates): Promise<unknown> =>
    await fetcher('/api/weather', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ coords })
    })
