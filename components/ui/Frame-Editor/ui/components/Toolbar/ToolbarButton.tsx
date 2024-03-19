import React from "react"

interface IToolbarButtonProps {
    label: string
    onClick: Function
}

export const ToolbarButton = (props: IToolbarButtonProps) => {
    const { label, onClick } = props

    return (
        <button
            className="border-primary text-primary hover:shadow-toolbar_button appearance-nonetext-center  box-border cursor-pointer rounded-md border bg-transparent px-10 py-2 text-center text-sm font-normal no-underline transition-all duration-300 ease-in-out hover:text-white hover:outline-0 "
            onClick={() => onClick()}
        >
            {label}
        </button>
    )
}
