"use client"

import { type FC, useState } from "react"

import type { SideMenuProps } from "./SideMenu.types"

import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { clsx } from "clsx"

import { Conditional } from "../Conditional/Conditional"
import { Settings } from "../Settings/Settings"
import { SideMenuTab } from "../SideMenuTab/SideMenuTab"

export const SideMenu: FC<SideMenuProps> = () => {
    const [show, setShow] = useState(false)

    const handleClose = (): void => {
        setShow(false)
    }
    const handleShow = (): void => {
        setShow(true)
    }

    return (
        <>
            <SideMenuTab
                onClick={() => {
                    handleShow()
                }}
            />

            <Conditional condition={show}>
                <div className={clsx("relative z-10", !show && "hidden")} aria-labelledby='slide-over-title'>
                    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' aria-hidden='true'></div>

                    <div className='fixed inset-0 overflow-hidden'>
                        <div className='absolute inset-0 overflow-hidden'>
                            <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full'>
                                <div className='pointer-events-auto relative w-screen max-w-md'>
                                    <div className='flex h-full flex-col overflow-hidden bg-black py-6 shadow-xl'>
                                        <div className='px-4 sm:px-6'>
                                            <div className='my-3 text-center'>
                                                <span>Serenity Dashboard</span>
                                                <button
                                                    className='float-right mr-2'
                                                    onClick={() => {
                                                        handleClose()
                                                    }}>
                                                    <FontAwesomeIcon icon={faTimes} size={"lg"} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                                            <div className='my-3 p-2'>
                                                <p>
                                                    Inspired by the <a href='https://momentumdash.com/'>Momentum Dash</a> extension for Chrome, I wanted to:
                                                </p>
                                                <ul>
                                                    <li>
                                                        create something that&apos;s similar to the extension, but
                                                        <ul>
                                                            <li>more customizable</li>
                                                            <li>works in multiple browsers</li>
                                                            <li>modifiable by the user</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        learn some new-to-me technologies:
                                                        <ul>
                                                            <li>
                                                                <a href='https://www.typescriptlang.org/'>Typescript</a>
                                                            </li>
                                                            <li>
                                                                <a href='https://nextjs.org/'>Next.js</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        do something with <a href='https://unsplash.com'>Unsplash</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <hr />
                                            <div className='my-3 p-2'>
                                                <Settings />
                                            </div>
                                            <hr />
                                            <div className='my-3 p-2'>
                                                Imagery powered by{" "}
                                                <a href='https://unsplash.com/' title='Unsplash'>
                                                    unsplash.com
                                                </a>
                                                <br />
                                                Weather powered by{" "}
                                                <a href='https://weatherapi.com/' title='Free Weather API'>
                                                    WeatherAPI.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Conditional>
        </>
    )
}

export default SideMenu
