import { useSceneLogic } from "./hooks"
import { Toolbar } from "@frame-editor/ui/components/Toolbar"
import NextImage from "next/image"
import { useAppSelector } from "@/state_management"

export const FrameEditor = () => {
    const { canvas, handleCreateNode, imageRef, saves } = useSceneLogic()

    const { editorBackground } = useAppSelector((state) => state.editorSlice)

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-between gap-4 overflow-hidden bg-white px-8 py-8">
            <div className="flex h-full w-full basis-[85%] justify-center rounded-md bg-[#ededee] p-5">
                <div className="relative">
                    <NextImage
                        width={300}
                        height={300}
                        ref={imageRef}
                        src={editorBackground ?? ""}
                        alt="Frame Background"
                        className="h-full w-full"
                    />
                    <div className="absolute left-0 top-0">
                        <canvas id="frame_editor" />
                    </div>
                </div>
            </div>

            {canvas && (
                <div className="w-full max-w-[95%] basis-[20%] overflow-scroll rounded-md  bg-[#ededee] p-2">
                    <Toolbar create_node={handleCreateNode} />
                </div>
            )}
        </div>
    )
}
