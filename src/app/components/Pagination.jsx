import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-16">
      <button className="w-[100px] border-none p-4 bg-red-500 text-white rounded-lg">Previous</button>
      <button className="w-[100px] border-none p-4 bg-red-500 text-white rounded-lg">Next</button>
    </div>
  );
};

export default Pagination;
