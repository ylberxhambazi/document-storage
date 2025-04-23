'use client'

import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex h-screen w-full overflow-hidden bg-gray-100'>
            <Sidebar />
            <div className='flex flex-col flex-1 overflow-hidden'>
                <Navbar />
                <main className='flex-1 overflow-y-auto p-6'>{children}</main>
            </div>
        </div>
    )
}

export default DashboardLayout