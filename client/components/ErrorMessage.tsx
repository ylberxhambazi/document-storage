type Props = {
    message?: string
}

export const ErrorMessage = ({ message = 'Something went wrong.' }: Props) => (
    <div className='text-center text-red-600 py-4'>{message}</div>
)