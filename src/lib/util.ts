import Debug, { type Debugger } from 'debug'
import { z } from 'zod'

let debug: Debugger | null = null

export const reorder = <T>(list: T[], startIndex: number, endIndex: number): T[] => {
    const result = Array.from(list)

    const [removed] = result.splice(startIndex, 1)

    result.splice(endIndex, 0, removed)

    return result
}

export const getRandomId = (): string => {
    return Math.random().toString(36).substring(2, 9)
}

export const getDebugger = (namespace: string): Debugger => {
    if (debug === null) {
        debug = Debug('serenity-dashboard')
    }

    return debug.extend(namespace)
}

export const normalizeTime = (val: number | string): number => {
    const timeVal = z.coerce.number().parse(val)

    return timeVal > 1000 ? timeVal : timeVal * 1000
}
