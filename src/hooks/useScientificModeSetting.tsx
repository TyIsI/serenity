'use client'

import { defaultScientificMode } from '@/lib/constants'

import { useStateMachine } from './useStateMachine'

export const useScientificModeSetting = (): [boolean, (val: boolean) => void] => useStateMachine<boolean>('scientificMode', defaultScientificMode)
