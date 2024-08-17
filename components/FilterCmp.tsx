"use client";
import React from "react";
import RenderTag from "./RenderTag";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { IFilterOptions } from "@/constants/filters";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  containerClasses?: String;
}

const FilterCmp: React.FC<Props> = ({
  filters,
  otherClasses,
  containerClasses,
}) => {
  return (
    <div className={`relative  ${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`${otherClasses}   bg-zinc-200/40 dark:bg-zinc-800 rounded-md border px-5 py-2.5 `}
        >
          <div className="line-clamp-1 flex-1 text-left text-muted-foreground">
            <SelectValue placeholder="Select a Filter" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((item) => (
              <SelectItem key={item.value} value={item.value} >{item.name}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterCmp;
