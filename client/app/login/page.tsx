'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useLoginMutation } from '@/lib/authApiSlice'
import { TLoginRequest } from '@/types/request/auth'

const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'At least 6 characters').required('Password is required'),
})

export default function LoginPage() {
    const router = useRouter()
    const [login, { isLoading }] = useLoginMutation()

    const { register, handleSubmit, formState: { errors } } = useForm<TLoginRequest>({
        resolver: yupResolver(loginSchema),
    })

    const onSubmit = async (data: TLoginRequest) => {
        try {
            const res = await login(data).unwrap()
            console.log(res)
            toast.success('Logged in successfully!')
            localStorage.setItem('token', res.token)
            router.push('/dashboard')
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message)
                toast.error(error.message)
            } else {
                toast.error('Invalid credentials')
            }
        }
    }

    return (
        <div className='flex flex-col gap-4 max-w-md mx-auto mt-20'>
            <h1 className='text-2xl font-bold text-center'>{'Login'}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                <input
                    type='email'
                    {...register('email')}
                    placeholder='Email'
                    className='p-2 border rounded'
                />
                {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
                <input
                    type='password'
                    {...register('password')}
                    placeholder='Password'
                    className='p-2 border rounded'
                />
                {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
                <button
                    type='submit'
                    className='p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    )
}