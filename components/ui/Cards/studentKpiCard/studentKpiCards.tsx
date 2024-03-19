import { StaticImageData } from "next/image"
import Image from "next/image"

interface studentKpiData {
    milestoneName: string
    numberAchieved: number
    icon: StaticImageData | string
}

const StudentKpiCards = ({ milestoneName, numberAchieved, icon }: studentKpiData) => {
    return (
        <div className="flex h-[15rem] w-[22rem] flex-col justify-between rounded-lg bg-white xl:w-[24rem]">
            <div className="p-6">
                <p className="text-lg text-gray-500">{milestoneName}</p>
            </div>
            <div className="flex items-center justify-between px-6">
                <p className="text-md flex h-12 w-12 items-center justify-center rounded-[100%] bg-[#2dad00] font-semibold text-white">
                    {numberAchieved}
                </p>
                <Image src={icon} alt={"number of " + milestoneName} width={120} height={120} />
            </div>
        </div>
    )
}
export default StudentKpiCards
