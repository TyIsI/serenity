import { z } from 'zod'

import { imperialTimeScale, metricTimeScale } from '@/lib/constants'

export const zImperialTimeScale = z.union([z.literal(imperialTimeScale), z.literal(imperialTimeScale.toString())]).transform(Number)
export const zMetricTimeScale = z.union([z.literal(metricTimeScale), z.literal(metricTimeScale.toString())]).transform(Number)

export const zClockModes = z.union([zImperialTimeScale, zMetricTimeScale])

export type ClockModes = z.infer<typeof zClockModes>

export const zImperialMeasurementMode = z.literal('freedom')
export const zMetricMeasurementMode = z.literal('federation')

export const zMeasurementsModes = z.union([zImperialMeasurementMode, zMetricMeasurementMode])

export type MeasurementsModes = z.infer<typeof zMeasurementsModes>
