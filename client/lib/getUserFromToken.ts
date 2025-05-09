import { jwtDecode } from 'jwt-decode'

type TokenPayload = {
    userId: number
    email: string
    exp: number
    iat: number
}

const getUserFromToken = (): TokenPayload | null => {
    const token = localStorage.getItem('token')
    if (!token) return null
    try {
        return jwtDecode<TokenPayload>(token)
    } catch {
        return null
    }
}

export default getUserFromToken