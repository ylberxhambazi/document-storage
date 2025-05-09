type LogCardProps = {
    action: string
    timestamp: string
    userEmail?: string
}

export const LogCard = ({ action, timestamp, userEmail }: LogCardProps) => {
    return (
        <div className='border p-4 rounded-lg shadow-sm space-y-2 bg-white'>
            <p className='text-gray-800 font-medium'>{action}</p>
            <p className='text-sm text-gray-500'>{new Date(timestamp).toLocaleString()}</p>
            {userEmail && <p className='text-sm text-blue-500'>{userEmail}</p>}
        </div>
    )
}