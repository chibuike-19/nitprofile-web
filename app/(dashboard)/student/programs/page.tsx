"use client"

import { useState } from "react"
import { RequireAuthentication } from "@/components/middlewares"

const Programs = () => {
    const [current, setCurrent] = useState(true)

    const DummyProgramsData = [
        { programName: "Nitdev", programDate: "15/02/2025", completed: true },
        { programName: "Nitdev", programDate: "15/02/2025", completed: false },
        { programName: "Nitdev", programDate: "15/02/2025", completed: true },
        { programName: "Nitdev", programDate: "15/02/2025", completed: false },
        { programName: "Nitdev", programDate: "15/02/2025", completed: true },
    ]

    return (
        <RequireAuthentication>
            <div className="flex flex-col gap-4 xl:flex-row">
                <main className="basis-[65%] rounded-lg bg-white p-8">
                    <div className="mt-4 flex gap-6 border-b-2 border-b-gray-300">
                        <button
                            onClick={() => setCurrent(true)}
                            className={`${current ? "border-b-[3px] border-b-primary" : ""} cursor-pointer`}
                        >
                            Currently Enrolled
                        </button>
                        <button
                            onClick={() => setCurrent(false)}
                            className={`${current ? "" : "border-b-[3px] border-b-primary"} cursor-pointer`}
                        >
                            Completed
                        </button>
                    </div>
                    <div>
                        {current ? (
                            <div>
                                {DummyProgramsData.filter((item) => !item.completed).map((program, index) => (
                                    <div className="flex justify-between border-b-2 border-b-gray-200 py-6">
                                        <p>{program.programName}</p>
                                        <p>{program.programDate}</p>
                                    </div>
                                ))}{" "}
                            </div>
                        ) : (
                            <div>
                                {DummyProgramsData.filter((item) => item.completed).map((program, index) => (
                                    <div className="flex justify-between border-b-2 border-b-gray-200 py-6">
                                        <p>{program.programName}</p>
                                        <p>{program.programDate}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
                <aside className="bg-rocket banner relative -z-10 min-h-[480px] basis-[35%] overflow-hidden rounded-lg bg-primary bg-right-bottom bg-no-repeat p-6">
                    <h1 className="mb-[6rem] text-[42px] font-semibold leading-tight">
                        Grow With <br />
                        Nithub <br /> Today
                    </h1>
                    <div className="z-50 pt-2">
                        <p className="text-white">
                            We Offer the best <br /> Tech Courses
                        </p>
                        <button className="mt-4 cursor-pointer rounded-lg bg-white px-8 py-3 text-[#0D1836]">
                            Register
                        </button>
                    </div>
                </aside>
            </div>
        </RequireAuthentication>
    )
}
export default Programs
