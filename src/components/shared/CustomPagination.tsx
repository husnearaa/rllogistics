import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  activeButtonClass?: string;
  inactiveButtonClass?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  activeButtonClass = 'w-10 h-10 rounded-full bg-red-100 border-red-300 border text-black',
  inactiveButtonClass = 'w-8 h-8 rounded-full text-gray-700 transition-colors'
}) => {
  return (
    <div className="flex justify-center items-center gap-6">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? activeButtonClass : inactiveButtonClass}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;




// Usage Example:

// const [currentPage, setCurrentPage] = useState(2);

// <Pagination 
//   currentPage={currentPage}
//   totalPages={5}
//   onPageChange={(page) => setCurrentPage(page)}
// />
