import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { getSidebarData } from "./data"
import { useAppSelector } from "@/state_management"
import Image from "next/image"

const SidebarItems = () => {
    const router = useRouter()

    const pathname = usePathname()

    const goToPage = (page: string) => () => router.push(page)

    const isItemActive = (routes: (string | undefined)[], index: number = 1) => {
        const currentPath = pathname.split("/")[index]
        // console.log(pathname)

        return routes.includes(pathname)
    }

    const { data } = useAppSelector((state) => state.authSlice)

    const sidebarData = getSidebarData(data!.role)

    return (
        <div className="flex flex-col gap-5">
            {sidebarData.map((item, index) => {
                const isActive = isItemActive(item.activeRoutes, 2)

                return (
                    <div
                        key={index}
                        onClick={goToPage(item.route)}
                        className={`cursor-pointer rounded-lg px-6 py-[10px] transition-all duration-300 ease-in-out hover:bg-[#7fca63] ${isActive ? "bg-[#62CF3A]" : "bg-transparent"}`}
                    >
                        <div className="flex items-center gap-4">
                            <Image src={item.icon} alt="menu icons" width={20} height={20}/>

                            <p
                                className={`text-sm font-medium transition-all duration-300 ease-in-out ${isActive ? "text-[#101010]" : "text-[#676767]"}`}
                            >
                                {item.name}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SidebarItems
