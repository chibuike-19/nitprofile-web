import { RequireAuthentication } from "@/components/middlewares"
import { getAsset } from "@/utils"
import Image from "next/image"

const Profile = () => {
    return (
        <RequireAuthentication>
            <section className="mt-[8rem] grid place-items-center">
                <Image src={getAsset("rocket.svg", "images")} alt="Rocket svg" width={280} height={280} />
                <p className="max-w-[32rem] pb-6 pt-6 text-center">
                    You haven't generated a profile yet for this program. Click the button below to generate your
                    profile.
                </p>
                <button className="rounded-lg bg-primary px-8 py-3">Generate Profile</button>
            </section>
        </RequireAuthentication>
    )
}
export default Profile
