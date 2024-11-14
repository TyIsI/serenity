'use client'

import { useEffect, useMemo, useState } from 'react'

import { stateMachine } from 'pretty-state-machine'

export const useStateMachine = <T = unknown,>(key: string, defaultValue?: T): [T, (val: T) => void] => {
    const [state, setState] = useState(stateMachine.get<T>(key, defaultValue))

    useEffect(() => {
        const updater = (updaterState: Record<string, T>): void => {
            setState(updaterState[key])
        }

        stateMachine.sub(key, updater)

        return () => {
            stateMachine.unsub(key, updater)
        }
    }, [])

    const setStateWrapper = (val: T): void => {
        if (state !== val) stateMachine.pub(key, val)
    }

    const returnState = useMemo(() => {
        return state
    }, [state])

    return [returnState, setStateWrapper]
}
