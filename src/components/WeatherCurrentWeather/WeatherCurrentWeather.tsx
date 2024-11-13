'use client'

import type { FC } from 'react'

import type { WeatherCurrentWeatherProps } from './WeatherCurrentWeather.types'

import Image from 'next/image'

import { useDualModeSetting } from '@/hooks/useDualModeSetting'
import { useScientificModeSetting } from '@/hooks/useScientificModeSetting'
import { useWeather } from '@/hooks/useWeather'

import { WeatherLoadingSpinner } from '../WeatherLoadingSpinner/WeatherLoadingSpinner'

// const weatherDefault: WeatherInfo = {
//     location: {
//         name: ''
//     },
//     current: {
//         temp_c: 0,
//         temp_f: 0,
//         condition: {
//             text: '',
//             icon: '',
//             code: 0
//         }
//     }
// }

export const WeatherCurrentWeather: FC<WeatherCurrentWeatherProps> = () => {
    const { weather, isInFlux } = useWeather()
    const [inScientificMode] = useScientificModeSetting()
    const [dualMode] = useDualModeSetting()

    if (isInFlux || weather == null) return <WeatherLoadingSpinner />

    const temp = inScientificMode ? weather.current.temp_c : Math.round(weather.current.temp_f)
    const tempUnit = inScientificMode ? 'C' : 'F'

    let tempString = (
        <>
            {temp}
            {tempUnit}
        </>
    )

    if (dualMode) {
        const temp2 = inScientificMode ? Math.round(weather.current.temp_f) : weather.current.temp_c
        const tempUnit2 = inScientificMode ? 'F' : 'C'

        tempString = (
            <>
                {temp}
                {tempUnit}&nbsp;({temp2}
                {tempUnit2})
            </>
        )
    }

    return (
        <div className='flex flex-nowrap font-bold'>
            <div>{weather.location.name}</div>
            <div>&nbsp;/&nbsp;</div>
            <div>{tempString}</div>
            <div>&nbsp;/&nbsp;</div>
            <div className='text-nowrap'>{weather.current.condition.text}</div>
            <div>
                <Image alt={weather.current.condition.text} src={'https:' + weather.current.condition.icon} width={24} height={24} />
            </div>
        </div>
    )
}

export default WeatherCurrentWeather
