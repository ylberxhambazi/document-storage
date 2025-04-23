'use client'
import DashboardLayout from '@/components/layout/DashboardLayout'
import useAuth from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

type Props = {
    children: ReactNode
}

const Dashboard = ({ children }: Props) => {
    const router = useRouter()
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login')
        }
    }, [isAuthenticated, router])

    return (
        <DashboardLayout>
            <div className='flex min-h-screen'>
                <main className='flex-1 p-4'>
                    {children}
                </main>
            </div>
        </DashboardLayout>
    )
}

export default Dashboard