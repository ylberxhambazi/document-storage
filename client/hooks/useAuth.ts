import { apiSlice } from '@/app/_redux/api/apiSlice'
import { useAppDispatch } from '@/app/_redux/store'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

const useAuth = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const isAuthenticated = typeof window !== 'undefined' && !!localStorage.getItem('token')

    const signIn = useCallback((token: string) => {
        localStorage.setItem('token', token)
        router.push('/dashboard') // After login, go to dashboard
    }, [router])

    const signOut = useCallback(() => {
        localStorage.removeItem('token')
        dispatch(apiSlice.util.resetApiState())
        router.push('/login')
    }, [dispatch, router])

    return {
        signIn,
        signOut,
        isAuthenticated
    }
}

export default useAuth