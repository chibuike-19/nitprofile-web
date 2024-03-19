import { IBaseModalProps, ModalLayout } from "./ModalLayout"
import { MdCancel } from "react-icons/md"
import { programsData } from "./data"
interface IProgramsModalProps extends IBaseModalProps {
    createProgram: Function
}

export const ProgramsModal = (props: IProgramsModalProps) => {
    const { modalIsMounted, handleClose, createProgram } = props

    return (
        <ModalLayout isMounted={modalIsMounted} onClose={handleClose}>
            <div className=" px-8 py-10">
                <div className="flex items-center justify-between pb-6">
                    <h2 className="text-primary-dark text-md text-center font-semibold">Select a Program</h2>

                    <MdCancel size={40} />
                </div>
                <hr />
                <div onClick={() => createProgram()}>
                    {programsData.map((item) => (
                        <div key={item.programId} className="mb-2 w-full border-2 border-t-[#2dad00] bg-white p-4">
                            <p>{item.programeName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </ModalLayout>
    )
}
