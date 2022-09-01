export type AuthStateType = {
    token: string | null,
    user: {
        id: number | null,
        firstName: string | null,
        lastName: string | null
    }
}

const AuthState: AuthStateType = {
    token: null,
    user: {
        id: null,
        firstName: null,
        lastName: null
    }
}

export default AuthState
