'use client'

import { type Dispatch, type FC, type FormEvent, type KeyboardEvent, type SetStateAction, useEffect, useState } from 'react'

import type { BookmarkFormProps } from './BookmarkForm.types'

import { Conditional } from '@/components/Conditional/Conditional'

export const BookmarkForm: FC<BookmarkFormProps> = ({ bookmark, inlineSubmitButton, submitButtonText, onSubmit, onCancel, onDelete }) => {
    const [_bookmark, setBookmark] = useState(bookmark)
    const [_title, setTitle] = useState(_bookmark.title ?? '')
    const [_url, setUrl] = useState(_bookmark.url ?? '')
    const [_inlineSubmitButton, setInlineSubmitButton] = useState(inlineSubmitButton ?? true)
    const [_submitButtonText, setSubmitButtonText] = useState(submitButtonText ?? 'Add')
    const [_showErrorModal, setShowErrorModal] = useState(false)

    useEffect(() => {
        setInlineSubmitButton(inlineSubmitButton ?? true)
        if (typeof submitButtonText === 'string' && submitButtonText !== '') setSubmitButtonText(submitButtonText)
    }, [inlineSubmitButton, submitButtonText])

    useEffect(() => {
        setBookmark(bookmark)
        setTitle(bookmark.title ?? '')
        setUrl(bookmark.url ?? '')
    }, [bookmark])

    const changeHandler = (dispatcher: Dispatch<SetStateAction<string>>, event: FormEvent<HTMLInputElement>): void => {
        if (typeof event.currentTarget.value === 'string') dispatcher(event.currentTarget.value)
    }

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
        event.preventDefault()

        switch (event.key) {
            case 'Enter':
                onSubmitHandler()

                break

            case 'Escape':
                setTitle(bookmark.title ?? '')
                setUrl(bookmark.url ?? '')

                if (onCancel != null) onCancel()

                break
        }
    }

    const onDeleteHandler = (): void => {
        if (onDelete != null) onDelete(_bookmark)
    }

    const onSubmitHandler = (): void => {
        console.debug('BookmarkForm onSubmitHandler')

        if (_title.length === 0 || _url.length === 0) {
            return
        }

        if (typeof onSubmit !== 'undefined') {
            const bookmark = _bookmark

            bookmark.title = _title
            bookmark.url = _url

            onSubmit(_bookmark)
        }
    }

    const _handleClose = (): void => {
        setShowErrorModal(false)
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    console.debug('BookmarkForm', { bookmark, _bookmark })

    return (
        <div className='spacious'>
            <div>
                <input
                    className='h-8 w-full rounded bg-white/100 px-1 text-black/100'
                    name='url'
                    value={_url}
                    onChange={(event: FormEvent<HTMLInputElement>) => {
                        changeHandler(setUrl, event)
                    }}
                    placeholder='url'
                    onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => {
                        handleKeyPress(event)
                    }}
                />
            </div>
            {_inlineSubmitButton ? (
                <div className='spacious flex flex-row'>
                    <div className='basis-10/12'>
                        <input
                            className='h-8 w-full rounded bg-white/100 px-1 text-black/100'
                            name='title'
                            value={_title}
                            onChange={(event: FormEvent<HTMLInputElement>) => {
                                changeHandler(setTitle, event)
                            }}
                            placeholder='title'
                            onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => {
                                handleKeyPress(event)
                            }}
                        />
                    </div>
                    <div className='grid basis-2/12'>
                        <button
                            className='btn-light h-8 justify-self-end rounded px-3 py-1'
                            data-variant='light'
                            onClick={() => {
                                onSubmitHandler()
                            }}>
                            {_submitButtonText}
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className='spacious'>
                        <div className='basis-9/12'>
                            <input
                                className='h-8 w-full rounded bg-white/100 text-black/100'
                                name='title'
                                value={_title}
                                onChange={(event: FormEvent<HTMLInputElement>) => {
                                    changeHandler(setTitle, event)
                                }}
                                placeholder='title'
                                onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => {
                                    handleKeyPress(event)
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <Conditional condition={onDelete != null}>
                            <button
                                className='btn-danger h-8 rounded px-3 py-1'
                                onClick={() => {
                                    onDeleteHandler()
                                }}>
                                Delete
                            </button>
                        </Conditional>
                        <button
                            className='btn-light h-8 rounded px-3 py-1'
                            data-variant='success'
                            onClick={() => {
                                onSubmitHandler()
                            }}>
                            {_submitButtonText}
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default BookmarkForm
