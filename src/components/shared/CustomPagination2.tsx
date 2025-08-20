"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import type React from "react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  activeButtonClass?: string
  inactiveButtonClass?: string
}

const CustomPagination2: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  activeButtonClass = "w-10 h-10 rounded-full bg-red-500 text-white font-medium flex items-center justify-center",
  inactiveButtonClass = "w-10 h-10 rounded-full text-gray-700 font-medium flex items-center justify-center bg-white hover:bg-gray-100  transition-colors",
}) => {
  const canGoPrevious = currentPage > 1
  const canGoNext = currentPage < totalPages

  return (
    <div className="flex justify-center items-center gap-4 px-8 py-4 rounded-lg">
      <button
        onClick={() => canGoPrevious && onPageChange(currentPage - 1)}
        disabled={!canGoPrevious}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
          canGoPrevious ? "text-red-500 bg-white hover:bg-primary hover:text-white" : "text-gray-300 cursor-not-allowed"
        }`}
      >
       <ChevronLeft />
      </button>

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? activeButtonClass : inactiveButtonClass}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => canGoNext && onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
          canGoNext ? "text-red-500 bg-white hover:bg-primary hover:text-white" : "text-gray-300 cursor-not-allowed"
        }`}
      >
        <ChevronRight />
      </button>
    </div>
  )
}

export default CustomPagination2
