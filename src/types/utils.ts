export type ArrayElement<T> = T extends Array<infer U> ? U : never
export type OptionalArrayBaseElement<T> = T extends Array<infer U> ? U : T
export type CoerceArrayElement<T> = T extends Array<infer U> ? U[] : T[]
export type Primitive<T> = T extends object ? object : T
