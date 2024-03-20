import React, { useState, useEffect } from "react"

interface PaginationProps {
    onPageChange: Function
    totalCount: number
    itemsPerPage: number
    maxPage: number
}
const Pagination = ({ onPageChange, totalCount, itemsPerPage, maxPage }: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(totalCount / itemsPerPage)

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            setCurrentPage(page)
            onPageChange(page)
        }
    }

    useEffect(() => {
        // Reset to the first page when totalCount changes
        setCurrentPage(1)
    }, [totalCount])

    const renderPagination = () => {
        const pages = []
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`mx-1 px-3  ${i === currentPage ? "bg-gray-200 text-black" : "bg-white shadow-md"} rounded`}
                >
                    {i}
                </button>,
            )
        }
        return pages
    }

    return (
        <div className="mt-4 flex justify-center">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`mx-1 rounded bg-white px-4 py-[2px] ${currentPage === 1 ? "text-gray-200" : "text-black"}`}
            >
                Previous
            </button>
            {renderPagination()}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`mx-1 rounded bg-white px-4 py-[2px] ${currentPage === totalPages ? "text-gray-200" : "text-black"}`}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination
