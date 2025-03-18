"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/constant/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const OptionSelect = () => {
  const [selected, setSelected] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleClickCategory = (value) => {
    params.set("page", 1);
    params.set("cat", value);
    setSelected(value);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleSort = (value) => {
    params.set("sort", value);
    params.set("page", 1);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className="flex gap-4">
        <Button
          variant={selected === "" ? "secondary" : "ghost"}
          onClick={() => handleClickCategory("")}
        >
          All
        </Button>
        {categories.map((item) => (
          <Button
            variant={selected === item.slug ? "secondary" : "ghost"}
            key={item._id}
            onClick={() => handleClickCategory(item.slug)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <Select onValueChange={handleSort}>
        <SelectTrigger className="w-[120px] max-md:hidden">
          <SelectValue placeholder="Short by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="desc">Newest</SelectItem>
            <SelectItem value="asc">Oldest</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default OptionSelect;
