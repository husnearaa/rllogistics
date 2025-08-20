"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  activeButtonClass?: string;
  inactiveButtonClass?: string;
}

const CustomPagination2: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  activeButtonClass = "w-10 h-10 rounded-full bg-red-500 text-white font-medium flex items-center justify-center",
  inactiveButtonClass = "w-10 h-10 rounded-full text-gray-700 font-medium flex items-center justify-center bg-white hover:bg-gray-100 transition-colors",
}) => {
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  // Generate page numbers to display with ellipses logic
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5; // Number of page buttons to show (not including nav buttons)

    if (totalPages <= maxVisiblePages) {
      // If total pages is less than max visible, show all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always include first page
      pages.push(1);

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if we're at the beginning
      if (currentPage <= 3) {
        endPage = 4;
      }

      // Adjust if we're at the end
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push("...");
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push("...");
      }

      // Always include last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 px-8 py-4 rounded-lg">
      <button
        onClick={() => canGoPrevious && onPageChange(currentPage - 1)}
        disabled={!canGoPrevious}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
          canGoPrevious
            ? "text-red-500 bg-white hover:bg-red-500 hover:text-white border border-gray-200"
            : "text-gray-300 border border-gray-300 cursor-not-allowed"
        }`}
      >
        <ChevronLeft />
      </button>

      {/* Page numbers */}
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span
            key={`ellipsis-${index}`}
            className="w-10 h-10 flex items-center justify-center"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={
              page === currentPage ? activeButtonClass : inactiveButtonClass
            }
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => canGoNext && onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
          canGoNext
            ? "text-red-500 bg-white hover:bg-red-500 hover:text-white border border-gray-200"
            : "text-gray-300 border border-gray-300 cursor-not-allowed"
        }`}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default CustomPagination2;
