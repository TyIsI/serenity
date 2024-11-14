'use client'

import { defaultClock24HMode } from '@/lib/constants'

import { useStateMachine } from './useStateMachine'

export const useClock24HModeSetting = (): [boolean, (val: boolean) => void] => useStateMachine<boolean>('clock24HMode', defaultClock24HMode)
