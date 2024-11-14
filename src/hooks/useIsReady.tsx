import { useEffect, useState } from 'react'

export const useIsReady = (): boolean => {
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        setIsReady(true)
    }, [])

    return isReady
}
