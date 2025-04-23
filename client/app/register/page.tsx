'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useRegisterMutation } from '@/lib/authApiSlice';
import { TRegisterRequest } from '@/types/request/auth';

const registerSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'At least 6 characters').required('Password is required'),
});

export default function RegisterPage() {
    const router = useRouter();
    const [registerUser, { isLoading }] = useRegisterMutation();

    const { register, handleSubmit, formState: { errors } } = useForm<TRegisterRequest>({
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = async (data: TRegisterRequest) => {
        try {
            await registerUser(data).unwrap();
            toast.success('Registered successfully! Please login.');
            router.push('/login');
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
                toast.error(error.message);
            } else {
                toast.error('Registration failed!');
            }
        }
    };

    return (
        <div className="flex flex-col gap-4 max-w-md mx-auto mt-20">
            <h1 className="text-2xl font-bold text-center">Register</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <input
                    type="text"
                    {...register('name')}
                    placeholder="Name"
                    className="p-2 border rounded"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                <input
                    type="email"
                    {...register('email')}
                    placeholder="Email"
                    className="p-2 border rounded"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                <input
                    type="password"
                    {...register('password')}
                    placeholder="Password"
                    className="p-2 border rounded"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                <button
                    type="submit"
                    className="p-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    disabled={isLoading}
                >
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
}
