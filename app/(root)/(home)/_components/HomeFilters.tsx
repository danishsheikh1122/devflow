"use client";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { useSearchParams } from "next/navigation";
import React from "react";

const HomeFilters = () => {
  // const searchParams = useSearchParams();
  // const active = `${searchParams.get("value")}`;
  const active = "newest";
  return (
    <div className="mt-10 flex-wrap gap-3 md:flex hidden ">
      {HomePageFilters.map((filter) => (
        <Button
          className={`rounded-lg px-6 py-3 capitalize shano-none ${
            active === filter.value
              ? "text-orange-500 bg-transparent border"
              : "bg-slate-200/40 hover:bg-transparent text-muted-foreground dark:bg-zinc-800 dark:hover:bg-transparent"
          }`}
          key={filter.value}
          onClick={() => {}}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
