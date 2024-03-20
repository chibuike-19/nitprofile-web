"use client"

import { RequireAuthentication } from "@/components/middlewares"
import React, { useEffect, useState } from "react"
import StudentKpiCard from "@/components/ui/Cards/studentKpiCard"
import Pagination from "@/components/pagination"
import { DummyActivitiesData } from "@/components/pagination/data"

const StudentHome = () => {
    let itemsPerPage = 5
    let maxPage = Math.floor(DummyActivitiesData.length / itemsPerPage)

    const [activities, setActivities] = useState([])

    const fetchPaginatedContent = (page: number) => {
        const result = DummyActivitiesData.reduce((resultArray: any, item, index) => {
            const chunkIndex = Math.floor(index / itemsPerPage)
            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
            }

            resultArray[chunkIndex].push(item)
            return resultArray
        }, [])
        console.log(result)
        setActivities(result[page - 1])
        return result[page - 1]
    }

    useEffect(() => {
        fetchPaginatedContent(1)
    }, [])

    return (
        <RequireAuthentication>
            <StudentKpiCard />
            <main className="my-12 flex flex-col flex-wrap gap-6 lg:flex-row">
                <section className="rounded-lg bg-white px-6 pt-4">
                    {activities.length === 0 ? (
                        "Sorry, there's no recent activity"
                    ) : (
                        <div className="min-w-[38rem]">
                            <div className="flex justify-between border-b-2 border-b-gray-200 text-[18px] text-gray-500 ">
                                <p className="py-5">Activities</p>
                                {/* <p className="py-5">Date</p>
                                <p className="py-5">Time</p> */}
                            </div>
                            {activities.map((activity: any) => (
                                <div className="flex justify-between border-b-2 border-b-gray-200 py-3 ">
                                    <p className="py-5">{activity.activity}</p>
                                    <p className="py-5">{activity.date}</p>
                                    <p className="py-5">{activity.time}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className=" flex justify-start pb-8">
                        <Pagination
                            itemsPerPage={itemsPerPage}
                            totalCount={DummyActivitiesData.length}
                            onPageChange={fetchPaginatedContent}
                            maxPage={maxPage}
                        />
                    </div>
                </section>
                <section className="min-h-[10rem] min-w-[30rem] rounded-lg bg-white"></section>
            </main>
        </RequireAuthentication>
    )
}

export default StudentHome
