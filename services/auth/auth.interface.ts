export interface ILoginRequest {
    email: string
    password: string
}

export interface IEmailOnlyRequest {
    email: string
}

export interface IResetPasswordRequest {
    resetToken: string
    password: string
}

export interface IAcceptAdminInvitationRequest {
    resetToken: string
    firstName: string
    lastName: string
}

export interface IVerifyAccountRequest {
    token: string
    password: string
}

export type IRole = "ADMIN" | "SUPER ADMIN" | "USER"

export interface IUser {
    id: string
    firstName: string
    lastName: string
    otherName?: string
    email: string
    emailVerified: boolean
    profilePicPublicId: string | null
    resetToken: string | null
    profilePicSecureUrl: string | null
    isVerified: boolean
    role: IRole
}
