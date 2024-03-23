import { authService } from "../auth.service"
import { ILoginRequest } from "../auth.interface"
import { useApi } from "@/hooks/useApi"
import { IApiHookBaseResponse, IBaseApiResponse } from "@/services/types"
import { IUser, authSlice, useAppDispatch } from "@/state_management"
import { makeToast } from "@/libs/react-toast"
import { usePathname, useRouter } from "next/navigation"

/**
 * Custom hook for handling login functionality, integrating with the authentication service and Redux store.
 *
 * @function
 * @name useLoginApi
 * @returns {{
 *   handler: (data:ILoginRequest) => Promise<void>,
 *   data: IBaseApiResponse<IUser> | null,
 *   error: Error | null,
 *   loading: boolean
 * }} - An object containing the login handler function, login data, error, and loading status.
 */

export const useLoginApi: () => IApiHookBaseResponse<ILoginRequest, IUser> = () => {
    // Retrieve the login action from the authSlice
    const { login } = authSlice.actions

    const router = useRouter()

    const pathname = usePathname()

    // Get the dispatch function from the Redux store
    const dispatch = useAppDispatch()

    // Use the useApi hook to manage API requests for login.
    const loginRequest = useApi<IBaseApiResponse<IUser>, ILoginRequest>((data: ILoginRequest) => {
        return authService.signin(data)
    })

    const handleLogin = async (loginDetails: ILoginRequest) => {
        // Reset the login request state
        loginRequest.reset()

        // Request login with provided details
        const response = await loginRequest.request(loginDetails)

        // Throw an error if there is no response
        if (!response) {
            makeToast({ message: "No Response", type: "error", id: "login-error", duration: 5000 })

            return undefined
        }

        // Check if response data and role are available
        if (!response.data || !response.data.role) return

        // Dispatch the login action with the received user data
        dispatch(login(response.data))

        router.push("/")

        // Find a better way to handle this because of hydration

        // Display a success toast message
        makeToast({
            message: "Login Successfully",
            type: "success",
            id: "login",
        })
    }

    return {
        handler: handleLogin,
        data: loginRequest.data,
        error: loginRequest.error,
        loading: loginRequest.loading,
    }
}
