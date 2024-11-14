import { z } from 'zod'

export const zConsentStateDeclined = z.literal(-1)
export const zConsentStateUnknown = z.literal(0)
export const zConsentStateAccepted = z.literal(1)

export const zConsentTypes = z.union([zConsentStateUnknown, zConsentStateDeclined, zConsentStateAccepted])

export type ConsentTypes = z.infer<typeof zConsentTypes>
