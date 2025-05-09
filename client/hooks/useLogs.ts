import { useGetLogsQuery } from '@/lib/logsApi'

const useLogs = () => {
    const { data, isLoading, isError } = useGetLogsQuery()

    return {
        logs: data ?? [],
        isLoading,
        isError,
    }
}

export default useLogs