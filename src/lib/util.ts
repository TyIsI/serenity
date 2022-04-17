export const reorder = (list: any|any[], startIndex: number, endIndex: number): unknown[] => {
  const result = Array.from(list)

  const [removed] = result.splice(startIndex, 1)

  result.splice(endIndex, 0, removed)

  return result
}
