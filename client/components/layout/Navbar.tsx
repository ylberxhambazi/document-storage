'use client'

import useAuth from '@/hooks/useAuth'
import getUserFromToken from '@/lib/getUserFromToken'
import cn from '@/util/cn'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const { signOut } = useAuth()
    const [userEmail, setUserEmail] = useState<string | null>(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        const user = getUserFromToken()
        if (token && user) {
            // For now, just simulate "logged in"
            // Later you can decode JWT and get real email if needed
            setUserEmail(user.email)
        }
    }, [])

    return (
        <header className='w-full h-16 bg-white shadow flex items-center justify-between px-6'>
            <div className='text-xl font-bold'>{'Document Storage'}</div>
            <div className='flex items-center gap-4'>
                {userEmail && (
                    <span className='text-gray-600 hidden sm:inline-block'>
                        {'Welcome, '}{userEmail}
                    </span>
                )}
                <button
                    onClick={signOut}
                    className={cn(
                        'px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition text-sm'
                    )}
                >
                    {'Logout'}
                </button>
            </div>
        </header>
    )
}

export default Navbar