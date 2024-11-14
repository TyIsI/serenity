'use client'

import type { FC } from 'react'

import type { SettingsProps } from './Settings.types'

import { SettingToggle } from '@/components/SettingToggle/SettingToggle'

import { imperialTimeScale, metricTimeScale } from '@/lib/constants'

import { useClock24HModeSetting } from '@/hooks/useClock24HModeSetting'
import { useDualModeSetting } from '@/hooks/useDualModeSetting'
import { useScientificModeSetting } from '@/hooks/useScientificModeSetting'

export const Settings: FC<SettingsProps> = () => {
    const [clockFullMode, setClockFullMode] = useClock24HModeSetting()
    const [scientificMode, setScientificMode] = useScientificModeSetting()
    const [dualMode, setDualMode] = useDualModeSetting()

    return (
        <div className='block' data-testid='Settings'>
            <div className='flex flex-row'>
                <div className='basis-1/2 align-middle'>Clock Mode</div>
                <div className='basis-1/2'>
                    <SettingToggle
                        width={64}
                        checked={clockFullMode}
                        onLabel={metricTimeScale.toString()}
                        offLabel={imperialTimeScale.toString()}
                        onChange={(checked: boolean) => {
                            setClockFullMode(checked)
                        }}
                        onDefaultStyle='btn-primary-off'
                        onHighlightStyle='btn-primary'
                        offStyle='btn-danger-focus'
                        offHighlightStyle='btn-danger'
                    />
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='basis-1/2 align-middle'>Measurements Mode</div>
                <div className='basis-1/2'>
                    <SettingToggle
                        width={150}
                        checked={scientificMode}
                        onLabel='Federation'
                        offLabel='Freedom'
                        onChange={(checked: boolean) => {
                            setScientificMode(checked)
                        }}
                        onDefaultStyle='btn-primary-off'
                        onHighlightStyle='btn-primary'
                        offStyle='btn-danger-focus'
                        offHighlightStyle='btn-danger'
                    />
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='basis-1/2 align-middle'>Dual Mode</div>
                <div className='basis-1/2'>
                    <SettingToggle
                        width={150}
                        checked={dualMode}
                        onLabel='Yes'
                        offLabel='No'
                        onChange={(checked: boolean) => {
                            setDualMode(checked)
                        }}
                        onStyle='btn-success'
                        onHighlightStyle='btn-success'
                        onDefaultStyle='btn-success-off'
                        offStyle='btn-danger-focus'
                        offHighlightStyle='btn-danger'
                    />
                </div>
            </div>
        </div>
    )
}

export default Settings
