import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}) => {
  return (
    <div className="flex items-center justify-center space-x-4 my-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
      >
        Previous
      </button>

      <span className="text-gray-700">
        Page {currentPage} of {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
