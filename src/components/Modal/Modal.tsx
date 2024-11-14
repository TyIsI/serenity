'use client'

import { type FC, Fragment, useEffect, useRef, useState } from 'react'

import type { ModalProps } from './Modal.types'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'

import { Conditional } from '@/components/Conditional/Conditional'
import { ModalIcon } from '@/components/ModalIcon/ModalIcon'

export const Modal: FC<ModalProps> = ({ title, show, onHide, closeButton, children, actions, iconStyle, ...restProps }) => {
    iconStyle ??= 'default'
    iconStyle = iconStyle === 'default' ? 'info' : iconStyle

    const [open, setOpen] = useState(show)

    const closeButtonRef = useRef(null)

    useEffect(() => {
        if (!open) onHide()
    }, [onHide, open])

    useEffect(() => {
        setOpen(show)
    }, [show])

    return (
        <Transition show={open} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                initialFocus={closeButtonRef}
                onClose={() => {
                    setOpen(false)
                }}
                {...restProps}>
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                </TransitionChild>

                <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                    <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                            enterTo='opacity-100 translate-y-0 sm:scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
                            <DialogPanel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                                    <div className='flex flex-row'>
                                        <div className='basis-1/6'>
                                            <ModalIcon style={iconStyle} />
                                        </div>
                                        <div className='basis-4/6'>
                                            <DialogTitle as='h3' className='text-base font-semibold leading-6 text-gray-900'>
                                                {title}
                                            </DialogTitle>
                                            <div className='mx-auto text-black'>{children}</div>
                                        </div>
                                        <div className='basis-1/3'>
                                            {' '}
                                            <Conditional condition={closeButton}>
                                                <button
                                                    className='float-right mr-2 text-black'
                                                    onClick={() => {
                                                        setOpen(false)
                                                    }}>
                                                    <FontAwesomeIcon icon={faTimes} size={'lg'} />
                                                </button>
                                            </Conditional>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                                    {actions ?? (
                                        <button
                                            type='button'
                                            className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                                            onClick={() => {
                                                setOpen(false)
                                            }}
                                            ref={closeButtonRef}>
                                            Close
                                        </button>
                                    )}
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal
