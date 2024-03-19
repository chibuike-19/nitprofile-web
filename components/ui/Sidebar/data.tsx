import { IRole } from "@/state_management"
import { PiGraduationCapLight } from "react-icons/pi"
import { getAsset } from "@/utils"
import { StaticImageData } from "next/image"



const adminRoutes = [
    {
        name: "Home",
        icon: getAsset("home.svg", "icons"),
        route: "/admin",
        activeRoutes: ["", undefined],
    },
]

const userRoutes = [
    {
        name: "Home",
        icon: getAsset("home.svg", "icons"),
        route: "/student",
        activeRoutes: ["/student"],
    },
    {
        name: "Generate Profile",
        icon: getAsset("profile.svg", "icons"),
        route: "/student/generate-profile",
        activeRoutes: ["/student/generate-profile"],
    },
    {
        name: "Programs",
        icon: getAsset("program.svg", "icons"),
        route: "/student/programs",
        activeRoutes: ["/student/programs"],
    },
    {
        name: "Certificates",
        icon: getAsset("certificate.svg", "icons"),
        route: "/student/certificates",
        activeRoutes: ["/student/certificates"],
    },
]

interface ISidebarData {
    name: string
    icon: string | StaticImageData
    route: string
    activeRoutes: (string | undefined)[]
}

export const getSidebarData = (role: IRole): ISidebarData[] => {
    switch (role) {
        case "ADMIN":
            return adminRoutes

        case "SUPER ADMIN":
            return [
                ...adminRoutes,
                { name: "Admins", icon:getAsset("home.svg", "icons"), route: "/admin/name", activeRoutes: [""] },
            ]

        case "USER":
            return userRoutes

        default:
            return []
    }
}
