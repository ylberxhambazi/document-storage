'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

interface FormData {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

const schema = yup.object().shape({
    currentPassword: yup.string().required('Current password is required'),
    newPassword: yup.string().min(6, 'Password must be at least 6 characters').required('New password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('newPassword')], 'Passwords must match')
        .required('Confirm your new password'),
});

export default function ProfileForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            // Fake API call for now (replace with real one later)
            console.log('Change password data:', data);

            toast.success('Password changed successfully!');
        } catch (error) {
            console.error(error);
            toast.error('Failed to change password');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded shadow">
            <div>
                <label className="block mb-1 font-medium">Current Password</label>
                <input
                    type="password"
                    {...register('currentPassword')}
                    className="w-full p-2 border rounded"
                />
                {errors.currentPassword && <p className="text-red-500 text-sm">{errors.currentPassword.message}</p>}
            </div>

            <div>
                <label className="block mb-1 font-medium">New Password</label>
                <input
                    type="password"
                    {...register('newPassword')}
                    className="w-full p-2 border rounded"
                />
                {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword.message}</p>}
            </div>

            <div>
                <label className="block mb-1 font-medium">Confirm New Password</label>
                <input
                    type="password"
                    {...register('confirmPassword')}
                    className="w-full p-2 border rounded"
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Change Password
            </button>
        </form>
    );
}
