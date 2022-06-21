import Debug from 'debug'

let debug: Debug.Debugger | null = null

export const reorder = (list: any | any[], startIndex: number, endIndex: number): unknown[] => {
  const result = Array.from(list)

  const [removed] = result.splice(startIndex, 1)

  result.splice(endIndex, 0, removed)

  return result
}

export const getRandomId = () => {
  return '' + Math.random().toString(36).substring(2, 9)
}

export const getDebugger = (namespace: string) => {
  if (debug === null) {
    debug = Debug('serenity-dashboard')
  }

  return debug.extend(namespace)
}
