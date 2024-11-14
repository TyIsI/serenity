'use client'

import { defaultDualMode } from '@/lib/constants'

import { useStateMachine } from './useStateMachine'

export const useDualModeSetting = (): [boolean, (val: boolean) => void] => useStateMachine<boolean>('dualMode', defaultDualMode)
