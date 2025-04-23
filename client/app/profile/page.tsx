import DashboardLayout from '@/components/layout/DashboardLayout'
import ProfileForm from '@/components/forms/ProfileForm'

export default function ProfilePage() {
    return (
        <DashboardLayout>
            <div className='max-w-xl mx-auto'>
                <h1 className='text-2xl font-bold mb-6'>{'Profile'}</h1>
                <ProfileForm />
            </div>
        </DashboardLayout>
    )
}