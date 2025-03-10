"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, hasNext, hasPrev }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mt-16">
      <button
        className="w-[100px] border-none p-4 bg-red-500 text-white rounded-lg"
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className="w-[100px] border-none p-4 bg-red-500 text-white rounded-lg"
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
