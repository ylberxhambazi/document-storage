'use client'
import { LogCard } from '@/components/cards/LogCard'
import { ErrorMessage } from '@/components/ErrorMessage'
import DashboardLayout from '@/components/layout/DashboardLayout'
import LoadingSpinner from '@/components/LoadingSpinner'
import useLogs from '@/hooks/useLogs'
import React from 'react'

const LogsPage = () => {
    const { logs, isLoading, isError } = useLogs()
    if (isLoading) return <LoadingSpinner />
    if (isError) return <ErrorMessage />
    return (
        <DashboardLayout>
            <div className='space-y-4'>
                <h1 className='text-2xl font-bold mb-4'>{'Activity Logs'}</h1>
                {logs.map((log, i) => (
                    <LogCard
                        key={i}
                        action={log.action}
                        timestamp={log.createdAt}
                        userEmail={log.userId}
                    />
                ))}
            </div>
        </DashboardLayout>
    )
}

export default LogsPage