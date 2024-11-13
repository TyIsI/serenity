'use client'

import type { NextPage } from 'next'

import { SWRConfig } from 'swr'

import { BookmarkWidgetToggle } from '@/components/BookmarkWidgetToggle/BookmarkWidgetToggle'
import { Clock } from '@/components/Clock/Clock'
import { ErrorBoundaryWrapper } from '@/components/ErrorBoundaryWrapper/ErrorBoundaryWrapper'
import { SideMenu } from '@/components/SideMenu/SideMenu'
import { SourceCredit } from '@/components/SourceCredit/SourceCredit'
import { TasksWidgetToggle } from '@/components/TaskWidgetToggle/TaskWidgetToggle'
import { UnsplashBackground } from '@/components/UnsplashBackground/UnsplashBackground'
import { UnsplashCreditWidget } from '@/components/UnsplashCreditWidget/UnsplashCreditWidget'
import { Weather } from '@/components/Weather/Weather'
import { WidgetContainer } from '@/components/WidgetContainer/WidgetContainer'

import { fetcher } from '@/lib/fetcher'

import { Bookmarks } from '@/widgets/Bookmarks/Bookmarks'
import { QuotesWidget } from '@/widgets/QuotesWidget/QuotesWidget'
import { TaskList } from '@/widgets/TaskList/TaskList'

export const SerenityDashboard: NextPage = () => {
    return (
        <SWRConfig
            value={{
                fetcher
            }}>
            <ErrorBoundaryWrapper handle='Main'>
                <UnsplashBackground />
                <div className='min-w-screen h-full min-h-screen w-full'>
                    <div className='box-shadow-nav fixed left-0 right-0 top-0 flex items-center justify-between bg-black/15 shadow-lg hover:bg-black/35'>
                        <div className='ml-3 basis-1/3 text-left hover:font-bold'>
                            <TasksWidgetToggle />
                        </div>

                        <div className='flex basis-1/3 flex-nowrap justify-center font-bold'>
                            <div>
                                <Clock />
                            </div>
                            <div>&nbsp;/&nbsp;</div>
                            <div>
                                <Weather />
                            </div>
                        </div>

                        <div className='mr-3 basis-1/3 text-right hover:font-bold'>
                            <BookmarkWidgetToggle />
                        </div>
                    </div>

                    <div className=''>
                        <WidgetContainer className='left-0 rounded-r-lg' widget='TaskWidget'>
                            <TaskList />
                        </WidgetContainer>

                        <WidgetContainer className='right-0 rounded-l-lg' widget='BookmarksWidget'>
                            <Bookmarks />
                        </WidgetContainer>
                    </div>

                    <div className='fixed bottom-0 left-0 right-0 flex items-center justify-between'>
                        <div className='basis-1/4'>
                            <SideMenu />
                            <SourceCredit />
                        </div>

                        <div className='basis-2/4 justify-center'>
                            <QuotesWidget />
                        </div>

                        <div className='basis-1/4'>
                            <UnsplashCreditWidget />
                        </div>
                    </div>
                </div>
            </ErrorBoundaryWrapper>
        </SWRConfig>
    )
}

export default SerenityDashboard
