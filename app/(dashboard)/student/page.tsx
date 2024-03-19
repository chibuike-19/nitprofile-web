import { RequireAuthentication } from "@/components/middlewares"
import React from "react"
import StudentKpiCard from "@/components/ui/Cards/studentKpiCard"

const StudentHome = () => {
    return <RequireAuthentication>
        <StudentKpiCard/>
    </RequireAuthentication>
}

export default StudentHome
