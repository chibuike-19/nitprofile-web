import { RequireAuthentication } from "@/components/middlewares";

const Profile = () => {
    return (
        <RequireAuthentication>Generate</RequireAuthentication>
    )
}
export default Profile;