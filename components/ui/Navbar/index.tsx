"use client"

import React, { useState } from "react"
import { ProgramsModal } from "../Modals/ProgramsModal"
import { FaArrowDown } from "react-icons/fa6"

export const Navbar = () => {
    const [programsModal, setProgramsModal] = useState({
        showPrograms: false,
        createProgram: false,
    })

    return (
        <nav className="ml-[18rem] flex items-center justify-between bg-white px-[20px] py-[15px] shadow-sm">
            <ProgramsModal
                modalIsMounted={programsModal.showPrograms}
                createProgram={() => setProgramsModal({ createProgram: true, showPrograms: false })}
                handleClose={() => setProgramsModal({ ...programsModal, showPrograms: false })}
            />

            <h1 className="text-sm font-semibold text-[#101010]">Home</h1>
            <div
                onClick={() => setProgramsModal({ ...programsModal, showPrograms: true })}
                className="flex w-[20%] cursor-pointer justify-between gap-12 rounded-lg border-2 p-3"
            >
                <button>Nitdev </button>
                <FaArrowDown size={30} />
            </div>

            <div className="flex items-center gap-2">
                <div className="h-[40px] w-[40px] rounded-full bg-gray-500" />
                Hello
            </div>
        </nav>
    )
}
