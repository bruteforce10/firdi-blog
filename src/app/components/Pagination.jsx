"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationSection = ({ page, hasNext, hasPrev }) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`?page=${page - 1}`} />
        </PaginationItem>
        {hasPrev && (
          <PaginationLink href={`?page=${page - 1}`}>{page - 1}</PaginationLink>
        )}
        <PaginationLink isActive={true} href={`?page=${page}`}>
          {page}
        </PaginationLink>
        {hasNext && (
          <PaginationLink href={`?page=${page + 1}`}>{page + 1}</PaginationLink>
        )}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`?page=${hasNext ? page + 1 : page}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
