import { getAsset } from "@/utils";

export const studentKpiData = [
    {
        milestoneName: "Programs Completed",
        numberAchieved: 20,
        icon: getAsset("programs-complete.svg", "icons"),
    },
    {
        milestoneName: "Programs Currently Enrolled In",
        numberAchieved: 4,
        icon: getAsset("typing.svg", "icons"),
    },
    {
        milestoneName: "Certificates Recieved",
        numberAchieved: 13,
        icon: getAsset("certification.svg", "icons"),
    },
]