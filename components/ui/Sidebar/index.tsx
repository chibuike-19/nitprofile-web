"use client"
import Image from "next/image"
import SidebarItems from "./SidebarItem"
import { getAsset } from "@/utils"

export const Sidebar = () => {
    const sidebarOpened = true
    // Work on the keyboard accessibility

    return (
        <aside
            className={`transition-width fixed left-0 top-0 z-[1] flex h-full flex-shrink-0 flex-col duration-75 lg:flex ${
                sidebarOpened ? "w-screen md:w-[18rem]" : "w-0"
            }`}
            aria-label="Sidebar"
        >
            <div className="relative flex min-h-0 flex-1 flex-col bg-white">
                <div className={`h-full px-4 py-5 ${sidebarOpened ? "block" : "hidden"}`}>
                    <Image
                        alt="Logo"
                        width={120}
                        height={35}
                        src={getAsset("nitda_logo.png", "icons")}
                        unoptimized
                        priority
                        className="mb-12"
                    />

                    <SidebarItems />
                </div>
            </div>
        </aside>
    )
}
