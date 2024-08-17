import FilterCmp from "@/components/FilterCmp";
import LocalSearchBar from "@/components/LocalSearchBar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import HomeFilters from "./_components/HomeFilters";

const filters = [
  { label: "Newest" },
  { label: "Recommended" },
  { label: "Frequent" },
  { label: "Unanswered" },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold font-bold text-3xl ">All Questions</h1>
        <Link href={`/ask-question`} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between items-center gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar></LocalSearchBar>
        <FilterCmp
          filters={HomePageFilters}
          otherClasses="min-h-[44px] sm:min-w-[170px] flex items-center"
          containerClasses="hidden max-md:flex"
        ></FilterCmp>
      </div>
      <HomeFilters/>
    </>
  );
};

export default Home;
