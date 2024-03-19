import StudentKpiCards from "./studentKpiCards";
import { studentKpiData } from "./data";

const StudentKpiCard = () => {
    return (
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
            {studentKpiData.map((item, index) => (
                <StudentKpiCards milestoneName={item.milestoneName} numberAchieved={item.numberAchieved} icon={item.icon}/>
            ))}
        </div>
    )
}
export default StudentKpiCard;