'use client'

import { useEffect, useMemo, useState } from 'react'

import { stateMachine } from 'pretty-state-machine'
import { transform } from 'typescript'

import type { CoerceArrayElement, Primitive } from '@/types/utils'

interface Transforms<T, D> {
    serialize: () => D
    unserialize: (val: D) => T
}

const coerceArray = <T = unknown,>(val: unknown): CoerceArrayElement<T> => {
    return !Array.isArray(val) ? [val] : val
}

export const useSerializedStateMachine = <T = unknown, A = T[], D = Primitive<T>, S = D[]>(
    key: string,
    defaultValue?: A,
    transforms?: Transforms<T, D>
): [A, (val: A) => void] => {
    const [state, setState] = useState(
        stateMachine.get<S>(
            key,
            coerceArray(defaultValue).map((t) => transforms?.unserialize(t))
        )
    )

    useEffect(() => {
        const updater = (updaterState: Record<string, A>): void => {
            setState(updaterState[key])
        }

        stateMachine.sub(key, updater)

        return () => {
            stateMachine.unsub(key, updater)
        }
    }, [])

    const setStateWrapper = (val: A): void => {
        if (state !== val) stateMachine.pub(key, val)
    }

    const returnState = useMemo(() => {
        return state
    }, [state, transform])

    return [returnState, setStateWrapper]
}
